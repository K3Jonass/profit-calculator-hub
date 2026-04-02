import { createClient, listClients } from "@/lib/workspace-data";

export default async function WorkspaceClientsPage() {
  const { configured, data: clients } = await listClients();

  async function handleCreateClient(formData: FormData) {
    "use server";
    await createClient(formData);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[360px,1fr]">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Create client</h2>
        <form action={handleCreateClient} className="mt-4 space-y-3">
          <input name="full_name" required placeholder="Full name" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
          <input name="email" type="email" placeholder="Email" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
          <input name="company_name" placeholder="Company" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
          <textarea name="notes" placeholder="Notes" className="min-h-24 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
          <button
            type="submit"
            disabled={!configured}
            className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Add client
          </button>
        </form>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Clients</h2>
          <span className="text-sm text-slate-500">{clients.length} total</span>
        </div>
        {!configured && <p className="mb-3 text-sm text-amber-700">Connect Supabase env vars to save and view clients.</p>}
        <div className="space-y-3">
          {clients.length === 0 ? (
            <p className="text-sm text-slate-500">No clients yet.</p>
          ) : (
            clients.map((client) => (
              <article key={client.id} className="rounded-xl border border-slate-200 p-4">
                <h3 className="font-semibold text-slate-900">{client.full_name}</h3>
                <p className="text-sm text-slate-600">{client.company_name || "Independent"}</p>
                {client.email && <p className="text-sm text-slate-600">{client.email}</p>}
                {client.notes && <p className="mt-2 text-sm text-slate-500">{client.notes}</p>}
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
