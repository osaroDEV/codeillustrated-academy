import type { Metadata } from "next";
import "./globals.css";
import { CurrencyProvider } from "@/lib/currency-context";

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
      <body>
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}
