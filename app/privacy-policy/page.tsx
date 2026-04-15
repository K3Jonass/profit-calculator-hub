import type { Metadata } from "next";
import { getRequestLocale } from "@/lib/i18n/server";
import { getPublicPageMessages } from "@/lib/i18n/public-pages";
import { getPublicPageBody } from "@/lib/i18n/public-page-bodies";
import { withLocale } from "@/lib/i18n/config";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return getPublicPageMessages(locale).simpleMeta.privacy;
}

export default async function PrivacyPolicyPage() {
  const locale = await getRequestLocale();
  const t = getPublicPageBody(locale).privacy;

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="motion-fade-up rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">{t.title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{t.intro}</p>
      </section>

      <div className="motion-stagger mt-8 space-y-4">
        {t.sections.map((section, index) => (
          <section key={section.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">
              {section.text} {index === t.sections.length - 1 ? <Link href={withLocale("/privacy-policy", locale)} className="font-semibold text-blue-700 animated-link">/privacy-policy</Link> : null}
            </p>
          </section>
        ))}
      </div>

      <section className="motion-fade-up mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-2xl font-semibold text-slate-900">{t.questionsTitle}</h2>
        <p className="mt-3 text-slate-600">{t.questionsText} <Link href={withLocale("/contact", locale)} className="font-semibold text-blue-700 animated-link">{t.contactPage}</Link>.</p>
      </section>
    </main>
  );
}
