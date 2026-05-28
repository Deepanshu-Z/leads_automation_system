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
      // READ COURSE INFO FROM NOTES
      // ===============================================

      const notes = paymentLinkEntity.notes || {};
      console.log(`📋 Payment notes:`, notes);

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

          // Save course info from notes (fallback to existing DB values)
          courseName:     notes.course_name     || payment.courseName,
          courseTiming:   notes.batch_timing     || payment.courseTiming,
          courseDuration: notes.course_duration  || payment.courseDuration,
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

      const courseLine = notes.course_name ? `\nCourse: ${notes.course_name}` : "";
      const timingLine = notes.batch_timing ? `\nBatch: ${notes.batch_timing}` : "";

      const message = `Thank you ${payment.lead.name || ""}! \u{1F389}

Your payment of \u20B9${amount} has been received.${courseLine}${timingLine}

Reference: ${razorpayPaymentId}

Your enrollment is confirmed. Our team will contact you shortly with class details. \u{1F64F}`;

      try {
        await sendMessage(
          "whatsapp",

          payment.lead.phone || "",

          message,
        );
      } catch (error) {
        console.log("\u274C WhatsApp send failed:", error);
      }

      console.log(`\u2705 Payment success: ${razorpayPaymentId} | Course: ${notes.course_name || "unknown"}`);
    }

    // =====================================================
    // PAYMENT FAILED
    // =====================================================

    if (event === "payment.failed") {
      const paymentEntity = body.payload.payment.entity;

      const razorpayPaymentId = paymentEntity.id;

      // Try to get linkId from notes or order_id for reliable lookup
      const notes = paymentEntity.notes || {};
      const orderId = paymentEntity.order_id;

      console.log(`\u274C Payment failed: ${razorpayPaymentId}`);

      // ===============================================
      // FIND PAYMENT — try multiple strategies
      // ===============================================

      let payment = null;

      // Strategy 1: Find by lead_id from notes (most reliable)
      if (notes.lead_id) {
        payment = await prisma.payment.findFirst({
          where: {
            leadId: parseInt(notes.lead_id),
            status: "PENDING",
          },
          include: { lead: true },
          orderBy: { createdAt: "desc" },
        });
      }

      // Strategy 2: Find by razorpayPaymentId (works on retry)
      if (!payment) {
        payment = await prisma.payment.findFirst({
          where: { razorpayPaymentId },
          include: { lead: true },
        });
      }

      if (!payment) {
        console.log("\u26A0\uFE0F Failed payment not found");

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
