import type { MetadataRoute } from "next";

const siteUrl = "https://profithub.cloud";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1 },
    { url: `${siteUrl}/about`, priority: 0.7 },
    { url: `${siteUrl}/contact`, priority: 0.6 },
    { url: `${siteUrl}/privacy-policy`, priority: 0.4 },
    { url: `${siteUrl}/terms`, priority: 0.4 },

    { url: `${siteUrl}/calculators/shopify-profit`, priority: 0.9 },
    { url: `${siteUrl}/calculators/dropshipping-profit`, priority: 0.9 },
    { url: `${siteUrl}/calculators/saas-mrr`, priority: 0.9 },
    { url: `${siteUrl}/calculators/freelance-rate`, priority: 0.9 },
    { url: `${siteUrl}/calculators/breakeven`, priority: 0.9 },
  ];
}