"use client";

import { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ConversationView from "@/components/leads/ConversationView";
import LeadActions from "@/components/leads/LeadAction";
import LeadInfoCard from "@/components/leads/LeadInfoCard";
import SendMessageBox from "@/components/leads/SendMessage";
import { useLead } from "@/lib/hooks/leads/useLead";
import { useLeadMessages } from "@/lib/hooks/leads/useLeadMessage";
import { ArrowLeft, MessageSquare, Bot, UserCheck, Clock } from "lucide-react";

export default function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);
  const { data: lead } = useLead(id);
  const { data: messages } = useLeadMessages(id);

  if (!lead) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm text-muted-foreground font-medium">Retrieving chat ledger...</p>
        </div>
      </div>
    );
  }

  const isAiControlled = lead.status !== "ESCALATED" && lead.status !== "CLOSED";

  return (
    <div className="space-y-4 animate-in fade-in duration-200 max-w-6xl mx-auto">
      {/* BACK NAVIGATION BAR */}
      <div className="flex items-center justify-between pb-2 border-b border-border">
        <button
          onClick={() => router.push("/dashboard/leads")}
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Inbox</span>
        </button>

        {/* Current status flag banner */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium">Control Mode:</span>
          {isAiControlled ? (
            <span className="inline-flex items-center gap-1 bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Bot size={12} />
              AI Bot Active
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <UserCheck size={12} />
              Human Overseer
            </span>
          )}
        </div>
      </div>

      {/* THREE PANES GRID SYSTEM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Profile Card and Executive takeover buttons */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <LeadInfoCard lead={lead} />
          <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Executive Controls</h3>
            <LeadActions leadId={lead.id} />
          </div>
        </div>

        {/* Messaging Box and Conversation Stream */}
        <div className="lg:col-span-8 flex flex-col">
          <ConversationView messages={messages} />
          <SendMessageBox leadId={lead.id} />
        </div>
      </div>
    </div>
  );
}
