"use client";

import { useSession } from "next-auth/react";

import CreateAgentForm from "@/components/agents/CreateAgentForm";
import { useAgents } from "@/lib/hooks/agents/useAgents";
import AgentTable from "@/components/agents/AgentTable";

export default function AgentsPage() {
  const { data: session, status } = useSession();
  const { data: agents = [], isLoading, error } = useAgents();

  if (session?.user?.role !== "ADMIN") {
    return <div className="p-6">Access Denied</div>;
  }

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  if (error) {
    return <div className="p-6">Failed to load agents</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1
          className="
            text-3xl
            font-bold
            mb-4
          "
        >
          Agent Management
        </h1>

        <CreateAgentForm />
      </div>

      <AgentTable agents={agents} />
    </div>
  );
}
