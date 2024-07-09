import React from "react";
import styles from "./AdminPost.module.css";
import { deletePost } from "@/lib/action";

export default function AdminPost({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className={styles.textcontainer}>
          <div className={styles.left}>
            <div>
              <p style={{ marginLeft: "20px" }}>{post.candidate_name}</p>
            </div>
            <form className={styles.btn} action={deletePost}>
              <input type="hidden" value={post?._id} name="id" />
              <button>Delete</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
