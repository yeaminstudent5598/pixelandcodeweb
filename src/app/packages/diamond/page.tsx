'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Video, 
  UserCheck, 
  ArrowRight, 
  Gem,
  BarChart2
} from 'lucide-react';

export default function DiamondPackagePage() {
  const { language } = useLanguage();

  // ডায়মন্ড প্যাকেজের এক্সক্লুসিভ ফিচার
  const features = language ? [
    { icon: <MessageCircle />, title: '৩০০-১০০০+ মেসেজ কনভারসেশন', desc: 'ম্যাক্সিমাম কাস্টমার এনগেজমেন্ট এবং লিড জেনারেশন।' },
    { icon: <TrendingUp />, title: '১৫ দিন অ্যাক্টিভ ক্যাম্পেইন', desc: 'দীর্ঘমেয়াদী প্রচারণার মাধ্যমে ব্র্যান্ড ভ্যালু তৈরি।' },
    { icon: <Users />, title: 'প্রিমিয়াম রি-টার্গেটিং', desc: 'যারা আগে আপনার পেজ ভিজিট করেছে তাদের পুনরায় বিজ্ঞাপন দেখানো।' },
    { icon: <Video />, title: 'ভিডিও অ্যাড অপটিমাইজেশন', desc: 'ভিডিও ভিউ এবং এনগেজমেন্ট বাড়ানোর জন্য বিশেষ অপটিমাইজেশন।' },
    { icon: <UserCheck />, title: 'ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার', desc: 'আপনার ক্যাম্পেইন মনিটর করার জন্য একজন এক্সপার্ট ম্যানেজার থাকবেন।' },
    { icon: <BarChart2 />, title: 'অ্যাডভান্সড A/B টেস্টিং', desc: 'সেরা রেজাল্ট পেতে একাধিক অডিয়েন্স ও ক্রিয়েটিভ টেস্ট করা হবে।' },
  ] : [
    { icon: <MessageCircle />, title: '300-1000+ Message Conversations', desc: 'Maximum customer engagement and lead generation.' },
    { icon: <TrendingUp />, title: '15 Days Active Campaign', desc: 'Long-term promotion to build strong brand value.' },
    { icon: <Users />, title: 'Premium Re-targeting', desc: 'Show ads again to people who visited your page previously.' },
    { icon: <Video />, title: 'Video Ad Optimization', desc: 'Special optimization for video views and engagement.' },
    { icon: <UserCheck />, title: 'Dedicated Account Manager', desc: 'An expert manager will be assigned to monitor your campaign.' },
    { icon: <BarChart2 />, title: 'Advanced A/B Testing', desc: 'Testing multiple audiences/creatives for the best ROI.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black transition-colors duration-300 font-sans selection:bg-purple-500 selection:text-white">
      
      {/* =======================
          HERO SECTION (PREMIUM)
      ======================== */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        {/* Abstract Backgrounds */}
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-purple-50/80 via-white to-transparent dark:from-purple-900/20 dark:via-black dark:to-black pointer-events-none" />
        <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />

        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 font-bold text-sm tracking-wide">
                <Sparkles className="w-4 h-4" />
                {language ? 'আল্টিমেট ব্র্যান্ডিং সল্যুশন' : 'Ultimate Branding Solution'}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight">
                {language ? (
                  <>ডায়মন্ড <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">প্রো</span> প্যাকেজ</>
                ) : (
                  <>Diamond <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Pro</span> Package</>
                )}
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {language 
                  ? 'বড় পরিসরে ব্র্যান্ডিং এবং সর্বোচ্চ রিচ পাওয়ার জন্য এই প্যাকেজটি ডিজাইন করা হয়েছে। আপনার ব্যবসাকে নেক্সট লেভেলে নিয়ে যান।' 
                  : 'Designed for massive branding and maximum reach. Take your business to the next level with our premium strategy.'}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
                <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-7 text-lg font-bold shadow-xl shadow-purple-500/30 transition-all hover:scale-105">
                  <Link href="/contact">
                    {language ? 'অর্ডার কনফার্ম করুন' : 'Confirm Order'} <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Link href="#features" className="text-slate-600 dark:text-slate-400 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  {language ? 'ফিচারগুলো দেখুন' : 'Explore Features'}
                </Link>
              </div>
            </div>

            {/* Right Pricing Card (Glassmorphism) */}
            <div className="w-full max-w-md relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl border border-white/20 dark:border-slate-700">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-300">
                    <Gem className="w-8 h-8" />
                  </div>
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    Premium
                  </div>
                </div>
                
                <div className="mb-8">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold mb-1">
                    {language ? 'টোটাল প্যাকেজ প্রাইস' : 'Total Package Price'}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-black text-slate-900 dark:text-white tracking-tight">৳৭,৫০০</span>
                  </div>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mt-2">
                    {language ? '+ ফ্রি ভিডিও কনসালটেশন' : '+ Free Video Consultation'}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {features.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 text-purple-600 dark:text-purple-400">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-snug">{f.title}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-purple-900 dark:hover:bg-purple-100 py-7 rounded-xl font-bold text-lg transition-colors">
                  <Link href="/contact?package=diamond">
                    {language ? 'প্যাকেজটি সিলেক্ট করুন' : 'Select This Package'}
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =======================
          VIP FEATURES GRID 
      ======================== */}
      <section id="features" className="py-24 bg-white dark:bg-slate-900/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {language ? 'কেন ডায়মন্ড প্যাকেজ সেরা?' : 'Why Diamond is Superior?'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {language 
                ? 'সাধারণ বুস্টিং এর চেয়ে ডায়মন্ড প্যাকেজে আমরা দিচ্ছি অনেক বেশি সুবিধা, যা আপনার ব্র্যান্ডকে প্রিমিয়াম লুক দিবে।'
                : 'Diamond package offers way more than regular boosting, giving your brand a premium look and authority.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-10 rounded-[2rem] bg-slate-50 dark:bg-black border border-slate-100 dark:border-slate-800 hover:border-purple-200 dark:hover:border-purple-900 transition-all hover:shadow-2xl hover:-translate-y-1 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-8 group-hover:scale-110 transition-transform shadow-sm">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          CTA / BOTTOM BANNER
      ======================== */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-purple-900 to-blue-900 px-6 py-20 text-center shadow-2xl">
            {/* Overlay Patterns */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                {language ? 'আপনার ব্র্যান্ড কি নেক্সট লেভেলে যাওয়ার জন্য প্রস্তুত?' : 'Ready to Take Your Brand to the Next Level?'}
              </h2>
              <p className="text-purple-100 mb-10 text-lg md:text-xl">
                {language 
                  ? 'দেরি না করে আজই আমাদের ডায়মন্ড প্যাকেজটি নিয়ে আপনার মার্কেট ডমিনেশন শুরু করুন।' 
                  : 'Start your market domination today with our exclusive Diamond Package.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-50 px-12 py-7 rounded-full text-lg font-bold">
                  <Link href="/contact">
                    {language ? 'কথা বলুন' : 'Talk to Us'}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-purple-400 text-white hover:bg-purple-900/50 hover:text-white px-12 py-7 rounded-full text-lg font-bold bg-transparent">
                  <Link href="/portfolio">
                    {language ? 'সাকসেস স্টোরি দেখুন' : 'View Success Stories'}
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