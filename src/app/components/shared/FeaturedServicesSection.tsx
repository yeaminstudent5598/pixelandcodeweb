// src/components/shared/FeaturedServicesSection.tsx
'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

// সার্ভিসগুলোর ডেটা
const servicesDataBn = [
  {
    src: '/Service-01.jpg', // ❗️ আপনার নিজের ছবি দিন
    alt: 'Product Photography Service',
    title: 'Product Photography',
    price: 'মাত্র ৪৯৯ টাকা থেকে শুরু!',
    description:
      'ফেসবুক বুস্টিং এর উপর ১০% ছাড়! ডিজিটাল মার্কেটিং এর মাধ্যমে আপনার ব্রান্ডের তৈরি করুন।',
    link: '/services/photography',
  },
  {
    src: '/Service-02.jpg', // ❗️ আপনার নিজের ছবি দিন
    alt: 'Social Media Post Design',
    title: 'Social Media Post Design',
    price: 'মাত্র ৪৯৯ টাকা থেকে শুরু!',
    description:
      'পোস্টার ডিজাইন মাত্র ৩০০/- টাকায়! পোস্টার ডিজাইন এর মাধ্যমে আপনার ব্রান্ড ভ্যালু তৈরি করুন।',
    link: '/services/social-media',
  },
  {
    src: '/Service-03.jpg', // ❗️ আপনার নিজের ছবি দিন
    alt: 'Logo Design Service',
    title: 'Logo Design',
    price: 'মাত্র ৯৯৯ টাকা থেকে শুরু!',
    description:
      'প্রফেশনাল লোগো ডিজাইন করুন। ডিজিটাল মার্কেটিং এর মাধ্যমে আপনার ব্রান্ডের তৈরি করুন।',
    link: '/services/logo-design',
  },
];
const servicesDataEn = [
  {
    src: '/Service-01.jpg',
    alt: 'Product Photography Service',
    title: 'Product Photography',
    price: 'Starting from only 499 BDT!',
    description:
      'Get 10% off on Facebook boosting! Build your brand through digital marketing.',
    link: '/services/photography',
  },
  {
    src: '/Service-02.jpg',
    alt: 'Social Media Post Design',
    title: 'Social Media Post Design',
    price: 'Starting from only 499 BDT!',
    description:
      'Poster design at just 300 BDT! Create your brand value with attractive posters.',
    link: '/services/social-media',
  },
  {
    src: '/Service-03.jpg',
    alt: 'Logo Design Service',
    title: 'Logo Design',
    price: 'Starting from only 999 BDT!',
    description:
      'Get a professional logo design. Build your brand through digital marketing.',
    link: '/services/logo-design',
  },
];

export function FeaturedServicesSection() {
  const { language } = useLanguage();
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-950 py-20 sm:py-28 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-800 dark:text-white md:text-4xl">
          {language
            ? 'শুরু করুন আপনার ব্যবসার ক্রিয়েটিভ যাত্রা!!'
            : 'Start Your Creative Business Journey!!'}
        </h2>

        {/* সার্ভিস কার্ডগুলোর গ্রিড */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(language ? servicesDataBn : servicesDataEn).map((item, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-md transition-all duration-300 hover:shadow-xl dark:border dark:border-gray-800"
            >
              {/* ছবির অংশ */}
              <div className="relative w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* টেক্সট এবং বাটন অংশ (নতুন ডিজাইন) */}
              <div className="flex flex-grow flex-col p-6 text-left">
                <p className="mb-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {item.price}
                </p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 flex-grow text-base text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
                <Button
                  asChild
                  className="mt-6 w-full rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  <Link href={item.link}>
                    {language ? 'বিস্তারিত দেখুন' : 'View Details'}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}