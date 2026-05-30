import { authOptions } from "@/lib/auth";
import { sendMessage } from "@/lib/messaging/sendMessage";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export const POST = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  try {
    const session = await getServerSession(authOptions);

    const agentId = session?.user?.agentId;

    if (!agentId) {
      return new Response("Unauthorized", {
        status: 401,
      });
    }

    const body = await req.json();

    const content = body.content?.trim();

    if (!content) {
      return new Response("Message is required", {
        status: 400,
      });
    }

    const { id } = await params;

    const existingLead = await prisma.lead.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingLead) {
      return new Response("Lead not found", {
        status: 404,
      });
    }

    // =====================================
    // SEND MESSAGE FIRST
    // =====================================

    await sendMessage(
      existingLead.platform as any,

      existingLead.sourceId,

      content,
    );

    // =====================================
    // DB TRANSACTION
    // =====================================

    await prisma.$transaction(async (tx) => {
      await tx.lead.update({
        where: {
          id: existingLead.id,
        },

        data: {
          status: "HUMAN_ASSIGNED",

          assignedAgentId: agentId,

          aiEnabled: false,
        },
      });

      let conversation = await tx.conversation.findFirst({
        where: {
          leadId: existingLead.id,
        },
      });

      if (!conversation) {
        conversation = await tx.conversation.create({
          data: {
            leadId: existingLead.id,

            platform: existingLead.platform,

            agentId,
          },
        });
      }

      await tx.message.create({
        data: {
          conversationId: conversation.id,

          role: "AGENT",

          content,
        },
      });

      await tx.auditLog.create({
        data: {
          leadId: existingLead.id,

          oldStatus: existingLead.status,

          newStatus: "HUMAN_ASSIGNED",

          reason: "Agent replied manually",

          triggeredBy: "agent",
        },
      });
    });

    return Response.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("SEND MESSAGE ERROR", error);

    return new Response("Failed to send message", {
      status: 500,
    });
  }
};
