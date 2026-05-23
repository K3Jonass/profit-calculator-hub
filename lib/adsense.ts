import { isPrivatePath, normalizePath } from "@/lib/site-metadata";

export const ADSENSE_CLIENT_ID = "ca-pub-5174210119731197";

export const ADSENSE_SCRIPT_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;

/**
 * Public content pages eligible for AdSense.
 * Excludes private/auth areas and conversion-focused contract generator tools.
 */
export function isAdSenseEligiblePath(pathname: string) {
  const path = normalizePath(pathname);

  if (isPrivatePath(path)) {
    return false;
  }

  // Interactive contract tools; the /contracts hub remains eligible.
  if (path.startsWith("/contracts/")) {
    return false;
  }

  return true;
}

export function isAdSenseEnabled() {
  return process.env.NODE_ENV === "production";
}
