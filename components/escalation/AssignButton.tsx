"use client";

import { useAssignEscalation } from "@/lib/hooks/escalations/useAssignEscalation";

export default function AssignButton({ escalationId }: any) {
  const assign = useAssignEscalation();

  return (
    <button
      onClick={() => assign.mutate(escalationId)}
      className="
        bg-blue-500
        text-white
        px-3
        py-1
        rounded
      "
    >
      Assign To Me
    </button>
  );
}
