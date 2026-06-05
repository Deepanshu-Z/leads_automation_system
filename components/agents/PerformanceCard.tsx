type Props = {
  leadsHandled: number;
  activeEscalations: number;
  escalationsResolved: number;
  avgResolutionTime: number;
};

export default function PerformanceCard({
  leadsHandled,
  activeEscalations,
  escalationsResolved,
  avgResolutionTime,
}: Props) {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-2
        text-sm
      "
    >
      <div>Leads: {leadsHandled}</div>

      <div>Active Esc: {activeEscalations}</div>

      <div>Resolved: {escalationsResolved}</div>

      <div>Avg: {avgResolutionTime}m</div>
    </div>
  );
}
