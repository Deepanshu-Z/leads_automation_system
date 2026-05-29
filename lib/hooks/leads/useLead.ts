"use client";
import { useQuery } from "@tanstack/react-query";

export function useLead(leadId: string) {
  console.log("YOUR LEAD ID IS : ", leadId);
  return useQuery({
    queryKey: ["lead", leadId],

    queryFn: async () => {
      const res = await fetch(`/api/leads/${leadId}`);

      if (!res.ok) {
        throw new Error("Failed to fetch lead");
      }

      const data = await res.json();
      return data;
    },
  });
}
