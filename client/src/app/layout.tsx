import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2D-Portfolio",
  description: "Interactive portfolio made in format of 2d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
