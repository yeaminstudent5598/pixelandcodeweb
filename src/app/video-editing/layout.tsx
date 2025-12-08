// src/app/video-editing/layout.tsx
// এই ফাইলটি তৈরি করুন video-editing folder এ

import { Metadata } from 'next';

// ==========================================
// 🎯 SEO METADATA - VIDEO EDITING PAGE
// ==========================================
export const metadata: Metadata = {
  title: 'Professional Video Editing Services in Bangladesh | Pixel & Code',
  description: 'Expert video editing services in Bangladesh. Social media videos, promotional videos, motion graphics, and corporate video editing. Fast delivery, 4K quality, copyright-free resources. Transform your footage into engaging content.',
  keywords: [
    // English Keywords
    'video editing bangladesh',
    'video editing services bangladesh',
    'professional video editor',
    'youtube video editing',
    'facebook reels editing',
    'instagram reels editing',
    'social media video editing',
    'promotional video editing',
    'motion graphics bangladesh',
    'corporate video editing',
    'video editing shariatpur',
    'video production bangladesh',
    'commercial video editing',
    'product video editing',
    'event video editing',
    '4k video editing',
    'video post production',
    'video color grading',
    'video transitions',
    'video effects',
    'best video editor bangladesh',
    
    // Bangla Keywords
    'ভিডিও এডিটিং বাংলাদেশ',
    'ভিডিও এডিটিং সার্ভিস',
    'প্রফেশনাল ভিডিও এডিটর',
    'ইউটিউব ভিডিও এডিটিং',
    'ফেসবুক রিলস এডিটিং',
    'সোশ্যাল মিডিয়া ভিডিও',
    'প্রোমোশনাল ভিডিও',
    'মোশন গ্রাফিক্স',
    'কর্পোরেট ভিডিও',
    'ভিডিও তৈরি',
  ],
  
  openGraph: {
    title: 'Professional Video Editing Services | Pixel & Code',
    description: 'Expert video editing for social media, promotional content, and corporate videos. 4K quality, fast delivery, copyright-free resources.',
    url: 'https://pixelandcode.agency/video-editing',
    type: 'website',
    images: [
      {
        url: 'https://pixelandcode.agency/og-video-editing.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixel & Code Video Editing Services',
        type: 'image/jpeg',
      },
    ],
    locale: 'bn_BD',
    siteName: 'Pixel & Code',
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@pixelandcode',
    creator: '@pixelandcode',
    title: 'Professional Video Editing Services | Pixel & Code',
    description: 'Expert video editing for social media, promotional content, and corporate videos',
    images: ['https://pixelandcode.agency/og-video-editing.jpg'],
  },
  
  alternates: {
    canonical: 'https://pixelandcode.agency/video-editing',
    languages: {
      'bn-BD': 'https://pixelandcode.agency/bn/video-editing',
      'en-US': 'https://pixelandcode.agency/en/video-editing',
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
};

// ==========================================
// 🏗️ LAYOUT COMPONENT
// ==========================================
export default function VideoEditingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}