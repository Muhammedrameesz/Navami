import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/Navbar/MainNav";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <MainNav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
