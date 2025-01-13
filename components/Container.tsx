export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1100px] mx-auto min-h-screen flex flex-col mt-10 border-l border-r border-transparent">
      {children}
    </div>
  );
}
