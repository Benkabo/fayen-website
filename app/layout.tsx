import type { Metadata } from "next";
import "./globals.css";

import { Enriqueta } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

const enriqueta = Enriqueta({
  variable: "--font-enriqueta",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fayen",
  description: "Your travel business partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
