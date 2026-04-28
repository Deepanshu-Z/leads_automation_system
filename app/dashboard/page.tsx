"use client";
import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/leads`).then((res) => res.json());
      console.log("Leads Data:", res);

      const queue = await fetch("/api/test-queue").then((res) => res.json());
      console.log("Queue Status:", queue);
    };
    fetchData();
  }, []);
  return <div>page</div>;
}
