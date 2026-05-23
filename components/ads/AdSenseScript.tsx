import Script from "next/script";
import { headers } from "next/headers";
import {
  ADSENSE_CLIENT_ID,
  ADSENSE_SCRIPT_SRC,
  isAdSenseEligiblePath,
  isAdSenseEnabled,
} from "@/lib/adsense";

export default async function AdSenseScript() {
  if (!isAdSenseEnabled()) {
    return null;
  }

  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";

  if (!isAdSenseEligiblePath(pathname)) {
    return null;
  }

  return (
    <Script
      id="google-adsense"
      async
      src={ADSENSE_SCRIPT_SRC}
      crossOrigin="anonymous"
      strategy="afterInteractive"
      data-ad-client={ADSENSE_CLIENT_ID}
    />
  );
}
