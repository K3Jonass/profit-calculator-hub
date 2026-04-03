import { redirect } from "next/navigation";
import { isSupabaseConfigured } from "@/lib/supabase";
import { getSupabaseServerClient } from "@/lib/supabase-server";

export async function getAccessTokenFromCookies() {
  if (!isSupabaseConfigured()) {
    return "";
  }

  const supabase = await getSupabaseServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session?.access_token || "";
}

export async function getCurrentUser() {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabase = await getSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return null;
  }

  return data.user;
}

export async function requireAuthUser() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }
  return user;
}