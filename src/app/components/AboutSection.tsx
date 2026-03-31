// src/app/components/AboutSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { 
  ArrowRight, 
  Clapperboard, 
  Sparkles, 
  Target, 
  Lightbulb, 
  Users, 
  Award, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

export function AboutSection() {
  const { language } = useLanguage();

  const coreValues = language
    ? [
        { icon: <ShieldCheck className="w-8 h-8 text-orange-500" />, title: "আস্থা ও বিশ্বস্ততা", desc: "আমরা ক্লায়েন্টের ডেটা এবং প্রজেক্টের সর্বোচ্চ নিরাপত্তা নিশ্চিত করি।" },
        { icon: <Zap className="w-8 h-8 text-orange-500" />, title: "দ্রুত ডেলিভারি", desc: "কোয়ালিটি ঠিক রেখে নির্দিষ্ট সময়ের আগেই প্রজেক্ট বুঝিয়ে দেওয়া আমাদের লক্ষ্য।" },
        { icon: <Users className="w-8 h-8 text-orange-500" />, title: "ডেডিকেটেড টিম", desc: "প্রতিটি প্রজেক্টের জন্য আমাদের রয়েছে অভিজ্ঞ ও প্রফেশনাল এক্সপার্ট টিম।" },
        { icon: <Award className="w-8 h-8 text-orange-500" />, title: "গুণগত মান", desc: "আন্তর্জাতিক মানের ডিজাইন এবং ডেভেলপমেন্ট কোয়ালিটি বজায় রাখা হয়।" },
      ]
    : [
        { icon: <ShieldCheck className="w-8 h-8 text-orange-500" />, title: "Trust & Reliability", desc: "We ensure maximum security for our clients' data and projects." },
        { icon: <Zap className="w-8 h-8 text-orange-500" />, title: "Fast Delivery", desc: "Our goal is to deliver projects ahead of time without compromising quality." },
        { icon: <Users className="w-8 h-8 text-orange-500" />, title: "Dedicated Team", desc: "We have an experienced and professional team for every project." },
        { icon: <Award className="w-8 h-8 text-orange-500" />, title: "Premium Quality", desc: "International standard design and development quality are strictly maintained." },
      ];

  return (
    <div className="w-full flex flex-col">
      
      {/* =======================
          1. HERO SECTION
      ======================== */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold text-sm border border-orange-100 dark:border-orange-800 mb-6 shadow-sm">
            <Users className="w-4 h-4" />
            {language ? 'ডিজিটাল দুনিয়ায় আপনার পার্টনার' : 'Your Partner in the Digital World'}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            {language ? 'আমাদের ' : 'About '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
              {language ? 'সম্পর্কে' : 'Us'}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {language 
              ? "পিক্সেল অ্যান্ড কোড (Pixel & Code) শুধুমাত্র একটি আইটি এজেন্সি নয়, এটি এমন একটি প্ল্যাটফর্ম যেখানে প্রযুক্তি এবং ক্রিয়েটিভিটির মাধ্যমে আপনার ব্যবসার নতুন সম্ভাবনা তৈরি হয়।" 
              : "Pixel & Code is not just an IT agency; it is a platform where new possibilities for your business are created through technology and creativity."}
          </p>
        </div>
      </section>

      {/* =======================
          2. MAIN ABOUT SECTION (Text + Video Card)
      ======================== */}
      <section className="w-full bg-orange-50/50 dark:bg-black py-20 sm:py-28 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Left Column - Text */}
            <div className="flex flex-col items-start">
              <span className="mb-4 inline-flex items-center rounded-full border border-orange-200 bg-white dark:bg-gray-800 dark:border-gray-700 px-4 py-1.5 text-sm font-semibold text-orange-600 dark:text-orange-400 shadow-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                {language ? 'পিক্সেল অ্যান্ড কোড সম্পর্কে' : 'About Pixel & Code'}
              </span>
              
              <h2 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl lg:leading-tight">
                {language
                  ? 'সৃজনশীলতা ও প্রযুক্তির মেলবন্ধনে আপনার ডিজিটাল যাত্রার বিশ্বস্ত সঙ্গী!'
                  : 'Transforming Bold Ideas Into Exceptional Digital Experiences!'}
              </h2>
              
              <p className="mb-8 text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
                {language
                  ? 'আমরা শুধু একটি ডিজিটাল এজেন্সি নই, আমরা আপনার ব্যবসায়িক প্রবৃদ্ধির পার্টনার। অত্যাধুনিক ওয়েব ডেভেলপমেন্ট, ক্রিয়েটিভ গ্রাফিক্স ডিজাইন, প্রফেশনাল ভিডিও এডিটিং এবং ডেটা-ড্রিভেন মার্কেটিংয়ের সমন্বয়ে আমরা এমন সলিউশন তৈরি করি, যা আপনার ব্র্যান্ডকে সবার থেকে আলাদা করে। গুণগত মান এবং নতুনত্বের প্রতি আমাদের অবিচল আস্থা আপনার ভিশনকে দৃশ্যমান সফলতায় রূপান্তর করে।'
                  : 'We are more than just a digital agency; we are your growth partners. Combining cutting-edge web development, creative design, professional video editing, and data-driven marketing, we deliver solutions that make your brand stand out. Our relentless focus on quality and innovation turns your vision into measurable success.'}
              </p>

              <Button
                asChild
                variant="default"
                className="group rounded-full bg-orange-600 px-8 py-6 text-lg font-bold text-white transition-all hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/30 dark:bg-orange-600 dark:hover:bg-orange-500"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <span>{language ? 'আমাদের সাথে কথা বলুন' : 'Talk To Us'}</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Right Column: Video Placeholder */}
            <div className="relative w-full overflow-hidden rounded-2xl pb-[56.25%] shadow-2xl dark:shadow-gray-900/50 bg-gray-900 group border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950 transition-colors duration-500 group-hover:from-gray-750 group-hover:to-gray-900"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/40 group-hover:scale-110 transition-all duration-700"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-5">
                <div className="relative">
                  <div className="rounded-full bg-white/5 p-5 backdrop-blur-md border border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <Clapperboard className="h-12 w-12 text-orange-400 group-hover:text-orange-300 transition-colors" />
                  </div>
                  <Sparkles className="absolute -top-3 -right-3 h-6 w-6 text-yellow-400 animate-pulse" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                    {language ? 'ভিডিও স্টোরি শীঘ্রই আসছে' : 'Video Story Coming Soon'}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 max-w-sm mx-auto font-medium">
                    {language 
                      ? 'আমাদের ক্রিয়েটিভ ওয়ার্কস্পেস, কাজের ধরন এবং সফলতার গল্পগুলো দেখতে চোখ রাখুন আমাদের স্ক্রিনে।' 
                      : 'Get a glimpse of our creative workspace, work culture, and success stories. Stay tuned!'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =======================
          3. MISSION & VISION
      ======================== */}
      <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Mission Card */}
            <div className="p-10 rounded-3xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {language ? 'আমাদের মিশন' : 'Our Mission'}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {language 
                  ? 'উন্নত প্রযুক্তি এবং সৃজনশীল আইডিয়ার মাধ্যমে ক্ষুদ্র ও মাঝারি উদ্যোক্তাদের ব্যবসায়িক পরিধি বৃদ্ধি করা এবং তাদের ব্র্যান্ডকে অনলাইনে একটি শক্তিশালী অবস্থানে নিয়ে যাওয়া।' 
                  : 'To expand the business scope of small and medium entrepreneurs through advanced technology and creative ideas, and establish their brands strongly online.'}
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-10 rounded-3xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {language ? 'আমাদের ভিশন' : 'Our Vision'}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {language 
                  ? 'আগামী ৫ বছরের মধ্যে বাংলাদেশের অন্যতম শীর্ষস্থানীয় এবং বিশ্বস্ত ডিজিটাল সলিউশন প্রোভাইডার হিসেবে নিজেদের প্রতিষ্ঠিত করা এবং আন্তর্জাতিক প্রজেক্টে সফলতার স্বাক্ষর রাখা।' 
                  : 'To establish ourselves as one of the leading and most trusted digital solution providers in Bangladesh within the next 5 years and make a mark in international projects.'}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =======================
          4. CORE VALUES / WHY CHOOSE US
      ======================== */}
      <section className="py-24 bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              {language ? 'কেন আমাদের বেছে নেবেন?' : 'Why Choose Us?'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {language 
                ? 'আমরা শুধু কাজ করি না, আমরা আপনার ব্যবসার প্রতি যত্নশীল। আমাদের কাজের কোয়ালিটি এবং ডেডিকেশনই আমাদেরকে অন্যদের থেকে আলাদা করে।' 
                : 'We do not just work; we care about your business. Our quality of work and dedication set us apart from the rest.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-orange-300 dark:hover:border-orange-800 transition-colors">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}