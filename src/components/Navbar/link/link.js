"use client";
import Link from "next/link";
import styles from "./link.module.css";
import { usePathname } from "next/navigation";
import Navlink from "./navlink/navlink";
import { useState } from "react";
import { handleLogOut } from "@/lib/action";

export default function Links({ session }) {
  const [open, setOpen] = useState(false);
  const links = [
    { title: "Home", path: "/" },
    { title: "Dashboard", path: "/dashboard" },
    { title: "Result", path: "/result" },
  ];
  return (
    <div>
      <div className={styles.container}>
        {links.map((item) => {
          return <Navlink param={item} key={item.title} />;
        })}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <Navlink param={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogOut}>
              <button className={styles.btn}>Logout</button>
            </form>
          </>
        ) : (
          <Navlink param={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <svg
        className={styles.menuButton}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        style={{
          width: "24px",
          height: "24px",
          strokeWidth: "1.5px",
          cursor: "pointer",
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          style={{ stroke: "currentColor" }}
        />
      </svg>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((item) => {
            return <Navlink param={item} key={item.title} />;
          })}
        </div>
      )}
    </div>
  );
}
