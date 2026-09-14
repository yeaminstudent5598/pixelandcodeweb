'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Linkedin, Twitter, Mail,
  ChevronLeft, ChevronRight, Users, ArrowUpRight, Sparkles
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Team Data
───────────────────────────────────────────── */
const teamMembers = [
  {
    imgSrc: '/yeaminpng3.png',
    name: 'Yeamin Madbor',
    role: 'Project Lead & Full Stack Developer',
    tag: 'Leadership',
    desc: 'Architecting scalable digital products from concept to deployment, leading the team with a pixel-perfect and performance-first mindset.',
    linkedin: 'https://www.linkedin.com/in/yeamin-madbor-83b3302b8/',
    twitter: '#', mail: '#',
    imgZoom: 1.15,
    imgPos: '50% 8%',
  },
  {
    imgSrc: '/arham_safwan.png',
    name: 'Arham Safwan',
    role: 'Production Manager',
    tag: 'Operations',
    desc: 'Orchestrating project pipelines and client deliveries with precision, ensuring every product ships on time and exceeds expectations.',
    linkedin: '#', twitter: '#', mail: '#',
    imgZoom: 1.55,
    imgPos: '50% 12%',
  },
  {
    imgSrc: '/kawserpng.png',
    name: 'Kawser Ahmed',
    role: 'Lead App Developer',
    tag: 'Mobile',
    desc: 'Crafting high-performance mobile applications that deliver smooth, native-grade experiences across Android and iOS.',
    linkedin: '#', twitter: '#', mail: '#',
    imgZoom: 1.60,
    imgPos: '48% 5%',
  },
  {
    imgSrc: '/sifatpng.png',
    name: 'Sifat Hossain',
    role: 'Lead UI/UX Designer',
    tag: 'Design',
    desc: 'Transforming ideas into intuitive interfaces — blending visual storytelling with user-centered design principles.',
    linkedin: '#', twitter: '#', mail: '#',
    imgZoom: 1.25,
    imgPos: '50% 8%',
  },
  {
    imgSrc: '/naeempng.png',
    name: 'Naeem Majumder',
    role: 'Senior Backend Engineer',
    tag: 'Backend',
    desc: 'Building robust server-side architectures and APIs that power reliable, secure, and scalable web systems.',
    linkedin: '#', twitter: '#', mail: '#',
    imgZoom: 1.45,
    imgPos: '50% 10%',
  },
  {
    imgSrc: '/sabbirpng.png',
    name: 'Sabbir Hossain',
    role: 'Frontend Engineer',
    tag: 'Frontend',
    desc: 'Bringing designs to life with clean, accessible, and performant frontend code using modern React ecosystems.',
    linkedin: '#', twitter: '#', mail: '#',
    imgZoom: 2.20,
    imgPos: '50% 58%',
  },
  {
    imgSrc: '/moinpng.png',
    name: 'Moin Uddin',
    role: 'Frontend Developer',
    tag: 'Frontend',
    desc: 'Developing responsive, interactive user interfaces with a strong eye for detail and smooth micro-animations.',
    linkedin: '#', twitter: '#', mail: '#',
    imgZoom: 1.10,
    imgPos: '50% 10%',
  },
  {
    imgSrc: '/ayshapng.png',
    name: 'Aysha Akter',
    role: 'Frontend Developer',
    tag: 'Frontend',
    desc: 'Creating elegant, user-friendly web experiences through structured code and thoughtful component design.',
    linkedin: '#', twitter: '#', mail: '#',
    imgZoom: 1.10,
    imgPos: '50% 5%',
  },
  {
    imgSrc: '/Iftiak_Hossain.webp',
    name: 'Iftiak Hossain',
    role: 'UI/UX Designer',
    tag: 'Design',
    desc: 'Designing clean, purposeful interfaces that balance aesthetic clarity with seamless usability.',
    linkedin: '#', twitter: '#', mail: '#',
    imgZoom: 1.20,
    imgPos: '50% 8%',
  },
  {
    imgSrc: '/mizanpng2.png',
    name: 'Mizan Munshi',
    role: 'Video Editor',
    tag: 'Media',
    desc: 'Transforming raw footage into polished, engaging content that elevates brand identity and drives real results.',
    linkedin: '#', twitter: '#', mail: '#',
    imgZoom: 1.30,
    imgPos: '50% 8%',
  },
  {
    imgSrc: '/yousufpng.png',
    name: 'Yousuf Rahman',
    role: 'Social Media & Frontend Dev',
    tag: 'Marketing',
    desc: 'Driving brand visibility through strategic social content while actively contributing to frontend development.',
    linkedin: '#', twitter: '#', mail: '#',
    imgZoom: 1.10,
    imgPos: '50% 8%',
  },
];

/* ─────────────────────────────────────────────
   Animations (TypeScript Fix Added)
───────────────────────────────────────────── */
type Dir = 1 | -1;
const EASE_OUT = [0.22, 1, 0.36, 1] as [number, number, number, number];

const infoV = (d: Dir): Variants => ({
  enter:  { opacity: 0, y: d * 20, filter: 'blur(4px)' },
  center: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: EASE_OUT, delay: 0.1 } },
  exit:   { opacity: 0, y: d * -15, filter: 'blur(2px)', transition: { duration: 0.25, ease: "easeIn" as const } },
});

const portraitV = (d: Dir): Variants => ({
  enter:  { opacity: 0, x: d * 40, scale: 0.98, filter: 'blur(8px)' },
  center: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: EASE_OUT } },
  exit:   { opacity: 0, x: d * -30, scale: 0.98, filter: 'blur(4px)', transition: { duration: 0.3, ease: "easeIn" as const } },
});

const wmV: Variants = {
  enter:  { opacity: 0, scale: 0.95, y: 10 },
  center: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT, delay: 0.1 } },
  exit:   { opacity: 0, scale: 1.02, y: -10, transition: { duration: 0.25 } },
};

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export function TeamSection() {
  const { language } = useLanguage();
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<Dir>(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((n: number, d: Dir) => { setDir(d); setActive(n); }, []);
  const prev = () => go((active - 1 + teamMembers.length) % teamMembers.length, -1);
  const next = () => go((active + 1) % teamMembers.length, 1);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go((active + 1) % teamMembers.length, 1), 6000);
    return () => clearTimeout(t);
  }, [active, paused, go]);

  const m = teamMembers[active];

  return (
    <section
      className="relative w-full mx-auto overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/60 font-sans"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 🎨 Ambient Background (Clean) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-100/60 dark:bg-blue-900/10 blur-[100px]" />
        <div className="absolute bottom-[5%] right-[5%] w-[300px] h-[300px] rounded-full bg-indigo-100/60 dark:bg-indigo-900/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      {/* ═══ SPLIT GRID ═══ */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto min-h-[min(88vh,760px)] py-20 lg:py-0">

          {/* ── LEFT PANEL (Text & Controls) ── */}
          <div className="flex flex-col justify-center relative lg:pr-12">
            
            {/* Ghost Number */}
            <div className="absolute top-0 right-0 lg:right-10 text-[100px] lg:text-[140px] font-black text-slate-100 dark:text-slate-800/50 leading-none select-none pointer-events-none -z-10 tracking-tighter">
              {String(active + 1).padStart(2, '0')}
            </div>

            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 text-sm font-semibold shadow-sm">
                <Sparkles className="w-4 h-4" />
                {language ? 'আমাদের এক্সপার্ট টিম' : 'Meet Our Experts'}
              </span>
            </div>

            {/* Animated Info */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={`info-${active}`}
                  custom={dir}
                  variants={infoV(dir)}
                  initial="enter" animate="center" exit="exit"
                  className="flex flex-col"
                >
                  <div className="inline-block self-start mb-4 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 text-[11px] font-bold tracking-widest uppercase">
                    {m.tag}
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05] mb-3">
                    {m.name.split(' ').map((word, i) => (
                      <span key={i} className="block">
                        {i === 0 ? word : <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 pb-1">{word}</span>}
                      </span>
                    ))}
                  </h2>

                  <p className="text-sm font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-5">
                    {m.role}
                  </p>

                  <div className="w-12 h-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mb-6" />

                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-[480px] mb-8">
                    {m.desc}
                  </p>

                  <div className="flex items-center gap-3 flex-wrap">
                    {[
                      { href: m.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                      { href: m.twitter,  Icon: Twitter,  label: 'Twitter' },
                      { href: m.mail,     Icon: Mail,     label: 'Email' },
                    ].map(({ href, Icon, label }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-sm"
                        title={label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                    
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
                      className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold tracking-wide hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md shadow-blue-600/20"
                    >
                      {language ? 'কানেক্ট করুন' : 'Connect'}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800/80">
              <div className="flex gap-2">
                {[
                  { fn: prev, icon: <ChevronLeft className="w-5 h-5" /> },
                  { fn: next, icon: <ChevronRight className="w-5 h-5" /> },
                ].map(({ fn, icon }, i) => (
                  <button key={i} onClick={fn} 
                    className="w-11 h-11 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
                  >
                    {icon}
                  </button>
                ))}
              </div>

              <span className="text-sm font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                {String(active + 1).padStart(2, '0')}
                <span className="mx-1.5 opacity-50">/</span>
                {String(teamMembers.length).padStart(2, '0')}
              </span>

              <div className="flex-1 h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden ml-2 max-w-[200px]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                  animate={{ width: `${((active + 1) / teamMembers.length) * 100}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" as const }}
                />
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL (Portrait) ── */}
          <div className="relative w-full h-[500px] lg:h-full min-h-[400px] flex items-center justify-center">

            {/* Watermark Name in Background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`wm-${active}`}
                  variants={wmV}
                  initial="enter" animate="center" exit="exit"
                  className="text-center font-black tracking-tighter leading-[0.85]"
                  style={{
                    fontSize: 'clamp(60px, 10vw, 140px)',
                    WebkitTextFillColor: 'transparent',
                    WebkitTextStroke: '1px rgba(100, 116, 139, 0.15)', // Slate-500 with low opacity
                  }}
                >
                  {m.name.split(' ').map((w, i) => <div key={i}>{w}</div>)}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Portrait Frame (Clean B2B Layout) */}
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`portrait-${active}`}
                custom={dir}
                variants={portraitV(dir)}
                initial="enter" animate="center" exit="exit"
                className="relative z-10 w-full max-w-[380px] aspect-[3/4] p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 dark:shadow-none"
              >
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={m.imgSrc}
                    alt={m.name}
                    fill
                    priority
                    sizes="(max-width:768px) 100vw, 40vw"
                    style={{
                      objectFit: 'cover',
                      objectPosition: m.imgPos,
                      transform: `scale(${m.imgZoom})`,
                      transformOrigin: 'top center',
                      transition: 'none',
                    }}
                  />
                  {/* Subtle inner shadow/gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>

      {/* ═══ AVATAR STRIP (Bottom) ═══ */}
      <div className="relative z-20 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 backdrop-blur-md py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex items-center gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide px-2">
            {teamMembers.map((tm, i) => {
              const isActive = i === active;
              return (
                <button 
                  key={i}
                  onClick={() => go(i, i > active ? 1 : -1)}
                  title={tm.name}
                  className="relative flex-shrink-0 focus:outline-none transition-all duration-300"
                  style={{
                    width: isActive ? 56 : 44, 
                    height: isActive ? 56 : 44,
                    opacity: isActive ? 1 : 0.4,
                    filter: isActive ? 'none' : 'grayscale(100%)'
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="avatar-ring"
                      className="absolute -inset-1.5 rounded-full border-2 border-blue-600 dark:border-blue-500 shadow-sm"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 border border-white dark:border-slate-700">
                    <Image
                      src={tm.imgSrc} 
                      alt={tm.name}
                      width={60} height={60}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: tm.imgPos }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}