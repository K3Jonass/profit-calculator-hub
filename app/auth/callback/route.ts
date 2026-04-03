import { NextRequest, NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/supabase";
import { createSupabaseRouteHandlerClient } from "@/lib/supabase-server";

function getSafeNextPath(value: string | null) {
  if (!value || !value.startsWith("/")) {
    return "/workspace";
  }

  return value;
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const nextPath = getSafeNextPath(requestUrl.searchParams.get("next"));

  if (!isSupabaseConfigured()) {
    const url = new URL(`/login?error=${encodeURIComponent("Supabase is not configured.")}`, request.url);
    return NextResponse.redirect(url);
  }

  if (!code) {
    const url = new URL(`/login?error=${encodeURIComponent("Missing OAuth code.")}`, request.url);
    return NextResponse.redirect(url);
  }

  const { supabase, applyCookies } = createSupabaseRouteHandlerClient(request);
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    const url = new URL(`/login?error=${encodeURIComponent(error.message)}`, request.url);
    return applyCookies(NextResponse.redirect(url));
  }

  const destination = new URL(nextPath, request.url);
  return applyCookies(NextResponse.redirect(destination));
}