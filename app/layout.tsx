import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DEFAULT_LOCALE, isRtlLocale, isSupportedLocale, withLocale, type AppLocale } from "@/lib/i18n/config";
import ThemeRoot from "@/components/theme/ThemeRoot";
import SiteStructuredData from "@/components/seo/SiteStructuredData";
import AdSenseScript from "@/components/ads/AdSenseScript";
import { themeInitScript } from "@/lib/theme";
import { APP_BASE_URL } from "@/lib/public-urls";
import {
  buildCanonicalUrl,
  buildLanguageAlternates,
  isPrivatePath,
  normalizePath,
  resolvePublicPath,
  SITE_NAME,
} from "@/lib/site-metadata";

const baseMetadata: Metadata = {
  icons: { icon: "/icon", shortcut: "/icon", apple: "/icon" },
  metadataBase: new URL(APP_BASE_URL),
  title: { default: "Profithub", template: "%s | Profithub" },
  description:
    "Create freelance contracts, professional invoices, and client-ready proposals online with Profithub. Free business calculators for pricing, profitability, and smarter decisions.",
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const rawPathname = headersList.get("x-pathname") || "/";
  const rawLocale = headersList.get("x-locale") || DEFAULT_LOCALE;
  const locale = isSupportedLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const pathname = normalizePath(rawPathname);
  const publicPath = resolvePublicPath(pathname);
  const canonicalUrl = buildCanonicalUrl(publicPath, locale);
  const noindex = isPrivatePath(pathname);

  return {
    ...baseMetadata,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ...buildLanguageAlternates(publicPath),
        "x-default": withLocale(publicPath, DEFAULT_LOCALE),
      },
    },
    robots: noindex ? { index: false, follow: false, nocache: true } : { index: true, follow: true },
    openGraph: {
      ...baseMetadata.openGraph,
      url: canonicalUrl,
    },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const localeHeader = headersList.get("x-locale") || DEFAULT_LOCALE;
  const locale: AppLocale = isSupportedLocale(localeHeader) ? localeHeader : DEFAULT_LOCALE;

  return (
    <html lang={locale} dir={isRtlLocale(locale) ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <script id="theme-init" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <AdSenseScript />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SiteStructuredData />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BXLJ84T4B5" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-BXLJ84T4B5');`}</Script>
        <Script id="microsoft-clarity" strategy="lazyOnload">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "w50lpevu96");`}</Script>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-600 dark:focus:bg-slate-900 dark:focus:text-slate-100"
        >
          Skip to main content
        </a>

        <div className="relative min-h-screen">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-app-canvas" />
          <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-24 border-b border-transparent bg-app-topbar-glow backdrop-blur-xl" />

          <ThemeRoot>
            <Navbar locale={locale} />
          </ThemeRoot>
          <main id="main-content" className="relative z-10">
            {children}
          </main>
          <Footer locale={locale} />
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
