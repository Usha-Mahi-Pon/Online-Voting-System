import React from "react";
import styles from "./admin.module.css";
import { getPosts } from "@/lib/data";
import AdminPost from "@/components/AdminPost/AdminPost";
import AdminForm from "@/components/AdminForm/AdminForm";

export default async function Admin() {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <AdminPost posts={posts} />
      </div>
      <div className={styles.form}>
        <AdminForm />
      </div>
    </div>
  );
}
