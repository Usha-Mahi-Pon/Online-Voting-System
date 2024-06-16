import Links from "./link/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Online Voting System</div>
      <div>
        <Links />
      </div>
    </div>
  );
}
