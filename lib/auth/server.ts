import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase";

export const ACCESS_TOKEN_COOKIE = "ph_access_token";
export const REFRESH_TOKEN_COOKIE = "ph_refresh_token";

export async function getAccessTokenFromCookies() {
  const cookieStore = await cookies();
  return cookieStore.get(ACCESS_TOKEN_COOKIE)?.value || "";
}

export async function getCurrentUser() {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const accessToken = await getAccessTokenFromCookies();
  if (!accessToken) {
    return null;
  }

  const supabase = getSupabaseServerClient(accessToken);
  const { data, error } = await supabase.auth.getUser(accessToken);

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
