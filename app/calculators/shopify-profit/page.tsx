import type { Metadata } from "next";
import ShopifyProfitClient from "./ShopifyProfitClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { calculatorSeoContent } from "@/lib/calculator-seo-content";
import { getShopifyProfitCopy } from "@/lib/i18n/calculator-shopify-profit";
import { getRequestLocale } from "@/lib/i18n/server";
import { buildCalculatorPageMetadata } from "@/lib/site-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getShopifyProfitCopy(locale);

  return buildCalculatorPageMetadata(locale, "/calculators/shopify-profit", copy);
}

export default async function ShopifyProfitPage() {
  const locale = await getRequestLocale();

  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["shopify-profit"]}>
      <ShopifyProfitClient locale={locale} />
    </CalculatorSeoScaffold>
  );
}
