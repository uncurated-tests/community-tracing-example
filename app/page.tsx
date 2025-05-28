import { getData } from "./data";
import { MainContainer } from "./components/main-container";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function DynamicHome() {
  const { status } = await getData();

  return (
    <MainContainer>
      <div>✅ {status}</div>
    </MainContainer>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <MainContainer>
          <div>Loading...</div>
        </MainContainer>
      }
    >
      <DynamicHome />
    </Suspense>
  );
}
