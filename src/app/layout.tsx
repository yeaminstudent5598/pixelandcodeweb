// src/app/layout.tsx
import type { Metadata } from 'next';
import { Hind_Siliguri } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/shared/Navbar';
import { Footer } from './components/shared/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

// Hind Siliguri ফন্ট কনফিগার করা হয়েছে
const hindSiliguri = Hind_Siliguri({
  weight: ['400', '700'],
  subsets: ['bengali'],
  variable: '--font-hind-siliguri',
});

export const metadata: Metadata = {
  title: 'Pixel & Code - Web Agency',
  description: 'We Code, We Design and We Edit',
  icons: {
    icon: '/logo-01.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={hindSiliguri.variable}>
      <body className="antialiased bg-background text-foreground font-sans">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-[80vh]">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}