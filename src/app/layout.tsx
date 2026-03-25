import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

import { AppProvider } from "@/shared";
import { Footer } from "@/widgets";
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
  metadataBase: new URL("https://weather.dobbymin.cloud"),
  title: {
    default: "Geo Weather - High-End Editorial Weather Service",
    template: "%s | Geo Weather",
  },
  description: "위치 기반의 고품격 에디토리얼 날씨 서비스, Geo Weather에서 실시간 날씨와 예보를 확인하세요.",
  keywords: ["날씨", "기상", "Geo Weather", "실시간 날씨", "날씨 예보", "위치 기반 날씨"],
  authors: [{ name: "Geo Weather Team" }],
  creator: "Geo Weather",
  publisher: "Geo Weather",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Geo Weather",
    description: "위치 기반의 고품격 에디토리얼 날씨 서비스",
    url: "https://weather.dobbymin.cloud",
    siteName: "Geo Weather",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-img.png",
        width: 1200,
        height: 630,
        alt: "Geo Weather - High-End Editorial Weather Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geo Weather",
    description: "위치 기반의 고품격 에디토리얼 날씨 서비스",
    images: ["/og-img.png"],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
          <main className='mx-auto mt-18 w-full max-w-7xl flex-1 px-6 py-8'>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
