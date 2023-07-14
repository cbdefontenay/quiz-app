import GoBackButton from "@/components/GoBackButton";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Roboto_Slab } from "next/font/google";
import NavBar from "@/components/NavBar";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harry Potter Quiz",
  description: "Created by Cyprien de Fontenay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <link rel='icon' href='/hat.svg' sizes='any' />
      <body className={`${roboto.className} bg-black overflow-x-hidden`}>
        <NavBar />
        {children} <Analytics />
      </body>
    </html>
  );
}
