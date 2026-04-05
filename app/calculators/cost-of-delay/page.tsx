import type { Metadata } from "next";
import CostOfDelayClient from "./CostOfDelayClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { calculatorSeoContent } from "@/lib/calculator-seo-content";

export const metadata: Metadata = {
  title: "Cost of Delay Calculator Free | Priority Impact Tool",
  description:
    "Estimate how much revenue or value you lose when launches and decisions are delayed.",
};

export default function CostOfDelayPage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["cost-of-delay"]}>
      <CostOfDelayClient />
    </CalculatorSeoScaffold>
  );
}
