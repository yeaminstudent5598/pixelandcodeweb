// src/components/shared/AboutSection.tsx
'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

export function AboutSection() {
  const { language } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);

  // আপনার ভিডিও আইডি (বর্তমানে এটি একটি ডেমো আইডি দেওয়া আছে, আপনার আসল ভিডিও আইডি বসাবেন)
  const videoId = "dQw4w9WgXcQ"; 
  const videoTitle = language ? "Pixel & Code - শরীয়তপুর এর সেরা ডিজিটাল এজেন্সি" : "Pixel & Code - Best Digital Agency in Shariatpur";
  const videoDesc = language 
    ? "Pixel & Code এর পরিচিতি এবং আমাদের ৭ বছরের অভিজ্ঞতা সম্পর্কে জানুন।" 
    : "Introduction to Pixel & Code and our 7 years of experience in digital services.";

  // ✅ SEO: Structured Data (Schema Markup)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Pixel & Code',
    'url': 'https://pixelandcode.agency',
    'description': videoDesc,
    'subjectOf': {
      '@type': 'VideoObject',
      'name': videoTitle,
      'description': videoDesc,
      'thumbnailUrl': `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      'uploadDate': '2024-01-01T08:00:00+08:00', // ভিডিও আপলোডের তারিখ দিলে ভালো হয়
      'contentUrl': `https://www.youtube.com/watch?v=${videoId}`,
      'embedUrl': `https://www.youtube.com/embed/${videoId}`
    }
  };

  return (
    <section className="w-full bg-orange-50/50 dark:bg-background py-20 sm:py-28 transition-colors duration-300">
      
      {/* ✅ SEO: Schema Markup ইনজেক্ট করা */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* বাম কলাম */}
          <div className="flex flex-col items-start">
            <span className="mb-4 rounded-full border border-orange-200 bg-white dark:bg-gray-800 dark:border-gray-700 px-4 py-1 text-sm font-medium text-orange-600 dark:text-orange-400 shadow-sm">
              {language ? 'আমাদের পরিচিতি' : 'About Us'}
            </span>
            <h2 className="mb-6 text-3xl font-extrabold text-gray-800 dark:text-gray-100 md:text-4xl">
              {language
                ? 'বাংলাদেশ ডিজিটাল সার্ভিস প্রদানকারী প্রতিষ্ঠান!'
                : "Bangladesh Digital Service Provider!"}
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
              {language
                ? 'আমরা দীর্ঘ 1 বছর যাবত সুনামের সহিত শরীয়তপুর এবং সারাদেশব্যাপী ডিজিটাল সার্ভিস রিলেটেড সকল চাহিদা পূরণ করে আসছি। আমাদের রয়েছে ৪০০ এরও অধিক ব্র্যান্ডের সাথে কাজ করার অভিজ্ঞতা।'
                : 'For over 1 years, we have been fulfilling all kinds of digital service needs with reputation in Shariatpur and across the country. We also have experience working with more than 400 brands.'}
            </p>

            <Button
              asChild
              variant="link"
              className="p-0 text-lg text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400">
              <Link 
                href="/about" 
                className="flex items-center gap-2"
                // ✅ SEO: এক্সেসিবিলিটি এবং লিংক টাইটেল
                aria-label={language ? 'আমাদের সম্পর্কে আরও জানুন' : 'Learn more about us'}
                title={language ? 'Pixel & Code সম্পর্কে বিস্তারিত' : 'More about Pixel & Code'}
              >
                <span>{language ? 'আরও জানুন' : 'Learn More'}</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* ডান কলাম: Lazy YouTube */}
          <div className="relative w-full overflow-hidden rounded-2xl pb-[56.25%] shadow-2xl dark:shadow-gray-900/50 bg-gray-900">
            {!showVideo ? (
              // Thumbnail with play button
              <div 
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setShowVideo(true)}
                // ✅ SEO: বাটন হিসেবে ডিফাইন করা
                role="button"
                aria-label="Play Video"
                tabIndex={0}
              >
                <Image
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt={language ? "Pixel and Code এজেন্সি পরিচিতি ভিডিও" : "Pixel and Code Agency Intro Video"} // ✅ SEO: বর্ণনামূলক Alt text
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false} // Lazy load by default
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="rounded-full bg-red-600 p-4 group-hover:scale-110 transition-transform">
                    <Play className="h-12 w-12 text-white" fill="white" />
                  </div>
                </div>
              </div>
            ) : (
              // YouTube iframe
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}