// src/components/shared/ServicesSection.tsx
'use client';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Code, Clapperboard, PenTool, InfinityIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// সার্ভিসগুলোর ডেটা একটি অ্যারেতে রাখা হয়েছে
const servicesDataBn = [
  {
    icon: <InfinityIcon className="h-12 w-12 text-blue-500" />,
    title: 'মেটা মার্কেটিং',
    description: 'মেটা মার্কেটিং করে পৌঁছে যান কাঙ্ক্ষিত কাস্টমারের কাছে!',
    borderColor: 'border-blue-300 hover:border-blue-500',
    buttonClass: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    icon: <PenTool className="h-12 w-12 text-yellow-500" />,
    title: 'গ্রাফিক্স ডিজাইন',
    description: 'গ্রাফিক্স ডিজাইন করে আপনার পণ্যের ডিজিটাল পরিচিতি তৈরি করুন।',
    borderColor: 'border-yellow-300 hover:border-yellow-500',
    buttonClass: 'bg-blue-500 hover:bg-blue-600', // বাটনের রঙ একই রাখা হয়েছে
  },
  {
    icon: <Clapperboard className="h-12 w-12 text-purple-500" />,
    title: 'ভিডিও এডিটিং',
    description: 'ভিডিও তৈরি করে সহজেই আপনার পণ্যের পরিচিতি বিজ্ঞাপন করুন।',
    borderColor: 'border-purple-300 hover:border-purple-500',
    buttonClass: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    icon: <Code className="h-12 w-12 text-red-500" />,
    title: 'ওয়েব ডিজাইন',
    description: 'ওয়েবসাইট এর মাধ্যমে আপনার ব্যবসাকে করুন আরও স্মার্ট।',
    borderColor: 'border-red-300 hover:border-red-500',
    buttonClass: 'bg-blue-500 hover:bg-blue-600',
  },
];

const servicesDataEn = [
  {
    icon: <InfinityIcon className="h-12 w-12 text-blue-500" />,
    title: 'Meta Marketing',
    description: 'Reach your desired customers through Meta Marketing!',
    borderColor: 'border-blue-300 hover:border-blue-500',
    buttonClass: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    icon: <PenTool className="h-12 w-12 text-yellow-500" />,
    title: 'Graphics Design',
    description:
      'Create a strong digital identity for your product with graphics design.',
    borderColor: 'border-yellow-300 hover:border-yellow-500',
    buttonClass: 'bg-blue-500 hover:bg-blue-600', // Button color kept same
  },
  {
    icon: <Clapperboard className="h-12 w-12 text-purple-500" />,
    title: 'Video Editing',
    description: 'Promote your products easily through engaging video ads.',
    borderColor: 'border-purple-300 hover:border-purple-500',
    buttonClass: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    icon: <Code className="h-12 w-12 text-red-500" />,
    title: 'Web Design',
    description: 'Make your business smarter with a professional website.',
    borderColor: 'border-red-300 hover:border-red-500',
    buttonClass: 'bg-blue-500 hover:bg-blue-600',
  },
];

export function ServicesSection() {
  const { language } = useLanguage();
  return (
    <section className="w-full bg-orange-50/50 py-10 sm:py-10">
      <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-800 md:text-4xl">
        {language ? (
          <>
            সকল ডিজিটাল সলিউশন <br />
            এক প্লাটফর্মে!
          </>
        ) : (
          <>
            All digital solutions <br />
            on one platform!
          </>
        )}
      </h2>
      <div className="container mx-auto px-4">
        {/* সার্ভিস কার্ডগুলোর গ্রিড */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(language ? servicesDataBn : servicesDataEn).map(service => (
            <div
              key={service.title}
              className={`flex transform  flex-col items-center rounded-2xl border-2 bg-white p-4 lg:p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${service.borderColor}`}>
              <div className="mb-6 md:h-20 md:w-20 flex h-10 w-10 p-2 items-center justify-center rounded-full bg-gray-100">
                {service.icon}
              </div>
              <h3 className="md:mb-2 lg:mb-3 md:text-xl lg:text-2xl font-bold text-gray-800">
                {service.title}
              </h3>
              <p className="md:mb-4 lg:mb-6 min-h-[72px] text-base text-gray-600">
                {service.description}
              </p>
              <Button
                asChild
                className={`mt-auto w-full md:btn-sm rounded-full text-white ${service.buttonClass}`}>
                <Link href="/services">
                  {language ? 'বিস্তারিত জানুন' : 'Learn More'}
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* নিচের শিরোনাম এবং বাটন */}
        <div className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-red-500 px-10 py-6 text-lg text-white shadow-md transition-transform hover:scale-105 hover:bg-red-600">
            <Link href="/services">
              {language ? 'বিস্তারিত জানুন' : 'Learn More'}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
