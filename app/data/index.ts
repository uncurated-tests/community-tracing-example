import { cookies } from "next/headers";

interface Data {
  status: string;
}

export async function getData(): Promise<Data> {
  const response = await fetch(
    "https://community-tracing-example.vercel.app/api/data",
    {
      headers: {
        cookie: (await cookies()).toString(),
      },
    }
  );
  const data = (await response.json()) as Data;
  return data;
}
