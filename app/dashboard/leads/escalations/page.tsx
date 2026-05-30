"use client";

import EscalationTable from "@/components/escalation/EscalationTable";
import { useEscalations } from "@/lib/hooks/escalations/useEscalation";

export default function EscalationsPage() {
  const { data, isLoading } = useEscalations();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1
        className="
          text-2xl
          font-bold
          mb-6
        "
      >
        Escalation Queue
      </h1>

      <EscalationTable escalations={data} />
    </div>
  );
}
