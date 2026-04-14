import Link from "next/link";
import { getWorkspaceSummary } from "@/lib/workspace-data";

export default async function WorkspaceOverviewPage() {
  const summary = await getWorkspaceSummary();

  return (
    <div className="space-y-6">
      {!summary.configured && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-200">
          Supabase is not configured yet. Add credentials to activate persistence.
        </div>
      )}

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 motion-stagger">
        {[
          { label: "Clients", value: summary.clientCount },
          { label: "Projects", value: summary.projectCount },
          { label: "Active Projects", value: summary.activeProjectCount },
          { label: "Deliverables", value: summary.deliverableCount },
        ].map((card) => (
          <div key={card.label} className="hover-lift rounded-2xl border-soft surface-card p-5">
            <p className="text-sm text-slate-500 dark:text-slate-400">{card.label}</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-100">{card.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2 motion-stagger">
        <Link href="/workspace/clients" className="hover-lift rounded-2xl border-soft surface-card p-5">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Manage clients</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Create and track client records.</p>
        </Link>
        <Link href="/workspace/projects" className="hover-lift rounded-2xl border-soft surface-card p-5">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Manage projects</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Create projects and track deliverables.</p>
        </Link>
      </section>
    </div>
  );
}
