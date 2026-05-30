"use client";
import { useMutation } from "@tanstack/react-query";

export function useLeadActions(leadId: number) {
  const { mutate: takeover, isPending: isTakingOverPending } = useMutation({
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

  const { mutate: enableAI, isPending: isEnablingAIPending } = useMutation({
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

  const { mutate: closeLead, isPending: isClosingLeadPending } = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `/api/leads/${leadId}/close`,

        {
          method: "POST",
        },
      ).then((res) => res.json());
      console.log("Close lead response:", res);
      if (!res.ok) {
        throw new Error("Close lead failed");
      }

      return res.json();
    },
  });

  return {
    takeover,
    enableAI,
    closeLead,

    isTakingOverPending,
    isEnablingAIPending,
    isClosingLeadPending,
  };
}
