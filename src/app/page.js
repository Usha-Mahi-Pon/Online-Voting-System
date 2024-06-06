import Image from "next/image";
import styles from "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <div class="navbar">
        <Link href="/">Home</Link>
        <Link href="/dash">Dashboard</Link>
        <Link href="/results">Results</Link>
        <Link href="/login">Login</Link>
      </div>
      <div class="container">
            <h1>Vote for the right</h1>
            <p></p>
            </div>
        </div>
);
}

