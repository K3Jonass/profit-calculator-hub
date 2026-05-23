import type { Metadata } from "next";
import DecisionScoreClient from "./DecisionScoreClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { generateCalculatorMetadata, calculatorSeoContent } from "@/lib/calculator-seo-content";

export async function generateMetadata(): Promise<Metadata> {
  return generateCalculatorMetadata("decision-score");
}

export default function DecisionScorePage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["decision-score"]}>
      <DecisionScoreClient />
    </CalculatorSeoScaffold>
  );
}
