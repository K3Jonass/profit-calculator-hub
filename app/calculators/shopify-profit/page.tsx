import type { Metadata } from "next";
import ShopifyProfitClient from "./ShopifyProfitClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { calculatorSeoContent } from "@/lib/calculator-seo-content";
import { getShopifyProfitCopy } from "@/lib/i18n/calculator-shopify-profit";
import { getRequestLocale } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getShopifyProfitCopy(locale);

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
  };
}

export default async function ShopifyProfitPage() {
  const locale = await getRequestLocale();

  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["shopify-profit"]}>
      <ShopifyProfitClient locale={locale} />
    </CalculatorSeoScaffold>
  );
}
