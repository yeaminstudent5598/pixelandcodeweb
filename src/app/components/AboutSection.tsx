// src/components/shared/AboutSection.tsx
'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Clapperboard, Sparkles } from 'lucide-react'; // আইকন আপডেট করা হয়েছে
import Link from 'next/link';
import React from 'react';
// useState ও Image এখন আর লাগছে না, তাই সরানো হলো (যদি অন্য কোথাও না লাগে)

export function AboutSection() {
  const { language } = useLanguage();

  return (
    <section className="w-full bg-orange-50/50 dark:bg-background py-20 sm:py-28 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* বাম কলাম - টেক্সট সেকশন */}
          <div className="flex flex-col items-start">
            <span className="mb-4 rounded-full border border-orange-200 bg-white dark:bg-gray-800 dark:border-gray-700 px-4 py-1 text-sm font-medium text-orange-600 dark:text-orange-400 shadow-sm">
              {language ? 'আমাদের পরিচিতি' : 'About Us'}
            </span>
            
            <h2 className="mb-6 text-3xl font-extrabold text-gray-800 dark:text-gray-100 md:text-4xl">
              {language
                ? 'আপনার ব্যবসার ডিজিটাল অগ্রযাত্রায় বিশ্বস্ত সহযোগী!'
                : 'Your Trusted Partner for Digital Excellence!'}
            </h2>
            
            <p className="mb-8 text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
              {language
                ? 'গত ১ বছর ধরে আমরা অত্যন্ত নিষ্ঠার সাথে আধুনিক সব ডিজিটাল সেবা প্রদান করে আসছি। গ্রাহক সন্তুষ্টি এবং উন্নত প্রযুক্তির সমন্বয়ে আপনার ব্র্যান্ডকে নতুন উচ্চতায় নিয়ে যেতে আমরা সর্বদা প্রতিশ্রুতিবদ্ধ।'
                : 'For over a year, we have been successfully providing top-notch digital services with dedication. We are committed to taking your brand to new heights through customer satisfaction and modern technology.'}
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

          {/* ডান কলাম: Video Placeholder / Coming Soon Card */}
          <div className="relative w-full overflow-hidden rounded-2xl pb-[56.25%] shadow-2xl dark:shadow-gray-900/50 bg-gray-900 group">
            
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            
            {/* Animated Circle in Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/30 transition-all duration-700"></div>

            {/* Content Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4">
              
              <div className="relative">
                 {/* Icon Container */}
                <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Clapperboard className="h-10 w-10 text-orange-400" />
                </div>
                {/* Sparkle Icon for decoration */}
                <Sparkles className="absolute -top-2 -right-2 h-5 w-5 text-yellow-400 animate-pulse" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                  {language ? 'ভিডিও শীঘ্রই আসছে...' : 'Video Coming Soon...'}
                </h3>
                <p className="text-sm md:text-base text-gray-400 max-w-xs mx-auto">
                  {language 
                    ? 'আমাদের এজেন্সির গল্প এবং কার্যক্রম সম্পর্কে জানতে চোখ রাখুন।' 
                    : 'Stay tuned to watch our agency story and activities.'}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}