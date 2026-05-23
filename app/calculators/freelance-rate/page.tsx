import type { Metadata } from "next";
import FreelanceRateClient from "./FreelanceRateClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { generateCalculatorMetadata, calculatorSeoContent } from "@/lib/calculator-seo-content";

export async function generateMetadata(): Promise<Metadata> {
  return generateCalculatorMetadata("freelance-rate");
}

export default function FreelanceRatePage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["freelance-rate"]}>
      <FreelanceRateClient />
    </CalculatorSeoScaffold>
  );
}
