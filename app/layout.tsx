import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Sans_JP } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyEmailBar from "@/components/StickyEmailBar";
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

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://remarkabletraveldesign.com"),
  title: {
    default:
      "Remarkable Travel Design — We don't sell trips. We design them.",
    template: "%s · Remarkable Travel Design",
  },
  description:
    "An independent travel studio. Part of our compensation comes directly from you, which keeps us vendor-agnostic — so we recommend whatever combination of tour operators, villas and direct bookings actually fits your trip. From Tuscan villas to Pebble Beach.",
  openGraph: {
    title: "Remarkable Travel Design — An independent studio. Entirely yours.",
    description:
      "Independent travel agents working on your side of the table. We use tour operator packages, our villa list, or build vendor by vendor — whichever serves your trip.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${notoSansJP.variable}`}>
      <body
        style={{
          fontFamily: "var(--font-inter), var(--font-sans)",
        }}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-ink focus:text-cream focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <StickyEmailBar />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
