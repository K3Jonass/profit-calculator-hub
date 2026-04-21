import Link from "next/link";
import StatusBadge from "@/components/workspace/StatusBadge";
import { createProject, listClients, listProjects } from "@/lib/workspace-data";

const statuses = ["planning", "active", "waiting", "completed"];

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function readParam(params: Record<string, string | string[] | undefined>, key: string) {
  const value = params[key];
  return Array.isArray(value) ? value[0] || "" : value || "";
}

export default async function WorkspaceProjectsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const prefillClientName = decodeURIComponent(readParam(params, "client_name"));
  const prefillProjectName = decodeURIComponent(readParam(params, "project_name"));
  const prefillBudget = decodeURIComponent(readParam(params, "budget"));
  const prefillNotes = decodeURIComponent(readParam(params, "notes"));
  const sourceContractType = readParam(params, "source_contract_type");

  const sourcePayload = {
    clientName: prefillClientName || undefined,
    projectName: prefillProjectName || undefined,
    budget: prefillBudget || undefined,
    notes: prefillNotes || undefined,
  };

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
      <section className="surface-card rounded-2xl p-5">
        <h2 className="ui-heading text-lg font-semibold">Create project</h2>
        {sourceContractType === "freelancer" ? (
          <p className="mt-2 rounded-xl bg-blue-50 px-3 py-2 text-sm text-blue-700">
            Prefilled from freelancer contract.
          </p>
        ) : null}
        <form action={handleCreateProject} className="mt-4 space-y-3">
          <input type="hidden" name="prefill_client_name" value={prefillClientName} />
          <input type="hidden" name="source_contract_type" value={sourceContractType} />
          <input type="hidden" name="source_contract_payload" value={JSON.stringify(sourcePayload)} />

          <select name="client_id" defaultValue="" className="ui-input w-full rounded-xl px-3 py-2 text-sm">
            <option value="">{prefillClientName ? `Use or auto-create: ${prefillClientName}` : "Select client"}</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.full_name}
              </option>
            ))}
          </select>
          <input
            name="project_name"
            required
            defaultValue={prefillProjectName}
            placeholder="Project name"
            className="ui-input w-full rounded-xl px-3 py-2 text-sm"
          />
          <select name="status" defaultValue="planning" className="ui-input w-full rounded-xl px-3 py-2 text-sm">
            {statuses.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
          <div className="grid grid-cols-2 gap-2">
            <input name="start_date" type="date" className="ui-input w-full rounded-xl px-3 py-2 text-sm" />
            <input name="due_date" type="date" className="ui-input w-full rounded-xl px-3 py-2 text-sm" />
          </div>
          <input
            name="budget"
            type="number"
            min="0"
            step="0.01"
            defaultValue={prefillBudget}
            placeholder="Budget"
            className="ui-input w-full rounded-xl px-3 py-2 text-sm"
          />
          <textarea
            name="notes"
            defaultValue={prefillNotes}
            placeholder="Notes"
            className="min-h-24 ui-input w-full rounded-xl px-3 py-2 text-sm"
          />
          <button type="submit" disabled={!projectConfigured} className="ui-button-primary w-full rounded-xl px-4 py-2.5 text-sm font-semibold disabled:cursor-not-allowed">Add project</button>
        </form>
      </section>

      <section className="surface-card rounded-2xl p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="ui-heading text-lg font-semibold">Projects</h2>
          <span className="ui-muted text-sm">{projects.length} total</span>
        </div>
        {!projectConfigured && <p className="mb-3 text-sm text-amber-700">Connect Supabase env vars to save and view projects.</p>}
        <div className="space-y-3">
          {projects.length === 0 ? (
            <p className="ui-muted text-sm">No projects yet.</p>
          ) : (
            projects.map((project) => (
              <Link key={project.id} href={`/workspace/projects/${project.id}`} className="surface-card block rounded-xl p-4 transition hover:bg-slate-50/70 dark:hover:bg-slate-800/60">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="ui-heading font-semibold">{project.project_name}</h3>
                  <StatusBadge status={project.status} />
                </div>
                <p className="ui-text mt-1 text-sm">Client: {project.clients?.full_name || "Unknown"}</p>
                <p className="ui-muted mt-1 text-xs">Portal: /portal/{project.portal_slug}</p>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
