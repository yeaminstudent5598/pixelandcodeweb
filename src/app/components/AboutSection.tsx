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
  const [showVideo, setShowVideo] = useState(false); // YouTube load করবে click এ

  return (
    <section className="w-full bg-orange-50/50 dark:bg-background py-20 sm:py-28 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* বাম কলাম */}
          <div className="flex flex-col items-start">
            <span className="mb-4 rounded-full border border-orange-200 bg-white dark:bg-gray-800 dark:border-gray-700 px-4 py-1 text-sm font-medium text-orange-600 dark:text-orange-400 shadow-sm">
              {language ? 'আমাদের পরিচিতি' : 'About Us'}
            </span>
            <h2 className="mb-6 text-3xl font-extrabold text-gray-800 dark:text-gray-100 md:text-4xl">
              {language
                ? 'শরীয়তপুর এর #১ ডিজিটাল সার্ভিস প্রদানকারী প্রতিষ্ঠান!'
                : "Shariatpur's #1 Digital Service Provider!"}
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
              {language
                ? 'আমরা দীর্ঘ ৭ বছর যাবত সুনামের সহিত শরীয়তপুর এবং সারাদেশব্যাপী ডিজিটাল সার্ভিস রিলেটেড সকল চাহিদা পূরণ করে আসছি। আমাদের রয়েছে ৪০০ এরও অধিক ব্র্যান্ডের সাথে কাজ করার অভিজ্ঞতা।'
                : 'For over 7 years, we have been fulfilling all kinds of digital service needs with reputation in Shariatpur and across the country. We also have experience working with more than 400 brands.'}
            </p>

            <Button
              asChild
              variant="link"
              className="p-0 text-lg text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400">
              <Link href="/about" className="flex items-center gap-2">
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
              >
                <Image
                  src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" // YouTube thumbnail
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="rounded-full bg-red-600 p-4 group-hover:scale-110 transition-transform">
                    <Play className="h-12 w-12 text-white" fill="white" />
                  </div>
                </div>
              </div>
            ) : (
              // YouTube iframe (শুধু click করলে load হবে)
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube video player"
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