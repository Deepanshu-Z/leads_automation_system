"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/leads");

      const data = await response.json();

      console.log(data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>TEST YOUR ALL ROUTES</p>
    </div>
  );
}
