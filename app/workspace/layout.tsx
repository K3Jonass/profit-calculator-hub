import WorkspaceNav from "@/components/workspace/WorkspaceNav";
import { requireAuthUser } from "@/lib/auth/server";

export default async function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  const user = await requireAuthUser();

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-2">
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Workspace</h1>
          <p className="text-sm text-slate-600">Signed in as {user.email}</p>
        </div>
        <WorkspaceNav />
        {children}
      </div>
    </main>
  );
}
