import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>; 
}

export default async function RootLayout({ children, params }: LayoutProps) {
  // const { locale } = await params;
  const resolvedParams = await params;
  const messages = await getMessages();

  return (
    <html lang={resolvedParams.locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div>{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
