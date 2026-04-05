import { blogPosts } from "@/lib/blog-posts";
import { contractGenerators } from "@/lib/contracts-generators";

export const APP_HOST = "profithub.cloud";
export const APP_BASE_URL = `https://${APP_HOST}`;

// NOTE: For every new public page/tool, update this list so sitemap + IndexNow stay in sync.
export const STATIC_PUBLIC_PATHS = [
  "/",
  "/calculators",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/blog",
  "/contracts",
  "/calculators/shopify-profit",
  "/calculators/dropshipping-profit",
  "/calculators/saas-mrr",
  "/calculators/freelance-rate",
  "/calculators/breakeven",
  "/calculators/subscription-leak",
  "/calculators/revenue-share",
  "/calculators/cost-of-delay",
  "/calculators/freelance-project-profit",
  "/calculators/decision-score",
] as const;

const contractPaths = contractGenerators
  .filter((item) => !item.disabled && item.href.startsWith("/"))
  .map((item) => item.href);

const blogPaths = blogPosts.map((post) => post.href);

export function getAllPublicPaths() {
  return [...new Set([...STATIC_PUBLIC_PATHS, ...contractPaths, ...blogPaths])];
}

export function toAbsoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${APP_BASE_URL}${path}`;
}

export function getAllPublicUrls() {
  return getAllPublicPaths().map(toAbsoluteUrl);
}
