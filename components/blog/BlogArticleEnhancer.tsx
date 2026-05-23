"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import JsonLdScript from "@/components/seo/JsonLdScript";
import { getLocaleFromPathname, stripLocaleFromPathname, withLocale } from "@/lib/i18n/config";
import { blogPosts } from "@/lib/blog-posts";
import {
  getBlogPrimaryCalculator,
  getBlogRelatedArticles,
  getBlogRelatedCalculators,
} from "@/lib/blog-related-links";
import {
  SITE_URL,
  buildBreadcrumbSchema,
  buildHowToSchema,
  isHowToGuidePath,
} from "@/lib/structured-data";

function toDirectAnswer(description: string) {
  return description
    .replace(/^Learn\s+/i, "")
    .replace(/^Discover\s+/i, "")
    .replace(/^Understand\s+/i, "")
    .replace(/^A practical guide to\s+/i, "")
    .replace(/^A proven\s+/i, "")
    .replace(/^Design\s+/i, "")
    .replace(/^Turn\s+/i, "")
    .replace(/^Use\s+/i, "")
    .replace(/^Build\s+/i, "")
    .replace(/^Set up\s+/i, "")
    .replace(/^Spot\s+/i, "")
    .replace(/^Compare\s+/i, "")
    .replace(/^See\s+/i, "");
}

export default function BlogArticleEnhancer({ children }: { children: React.ReactNode }) {
  const fullPathname = usePathname() || "/";
  const locale = getLocaleFromPathname(fullPathname);
  const pathname = stripLocaleFromPathname(fullPathname);
  const isBlogIndex = pathname === "/blog";

  if (isBlogIndex) {
    return <>{children}</>;
  }

  const post = blogPosts.find((item) => item.href === pathname);
  const articleUrl = `${SITE_URL}${pathname}`;
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Blog", item: `${SITE_URL}/blog` },
    { name: post?.title ?? "Article", item: articleUrl },
  ]);

  const articleSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        url: articleUrl,
        mainEntityOfPage: articleUrl,
        author: {
          "@type": "Organization",
          name: "Profithub",
        },
        publisher: {
          "@type": "Organization",
          name: "Profithub",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/icon.png`,
          },
        },
      }
    : null;

  const howToSchema =
    post && isHowToGuidePath(pathname, post.title)
      ? buildHowToSchema({
          name: post.title,
          description: post.description,
          url: articleUrl,
          steps: [
            "Read the guide to understand the core formula, inputs, and decision framework.",
            "Gather your business numbers and apply the method described in the article.",
            "Validate your result with the related Profithub calculator linked in the guide.",
          ],
        })
      : null;

  const directAnswerIntro = post
    ? `Short answer: ${toDirectAnswer(post.description)}`
    : "Short answer: This guide explains the core concept, formula, and practical actions you can apply with Profithub tools.";

  const primaryCalculator = getBlogPrimaryCalculator(pathname);
  const relatedCalculators = getBlogRelatedCalculators(pathname);
  const relatedArticles = getBlogRelatedArticles(pathname);

  return (
    <>
      {articleSchema ? <JsonLdScript data={articleSchema} /> : null}
      <JsonLdScript data={breadcrumbSchema} />
      {howToSchema ? <JsonLdScript data={howToSchema} /> : null}

      <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900/80">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">Direct answer</p>
        <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{directAnswerIntro}</p>
      </div>

      {primaryCalculator ? (
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/40">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-800 dark:text-blue-200">Use this calculator</p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            Apply this guide with the{" "}
            <Link href={withLocale(primaryCalculator.href, locale)} className="font-semibold text-blue-700 underline dark:text-blue-300">
              {primaryCalculator.label}
            </Link>{" "}
            or browse our{" "}
            <Link href={withLocale("/calculators", locale)} className="font-semibold text-blue-700 underline dark:text-blue-300">
              calculators hub
            </Link>
            .
          </p>
        </div>
      ) : null}

      <div className="mx-auto max-w-4xl">{children}</div>

      <section className="mx-auto mt-12 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900/80">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Related calculators</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
          {relatedCalculators.map((item) => (
            <li key={item.href}>
              <Link href={withLocale(item.href, locale)} className="text-blue-700 underline dark:text-blue-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900/80">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Related articles</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
          {relatedArticles.map((item) => (
            <li key={item.href}>
              <Link href={withLocale(item.href, locale)} className="text-blue-700 underline dark:text-blue-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/40">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-800 dark:text-blue-200">Use this calculator now</p>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          Ready to apply this? Open the{" "}
          <Link href={withLocale("/calculators", locale)} className="font-semibold text-blue-700 underline dark:text-blue-300">
            Profithub calculators directory
          </Link>{" "}
          and run your numbers in under two minutes.
        </p>
      </div>
    </>
  );
}
