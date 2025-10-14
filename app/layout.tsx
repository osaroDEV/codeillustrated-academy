import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactFormPopup } from '@/components/contact-form-popup';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CodeIllustrated Online School - Learn Coding Online',
  description: 'Master coding through our interactive online courses. From crash courses to comprehensive programs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <ContactFormPopup />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}