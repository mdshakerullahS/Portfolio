import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://shakerullah.vercel.app";
const TITLE =
  "Shakerullah - Full-Stack Developer | Building fast, Scalable Web apps that actually survive production.";
const DESCRIPTION =
  "Full-stack developer focused on building fast, scalable web applications using modern technologies. I've built real projects with authentication, dashboards, and APIs.";
const NAME = "Md Shakerullah Sourov";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: TITLE,
  description: DESCRIPTION,

  alternates: {
    canonical: BASE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Shakerullah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shakerullah Portfolio Preview",
      },
      {
        url: "/og-image-small.png",
        width: 600,
        height: 315,
        alt: "Shakerullah Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@mdshakerullahS",
    site: "@mdshakerullahS",
    images: ["/og-image.png"],
    description: DESCRIPTION,
    title: TITLE,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  creator: NAME,

  publisher: NAME,
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
