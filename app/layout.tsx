import type { Metadata } from "next";
// TODO: Explain later next/fonts
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CineScope Movie Database",
    template: "%s - CineScope Movie Database",
  },
  description:
    "CineScope Movie Database is a web application that allows users to search for movies, view details about them, and create watchlists. It provides an intuitive interface for movie enthusiasts to explore and manage their movie collections.",
};

// First Server Component in the app, used to wrap all pages and components. You can add global styles, metadata, etc. here.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        inter.className,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
