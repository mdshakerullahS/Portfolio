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

export const metadata: Metadata = {
  metadataBase: new URL("https://shakerullah.vercel.app"),

  title: "Shakerullah - Full Stack Web Developer",
  description:
    "I build scalable production-ready web applications using modern technologies like Next.js, React and Node.js.",

  alternates: {
    canonical: "https://shakerullah.vercel.app",
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
    url: "https://shakerullah.vercel.app",
    title: "Shakerullah - Full Stack Web Developer",
    description:
      "I build scalable production-ready web applications using modern technologies like Next.js, React and Node.js.",
    siteName: "Shakerullah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shakerullah - Full Stack Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@mdshakerullahS",
    images: ["/og-image.png"],
    description:
      "I build scalable production-ready web applications using modern technologies like Next.js, React and Node.js.",
    title: "Shakerullah - Full Stack Web Developer",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  creator: "Md Shakerullah Sourov",

  publisher: "Md Shakerullah Sourov",
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
