import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://remarkabletraveldesign.com"),
  title: {
    default: "Remarkable Travel Design — Inspired Travel, By Design",
    template: "%s · Remarkable Travel Design",
  },
  description:
    "A bespoke travel atelier crafting private journeys — from Tuscan villas to Pebble Beach fairways. Founded by Peter & Lisa Magaro.",
  openGraph: {
    title: "Remarkable Travel Design",
    description:
      "Bespoke luxury travel and golf journeys, designed firsthand.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body
        style={{
          fontFamily: "var(--font-inter), var(--font-sans)",
        }}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:text-cream focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
