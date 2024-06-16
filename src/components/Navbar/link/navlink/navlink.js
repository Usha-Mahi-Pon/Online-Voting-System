"use client";
import { usePathname } from "next/navigation";
import styles from "./navlink.module.css";
import Link from "next/link";
export default function Navlink({ param }) {
  const path = usePathname();
  return (
    <Link
      href={param.path}
      className={`${styles.container} ${path === param.path && styles.active}`}
    >
      {param.title}
    </Link>
  );
}
