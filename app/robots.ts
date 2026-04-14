import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/workspace",
        "/workspace/",
        "/portal",
        "/portal/",
        "/api",
        "/api/",
        "/*?*utm_",
        "/*?*fbclid=",
        "/*?*gclid=",
      ],
    },
    sitemap: "https://profithub.cloud/sitemap.xml",
    host: "profithub.cloud",
  };
}
