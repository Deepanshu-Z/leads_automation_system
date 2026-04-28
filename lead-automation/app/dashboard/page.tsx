"use client";
import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/leads`);
      console.log(res);
    };
    fetchData();
  }, []);
  return <div>page</div>;
}
