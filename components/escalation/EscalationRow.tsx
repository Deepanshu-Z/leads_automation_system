import Link from "next/link";
import WaitTimeBadge from "./WaitTimeBadge";
import AssignButton from "./AssignButton";
import { MessageSquare, Camera, Globe } from "lucide-react";

export default function EscalationRow({ escalation }: any) {
  // Helper to render platform icons
  const renderPlatformIcon = (plat: string) => {
    switch (plat?.toLowerCase()) {
      case "whatsapp":
        return <MessageSquare size={13} className="text-emerald-500 shrink-0" />;
      case "instagram":
        return <Camera size={13} className="text-pink-500 shrink-0" />;
      case "facebook":
        return <Globe size={13} className="text-blue-500 shrink-0" />;
      default:
        return <MessageSquare size={13} className="text-muted-foreground shrink-0" />;
    }
  };

  const latestEscalation = escalation.escalations?.[0];
  const reason = latestEscalation?.reason ?? "AI bot threshold trigger";
  const escalatedAt = latestEscalation?.escalatedAt ?? escalation.updatedAt;

  return (
    <tr className="hover:bg-muted/40 transition-colors duration-150 border-b border-border">
      {/* 1. Lead */}
      <td className="px-6 py-4 font-semibold text-foreground">{escalation.name || "Anonymous"}</td>

      {/* 2. Platform */}
      <td className="px-6 py-4">
        <span className="inline-flex items-center gap-1.5 bg-muted px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wider">
          {renderPlatformIcon(escalation.platform)}
          <span>{escalation.platform}</span>
        </span>
      </td>

      {/* 3. Reason */}
      <td className="px-6 py-4 text-muted-foreground truncate max-w-[200px]" title={reason}>
        {reason}
      </td>

      {/* 4. Wait Time */}
      <td className="px-6 py-4">
        <WaitTimeBadge escalatedAt={escalatedAt} />
      </td>

      {/* 5. Agent */}
      <td className="px-6 py-4 font-medium text-foreground">
        {escalation.agent?.name ? (
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {escalation.agent.name}
          </span>
        ) : (
          <span className="text-muted-foreground/50 border border-dashed border-border px-2 py-0.5 rounded text-xs">
            Unassigned
          </span>
        )}
      </td>

      {/* 6. Actions */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          {!escalation.agent && (
            <AssignButton escalationId={escalation.id} />
          )}

          <Link
            href={`/dashboard/leads/${escalation.id}`}
            className="
              inline-flex
              items-center
              px-2.5
              py-1
              rounded-lg
              bg-slate-800
              hover:bg-slate-700
              text-slate-200
              text-[10px]
              font-bold
              uppercase
              tracking-wider
              transition-colors
              border
              border-slate-700
            "
          >
            Open
          </Link>
        </div>
      </td>
    </tr>
  );
}
