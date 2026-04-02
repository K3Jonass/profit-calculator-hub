import Link from "next/link";
import { notFound } from "next/navigation";
import StatusBadge from "@/components/workspace/StatusBadge";
import { createDeliverable, getProjectById, updateDeliverableStatus } from "@/lib/workspace-data";

const deliverableStatuses = ["pending", "in_progress", "completed"];

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { configured, data: project } = await getProjectById(id);

  async function handleCreateDeliverable(formData: FormData) {
    "use server";
    await createDeliverable(formData);
  }

  async function handleUpdateStatus(formData: FormData) {
    "use server";
    await updateDeliverableStatus(formData);
  }

  if (!configured) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        Supabase is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.
      </div>
    );
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">{project.project_name}</h2>
            <p className="text-sm text-slate-600">Client: {project.clients?.full_name || "Unknown"}</p>
          </div>
          <StatusBadge status={project.status} />
        </div>
        <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
          <p>Start date: {project.start_date || "—"}</p>
          <p>Due date: {project.due_date || "—"}</p>
          <p>Budget: {project.budget ? `$${project.budget.toLocaleString()}` : "—"}</p>
          <p>
            Portal URL: <Link className="text-blue-600 underline" href={`/portal/${project.portal_slug}`}>/portal/{project.portal_slug}</Link>
          </p>
        </div>
        {project.notes && <p className="mt-4 text-sm text-slate-700">{project.notes}</p>}
      </section>

      <section className="grid gap-6 lg:grid-cols-[360px,1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Add deliverable</h3>
          <form action={handleCreateDeliverable} className="mt-4 space-y-3">
            <input type="hidden" name="project_id" value={project.id} />
            <input name="title" required placeholder="Deliverable title" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
            <select name="status" defaultValue="pending" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm">
              {deliverableStatuses.map((status) => <option key={status} value={status}>{status}</option>)}
            </select>
            <input name="due_date" type="date" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
            <textarea name="notes" placeholder="Notes" className="min-h-24 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
            <button type="submit" className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">Add deliverable</button>
          </form>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Deliverables</h3>
          <div className="mt-4 space-y-3">
            {project.deliverables.length === 0 ? (
              <p className="text-sm text-slate-500">No deliverables yet.</p>
            ) : (
              project.deliverables.map((item) => (
                <article key={item.id} className="rounded-xl border border-slate-200 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-semibold text-slate-900">{item.title}</h4>
                    <StatusBadge status={item.status} />
                  </div>
                  <p className="mt-1 text-sm text-slate-600">Due: {item.due_date || "—"}</p>
                  {item.notes && <p className="mt-1 text-sm text-slate-500">{item.notes}</p>}
                  <form action={handleUpdateStatus} className="mt-3 flex items-center gap-2">
                    <input type="hidden" name="project_id" value={project.id} />
                    <input type="hidden" name="deliverable_id" value={item.id} />
                    <select name="status" defaultValue={item.status} className="rounded-xl border border-slate-300 px-2 py-1.5 text-sm">
                      {deliverableStatuses.map((status) => <option key={status} value={status}>{status}</option>)}
                    </select>
                    <button type="submit" className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700">Update</button>
                  </form>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
