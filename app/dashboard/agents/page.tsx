"use client";

import { useSession } from "next-auth/react";
import CreateAgentForm from "@/components/agents/CreateAgentForm";
import { useAgents } from "@/lib/hooks/agents/useAgents";
import AgentTable from "@/components/agents/AgentTable";

export default function AgentsPage() {
  const { data: session } = useSession();
  const { data: agents = [], isLoading, error } = useAgents();

  if (session?.user?.role !== "ADMIN") {
    return (
      <div className="p-6 text-center text-rose-500 font-semibold bg-rose-500/10 border border-rose-500/20 rounded-xl">
        Access Denied: You do not possess the required administrator privileges.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm text-muted-foreground font-medium">Assembling active agents directories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-rose-500 font-semibold bg-rose-500/10 border border-rose-500/20 rounded-xl">
        Failed to fetch system agents record. Please try again.
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div>
        <CreateAgentForm />
      </div>

      <div className="space-y-2">
        <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Active Executives Ledger</h2>
        <AgentTable agents={agents} />
      </div>
    </div>
  );
}
