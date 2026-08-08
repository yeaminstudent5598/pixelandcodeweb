'use client';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import Link from 'next/link';

// ─── Portfolio Data ───────────────────────────────────────────────────────────
const portfolioItems = [
  { src: '/Demo_Work_01.jpg',  alt: 'Gadgets Social Media Post Design', category: 'Social Media' },
  { src: '/Demo Work 02.jpg', alt: 'Food Delivery Social Media Post Design', category: 'Branding' },
  { src: '/part-03.jpg',      alt: 'Supershop Social Media Post Design', category: 'Digital Ads' },
];

// item width (px) + gap (mx-4 = 16px × 2 = 32px)
const ITEM_W   = 380;
const GAP      = 32;
const ITEM_STEP = ITEM_W + GAP;
const TOTAL_W  = ITEM_STEP * portfolioItems.length;

// ─── Clean 3D Tilt Card ─────────────────────────────────────────────────────────────
function TiltCard({ src, alt, category }: { src: string; alt: string, category: string }) {
  const ref  = useRef<HTMLDivElement>(null);
  const x    = useMotionValue(0);
  const y    = useMotionValue(0);
  
  // Subtle 3D rotation for a premium corporate feel
  const rotX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width  - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: rotX,
        rotateY: rotY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className="group relative cursor-pointer"
    >
      {/* Card body - Clean White / Slate Dark */}
      <div
        className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none p-3 transition-colors duration-300 group-hover:border-blue-200 dark:group-hover:border-blue-800"
        style={{ transform: 'translateZ(0px)' }}
      >
        {/* Image Wrapper */}
        <div 
          className="relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800" 
          style={{ transform: 'translateZ(20px)' }}
        >
          <Image
            src={src}
            alt={alt}
            width={600}
            height={800}
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Bottom Content */}
        <div
          className="mt-4 mb-2 px-2 flex flex-col gap-1"
          style={{ transform: 'translateZ(30px)' }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {category}
            </span>
            <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-blue-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1">
            {alt}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function PortfolioSection() {
  const { language } = useLanguage();
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-slate-950 py-24 sm:py-32">

      {/* ── Background Patterns ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-[120px]" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      {/* ── Content Header ── */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            {language ? 'আমাদের পোর্টফোলিও' : 'Our Portfolio'}
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
          >
            {language ? (
              <>আমাদের তৈরি কিছু <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">সাফল্যের গল্প</span></>
            ) : (
              <>Discover Our Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Success Stories</span></>
            )}
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 font-medium"
          >
            {language
              ? 'প্রতিটি প্রজেক্ট আমরা এমনভাবে ডিজাইন করি যা শুধুমাত্র দেখতেই সুন্দর নয়, বরং আপনার ব্যবসার প্রকৃত ফলাফল নিয়ে আসে।'
              : 'Every project is crafted professionally — not just to look beautiful, but to drive real business results and sales.'}
          </motion.p>
        </div>
      </div>

      {/* ── Infinite Carousel ── */}
      <div className="relative z-10 w-full overflow-hidden py-4">
        {/* Edge fade masks for clean blending */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 md:w-48 bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 md:w-48 bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="flex"
            animate={{ x: paused ? undefined : [0, -TOTAL_W] }}
            transition={{
              ease: 'linear',
              duration: 25, // Adjusted for a smooth, readable speed
              repeat: Infinity,
            }}
            style={paused ? { x: 0 } : {}}
          >
            {/* Original set */}
            {portfolioItems.map((item, i) => (
              <div
                key={`item-${i}`}
                className="mx-4 flex-shrink-0"
                style={{ width: `${ITEM_W}px`, perspective: '1000px' }}
              >
                <TiltCard src={item.src} alt={item.alt} category={item.category} />
              </div>
            ))}

            {/* Duplicate for seamless loop */}
            {portfolioItems.map((item, i) => (
              <div
                key={`dup-${i}`}
                className="mx-4 flex-shrink-0"
                style={{ width: `${ITEM_W}px`, perspective: '1000px' }}
                aria-hidden="true"
              >
                <TiltCard src={item.src} alt={item.alt} category={item.category} />
              </div>
            ))}

            {/* Second duplicate for longer screens */}
            {portfolioItems.map((item, i) => (
              <div
                key={`dup2-${i}`}
                className="mx-4 flex-shrink-0"
                style={{ width: `${ITEM_W}px`, perspective: '1000px' }}
                aria-hidden="true"
              >
                <TiltCard src={item.src} alt={item.alt} category={item.category} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Bottom CTA Button ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 mt-16 flex justify-center"
      >
        <Link href="/portfolio">
          <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 border border-transparent rounded-full hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40">
            {language ? 'সম্পূর্ণ পোর্টফোলিও দেখুন' : 'View Full Portfolio'}
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
      </motion.div>
    </section>
  );
}