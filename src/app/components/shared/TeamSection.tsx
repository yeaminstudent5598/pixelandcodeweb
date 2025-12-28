'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import React from 'react';
import { Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

// টিম মেম্বারদের ডেটা
const teamMembers = [
  {
    imgSrc: '/Yeamin.png',
    name: 'Yeamin Madbor',
    role: 'CEO & Founder',
    linkedin: '#',
    twitter: '#',
  },
  {
    imgSrc: '/Sifat.jpg',
    name: 'Sifat Hossain',
    role: 'Lead Designer',
    linkedin: '#',
    twitter: '#',
  },
  {
    imgSrc: '/Naeem.jpg',
    name: 'Naeem Majumder',
    role: 'Senior Backend Dev',
    linkedin: '#',
    twitter: '#',
  },
  {
    imgSrc: '/Sabbir_Hossain.jpg',
    name: 'Sabbir Hossain',
    role: 'Frontend Engineer',
    linkedin: '#',
    twitter: '#',
  },
  {
    imgSrc: '/Moin_Uddin.jpg',
    name: 'Moin Uddin',
    role: 'Frontend Developer',
    linkedin: '#',
    twitter: '#',
  },
  {
    imgSrc: '/Aysa_Akter.jpg',
    name: 'Aysha Akter',
    role: 'Frontend Developer',
    linkedin: '#',
    twitter: '#',
  },
  {
    imgSrc: '/Iftiak_Hossain.webp',
    name: 'Iftiak Hossain',
    role: 'UI/UX Designer',
    linkedin: '#',
    twitter: '#',
  },
  {
    imgSrc: '/Mizan.jpg',
    name: 'Mizanur Rahman',
    role: 'Video Editor',
    linkedin: '#',
    twitter: '#',
  },
];

export function TeamSection() {
  const { language } = useLanguage();

  return (
    <section className="relative w-full py-24 md:py-32 bg-white dark:bg-black border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-4">
              {language ? 'আমাদের টিম' : 'Our Team'}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              {language ? (
                <>সেরা কাজের পেছনে <br /> <span className="text-slate-400">সেরা মানুষগুলো</span></>
              ) : (
                <>The People Behind <br /> <span className="text-slate-400">Great Work</span></>
              )}
            </h3>
          </div>
          
          <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-1 cursor-pointer hover:text-blue-600 transition-colors">
            {language ? 'আমাদের সাথে যোগ দিন' : 'Join Our Team'}
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* TEAM GRID / SLIDER */}
        {/* Mobile: Horizontal Snap Scroll | Desktop: 4 Column Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
          
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative flex-shrink-0 w-[80vw] md:w-auto snap-center"
            >
              {/* Image Card */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                
                {/* Gradient Overlay (Always visible for text readability) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Info Box (Bottom) */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm font-medium text-slate-300 uppercase tracking-wider mb-4">
                      {member.role}
                    </p>

                    {/* Social Links (Hidden initially, slide up on hover) */}
                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                      <a href={member.linkedin} className="text-white hover:text-blue-400 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={member.twitter} className="text-white hover:text-blue-400 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-white hover:text-blue-400 transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Top Right Decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Mobile Only: CTA Button */}
        <div className="mt-8 md:hidden text-center">
             <button className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider border-b border-blue-600 dark:border-blue-400 pb-1">
                {language ? 'আমাদের সাথে যোগ দিন' : 'Join Our Team'}
             </button>
        </div>

      </div>
    </section>
  );
}