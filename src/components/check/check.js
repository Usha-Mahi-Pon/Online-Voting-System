"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Check({ count }) {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      if (count >= 1) {
        router.push("/");
      }
    }, 1000);
  }, []);
  return <div></div>;
}
