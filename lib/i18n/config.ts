export const SUPPORTED_LOCALES = ["en", "ar", "fr", "es", "ru"] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = "en";

export const RTL_LOCALES: AppLocale[] = ["ar"];

export function isSupportedLocale(value: string): value is AppLocale {
  return SUPPORTED_LOCALES.includes(value as AppLocale);
}

export function isRtlLocale(locale: AppLocale) {
  return RTL_LOCALES.includes(locale);
}

export function stripLocaleFromPathname(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first && isSupportedLocale(first)) {
    const withoutLocale = `/${segments.slice(1).join("/")}`;
    return withoutLocale === "/" ? "/" : withoutLocale;
  }

  return pathname;
}

export function withLocale(pathname: string, locale: AppLocale) {
  if (!pathname.startsWith("/")) {
    return pathname;
  }

  const normalized = stripLocaleFromPathname(pathname);
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export const LOCALE_LABELS: Record<AppLocale, string> = {
  en: "English",
  ar: "العربية",
  fr: "Français",
  es: "Español",
  ru: "Русский",
};

export function getLocaleFromPathname(pathname: string): AppLocale {
  const first = pathname.split("/").filter(Boolean)[0];
  return first && isSupportedLocale(first) ? first : DEFAULT_LOCALE;
}
