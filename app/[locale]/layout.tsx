import type { Metadata } from "next";
import { AppProvider } from '@/providers'
import "./globals.css";

import {setRequestLocale, getMessages} from 'next-intl/server';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import SidebarMenu from '@/components/navigation-sidebar/sidebar-menu'


export const metadata: Metadata = {
  title: "Template",
  description: "App demo",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;

  // Ensures that the 'locale' in the URL is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppProvider>
            <SidebarMenu/>
            {children}
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
