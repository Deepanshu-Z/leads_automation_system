import { leadQueue } from "@/lib/queue/queue";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const job = await leadQueue.add("test-job", { hello: "world" });
    return NextResponse.json({ success: true, jobId: job.id });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
