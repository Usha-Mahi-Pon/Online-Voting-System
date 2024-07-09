import { getPosts, getUser } from "@/lib/data";
import Image from "next/image";
import styles from "./dashboard.module.css";
import { PostCard } from "@/components/postCard/postCard";
import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function Dashboard() {
  const posts = await getPosts();
  const session = await auth();
  const user = await getUser(session?.user?.id);
  console.log(user.count);
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
          Pokémon World Championship 2024 - Kanto Region
        </div>
        <div style={{ textAlign: "center" }}>
          <p>
            The annual championship to determine the best Pokémon trainer in the
            Kanto region.
          </p>
          <p>August 2024 (Exact dates to be announced)</p>
        </div>
        <div>
          {user?.count >= 1 ? (
            <div className={styles.voted}>You have already voted🎉🥁</div>
          ) : (
            <Link href="/dashboard/Voting" className={styles.vote}>
              Click to Vote
            </Link>
          )}
        </div>
      </div>
      <div className={styles.container}>
        {posts.map((post, index) => (
          <PostCard key={post.id || index} post={post} />
        ))}
      </div>
    </div>
  );
}
