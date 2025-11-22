// src/components/shared/HeroSection.tsx
'use client';

import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PixelLogo3DAnimation } from './PixelCodeLogo3D';

export function HeroAnimation() {
  return (
    // ✅ Dark mode background (dark:bg-gray-950) added
    <section className="grid h-[80vh] w-full grid-cols-1 items-center overflow-hidden bg-orange-50/30 dark:bg-gray-950 lg:grid-cols-2 transition-colors duration-300">
      
      {/* বাম কলাম: 3D লোগো */}
      <div className="h-full w-full min-h-[40vh] lg:min-h-full">
        <Suspense fallback={null}>
          <PixelLogo3DAnimation />
        </Suspense>
      </div>

      {/* ডান কলাম: HTML কনটেন্ট */}
      <div className="flex flex-col items-start justify-center p-8 lg:p-16">
        {/* ✅ Dark mode text color (dark:text-white) added */}
        <h1 className="text-left text-5xl font-extrabold text-gray-800 dark:text-white drop-shadow-md md:text-7xl">
          Pixel & Code
        </h1>
        {/* ✅ Dark mode description color (dark:text-gray-300) added */}
        <p className="mt-4 text-left text-lg text-gray-600 dark:text-gray-300 drop-shadow-sm md:text-xl">
          Shariatpur's #1 Digital Service Provider
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 rounded-full bg-red-500 px-10 py-6 text-lg text-white shadow-lg transition-transform hover:scale-105 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
        >
          <Link href="/services">আমাদের সার্ভিস দেখুন</Link>
        </Button>
      </div>
    </section>
  );
}