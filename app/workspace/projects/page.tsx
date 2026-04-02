import Link from "next/link";
import StatusBadge from "@/components/workspace/StatusBadge";
import { createProject, listClients, listProjects } from "@/lib/workspace-data";

const statuses = ["planning", "active", "waiting", "completed"];

export default async function WorkspaceProjectsPage() {
  const [{ configured: projectConfigured, data: projects }, { data: clients }] = await Promise.all([
    listProjects(),
    listClients(),
  ]);

  async function handleCreateProject(formData: FormData) {
    "use server";
    await createProject(formData);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[360px,1fr]">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Create project</h2>
        <form action={handleCreateProject} className="mt-4 space-y-3">
          <select name="client_id" required className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm">
            <option value="">Select client</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.full_name}
              </option>
            ))}
          </select>
          <input name="project_name" required placeholder="Project name" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
          <select name="status" defaultValue="planning" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm">
            {statuses.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
          <div className="grid grid-cols-2 gap-2">
            <input name="start_date" type="date" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
            <input name="due_date" type="date" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
          </div>
          <input name="budget" type="number" min="0" step="0.01" placeholder="Budget" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
          <textarea name="notes" placeholder="Notes" className="min-h-24 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
          <button type="submit" disabled={!projectConfigured || clients.length === 0} className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300">Add project</button>
        </form>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Projects</h2>
          <span className="text-sm text-slate-500">{projects.length} total</span>
        </div>
        {!projectConfigured && <p className="mb-3 text-sm text-amber-700">Connect Supabase env vars to save and view projects.</p>}
        <div className="space-y-3">
          {projects.length === 0 ? (
            <p className="text-sm text-slate-500">No projects yet.</p>
          ) : (
            projects.map((project) => (
              <Link key={project.id} href={`/workspace/projects/${project.id}`} className="block rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-900">{project.project_name}</h3>
                  <StatusBadge status={project.status} />
                </div>
                <p className="mt-1 text-sm text-slate-600">Client: {project.clients?.full_name || "Unknown"}</p>
                <p className="mt-1 text-xs text-slate-500">Portal: /portal/{project.portal_slug}</p>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
