// src/app/components/packages/SilverClient.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle2, Zap, Clock, Target, BarChart, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';

export function SilverClient() {
  const { language } = useLanguage();

  const price = language ? '৳৩,০০০' : '$29';

  const features = language
    ? [
        { icon: <Zap className="w-6 h-6 text-blue-500" />, title: '৫-২০০ মেসেজ কনভারসেশন', desc: 'অল্প বাজেটে রিয়েল কাস্টমার এনগেজমেন্ট শুরু করার সেরা উপায়।' },
        { icon: <Clock className="w-6 h-6 text-blue-500" />, title: '৩ দিন অ্যাক্টিভ ক্যাম্পেইন', desc: 'দ্রুত ফলাফল এবং মার্কেট রেসপন্স দেখার জন্য পারফেক্ট সময়।' },
        { icon: <Target className="w-6 h-6 text-blue-500" />, title: 'বেসিক অডিয়েন্স টার্গেটিং', desc: 'আপনার পণ্যের ক্যাটাগরি অনুযায়ী সাধারণ টার্গেটিং সেটআপ।' },
        { icon: <BarChart className="w-6 h-6 text-blue-500" />, title: 'ক্যাম্পেইন রিপোর্ট', desc: 'ক্যাম্পেইন শেষে বেসিক পারফর্মেন্স রিপোর্ট প্রদান।' },
      ]
    : [
        { icon: <Zap className="w-6 h-6 text-blue-500" />, title: '5–200 Message Conversations', desc: 'Best way to start real customer engagement on a low budget.' },
        { icon: <Clock className="w-6 h-6 text-blue-500" />, title: '3 Days Active Campaign', desc: 'Perfect duration to check quick results and market response.' },
        { icon: <Target className="w-6 h-6 text-blue-500" />, title: 'Basic Audience Targeting', desc: 'General targeting setup according to your product category.' },
        { icon: <BarChart className="w-6 h-6 text-blue-500" />, title: 'Campaign Report', desc: 'Basic performance report provided at the end.' },
      ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black font-sans selection:bg-blue-500 selection:text-white">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white dark:bg-black overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-bold text-sm border border-blue-100 dark:border-blue-800">
                <TrendingUp className="w-4 h-4" />
                {language ? 'নতুন ব্যবসার জন্য সেরা' : 'Best for Startups'}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                {language ? <><span className="text-blue-600">সিলভার</span> স্টার্টার প্যাকেজ</> : <><span className="text-blue-600">Silver</span> Starter Package</>}
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {language ? 'স্মার্ট এবং সাশ্রয়ী বাজেটে আপনার ব্যবসার ডিজিটাল যাত্রা শুরু করুন। মার্কেট টেস্ট করার জন্য এটি সেরা চয়েস।' : 'Start your digital journey smart and affordable. The best choice for testing the market.'}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-blue-500/20 transition-transform hover:-translate-y-1">
                  <Link href="/payment?package=fb_silver">
                    {language ? 'অর্ডার করুন' : 'Order Now'} <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium px-4">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  {language ? 'নো হিডেন চার্জ' : 'No Hidden Charges'}
                </div>
              </div>
            </div>

            <div className="w-full max-w-md relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-100 dark:border-slate-800">
                <div className="text-center mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
                    {language ? 'ফিক্সড প্রাইস' : 'Fixed Price'}
                  </p>
                  <div className="flex justify-center items-baseline gap-1">
                    {/* Dynamic Pricing Here */}
                    <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">{price}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-blue-500" /></div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-snug">{f.title}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800 py-6 rounded-xl font-bold transition-all">
                  <Link href="/payment?package=fb_silver">
                    {language ? 'প্যাকেজটি সিলেক্ট করুন' : 'Select Package'}
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}