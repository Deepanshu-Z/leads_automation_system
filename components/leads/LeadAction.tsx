"use client";

import { useLeadActions } from "@/lib/hooks/leads/useLeadActions";
import { UserCheck, Bot, XCircle, Loader2 } from "lucide-react";

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
        gap-3
      "
    >
      <button
        onClick={() => takeover()}
        disabled={isTakingOverPending}
        className="
          w-full
          flex
          items-center
          justify-center
          gap-2
          px-4
          py-2.5
          rounded-xl
          bg-amber-500
          hover:bg-amber-600
          text-white
          font-semibold
          text-sm
          transition-all
          active:scale-98
          disabled:opacity-50
          shadow-sm
          shadow-amber-500/10
        "
      >
        {isTakingOverPending ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <UserCheck size={16} />
        )}
        <span>{isTakingOverPending ? "Taking Over..." : "Take Over Chat"}</span>
      </button>

      <button
        onClick={() => enableAI()}
        disabled={isEnablingAIPending}
        className="
          w-full
          flex
          items-center
          justify-center
          gap-2
          px-4
          py-2.5
          rounded-xl
          bg-emerald-600
          hover:bg-emerald-700
          text-white
          font-semibold
          text-sm
          transition-all
          active:scale-98
          disabled:opacity-50
          shadow-sm
          shadow-emerald-600/10
        "
      >
        {isEnablingAIPending ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Bot size={16} />
        )}
        <span>{isEnablingAIPending ? "Enabling..." : "Re-enable AI bot"}</span>
      </button>

      <button
        onClick={() => closeLead()}
        disabled={isClosingLeadPending}
        className="
          w-full
          flex
          items-center
          justify-center
          gap-2
          px-4
          py-2.5
          rounded-xl
          bg-rose-600
          hover:bg-rose-700
          text-white
          font-semibold
          text-sm
          transition-all
          active:scale-98
          disabled:opacity-50
          shadow-sm
          shadow-rose-600/10
        "
      >
        {isClosingLeadPending ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <XCircle size={16} />
        )}
        <span>{isClosingLeadPending ? "Closing..." : "Mark Lead Closed"}</span>
      </button>
    </div>
  );
}
