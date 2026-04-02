import Link from "next/link";
import { getWorkspaceSummary } from "@/lib/workspace-data";

export default async function WorkspaceOverviewPage() {
  const summary = await getWorkspaceSummary();

  return (
    <div className="space-y-6">
      {!summary.configured && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          Supabase is not configured yet. Add credentials to activate persistence.
        </div>
      )}

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Clients", value: summary.clientCount },
          { label: "Projects", value: summary.projectCount },
          { label: "Active Projects", value: summary.activeProjectCount },
          { label: "Deliverables", value: summary.deliverableCount },
        ].map((card) => (
          <div key={card.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{card.label}</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">{card.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Link href="/workspace/clients" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
          <h2 className="text-lg font-semibold text-slate-900">Manage clients</h2>
          <p className="mt-1 text-sm text-slate-600">Create and track client records.</p>
        </Link>
        <Link href="/workspace/projects" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
          <h2 className="text-lg font-semibold text-slate-900">Manage projects</h2>
          <p className="mt-1 text-sm text-slate-600">Create projects and track deliverables.</p>
        </Link>
      </section>
    </div>
  );
}
