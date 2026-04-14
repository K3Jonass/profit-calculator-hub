import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog", "/calculators", "/contracts", "/about", "/contact"],
        disallow: [
          "/workspace",
          "/workspace/",
          "/portal",
          "/portal/",
          "/api/",
          "/*?*utm_",
          "/*?*fbclid=",
          "/*?*gclid=",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: "https://profithub.cloud/sitemap.xml",
    host: "profithub.cloud",
  };
}
