import type { Metadata } from "next";
import FreelanceProjectProfitClient from "./FreelanceProjectProfitClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { generateCalculatorMetadata, calculatorSeoContent } from "@/lib/calculator-seo-content";

export async function generateMetadata(): Promise<Metadata> {
  return generateCalculatorMetadata("freelance-project-profit");
}

export default function FreelanceProjectProfitPage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["freelance-project-profit"]}>
      <FreelanceProjectProfitClient />
    </CalculatorSeoScaffold>
  );
}
