import StatusBadge from "./StatusBadge";

export default function LeadInfoCard({ lead }: any) {
  return (
    <div
      className="
        bg-white
        rounded-xl
        border
        p-6
      "
    >
      <h2
        className="
          text-xl
          font-bold
          mb-4
        "
      >
        Lead Details
      </h2>

      <div className="space-y-3">
        <p>
          <strong>Name:</strong> {lead.name}
        </p>

        <p>
          <strong>Email:</strong> {lead.email}
        </p>

        <p>
          <strong>Phone:</strong> {lead.phone}
        </p>

        <p>
          <strong>Platform:</strong> {lead.platform}
        </p>

        <div>
          <StatusBadge status={lead.status} />
        </div>

        <p>
          <strong>Agent:</strong> {lead.agent?.name ?? "Unassigned"}
        </p>
      </div>
    </div>
  );
}
