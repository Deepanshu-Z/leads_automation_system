"use client";
import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    const fetchData = async () => {
      // const res = await fetch("/api/testing/leads").then((res) => res.json());
      // console.log("Leads Data:", res);
      // const queue = await fetch("/api/testing/test-queue").then((res) =>
      //   res.json(),
      // );
      // console.log("Queue Status:", queue);
      // const res = await fetch(`/api/testing/python`, {
      //   method: "POST",
      // }).then((res) => res.json());
      // console.log(res);
    };
    fetchData();
  }, []);
  return <div>page</div>;
}
