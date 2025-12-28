'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import {
  CheckCircle2,
  Zap,
  Clock,
  Target,
  BarChart,
  ArrowRight,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

export default function SilverPackagePage() {
  const { language } = useLanguage();

  const features = language
    ? [
        {
          icon: <Zap className="w-6 h-6 text-blue-500" />,
          title: '৫-২০০ মেসেজ কনভারসেশন',
          desc: 'অল্প বাজেটে রিয়েল কাস্টমার এনগেজমেন্ট শুরু করার সেরা উপায়।',
        },
        {
          icon: <Clock className="w-6 h-6 text-blue-500" />,
          title: '৩ দিন অ্যাক্টিভ ক্যাম্পেইন',
          desc: 'দ্রুত ফলাফল এবং মার্কেট রেসপন্স দেখার জন্য পারফেক্ট সময়।',
        },
        {
          icon: <Target className="w-6 h-6 text-blue-500" />,
          title: 'বেসিক অডিয়েন্স টার্গেটিং',
          desc: 'আপনার পণ্যের ক্যাটাগরি অনুযায়ী সাধারণ টার্গেটিং সেটআপ।',
        },
        {
          icon: <BarChart className="w-6 h-6 text-blue-500" />,
          title: 'ক্যাম্পেইন রিপোর্ট',
          desc: 'ক্যাম্পেইন শেষে বেসিক পারফর্মেন্স রিপোর্ট প্রদান।',
        },
      ]
    : [
        {
          icon: <Zap className="w-6 h-6 text-blue-500" />,
          title: '5–200 Message Conversations',
          desc: 'Best way to start real customer engagement on a low budget.',
        },
        {
          icon: <Clock className="w-6 h-6 text-blue-500" />,
          title: '3 Days Active Campaign',
          desc: 'Perfect duration to check quick results and market response.',
        },
        {
          icon: <Target className="w-6 h-6 text-blue-500" />,
          title: 'Basic Audience Targeting',
          desc: 'General targeting setup according to your product category.',
        },
        {
          icon: <BarChart className="w-6 h-6 text-blue-500" />,
          title: 'Campaign Report',
          desc: 'Basic performance report provided at the end of the campaign.',
        },
      ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black font-sans selection:bg-blue-500 selection:text-white">

      {/* =======================
          HERO SECTION
      ======================== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white dark:bg-black overflow-hidden border-b border-slate-200 dark:border-slate-800">
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-bold text-sm border border-blue-100 dark:border-blue-800">
                <TrendingUp className="w-4 h-4" />
                {language ? 'নতুন ব্যবসার জন্য সেরা' : 'Best for Startups'}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                {language ? (
                  <>সিলভার <span className="text-blue-600">স্টার্টার</span> প্যাকেজ</>
                ) : (
                  <>Silver <span className="text-blue-600">Starter</span> Package</>
                )}
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {language 
                  ? 'স্মার্ট এবং সাশ্রয়ী বাজেটে আপনার ব্যবসার ডিজিটাল যাত্রা শুরু করুন। মার্কেট টেস্ট করার জন্য এটি সেরা চয়েস।' 
                  : 'Start your digital journey smart and affordable. The best choice for testing the market.'}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-blue-500/20 transition-transform hover:-translate-y-1">
                  <Link href="/contact">
                    {language ? 'অর্ডার করুন' : 'Order Now'} <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium px-4">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  {language ? 'নো হিডেন চার্জ' : 'No Hidden Charges'}
                </div>
              </div>
            </div>

            {/* Right Pricing Card (Modern Glassmorphism) */}
            <div className="w-full max-w-md relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-100 dark:border-slate-800">
                
                <div className="text-center mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
                    {language ? 'ফিক্সড প্রাইস' : 'Fixed Price'}
                  </p>
                  <div className="flex justify-center items-baseline gap-1">
                    <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">৳৩,০০০</span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-bold mt-3 bg-blue-50 dark:bg-blue-900/20 inline-block px-3 py-1 rounded-full">
                    {language ? 'সব খরচ অন্তর্ভুক্ত' : 'All Inclusive'}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1">
                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-snug">{f.title}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800 py-6 rounded-xl font-bold transition-all">
                  <Link href="/contact?package=silver">
                    {language ? 'প্যাকেজটি সিলেক্ট করুন' : 'Select Package'}
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =======================
          FEATURES GRID (MODULAR)
      ======================== */}
      <section className="py-24 bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {language ? 'প্যাকেজের বিস্তারিত' : 'Package Details'}
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          SIMPLE CTA
      ======================== */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {language ? 'বাজেট নিয়ে চিন্তা করছেন?' : 'Worried about budget?'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
            {language 
              ? 'সিলভার প্যাকেজ দিয়ে ছোট পরিসরে শুরু করুন। রেজাল্ট দেখে পরে বড় প্যাকেজে শিফট করতে পারবেন।' 
              : 'Start small with the Silver Package. You can upgrade later based on the results.'}
          </p>
          <Button asChild size="lg" className="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 px-10 py-6 font-bold border border-slate-200 dark:border-slate-700">
            <Link href="/contact">
              {language ? 'কথা বলুন' : 'Talk to Us'}
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}