export function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {children}
    </div>
  );
}