export type ProjectStatus = "planning" | "active" | "waiting" | "completed";
export type DeliverableStatus = "pending" | "in_progress" | "completed";

export interface Client {
  id: string;
  full_name: string;
  email: string | null;
  company_name: string | null;
  notes: string | null;
  created_at: string;
}

export interface Project {
  id: string;
  client_id: string;
  project_name: string;
  status: ProjectStatus;
  start_date: string | null;
  due_date: string | null;
  budget: number | null;
  notes: string | null;
  portal_slug: string;
  created_at: string;
}

export interface Deliverable {
  id: string;
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
