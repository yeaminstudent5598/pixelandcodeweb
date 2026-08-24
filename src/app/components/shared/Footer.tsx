'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Send,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const socialLinks = [
  {
    href: 'https://www.facebook.com/pixelandcode07',
    icon: Facebook,
    label: 'Facebook',
  },
  {
    href: 'https://linkedin.com/company/pixel-and-code-agency',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:pixelandcode07@gmail.com',
    icon: Mail,
    label: 'Email',
  },
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
    {
      en: 'Web Development',
      bn: 'ওয়েব ডেভেলপমেন্ট',
      href: '/web-service',
    },
    {
      en: 'Graphics Design',
      bn: 'গ্রাফিক্স ডিজাইন',
      href: '/graphics-design',
    },
    {
      en: 'Digital Marketing',
      bn: 'ডিজিটাল মার্কেটিং',
      href: '/digital-marketing',
    },
    {
      en: 'Video Editing',
      bn: 'ভিডিও এডিটিং',
      href: '/video-editing',
    },
    {
      en: 'UI/UX Design',
      bn: 'UI/UX ডিজাইন',
      href: '/ui-ux-design',
    },
    {
      en: 'Meta Marketing',
      bn: 'মেটা মার্কেটিং',
      href: '/meta-marketing',
    },
  ];

  const contactItems = [
    {
      icon: MapPin,
      text: 'Shariatpur Sadar, Dhaka, BD',
    },
    {
      icon: Phone,
      text: '+880 1641-801705',
      href: 'tel:+8801641801705',
    },
    {
      icon: Mail,
      text: 'pixelandcode07@gmail.com',
      href: 'mailto:pixelandcode07@gmail.com',
    },
  ];

  return (
    <>
      {/* =========================================================
          ANIMATIONS (Background, Snake Beam & Card Blobs)
      ========================================================= */}
      <style jsx>{`
        /* Background Gradient Animation */
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Floating Orbs Animation */
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(30px) scale(1.05); }
        }

        /* Card Inner Floating Blobs Animation */
        @keyframes blob1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(25px, -40px) scale(1.08); }
          66% { transform: translate(-15px, 15px) scale(0.92); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-25px, 40px) scale(1.08); }
          66% { transform: translate(15px, -15px) scale(0.92); }
        }

        /* Snake Border Animation */
        @keyframes rotateSnake {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Badge shimmer */
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-bg-gradient {
          background-size: 200% 200%;
          animation: gradientMove 15s ease infinite;
        }

        .button-gradient {
          background-size: 200% 200%;
          animation: gradientMove 5s ease infinite;
        }

        .animate-float-1 {
          animation: float1 9s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float2 11s ease-in-out infinite;
        }

        .animate-blob-1 {
          animation: blob1 12s infinite ease-in-out;
        }
        .animate-blob-2 {
          animation: blob2 14s infinite ease-in-out;
        }

        .shine-badge {
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 3.5s linear infinite;
        }

        /* Snake Border Main Light — thin, contained streak (not a full haze) */
        .snake-beam {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 180%;
          height: 180%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 280deg,
            #3b82f6 315deg,
            #8b5cf6 345deg,
            transparent 360deg
          );
          animation: rotateSnake 7s linear infinite;
          transform-origin: center center;
          z-index: 0;
        }

        /* Snake Background Blur/Glow — softer & more contained so it reads as a
           subtle edge-light instead of fogging the whole card */
        .snake-blur {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 180%;
          height: 180%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 280deg,
            rgba(59, 130, 246, 0.35) 315deg,
            rgba(139, 92, 246, 0.35) 345deg,
            transparent 360deg
          );
          filter: blur(30px);
          animation: rotateSnake 7s linear infinite;
          transform-origin: center center;
          z-index: 0;
        }
      `}</style>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="animate-bg-gradient relative overflow-hidden border-t border-slate-200 bg-gradient-to-br from-white via-blue-50/60 to-indigo-100/50 font-sans dark:border-slate-800/70 dark:from-slate-950 dark:via-blue-950/20 dark:to-indigo-950/30">
        
        {/* BACKGROUND EFFECTS */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-float-1 absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-200/25 blur-[130px] dark:bg-blue-900/15" />
          <div className="animate-float-2 absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-200/25 blur-[130px] dark:bg-indigo-900/15" />
          
          {/* Decorative Grid */}
          <div
            className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(100,116,139,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.06) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* MAIN CONTAINER */}
        <div className="relative z-10 mx-auto w-full max-w-[90%] px-5 sm:px-8 lg:px-10">

          {/* =====================================================
              CTA SECTION (Card with Inner Background Animation)
          ===================================================== */}
          <section className="pt-10 sm:pt-14 lg:pt-16">
            <div className="group relative overflow-hidden rounded-[30px] p-[2px] shadow-2xl shadow-blue-600/10 dark:shadow-none">
              
              {/* Snake Border Animations */}
              <div className="absolute inset-0 overflow-hidden rounded-[30px]">
                <div className="snake-blur" />
                <div className="snake-beam" />
              </div>

              {/* Inner Card — higher opacity so the glow reads as a border accent,
                  not a fog washing over the whole card */}
              <div className="relative z-10 flex min-h-[260px] flex-col justify-between gap-10 rounded-[28px] border border-white/60 bg-white/90 px-7 py-10 backdrop-blur-2xl dark:border-slate-800/80 dark:bg-slate-950/85 sm:px-10 md:flex-row md:items-center lg:px-16 overflow-hidden">
                
                {/* Inner Card Animation Blobs Layer — softened opacity/blur */}
                <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px]">
                  <div className="absolute -left-[10%] -top-[20%] h-[200px] w-[300px] animate-blob-1 rounded-full bg-blue-300/20 blur-[70px] dark:bg-blue-600/10 md:h-[300px] md:w-[400px]" />
                  <div className="absolute -right-[10%] bottom-[10%] h-[250px] w-[250px] animate-blob-2 rounded-full bg-purple-300/20 blur-[80px] dark:bg-purple-600/10 md:h-[350px] md:w-[350px]" />
                  <div className="absolute left-[30%] top-[30%] h-[200px] w-[200px] animate-blob-1 rounded-full bg-indigo-200/25 blur-[70px] dark:bg-indigo-600/10" />
                </div>

                {/* Left Content Area */}
                <div className="max-w-[720px] relative z-10">
                  <div className="relative mb-6 inline-flex items-center gap-2 overflow-hidden rounded-full border border-blue-200/50 bg-white/70 px-4 py-1.5 text-xs font-bold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
                    <span className="shine-badge absolute inset-0" />
                    <Sparkles className="relative z-10 h-3.5 w-3.5" />
                    <span className="relative z-10">
                      {language
                        ? 'আপনার পরবর্তী আইডিয়ার জন্য প্রস্তুত'
                        : 'Ready for your next big idea'}
                    </span>
                  </div>

                  <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[46px]">
                    {language ? (
                      <>
                        চলুন একসাথে{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          অসাধারণ কিছু তৈরি করি
                        </span>
                      </>
                    ) : (
                      <>
                        Let&apos;s Build Something{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          Great Together
                        </span>
                      </>
                    )}
                  </h2>

                  <p className="mt-4 max-w-[600px] text-[15px] font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                    {language
                      ? 'আপনার আইডিয়া, আমাদের টেকনোলজি — সফলতার পথে যাত্রা শুরু হোক আজই।'
                      : 'Your idea, our technology. Let the journey to success begin today.'}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    {[
                      language ? 'প্রফেশনাল টিম' : 'Professional Team',
                      language ? 'আধুনিক টেকনোলজি' : 'Modern Technology',
                      language ? 'স্মার্ট সলিউশন' : 'Smart Solutions',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200"
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Button Area */}
                <div className="shrink-0 relative z-10">
                  <Link
                    href="/contact"
                    className="button-gradient group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-600/40"
                  >
                    {language ? 'প্রজেক্ট শুরু করুন' : 'Start a Project'}
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              MAIN FOOTER GRID
          ===================================================== */}
          <div className="grid items-start gap-12 py-14 sm:py-16 lg:grid-cols-[1.65fr_0.8fr_1fr_1.45fr] lg:gap-12">
            
            {/* BRAND */}
            <div className="min-w-0">
              <Link href="/" className="group inline-flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-2 shadow-lg shadow-blue-600/20 transition-transform duration-300 group-hover:scale-105">
                  <svg
                    className="h-full w-full text-white"
                    viewBox="0 0 2047.88 1852.16"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
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
                </div>
                <div>
                  <div className="text-xl font-black tracking-tight text-slate-950 dark:text-white">
                    Pixel<span className="text-blue-600">&</span>Code
                  </div>
                  <div className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Digital Agency
                  </div>
                </div>
              </Link>
              <p className="mt-5 max-w-[330px] text-sm font-medium leading-6 text-slate-600 dark:text-slate-400">
                {language
                  ? 'আধুনিক প্রযুক্তির মাধ্যমে আপনার ব্যবসার ডিজিটাল রূপান্তর নিশ্চিত করাই আমাদের লক্ষ্য।'
                  : 'Empowering businesses through modern technology and seamless digital transformation.'}
              </p>
              <div className="mt-6 flex gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-400 dark:hover:border-blue-500 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                      <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* COMPANY */}
            <div className="min-w-0">
              <FooterTitle>{language ? 'কোম্পানি' : 'Company'}</FooterTitle>
              <ul className="space-y-3">
                {companyLinks.map((item) => (
                  <FooterLink key={item.href} href={item.href}>
                    {language ? item.bn : item.en}
                  </FooterLink>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div className="min-w-0">
              <FooterTitle>{language ? 'সার্ভিসেস' : 'Services'}</FooterTitle>
              <ul className="space-y-3">
                {serviceLinks.map((item) => (
                  <FooterLink key={item.href} href={item.href}>
                    {language ? item.bn : item.en}
                  </FooterLink>
                ))}
              </ul>
            </div>

            {/* STAY CONNECTED */}
            <div className="min-w-0">
              <FooterTitle>{language ? 'যোগাযোগ করুন' : 'Stay Connected'}</FooterTitle>
              <p className="mb-5 max-w-[360px] text-sm font-medium leading-6 text-slate-600 dark:text-slate-400">
                {language
                  ? 'আপনার প্রজেক্ট সম্পর্কে কথা বলতে আমাদের সাথে যোগাযোগ করুন।'
                  : 'Have a project in mind? Let’s start a conversation.'}
              </p>
              <form
                className="relative mb-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder={
                    language ? 'আপনার ইমেইল দিন' : 'Enter your email address'
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 pr-12 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-white dark:focus:border-blue-500"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="button-gradient absolute right-1.5 top-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 text-white shadow-md shadow-blue-600/20 transition-transform duration-300 hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <div className="space-y-2.5">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="min-w-0 truncate text-xs font-semibold text-slate-600 dark:text-slate-400">
                        {item.text}
                      </span>
                      {item.href && (
                        <ArrowUpRight className="ml-auto h-3.5 w-3.5 shrink-0 text-slate-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500" />
                      )}
                    </>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.text}
                        href={item.href}
                        className="group flex items-center gap-2.5 rounded-xl border border-slate-200/70 bg-white/70 p-2 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-md hover:shadow-blue-500/5 dark:border-white/[0.06] dark:bg-white/[0.025] dark:hover:border-blue-500/20 dark:hover:bg-white/[0.05]"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200/70 bg-white/70 p-2 dark:border-white/[0.06] dark:bg-white/[0.025]"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =====================================================
              BOTTOM BAR
          ===================================================== */}
          <div className="flex flex-col items-center justify-between gap-5 border-t border-slate-200/80 py-7 dark:border-slate-800/70 md:flex-row">
            <p className="text-center text-xs font-medium text-slate-500 md:text-left">
              © {year}{' '}
              <span className="font-bold text-slate-900 dark:text-white">
                Pixel &amp; Code
              </span>
              .{' '}
              {language ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All Rights Reserved.'}
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="/privacy"
                className="text-xs font-semibold text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                {language ? 'প্রাইভেসি পলিসি' : 'Privacy Policy'}
              </Link>
              <span className="h-3 w-px bg-slate-300 dark:bg-slate-700" />
              <Link
                href="/terms"
                className="text-xs font-semibold text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                {language ? 'শর্তাবলী' : 'Terms of Service'}
              </Link>
            </div>
          </div>
        </div>

        {/* WATERMARK */}
        <div className="pointer-events-none absolute bottom-[-1.5rem] left-1/2 hidden w-full -translate-x-1/2 select-none justify-center overflow-hidden sm:flex">
          <span className="whitespace-nowrap text-[13vw] font-black leading-none tracking-[-0.08em] text-slate-900 opacity-[0.025] dark:text-white dark:opacity-[0.025]">
            PIXEL&amp;CODE
          </span>
        </div>
      </footer>
    </>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-900 dark:text-white">
      <span className="h-5 w-1 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600" />
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex w-fit items-center gap-2 text-sm font-medium text-slate-500 transition-all duration-300 hover:translate-x-1 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
      >
        <span className="h-1 w-1 shrink-0 rounded-full bg-slate-300 transition-all duration-300 group-hover:w-3 group-hover:bg-blue-500 dark:bg-slate-700 dark:group-hover:bg-blue-400" />
        <span>{children}</span>
        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
      </Link>
    </li>
  );
}