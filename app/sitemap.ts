import type { MetadataRoute } from "next";
import { APP_BASE_URL, getLocalizedPublicPaths } from "@/lib/public-urls";
import { getSitemapChangeFrequency, getSitemapPriority, resolvePublicPath } from "@/lib/site-metadata";

const DEFAULT_LAST_MODIFIED = new Date("2026-05-23T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return getLocalizedPublicPaths().map((path) => {
    const internalPath = path.replace(/^\/(en|ar|fr|es|ru)/, "") || "/";

    return {
      url: `${APP_BASE_URL}${path}`,
      lastModified: DEFAULT_LAST_MODIFIED,
      changeFrequency: getSitemapChangeFrequency(internalPath),
      priority: getSitemapPriority(resolvePublicPath(internalPath)),
    };
  });
}
