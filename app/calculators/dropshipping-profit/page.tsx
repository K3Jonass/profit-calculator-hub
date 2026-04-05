import type { Metadata } from "next";
import DropshippingProfitClient from "./DropshippingProfitClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { calculatorSeoContent } from "@/lib/calculator-seo-content";

export const metadata: Metadata = {
  title: "Dropshipping Profit Calculator Free | Profit & Margin Tool",
  description:
    "Calculate dropshipping revenue, costs, net profit, and margin with this free online calculator.",
};

export default function DropshippingProfitPage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["dropshipping-profit"]}>
      <DropshippingProfitClient />
    </CalculatorSeoScaffold>
  );
}
