'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import {
  CheckCircle2,
  Crown,
  MessageCircle,
  Target,
  Clock,
  PenTool,
  BarChart3,
  ArrowRight,
  ShieldCheck,
  LucideIcon,
} from 'lucide-react';

/* ======================
   Types
====================== */
type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export default function GoldPackagePage() {
  const { language } = useLanguage();

  /* ======================
     Features Data
  ====================== */
  const features: Feature[] = language
    ? [
        {
          icon: MessageCircle,
          title: '২০০-৩০০ মেসেজ কনভারসেশন',
          desc: 'আমরা এনশিওর করি যে আপনি রিয়েল কাস্টমারদের থেকে মেসেজ পাবেন।',
        },
        {
          icon: Clock,
          title: '৭ দিন অ্যাক্টিভ ক্যাম্পেইন',
          desc: 'আপনার বিজ্ঞাপনটি টানা ৭ দিন ফেসবুকে লাইভ থাকবে।',
        },
        {
          icon: Target,
          title: 'অ্যাডভান্সড অডিয়েন্স টার্গেটিং',
          desc: 'বয়স, লোকেশন এবং ইন্টারেস্ট অনুযায়ী সঠিক কাস্টমার টার্গেট করা হবে।',
        },
        {
          icon: PenTool,
          title: 'ফ্রি অ্যাড কপিরাইটিং',
          desc: 'সেলস বাড়ানোর জন্য আমরা আকর্ষণীয় ক্যাপশন লিখে দিব।',
        },
        {
          icon: BarChart3,
          title: 'ডিটেইলড রিপোর্ট',
          desc: 'ক্যাম্পেইন শেষে আপনি সম্পূর্ণ পারফর্মেন্স রিপোর্ট পাবেন।',
        },
        {
          icon: ShieldCheck,
          title: '২৪/৭ সাপোর্ট',
          desc: 'ক্যাম্পেইন চলাকালীন যেকোনো সমস্যায় আমাদের সাপোর্ট পাবেন।',
        },
      ]
    : [
        {
          icon: MessageCircle,
          title: '200–300 Message Conversations',
          desc: 'We ensure you get messages from real interested customers.',
        },
        {
          icon: Clock,
          title: '7 Days Active Campaign',
          desc: 'Your ad will be live on Facebook for 7 consecutive days.',
        },
        {
          icon: Target,
          title: 'Advanced Audience Targeting',
          desc: 'Targeting based on age, location, and interests for best results.',
        },
        {
          icon: PenTool,
          title: 'Free Ad Copywriting',
          desc: 'We will write attractive captions to increase sales.',
        },
        {
          icon: BarChart3,
          title: 'Detailed Report',
          desc: 'You will receive a full performance report after the campaign.',
        },
        {
          icon: ShieldCheck,
          title: '24/7 Support',
          desc: 'Get support for any issues during the campaign period.',
        },
      ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black transition-colors font-sans">
      {/* =======================
          HERO SECTION
      ======================== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-orange-50/50 to-transparent dark:from-orange-900/10 pointer-events-none" />
        <div className="absolute right-0 top-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]" />

        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-bold text-sm border border-orange-200 dark:border-orange-800">
                <Crown className="w-4 h-4" />
                {language ? 'বেস্ট সেলিং প্যাকেজ' : 'Best Selling Package'}
              </div>

              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white">
                {language ? 'গোল্ড গ্রোথ প্যাকেজ' : 'Gold Growth Package'}
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
                {language
                  ? 'আপনার ব্যবসার সেলস এবং ব্র্যান্ডিং একসাথে বাড়াতে এই প্যাকেজটি সেরা।'
                  : 'This package is best for increasing both sales and branding.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg"
                >
                  <Link href="/contact">
                    {language ? 'অর্ডার করুন' : 'Order Now'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  {language ? '*কোনো গোপন চার্জ নেই' : '*No hidden charges'}
                </span>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="w-full max-w-md">
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border-2 border-orange-500">
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                  POPULAR
                </div>

                <div className="text-center mb-6">
                  <p className="text-sm uppercase text-slate-500 dark:text-slate-400">
                    {language ? 'প্যাকেজ মূল্য' : 'Package Price'}
                  </p>
                  <span className="text-5xl font-extrabold text-slate-900 dark:text-white">
                    ৳৪,৫০০
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  {features.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-orange-600" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {f.title}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full bg-slate-900 dark:bg-white text-white dark:text-black py-6 rounded-xl font-bold"
                >
                  <Link href="/contact?package=gold">
                    {language ? 'প্যাকেজটি সিলেক্ট করুন' : 'Select This Package'}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          FEATURES GRID
      ======================== */}
      <section className="py-20 bg-white dark:bg-slate-900/50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-slate-50 dark:bg-black border border-slate-100 dark:border-slate-800 hover:border-orange-200 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
