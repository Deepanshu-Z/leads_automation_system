"use client";
import ConversationView from "@/components/leads/ConversationView";
import LeadActions from "@/components/leads/LeadAction";
import LeadInfoCard from "@/components/leads/LeadInfoCard";
import SendMessageBox from "@/components/leads/SendMessage";
import { useLead } from "@/lib/hooks/leads/useLead";
import { useLeadMessages } from "@/lib/hooks/leads/useLeadMessage";
import { use } from "react";

export default function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: lead } = useLead(id);
  const { data: messages } = useLeadMessages(id);

  if (!lead) {
    console.log("this is the data bc", lead);
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-h-screen ">
      <div
        className="
          
          grid
          grid-cols-12
          gap-6
        "
      >
        <div
          className="
            col-span-4
          "
        >
          <LeadInfoCard lead={lead} />

          <LeadActions leadId={lead.id} />
        </div>

        <div
          className="
            col-span-8
          "
        >
          <ConversationView messages={messages} />

          <SendMessageBox leadId={lead.id} />
        </div>
      </div>
    </div>
  );
}
