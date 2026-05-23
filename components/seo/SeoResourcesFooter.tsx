import Link from "next/link";
import type { AppLocale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/config";
import { SEO_RESOURCE_FOOTER_LINKS } from "@/lib/seo-internal-links";

export default function SeoResourcesFooter({ locale }: { locale: AppLocale }) {
  return (
    <section
      aria-labelledby="seo-resources-heading"
      className="mt-10 rounded-2xl border border-slate-200/80 bg-slate-50/50 px-6 py-6 dark:border-slate-800/80 dark:bg-slate-900/30"
    >
      <h2
        id="seo-resources-heading"
        className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"
      >
        Document resources
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-300">
        Guides and generators for contracts, invoices, and client proposals.
      </p>
      <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
        {SEO_RESOURCE_FOOTER_LINKS.map((link) => (
          <li key={link.href} className="text-sm">
            <Link
              href={withLocale(link.href, locale)}
              className="animated-link text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
