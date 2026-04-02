export type ProjectStatus = "planning" | "active" | "waiting" | "completed";
export type DeliverableStatus = "pending" | "in_progress" | "completed";
export type UserPlan = "free" | "no_ads";

export interface UserProfile {
  user_id: string;
  plan: UserPlan;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: string;
  owner_user_id: string;
  full_name: string;
  email: string | null;
  company_name: string | null;
  notes: string | null;
  created_at: string;
}

export interface Project {
  id: string;
  owner_user_id: string;
  client_id: string;
  project_name: string;
  status: ProjectStatus;
  start_date: string | null;
  due_date: string | null;
  budget: number | null;
  notes: string | null;
  portal_slug: string;
  source_contract_type: string | null;
  source_contract_payload: Record<string, unknown> | null;
  created_at: string;
}

export interface Deliverable {
  id: string;
  owner_user_id: string;
  project_id: string;
  title: string;
  status: DeliverableStatus;
  due_date: string | null;
  notes: string | null;
  created_at: string;
}

export interface ProjectWithClient extends Project {
  clients: Pick<Client, "id" | "full_name" | "company_name"> | null;
}

export interface ProjectDetails extends ProjectWithClient {
  deliverables: Deliverable[];
}
