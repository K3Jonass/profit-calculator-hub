import type { Metadata } from "next";
import BreakevenClient from "./BreakevenClient";

export const metadata: Metadata = {
  title: "Breakeven Calculator Free | Break Even Point Tool",
  description:
    "Calculate how many sales you need to cover your fixed costs with this free breakeven calculator.",
};

export default function BreakevenPage() {
  return <BreakevenClient />;
}