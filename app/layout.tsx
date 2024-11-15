import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./home/nav";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./home/Footer";
import ScrollTop from "./home/ScrollTop";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jamila Jobs",
  description: "find your dream job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav/>
        {children}
        <Footer/>
        <ScrollTop/>
      </body>
    </html>
    </ClerkProvider>
  );
}
