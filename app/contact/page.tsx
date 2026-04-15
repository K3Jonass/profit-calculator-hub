import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { getPublicPageMessages } from "@/lib/i18n/public-pages";
import { getPublicPageBody } from "@/lib/i18n/public-page-bodies";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return getPublicPageMessages(locale).simpleMeta.contact;
}

export default async function ContactPage() {
  const locale = await getRequestLocale();
  const t = getPublicPageBody(locale).contact;

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="motion-fade-up rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-600">{t.badge}</div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">{t.title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{t.intro}</p>
        </div>
      </section>

      <section className="motion-fade-up mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">{t.primary}</h2>
        <a href="mailto:contact@profithub.cloud" className="mt-4 inline-flex text-lg font-semibold text-blue-700 animated-link">contact@profithub.cloud</a>
        <p className="mt-3 text-slate-600">{t.response}</p>
      </section>

      <section className="motion-fade-up mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">{t.topicsTitle}</h2>
        <div className="motion-stagger mt-5 grid gap-4 md:grid-cols-2">
          {t.topics.map((topic) => (
            <article key={topic.title} className="hover-lift rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">{topic.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{topic.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
