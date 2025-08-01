import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import CookieConsentComponent from '@/components/CookieConsent';
import { Providers } from './providers';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
          <CookieConsentComponent />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
