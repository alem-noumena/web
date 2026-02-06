import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NOUMENA Digital | Secure-by-Design Backend and Digital Asset Platform",
  description: "Build secure, compliant applications and digital assets with NOUMENA's trust-native platform. NPL and Runtime, NOUMENA Cloud, and NOUMENA Pulse.",
  keywords: "secure backend, digital assets, tokenization, stablecoin, NPL, blockchain, compliance, enterprise software, AI agents",
  icons: {
    icon: [
      { url: "/logo/favicon.ico", sizes: "any" },
      { url: "/logo/favicon.svg", type: "image/svg+xml" },
      { url: "/logo/favicon.png", type: "image/png" },
    ],
    shortcut: "/logo/favicon.ico",
    apple: "/logo/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
