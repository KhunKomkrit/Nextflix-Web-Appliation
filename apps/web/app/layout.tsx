import "./globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Geist } from "next/font/google";
import {getLocale} from 'next-intl/server';

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextFlix Web Application",
  description: "NextFlix Movie Online",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={geist.className}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
