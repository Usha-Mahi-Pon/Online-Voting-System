import Image from "next/image";
import styles from "./result.module.css";
import { getPosts } from "@/lib/data";
import Sparkles from "@/components/Sparkles/Sparkles";

export default async function Result() {
  const posts = await getPosts();

  // Define the target date and time (year, month, day, hour, minute, second)
  const targetDate = new Date("2024-07-15T12:00:00Z"); // Example: July 15, 2024, 12:00:00 UTC

  // Get the current date and time
  const currentDate = new Date();

  // Compare current date with the target date
  const showResults = currentDate >= targetDate;

  if (!showResults) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Results will be announced soon!</div>
        <div className={styles.message}>
          Please check back after {targetDate.toLocaleString()}.
        </div>
      </div>
    );
  }

  const count = posts.map((post) => post.count);
  const max = Math.max.apply(null, count);
  const array = posts.filter((post) => post.count === max);

  return (
    <div className={styles.container}>
      <Sparkles />
      <div className={styles.title}>Congratulations to the Winner!</div>
      {array.map((item, index) => (
        <div key={index} className={styles.box}>
          <div>
            <Image
              src={item.img}
              height={300}
              width={300}
              alt="Candidate_Symbol"
              className={styles.image}
            />
          </div>
          <div className={styles.textcontainer}>
            <p>
              <strong>{item.candidate_name}</strong> received
              <strong> {item.count} votes</strong> and has been chosen as the
              winner!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
