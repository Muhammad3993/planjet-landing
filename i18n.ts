import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ru"] as const;

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default getRequestConfig(async ({ params }) => {
  const locale = params?.locale;

  if (!locale || !locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
