import type { Metadata } from "next";
import Link from "next/link";
import { getRequestLocale } from "@/lib/i18n/server";
import { getPublicPageMessages } from "@/lib/i18n/public-pages";
import { withLocale } from "@/lib/i18n/config";
import { getCalculatorsHubContent } from "@/lib/i18n/calculators-hub";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return getPublicPageMessages(locale).simpleMeta.calculators;
}

export default async function CalculatorsPage() {
  const locale = await getRequestLocale();
  const content = getCalculatorsHubContent(locale);

  return (
    <main className="min-h-screen">
      <section className="motion-fade-up border-b border-slate-200/80 bg-white/70 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-900 dark:bg-blue-950/70 dark:text-blue-200">
            {content.badge}
          </span>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100">
            {content.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{content.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-14">
          {content.groups.map((group) => (
            <section
              key={group.heading}
              className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-soft backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/65 md:p-8"
            >
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{group.heading}</h2>
              <p className="mt-3 max-w-4xl text-slate-600 dark:text-slate-300">{group.intro}</p>

              <div className="motion-stagger mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {group.calculators.map((calculator) => (
                  <Link
                    key={calculator.href}
                    href={withLocale(calculator.href, locale)}
                    className="group hover-lift rounded-3xl border-soft surface-card p-6"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 transition group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-300">
                      {calculator.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{calculator.description}</p>

                    <div className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 transition group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-300">
                      {content.open} {calculator.title}
                      <span className="ml-2 transition group-hover:translate-x-1">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
