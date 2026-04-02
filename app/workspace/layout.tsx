import WorkspaceNav from "@/components/workspace/WorkspaceNav";

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Phase 2 · Mini Client Workspace</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Workspace</h1>
        </div>
        <WorkspaceNav />
        {children}
      </div>
    </main>
  );
}
