import { authOptions } from "@/lib/auth";
import { sendMessage, WhatsAppWindowExpiredError } from "@/lib/messaging/sendMessage";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export const POST = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  const session = await getServerSession(authOptions);
  const agentId = Number(session?.user?.id);
  if (!agentId) {
    return new Response("Unauthorized", { status: 401 });
  }
  const body = await req.json();
  const { content } = body;
  const { id } = await params;
  try {
    const existingLead = await prisma.lead.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingLead) {
      return new Response("Lead not found", { status: 404 });
    }

    // 1. Send the message first
    await sendMessage(
      existingLead.platform as any,
      existingLead.sourceId,
      content,
    );

    // 2. If message sending succeeds, update the database
    await prisma.lead.update({
      where: { id: Number(id) },
      data: {
        status: "HUMAN_ASSIGNED",
        assignedAgentId: agentId,
        aiEnabled: false,
      },
    });

    const existingConversation = await prisma.conversation.findFirst({
      where: {
        leadId: existingLead.id,
      },
    });

    if (!existingConversation) {
      const newConversation = await prisma.conversation.create({
        data: {
          leadId: existingLead.id,
          platform: existingLead.platform,
        },
      });
      await prisma.message.create({
        data: {
          conversationId: newConversation.id,
          role: "AGENT",
          content: content,
        },
      });
    } else {
      await prisma.message.create({
        data: {
          conversationId: existingConversation.id,
          role: "AGENT",
          content: content,
        },
      });
    }

    return new Response("Message sent successfully", { status: 200 });
  } catch (error: any) {
    console.error("Error sending message:", error);
    if (error instanceof WhatsAppWindowExpiredError) {
      return new Response(error.message, { status: 400 });
    }
    return new Response(error?.message || "Failed to send message", { status: 500 });
  }
};
