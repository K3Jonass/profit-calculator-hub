import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ProfitHub — Business Calculators",
    short_name: "ProfitHub",
    description:
      "Free profit calculators for ecommerce, SaaS, freelancers, subscriptions, pricing, breakeven, and smarter business decisions.",

    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",

    background_color: "#020617",
    theme_color: "#0f172a",

    lang: "en",
    dir: "ltr",

    categories: ["business", "finance", "productivity"],

    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}