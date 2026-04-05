import Link from "next/link";
import { calculators } from "@/lib/calculators-data";

export default function RelatedCalculators({
  currentHref,
  calculatorHrefs,
}: {
  currentHref: string;
  calculatorHrefs?: string[];
}) {
  const related = calculatorHrefs
    ? calculatorHrefs
        .map((href) => calculators.find((item) => item.href === href))
        .filter((item): item is NonNullable<typeof item> => Boolean(item))
    : calculators.filter((item) => item.href !== currentHref).slice(0, 4);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Related Calculators</h2>
        <p className="mt-2 text-slate-600">
          Explore connected tools to compare margins, pricing, recurring revenue, and growth scenarios.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {related.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
