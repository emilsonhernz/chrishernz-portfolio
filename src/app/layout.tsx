import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Back-End Software Engineer`,
    template: `%s | ${profile.name}`
  },
  icons: {
    icon: "/brand/favicon.ico",
    shortcut: "/brand/favicon.ico",
    apple: "/brand/favicon.ico"
  },
  description:
    "Back-End Software Engineer and Automation & Integration Specialist building APIs, business systems, and workflow automation.",
  keywords: [
    "Back-End Software Engineer",
    "Automation Specialist",
    "API Integration",
    "NetSuite",
    "n8n",
    "SuiteScript",
    "Emil Hernaez"
  ],
  openGraph: {
    title: `${profile.name} | Back-End Software Engineer`,
    description:
      "Reliable APIs, automation workflows, business systems, and integrations.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
