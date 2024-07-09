"use client";
import Image from "next/image";
import styles from "./votingForm.module.css";
import { voteCount } from "@/lib/action";
import { useFormState } from "react-dom";

export default function VotingForm({ posts }) {
  const [state, formAction] = useFormState(voteCount, undefined);
  return (
    <div>
      {!state?.success ? (
        <div>
          <div className={styles.head}>
            Vote For Your <br />
            Favourite Pokemon Character!!!
          </div>
          <form className={styles.form} action={formAction}>
            <div className={styles.head}>Pokemon Trainer League</div>
            {posts.map((post, index) => (
              <div key={post.id || index} className={styles.container}>
                <div className={styles.imgcontainer}>
                  <Image
                    src={post.img}
                    height={60}
                    width={60}
                    alt="symbol"
                    className={styles.img}
                  />
                </div>
                <div className={styles.data}>
                  <input
                    type="radio"
                    value={post.candidate_name}
                    name="candidate_name"
                    id={post.candidate_name}
                  />
                  <label htmlFor={post.candidate_name}>
                    {post.candidate_name}
                  </label>
                </div>
              </div>
            ))}
            <div>
              <button className={styles.btn}>Vote</button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div className={styles.tq}>Thank you for Voting!</div>
        </div>
      )}
    </div>
  );
}
