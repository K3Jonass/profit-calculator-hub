-- Remove auth-owned policies and make workspace tables fully public.
-- Safe to run repeatedly.

-- drop auth-scoped policies if they exist

drop policy if exists "Profiles owner read" on public.user_profiles;
drop policy if exists "Profiles owner insert" on public.user_profiles;
drop policy if exists "Profiles owner update" on public.user_profiles;

drop policy if exists "Clients owner select" on public.clients;
drop policy if exists "Clients owner insert" on public.clients;
drop policy if exists "Clients owner update" on public.clients;

drop policy if exists "Projects owner select" on public.projects;
drop policy if exists "Projects owner insert" on public.projects;
drop policy if exists "Projects owner update" on public.projects;

drop policy if exists "Deliverables owner select" on public.deliverables;
drop policy if exists "Deliverables owner insert" on public.deliverables;
drop policy if exists "Deliverables owner update" on public.deliverables;

-- drop old trigger/function used for auth user bootstrap

drop trigger if exists on_auth_user_created_profile on auth.users;
drop function if exists public.handle_new_user_profile();

-- keep RLS enabled but allow public access for this app
alter table public.clients enable row level security;
alter table public.projects enable row level security;
alter table public.deliverables enable row level security;

-- recreate public policies idempotently

drop policy if exists "Public read clients" on public.clients;
create policy "Public read clients" on public.clients for select using (true);

drop policy if exists "Public write clients" on public.clients;
create policy "Public write clients" on public.clients for insert with check (true);

drop policy if exists "Public read projects" on public.projects;
create policy "Public read projects" on public.projects for select using (true);

drop policy if exists "Public write projects" on public.projects;
create policy "Public write projects" on public.projects for insert with check (true);

drop policy if exists "Public read deliverables" on public.deliverables;
create policy "Public read deliverables" on public.deliverables for select using (true);

drop policy if exists "Public write deliverables" on public.deliverables;
create policy "Public write deliverables" on public.deliverables for insert with check (true);

drop policy if exists "Public update deliverables" on public.deliverables;
create policy "Public update deliverables" on public.deliverables for update using (true) with check (true);
