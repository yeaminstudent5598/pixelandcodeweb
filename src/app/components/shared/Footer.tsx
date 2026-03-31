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
  Send
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
          
          <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:scale-105 hover:bg-blue-700 shadow-xl shadow-blue-500/20">
            {language ? 'প্রজেক্ট শুরু করুন' : 'Start a Project'}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* =======================
            MAIN FOOTER GRID
        ======================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Info & Restored Logo */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <svg
                className="h-10 w-10 text-blue-600 dark:text-blue-500"
                viewBox="0 0 2047.88 1852.16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M926.1,1163.22q0,84.22,0,168.46c0,18.81.07,18.49-18.17,18.71-25.33.3-50.65,1.6-76,1.68-85.84.25-171.67-.12-257.5.48-12,.09-14.37-4.92-14.32-14.79.15-28.68.09-57.36.09-86,0-86.45.2-172.9-.27-259.35-.06-11.51,3.74-14.39,14.61-14.35q165.4.51,330.83.28c18.43,0,18.44,0,18.45-18.24q0-90.28,0-180.57,0-74.82,0-149.63c0-14.06,2.82-16.81,17-16.82q163.61-.13,327.21-.23c4,0,8.46.86,12-.49,12.54-4.74,14.28,3.33,14.3,12,.16,114.32,0,228.65.23,343,0,11.4-6.56,11.7-15.07,11.69q-168.46-.18-336.91-.06c-16.86,0-16.62,0-16.58,17C926.17,1051.73,926.09,1107.47,926.1,1163.22Z"
                  transform="translate(-555.32 -610.92)"
                />
                <path
                  fill="currentColor"
                  d="M925.87,2094h-351c-18.78,0-19.51-.76-19.5-19.91,0-63.41-.25-126.83.11-190.24.25-43.7,1.38-87.38,2.08-131.07.06-4,.6-8.27-.39-12.07-2.61-10,3.59-12.24,10.94-12.59,10.47-.51,21-.06,31.49-.06,103,0,206,.17,309-.3,12-.06,15.94,2.87,15.88,15.42-.46,101.79-.23,203.58-.2,305.36,0,11.63.4,23.27-.08,34.88-.34,8.35,3.2,9.94,10.9,9.82,30.55-.47,61.12-.1,91.67-.29,33-.21,65.91-.93,98.87-1,27.72-.07,55.43.48,83.15.7,23.76.19,47.53.56,71.29.32,10.66-.1,16,2.53,13.55,14.76-1.29,6.47.73,13.53.73,20.33q.1,158.74,0,317.48c0,17.54,0,17.49-17.32,17.49q-167.22,0-334.44.06c-16.88,0-16.57-.07-16.84-16.88-.38-23.93-1.58-47.85-1.88-71.78q-.51-40.55,0-81.12c.37-30.64,1.55-61.27,1.84-91.91C926.13,2166.37,925.87,2131.34,925.87,2094Z"
                  transform="translate(-555.32 -610.92)"
                />
                <path
                  fill="currentColor"
                  d="M1915.46,960.49c41.91,23.15,81.69,45.15,121.52,67,2.64,1.45,5.78,2,8.61,3.12,8.18,3.34,11,8.37,8.09,17.65-8,25.29-14.88,50.9-22.45,76.32-6.69,22.45-14,44.73-20.49,67.24-6.57,22.69-12.4,45.6-18.77,68.36-6,21.49-12.37,42.88-18.48,64.34-6.46,22.7-12.73,45.45-19.25,68.14-6.73,23.42-13.8,46.75-20.44,70.2-4,14.23-7.41,28.64-11.28,42.92-3,10.94-6.3,21.79-9.38,32.71-12.85,45.72-25.42,91.52-38.6,137.15-8.85,30.66-19,60.94-27.74,91.64-9,31.83-16.54,64.08-25.42,96-6.3,22.65-14.06,44.89-20.63,67.46s-12.42,45.45-18.73,68.15c-3.15,11.36-6.74,22.6-10,34-2.14,7.56-4.41,15.13-5.77,22.85-1.78,10.05-7.8,13.26-16.65,8.34-37.44-20.79-74.82-41.71-112.46-62.15-10.36-5.62-13-11.91-8.8-23.46,5.58-15.52,8.71-31.92,13.07-47.9,2.75-10,5.8-20,8.75-30,9.73-33,19.9-65.91,29.11-99.08,9-32.34,16.56-65.06,25.52-97.41,8.6-31,18.48-61.74,27.22-92.76,6.51-23.11,12-46.51,18.14-69.72,3.24-12.23,7-24.3,10.43-36.48,7.15-25.5,14-51.07,21.38-76.5,6.78-23.4,14.4-46.57,21-70,6.51-23,11.89-46.41,18.41-69.46,6.27-22.12,13.65-43.93,20-66,6.15-21.42,11.46-43.07,17.46-64.53,4.33-15.51,9.2-30.86,13.8-46.29,3.1-10.42,6.49-20.77,9.15-31.3,3.3-13.06,5.35-26.46,9.06-39.39C1898.61,1014.78,1907,988.19,1915.46,960.49Z"
                  transform="translate(-555.32 -610.92)"
                />
                <path
                  fill="currentColor"
                  d="M1138.46,1530.5,1557,1113.16l4.06,2.88c-.7,8.48-2,17-2,25.44-.16,58.39.15,116.79-.37,175.17-.06,6.24-2.86,14.08-7.17,18.4q-95.47,95.85-191.92,190.72c-6.34,6.25-6.41,10.61-.44,16.43q65,63.36,129.92,126.83c20.18,19.7,40.64,39.12,60.46,59.18,3.58,3.62,6.54,9.71,6.58,14.68.53,62.37.48,124.74.51,187.11,0,2.48-.66,5-1.65,12Z"
                  transform="translate(-555.32 -610.92)"
                />
                <path
                  fill="currentColor"
                  d="M2187.72,1944.68c-1.19-8.13-2.29-12.16-2.3-16.18-.1-58.81-.34-117.61.32-176.41.08-7.07,3.43-15.91,8.36-20.83q94.37-94.07,189.84-187c6.63-6.49,6.88-9.94-.1-16.84Q2288.4,1433,2194,1337.52c-4.87-4.93-8.17-13.68-8.25-20.71-.67-57.47-.43-115-.36-172.43,0-4.11.85-8.21,1.59-14.93,4.86,3.75,7.69,5.54,10.06,7.82,57.55,55.48,115.43,110.63,172.46,166.63,68.94,67.69,137.11,136.15,205.7,204.19,7.51,7.44,15.44,14.47,23.44,21.39,5.26,4.56,6.43,8.32.79,13.79q-88.87,86.2-177.5,172.69-107.29,104.32-214.65,208.60C2201.74,1930,2196.44,1935.72,2187.72,1944.68Z"
                  transform="translate(-555.32 -610.92)"
                />
              </svg>
              <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
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

      {/* BIG BACKGROUND TEXT */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.02] dark:opacity-[0.03] whitespace-nowrap select-none overflow-hidden">
        <span className="text-[12rem] md:text-[18rem] font-black text-slate-900 dark:text-white leading-none tracking-tighter">
          PIXEL&CODE
        </span>
      </div>

    </footer>
  );
}