import type { Metadata, Viewport } from "next";
import { DM_Mono, Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

const mono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://shakerullah.vercel.app";
const TITLE =
  "Shakerullah — Full-Stack Developer for Startups & Small Businesses";
const DESCRIPTION =
  "Full-stack developer specializing in e-commerce platforms, SaaS MVPs, and business web apps. Built with Next.js, Node.js, TypeScript, PostgreSQL, and Docker. Available for freelance projects.";
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

  keywords: [
    "full-stack developer",
    "Next.js developer",
    "Node.js developer",
    "TypeScript developer",
    "PostgreSQL",
    "freelance web developer",
    "e-commerce developer",
    "SaaS developer",
    "web application developer",
    "React developer",
    "Docker",
    "remote developer",
  ],

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
        alt: "Shakerullah — Full-Stack Developer Portfolio",
      },
      {
        url: "/og-image-small.png",
        width: 600,
        height: 315,
        alt: "Shakerullah — Full-Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@mdshakerullahS",
    site: "@mdshakerullahS",
    images: ["/og-image.png"],
    title: TITLE,
    description: DESCRIPTION,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  creator: NAME,
  publisher: NAME,

  authors: [
    {
      name: NAME,
      url: BASE_URL,
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${mono.variable} ${syne.variable} ${sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
