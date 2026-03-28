import RevenueShareClient from "./RevenueShareClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenue Share Deal Calculator Free Tool",
  description:
    "Calculate whether a revenue share partnership is fair based on split percentage, workload, and expected earnings.",
  alternates: {
    canonical: "/calculators/revenue-share",
  },
};

export default function RevenueSharePage() {
  return <RevenueShareClient />;
}