"use client";

import { useLeadActions } from "@/lib/hooks/leads/useLeadActions";

export default function LeadActions({ leadId }: any) {
  const { takeover, enableAI, closeLead } = useLeadActions(leadId);

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
        onClick={takeover}
        className="
          bg-orange-500
          text-white
          p-3
          rounded
        "
      >
        Take Over
      </button>

      <button
        onClick={enableAI}
        className="
          bg-green-500
          text-white
          p-3
          rounded
        "
      >
        Re-enable AI
      </button>

      <button
        onClick={closeLead}
        className="
          bg-red-500
          text-white
          p-3
          rounded
        "
      >
        Mark Closed
      </button>
    </div>
  );
}
