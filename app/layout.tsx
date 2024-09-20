import type { Metadata } from "next";
import "./globals.css";

import { Enriqueta } from "next/font/google";
import Footer from "./(footer)/page";
import Navbar from "./(navbar)/page";

const enriqueta = Enriqueta({
  variable: "--font-enriqueta",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
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
        <Navbar />
        <main className="enriqueta">{children}</main>
        <div className="enriqueta">
          <Footer />
        </div>
      </body>
    </html>
  );
}
