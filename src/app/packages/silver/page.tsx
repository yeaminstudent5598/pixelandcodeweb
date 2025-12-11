'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  CheckCircle2, 
  Zap, 
  Rocket, 
  Target, 
  Clock, 
  BarChart, 
  ArrowRight, 
  Lightbulb,
  BadgeCheck
} from 'lucide-react';

export default function SilverPackagePage() {
  const { language } = useLanguage();

  // সিলভার প্যাকেজের ফিচার
  const features = language ? [
    { icon: <Zap />, title: '৫-২০০ মেসেজ কনভারসেশন', desc: 'অল্প বাজেটে রিয়েল কাস্টমার এনগেজমেন্ট শুরু করার সেরা উপায়।' },
    { icon: <Clock />, title: '৩ দিন অ্যাক্টিভ ক্যাম্পেইন', desc: 'দ্রুত ফলাফল এবং মার্কেট রেসপন্স দেখার জন্য পারফেক্ট সময়।' },
    { icon: <Target />, title: 'বেসিক অডিয়েন্স টার্গেটিং', desc: 'আপনার পণ্যের ক্যাটাগরি অনুযায়ী সাধারণ টার্গেটিং সেটআপ।' },
    { icon: <BarChart />, title: 'ক্যাম্পেইন রিপোর্ট', desc: 'ক্যাম্পেইন শেষে বেসিক পারফর্মেন্স রিপোর্ট প্রদান।' },
  ] : [
    { icon: <Zap />, title: '5-200 Message Conversations', desc: 'Best way to start real customer engagement on a low budget.' },
    { icon: <Clock />, title: '3 Days Active Campaign', desc: 'Perfect duration to check quick results and market response.' },
    { icon: <Target />, title: 'Basic Audience Targeting', desc: 'General targeting setup according to your product category.' },
    { icon: <BarChart />, title: 'Campaign Report', desc: 'Basic performance report provided at the end of the campaign.' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* =======================
          HERO SECTION (CLEAN & MINIMAL)
      ======================== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Soft Background Accents */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />

        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-sm tracking-wide">
                <Rocket className="w-4 h-4" />
                {language ? 'স্টার্টআপ স্পেশাল' : 'Startup Special'}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {language ? (
                  <>সিলভার <span className="text-blue-600">স্টার্টার</span> প্যাকেজ</>
                ) : (
                  <>Silver <span className="text-blue-600">Starter</span> Package</>
                )}
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {language 
                  ? 'নতুন ব্যবসার শুরুটা হোক স্মার্ট এবং সাশ্রয়ী। মার্কেট টেস্ট করার জন্য এবং প্রাথমিক সেল জেনারেট করার জন্য এটি সেরা চয়েস।' 
                  : 'Start your new business smart and affordable. The best choice for testing the market and generating initial sales.'}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1">
                  <Link href="/contact">
                    {language ? 'অর্ডার কনফার্ম করুন' : 'Confirm Order'} <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                  <BadgeCheck className="w-5 h-5 text-blue-500" />
                  {language ? 'ভেরিফাইড সার্ভিস' : 'Verified Service'}
                </div>
              </div>
            </div>

            {/* Right Pricing Card (Clean Design) */}
            <div className="w-full max-w-sm">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group hover:border-blue-500 transition-colors duration-300">
                <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500 left-0"></div>
                
                <div className="text-center mb-8">
                  <h3 className="text-slate-500 dark:text-slate-400 font-medium uppercase text-sm tracking-wider mb-2">
                    {language ? 'ফিক্সড প্রাইস' : 'Fixed Price'}
                  </h3>
                  <div className="flex justify-center items-baseline gap-1">
                    <span className="text-5xl font-bold text-slate-900 dark:text-white">৳৩,০০০</span>
                  </div>
                  <p className="text-blue-600 text-sm font-medium mt-2">
                    {language ? 'সবকিছু অন্তর্ভুক্ত' : 'All Inclusive'}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">{f.title}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 py-6 rounded-xl font-bold transition-all">
                  <Link href="/contact?package=silver">
                    {language ? 'সিলেক্ট করুন' : 'Select Package'}
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =======================
          WHY THIS PACKAGE?
      ======================== */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Why Content */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                {language ? 'কাদের জন্য এই প্যাকেজ?' : 'Who is this package for?'}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 shrink-0">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {language ? 'নতুন উদ্যোক্তা' : 'New Entrepreneurs'}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {language 
                        ? 'যাদের বাজেট কম কিন্তু প্রফেশনাল মার্কেটিং শুরু করতে চান।' 
                        : 'Those with a limited budget but want to start professional marketing.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center text-cyan-600 shrink-0">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {language ? 'প্রোডাক্ট টেস্টিং' : 'Product Testing'}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {language 
                        ? 'নতুন কোনো প্রোডাক্ট মার্কেটে কেমন চলবে তা পরীক্ষা করার জন্য।' 
                        : 'To test how a new product performs in the market.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-colors">
                  <div className="text-blue-500 mb-3">
                    {React.cloneElement(feature.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =======================
          SIMPLE CTA
      ======================== */}
      <section className="py-20 bg-blue-50 dark:bg-slate-900/50">
        <div className="container px-4 mx-auto text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {language ? 'বাজেট নিয়ে চিন্তা করছেন?' : 'Worried about budget?'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            {language 
              ? 'সিলভার প্যাকেজ দিয়ে ছোট পরিসরে শুরু করুন। রেজাল্ট দেখে পরে বড় প্যাকেজে শিফট করতে পারবেন।' 
              : 'Start small with the Silver Package. You can shift to bigger packages later based on results.'}
          </p>
          <Button asChild size="lg" className="rounded-full bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800 px-10 py-6 font-bold">
            <Link href="/contact">
              {language ? 'কথা বলুন' : 'Talk to Us'}
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}