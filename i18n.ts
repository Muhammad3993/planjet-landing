import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

const locales = ["en", "ru"] as const;

export default getRequestConfig(async () => {
  const header = await headers();
  const locale = header.get('X-NEXT-INTL-LOCALE');

  if (!locale || typeof locale !== 'string' || !locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});