import type { Metadata } from "next";
import SaaSMRRClient from "./SaaSMRRClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { generateCalculatorMetadata, calculatorSeoContent } from "@/lib/calculator-seo-content";

export async function generateMetadata(): Promise<Metadata> {
  return generateCalculatorMetadata("saas-mrr");
}

export default function SaaSMRRPage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["saas-mrr"]}>
      <SaaSMRRClient />
    </CalculatorSeoScaffold>
  );
}
