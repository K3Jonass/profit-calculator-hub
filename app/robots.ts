import type { MetadataRoute } from "next";
import { APP_BASE_URL, APP_HOST } from "@/lib/public-urls";
import { PRIVATE_NOINDEX_PREFIXES } from "@/lib/site-metadata";

function localizedDisallow(prefix: string) {
  return [prefix, `${prefix}/`, `/*${prefix}`, `/*${prefix}/*`];
}

export default function robots(): MetadataRoute.Robots {
  const privateDisallows = PRIVATE_NOINDEX_PREFIXES.flatMap((prefix) => localizedDisallow(prefix));

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        ...privateDisallows,
        "/*?*utm_",
        "/*?*fbclid=",
        "/*?*gclid=",
      ],
    },
    sitemap: `${APP_BASE_URL}/sitemap.xml`,
    host: APP_HOST,
  };
}
