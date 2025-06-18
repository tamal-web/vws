import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./comp/nav/nav";
import Footer from "@/app/comp/footer/footer";
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
  title: "Vrinda Weflare NGO",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="relative w-[100dvw]">
          {" "}
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
