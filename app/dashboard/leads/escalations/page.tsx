"use client";

import EscalationTable from "@/components/escalation/EscalationTable";
import { useEscalations } from "@/lib/hooks/escalations/useEscalation";

export default function EscalationsPage() {
  const { data = [], isLoading } = useEscalations();

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm text-muted-foreground font-medium">Assembling escalation logs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="space-y-2">
        <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Escalated Leads Queue</h2>
        <EscalationTable escalations={data} />
      </div>
    </div>
  );
}
