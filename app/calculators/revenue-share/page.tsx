import type { Metadata } from "next";
import RevenueShareClient from "./RevenueShareClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { generateCalculatorMetadata, calculatorSeoContent } from "@/lib/calculator-seo-content";

export async function generateMetadata(): Promise<Metadata> {
  return generateCalculatorMetadata("revenue-share");
}

export default function RevenueSharePage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent["revenue-share"]}>
      <RevenueShareClient />
    </CalculatorSeoScaffold>
  );
}
