import EscalationRow from "./EscalationRow";

export default function EscalationTable({ escalations }: any) {
  return (
    <table
      className="
        w-full
        bg-white
        rounded-xl
        border
      "
    >
      <thead>
        <tr>
          <th>Lead</th>
          <th>Platform</th>
          <th>Reason</th>
          <th>Wait Time</th>
          <th>Agent</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {escalations?.map((item: any) => (
          <EscalationRow key={item.id} escalation={item} />
        ))}
      </tbody>
    </table>
  );
}
