"use client";
import React from "react";
import styles from "./AdminForm.module.css";
import { useFormState } from "react-dom";
import { addCandidate } from "@/lib/action";

export default async function AdminForm() {
  const [state, formAction] = useFormState(addCandidate, undefined);
  return (
    <div>
      <form className={styles.form} action={formAction}>
        <div className={styles.title}>Add Candidate</div>
        <div>
          <input
            type="text"
            name="candidate_name"
            placeholder="Candidate Name"
            required
          />
        </div>
        <div>
          <input type="text" name="img" placeholder="Image" required />
        </div>
        <div>
          <input type="text" name="party" placeholder="Party" required />
        </div>
        <div>
          <textarea
            rows={5}
            cols={50}
            placeholder="Description"
            name="description"
            required
          />
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </form>
    </div>
  );
}
