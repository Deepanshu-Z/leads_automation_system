import AgentRow from "./AgentRow";

type Props = {
  agents: any[];
};

export default function AgentTable({ agents = [] }: Props) {
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
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Active Escalations</th>
              <th className="px-6 py-4">Performance Metrics</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border text-sm">
            {agents.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="
                    text-center
                    px-6
                    py-10
                    text-muted-foreground
                  "
                >
                  No agents found in the system directories.
                </td>
              </tr>
            ) : (
              agents.map((agent) => <AgentRow key={agent.id} agent={agent} />)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
