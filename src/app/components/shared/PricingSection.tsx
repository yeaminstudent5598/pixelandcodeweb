// src/components/shared/PricingSection.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Check, Crown, Zap, Star } from 'lucide-react'; 

// ==========================================
// 📦 প্যাকেজ ডেটা কনফিগারেশন
// ==========================================
const packagesDataBn = [
  {
    planName: 'সিলভার স্টার্টার',
    priceBDT: '৩,০০০',
    subtitle: 'নতুন উদ্যোক্তাদের জন্য সেরা',
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    features: [
      '৫-২০০ মেসেজ কনভারসেশন',
      '৩ দিন অ্যাক্টিভ বুস্ট',
      'বেসিক অডিয়েন্স টার্গেটিং',
      'অ্যাড রিপোর্ট'
    ],
    link: '/packages/silver',
    isPopular: false,
    gradient: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-100 dark:border-blue-900'
  },
  {
    planName: 'গোল্ড গ্রোথ',
    priceBDT: '৪,৫০০',
    subtitle: 'ব্যবসায় দ্রুত গ্রোথ আনতে',
    icon: <Crown className="w-6 h-6 text-white" />, // আইকন কালার সাদা কারণ এটি হাইলাইটেড কার্ডে থাকবে
    features: [
      '২০০-৩০০ মেসেজ কনভারসেশন',
      '৭ দিন অ্যাক্টিভ বুস্ট',
      'অ্যাডভান্সড টার্গেটিং',
      'ফ্রি কপিরাইটিং',
      '২৪/৭ সাপোর্ট'
    ],
    link: '/packages/gold',
    isPopular: true,
    gradient: 'from-orange-500 to-red-500', // জনপ্রিয় কার্ডের গ্রেডিয়েন্ট
    borderColor: 'border-orange-500'
  },
  {
    planName: 'ডায়মন্ড প্রো',
    priceBDT: '৭,৫০০',
    subtitle: 'ব্র্যান্ডিং এবং সর্বোচ্চ রিচ',
    icon: <Star className="w-6 h-6 text-purple-500" />,
    features: [
      '৩০০-১০০০+ কনভারসেশন',
      '১৫ দিন অ্যাক্টিভ বুস্ট',
      'প্রিমিয়াম রি-টার্গেটিং',
      'ভিডিও অ্যাড অপটিমাইজেশন',
      'ডেডিকেটেড ম্যানেজার'
    ],
    link: '/packages/diamond',
    isPopular: false,
    gradient: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-100 dark:border-purple-900'
  },
];

const packagesDataEn = [
  {
    planName: 'Silver Starter',
    priceBDT: '3,000',
    subtitle: 'Best for New Entrepreneurs',
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    features: [
      '5-200 Message Conversations',
      '3 Days Active Boost',
      'Basic Audience Targeting',
      'Ad Reporting'
    ],
    link: '/packages/silver',
    isPopular: false,
    gradient: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-100 dark:border-blue-900'
  },
  {
    planName: 'Gold Growth',
    priceBDT: '4,500',
    subtitle: 'Accelerate Business Growth',
    icon: <Crown className="w-6 h-6 text-white" />,
    features: [
      '200-300 Message Conversations',
      '7 Days Active Boost',
      'Advanced Targeting',
      'Free Copywriting',
      '24/7 Support'
    ],
    link: '/packages/gold',
    isPopular: true,
    gradient: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-500'
  },
  {
    planName: 'Diamond Pro',
    priceBDT: '7,500',
    subtitle: 'Max Branding & Reach',
    icon: <Star className="w-6 h-6 text-purple-500" />,
    features: [
      '300-1000+ Conversations',
      '15 Days Active Boost',
      'Premium Re-targeting',
      'Video Ad Optimization',
      'Dedicated Manager'
    ],
    link: '/packages/diamond',
    isPopular: false,
    gradient: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-100 dark:border-purple-900'
  },
];

export function PricingSection() {
  const { language } = useLanguage();
  const data = language ? packagesDataBn : packagesDataEn;

  return (
    // ✅ FIX: py-24 md:py-32 দেওয়া হয়েছে যাতে ন্যাভবারের নিচে কন্টেন্ট আটকে না যায়
    <section id="pricing" className="relative w-full bg-slate-50 dark:bg-black py-24 md:py-32 overflow-hidden">
      
      {/* Background Shapes (Decoration) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container relative mx-auto px-4">
        
        {/* ✅ Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            {language ? (
              <>আপনার বাজেটের মধ্যেই <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">সেরা ফলাফল</span></>
            ) : (
              <>Best Results Within <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Your Budget</span></>
            )}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {language 
              ? 'ছোট উদ্যোক্তা থেকে শুরু করে বড় ব্র্যান্ড - সবার জন্যই আমাদের রয়েছে পারফেক্ট সল্যুশন।' 
              : 'From small startups to big brands - we have the perfect solution for everyone.'}
          </p>
        </div>

        {/* ✅ Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-3xl transition-all duration-300 group
                ${item.isPopular 
                  ? 'bg-slate-900 dark:bg-slate-800 text-white shadow-2xl shadow-orange-500/20 scale-100 lg:scale-110 z-10 border-2 border-orange-500' 
                  : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xl hover:shadow-2xl border hover:-translate-y-2 ' + item.borderColor
                }`}
            >
              
              {/* Popular Badge (Fixed Position) */}
              {item.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1 whitespace-nowrap z-20">
                  <Crown className="w-3.5 h-3.5 fill-current" />
                  {language ? 'মোস্ট পপুলার' : 'Most Popular'}
                </div>
              )}

              {/* Card Content */}
              <div className="p-8">
                
                {/* Icon & Name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl ${item.isPopular ? 'bg-white/10' : 'bg-slate-100 dark:bg-slate-800'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${item.isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                      {item.planName}
                    </h3>
                    <p className={`text-xs font-medium ${item.isPopular ? 'text-orange-200' : 'text-slate-500'}`}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                   <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold">৳{item.priceBDT}</span>
                      <span className={`text-sm ${item.isPopular ? 'text-orange-100' : 'text-slate-500'}`}>
                        /{language ? 'ক্যাম্পেইন' : 'campaign'}
                      </span>
                   </div>
                </div>

                {/* Divider */}
                <div className={`w-full h-px mb-8 ${item.isPopular ? 'bg-white/10' : 'bg-slate-100 dark:bg-slate-800'}`}></div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-0.5 ${item.isPopular ? 'bg-orange-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={`text-sm font-medium leading-tight ${item.isPopular ? 'text-gray-200' : 'text-slate-600 dark:text-slate-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button
                  asChild
                  className={`w-full py-6 text-base font-bold rounded-xl transition-all shadow-lg
                    ${item.isPopular 
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                >
                  <Link href={item.link}>
                    {language ? 'প্যাকেজটি নিন' : 'Choose Plan'}
                  </Link>
                </Button>

              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution Text */}
        <div className="mt-20 text-center">
            <p className="mb-4 text-slate-500 dark:text-slate-400 font-medium">
                {language ? 'আপনার কি কাস্টম রিকমেন্ডেশন প্রয়োজন?' : 'Need a custom recommendation?'}
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:underline decoration-2 underline-offset-4"
            >
              {language ? 'ফ্রি কনসালটেশন নিন' : 'Get Free Consultation'}
              <span aria-hidden="true">&rarr;</span>
            </Link>
        </div>

      </div>
    </section>
  );
}