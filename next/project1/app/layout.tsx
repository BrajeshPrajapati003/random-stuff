import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/src/components/Nav";

const poppins = Poppins({subsets: ['latin'], weight: ['400', '600'], display: 'swap'})

export const metadata: Metadata = {
  title: "Travel Guide Website",
  description: "Best Travel guidance",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} w-screen h-screen bg-black`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
