import AgentStatusBadge from "./AgentStatusBadge";
import OnlineToggle from "./OnlineToggle";
import PerformanceCard from "./PerformanceCard";

type Props = {
  agent: any;
};

export default function AgentRow({ agent }: Props) {
  const isAdmin = agent.role === "ADMIN";

  return (
    <tr className="hover:bg-muted/40 transition-colors duration-150 border-b border-border">
      <td className="px-6 py-4 font-semibold text-foreground">{agent.name}</td>

      <td className="px-6 py-4 text-muted-foreground font-medium text-xs">{agent.email}</td>

      <td className="px-6 py-4">
        <span
          className={`
            px-2
            py-0.5
            rounded-md
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            border
            ${
              isAdmin
                ? "bg-purple-500/10 text-purple-500 border-purple-500/20"
                : "bg-blue-500/10 text-blue-500 border-blue-500/20"
            }
          `}
        >
          {agent.role}
        </span>
      </td>

      <td className="px-6 py-4">
        <AgentStatusBadge online={agent.isOnline} />
      </td>

      <td className="px-6 py-4 font-bold text-foreground text-xs">{agent.activeEscalations}</td>

      <td className="px-6 py-4">
        <PerformanceCard
          leadsHandled={agent.leadsHandled}
          activeEscalations={agent.activeEscalations}
          escalationsResolved={agent.escalationsResolved}
          avgResolutionTime={agent.avgResolutionTime}
        />
      </td>

      <td className="px-6 py-4">
        <OnlineToggle agentId={agent.id} isOnline={agent.isOnline} />
      </td>
    </tr>
  );
}
