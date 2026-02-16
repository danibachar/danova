import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/shared/StructuredData";
import { GoogleAnalyticsProvider } from "@danova/analytics";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://danovarenovations.com"),
  title: {
    default: "Danova Renovations | Best Paint & Flooring in Fort Lauderdale & Miami",
    template: "%s | Danova Renovations",
  },
  description:
    "Premium paint, flooring, and renovation services in Fort Lauderdale and Miami. Interior, exterior, commercial painting. Hardwood, tile, laminate flooring. Licensed & insured.",
  keywords: [
    "renovation",
    "painting",
    "flooring",
    "Fort Lauderdale",
    "Miami",
    "interior painting",
    "exterior painting",
    "flooring installation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased`}
      >
        <GoogleAnalyticsProvider trackPageViews />
        <LocalBusinessSchema />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
