import Image from "next/image";
import React from "react";
import styles from "./postCard.module.css";
export const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src={post && post.img}
          height={400}
          width={400}
          className={styles.image}
        />
      </div>
      <div className={styles.textcontainer}>
        <div>Candidate Name : {post.candidate_name}</div>
        <div>Party : {post.party}</div>
        <div className={styles.desc}>{post.description}</div>
      </div>
    </div>
  );
};
