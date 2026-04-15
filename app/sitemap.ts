import type { MetadataRoute } from "next";
import { APP_BASE_URL, getLocalizedPublicPaths } from "@/lib/public-urls";

const DEFAULT_LAST_MODIFIED = new Date("2026-04-14T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return getLocalizedPublicPaths().map((path) => ({
    url: `${APP_BASE_URL}${path}`,
    lastModified: DEFAULT_LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: path === "/en" ? 1 : 0.7,
  }));
}
