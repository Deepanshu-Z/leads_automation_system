"use client";

import { useLeadActions } from "@/lib/hooks/leads/useLeadActions";

export default function LeadActions({ leadId }: any) {
  const {
    takeover,
    enableAI,
    closeLead,
    isTakingOverPending,
    isEnablingAIPending,
    isClosingLeadPending,
  } = useLeadActions(leadId);

  return (
    <div
      className="
        mt-4
        flex
        flex-col
        gap-2
      "
    >
      <button
        onClick={() => takeover()}
        disabled={isTakingOverPending}
        className="
          bg-orange-500
          text-white
          p-3
          rounded
        "
      >
        {isTakingOverPending ? "Loading..." : "Take Over"}
      </button>

      <button
        onClick={() => enableAI()}
        disabled={isEnablingAIPending}
        className="
          bg-green-500
          text-white
          p-3
          rounded
        "
      >
        {isEnablingAIPending ? "Loading..." : "Re-enable AI"}
      </button>

      <button
        onClick={() => closeLead()}
        disabled={isClosingLeadPending}
        className="
          bg-red-500
          text-white
          p-3
          rounded
        "
      >
        {isClosingLeadPending ? "Loading..." : "Mark Closed"}
      </button>
    </div>
  );
}
