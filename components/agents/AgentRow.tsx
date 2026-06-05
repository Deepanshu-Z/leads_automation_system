import AgentStatusBadge from "./AgentStatusBadge";
import OnlineToggle from "./OnlineToggle";
import PerformanceCard from "./PerformanceCard";

type Props = {
  agent: any;
};

export default function AgentRow({ agent }: Props) {
  return (
    <tr className="border-b">
      <td className="p-3">{agent.name}</td>

      <td className="p-3">{agent.email}</td>

      <td className="p-3">{agent.role}</td>

      <td className="p-3">
        <AgentStatusBadge online={agent.isOnline} />
      </td>

      <td className="p-3">{agent.activeEscalations}</td>

      <td className="p-3">
        <PerformanceCard
          leadsHandled={agent.leadsHandled}
          activeEscalations={agent.activeEscalations}
          escalationsResolved={agent.escalationsResolved}
          avgResolutionTime={agent.avgResolutionTime}
        />
      </td>

      <td className="p-3">
        <OnlineToggle agentId={agent.id} />
      </td>
    </tr>
  );
}
