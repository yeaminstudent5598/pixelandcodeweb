// src/app/components/packages/DiamondClient.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { LucideIcon, CheckCircle2, Sparkles, MessageCircle, Users, TrendingUp, Video, UserCheck, ArrowRight, Gem, BarChart2 } from 'lucide-react';

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export function DiamondClient() {
  const { language } = useLanguage();

  const price = language ? '৳৭,৫০০' : '$75';

  const features: Feature[] = language
    ? [
        { icon: MessageCircle, title: '৩০০-১০০০+ মেসেজ কনভারসেশন', desc: 'ম্যাক্সিমাম কাস্টমার এনগেজমেন্ট এবং লিড জেনারেশন।' },
        { icon: TrendingUp, title: '১৫ দিন অ্যাক্টিভ ক্যাম্পেইন', desc: 'দীর্ঘমেয়াদী প্রচারণার মাধ্যমে ব্র্যান্ড ভ্যালু তৈরি।' },
        { icon: Users, title: 'প্রিমিয়াম রি-টার্গেটিং', desc: 'যারা আগে আপনার পেজ ভিজিট করেছে তাদের পুনরায় বিজ্ঞাপন দেখানো।' },
        { icon: Video, title: 'ভিডিও অ্যাড অপটিমাইজেশন', desc: 'ভিডিও ভিউ এবং এনগেজমেন্ট বাড়ানোর জন্য বিশেষ অপটিমাইজেশন।' },
        { icon: UserCheck, title: 'ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার', desc: 'আপনার ক্যাম্পেইন মনিটর করার জন্য একজন এক্সপার্ট ম্যানেজার থাকবেন।' },
        { icon: BarChart2, title: 'অ্যাডভান্সড A/B টেস্টিং', desc: 'সেরা রেজাল্ট পেতে একাধিক অডিয়েন্স ও ক্রিয়েটিভ টেস্ট করা হবে।' },
      ]
    : [
        { icon: MessageCircle, title: '300–1000+ Message Conversations', desc: 'Maximum customer engagement and lead generation.' },
        { icon: TrendingUp, title: '15 Days Active Campaign', desc: 'Long-term promotion to build strong brand value.' },
        { icon: Users, title: 'Premium Re-targeting', desc: 'Show ads again to people who visited your page previously.' },
        { icon: Video, title: 'Video Ad Optimization', desc: 'Special optimization for video views and engagement.' },
        { icon: UserCheck, title: 'Dedicated Account Manager', desc: 'An expert manager will be assigned to monitor your campaign.' },
        { icon: BarChart2, title: 'Advanced A/B Testing', desc: 'Testing multiple audiences/creatives for the best ROI.' },
      ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black font-sans">
      {/* HERO SECTION */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                {language ? 'আল্টিমেট ব্র্যান্ডিং সল্যুশন' : 'Ultimate Branding Solution'}
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white">
                {language ? (
                  <>ডায়মন্ড <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">প্রো</span> প্যাকেজ</>
                ) : (
                  <>Diamond <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Pro</span> Package</>
                )}
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                {language
                  ? 'বড় পরিসরে ব্র্যান্ডিং এবং সর্বোচ্চ রিচ পাওয়ার জন্য ডিজাইন করা প্রিমিয়াম প্যাকেজ।'
                  : 'Designed for massive branding and maximum reach.'}
              </p>

              <div className="flex gap-4 items-center">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/payment?package=fb_diamond">
                    {language ? 'অর্ডার কনফার্ম করুন' : 'Confirm Order'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <a href="https://wa.me/8801641801705" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors">
                  {language ? 'WhatsApp-এ কথা বলুন' : 'Talk on WhatsApp'}
                </a>
              </div>
            </div>

            {/* Price Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between mb-6">
                <Gem className="w-10 h-10 text-purple-600" />
                <span className="px-4 py-1 text-xs font-bold rounded-full bg-purple-600 text-white">
                  PREMIUM
                </span>
              </div>

              <p className="text-sm text-slate-500">
                {language ? 'টোটাল প্যাকেজ প্রাইস' : 'Total Package Price'}
              </p>
              <h2 className="text-5xl font-black text-slate-900 dark:text-white">
                {price}
              </h2>

              <div className="mt-6 space-y-3">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{f.title}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="w-full mt-8 bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800">
                <Link href="/payment?package=fb_diamond">
                  {language ? 'প্যাকেজটি সিলেক্ট করুন' : 'Select This Package'}
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-8 rounded-3xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-800 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}