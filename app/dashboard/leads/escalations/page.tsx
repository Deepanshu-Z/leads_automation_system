"use client";

import EscalationTable from "@/components/escalation/EscalationTable";
import { useEscalations } from "@/lib/hooks/escalations/useEscalation";
import { useEffect } from "react";

export default function EscalationsPage() {
  const { data, isLoading } = useEscalations();
  useEffect(() => {
    console.log(data);
    console.log(Array.isArray(data));
  }, [data]);
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
