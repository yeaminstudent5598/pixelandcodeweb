import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meta Marketing & Facebook Ads Services in Bangladesh | Pixel & Code',
  description: 'Professional meta marketing services in Bangladesh. Facebook ads, Instagram ads, lead generation, brand awareness campaigns, conversion optimization, retargeting. Grow your business with targeted advertising and expert campaign management.',
  keywords: [
    // English
    'meta marketing bangladesh',
    'facebook ads bangladesh',
    'instagram ads',
    'facebook advertising',
    'social media advertising',
    'facebook marketing',
    'instagram marketing',
    'facebook lead generation',
    'facebook campaign management',
    'meta ads manager',
    'facebook pixel setup',
    'conversion tracking',
    'retargeting campaigns',
    'lookalike audience',
    'social media marketing',
    
    // Bangla
    'মেটা মার্কেটিং',
    'ফেসবুক বিজ্ঞাপন',
    'ফেসবুক মার্কেটিং',
    'ইন্সটাগ্রাম বিজ্ঞাপন',
    'সোশ্যাল মিডিয়া মার্কেটিং',
  ],
  
  openGraph: {
    title: 'Meta Marketing & Facebook Ads | Pixel & Code',
    description: 'Professional Facebook and Instagram advertising services. Lead generation and brand awareness.',
    url: 'https://pixelandcode.agency/meta-marketing',
    type: 'website',
    locale: 'bn_BD',
    siteName: 'Pixel & Code',
    images: [{
      url: 'https://pixelandcode.agency/og-meta-marketing.jpg',
      width: 1200,
      height: 630,
    }],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Meta Marketing Services | Pixel & Code',
    images: ['https://pixelandcode.agency/og-meta-marketing.jpg'],
  },
  
  alternates: {
    canonical: 'https://pixelandcode.agency/meta-marketing',
  },
  
  robots: {
    index: true,
    follow: true,
  },
};

export default function MetaMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}