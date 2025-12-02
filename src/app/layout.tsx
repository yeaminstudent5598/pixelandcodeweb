// File Path: D:\yeamin student\PixelandCode Web\pixelandcode\src\app\layout.tsx

import type { Metadata } from 'next';
import { Hind_Siliguri } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/shared/Navbar';
import { Footer } from './components/shared/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from './components/theme-provider';
import { StructuredData } from './components/StructuredData';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script'; // ✅ নতুন ইম্পোর্ট (Clarity এর জন্য)

// Hind Siliguri ফন্ট কনফিগার করা হয়েছে (শুধু বাংলার জন্য)
const hindSiliguri = Hind_Siliguri({
  weight: ['400', '700'],
  subsets: ['bengali'],
  variable: '--font-hind-siliguri',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pixelandcode.agency'),
  title: {
    default: 'Pixel & Code - বাংলাদেশের #১ ডিজিটাল মার্কেটিং এজেন্সি',
    template: '%s | Pixel & Code'
  },
  description: 'আমরা তৈরি করি আধুনিক ওয়েবসাইট, গ্রাফিক্স ডিজাইন, ভিডিও এডিটিং এবং মেটা মার্কেটিং। ৭ বছরের অভিজ্ঞতা এবং ৪০০+ ব্র্যান্ডের সাথে কাজ। Web Design, Meta Marketing, Graphics & Video Editing in Shariatpur Bangladesh.',
  
  // ✅ আইকন যোগ করা হয়েছে
  icons: {
    icon: '/logo-01.svg',
    shortcut: '/logo-01.svg',
    apple: '/logo-01.svg',
  },

  keywords: [
    'pixel and code',
    'web design shariatpur',
    'pixel & Code',
    'pixel and Code Agency',
    'software company in shariatpur',
    'web design bangladesh',
    'pixel & Code Shariatpur',
    'digital marketing shariatpur',
    'digital marketing bangladesh',
    'graphics design shariatpur',
    'graphics design bangladesh',
    'video editing shariatpur',
    'video editing bangladesh',
    'meta marketing bangladesh',
    'facebook ads shariatpur',
    'facebook ads bangladesh',
    'ওয়েব ডিজাইন শরীয়তপুর',
    'ওয়েব ডিজাইন বাংলাদেশ',
    'ডিজিটাল মার্কেটিং',
    'গ্রাফিক্স ডিজাইন',
    'ভিডিও এডিটিং',
    'মেটা মার্কেটিং',
    'পিক্সেল এন্ড কোড',
  ],
  authors: [{ name: 'Pixel & Code', url: 'https://pixelandcode.agency' }],
  creator: 'Pixel & Code',
  publisher: 'Pixel & Code',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    alternateLocale: ['en_US'],
    url: 'https://pixelandcode.agency',
    title: 'Pixel & Code - বাংলাদেশের সেরা ডিজিটাল এজেন্সি',
    description: 'Web Design, Graphics Design, Video Editing & Meta Marketing Services',
    siteName: 'Pixel & Code',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixel & Code - Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel & Code - Digital Solutions',
    description: 'আধুনিক ওয়েবসাইট, গ্রাফিক্স ডিজাইন এবং মেটা মার্কেটিং সেবা',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification=PfzJQg1Qfkwsyg03643Pc76G2iWZLFzBrt3mm1Sca_Q',
  },
  alternates: {
    canonical: 'https://pixelandcode.agency',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" className={hindSiliguri.variable} suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased bg-background text-foreground" style={{ fontFamily: 'var(--font-hind-siliguri), system-ui, sans-serif' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <main className="min-h-[80vh]">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
        
        <GoogleAnalytics gaId="G-2VLGZJ22K9" />
        <SpeedInsights />

        {/* ✅ Microsoft Clarity Script যুক্ত করা হয়েছে */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "uf9kp660ex");
          `}
        </Script>
      </body>
    </html>
  );
}