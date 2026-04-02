import { notFound } from "next/navigation";
import StatusBadge from "@/components/workspace/StatusBadge";
import { getPortalProjectBySlug } from "@/lib/workspace-data";

export default async function PortalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { configured, data: project } = await getPortalProjectBySlug(slug);

  if (!configured) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            Portal is not active yet. Supabase credentials are required.
          </div>
        </div>
      </main>
    );
  }

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Client Portal</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">{project.project_name}</h1>
          <p className="mt-1 text-sm text-slate-600">Client: {project.clients?.full_name || "Client"}</p>

          <div className="mt-4">
            <StatusBadge status={project.status} />
          </div>

          {project.notes && (
            <section className="mt-6 rounded-2xl bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">Project summary</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{project.notes}</p>
            </section>
          )}

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-slate-900">Deliverables</h2>
            <div className="mt-4 space-y-3">
              {project.deliverables.length === 0 ? (
                <p className="text-sm text-slate-500">No deliverables shared yet.</p>
              ) : (
                project.deliverables.map((item) => (
                  <article key={item.id} className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-medium text-slate-900">{item.title}</h3>
                      <StatusBadge status={item.status} />
                    </div>
                    <p className="mt-1 text-sm text-slate-600">Due: {item.due_date || "—"}</p>
                    {item.notes && <p className="mt-1 text-sm text-slate-500">{item.notes}</p>}
                  </article>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
