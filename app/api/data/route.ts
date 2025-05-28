import { NextResponse } from "next/server";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function GET() {
  for (let i = 0; i < 3; i++) {
    await sleep(1000); // Sleep for 1 second (1000ms)
  }
  
  return NextResponse.json({ status: 'success' })
}
