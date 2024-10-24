import type { Metadata } from "next";
import "./globals.css";

import { Enriqueta } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import SchemaMarkup from "@/components/SchemaMarkup";

const enriqueta = Enriqueta({
  variable: "--font-enriqueta",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fayen.co.tz"),
  title: {
    default: "FAYEN TRAVEL AGENCY | Your Journey Begins Here",
    template: "%s | FAYEN TRAVEL AGENCY",
  },
  description:
    "Discover amazing travel destinations with FAYEN TRAVEL AGENCY. We offer customized travel packages, flight bookings, and unforgettable experiences.",
  keywords: [
    "travel agency",
    "vacation packages",
    "flight booking",
    "holiday planning",
    "travel services",
    "car rental",
    "visa application",
  ],
  authors: [{ name: "FAYEN TRAVEL AGENCY" }],
  openGraph: {
    title: "FAYEN TRAVEL AGENCY | Your Journey Begins Here",
    description:
      "Discover amazing travel destinations with FAYEN TRAVEL AGENCY. We offer customized travel packages, flight bookings, and unforgettable experiences.",
    url: "https://fayen.co.tz",
    siteName: "FAYEN TRAVEL AGENCY",
    images: [
      {
        url: "@/public/images/FAYEN.png",
        width: 1200,
        height: 630,
        alt: "FAYEN TRAVEL AGENCY Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
      </head>
      <body className={`${enriqueta.variable} antialiased`}>
        <div className="enriqueta">
          <Suspense fallback={<Loading />}>
            <Navbar />
          </Suspense>
        </div>

        <Suspense fallback={<Loading />}>
          <main className="enriqueta">{children}</main>
        </Suspense>

        <div className="enriqueta">
          <Suspense fallback={<Loading />}>
            <Footer />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
