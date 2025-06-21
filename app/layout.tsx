import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./comp/nav/nav";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./comp/nav/app-sidebar";
import localFont from "next/font/local";

import Footer from "@/app/comp/footer/footer";
import "./globals.css";

const abhya = localFont({
  src: [
    {
      path: "../public/fonts/AbhayaLibre/AbhayaLibre-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/AbhayaLibre/AbhayaLibre-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/AbhayaLibre/AbhayaLibre-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/AbhayaLibre/AbhayaLibre-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/AbhayaLibre/AbhayaLibre-ExtraBold.ttf",
      weight: "800",
    },
  ],
  display: "swap",
  variable: "--font-abhya",
});

const acme = localFont({
  src: [{ path: "../public/fonts/Acme/Acme-Regular.ttf" }],
  display: "swap",
  variable: "--font-acme",
});
// const nimbusRoman = localFont({
//   src: [
//     {
//       path: "../public/fonts/NimbusRoman/NimbusRoman-Regular.otf",
//       weight: "400",
//     },
//     { path: "../public/fonts/NimbusRoman/NimbusRoman-Bold.otf", weight: "600" },
//   ],
//   display: "swap",
//   variable: "--font-nimbus",
// });
// const timesTen = localFont({
//   src: [
//     {
//       path: "../public/fonts/TimesTen/TimesTen-Regular.ttf",
//       weight: "400",
//     },
//     { path: "../public/fonts/TimesTen/TimesTen-Bold.ttf", weight: "600" },
//   ],
//   display: "swap",
//   variable: "--font-times",
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
      <body className={`${abhya.variable} ${acme.variable} antialiased`}>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <main className="relative w-[100dvw]">
            {" "}
            <div>
              <Nav />
              {children}
            </div>
            <Footer />
          </main>
          {/* <main className="relative w-[100dvw]"> */}

          {/* </main> */}
        </SidebarProvider>
      </body>
    </html>
  );
}
