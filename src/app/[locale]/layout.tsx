import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import { ThemeProvider } from '@/app/[locale]/components/theme-switcher';
import Navbar from '@/app/[locale]/components/nav';
import { Roboto_Mono } from 'next/font/google';
import Footer from './components/footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import basePathPrefix from './basePathPrefix';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: "Ouk Outdam's Home",
  description: "This is Ouk Outdam's Personal Home page. Made With NextJS",
  icons: {
    icon: `${basePathPrefix}/favicon.ico`,
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html className={robotoMono.className} suppressHydrationWarning>
      <head></head>
      <body className='mb-5 mt-2 flex flex-col items-center justify-center overflow-y-scroll px-6 antialiased lg:mb-10 lg:mt-8'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <main className='mt-2 flex w-full min-w-0 max-w-[800px] flex-auto flex-col md:mt-6'>
              <Navbar />
              {children}
              <Footer />
            </main>
            <ScrollToTopButton />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
