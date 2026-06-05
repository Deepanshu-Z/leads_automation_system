import AgentRow from "./AgentRow";

type Props = {
  agents: any[];
};

export default function AgentTable({ agents = [] }: Props) {
  return (
    <div
      className="
        bg-white
        rounded-xl
        border
        overflow-hidden
      "
    >
      <table className="w-full">
        <thead
          className="
            bg-gray-100
          "
        >
          <tr>
            <th className="p-3 text-left">Name</th>

            <th className="p-3 text-left">Email</th>

            <th className="p-3 text-left">Role</th>

            <th className="p-3 text-left">Status</th>

            <th className="p-3 text-left">Active Escalations</th>

            <th className="p-3 text-left">Performance</th>

            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {agents.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="
                  text-center
                  p-6
                "
              >
                No agents found
              </td>
            </tr>
          ) : (
            agents.map((agent) => <AgentRow key={agent.id} agent={agent} />)
          )}
        </tbody>
      </table>
    </div>
  );
}
