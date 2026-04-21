import Link from "next/link";
import { getCalculators } from "@/lib/calculators-data";
import type { AppLocale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/config";

const copy: Record<AppLocale, { title: string; description: string }> = {
  en: { title: "Related Calculators", description: "Explore connected tools to compare margins, pricing, recurring revenue, and growth scenarios." },
  ar: { title: "حاسبات مرتبطة", description: "استكشف أدوات مرتبطة لمقارنة الهوامش والتسعير والإيرادات المتكررة." },
  fr: { title: "Calculateurs associés", description: "Explorez des outils liés pour comparer marges, prix et revenus récurrents." },
  es: { title: "Calculadoras relacionadas", description: "Explora herramientas conectadas para comparar márgenes, precios e ingresos recurrentes." },
  ru: { title: "Похожие калькуляторы", description: "Изучите связанные инструменты для сравнения маржи, цен и регулярной выручки." },
};

export default function RelatedCalculators({ currentHref, calculatorHrefs, locale = "en" }: { currentHref: string; calculatorHrefs?: string[]; locale?: AppLocale }) {
  const calculators = getCalculators(locale);

  const related = calculatorHrefs
    ? calculatorHrefs
        .map((href) => calculators.find((item) => item.href === href))
        .filter((item): item is NonNullable<typeof item> => Boolean(item))
    : calculators.filter((item) => item.href !== currentHref).slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{copy[locale].title}</h2>
        <p className="mt-2 ui-text">{copy[locale].description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {related.map((item) => (
          <Link key={item.href} href={withLocale(item.href, locale)} className="surface-card rounded-2xl p-5 transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
            <p className="ui-text text-sm">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
