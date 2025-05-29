import { NextResponse } from "next/server";
import { trace } from "@opentelemetry/api";

const tracer = trace.getTracer("data");

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET() {
  await Promise.allSettled(
    Array.from({ length: 3 }, (_, i) => tracer.startActiveSpan(`microservice ${i+1}`, async (span) => {
      await sleep(1000); // 1000 ms = 1 second
      span.end();
    }))
  )
  
  return NextResponse.json({ status: 'success' })
}
