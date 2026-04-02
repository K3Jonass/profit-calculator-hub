import { revalidatePath } from "next/cache";
import { getAccessTokenFromCookies, requireAuthUser } from "@/lib/auth/server";
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

async function getAuthContext() {
  const user = await requireAuthUser();
  const accessToken = await getAccessTokenFromCookies();

  if (!accessToken) {
    throw new Error("You must be logged in.");
  }

  return { user, accessToken };
}

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

  const { user, accessToken } = await getAuthContext();

  const [clients, projects, deliverables] = await Promise.all([
    supabaseRestRequest<Client[]>({
      table: "clients",
      query: { select: "id", owner_user_id: `eq.${user.id}` },
      accessToken,
    }),
    supabaseRestRequest<Project[]>({
      table: "projects",
      query: { select: "id,status", owner_user_id: `eq.${user.id}` },
      accessToken,
    }),
    supabaseRestRequest<Deliverable[]>({
      table: "deliverables",
      query: { select: "id", owner_user_id: `eq.${user.id}` },
      accessToken,
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

  const { user, accessToken } = await getAuthContext();

  const data = await supabaseRestRequest<Client[]>({
    table: "clients",
    query: {
      select: "*",
      owner_user_id: `eq.${user.id}`,
      order: "created_at.desc",
    },
    accessToken,
  });

  return { configured: true, data };
}

export async function createClient(formData: FormData) {
  if (!isSupabaseConfigured()) {
    return;
  }

  const { user, accessToken } = await getAuthContext();

  const fullName = String(formData.get("full_name") ?? "").trim();
  if (!fullName) {
    throw new Error("Client full name is required.");
  }

  await supabaseRestRequest<Client[]>({
    table: "clients",
    method: "POST",
    body: {
      owner_user_id: user.id,
      full_name: fullName,
      email: String(formData.get("email") ?? "").trim() || null,
      company_name: String(formData.get("company_name") ?? "").trim() || null,
      notes: String(formData.get("notes") ?? "").trim() || null,
    },
    preferReturnRepresentation: true,
    accessToken,
  });

  revalidatePath("/workspace");
  revalidatePath("/workspace/clients");
}

export async function listProjects() {
  if (!isSupabaseConfigured()) {
    return { configured: false, data: [] as ProjectWithClient[] };
  }

  const { user, accessToken } = await getAuthContext();

  const data = await supabaseRestRequest<ProjectWithClient[]>({
    table: "projects",
    query: {
      select:
        "id,owner_user_id,client_id,project_name,status,start_date,due_date,budget,notes,portal_slug,created_at,source_contract_type,source_contract_payload,clients(id,full_name,company_name)",
      owner_user_id: `eq.${user.id}`,
      order: "created_at.desc",
    },
    accessToken,
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

async function resolveClientId({
  clientId,
  prefillClientName,
  userId,
  accessToken,
}: {
  clientId: string;
  prefillClientName: string;
  userId: string;
  accessToken: string;
}) {
  if (clientId) {
    return clientId;
  }

  if (!prefillClientName) {
    throw new Error("Client and project name are required.");
  }

  const existing = await supabaseRestRequest<Client[]>({
    table: "clients",
    query: {
      select: "id,full_name",
      owner_user_id: `eq.${userId}`,
      full_name: `eq.${prefillClientName}`,
      limit: "1",
    },
    accessToken,
  });

  if (existing[0]) {
    return existing[0].id;
  }

  const created = await supabaseRestRequest<Client[]>({
    table: "clients",
    method: "POST",
    body: {
      owner_user_id: userId,
      full_name: prefillClientName,
      notes: "Auto-created from freelancer contract.",
    },
    preferReturnRepresentation: true,
    accessToken,
  });

  return created[0]?.id;
}

export async function createProject(formData: FormData) {
  if (!isSupabaseConfigured()) {
    return;
  }

  const { user, accessToken } = await getAuthContext();

  const clientId = String(formData.get("client_id") ?? "").trim();
  const prefillClientName = String(formData.get("prefill_client_name") ?? "").trim();
  const projectName = String(formData.get("project_name") ?? "").trim();

  if (!projectName) {
    throw new Error("Client and project name are required.");
  }

  const resolvedClientId = await resolveClientId({
    clientId,
    prefillClientName,
    userId: user.id,
    accessToken,
  });

  if (!resolvedClientId) {
    throw new Error("Unable to resolve client.");
  }

  const status = String(formData.get("status") ?? "planning") as ProjectStatus;
  const sourceContractType = String(formData.get("source_contract_type") ?? "").trim() || null;
  const sourceContractPayloadRaw = String(formData.get("source_contract_payload") ?? "").trim();

  await supabaseRestRequest<Project[]>({
    table: "projects",
    method: "POST",
    body: {
      owner_user_id: user.id,
      client_id: resolvedClientId,
      project_name: projectName,
      status,
      start_date: String(formData.get("start_date") ?? "").trim() || null,
      due_date: String(formData.get("due_date") ?? "").trim() || null,
      budget: Number(formData.get("budget") || 0) || null,
      notes: String(formData.get("notes") ?? "").trim() || null,
      portal_slug: createPortalSlug(projectName),
      source_contract_type: sourceContractType,
      source_contract_payload: sourceContractPayloadRaw ? JSON.parse(sourceContractPayloadRaw) : null,
    },
    preferReturnRepresentation: true,
    accessToken,
  });

  revalidatePath("/workspace");
  revalidatePath("/workspace/projects");
}

export async function getProjectById(projectId: string) {
  if (!isSupabaseConfigured()) {
    return { configured: false, data: null as ProjectDetails | null };
  }

  const { user, accessToken } = await getAuthContext();

  const projectRows = await supabaseRestRequest<ProjectWithClient[]>({
    table: "projects",
    query: {
      select:
        "id,owner_user_id,client_id,project_name,status,start_date,due_date,budget,notes,portal_slug,created_at,source_contract_type,source_contract_payload,clients(id,full_name,company_name)",
      id: `eq.${projectId}`,
      owner_user_id: `eq.${user.id}`,
      limit: "1",
    },
    accessToken,
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
      owner_user_id: `eq.${user.id}`,
      order: "created_at.desc",
    },
    accessToken,
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

  const { user, accessToken } = await getAuthContext();

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
      owner_user_id: user.id,
      project_id: projectId,
      title,
      status,
      due_date: String(formData.get("due_date") ?? "").trim() || null,
      notes: String(formData.get("notes") ?? "").trim() || null,
    },
    preferReturnRepresentation: true,
    accessToken,
  });

  revalidatePath(`/workspace/projects/${projectId}`);
}

export async function updateDeliverableStatus(formData: FormData) {
  if (!isSupabaseConfigured()) {
    return;
  }

  const { user, accessToken } = await getAuthContext();

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
      owner_user_id: `eq.${user.id}`,
    },
    body: { status },
    preferReturnRepresentation: true,
    accessToken,
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
        "id,owner_user_id,client_id,project_name,status,start_date,due_date,budget,notes,portal_slug,created_at,source_contract_type,source_contract_payload,clients(id,full_name,company_name)",
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
