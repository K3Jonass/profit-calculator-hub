import { NextRequest, NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/supabase";
import { createSupabaseRouteHandlerClient } from "@/lib/supabase-server";

function withNextParam(pathname: string, request: NextRequest) {
  const loginUrl = new URL("/login", request.url);
  if (pathname && pathname !== "/workspace") {
    loginUrl.searchParams.set("next", pathname);
  }
  return loginUrl;
}

export async function middleware(request: NextRequest) {
  if (!isSupabaseConfigured()) {
    return NextResponse.next();
  }

  const { supabase, applyCookies } = createSupabaseRouteHandlerClient(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/workspace") && !user) {
    return applyCookies(NextResponse.redirect(withNextParam(pathname, request)));
  }

  if ((pathname === "/login" || pathname === "/signup") && user) {
    return applyCookies(NextResponse.redirect(new URL("/workspace", request.url)));
  }

  return applyCookies(NextResponse.next({ request }));
}

export const config = {
  matcher: ["/workspace/:path*", "/login", "/signup"],
};