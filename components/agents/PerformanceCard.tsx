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
        gap-1.5
        text-[11px]
        font-medium
        w-44
      "
    >
      <div className="bg-muted px-2 py-0.5 rounded border border-border/40 text-muted-foreground">
        Handled: <span className="font-bold text-foreground">{leadsHandled}</span>
      </div>

      <div className="bg-rose-500/5 px-2 py-0.5 rounded border border-rose-500/10 text-rose-500">
        Active: <span className="font-bold">{activeEscalations}</span>
      </div>

      <div className="bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 text-emerald-500">
        Resolved: <span className="font-bold">{escalationsResolved}</span>
      </div>

      <div className="bg-indigo-500/5 px-2 py-0.5 rounded border border-indigo-500/10 text-indigo-500">
        Avg Time: <span className="font-bold">{avgResolutionTime}m</span>
      </div>
    </div>
  );
}
