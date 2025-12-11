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
import Script from 'next/script';

// Hind Siliguri ফন্ট কনফিগার করা হয়েছে
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
    default: 'Pixel & Code - Your All-in-one Digital Edge', // ✅ আপডেটেড টাইটেল
    template: '%s | Pixel & Code'
  },
  description: 'Leading digital agency in Bangladesh specializing in web design, graphic design, video editing, and meta marketing. Transform your business with our expert digital solutions.',
  
  // ✅ আইকন যোগ করা হয়েছে
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo-01.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
  },

  keywords: [
    'pixel and code',
    'web design agency bangladesh',
    'digital marketing agency bangladesh',
    'web development shariatpur',
    'best web design company bangladesh',
    'professional website design',
    'ecommerce website bangladesh',
    'responsive web design',
    'SEO services bangladesh',
    'social media marketing',
    'pixel & code',
    'pixel and code agency',
    'software company shariatpur',
    'web design shariatpur',
    'graphics design services',
    'video editing services',
    'meta ads management',
    'facebook advertising bangladesh',
    'instagram marketing',
    'content creation bangladesh',
    'branding services bangladesh',
    'ওয়েব ডিজাইন বাংলাদেশ',
    'ডিজিটাল মার্কেটিং এজেন্সি',
    'গ্রাফিক্স ডিজাইন সার্ভিস',
    'ভিডিও এডিটিং বাংলাদেশ',
    'ওয়েবসাইট ডেভেলপমেন্ট',
    'পিক্সেল এন্ড কোড',
  ],
  authors: [{ name: 'Pixel & Code', url: 'https://pixelandcode.agency' }],
  creator: 'Pixel & Code',
  publisher: 'Pixel & Code',
  
  // ✅ Enhanced robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // ✅ Open Graph Enhanced
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    alternateLocale: ['en_US'],
    url: 'https://pixelandcode.agency',
    title: 'Pixel & Code - Your All-in-one Digital Edge',
    description: 'Transform your business with expert web design, graphic design, video editing, and meta marketing services. Your trusted digital partner in Bangladesh.',
    siteName: 'Pixel & Code',
    images: [
      {
        url: 'https://pixelandcode.agency/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixel & Code - Digital Marketing Agency',
        type: 'image/jpeg',
      },
    ],
  },
  
  // ✅ Twitter Enhanced
  twitter: {
    card: 'summary_large_image',
    site: '@pixelandcode', // আপনার Twitter handle যোগ করুন
    creator: '@pixelandcode',
    title: 'Pixel & Code - Digital Solutions Bangladesh',
    description: 'Professional web design, graphic design, and digital marketing services',
    images: ['https://pixelandcode.agency/og-image.jpg'],
  },
  
  // ✅ Verification codes
  verification: {
    google: 'google-site-verification=PfzJQg1Qfkwsyg03643Pc76G2iWZLFzBrt3mm1Sca_Q',
    // yandex: 'your-yandex-verification-code', // যদি প্রয়োজন হয়
    // bing: 'your-bing-verification-code', // যদি প্রয়োজন হয়
  },
  
  // ✅ Alternate languages
  alternates: {
    canonical: 'https://pixelandcode.agency',
    languages: {
      'bn-BD': 'https://pixelandcode.agency/bn',
      'en-US': 'https://pixelandcode.agency/en',
    },
  },
  
  // ✅ Additional metadata
  category: 'technology',
  classification: 'Business',
  
  // ✅ App-specific metadata
  applicationName: 'Pixel & Code',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" className={hindSiliguri.variable} suppressHydrationWarning>
      <head>
        <StructuredData />
        
        {/* ✅ Additional SEO Meta Tags */}
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* ✅ Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      
      <body 
        className="antialiased bg-background text-foreground" 
        style={{ fontFamily: 'var(--font-hind-siliguri), system-ui, sans-serif' }}
      >
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
        
        {/* Analytics Scripts */}
        <GoogleAnalytics gaId="G-2VLGZJ22K9" />
        <SpeedInsights />

        {/* ✅ Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "uf9kp660ex");
          `}
        </Script>
        
        {/* ✅ Schema.org JSON-LD for Organization */}
        <Script 
          id="organization-schema" 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Pixel & Code",
              "alternateName": "Pixel and Code",
              "url": "https://pixelandcode.agency",
              "logo": "https://pixelandcode.agency/logo-01.svg",
              "description": "Your All-in-one Digital Edge",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Shariatpur",
                "addressRegion": "Dhaka",
                "addressCountry": "BD"
              },
              "sameAs": [
                "https://www.facebook.com/pixelandcode",
                "https://www.instagram.com/pixelandcode",
                "https://www.linkedin.com/company/pixelandcode"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "availableLanguage": ["Bengali", "English"]
              }
            })
          }}
        />
      </body>
    </html>
  );
}