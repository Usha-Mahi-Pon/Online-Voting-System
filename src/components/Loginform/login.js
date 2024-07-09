"use client";
import Link from "next/link";
import styles from "./login.module.css";
import { login } from "@/lib/action";
import { useFormState } from "react-dom";

export default function Loginform() {
  const [state, formAction] = useFormState(login, undefined);
  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.login}>Login</div>
      <div>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          required
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
      </div>
      <div>
        <button>Log in</button>
      </div>
      <Link href="/register" className={styles.link}>
        {"Don't have an account?  "}
        <b>Register</b>
      </Link>
    </form>
  );
}
