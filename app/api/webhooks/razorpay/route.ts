import crypto from "crypto";

import { prisma } from "@/lib/prisma";

import { NextRequest, NextResponse } from "next/server";

import { sendMessage } from "@/lib/messaging/sendMessage";

export async function POST(req: NextRequest) {
  try {
    // =====================================================
    // RAW BODY
    // =====================================================

    const rawBody = await req.text();

    // =====================================================
    // SIGNATURE
    // =====================================================

    const signature = req.headers.get("x-razorpay-signature");

    if (!signature) {
      console.log("❌ Missing Razorpay signature");

      return NextResponse.json(
        {
          error: "Missing signature",
        },
        {
          status: 400,
        },
      );
    }

    // =====================================================
    // VERIFY SIGNATURE
    // =====================================================

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(rawBody)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.log("❌ Invalid webhook signature");

      return NextResponse.json(
        {
          error: "Invalid signature",
        },
        {
          status: 400,
        },
      );
    }

    // =====================================================
    // PARSE BODY
    // =====================================================

    const body = JSON.parse(rawBody);

    const event = body.event;

    console.log(`📩 Razorpay event: ${event}`);

    // =====================================================
    // PAYMENT SUCCESS
    // =====================================================

    if (event === "payment_link.paid") {
      const paymentLinkEntity = body.payload.payment_link.entity;

      const paymentEntity = body.payload.payment.entity;

      const razorpayLinkId = paymentLinkEntity.id;

      const razorpayPaymentId = paymentEntity.id;

      const amount = paymentEntity.amount / 100;

      // ===============================================
      // FIND PAYMENT
      // ===============================================

      const payment = await prisma.payment.findFirst({
        where: {
          razorpayLinkId,
        },

        include: {
          lead: true,
        },
      });

      if (!payment) {
        console.log("❌ Payment not found");

        return NextResponse.json(
          {
            error: "Payment not found",
          },
          {
            status: 404,
          },
        );
      }

      // ===============================================
      // PREVENT DUPLICATE WEBHOOKS
      // ===============================================

      if (payment.status === "PAID") {
        console.log("⚠️ Payment already processed");

        return NextResponse.json({
          success: true,
        });
      }

      // ===============================================
      // UPDATE PAYMENT
      // ===============================================

      await prisma.payment.update({
        where: {
          id: payment.id,
        },

        data: {
          status: "PAID",

          razorpayPaymentId,

          paidAt: new Date(),
        },
      });

      // ===============================================
      // UPDATE LEAD
      // ===============================================

      await prisma.lead.update({
        where: {
          id: payment.leadId,
        },

        data: {
          status: "PAID",
        },
      });

      // ===============================================
      // AUDIT LOG
      // ===============================================

      await prisma.auditLog.create({
        data: {
          leadId: payment.leadId,

          oldStatus: payment.lead.status,

          newStatus: "PAID",

          reason: "Payment completed successfully",

          triggeredBy: "razorpay",
        },
      });

      // ===============================================
      // SEND WHATSAPP MESSAGE
      // ===============================================

      const message = `Thank you ${payment.lead.name || ""}!

Your payment of ₹${amount}
has been received.

Reference:
${razorpayPaymentId}

Our team will contact you shortly.`;

      try {
        await sendMessage(
          "whatsapp",

          payment.lead.phone || "",

          message,
        );
      } catch (error) {
        console.log("❌ WhatsApp send failed:", error);
      }

      console.log(`✅ Payment success: ${razorpayPaymentId}`);
    }

    // =====================================================
    // PAYMENT FAILED
    // =====================================================

    if (event === "payment.failed") {
      const paymentEntity = body.payload.payment.entity;

      const razorpayPaymentId = paymentEntity.id;

      console.log(`❌ Payment failed: ${razorpayPaymentId}`);

      // ===============================================
      // FIND PAYMENT
      // ===============================================

      const payment = await prisma.payment.findFirst({
        where: {
          razorpayPaymentId,
        },

        include: {
          lead: true,
        },
      });

      if (!payment) {
        console.log("⚠️ Failed payment not found");

        return NextResponse.json({
          success: true,
        });
      }

      // ===============================================
      // UPDATE FAILED PAYMENT
      // ===============================================

      const updatedPayment = await prisma.payment.update({
        where: {
          id: payment.id,
        },

        data: {
          status: "FAILED",

          retryCount: {
            increment: 1,
          },
        },
      });

      console.log(`❌ Retry count: ${updatedPayment.retryCount}`);

      // ===============================================
      // ESCALATE AFTER 3 FAILURES
      // ===============================================

      if (updatedPayment.retryCount >= 3) {
        await prisma.lead.update({
          where: {
            id: payment.leadId,
          },

          data: {
            status: "ESCALATED",
          },
        });

        await prisma.auditLog.create({
          data: {
            leadId: payment.leadId,

            oldStatus: payment.lead.status,

            newStatus: "ESCALATED",

            reason: "Payment failed 3 times",

            triggeredBy: "system",
          },
        });

        console.log("🚨 Lead escalated");

        return NextResponse.json({
          success: true,
        });
      }

      // ===============================================
      // SEND RETRY MESSAGE
      // ===============================================

      const retryMessage = `Your payment was not successful.

Would you like us to send
a new payment link?`;

      try {
        await sendMessage(
          "whatsapp",

          payment.lead.phone || "",

          retryMessage,
        );
      } catch (error) {
        console.log("❌ Retry message failed:", error);
      }

      console.log("📩 Retry message sent");
    }

    // =====================================================
    // SUCCESS RESPONSE
    // =====================================================

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log("❌ Razorpay webhook error:", error);

    return NextResponse.json(
      {
        error: "Webhook processing failed",
      },
      {
        status: 500,
      },
    );
  }
}
