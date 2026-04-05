import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },

      // OpenAI
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },

      // Anthropic / Claude
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },

      // Perplexity
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Perplexity-User",
        allow: "/",
      },
    ],
    sitemap: "https://profithub.cloud/sitemap.xml",
    host: "https://profithub.cloud",
  };
}