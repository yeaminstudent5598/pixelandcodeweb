// File Path: D:\yeamin student\PixelandCode Web\pixelandcode\src\app\page.tsx

import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSection } from "./components/shared/HeroSection";
import { Hero } from "./components/shared/Hero";
import { AboutSection } from "./components/AboutSection";

// ==========================================
// 🎯 SEO METADATA - HOME PAGE
// ==========================================
export const metadata: Metadata = {
  title: 'Pixel & Code - Your All-in-one Digital Edge', // ✅ টাইটেল আপডেট করা হয়েছে
  description: 'Leading digital agency in Bangladesh offering professional web design, web development, graphic design, video editing, and digital marketing services. Transform your business with our expert solutions in Shariatpur and across Bangladesh.',
  keywords: [
    // English Keywords
    'pixel and code',
    'digital agency bangladesh',
    'web design bangladesh',
    'web development bangladesh',
    'graphic design services bangladesh',
    'video editing bangladesh',
    'digital marketing agency',
    'e-commerce website bangladesh',
    'responsive web design',
    'logo design bangladesh',
    'branding services',
    'social media marketing',
    'facebook ads bangladesh',
    'meta marketing',
    'professional website design',
    'custom web development',
    'ui ux design bangladesh',
    'wordpress development',
    'next.js development',
    'react development',
    'mobile app development',
    'seo services bangladesh',
    'content creation',
    'motion graphics',
    'business website bangladesh',
    'corporate website design',
    'portfolio website',
    'landing page design',
    'best digital agency shariatpur',
    'web design company shariatpur',
    
    // Bangla Keywords
    'পিক্সেল এন্ড কোড',
    'ওয়েব ডিজাইন বাংলাদেশ',
    'ওয়েবসাইট ডিজাইন',
    'গ্রাফিক্স ডিজাইন',
    'ভিডিও এডিটিং',
    'ডিজিটাল মার্কেটিং',
    'ই-কমার্স ওয়েবসাইট',
    'ওয়েব ডেভেলপমেন্ট',
    'লোগো ডিজাইন',
    'ব্র্যান্ডিং সার্ভিস',
    'ফেসবুক মার্কেটিং',
    'সোশ্যাল মিডিয়া মার্কেটিং',
    'ওয়েবসাইট তৈরি',
    'প্রফেশনাল ওয়েবসাইট',
    'ডিজিটাল এজেন্সি শরীয়তপুর',
  ],
  authors: [{ name: 'Pixel & Code', url: 'https://pixelandcode.agency' }],
  creator: 'Pixel & Code',
  publisher: 'Pixel & Code',
  
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    alternateLocale: ['en_US'],
    url: 'https://pixelandcode.agency',
    title: 'Pixel & Code - Your All-in-one Digital Edge', // ✅ আপডেট করা হয়েছে
    description: 'Complete digital solutions: Web Design, Web Development, Graphics Design, Video Editing & Digital Marketing. Your trusted partner for business growth in Bangladesh.',
    siteName: 'Pixel & Code',
    images: [
      {
        url: 'https://pixelandcode.agency/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixel & Code - Digital Marketing Agency Bangladesh',
        type: 'image/jpeg',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@pixelandcode',
    creator: '@pixelandcode',
    title: 'Pixel & Code - Your All-in-one Digital Edge', // ✅ আপডেট করা হয়েছে
    description: 'Professional web design, graphic design, video editing & digital marketing services',
    images: ['https://pixelandcode.agency/og-home.jpg'],
  },
  
  alternates: {
    canonical: 'https://pixelandcode.agency',
    languages: {
      'bn-BD': 'https://pixelandcode.agency/bn',
      'en-US': 'https://pixelandcode.agency/en',
    },
  },
  
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
  
  category: 'Technology',
  classification: 'Business',
};

// ==========================================
// 🚀 DYNAMIC IMPORTS - Performance Optimization
// ==========================================
const PortfolioSection = dynamic(
  () => import('./components/shared/PortfolioSection').then(mod => ({ default: mod.PortfolioSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const FeaturedServicesSection = dynamic(
  () => import('./components/shared/FeaturedServicesSection').then(mod => ({ default: mod.FeaturedServicesSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const PricingSection = dynamic(
  () => import('./components/shared/PricingSection').then(mod => ({ default: mod.PricingSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const TechnologySection = dynamic(
  () => import('./components/shared/TechnologySection').then(mod => ({ default: mod.TechnologySection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const WhyChooseUsSection = dynamic(
  () => import('./components/shared/WhyChooseUsSection').then(mod => ({ default: mod.WhyChooseUsSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const AchievementsSection = dynamic(
  () => import('./components/shared/AchievementsSection').then(mod => ({ default: mod.AchievementsSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const TeamSection = dynamic(
  () => import('./components/shared/TeamSection').then(mod => ({ default: mod.TeamSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const TestimonialsSection = dynamic(
  () => import('./components/shared/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

const FaqSection = dynamic(
  () => import('./components/shared/FaqSection').then(mod => ({ default: mod.FaqSection })),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100 dark:bg-gray-900" />,
  }
);

// ==========================================
// 📊 STRUCTURED DATA - JSON-LD Schemas
// ==========================================
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pixel & Code",
  "alternateName": "Pixel and Code",
  "url": "https://pixelandcode.agency",
  "logo": "https://pixelandcode.agency/logo-01.svg",
  "description": "Professional digital marketing agency in Bangladesh specializing in web design, graphic design, video editing, and digital marketing services.",
  "foundingDate": "2023",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Shariatpur",
    "addressRegion": "Dhaka Division",
    "addressCountry": "BD"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": ["Bengali", "English"],
    "telephone": "+880-XXXX-XXXXXX"
  },
  "sameAs": [
    "https://www.facebook.com/pixelandcode",
    "https://www.instagram.com/pixelandcode",
    "https://www.linkedin.com/company/pixelandcode",
    "https://twitter.com/pixelandcode"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Bangladesh"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Pixel & Code",
  "url": "https://pixelandcode.agency",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://pixelandcode.agency/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Digital Marketing Services",
  "provider": {
    "@type": "Organization",
    "name": "Pixel & Code",
    "url": "https://pixelandcode.agency"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Bangladesh"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Design & Development",
          "description": "Custom website design and development services including e-commerce, corporate websites, and web applications"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Graphic Design",
          "description": "Professional graphic design services including logo design, branding, social media graphics, and print materials"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Video Editing",
          "description": "Professional video editing services for social media, commercials, YouTube content, and corporate videos"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing",
          "description": "Complete digital marketing solutions including Facebook ads, Instagram marketing, and social media management"
        }
      }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://pixelandcode.agency"
    }
  ]
};

// ==========================================
// 🏠 HOME PAGE COMPONENT
// ==========================================
export default function HomePage() {
  return (
    <>
      {/* ✅ Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Above the fold - immediately loaded */}
      <HeroSection/>
      <Hero />
      <AboutSection/>
      
      {/* Below the fold - lazy loaded for better performance */}
      <PortfolioSection/>
      <FeaturedServicesSection/>
      <PricingSection/>
      <TechnologySection/>
      <WhyChooseUsSection/>
      <AchievementsSection/>
      <TeamSection/>
      <TestimonialsSection/>
      <FaqSection/>
    </>
  );
}