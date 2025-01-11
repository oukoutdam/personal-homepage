import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-switcher";
import Navbar from '@/app/components/nav';
import { Roboto_Mono } from "next/font/google";
import Footer from "./components/footer";

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400']
});

export const metadata : Metadata = {
  title: "Ouk Outdam's Home",
  description: "This is Ouk Outdam's Personal Home page. Made With NextJS",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout(
  {
    children,
  } : {
    children: React.ReactNode;
  }
) {
  return (
    <html className={robotoMono.className} suppressHydrationWarning>
      <head></head>
      <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-80">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col max-w-[640px] w-full">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

