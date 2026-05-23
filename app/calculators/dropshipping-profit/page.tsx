import type { Metadata } from "next";
import DropshippingProfitClient from "./DropshippingProfitClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { generateCalculatorMetadata, calculatorSeoContent } from "@/lib/calculator-seo-content";

export async function generateMetadata(): Promise<Metadata> {
  return generateCalculatorMetadata("dropshipping-profit");
}

export default function DropshippingProfitPage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["dropshipping-profit"]}>
      <DropshippingProfitClient />
    </CalculatorSeoScaffold>
  );
}
