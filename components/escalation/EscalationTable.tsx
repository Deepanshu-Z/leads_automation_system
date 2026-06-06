import EscalationRow from "./EscalationRow";

export default function EscalationTable({ escalations }: any) {
  return (
    <div
      className="
        bg-card
        rounded-xl
        border
        border-border
        shadow-sm
        overflow-hidden
        w-full
      "
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead
            className="
              border-b
              border-border
              bg-muted/40
              text-[11px]
              font-bold
              text-muted-foreground
              uppercase
              tracking-wider
            "
          >
            <tr>
              <th className="px-6 py-4">Lead</th>
              <th className="px-6 py-4">Platform</th>
              <th className="px-6 py-4">Reason</th>
              <th className="px-6 py-4">Wait Time</th>
              <th className="px-6 py-4">Agent</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border text-sm">
            {(!escalations || escalations.length === 0) ? (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-muted-foreground">
                  No pending escalations found in the queue.
                </td>
              </tr>
            ) : (
              escalations.map((item: any) => (
                <EscalationRow key={item.id} escalation={item} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
