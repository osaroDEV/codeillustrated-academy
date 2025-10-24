import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Illustrated - Learn. Code. Visualize.",
  description: "Master programming through visual learning and hands-on practice",
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
