import Link from "next/link";

import WaitTimeBadge from "./WaitTimeBadge";
import AssignButton from "./AssignButton";

export default function EscalationRow({ escalation }: any) {
  return (
    <tr
      className="
        border-b
      "
    >
      <td>{escalation.lead.name}</td>

      <td>{escalation.lead.platform}</td>

      <td>{escalation.reason}</td>

      <td>
        <WaitTimeBadge escalatedAt={escalation.escalatedAt} />
      </td>

      <td>{escalation.agent?.name ?? "Unassigned"}</td>

      <td
        className="
          flex
          gap-2
        "
      >
        {!escalation.agent && <AssignButton escalationId={escalation.id} />}

        <Link href={`/dashboard/leads/${escalation.leadId}`}>Open</Link>
      </td>
    </tr>
  );
}
