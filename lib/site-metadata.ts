import type { Metadata } from "next";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, stripLocaleFromPathname, withLocale, type AppLocale } from "@/lib/i18n/config";
import { APP_BASE_URL } from "@/lib/public-urls";

export const SITE_NAME = "Profithub";

export const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Profithub – Freelance contracts, invoices, and business calculators",
} as const;

export const PRIVATE_NOINDEX_PREFIXES = [
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
] as const;

export const CANONICAL_PATH_OVERRIDES: Record<string, string> = {
  "/privacy": "/privacy-policy",
};

export function normalizePath(path: string) {
  if (!path || path === "/") {
    return "/";
  }

  return path.endsWith("/") ? path.slice(0, -1) : path;
}

export function isPrivatePath(pathname: string) {
  const path = normalizePath(stripLocaleFromPathname(pathname));

  return PRIVATE_NOINDEX_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
}

export function resolvePublicPath(path: string) {
  return normalizePath(CANONICAL_PATH_OVERRIDES[path] ?? path);
}

export function buildCanonicalPath(path: string, locale: AppLocale = DEFAULT_LOCALE) {
  return withLocale(resolvePublicPath(path), locale);
}

export function buildCanonicalUrl(path: string, locale: AppLocale = DEFAULT_LOCALE) {
  return `${APP_BASE_URL}${buildCanonicalPath(path, locale)}`;
}

export function buildLanguageAlternates(path: string) {
  const normalized = resolvePublicPath(path);

  return Object.fromEntries(SUPPORTED_LOCALES.map((locale) => [locale, withLocale(normalized, locale)]));
}

type BuildPublicPageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  locale?: AppLocale;
  index?: boolean;
  keywords?: string[];
  absoluteTitle?: boolean;
};

export function buildPublicPageMetadata({
  title,
  description,
  path,
  locale = DEFAULT_LOCALE,
  index = true,
  keywords,
  absoluteTitle = false,
}: BuildPublicPageMetadataOptions): Metadata {
  const normalizedPath = resolvePublicPath(path);
  const canonicalUrl = buildCanonicalUrl(normalizedPath, locale);
  const shouldIndex = index && !isPrivatePath(normalizedPath);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ...buildLanguageAlternates(normalizedPath),
        "x-default": withLocale(normalizedPath, DEFAULT_LOCALE),
      },
    },
    robots: shouldIndex
      ? { index: true, follow: true }
      : { index: false, follow: false, nocache: true },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

export function buildSimplePublicPageMetadata(
  locale: AppLocale,
  path: string,
  meta: { title: string; description: string },
) {
  return buildPublicPageMetadata({
    title: meta.title,
    description: meta.description,
    path,
    locale,
  });
}

export function buildBlogArticleMetadata(
  path: string,
  locale: AppLocale,
  copies: Partial<Record<AppLocale, { title: string; description: string }>>,
) {
  const copy = copies[locale] ?? copies[DEFAULT_LOCALE];

  if (!copy) {
    throw new Error(`Missing blog metadata copy for ${path} (${locale})`);
  }

  return buildPublicPageMetadata({
    title: copy.title,
    description: copy.description,
    path,
    locale,
  });
}

export function buildCalculatorPageMetadata(
  locale: AppLocale,
  path: string,
  copy: { metaTitle: string; metaDescription: string },
) {
  return buildPublicPageMetadata({
    title: copy.metaTitle,
    description: copy.metaDescription,
    path,
    locale,
  });
}

export function getSitemapPriority(path: string) {
  const normalized = resolvePublicPath(path);

  if (normalized === "/") {
    return 1;
  }

  if (
    [
      "/freelance-contract-generator",
      "/invoice-generator",
      "/proposal-generator",
    ].includes(normalized)
  ) {
    return 0.9;
  }

  if (
    normalized.startsWith("/freelance-contract-template") ||
    normalized.startsWith("/service-agreement-template") ||
    normalized.startsWith("/free-invoice-template") ||
    normalized.startsWith("/consulting-agreement-template") ||
    normalized === "/invoice-number-example"
  ) {
    return 0.85;
  }

  if (normalized.includes("-for-")) {
    return 0.8;
  }

  if (normalized.startsWith("/contracts")) {
    return 0.75;
  }

  if (normalized.startsWith("/calculators")) {
    return normalized === "/calculators" ? 0.8 : 0.75;
  }

  if (normalized.startsWith("/blog")) {
    return normalized === "/blog" ? 0.7 : 0.65;
  }

  return 0.6;
}

export function getSitemapChangeFrequency(path: string): "weekly" | "monthly" {
  const normalized = resolvePublicPath(path);

  if (normalized.startsWith("/blog/")) {
    return "monthly";
  }

  return "weekly";
}
