"use client";

import { type ChangeEvent, useMemo, useState } from "react";
import { calculateShopifyProfit } from "@/lib/calculators";
import RelatedCalculators from "@/components/RelatedCalculators";
import type { AppLocale } from "@/lib/i18n/config";
import { getShopifyProfitCopy } from "@/lib/i18n/calculator-shopify-profit";

const LOCALE_REGION_MAP: Record<AppLocale, string> = {
  en: "en-US",
  ar: "ar",
  fr: "fr-FR",
  es: "es-ES",
  ru: "ru-RU",
};

export default function ShopifyProfitClient({ locale }: { locale: AppLocale }) {
  const [form, setForm] = useState({
    revenue: 12000,
    productCost: 4000,
    adsCost: 3000,
    fees: 500,
    shipping: 1200,
  });

  const copy = getShopifyProfitCopy(locale);
  const result = useMemo(() => calculateShopifyProfit(form), [form]);
  const localeTag = LOCALE_REGION_MAP[locale];
  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat(localeTag, {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
      }),
    [localeTag],
  );
  const percentFormatter = useMemo(
    () =>
      new Intl.NumberFormat(localeTag, {
        maximumFractionDigits: 2,
      }),
    [localeTag],
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const parsedValue = Number(value);
    setForm((prev) => ({
      ...prev,
      [name]: Number.isFinite(parsedValue) ? parsedValue : 0,
    }));
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="mb-3 text-4xl font-bold tracking-tight">{copy.title}</h1>

      <p className="mb-8 text-slate-600">{copy.subtitle}</p>

      <div className="mb-10 grid gap-4 md:grid-cols-2">
        <Input
          label={copy.fields.revenue.label}
          helper={copy.fields.revenue.helper}
          placeholder={copy.fields.revenue.placeholder}
          name="revenue"
          value={form.revenue}
          onChange={handleChange}
          validationHint={copy.results.validationHint}
        />
        <Input
          label={copy.fields.productCost.label}
          helper={copy.fields.productCost.helper}
          placeholder={copy.fields.productCost.placeholder}
          name="productCost"
          value={form.productCost}
          onChange={handleChange}
          validationHint={copy.results.validationHint}
        />
        <Input
          label={copy.fields.adsCost.label}
          helper={copy.fields.adsCost.helper}
          placeholder={copy.fields.adsCost.placeholder}
          name="adsCost"
          value={form.adsCost}
          onChange={handleChange}
          validationHint={copy.results.validationHint}
        />
        <Input
          label={copy.fields.fees.label}
          helper={copy.fields.fees.helper}
          placeholder={copy.fields.fees.placeholder}
          name="fees"
          value={form.fees}
          onChange={handleChange}
          validationHint={copy.results.validationHint}
        />
        <Input
          label={copy.fields.shipping.label}
          helper={copy.fields.shipping.helper}
          placeholder={copy.fields.shipping.placeholder}
          name="shipping"
          value={form.shipping}
          onChange={handleChange}
          validationHint={copy.results.validationHint}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <ResultCard label={copy.results.netProfit} value={currencyFormatter.format(result.netProfit)} />
        <ResultCard label={copy.results.totalCosts} value={currencyFormatter.format(result.totalCosts)} />
        <ResultCard label={copy.results.margin} value={`${percentFormatter.format(result.margin)}%`} />
      </div>

      <section className="mt-14 max-w-none">
        <h2 className="mb-3 text-2xl font-bold text-slate-900">{copy.sections.howItWorksTitle}</h2>
        <p className="mb-6 text-slate-600">{copy.sections.howItWorksBody}</p>

        <h2 className="mb-3 text-2xl font-bold text-slate-900">{copy.sections.whyMarginTitle}</h2>
        <p className="text-slate-600">{copy.sections.whyMarginBody}</p>
      </section>

      <RelatedCalculators currentHref="/calculators/shopify-profit" locale={locale} />
    </div>
  );
}

function Input({
  label,
  helper,
  placeholder,
  name,
  value,
  onChange,
  validationHint,
}: {
  label: string;
  helper: string;
  placeholder: string;
  name: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validationHint: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
      <input
        type="number"
        min={0}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        title={validationHint}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-slate-500"
      />
      <p className="mt-1 text-xs text-slate-500">{helper}</p>
    </div>
  );
}

function ResultCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
