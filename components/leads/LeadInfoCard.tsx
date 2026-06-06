import StatusBadge from "./StatusBadge";
import { User, Mail, Phone, Laptop, UserCheck } from "lucide-react";

export default function LeadInfoCard({ lead }: any) {
  return (
    <div
      className="
        bg-card
        rounded-xl
        border
        border-border
        p-5
        shadow-sm
      "
    >
      <h2
        className="
          text-base
          font-bold
          tracking-tight
          text-foreground
          mb-4
          pb-3
          border-b
          border-border
        "
      >
        Lead Profile Details
      </h2>

      <div className="space-y-4">
        {/* Name */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground shrink-0">
            <User size={15} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider leading-none mb-1">Full Name</p>
            <p className="text-sm font-semibold text-foreground truncate">{lead.name || "Anonymous"}</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground shrink-0">
            <Mail size={15} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider leading-none mb-1">Email Address</p>
            <p className="text-sm text-foreground truncate">{lead.email || "Not Provided"}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground shrink-0">
            <Phone size={15} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider leading-none mb-1">Phone Number</p>
            <p className="text-sm font-mono text-foreground">{lead.phone || "N/A"}</p>
          </div>
        </div>

        {/* Platform */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground shrink-0">
            <Laptop size={15} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider leading-none mb-1">Channel Origin</p>
            <p className="text-sm font-medium text-foreground capitalize">{lead.platform}</p>
          </div>
        </div>

        {/* Agent */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground shrink-0">
            <UserCheck size={15} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider leading-none mb-1">Assigned Executive</p>
            <p className="text-sm font-medium text-foreground">
              {lead.agent?.name ?? "No agent assigned"}
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="pt-2 border-t border-border flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground">Lifecycle State</span>
          <StatusBadge status={lead.status} />
        </div>
      </div>
    </div>
  );
}
