import type { Metadata } from "next";

import HomePageClient from "./HomePageClient";

import HomeStructuredData from "@/components/seo/HomeStructuredData";

import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { getRequestLocale } from "@/lib/i18n/server";

import { getPublicPageMessages } from "@/lib/i18n/public-pages";

import { buildPublicPageMetadata } from "@/lib/site-metadata";



const HOME_KEYWORDS = [

  "freelance contract generator",

  "invoice generator",

  "freelance invoice generator",

  "proposal generator",

  "freelance business tools",

  "contract and invoice generator",

];



export async function generateMetadata(): Promise<Metadata> {

  const locale = await getRequestLocale();

  const t = getPublicPageMessages(locale);



  if (locale === DEFAULT_LOCALE) {

    return buildPublicPageMetadata({

      title: "Profithub – Freelance Contract Generator, Invoice Generator & Proposal Builder",

      description:

        "Create freelance contracts, professional invoices, and client-ready proposals online with Profithub. Generate PDFs, manage client details, and build business documents faster.",

      path: "/",

      locale,

      keywords: HOME_KEYWORDS,

      absoluteTitle: true,

    });

  }



  return buildPublicPageMetadata({

    title: t.home.meta.title,

    description: t.home.meta.description,

    path: "/",

    locale,

  });

}



export default async function Page() {

  const locale = await getRequestLocale();

  return (

    <>

      <HomeStructuredData />

      <HomePageClient locale={locale} />

    </>

  );

}

