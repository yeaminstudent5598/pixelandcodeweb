'use client';

import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Linkedin, Twitter, Mail,
  ChevronLeft, ChevronRight, ArrowUpRight,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Brand blue (light blue gradient — no dark blue)
───────────────────────────────────────────── */
const BLUE_GRADIENT = 'linear-gradient(180deg, #38bdf8 0%, #3b82f6 100%)';
const BLUE_GRADIENT_H = 'linear-gradient(90deg, #0ea5e9 0%, #3b82f6 100%)';

/* ─────────────────────────────────────────────
   Team Data
   linkedin / twitter / mail e '#' mane link nei, oi icon dekhabe na.
   Real link boshale auto dekhabe. mail e shudhu email address likhben.
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
   Animations
───────────────────────────────────────────── */
type Dir = 1 | -1;
const EASE_OUT = [0.22, 1, 0.36, 1] as [number, number, number, number];

const infoV = (d: Dir): Variants => ({
  enter:  { opacity: 0, y: d * 20, filter: 'blur(4px)' },
  center: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: EASE_OUT, delay: 0.1 } },
  exit:   { opacity: 0, y: d * -15, filter: 'blur(2px)', transition: { duration: 0.25, ease: 'easeIn' as const } },
});

const portraitV = (d: Dir): Variants => ({
  enter:  { opacity: 0, x: d * 40, scale: 0.98, filter: 'blur(8px)' },
  center: { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.6, ease: EASE_OUT } },
  exit:   { opacity: 0, x: d * -30, scale: 0.98, filter: 'blur(4px)', transition: { duration: 0.3, ease: 'easeIn' as const } },
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

  // shudhu real link thakle icon dekhabe
  const socials = [
    { href: m.linkedin, Icon: Linkedin, label: 'LinkedIn' },
    { href: m.twitter, Icon: Twitter, label: 'Twitter' },
    { href: m.mail && m.mail !== '#' ? `mailto:${m.mail}` : '#', Icon: Mail, label: 'Email' },
  ].filter((s) => s.href && s.href !== '#');

  const hasLinkedin = m.linkedin && m.linkedin !== '#';

  return (
    <section
      className="relative w-full overflow-hidden bg-white dark:bg-[#050b16]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Container — navbar / hero er sathe same width & padding */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">

          {/* ── LEFT: Text & Controls ── */}
          <div className="relative flex flex-col justify-center">
            {/* Ghost number */}
            <div className="pointer-events-none absolute right-0 top-0 select-none text-[90px] font-black leading-none tracking-tighter text-slate-100 dark:text-white/[0.04] lg:text-[130px]">
              {String(active + 1).padStart(2, '0')}
            </div>

            <div className="relative">
              {/* Badge */}
              <span
                className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] backdrop-blur-md border border-[rgba(56,189,248,0.45)] bg-[rgba(255,255,255,0.75)] text-sky-700 dark:border-[rgba(56,189,248,0.35)] dark:bg-[rgba(56,189,248,0.12)] dark:text-sky-200"
              >
                Meet Our Experts
              </span>

              {/* Animated info */}
              <div className="mt-6 min-h-[300px]">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={`info-${active}`}
                    custom={dir}
                    variants={infoV(dir)}
                    initial="enter" animate="center" exit="exit"
                    className="flex flex-col"
                  >
                    {/* tag */}
                    <span className="mb-4 inline-block self-start rounded-md border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-sky-700 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-300">
                      {m.tag}
                    </span>

                    {/* name */}
                    <h2 className="mb-3 text-3xl font-semibold leading-[1.1] tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-[44px]">
                      {m.name.split(' ').map((word, i) => (
                        <span key={i} className="block">
                          {i === 0 ? (
                            word
                          ) : (
                            <span
                              className="bg-clip-text pb-1 text-transparent"
                              style={{ backgroundImage: BLUE_GRADIENT_H }}
                            >
                              {word}
                            </span>
                          )}
                        </span>
                      ))}
                    </h2>

                    {/* role */}
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 sm:text-[13px]">
                      {m.role}
                    </p>

                    <div className="mb-5 h-1 w-12 rounded-full" style={{ backgroundImage: BLUE_GRADIENT_H }} />

                    {/* desc */}
                    <p className="mb-7 max-w-[480px] text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                      {m.desc}
                    </p>

                    {/* socials + connect */}
                    {(socials.length > 0 || hasLinkedin) && (
                      <div className="flex flex-wrap items-center gap-3">
                        {socials.map(({ href, Icon, label }) => (
                          <a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto:') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            aria-label={`${m.name} on ${label}`}
                            title={label}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-300 dark:hover:border-sky-400/60 dark:hover:text-sky-300"
                          >
                            <Icon className="h-4 w-4" />
                          </a>
                        ))}

                        {hasLinkedin && (
                          <a
                            href={m.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                            style={{
                              background: BLUE_GRADIENT_H,
                              color: '#ffffff',
                              border: '1px solid rgba(255,255,255,0.6)',
                              boxShadow:
                                '0 10px 28px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.45)',
                            }}
                          >
                            Connect
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-7 dark:border-white/10">
                <div className="flex gap-2">
                  {[
                    { fn: prev, icon: <ChevronLeft className="h-5 w-5" />, label: 'Previous team member' },
                    { fn: next, icon: <ChevronRight className="h-5 w-5" />, label: 'Next team member' },
                  ].map(({ fn, icon, label }) => (
                    <button
                      key={label}
                      onClick={fn}
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:text-sky-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-300 dark:hover:border-sky-400/60 dark:hover:text-sky-300"
                    >
                      {icon}
                    </button>
                  ))}
                </div>

                <span className="text-sm font-bold tracking-wider text-slate-400 dark:text-slate-500">
                  {String(active + 1).padStart(2, '0')}
                  <span className="mx-1.5 opacity-50">/</span>
                  {String(teamMembers.length).padStart(2, '0')}
                </span>

                <div className="ml-1 h-1.5 max-w-[200px] flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundImage: BLUE_GRADIENT_H }}
                    animate={{ width: `${((active + 1) / teamMembers.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' as const }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Portrait ── */}
          <div className="relative flex min-h-[400px] w-full items-center justify-center lg:min-h-[520px]">
            {/* Watermark name */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`wm-${active}`}
                  variants={wmV}
                  initial="enter" animate="center" exit="exit"
                  className="text-center font-black leading-[0.85] tracking-tighter"
                  style={{
                    fontSize: 'clamp(56px, 9vw, 120px)',
                    WebkitTextFillColor: 'transparent',
                    WebkitTextStroke: '1px rgba(56, 189, 248, 0.22)',
                  }}
                >
                  {m.name.split(' ').map((w, i) => <div key={i}>{w}</div>)}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Portrait frame (glass) */}
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`portrait-${active}`}
                custom={dir}
                variants={portraitV(dir)}
                initial="enter" animate="center" exit="exit"
                className="relative z-10 aspect-[3/4] w-full max-w-[360px] rounded-[2.25rem] p-2 backdrop-blur-xl"
                style={{
                  border: '1px solid rgba(148,163,184,0.30)',
                  background: 'rgba(255,255,255,0.55)',
                  boxShadow:
                    '0 24px 60px rgba(59,130,246,0.18), inset 0 1px 0 rgba(255,255,255,0.8)',
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[1.75rem]">
                  {/* photo bg — light */}
                  <div
                    className="absolute inset-0 dark:hidden"
                    style={{
                      background:
                        'linear-gradient(160deg, #e8edff 0%, #e6f4ff 55%, #e4fbff 100%)',
                    }}
                  />
                  {/* photo bg — dark */}
                  <div
                    className="absolute inset-0 hidden dark:block"
                    style={{
                      background:
                        'linear-gradient(160deg, #0d1730 0%, #0a1c33 55%, #082231 100%)',
                    }}
                  />

                  <Image
                    src={m.imgSrc}
                    alt={m.name}
                    fill
                    sizes="(max-width:768px) 90vw, 360px"
                    style={{
                      objectFit: 'cover',
                      objectPosition: m.imgPos,
                      transform: `scale(${m.imgZoom})`,
                      transformOrigin: 'top center',
                      transition: 'none',
                    }}
                  />

                  {/* glass sheen */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 45%)',
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ═══ AVATAR STRIP ═══ */}
      <div className="relative z-20 border-t border-slate-200 bg-white/70 py-4 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03]">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div
            className="flex w-full items-center justify-start gap-3 overflow-x-auto px-2 py-2 md:justify-center md:gap-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {teamMembers.map((tm, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => go(i, i > active ? 1 : -1)}
                  title={tm.name}
                  aria-label={`Show ${tm.name}`}
                  aria-current={isActive ? 'true' : undefined}
                  className="relative flex-shrink-0 transition-all duration-300 focus:outline-none"
                  style={{
                    width: isActive ? 56 : 44,
                    height: isActive ? 56 : 44,
                    opacity: isActive ? 1 : 0.45,
                    filter: isActive ? 'none' : 'grayscale(100%)',
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="avatar-ring"
                      className="absolute -inset-1.5 rounded-full border-2 border-sky-500"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                  <div className="h-full w-full overflow-hidden rounded-full border border-white bg-slate-200 dark:border-white/20 dark:bg-slate-800">
                    <Image
                      src={tm.imgSrc}
                      alt=""
                      width={60}
                      height={60}
                      className="h-full w-full object-cover"
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