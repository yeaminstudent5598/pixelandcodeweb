// src/components/shared/FeaturedServicesSection.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, Camera, Palette, Share2, Sparkles } from 'lucide-react';

// সার্ভিস ডেটা কনফিগারেশন
const servicesDataBn = [
  {
    src: '/Service-01.jpg',
    alt: 'Product Photography',
    icon: <Camera className="w-5 h-5 text-white" />,
    title: 'প্রোডাক্ট ফটোগ্রাফি',
    price: '৪৯৯',
    description: 'হাই-কোয়ালিটি ছবির মাধ্যমে আপনার পণ্যের আসল সৌন্দর্য তুলে ধরুন। ই-কমার্স ব্যবসার জন্য অপরিহার্য।',
    link: '/services/photography',
    color: 'from-blue-600 to-cyan-500',
    shadow: 'shadow-blue-500/20'
  },
  {
    src: '/Service-02.jpg',
    alt: 'Social Media Design',
    icon: <Share2 className="w-5 h-5 text-white" />,
    title: 'সোশ্যাল মিডিয়া ডিজাইন',
    price: '৪৯৯',
    description: 'আকর্ষণীয় পোস্টার ডিজাইনের মাধ্যমে আপনার ব্র্যান্ড ভ্যালু এবং কাস্টমার এঙ্গেজমেন্ট বাড়ান।',
    link: '/services/social-media',
    color: 'from-orange-500 to-pink-500',
    shadow: 'shadow-orange-500/20'
  },
  {
    src: '/Service-03.jpg',
    alt: 'Logo Design',
    icon: <Palette className="w-5 h-5 text-white" />,
    title: 'লোগো ও ব্র্যান্ডিং',
    price: '৯৯৯',
    description: 'আপনার ব্যবসার পরিচয়ের জন্য একটি প্রফেশনাল এবং ইউনিক লোগো ডিজাইন করিয়ে নিন।',
    link: '/services/logo-design',
    color: 'from-purple-600 to-indigo-500',
    shadow: 'shadow-purple-500/20'
  },
];

const servicesDataEn = [
  {
    src: '/Service-01.jpg',
    alt: 'Product Photography',
    icon: <Camera className="w-5 h-5 text-white" />,
    title: 'Product Photography',
    price: '499',
    description: 'Showcase the true beauty of your products with high-quality photos. Essential for e-commerce.',
    link: '/services/photography',
    color: 'from-blue-600 to-cyan-500',
    shadow: 'shadow-blue-500/20'
  },
  {
    src: '/Service-02.jpg',
    alt: 'Social Media Design',
    icon: <Share2 className="w-5 h-5 text-white" />,
    title: 'Social Media Design',
    price: '499',
    description: 'Increase your brand value and customer engagement with attractive poster designs.',
    link: '/services/social-media',
    color: 'from-orange-500 to-pink-500',
    shadow: 'shadow-orange-500/20'
  },
  {
    src: '/Service-03.jpg',
    alt: 'Logo Design',
    icon: <Palette className="w-5 h-5 text-white" />,
    title: 'Logo & Branding',
    price: '999',
    description: 'Get a professional and unique logo design that represents your business identity.',
    link: '/services/logo-design',
    color: 'from-purple-600 to-indigo-500',
    shadow: 'shadow-purple-500/20'
  },
];

export function FeaturedServicesSection() {
  const { language } = useLanguage();
  const data = language ? servicesDataBn : servicesDataEn;

  return (
    <section className="relative w-full bg-slate-50 dark:bg-black py-24 md:py-32 overflow-hidden transition-colors duration-300">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container relative mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold tracking-wide mb-2 border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-4 h-4" />
            {language ? 'জনপ্রিয় সার্ভিস' : 'Featured Services'}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {language ? (
              <>আপনার ব্যবসার <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">ক্রিয়েটিভ যাত্রা</span> শুরু হোক</>
            ) : (
              <>Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Creative Journey</span></>
            )}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            {language 
              ? 'আমরা দিচ্ছি আপনার ব্যবসার জন্য কমপ্লিট ডিজিটাল সল্যুশন' 
              : 'We provide complete digital solutions for your business growth'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full bg-white dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* 🔥 Price Badge (Solid Gradient for Best Visibility) */}
                <div className={`absolute top-4 right-4 pl-4 pr-5 py-2 rounded-l-full rounded-r-lg text-white font-bold text-sm shadow-lg bg-gradient-to-r ${item.color} flex items-center gap-1 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300`}>
                   <span className="text-xs opacity-90 font-normal mr-1">{language ? 'শুরু' : 'start'}</span>
                   <span className="text-lg">৳</span>
                   <span className="text-lg tracking-wide">{item.price}</span>
                </div>

                {/* Floating Icon */}
                <div className={`absolute -bottom-4 left-8 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10 border-4 border-white dark:border-slate-900`}>
                  {item.icon}
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow p-8 pt-12">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed flex-grow text-[15px]">
                  {item.description}
                </p>

                {/* Action Button */}
                <Link 
                  href={item.link}
                  className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-900 group/btn transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <span className="font-bold text-slate-700 dark:text-slate-200 group-hover/btn:text-blue-600 dark:group-hover/btn:text-blue-400">
                    {language ? 'বিস্তারিত দেখুন' : 'View Details'}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md group-hover/btn:rotate-45 transition-transform duration-300`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="mt-16 text-center">
            <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 py-6 text-base font-bold border-2 border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-500 hover:bg-transparent transition-all shadow-sm hover:shadow-md"
            >
                <Link href="/services">
                    {language ? 'সব সার্ভিস দেখুন' : 'Explore All Services'}
                </Link>
            </Button>
        </div>

      </div>
    </section>
  );
}