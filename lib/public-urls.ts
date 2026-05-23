import { blogPosts } from "@/lib/blog-posts";
import { contractGenerators } from "@/lib/contracts-generators";
import { SUPPORTED_LOCALES, withLocale } from "@/lib/i18n/config";
import { PROFESSION_SEO_PAGE_PATHS } from "@/lib/seo-pages/profession-pages-content";

const PRODUCTION_HOST = "profithub.cloud";
const PRODUCTION_BASE_URL = `https://${PRODUCTION_HOST}`;

/**
 * Site origin for metadata, sitemap, canonical URLs, and JSON-LD.
 * - development: http://localhost:3000 (override with NEXT_PUBLIC_SITE_URL)
 * - production:  https://profithub.cloud (override with NEXT_PUBLIC_SITE_URL)
 */
function resolveAppBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return PRODUCTION_BASE_URL;
}

export const APP_BASE_URL = resolveAppBaseUrl();
export const APP_HOST = new URL(APP_BASE_URL).host;

const PRIVATE_PREFIXES = [
  "/workspace",
  "/portal",
  "/api",
  "/auth",
  "/dashboard",
  "/account",
  "/admin",
  "/login",
  "/sign-in",
  "/signin",
  "/signup",
  "/register",
];
const REDIRECT_SOURCE_PATHS = new Set(["/privacy"]);

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
  "/freelance-contract-generator",
  "/invoice-generator",
  "/proposal-generator",
  "/freelance-contract-template",
  "/service-agreement-template",
  "/free-invoice-template",
  "/invoice-number-example",
  "/consulting-agreement-template",
  ...PROFESSION_SEO_PAGE_PATHS,
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

const blogPaths = blogPosts
  .map((post) => post.href)
  .filter((href) => href.startsWith("/"));

function normalizePath(path: string) {
  if (!path || path === "/") {
    return "/";
  }

  return path.endsWith("/") ? path.slice(0, -1) : path;
}

function isIndexablePath(path: string) {
  if (!path.startsWith("/")) {
    return false;
  }

  if (REDIRECT_SOURCE_PATHS.has(path)) {
    return false;
  }

  return !PRIVATE_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
}

export function getAllPublicPaths() {
  return [...new Set([...STATIC_PUBLIC_PATHS, ...contractPaths, ...blogPaths].map(normalizePath))]
    .filter(isIndexablePath)
    .sort((a, b) => a.localeCompare(b));
}

export function toAbsoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${APP_BASE_URL}${path}`;
}

export function getAllPublicUrls() {
  return getAllPublicPaths().map(toAbsoluteUrl);
}


export function getLocalizedPublicPaths() {
  return getAllPublicPaths().flatMap((path) => SUPPORTED_LOCALES.map((locale) => withLocale(path, locale)));
}
