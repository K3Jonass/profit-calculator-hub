import type { Metadata } from "next";
import CostOfDelayClient from "./CostOfDelayClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { generateCalculatorMetadata, calculatorSeoContent } from "@/lib/calculator-seo-content";

export async function generateMetadata(): Promise<Metadata> {
  return generateCalculatorMetadata("cost-of-delay");
}

export default function CostOfDelayPage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["cost-of-delay"]}>
      <CostOfDelayClient />
    </CalculatorSeoScaffold>
  );
}
