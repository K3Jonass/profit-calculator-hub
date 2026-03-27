import type { Metadata } from "next";
import ShopifyProfitClient from "./ShopifyProfitClient";

export const metadata: Metadata = {
  title: "Shopify Profit Calculator Free | Net Profit & Margin Tool",
  description:
    "Calculate Shopify net profit, total costs, and profit margin in seconds with this free tool.",
};

export default function ShopifyProfitPage() {
  return <ShopifyProfitClient />;
}