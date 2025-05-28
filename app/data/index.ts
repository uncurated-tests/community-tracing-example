interface Data {
  status: string;
}
export async function getData(): Promise<Data> {
  const response = await fetch(
    "https://community-tracing-example.vercel.app/api/data"
  );
  const data = (await response.json()) as Data;
  return data;
}
