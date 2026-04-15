"use client";

import { type ChangeEvent, useMemo, useState } from "react";
import { calculateShopifyProfit } from "@/lib/calculators";
import RelatedCalculators from "@/components/RelatedCalculators";


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

