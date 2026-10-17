import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://china-access.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "China Access — Overseas tracker for Chinese AI products",
    template: "%s · China Access",
  },
  description:
    "Can you use Chinese AI products outside China? Track Kling, Hailuo, Qwen, DeepSeek, Seedance, and more — access status, payment, and tips for developers and creators.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "China Access — Overseas tracker for Chinese AI products",
    description:
      "English tracker of whether Chinese AI video, LLM, image, and agent products work outside China.",
    url: siteUrl,
    siteName: "China Access",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "China Access — Overseas tracker for Chinese AI products",
    description:
      "Track overseas access, payment methods, and tips for Chinese AI products.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
