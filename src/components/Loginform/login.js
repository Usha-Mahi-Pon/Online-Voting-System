import Link from "next/link";
import styles from "./login.module.css";

export default function Loginform() {
  return (
    <form className={styles.form}>
      <div className={styles.txt}>Login</div>
      <div>
          <label>Email: </label>
          <input type="text" name="name" placeholder="Enter Email" />
      </div>
      <div>
          <label>Password: </label>
          <input type="password" name="password" placeholder="Enter Password" />
      </div>
      <div><button>Log in</button></div>
      <Link href="/register" className={styles.link}>
        {"Don't have an account?  "}
        <b>Register</b>
      </Link>
    </form>
  );
}
