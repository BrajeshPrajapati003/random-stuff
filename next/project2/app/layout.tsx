import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "First Nextjs project",
  description: "This is my first project of Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
