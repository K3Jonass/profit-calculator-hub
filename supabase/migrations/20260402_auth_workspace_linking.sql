create extension if not exists "pgcrypto";

create table if not exists public.user_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  plan text not null default 'free' check (plan in ('free', 'no_ads')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.clients add column if not exists owner_user_id uuid references auth.users(id) on delete cascade;
alter table public.projects add column if not exists owner_user_id uuid references auth.users(id) on delete cascade;
alter table public.deliverables add column if not exists owner_user_id uuid references auth.users(id) on delete cascade;

alter table public.projects add column if not exists source_contract_type text;
alter table public.projects add column if not exists source_contract_payload jsonb;

create index if not exists idx_clients_owner_user_id on public.clients(owner_user_id);
create index if not exists idx_projects_owner_user_id on public.projects(owner_user_id);
create index if not exists idx_deliverables_owner_user_id on public.deliverables(owner_user_id);

alter table public.user_profiles enable row level security;
alter table public.clients enable row level security;
alter table public.projects enable row level security;
alter table public.deliverables enable row level security;

-- user profiles policies
 drop policy if exists "Profiles owner read" on public.user_profiles;
create policy "Profiles owner read" on public.user_profiles
for select using (auth.uid() = user_id);

 drop policy if exists "Profiles owner insert" on public.user_profiles;
create policy "Profiles owner insert" on public.user_profiles
for insert with check (auth.uid() = user_id);

 drop policy if exists "Profiles owner update" on public.user_profiles;
create policy "Profiles owner update" on public.user_profiles
for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- clients policies
 drop policy if exists "Public read clients" on public.clients;
 drop policy if exists "Public write clients" on public.clients;
 drop policy if exists "Clients owner select" on public.clients;
create policy "Clients owner select" on public.clients
for select using (auth.uid() = owner_user_id);

 drop policy if exists "Clients owner insert" on public.clients;
create policy "Clients owner insert" on public.clients
for insert with check (auth.uid() = owner_user_id);

 drop policy if exists "Clients owner update" on public.clients;
create policy "Clients owner update" on public.clients
for update using (auth.uid() = owner_user_id) with check (auth.uid() = owner_user_id);

-- projects policies
 drop policy if exists "Public read projects" on public.projects;
 drop policy if exists "Public write projects" on public.projects;
 drop policy if exists "Projects owner select" on public.projects;
create policy "Projects owner select" on public.projects
for select using (auth.uid() = owner_user_id);

 drop policy if exists "Projects owner insert" on public.projects;
create policy "Projects owner insert" on public.projects
for insert with check (auth.uid() = owner_user_id);

 drop policy if exists "Projects owner update" on public.projects;
create policy "Projects owner update" on public.projects
for update using (auth.uid() = owner_user_id) with check (auth.uid() = owner_user_id);

-- deliverables policies
 drop policy if exists "Public read deliverables" on public.deliverables;
 drop policy if exists "Public write deliverables" on public.deliverables;
 drop policy if exists "Public update deliverables" on public.deliverables;
 drop policy if exists "Deliverables owner select" on public.deliverables;
create policy "Deliverables owner select" on public.deliverables
for select using (auth.uid() = owner_user_id);

 drop policy if exists "Deliverables owner insert" on public.deliverables;
create policy "Deliverables owner insert" on public.deliverables
for insert with check (auth.uid() = owner_user_id);

 drop policy if exists "Deliverables owner update" on public.deliverables;
create policy "Deliverables owner update" on public.deliverables
for update using (auth.uid() = owner_user_id) with check (auth.uid() = owner_user_id);

-- public portal reads for shareable project pages
 drop policy if exists "Projects public portal select" on public.projects;
create policy "Projects public portal select" on public.projects
for select using (auth.role() = 'anon' and portal_slug is not null);

 drop policy if exists "Clients public portal select" on public.clients;
create policy "Clients public portal select" on public.clients
for select using (
  auth.role() = 'anon' and exists (
    select 1 from public.projects p where p.client_id = clients.id and p.portal_slug is not null
  )
);

 drop policy if exists "Deliverables public portal select" on public.deliverables;
create policy "Deliverables public portal select" on public.deliverables
for select using (
  auth.role() = 'anon' and exists (
    select 1 from public.projects p where p.id = deliverables.project_id and p.portal_slug is not null
  )
);

create or replace function public.handle_new_user_profile()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.user_profiles (user_id, plan)
  values (new.id, 'free')
  on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_profile on auth.users;
create trigger on_auth_user_created_profile
after insert on auth.users
for each row execute function public.handle_new_user_profile();
