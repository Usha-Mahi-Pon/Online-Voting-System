import Link from "next/link";
import Links from "./link/link";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";

export default async function Navbar() {
  const session = await auth();
  console.log("object", session);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Online Voting System</Link>
      </div>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
}
