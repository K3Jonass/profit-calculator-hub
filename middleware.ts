import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, isSupportedLocale, stripLocaleFromPathname } from "@/lib/i18n/config";

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

function isPrivatePath(pathname: string) {
  return pathname === "/workspace" || pathname.startsWith("/workspace/") || pathname === "/portal" || pathname.startsWith("/portal/");
}

export function middleware(request: NextRequest) {
  const canonicalDestination = getCanonicalRedirect(request);

  if (canonicalDestination) {
    return NextResponse.redirect(canonicalDestination, 308);
  }

  const pathname = request.nextUrl.pathname;
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const preferredLocale = cookieLocale && isSupportedLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;
  const locale = firstSegment && isSupportedLocale(firstSegment) ? firstSegment : preferredLocale;

  if (!isPrivatePath(pathname) && !isSupportedLocale(firstSegment || "")) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = pathname === "/" ? `/${preferredLocale}` : `/${preferredLocale}${pathname}`;
    return NextResponse.redirect(redirectUrl, 307);
  }

  const internalPathname = stripLocaleFromPathname(pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-pathname", internalPathname);

  const response = isSupportedLocale(firstSegment || "")
    ? NextResponse.rewrite(new URL(internalPathname, request.url), {
        request: {
          headers: requestHeaders,
        },
      })
    : NextResponse.next({ request: { headers: requestHeaders } });

  response.cookies.set("NEXT_LOCALE", locale, { path: "/", sameSite: "lax" });

  if (isNoindexPath(internalPathname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
