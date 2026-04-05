import type { Metadata } from "next";
import BreakevenClient from "./BreakevenClient";
import CalculatorSeoScaffold from "@/components/seo/CalculatorSeoScaffold";
import { calculatorSeoContent } from "@/lib/calculator-seo-content";

export const metadata: Metadata = {
  title: "Breakeven Calculator Free | Breakeven Point Tool",
  description: "Calculate your breakeven point to find how many sales you need to cover costs.",
};

export default function BreakevenPage() {
  return (
    <CalculatorSeoScaffold content={calculatorSeoContent.breakeven}>
      <BreakevenClient />
    </CalculatorSeoScaffold>
  );
}
