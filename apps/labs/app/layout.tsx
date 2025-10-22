import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Illustrated Labs",
  description: "Interactive coding labs and experiments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
