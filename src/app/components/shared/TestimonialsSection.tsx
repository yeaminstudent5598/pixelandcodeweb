'use client';

import Image from 'next/image';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Star, Quote } from 'lucide-react';
import Marquee from 'react-fast-marquee';

// টেস্টিমোনিয়াল ডেটা
const testimonials = [
  {
    quote: "One of the best agency I have ever worked with. My business increased almost 2 times more than before. Best wishes!",
    name: "Alisa Hossain",
    role: "Founder, Pixel & Code",
    imgSrc: "https://i.pravatar.cc/150?u=yeamin",
    rating: 5
  },
  {
    quote: "Their team is highly professional and they truly understand client needs. Highly recommended for any startup!",
    name: "Aisha Akter",
    role: "CEO, FreshBite Foods",
    imgSrc: "https://i.pravatar.cc/150?u=aisha",
    rating: 5
  },
  {
    quote: "Our social media engagement skyrocketed after Pixel & Code managed our campaigns. Truly commendable work.",
    name: "Fahim Ahmed",
    role: "Marketing Manager, UrbanStyle",
    imgSrc: "https://i.pravatar.cc/150?u=fahim",
    rating: 5
  },
  {
    quote: "They brought our vision to life with exceptional design and functionality. A top-notch digital agency!",
    name: "Nusrat Jahan",
    role: "Founder, EcoCrafts",
    imgSrc: "https://i.pravatar.cc/150?u=nusrat",
    rating: 5
  },
  {
    quote: "Excellent communication and delivery on time. I am very satisfied with their service quality.",
    name: "Rahim Uddin",
    role: "Director, TechWorld",
    imgSrc: "https://i.pravatar.cc/150?u=rahim",
    rating: 4
  },
];

export function TestimonialsSection() {
  const { language } = useLanguage();

  return (
    <section className="relative w-full py-24 md:py-32 bg-slate-50 dark:bg-black overflow-hidden border-t border-slate-200 dark:border-slate-800">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container relative mx-auto px-4 mb-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 font-bold text-xs uppercase tracking-widest mb-6 border border-orange-200 dark:border-orange-800">
            <Quote className="w-3 h-3 fill-current" />
            {language ? 'গ্রাহকদের মতামত' : 'Client Feedback'}
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
            {language ? (
              <>আমাদের সম্পর্কে <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">মানুষ যা বলছে</span></>
            ) : (
              <>What People Say <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">About Us</span></>
            )}
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {language 
              ? 'দীর্ঘদিনের পথচলায় আমরা অর্জন করেছি অসংখ্য গ্রাহকের আস্থা ও ভালোবাসা।'
              : 'Over the years, we have earned the trust and love of countless clients through our dedication.'}
          </p>
        </div>
      </div>

      {/* Marquee Slider */}
      <div className="relative w-full">
        
        {/* Side Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 dark:from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 dark:from-black to-transparent z-10 pointer-events-none"></div>

        <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-4">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="w-[350px] md:w-[450px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 mx-4 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300 cursor-grab active:cursor-grabbing"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300 dark:text-slate-700'}`} 
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-slate-700 dark:text-slate-300 italic leading-relaxed mb-8 h-24 overflow-hidden">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 dark:border-slate-700">
                  <Image 
                    src={item.imgSrc} 
                    alt={item.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    {item.name}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

    </section>
  );
}