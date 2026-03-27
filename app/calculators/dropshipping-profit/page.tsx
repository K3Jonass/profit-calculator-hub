import type { Metadata } from "next";
import DropshippingProfitClient from "./DropshippingProfitClient";

export const metadata: Metadata = {
  title: "Dropshipping Profit Calculator Free | Profit & Margin Tool",
  description:
    "Calculate dropshipping revenue, costs, net profit, and margin with this free online calculator.",
};

export default function DropshippingProfitPage() {
  return <DropshippingProfitClient />;
}