// src/components/shared/PortfolioSection.tsx
'use client';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion ইম্পোর্ট করুন

// পোর্টফোলিও আইটেমগুলোর ডেটা
const portfolioItems = [
  {
    src: '/Demo_Work_01.jpg',
    alt: 'Gadgets Social Media Post Design',
  },
  {
    src: '/Demo Work 02.jpg',
    alt: 'Food Delivery Social Media Post Design',
  },
  {
    src: '/part-03.jpg',
    alt: 'Supershop Social Media Post Design',
  },
];

// একটি আইটেমের আনুমানিক প্রস্থ (width + gap)
// 350px width + 32px (mx-4 = 1rem = 16px * 2) gap
const itemWidth = 350 + 32;
// মোট প্রস্থ (অ্যানিমেশনের জন্য)
const totalWidth = itemWidth * portfolioItems.length;

export function PortfolioSection() {
  const { language } = useLanguage();

  return (
    // ✅ FIXED: dark:bg-blue-950 পরিবর্তন করে dark:bg-gray-950 করা হয়েছে যাতে নীল না দেখায়
    <section className="w-full bg-blue-600 dark:bg-gray-950 py-20 sm:py-28 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <h2 className="mb-12 text-center text-3xl font-extrabold text-white md:text-4xl">
          {language
            ? 'আমাদের তৈরি কিছু বিজ্ঞাপন!'
            : 'Some of Our Created Advertisements!'}
        </h2>

        {/* অটো-স্ক্রলিং ক্যারোসেল */}
        <div
          className="w-full overflow-hidden" // মেইন কন্টেইনার
        >
          {/* অ্যানিমেটেড কন্টেন্ট */}
          <motion.div
            className="flex" // ফ্লেক্স কন্টেইনার
            animate={{
              x: [0, -totalWidth], // 0 থেকে মোট প্রস্থ (-totalWidth) পর্যন্ত সরবে
            }}
            transition={{
              ease: 'linear', // রৈখিক গতি
              duration: 20, // অ্যানিমেশনের মোট সময় (সেকেন্ডে)
              repeat: Infinity, // অসীমভাবে চলতে থাকবে
            }}
          >
            {/* মূল ইমেজগুলো */}
            {portfolioItems.map((item, index) => (
              <div
                key={`item-${index}`}
                className="mx-4 flex-shrink-0"
                style={{ width: '350px' }} // প্রতিটি আইটেমের প্রস্থ
              >
                {/* কার্ডের ব্যাকগ্রাউন্ড ডার্ক মোডে সামান্য হালকা রাখা হয়েছে যাতে বোঝা যায় */}
                <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-lg">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}

            {/* লুপের জন্য ডুপ্লিকেট করা ইমেজগুলো */}
            {portfolioItems.map((item, index) => (
              <div
                key={`duplicate-${index}`}
                className="mx-4 flex-shrink-0"
                style={{ width: '350px' }}
                aria-hidden="true" // Screen reader থেকে হাইড
              >
                <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-lg">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}