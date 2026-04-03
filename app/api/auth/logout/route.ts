import { NextRequest, NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/supabase";
import { createSupabaseRouteHandlerClient } from "@/lib/supabase-server";

export async function POST(request: NextRequest) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ ok: true });
  }

  const { supabase, applyCookies } = createSupabaseRouteHandlerClient(request);
  await supabase.auth.signOut();

  return applyCookies(NextResponse.json({ ok: true }));
}
