-- Make workspace tables public-facing (no Supabase auth required)

alter table public.clients enable row level security;
alter table public.projects enable row level security;
alter table public.deliverables enable row level security;

drop policy if exists "Clients owner select" on public.clients;
drop policy if exists "Clients owner insert" on public.clients;
drop policy if exists "Clients owner update" on public.clients;
drop policy if exists "Projects owner select" on public.projects;
drop policy if exists "Projects owner insert" on public.projects;
drop policy if exists "Projects owner update" on public.projects;
drop policy if exists "Deliverables owner select" on public.deliverables;
drop policy if exists "Deliverables owner insert" on public.deliverables;
drop policy if exists "Deliverables owner update" on public.deliverables;

drop policy if exists "Public read clients" on public.clients;
create policy "Public read clients" on public.clients for select using (true);

drop policy if exists "Public write clients" on public.clients;
create policy "Public write clients" on public.clients for insert with check (true);

drop policy if exists "Public update clients" on public.clients;
create policy "Public update clients" on public.clients for update using (true) with check (true);

drop policy if exists "Public read projects" on public.projects;
create policy "Public read projects" on public.projects for select using (true);

drop policy if exists "Public write projects" on public.projects;
create policy "Public write projects" on public.projects for insert with check (true);

drop policy if exists "Public update projects" on public.projects;
create policy "Public update projects" on public.projects for update using (true) with check (true);

drop policy if exists "Public read deliverables" on public.deliverables;
create policy "Public read deliverables" on public.deliverables for select using (true);

drop policy if exists "Public write deliverables" on public.deliverables;
create policy "Public write deliverables" on public.deliverables for insert with check (true);

drop policy if exists "Public update deliverables" on public.deliverables;
create policy "Public update deliverables" on public.deliverables for update using (true) with check (true);
