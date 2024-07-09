import Image from "next/image";
import styles from "./result.module.css";
import { getPosts } from "@/lib/data";
import Sparkles from "@/components/Sparkles/Sparkles";

export default async function Result() {
  const posts = await getPosts();
  const count = posts.map((post) => post.count);
  const max = Math.max.apply(null, count);
  const array = posts.filter((post) => post.count === max);
  console.log(posts);
  console.log(array);
  return (
    <div>
      <Sparkles />
      <div className={styles.title}>
        <h2>Winner:</h2>
      </div>
      {array.map((item, index) => (
        <div key={index} className={styles.result}>
          <div className={styles.img}>
            <Image
              src={item.img}
              height={300}
              width={300}
              alt={item.candidate_name}
            />
          </div>
          <div>
            <p>
              <strong>{item.candidate_name}</strong> received{" "}
              <strong>{item.count} votes</strong> and has been chosen as the
              winner!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
