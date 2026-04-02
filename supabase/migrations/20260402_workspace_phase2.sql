

create extension if not exists "pgcrypto";

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text,
  company_name text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  project_name text not null,
  status text not null check (status in ('planning', 'active', 'waiting', 'completed')),
  start_date date,
  due_date date,
  budget numeric(12,2),
  notes text,
  portal_slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.deliverables (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  title text not null,
  status text not null check (status in ('pending', 'in_progress', 'completed')),
  due_date date,
  notes text,
  created_at timestamptz not null default now()
);

create index if not exists idx_projects_client_id on public.projects(client_id);
create index if not exists idx_projects_portal_slug on public.projects(portal_slug);
create index if not exists idx_deliverables_project_id on public.deliverables(project_id);

alter table public.clients enable row level security;
alter table public.projects enable row level security;
alter table public.deliverables enable row level security;

-- MVP public policies (adjust for production auth later)
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
