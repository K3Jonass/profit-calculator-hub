import type { MetadataRoute } from "next";
import { APP_BASE_URL, getAllPublicPaths } from "@/lib/public-urls";

const PRIORITY_BY_PATH: Record<string, number> = {
  "/": 1,
  "/contracts": 0.9,
  "/blog": 0.8,
  "/about": 0.7,
  "/contact": 0.6,
  "/privacy-policy": 0.4,
  "/terms": 0.4,
};

const DEFAULT_LAST_MODIFIED = new Date("2026-04-14T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  // NOTE: New public pages/tools should be registered in lib/public-urls.ts.
  return getAllPublicPaths().map((path) => ({
    url: `${APP_BASE_URL}${path}`,
    lastModified: DEFAULT_LAST_MODIFIED,
    changeFrequency: "weekly" as const,
    priority: PRIORITY_BY_PATH[path] ?? 0.7,
  }));
}
