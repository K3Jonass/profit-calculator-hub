import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { getPublicPageMessages } from "@/lib/i18n/public-pages";
import { getPublicPageBody } from "@/lib/i18n/public-page-bodies";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return getPublicPageMessages(locale).simpleMeta.about;
}

export default async function AboutPage() {
  const locale = await getRequestLocale();
  const t = getPublicPageBody(locale).about;

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="rounded-4xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-600">{t.badge}</div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">{t.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{t.intro}</p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">{t.whyTitle}</h2>
          <p className="leading-7 text-slate-600">{t.whyText}</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">{t.whoTitle}</h2>
          <p className="leading-7 text-slate-600">{t.whoText}</p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">{t.listTitle}</h2>
        <ul className="space-y-3 text-slate-600">
          {t.list.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
