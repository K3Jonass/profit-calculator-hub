import type { Metadata } from "next";
import DecisionScoreClient from "./DecisionScoreClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { calculatorSeoContent } from "@/lib/calculator-seo-content";

export const metadata: Metadata = {
  title: "Business Decision Score Calculator Free | Weighted Scoring Tool",
  description:
    "Compare opportunities with a weighted decision score calculator for profit, effort, and risk.",
};

export default function DecisionScorePage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["decision-score"]}>
      <DecisionScoreClient />
    </CalculatorSeoScaffold>
  );
}
