import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://profithub.cloud";

  const staticPages = [
    {
      url: `${baseUrl}`,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculators/shopify-profit`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/dropshipping-profit`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/saas-mrr`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/freelance-rate`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/breakeven`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/subscription-leak`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/revenue-share`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/cost-of-delay`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/freelance-project-profit`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/business-decision-score`,
      priority: 0.9,
    },
  ];

  const staticUrls = staticPages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}${post.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls];
}