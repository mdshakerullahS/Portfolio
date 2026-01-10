import type { Metadata, Viewport } from "next";
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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;
const TITLE = "Shakerullah - Full Stack Web Developer";
const NAME = "Md Shakerullah Sourov";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: TITLE,
  description:
    "I build scalable production-ready web applications using modern technologies like Next.js, React and Node.js.",

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
    description:
      "I build scalable production-ready web applications using modern technologies like Next.js, React and Node.js.",
    siteName: "Shakerullah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@mdshakerullahS",
    images: ["/og-image.png"],
    description:
      "I build scalable production-ready web applications using modern technologies like Next.js, React and Node.js.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
