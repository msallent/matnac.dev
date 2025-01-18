import type { Metadata } from "next";
import { Instrument_Sans, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "matnac.dev ⚡︎",
  description: "Next-gen web development",
  icons: {
    icon: [
      {
        rel: "icon",
        sizes: "32x32",
        type: "image/png",
        url: "/icon-dark.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        sizes: "32x32",
        type: "image/png",
        url: "/icon-light.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background">
        {children}
        <div className="pointer-events-none fixed left-0 top-0 -z-10 h-full w-full bg-grain mix-blend-overlay" />
        <Analytics />
      </body>
    </html>
  );
}
