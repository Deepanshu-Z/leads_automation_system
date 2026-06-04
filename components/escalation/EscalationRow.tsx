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
      <td>{escalation.name}</td>

      <td>{escalation.platform}</td>

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

        <Link href={`/dashboard/leads/${escalation.id}`}>Open</Link>
      </td>
    </tr>
  );
}
