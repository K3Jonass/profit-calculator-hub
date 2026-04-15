import { headers } from "next/headers";
import { DEFAULT_LOCALE, isSupportedLocale, type AppLocale } from "@/lib/i18n/config";

export async function getRequestLocale(): Promise<AppLocale> {
  const locale = (await headers()).get("x-locale") || DEFAULT_LOCALE;
  return isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
}
