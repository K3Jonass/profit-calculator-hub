import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DEFAULT_LOCALE, isRtlLocale, isSupportedLocale, SUPPORTED_LOCALES, withLocale, type AppLocale } from "@/lib/i18n/config";
import ThemeRoot from "@/components/theme/ThemeRoot";
import { themeInitScript } from "@/lib/theme";

const NOINDEX_PREFIXES = ["/workspace", "/portal"];
const CANONICAL_PATH_OVERRIDES: Record<string, string> = {
  "/privacy": "/privacy-policy",
};

const baseMetadata: Metadata = {
  icons: { icon: "/icon", shortcut: "/icon", apple: "/icon" },
  metadataBase: new URL("https://profithub.cloud"),
  title: { default: "ProfitHub", template: "%s | ProfitHub" },
  description: "Free online profit calculators for ecommerce, SaaS, freelancers, subscriptions, pricing, revenue share, breakeven analysis, and smarter business decisions.",
  applicationName: "ProfitHub",
};

function normalizePathname(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function isNoindexPath(pathname: string) {
  return NOINDEX_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

function buildLanguageAlternates(pathname: string) {
  return Object.fromEntries(SUPPORTED_LOCALES.map((locale) => [locale, withLocale(pathname, locale)]));
}

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const rawPathname = headersList.get("x-pathname") || "/";
  const rawLocale = headersList.get("x-locale") || DEFAULT_LOCALE;
  const locale = isSupportedLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const pathname = normalizePathname(rawPathname);
  const canonicalPath = withLocale(CANONICAL_PATH_OVERRIDES[pathname] || pathname, locale);
  const noindex = isNoindexPath(pathname);

  return {
    ...baseMetadata,
    alternates: {
      canonical: canonicalPath,
      languages: {
        ...buildLanguageAlternates(pathname),
        "x-default": withLocale(pathname, DEFAULT_LOCALE),
      },
    },
    robots: noindex ? { index: false, follow: false, nocache: true } : { index: true, follow: true },
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
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BXLJ84T4B5" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-BXLJ84T4B5');`}</Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "w50lpevu96");`}</Script>

        <div className="relative min-h-screen">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-app-canvas" />
          <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-24 border-b border-transparent bg-app-topbar-glow backdrop-blur-xl" />

          <ThemeRoot>
            <Navbar locale={locale} />
          </ThemeRoot>
          <main className="relative z-10">{children}</main>
          <Footer locale={locale} />
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
