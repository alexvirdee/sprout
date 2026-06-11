import type { Metadata, Viewport } from "next";
import { Outfit, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sprout — Watching your garden thrive.",
  description:
    "Sprout is a calm gardening companion for tracking plants, watering, harvests, and seasonal progress. Join the beta.",
  metadataBase: new URL("https://sprout.garden"),
  openGraph: {
    title: "Sprout — Watching your garden thrive.",
    description:
      "A peaceful, modern gardening companion. Track plants, watering, harvests, and seasonal progress in one warm place.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${hanken.variable} ${mono.variable}`}
    >
      <body className="bg-cream text-ink-body antialiased">{children}</body>
    </html>
  );
}
