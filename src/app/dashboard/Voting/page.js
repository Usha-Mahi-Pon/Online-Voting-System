import VotingForm from "@/components/votingForm/votingForm";
import styles from "./voting.module.css";
import { getPosts, getUser } from "@/lib/data";
import Check from "@/components/check/check";
import { auth } from "@/lib/auth";

export default async function Voting() {
  const posts = await getPosts();
  const session = await auth();
  const user = await getUser(session?.user?.id);
  return (
    <div className={styles.vote}>
      <VotingForm posts={posts} />
      <Check count={user.count} />
    </div>
  );
}
