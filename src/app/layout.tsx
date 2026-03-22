import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

import { AppProvider } from "@/shared";
import { Footer, Header } from "@/widgets";
import type { Metadata } from "next";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Geo Weather",
  description: "High-End Editorial Weather Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ko'
      className={`${manrope.variable} ${plusJakartaSans.variable} ${pretendard.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className='flex min-h-full flex-col bg-background font-body text-foreground'>
        <AppProvider>
          <Header />
          <main className='mx-auto mt-18 w-full max-w-7xl flex-1 px-6 py-8'>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
