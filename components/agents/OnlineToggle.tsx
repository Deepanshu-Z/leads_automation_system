"use client";

import { useToggleAgentStatus } from "@/lib/hooks/agents/useToggleAgentStatus";

export default function OnlineToggle({ agentId }: { agentId: number }) {
  const toggle = useToggleAgentStatus();

  return <button onClick={() => toggle.mutate(agentId)}>Toggle</button>;
}
