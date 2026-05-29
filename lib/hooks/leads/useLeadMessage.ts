"use client";
import { useQuery } from "@tanstack/react-query";

export function useLeadMessages(leadId: string) {
  return useQuery({
    queryKey: ["lead-messages", leadId],

    queryFn: async () => {
      const res = await fetch(`/api/leads/${leadId}/messages`);

      if (!res.ok) {
        throw new Error("Failed to fetch messages");
      }

      const data = await res.json();

      return data;
    },

    refetchInterval: 5000,
  });
}
