'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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
  ShieldCheck 
} from 'lucide-react';

export default function GoldPackagePage() {
  const { language } = useLanguage();

  // প্যাকেজের বিস্তারিত ফিচার
  const features = language ? [
    { icon: <MessageCircle />, title: '২০০-৩০০ মেসেজ কনভারসেশন', desc: 'আমরা এনশিওর করি যে আপনি রিয়েল কাস্টমারদের থেকে মেসেজ পাবেন।' },
    { icon: <Clock />, title: '৭ দিন অ্যাক্টিভ ক্যাম্পেইন', desc: 'আপনার বিজ্ঞাপনটি টানা ৭ দিন ফেসবুকে লাইভ থাকবে।' },
    { icon: <Target />, title: 'অ্যাডভান্সড অডিয়েন্স টার্গেটিং', desc: 'বয়স, লোকেশন এবং ইন্টারেস্ট অনুযায়ী সঠিক কাস্টমার টার্গেট করা হবে।' },
    { icon: <PenTool />, title: 'ফ্রি অ্যাড কপিরাইটিং', desc: 'সেলস বাড়ানোর জন্য আমরা আকর্ষণীয় ক্যাপশন লিখে দিব।' },
    { icon: <BarChart3 />, title: 'ডিটেইলড রিপোর্ট', desc: 'ক্যাম্পেইন শেষে আপনি সম্পূর্ণ পারফর্মেন্স রিপোর্ট পাবেন।' },
    { icon: <ShieldCheck />, title: '২৪/৭ সাপোর্ট', desc: 'ক্যাম্পেইন চলাকালীন যেকোনো সমস্যায় আমাদের সাপোর্ট পাবেন।' },
  ] : [
    { icon: <MessageCircle />, title: '200-300 Message Conversations', desc: 'We ensure you get messages from real interested customers.' },
    { icon: <Clock />, title: '7 Days Active Campaign', desc: 'Your ad will be live on Facebook for 7 consecutive days.' },
    { icon: <Target />, title: 'Advanced Audience Targeting', desc: 'Targeting based on age, location, and interests for best results.' },
    { icon: <PenTool />, title: 'Free Ad Copywriting', desc: 'We will write attractive captions to increase sales.' },
    { icon: <BarChart3 />, title: 'Detailed Report', desc: 'You will receive a full performance report after the campaign.' },
    { icon: <ShieldCheck />, title: '24/7 Support', desc: 'Get support for any issues during the campaign period.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black transition-colors duration-300 font-sans">
      
      {/* =======================
          HERO SECTION 
      ======================== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Decorators */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-orange-50/50 to-transparent dark:from-orange-900/10 pointer-events-none" />
        <div className="absolute right-0 top-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]" />

        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-bold text-sm border border-orange-200 dark:border-orange-800">
                <Crown className="w-4 h-4" />
                {language ? 'বেস্ট সেলিং প্যাকেজ' : 'Best Selling Package'}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {language ? 'গোল্ড গ্রোথ প্যাকেজ' : 'Gold Growth Package'}
              </h1>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
                {language 
                  ? 'আপনার ব্যবসার সেলস এবং ব্র্যান্ডিং একসাথে বাড়াতে এই প্যাকেজটি সেরা। সঠিক বাজেটে সেরা ফলাফল পেতে এখনই অর্ডার করুন।' 
                  : 'This package is best for increasing both sales and branding. Order now to get the best results within the right budget.'}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg shadow-lg shadow-orange-500/25">
                  <Link href="/contact">
                    {language ? 'অর্ডার করুন' : 'Order Now'} <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  {language ? '*কোনো গোপন চার্জ নেই' : '*No hidden charges'}
                </div>
              </div>
            </div>

            {/* Right Pricing Card */}
            <div className="w-full max-w-md">
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border-2 border-orange-500 overflow-hidden">
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                  POPULAR
                </div>
                
                <div className="text-center mb-6">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
                    {language ? 'প্যাকেজ মূল্য' : 'Package Price'}
                  </p>
                  <div className="flex justify-center items-baseline gap-1 mt-2">
                    <span className="text-5xl font-extrabold text-slate-900 dark:text-white">৳৪,৫০০</span>
                  </div>
                  <p className="text-sm text-green-600 font-medium mt-2 bg-green-50 dark:bg-green-900/20 inline-block px-3 py-1 rounded-full">
                    {language ? '১৫০০ টাকা সাশ্রয়!' : 'Save 1500 BDT!'}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {features.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-orange-100 dark:bg-orange-900/30 p-1 rounded-full text-orange-600 dark:text-orange-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{f.title}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800 py-6 rounded-xl font-bold">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {language ? 'এই প্যাকেজে যা যা পাচ্ছেন' : 'What You Get Inside'}
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-slate-50 dark:bg-black border border-slate-100 dark:border-slate-800 hover:border-orange-200 dark:hover:border-orange-900 transition-all hover:shadow-lg group">
                <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          FAQ SECTION 
      ======================== */}
      <section className="py-20">
        <div className="container px-4 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            {language ? 'সচরাচর জিজ্ঞাসিত প্রশ্ন' : 'Frequently Asked Questions'}
          </h2>

          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">
                {language ? 'এই বাজেটের মধ্যে কি অ্যাড কস্ট অন্তর্ভুক্ত?' : 'Is ad cost included in this budget?'}
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                {language 
                  ? 'হ্যাঁ, ৪,৫০০ টাকার মধ্যেই ডলার খরচ এবং আমাদের সার্ভিস চার্জ অন্তর্ভুক্ত। আপনাকে আলাদা কোনো টাকা দিতে হবে না।' 
                  : 'Yes, the ad cost (dollar spend) and our service charge are included within 4,500 BDT. You don’t need to pay anything extra.'}
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">
                {language ? 'আমি কি টার্গেটেড কাস্টমার পাব?' : 'Will I get targeted customers?'}
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                {language 
                  ? 'অবশ্যই। আমরা অ্যাডভান্সড অডিয়েন্স টার্গেটিং ব্যবহার করি যাতে শুধুমাত্র আপনার পণ্যে আগ্রহী ব্যক্তিরাই বিজ্ঞাপন দেখে।' 
                  : 'Absolutely. We use advanced audience targeting so that only people interested in your product see the ad.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          BOTTOM CTA 
      ======================== */}
      <section className="py-20 bg-orange-600 dark:bg-orange-700">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {language ? 'আপনার ব্যবসা এগিয়ে নিতে প্রস্তুত?' : 'Ready to Grow Your Business?'}
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg">
            {language 
              ? 'গোল্ড প্যাকেজটি বেছে নিন এবং আজ থেকেই আপনার সেলস বৃদ্ধি করা শুরু করুন।' 
              : 'Choose the Gold Package and start increasing your sales from today.'}
          </p>
          <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 rounded-full text-lg font-bold shadow-xl">
            <Link href="/contact">
              {language ? 'এখনই শুরু করুন' : 'Get Started Now'}
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}