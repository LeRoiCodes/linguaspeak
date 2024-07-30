/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LeRoi Translate",
  description: "A web app that translate from one language to another",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script src="./node_modules/preline/dist/preline.js"></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
