"use client";

import { useToggleAgentStatus } from "@/lib/hooks/agents/useToggleAgentStatus";
import { Power, Loader2 } from "lucide-react";

export default function OnlineToggle({ agentId, isOnline }: { agentId: number; isOnline: boolean }) {
  const toggle = useToggleAgentStatus();

  return (
    <button
      onClick={() => toggle.mutate(agentId)}
      disabled={toggle.isPending}
      className={`
        inline-flex
        items-center
        gap-1.5
        px-2.5
        py-1
        rounded-lg
        text-[10px]
        font-bold
        uppercase
        tracking-wider
        transition-all
        active:scale-95
        disabled:opacity-50
        cursor-pointer
        border
        ${
          isOnline
            ? "bg-rose-500/10 text-rose-500 border-rose-500/20 hover:bg-rose-500/20"
            : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/20"
        }
      `}
    >
      {toggle.isPending ? (
        <Loader2 size={11} className="animate-spin" />
      ) : (
        <Power size={11} />
      )}
      <span>{isOnline ? "Go Offline" : "Go Online"}</span>
    </button>
  );
}
