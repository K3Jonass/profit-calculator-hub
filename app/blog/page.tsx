import Link from "next/link";
import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { getPublicPageMessages } from "@/lib/i18n/public-pages";
import { withLocale } from "@/lib/i18n/config";
import { getPublicPageBody } from "@/lib/i18n/public-page-bodies";
import { getBlogPosts } from "@/lib/blog-posts";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return getPublicPageMessages(locale).simpleMeta.blog;
}

export default async function BlogPage() {
  const locale = await getRequestLocale();
  const t = getPublicPageBody(locale).blog;
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <section className="motion-fade-up relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 px-6 py-14 shadow-soft backdrop-blur-sm md:px-10 dark:border-slate-800 dark:bg-slate-900/70">
        <div className="pointer-events-none absolute -right-14 top-0 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
            {t.badge}
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl dark:text-slate-100">
            {t.title}
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {t.intro}
          </p>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{t.latestTitle}</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{t.latestIntro}</p>
        </div>

        <div className="motion-stagger grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {getBlogPosts(locale).map((post) => (
            <Link key={post.href} href={withLocale(post.href, locale)} className="hover-lift group rounded-3xl border-soft surface-card p-6">
              <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {post.category}
              </div>

              <h3 className="mb-3 text-2xl font-semibold leading-snug text-slate-900 transition group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-300">
                {post.title}
              </h3>

              <p className="mb-5 text-sm leading-6 text-slate-600 dark:text-slate-300">{post.description}</p>

              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t.read} →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
