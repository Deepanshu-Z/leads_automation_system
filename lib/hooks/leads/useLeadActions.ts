"use client";
import { useMutation } from "@tanstack/react-query";

export function useLeadActions(leadId: number) {
  const takeover = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `/api/leads/${leadId}/takeover`,

        {
          method: "POST",
        },
      );

      if (!res.ok) {
        throw new Error("Takeover failed");
      }

      return res.json();
    },
  });

  const enableAI = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `/api/leads/${leadId}/reenable-ai`,

        {
          method: "POST",
        },
      );

      if (!res.ok) {
        throw new Error("Enable AI failed");
      }

      return res.json();
    },
  });

  const closeLead = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `/api/leads/${leadId}/close`,

        {
          method: "POST",
        },
      );

      if (!res.ok) {
        throw new Error("Close lead failed");
      }

      return res.json();
    },
  });

  return {
    takeover: () => takeover.mutate(),

    enableAI: () => enableAI.mutate(),

    closeLead: () => closeLead.mutate(),
  };
}
