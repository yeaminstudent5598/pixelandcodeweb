// src/components/shared/AchievementsSection.tsx
'use client';
import React from 'react';
import { Users, Palette, Clapperboard, Code } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// অর্জনগুলোর ডেটা
const achievementsBn = [
  {
    icon: <Users className="h-7 w-7 text-blue-500" />,
    count: '৪০০+',
    label: 'ক্লায়েন্ট',
  },
  {
    icon: <Palette className="h-7 w-7 text-yellow-500" />,
    count: '৩০০+',
    label: 'ডিজাইন',
  },
  {
    icon: <Clapperboard className="h-7 w-7 text-purple-500" />,
    count: '৩০০+',
    label: 'ভিডিও মেকিং',
  },
  {
    icon: <Code className="h-7 w-7 text-orange-500" />,
    count: '৫০+',
    label: 'ওয়েবসাইট',
  },
];
const achievementsEn = [
  {
    icon: <Users className="h-7 w-7 text-blue-500" />,
    count: '400+',
    label: 'Clients',
  },
  {
    icon: <Palette className="h-7 w-7 text-yellow-500" />,
    count: '300+',
    label: 'Designs',
  },
  {
    icon: <Clapperboard className="h-7 w-7 text-purple-500" />,
    count: '300+',
    label: 'Video Making',
  },
  {
    icon: <Code className="h-7 w-7 text-orange-500" />,
    count: '50+',
    label: 'Websites',
  },
];

export function AchievementsSection() {
  const backgroundImageUrl = 'https://i.ibb.co/L8dFkR2/achievement-bg.jpg'; // ❗️ আপনার নিজের ব্যাকগ্রাউন্ড ছবি দিন
  const { language } = useLanguage();
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div
          className="relative w-full overflow-hidden rounded-2xl bg-cover bg-center p-8 text-white md:p-12"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
          {/* ছবির উপর একটি ডার্ক ওভারলে */}
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* উপরের ট্যাগ */}
            <div className="mb-4 rounded-full border-2 border-white/30 bg-white/10 px-6 py-2 text-sm font-medium backdrop-blur-sm">
              {language ? 'সফলতা ও অর্জন' : 'Success & Achievements'}
            </div>

            {/* প্রধান শিরোনাম */}
            <h2 className="mb-10 text-3xl font-extrabold md:text-4xl">
              {language ? (
                <>
                  বিগত ৫ বছরে মোয়াস বিডির <br /> সফলতা ও অর্জন!
                </>
              ) : (
                " Success & Achievements in the Last 5 Years!"
              )}
            </h2>

            {/* স্ট্যাটাস কার্ডগুলোর গ্রিড */}
            <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              {(language ? achievementsBn : achievementsEn).map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center space-x-3 rounded-lg bg-white/90 p-4 text-gray-800 shadow-md backdrop-blur-md">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div className="text-left">
                      <p className="text-xl font-bold">{item.count}</p>
                      <p className="text-xs text-gray-600">{item.label}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
