// src/components/shared/HeroSection.tsx
'use client';

import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PixelLogo3DAnimation } from './PixelCodeLogo3D';
// ✅ ইম্পোর্টের নাম ঠিক করা হয়েছে

// ✅ ফাংশনের নাম HeroSection করা হয়েছে
export function HeroAnimation() {
  return (
    // ✅ লেআউটকে ২-কলাম গ্রিডে পরিবর্তন করা হয়েছে
    <section className="grid h-[80vh] w-full grid-cols-1 items-center overflow-hidden bg-orange-50/30 lg:grid-cols-2">
      
      {/* বাম কলাম: 3D লোগো */}
      <div className="h-full w-full min-h-[40vh] lg:min-h-full">
        <Suspense fallback={null}>
          <PixelLogo3DAnimation />
        </Suspense>
      </div>

      {/* ডান কলাম: HTML কনটেন্ট */}
      {/* ✅ z-index সরানো হয়েছে এবং লেখা বাম-aligned করা হয়েছে */}
      <div className="flex flex-col items-start justify-center p-8 lg:p-16">
        <h1 className="text-left text-5xl font-extrabold text-gray-800 drop-shadow-md md:text-7xl">
          Pixel & Code
        </h1>
        <p className="mt-4 text-left text-lg text-gray-600 drop-shadow-sm md:text-xl">
          Shariatpur's #1 Digital Service Provider
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 rounded-full bg-red-500 px-10 py-6 text-lg text-white shadow-lg transition-transform hover:scale-105 hover:bg-red-600"
        >
          <Link href="/services">আমাদের সার্ভিস দেখুন</Link>
        </Button>
      </div>
    </section>
  );
}