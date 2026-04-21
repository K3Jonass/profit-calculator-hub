import { createClient, listClients } from "@/lib/workspace-data";

export default async function WorkspaceClientsPage() {
  const { configured, data: clients } = await listClients();

  async function handleCreateClient(formData: FormData) {
    "use server";
    await createClient(formData);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[360px,1fr]">
      <section className="surface-card rounded-2xl p-5">
        <h2 className="ui-heading text-lg font-semibold">Create client</h2>
        <form action={handleCreateClient} className="mt-4 space-y-3">
          <input name="full_name" required placeholder="Full name" className="ui-input w-full rounded-xl px-3 py-2 text-sm" />
          <input name="email" type="email" placeholder="Email" className="ui-input w-full rounded-xl px-3 py-2 text-sm" />
          <input name="company_name" placeholder="Company" className="ui-input w-full rounded-xl px-3 py-2 text-sm" />
          <textarea name="notes" placeholder="Notes" className="min-h-24 ui-input w-full rounded-xl px-3 py-2 text-sm" />
          <button
            type="submit"
            disabled={!configured}
            className="ui-button-primary w-full rounded-xl px-4 py-2.5 text-sm font-semibold disabled:cursor-not-allowed"
          >
            Add client
          </button>
        </form>
      </section>

      <section className="surface-card rounded-2xl p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="ui-heading text-lg font-semibold">Clients</h2>
          <span className="ui-muted text-sm">{clients.length} total</span>
        </div>
        {!configured && <p className="mb-3 text-sm text-amber-700">Connect Supabase env vars to save and view clients.</p>}
        <div className="space-y-3">
          {clients.length === 0 ? (
            <p className="ui-muted text-sm">No clients yet.</p>
          ) : (
            clients.map((client) => (
              <article key={client.id} className="surface-card rounded-xl p-4">
                <h3 className="ui-heading font-semibold">{client.full_name}</h3>
                <p className="ui-text text-sm">{client.company_name || "Independent"}</p>
                {client.email && <p className="ui-text text-sm">{client.email}</p>}
                {client.notes && <p className="ui-muted mt-2 text-sm">{client.notes}</p>}
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
