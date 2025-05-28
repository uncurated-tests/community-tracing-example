import { NextResponse } from "next/server";
import { trace } from "@opentelemetry/api";

const tracer = trace.getTracer("data");

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET() {
  for (let i = 0; i < 3; i++) {
    await tracer.startActiveSpan(`microservice ${i+1}`, async (span) => {
      await sleep(1000); // Sleep for 1 second (1000ms)
      span.end();
    })
  }
  
  return NextResponse.json({ status: 'success' })
}
