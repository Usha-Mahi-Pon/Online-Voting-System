"use client";
import Link from "next/link";
import styles from "./registerform.module.css";
import { register } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Registerform() {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.register}>Register</div>
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
        <label>Email: </label>
        <input type="email" name="email" placeholder="Enter Email" required />
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
        <label>Re-Password: </label>
        <input
          type="password"
          name="passwordRepeat"
          placeholder="Re-enter Password"
          required
        />
      </div>
      <div>
        <button>Register</button>
      </div>
      {state?.error}
      <Link href="/login" className={styles.link}>
        {"Already have an account?  "}
        <b>Log in</b>
      </Link>
    </form>
  );
}
