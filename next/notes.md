import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['400', '600'], 
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Travel Guide Website",
  description: "Best Travel guidance",
};



<html lang="en">
      <body
        className={`${poppins.className}`}
        >
        {children}
      </body>
    </html>

