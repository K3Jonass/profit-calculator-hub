import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import { getRequestLocale } from "@/lib/i18n/server";
import { getPublicPageMessages } from "@/lib/i18n/public-pages";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const t = getPublicPageMessages(locale);
  return {
    title: t.home.meta.title,
    description: t.home.meta.description,
  };
}

export default async function Page() {
  const locale = await getRequestLocale();
  return <HomePageClient locale={locale} />;
}
