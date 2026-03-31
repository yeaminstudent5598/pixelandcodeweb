// src/app/components/shared/Footer.tsx
'use client';

import Link from 'next/link';
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Send,
  Globe
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const socialLinks = [
  { href: 'https://www.facebook.com/pixelandcode07', icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
  { href: 'https://linkedin.com/company/pixel-and-code-agency', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  // Bilingual Links Data
  const companyLinks = [
    { nameEn: 'Home', nameBn: 'হোম', href: '/' },
    { nameEn: 'About Us', nameBn: 'আমাদের সম্পর্কে', href: '/about' },
    { nameEn: 'Services', nameBn: 'সার্ভিসসমূহ', href: '/services' },
    { nameEn: 'Packages', nameBn: 'প্যাকেজসমূহ', href: '/packages' },
    { nameEn: 'Store', nameBn: 'ডিজিটাল স্টোর', href: '/store' },
  ];

  const serviceLinks = [
    { nameEn: 'Web Development', nameBn: 'ওয়েব ডেভেলপমেন্ট', href: '/services' },
    { nameEn: 'Graphics Design', nameBn: 'গ্রাফিক্স ডিজাইন', href: '/services' },
    { nameEn: 'Digital Marketing', nameBn: 'ডিজিটাল মার্কেটিং', href: '/services' },
    { nameEn: 'Video Editing', nameBn: 'ভিডিও এডিটিং', href: '/services' },
    { nameEn: 'App Development', nameBn: 'অ্যাপ ডেভেলপমেন্ট', href: '/services' },
  ];

  return (
    <footer className="relative bg-white dark:bg-black text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
         <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]"></div>
         <div className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container relative mx-auto px-4 pt-20 pb-10 z-10">
        
        {/* =======================
            TOP CTA SECTION
        ======================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-slate-200 dark:border-slate-800 pb-16 mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              {language ? (
                <>চলুন একসাথে কিছু <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">অসাধারণ তৈরি করি</span></>
              ) : (
                <>Let's Build Something <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Great Together</span></>
              )}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {language 
                ? 'আপনার আইডিয়া, আমাদের টেকনোলজি। সফলতার পথে যাত্রা শুরু হোক আজই।' 
                : 'Your idea, our technology. Let the journey to success begin today.'}
            </p>
          </div>
          
          <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-blue-600 dark:bg-blue-600 rounded-full hover:scale-105 hover:bg-blue-700 shadow-xl shadow-blue-500/20">
            {language ? 'প্রজেক্ট শুরু করুন' : 'Start a Project'}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* =======================
            MAIN FOOTER GRID
        ======================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight italic">
                Pixel & <span className="text-blue-600">Code</span>
              </span>
            </Link>
            
            <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400 max-w-sm">
              {language 
                ? 'আধুনিক প্রযুক্তির মাধ্যমে আপনার ব্যবসার ডিজিটাল রূপান্তর এবং আন্তর্জাতিক মানের সেবা নিশ্চিত করাই আমাদের মূল লক্ষ্য।' 
                : 'Empowering businesses with modern technology to ensure seamless digital transformation and global standards.'}
            </p>

            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-blue-600 pl-3">
              {language ? 'কোম্পানি' : 'Company'}
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">
                     {language ? link.nameBn : link.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-slate-900 dark:text-white mb-6 border-l-4 border-blue-600 pl-3">
              {language ? 'সার্ভিসসমূহ' : 'Services'}
            </h3>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.nameEn}>
                  <Link href={link.href} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium">
                     {language ? link.nameBn : link.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-6">{language ? 'নিউজলেটার' : 'Newsletter'}</h3>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder={language ? 'আপনার ইমেইল দিন' : 'Enter your email'}
                  className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-slate-900 dark:text-white placeholder:text-slate-400 transition-all"
                />
                <button className="absolute right-1.5 top-1.5 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
               <div className="flex items-start gap-3 text-slate-500 dark:text-slate-400 text-sm">
                 <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                 <span>Shariatpur Sadar, Shariatpur, Dhaka, Bangladesh</span>
               </div>
               <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                 <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                 <a href="tel:+8801641801705" className="hover:text-blue-600 transition-colors">+880 1641-801705</a>
               </div>
               <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                 <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                 <a href="mailto:pixelandcode07@gmail.com" className="hover:text-blue-600 transition-colors">pixelandcode07@gmail.com</a>
               </div>
            </div>
          </div>

        </div>

        {/* =======================
            BOTTOM BAR
        ======================== */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800 gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            &copy; {currentYear} <span className="text-blue-600 font-bold">Pixel & Code</span>. {language ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All Rights Reserved.'}
          </p>
          
          <div className="flex gap-6 text-sm font-medium">
            <Link href="/privacy" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">
              {language ? 'প্রাইভেসি পলিসি' : 'Privacy Policy'}
            </Link>
            <Link href="/terms" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">
              {language ? 'শর্তাবলী' : 'Terms of Service'}
            </Link>
          </div>
        </div>

      </div>

      {/* BIG BACKGROUND TEXT (Optional Trendy Effect) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.02] dark:opacity-[0.03] whitespace-nowrap select-none overflow-hidden">
        <span className="text-[12rem] md:text-[18rem] font-black text-slate-900 dark:text-white leading-none tracking-tighter">
          PIXEL&CODE
        </span>
      </div>

    </footer>
  );
}