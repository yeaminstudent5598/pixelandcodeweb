'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Mail, MapPin, Phone, ArrowRight, Send, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const socialLinks = [
  { href: 'https://www.facebook.com/pixelandcode07', icon: <Facebook className="w-4 h-4" />, label: 'Facebook' },
  { href: 'https://linkedin.com/company/pixel-and-code-agency', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
  { href: 'mailto:pixelandcode07@gmail.com', icon: <Mail className="w-4 h-4" />, label: 'Email' },
];

export function Footer() {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const year = new Date().getFullYear();

  const companyLinks = [
    { en: 'Home', bn: 'হোম', href: '/' },
    { en: 'About Us', bn: 'আমাদের সম্পর্কে', href: '/about' },
    { en: 'Services', bn: 'সার্ভিস', href: '/services' },
    { en: 'Packages', bn: 'প্যাকেজ', href: '/packages' },
    { en: 'Store', bn: 'স্টোর', href: '/store' },
    { en: 'Portfolio', bn: 'পোর্টফোলিও', href: '/portfolio' },
  ];

  const serviceLinks = [
    { en: 'Web Development', bn: 'ওয়েব ডেভেলপমেন্ট', href: '/web-service' },
    { en: 'Graphics Design', bn: 'গ্রাফিক্স ডিজাইন', href: '/graphics-design' },
    { en: 'Digital Marketing', bn: 'ডিজিটাল মার্কেটিং', href: '/digital-marketing' },
    { en: 'Video Editing', bn: 'ভিডিও এডিটিং', href: '/video-editing' },
    { en: 'UI/UX Design', bn: 'UI/UX ডিজাইন', href: '/ui-ux-design' },
    { en: 'Meta Marketing', bn: 'মেটা মার্কেটিং', href: '/meta-marketing' },
  ];

  return (
    <>
      {/* 🎨 CSS Keyframes for Moving Gradient Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-bg-gradient {
            background-size: 300% 300%;
            animation: gradientMove 15s ease infinite;
          }
          .animate-btn-gradient {
            background-size: 200% 200%;
            animation: gradientMove 4s ease infinite;
          }
        `
      }} />

      <footer className="relative animate-bg-gradient bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950/40 border-t border-slate-200 dark:border-slate-800/60 overflow-hidden font-sans">
        
        {/* 🎨 Ambient Glowing Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/50 dark:bg-blue-900/10 blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-100/40 dark:bg-indigo-900/10 blur-[100px]" />
          {/* Subtle Grid Pattern for texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 pb-8">
          
          {/* ── Top CTA Banner ── */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16 border-b border-slate-200 dark:border-slate-800/80 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                {language ? (
                  <>চলুন একসাথে <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">অসাধারণ কিছু তৈরি করি</span></>
                ) : (
                  <>Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Great Together</span></>
                )}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                {language
                  ? 'আপনার আইডিয়া, আমাদের টেকনোলজি — সফলতার পথে যাত্রা শুরু হোক আজই।'
                  : 'Your idea, our technology. Let the journey to success begin today.'}
              </p>
            </div>
            
            {/* 🚀 Animated Gradient CTA Button */}
            <Link href="/contact" className="animate-btn-gradient group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 border border-transparent rounded-full shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-1 flex-shrink-0">
              {language ? 'প্রজেক্ট শুরু করুন' : 'Start a Project'}
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ── Main Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

            {/* 1. Brand Column */}
            <div className="lg:col-span-4 flex flex-col items-start lg:pr-8">
              <Link href="/" className="flex items-center gap-2.5 mb-6 group">
                <svg className="w-9 h-9 text-blue-600 dark:text-blue-500" viewBox="0 0 2047.88 1852.16" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M926.1,1163.22q0,84.22,0,168.46c0,18.81.07,18.49-18.17,18.71-25.33.3-50.65,1.6-76,1.68-85.84.25-171.67-.12-257.5.48-12,.09-14.37-4.92-14.32-14.79.15-28.68.09-57.36.09-86,0-86.45.2-172.9-.27-259.35-.06-11.51,3.74-14.39,14.61-14.35q165.4.51,330.83.28c18.43,0,18.44,0,18.45-18.24q0-90.28,0-180.57,0-74.82,0-149.63c0-14.06,2.82-16.81,17-16.82q163.61-.13,327.21-.23c4,0,8.46.86,12-.49,12.54-4.74,14.28,3.33,14.3,12,.16,114.32,0,228.65.23,343,0,11.4-6.56,11.7-15.07,11.69q-168.46-.18-336.91-.06c-16.86,0-16.62,0-16.58,17C926.17,1051.73,926.09,1107.47,926.1,1163.22Z" transform="translate(-555.32 -610.92)"/>
                  <path fill="currentColor" d="M925.87,2094h-351c-18.78,0-19.51-.76-19.5-19.91,0-63.41-.25-126.83.11-190.24.25-43.7,1.38-87.38,2.08-131.07.06-4,.6-8.27-.39-12.07-2.61-10,3.59-12.24,10.94-12.59,10.47-.51,21-.06,31.49-.06,103,0,206,.17,309-.3,12-.06,15.94,2.87,15.88,15.42-.46,101.79-.23,203.58-.2,305.36,0,11.63.4,23.27-.08,34.88-.34,8.35,3.2,9.94,10.9,9.82,30.55-.47,61.12-.1,91.67-.29,33-.21,65.91-.93,98.87-1,27.72-.07,55.43.48,83.15.7,23.76.19,47.53.56,71.29.32,10.66-.1,16,2.53,13.55,14.76-1.29,6.47.73,13.53.73,20.33q.1,158.74,0,317.48c0,17.54,0,17.49-17.32,17.49q-167.22,0-334.44.06c-16.88,0-16.57-.07-16.84-16.88-.38-23.93-1.58-47.85-1.88-71.78q-.51-40.55,0-81.12c.37-30.64,1.55-61.27,1.84-91.91C926.13,2166.37,925.87,2131.34,925.87,2094Z" transform="translate(-555.32 -610.92)"/>
                  <path fill="currentColor" d="M1915.46,960.49c41.91,23.15,81.69,45.15,121.52,67,2.64,1.45,5.78,2,8.61,3.12,8.18,3.34,11,8.37,8.09,17.65-8,25.29-14.88,50.9-22.45,76.32-6.69,22.45-14,44.73-20.49,67.24-6.57,22.69-12.4,45.6-18.77,68.36-6,21.49-12.37,42.88-18.48,64.34-6.46,22.7-12.73,45.45-19.25,68.14-6.73,23.42-13.8,46.75-20.44,70.2-4,14.23-7.41,28.64-11.28,42.92-3,10.94-6.3,21.79-9.38,32.71-12.85,45.72-25.42,91.52-38.6,137.15-8.85,30.66-19,60.94-27.74,91.64-9,31.83-16.54,64.08-25.42,96-6.3,22.65-14.06,44.89-20.63,67.46s-12.42,45.45-18.73,68.15c-3.15,11.36-6.74,22.6-10,34-2.14,7.56-4.41,15.13-5.77,22.85-1.78,10.05-7.8,13.26-16.65,8.34-37.44-20.79-74.82-41.71-112.46-62.15-10.36-5.62-13-11.91-8.8-23.46,5.58-15.52,8.71-31.92,13.07-47.9,2.75-10,5.8-20,8.75-30,9.73-33,19.9-65.91,29.11-99.08,9-32.34,16.56-65.06,25.52-97.41,8.6-31,18.48-61.74,27.22-92.76,6.51-23.11,12-46.51,18.14-69.72,3.24-12.23,7-24.3,10.43-36.48,7.15-25.5,14-51.07,21.38-76.5,6.78-23.4,14.4-46.57,21-70,6.51-23,11.89-46.41,18.41-69.46,6.27-22.12,13.65-43.93,20-66,6.15-21.42,11.46-43.07,17.46-64.53,4.33-15.51,9.2-30.86,13.8-46.29,3.1-10.42,6.49-20.77,9.15-31.3,3.3-13.06,5.35-26.46,9.06-39.39C1898.61,1014.78,1907,988.19,1915.46,960.49Z" transform="translate(-555.32 -610.92)"/>
                  <path fill="currentColor" d="M1138.46,1530.5,1557,1113.16l4.06,2.88c-.7,8.48-2,17-2,25.44-.16,58.39.15,116.79-.37,175.17-.06,6.24-2.86,14.08-7.17,18.4q-95.47,95.85-191.92,190.72c-6.34,6.25-6.41,10.61-.44,16.43q65,63.36,129.92,126.83c20.18,19.7,40.64,39.12,60.46,59.18,3.58,3.62,6.54,9.71,6.58,14.68.53,62.37.48,124.74.51,187.11,0,2.48-.66,5-1.65,12Z" transform="translate(-555.32 -610.92)"/>
                  <path fill="currentColor" d="M2187.72,1944.68c-1.19-8.13-2.29-12.16-2.3-16.18-.1-58.81-.34-117.61.32-176.41.08-7.07,3.43-15.91,8.36-20.83q94.37-94.07,189.84-187c6.63-6.49,6.88-9.94-.1-16.84Q2288.4,1433,2194,1337.52c-4.87-4.93-8.17-13.68-8.25-20.71-.67-57.47-.43-115-.36-172.43,0-4.11.85-8.21,1.59-14.93,4.86,3.75,7.69,5.54,10.06,7.82,57.55,55.48,115.43,110.63,172.46,166.63,68.94,67.69,137.11,136.15,205.7,204.19,7.51,7.44,15.44,14.47,23.44,21.39,5.26,4.56,6.43,8.32.79,13.79q-88.87,86.2-177.5,172.69-107.29,104.32-214.65,208.60C2201.74,1930,2196.44,1935.72,2187.72,1944.68Z" transform="translate(-555.32 -610.92)"/>
                </svg>
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Pixel<span className="text-blue-600 dark:text-blue-500">&</span>Code
                </span>
              </Link>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium max-w-[280px] mb-8">
                {language
                  ? 'আধুনিক প্রযুক্তির মাধ্যমে আপনার ব্যবসার ডিজিটাল রূপান্তর নিশ্চিত করাই আমাদের লক্ষ্য।'
                  : 'Empowering businesses through modern technology and seamless digital transformation.'}
              </p>

              <div className="flex gap-3">
                {socialLinks.map((s, idx) => (
                  <a 
                    key={idx} 
                    href={s.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all shadow-sm"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* 2. Company Links */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 pb-2 border-b-2 border-blue-600 inline-block">
                {language ? 'কোম্পানি' : 'Company'}
              </h3>
              <ul className="space-y-3.5">
                {companyLinks.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors flex items-center gap-1 group">
                      <ArrowUpRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {language ? l.bn : l.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Service Links */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 pb-2 border-b-2 border-blue-600 inline-block">
                {language ? 'সার্ভিসেস' : 'Services'}
              </h3>
              <ul className="space-y-3.5">
                {serviceLinks.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors flex items-center gap-1 group">
                      <ArrowUpRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {language ? l.bn : l.en}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Newsletter & Contact */}
            <div className="lg:col-span-4 lg:pl-8">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 pb-2 border-b-2 border-blue-600 inline-block">
                {language ? 'নিউজলেটার' : 'Newsletter'}
              </h3>
              
              <form className="relative mb-8 max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="w-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-full py-3.5 pl-5 pr-14 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-all"
                  type="email"
                  placeholder={language ? 'আপনার ইমেইল দিন' : 'Enter your email'}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                {/* 🚀 Animated Gradient Send Button */}
                <button type="submit" className="animate-btn-gradient absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20">
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>

              <div className="space-y-4">
                {[
                  { icon: <MapPin className="w-4 h-4 text-blue-500" />, text: 'Shariatpur Sadar, Dhaka, BD' },
                  { icon: <Phone className="w-4 h-4 text-blue-500" />, text: '+880 1641-801705', href: 'tel:+8801641801705' },
                  { icon: <Mail className="w-4 h-4 text-blue-500" />, text: 'pixelandcode07@gmail.com', href: 'mailto:pixelandcode07@gmail.com' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {item.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom Bar ── */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800/80 relative z-20">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              &copy; {year} <span className="font-bold text-slate-900 dark:text-white">Pixel &amp; Code</span>. {language ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All Rights Reserved.'}
            </p>
            <div className="flex gap-6">
              {[
                { en: 'Privacy Policy', bn: 'প্রাইভেসি পলিসি', href: '/privacy' },
                { en: 'Terms of Service', bn: 'শর্তাবলী', href: '/terms' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {language ? l.bn : l.en}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* ── Big Watermark Text ── */}
        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full flex justify-center z-0">
          <span className="text-[13vw] font-black text-slate-900 dark:text-white opacity-[0.015] dark:opacity-[0.02] tracking-tighter leading-none whitespace-nowrap">
            PIXEL&amp;CODE
          </span>
        </div>
      </footer>
    </>
  );
}