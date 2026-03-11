
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">

      {/* === Vertical Guide Lines (3 Columns) === */}
      <div className="pointer-events-none absolute inset-0 flex">
        <div className="flex-1 border-r border-white/10"></div>
        <div className="flex-1 border-r border-white/10"></div>
        <div className="flex-1"></div>
      </div>

      {/* === Main Page Content === */}
      {children}
    </div>
  );
}
