import GoBackButton from "@/components/GoBackButton";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";

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
      <link rel='icon' href='/ecus.webp' sizes='any' />
      <body className={`${roboto.className} bg-blue-900`}>{children}</body>
    </html>
  );
}
