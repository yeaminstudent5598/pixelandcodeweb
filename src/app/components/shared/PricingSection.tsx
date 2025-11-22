// src/components/shared/PricingSection.tsx
'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

// প্যাকেজগুলোর ডেটা
const packagesDataBn = [
  {
    planName: 'সিলভার প্যাকেজ',
    imageSrc: '/Service-01.jpg', // ❗️ আপনার নিজের ছবি দিন
    alt: 'Silver Package Banner',
    priceUSD: 20,
    priceBDT: 3000,
    boostAmount: 3000,
    boostDescription: '৫-২০০ মেসেজ কনভারসেশন',
    link: '/package/silver',
    isPopular: false,
  },
  {
    planName: 'গোল্ড প্যাকেজ',
    imageSrc: '/Service-02.jpg', // ❗️ আপনার নিজের ছবি দিন
    alt: 'Gold Package Banner',
    priceUSD: 30,
    priceBDT: 4500,
    boostAmount: 4500,
    boostDescription: '২০০-৩০০ মেসেজ কনভারসেশন',
    link: '/package/gold',
    isPopular: true,
  },
  {
    planName: 'ডায়মন্ড প্যাকেজ',
    imageSrc: '/Service-03.jpg', // ❗️ আপনার নিজের ছবি দিন
    alt: 'Diamond Package Banner',
    priceUSD: 50,
    priceBDT: 7500,
    boostAmount: 10000,
    boostDescription: '৩০০-১০০০ মেসেজ কনভারসেশন',
    link: '/package/diamond',
    isPopular: false,
  },
];
const packagesDataEn = [
  {
    planName: 'Silver Package',
    imageSrc: '/Service-01.jpg', // ❗️ আপনার নিজের ছবি দিন
    alt: 'Silver Package Banner',
    priceUSD: 20,
    priceBDT: 3000,
    boostAmount: 3000,
    boostDescription: '5-200 message conversations',
    link: '/package/silver',
    isPopular: false,
  },
  {
    planName: 'Gold Package',
    imageSrc: '/Service-02.jpg', // ❗️ আপনার নিজের ছবি দিন
    alt: 'Gold Package Banner',
    priceUSD: 30,
    priceBDT: 4500,
    boostAmount: 4500,
    boostDescription: '200-300 message conversations',
    link: '/package/gold',
    isPopular: true,
  },
  {
    planName: 'Diamond Package',
    imageSrc: '/Service-03.jpg', // ❗️ আপনার নিজের ছবি দিন
    alt: 'Diamond Package Banner',
    priceUSD: 50,
    priceBDT: 7500,
    boostAmount: 10000,
    boostDescription: '300-1000 message conversations',
    link: '/package/diamond',
    isPopular: false,
  },
];

export function PricingSection() {
  const { language } = useLanguage();
  return (
    <section className="w-full bg-white dark:bg-background py-20 sm:py-28 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <h2 className="mb-12 text-center text-3xl font-extrabold text-green-700 dark:text-green-500 md:text-4xl">
          {language
            ? 'অ্যাডভার্টাইজ মার্কেটিং করে পৌঁছে যান সঠিক কাস্টমারের কাছে!'
            : 'Reach the Right Customers Through Advertise Marketing!'}
        </h2>

        {/* প্যাকেজ কার্ডগুলোর গ্রিড */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(language ? packagesDataBn : packagesDataEn).map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col overflow-hidden rounded-lg border-2 bg-gray-50 dark:bg-gray-900 dark:border-gray-800 shadow-lg transition-transform duration-300 ${
                item.isPopular
                  ? 'scale-105 border-green-500 dark:border-green-500'
                  : 'border-transparent hover:border-gray-200 dark:hover:border-gray-700'
              }`}
            >
              {item.isPopular && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-500 px-4 py-1 text-sm font-bold text-white">
                  {language ? 'জনপ্রিয়' : 'Popular'}
                </div>
              )}

              <div className="p-4">
                <h3 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {item.planName}
                </h3>
                <div className="relative mt-2 h-auto w-full">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    width={600}
                    height={300}
                    className="w-full rounded-md object-cover"
                  />
                </div>
              </div>

              {/* টেক্সট এবং বাটন অংশ */}
              <div className="flex flex-grow flex-col p-6 pt-2 text-center">
                <p className="font-bold text-gray-800 dark:text-gray-100">
                  {language
                    ? `পোস্ট বুস্ট করুন ${item.boostAmount.toLocaleString(
                        'bn-BD'
                      )} টাকায়!`
                    : `Boost your post for ${item.boostAmount.toLocaleString(
                        'en-US'
                      )} BDT!`}
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {item.boostDescription}
                </p>

                <Button
                  asChild
                  className="mt-6 w-full rounded-md bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
                >
                  <Link href={item.link}>
                    {language ? 'ক্যাম্পেইন সেট করুন' : 'Set Campaign'}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-green-600 px-10 py-6 text-lg text-white shadow-md transition-transform hover:scale-105 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
          >
            <Link href="/packages">
              {language ? 'প্যাকেজ সমূহ...' : 'View Packages...'}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}