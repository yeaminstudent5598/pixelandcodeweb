'use client';

import Image from 'next/image';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Star, Quote } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

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
    <section 
      className="relative w-full py-24 md:py-32 overflow-hidden z-0"
      style={{ 
        backgroundColor: '#060606',
        backgroundImage: `linear-gradient(rgba(249,115,22,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,.03) 1px, transparent 1px)`,
        backgroundSize: '56px 56px',
        borderTop: '1px solid rgba(255,255,255,.05)'
      }}
    >
      
      {/* ==========================================
          BACKGROUND 3D AMBIENCE
      ========================================== */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container relative mx-auto px-4 mb-16 z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.15)] mb-6">
            <Quote className="w-3 h-3 fill-current" />
            {language ? 'গ্রাহকদের মতামত' : 'Client Feedback'}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6" style={{ color: '#ffffff' }}>
            {language ? (
              <>আমাদের সম্পর্কে <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 drop-shadow-md">মানুষ যা বলছে</span></>
            ) : (
              <>What People Say <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 drop-shadow-md">About Us</span></>
            )}
          </h2>
          
          <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto text-[#9ca3af]" style={{ color: '#9ca3af' }}>
            {language 
              ? 'দীর্ঘদিনের পথচলায় আমরা অর্জন করেছি অসংখ্য গ্রাহকের আস্থা ও ভালোবাসা।'
              : 'Over the years, we have earned the trust and love of countless clients through our dedication.'}
          </p>
        </motion.div>
      </div>

      {/* Marquee Slider */}
      <div className="relative w-full z-10">
        
        {/* Side Fade Masks for Dark Theme */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#060606] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#060606] to-transparent z-20 pointer-events-none"></div>

        <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="group w-[350px] md:w-[450px] bg-[#111111] border border-[#222222] backdrop-blur-md rounded-3xl p-8 mx-4 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] hover:border-orange-500/40 transition-all duration-300 cursor-grab active:cursor-grabbing relative overflow-hidden"
            >
              {/* Inner Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < item.rating ? 'fill-orange-400 text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]' : 'text-[#333333]'}`} 
                  />
                ))}
              </div>

              {/* Quote - Explicitly forcing light gray color */}
              <p className="text-lg italic leading-relaxed mb-8 h-24 overflow-hidden relative z-10 text-[#d1d5db]" style={{ color: '#d1d5db' }}>
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-[#222222]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#333333] group-hover:border-orange-500/50 transition-colors duration-300">
                  <Image 
                    src={item.imgSrc} 
                    alt={item.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  {/* Explicitly forcing white color */}
                  <h4 className="font-bold text-base group-hover:text-orange-400 transition-colors duration-300 text-[#ffffff]" style={{ color: '#ffffff' }}>
                    {item.name}
                  </h4>
                  {/* Explicitly forcing gray color */}
                  <p className="text-sm font-medium text-[#9ca3af]" style={{ color: '#9ca3af' }}>
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