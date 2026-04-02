import { revalidatePath } from "next/cache";
import { isSupabaseConfigured, supabaseRestRequest } from "@/lib/supabase";
import {
  Client,
  Deliverable,
  DeliverableStatus,
  Project,
  ProjectDetails,
  ProjectStatus,
  ProjectWithClient,
} from "@/lib/workspace-types";

export async function getWorkspaceSummary() {
  if (!isSupabaseConfigured()) {
    return {
      configured: false,
      clientCount: 0,
      projectCount: 0,
      activeProjectCount: 0,
      deliverableCount: 0,
    };
  }

  const [clients, projects, deliverables] = await Promise.all([
    supabaseRestRequest<Client[]>({
      table: "clients",
      query: { select: "id" },
    }),
    supabaseRestRequest<Project[]>({
      table: "projects",
      query: { select: "id,status" },
    }),
    supabaseRestRequest<Deliverable[]>({
      table: "deliverables",
      query: { select: "id" },
    }),
  ]);

  return {
    configured: true,
    clientCount: clients.length,
    projectCount: projects.length,
    activeProjectCount: projects.filter((p) => p.status === "active").length,
    deliverableCount: deliverables.length,
  };
}

export async function listClients() {
  if (!isSupabaseConfigured()) {
    return { configured: false, data: [] as Client[] };
  }

  const data = await supabaseRestRequest<Client[]>({
    table: "clients",
    query: {
      select: "*",
      order: "created_at.desc",
    },
  });

  return { configured: true, data };
}

export async function createClient(formData: FormData) {
  if (!isSupabaseConfigured()) {
    return;
  }

  const fullName = String(formData.get("full_name") ?? "").trim();
  if (!fullName) {
    throw new Error("Client full name is required.");
  }

  await supabaseRestRequest<Client[]>({
    table: "clients",
    method: "POST",
    body: {
      full_name: fullName,
      email: String(formData.get("email") ?? "").trim() || null,
      company_name: String(formData.get("company_name") ?? "").trim() || null,
      notes: String(formData.get("notes") ?? "").trim() || null,
    },
    preferReturnRepresentation: true,
  });

  revalidatePath("/workspace");
  revalidatePath("/workspace/clients");
}

export async function listProjects() {
  if (!isSupabaseConfigured()) {
    return { configured: false, data: [] as ProjectWithClient[] };
  }

  const data = await supabaseRestRequest<ProjectWithClient[]>({
    table: "projects",
    query: {
      select:
        "id,client_id,project_name,status,start_date,due_date,budget,notes,portal_slug,created_at,clients(id,full_name,company_name)",
      order: "created_at.desc",
    },
  });

  return { configured: true, data };
}

function createPortalSlug(projectName: string) {
  const base = projectName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 40);

  return `${base || "project"}-${Math.random().toString(36).slice(2, 8)}`;
}

export async function createProject(formData: FormData) {
  if (!isSupabaseConfigured()) {
    return;
  }

  const clientId = String(formData.get("client_id") ?? "").trim();
  const projectName = String(formData.get("project_name") ?? "").trim();

  if (!clientId || !projectName) {
    throw new Error("Client and project name are required.");
  }

  const status = String(formData.get("status") ?? "planning") as ProjectStatus;

  await supabaseRestRequest<Project[]>({
    table: "projects",
    method: "POST",
    body: {
      client_id: clientId,
      project_name: projectName,
      status,
      start_date: String(formData.get("start_date") ?? "").trim() || null,
      due_date: String(formData.get("due_date") ?? "").trim() || null,
      budget: Number(formData.get("budget") || 0) || null,
      notes: String(formData.get("notes") ?? "").trim() || null,
      portal_slug: createPortalSlug(projectName),
    },
    preferReturnRepresentation: true,
  });

  revalidatePath("/workspace");
  revalidatePath("/workspace/projects");
}

export async function getProjectById(projectId: string) {
  if (!isSupabaseConfigured()) {
    return { configured: false, data: null as ProjectDetails | null };
  }

  const projectRows = await supabaseRestRequest<ProjectWithClient[]>({
    table: "projects",
    query: {
      select:
        "id,client_id,project_name,status,start_date,due_date,budget,notes,portal_slug,created_at,clients(id,full_name,company_name)",
      id: `eq.${projectId}`,
      limit: "1",
    },
  });

  const project = projectRows[0];
  if (!project) {
    return { configured: true, data: null as ProjectDetails | null };
  }

  const deliverables = await supabaseRestRequest<Deliverable[]>({
    table: "deliverables",
    query: {
      select: "*",
      project_id: `eq.${projectId}`,
      order: "created_at.desc",
    },
  });

  return {
    configured: true,
    data: {
      ...project,
      deliverables,
    },
  };
}

export async function createDeliverable(formData: FormData) {
  if (!isSupabaseConfigured()) {
    return;
  }

  const projectId = String(formData.get("project_id") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();

  if (!projectId || !title) {
    throw new Error("Project and title are required.");
  }

  const status = String(formData.get("status") ?? "pending") as DeliverableStatus;

  await supabaseRestRequest<Deliverable[]>({
    table: "deliverables",
    method: "POST",
    body: {
      project_id: projectId,
      title,
      status,
      due_date: String(formData.get("due_date") ?? "").trim() || null,
      notes: String(formData.get("notes") ?? "").trim() || null,
    },
    preferReturnRepresentation: true,
  });

  revalidatePath(`/workspace/projects/${projectId}`);
}

export async function updateDeliverableStatus(formData: FormData) {
  if (!isSupabaseConfigured()) {
    return;
  }

  const deliverableId = String(formData.get("deliverable_id") ?? "").trim();
  const projectId = String(formData.get("project_id") ?? "").trim();
  const status = String(formData.get("status") ?? "pending") as DeliverableStatus;

  if (!deliverableId || !projectId) {
    throw new Error("Deliverable and project are required.");
  }

  await supabaseRestRequest<Deliverable[]>({
    table: "deliverables",
    method: "PATCH",
    query: {
      id: `eq.${deliverableId}`,
    },
    body: { status },
    preferReturnRepresentation: true,
  });

  revalidatePath(`/workspace/projects/${projectId}`);
}

export async function getPortalProjectBySlug(slug: string) {
  if (!isSupabaseConfigured()) {
    return { configured: false, data: null as ProjectDetails | null };
  }

  const projectRows = await supabaseRestRequest<ProjectWithClient[]>({
    table: "projects",
    query: {
      select:
        "id,client_id,project_name,status,start_date,due_date,budget,notes,portal_slug,created_at,clients(id,full_name,company_name)",
      portal_slug: `eq.${slug}`,
      limit: "1",
    },
  });

  const project = projectRows[0];
  if (!project) {
    return { configured: true, data: null as ProjectDetails | null };
  }

  const deliverables = await supabaseRestRequest<Deliverable[]>({
    table: "deliverables",
    query: {
      select: "*",
      project_id: `eq.${project.id}`,
      order: "created_at.asc",
    },
  });

  return {
    configured: true,
    data: {
      ...project,
      deliverables,
    },
  };
}
