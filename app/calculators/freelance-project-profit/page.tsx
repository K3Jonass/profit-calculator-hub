import type { Metadata } from "next";
import FreelanceProjectProfitClient from "./FreelanceProjectProfitClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { calculatorSeoContent } from "@/lib/calculator-seo-content";

export const metadata: Metadata = {
  title: "Freelance Project Profit Analyzer Free | Client Project Profit Tool",
  description:
    "Analyze freelance project profit after hours, hidden costs, and delivery overhead before accepting work.",
};

export default function FreelanceProjectProfitPage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["freelance-project-profit"]}>
      <FreelanceProjectProfitClient />
    </CalculatorSeoScaffold>
  );
}
