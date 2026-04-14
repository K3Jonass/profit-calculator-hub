import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const NOINDEX_PREFIXES = ["/workspace", "/portal"];
const CANONICAL_HOST = "profithub.cloud";
const WWW_HOST = `www.${CANONICAL_HOST}`;

function isNoindexPath(pathname: string) {
  return NOINDEX_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function getCanonicalRedirect(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() ?? request.nextUrl.host;
  const proto = request.headers.get("x-forwarded-proto")?.toLowerCase();
  const shouldRedirectHost = host === WWW_HOST;
  const shouldRedirectProtocol = proto === "http";

  if (!shouldRedirectHost && !shouldRedirectProtocol) {
    return null;
  }

  const destination = request.nextUrl.clone();
  destination.protocol = "https:";
  destination.host = CANONICAL_HOST;

  return destination;
}

export function middleware(request: NextRequest) {
  const canonicalDestination = getCanonicalRedirect(request);

  if (canonicalDestination) {
    return NextResponse.redirect(canonicalDestination, 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (isNoindexPath(request.nextUrl.pathname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
