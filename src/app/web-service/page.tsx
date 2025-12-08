// src/app/web-service/page.tsx
import { Metadata } from 'next';
import { PriceSection } from "../components/shared/PriceSection";
import { ProcessSection } from "../components/shared/ProcessSection";
import { TechStackSection } from "../components/shared/TechStackSection";
import { WebServiceHero } from "../components/shared/WebServiceHero";
import { WebsiteTypesSection } from "../components/shared/WebsiteTypesSection";

// ✅ SEO Metadata for Web Service Page
export const metadata: Metadata = {
  title: 'Professional Web Design & Development Services in Bangladesh',
  description: 'Custom website design and development services in Bangladesh. We create modern, responsive websites, e-commerce stores, and web applications using Next.js, React, and cutting-edge technologies.',
  keywords: [
    'web design bangladesh',
    'web development bangladesh',
    'website design shariatpur',
    'custom website development',
    'e-commerce website bangladesh',
    'responsive web design',
    'next.js development',
    'react web development',
    'professional web design',
    'business website bangladesh',
    'portfolio website design',
    'blog website development',
    'landing page design',
    'ওয়েব ডিজাইন বাংলাদেশ',
    'ওয়েবসাইট ডেভেলপমেন্ট',
    'ই-কমার্স ওয়েবসাইট',
    'পোর্টফোলিও ওয়েবসাইট',
  ],
  openGraph: {
    title: 'Professional Web Design Services | Pixel & Code',
    description: 'Transform your business with modern, responsive websites. Custom web design and development services in Bangladesh.',
    url: 'https://pixelandcode.agency/web-service',
    type: 'website',
    images: [
      {
        url: 'https://pixelandcode.agency/og-web-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixel & Code Web Design Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Design Services | Pixel & Code',
    description: 'Custom web design and development services in Bangladesh',
    images: ['https://pixelandcode.agency/og-web-service.jpg'],
  },
  alternates: {
    canonical: 'https://pixelandcode.agency/web-service',
  },
};

// ✅ JSON-LD Structured Data for Service Page
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Design and Development",
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
    "name": "Web Design Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-commerce Website",
          "description": "Full-featured online store to sell products"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Portfolio Website",
          "description": "Professional portfolio to showcase work and skills"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Blog Website",
          "description": "Personal or business blog platform"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Website",
          "description": "Landing page for mobile app promotion"
        }
      }
    ]
  }
};

export default function WebServicePage() {
  return (
    <>
      {/* ✅ Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <div>
        <WebServiceHero />
        <WebsiteTypesSection />
        <ProcessSection />
        <TechStackSection />
        <PriceSection />
      </div>
    </>
  );
}