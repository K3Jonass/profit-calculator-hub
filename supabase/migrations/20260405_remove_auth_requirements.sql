-- Make workspace tables public-facing (no Supabase auth required)
drop policy if exists "Clients owner select" on public.clients;
...
create policy "Public read clients" on public.clients for select using (true);
create policy "Public write clients" on public.clients for insert with check (true);
...
create policy "Public read projects" on public.projects for select using (true);
create policy "Public write projects" on public.projects for insert with check (true);
...
create policy "Public read deliverables" on public.deliverables for select using (true);
create policy "Public write deliverables" on public.deliverables for insert with check (true);
create policy "Public update deliverables" on public.deliverables for update using (true) with check (true);