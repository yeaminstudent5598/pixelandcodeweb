'use client';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// ─── Portfolio Data ───────────────────────────────────────────────────────────
const portfolioItems = [
  { src: '/Demo_Work_01.jpg',  alt: 'Gadgets Social Media Post Design' },
  { src: '/Demo Work 02.jpg', alt: 'Food Delivery Social Media Post Design' },
  { src: '/part-03.jpg',      alt: 'Supershop Social Media Post Design' },
];

// item width (px) + gap (mx-4 = 16px × 2 = 32px)
const ITEM_W   = 360;
const GAP      = 32;
const ITEM_STEP = ITEM_W + GAP;
const TOTAL_W  = ITEM_STEP * portfolioItems.length;

// ─── 3D Tilt Card ─────────────────────────────────────────────────────────────
function TiltCard({ src, alt }: { src: string; alt: string }) {
  const ref  = useRef<HTMLDivElement>(null);
  const x    = useMotionValue(0);
  const y    = useMotionValue(0);
  const rotX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 300, damping: 30 });
  const rotY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 300, damping: 30 });

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
        perspective: 800,
      }}
      className="group relative cursor-pointer"
    >
      {/* Orange glow on hover */}
      <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-80" />

      {/* Card body */}
      <div
        className="relative overflow-hidden rounded-xl border border-white/5 bg-[#111111] shadow-2xl"
        style={{ transform: 'translateZ(0px)' }}
      >
        {/* Top bar — code editor accent */}
        <div className="flex items-center gap-1.5 border-b border-white/5 bg-[#0d0d0d] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-auto text-[10px] font-mono tracking-widest text-white/20 uppercase">
            preview
          </span>
        </div>

        {/* Image */}
        <div className="overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
          <Image
            src={src}
            alt={alt}
            width={600}
            height={800}
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Bottom label */}
        <div
          className="flex items-center justify-between border-t border-white/5 bg-[#0d0d0d] px-4 py-3"
          style={{ transform: 'translateZ(10px)' }}
        >
          <span className="text-[11px] font-mono text-white/30 tracking-wide">{alt}</span>
          <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-orange-500">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
            Live
          </span>
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
    <section className="relative w-full overflow-hidden bg-[#080808] py-24 sm:py-32">

      {/* ── Background grid ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(249,115,22,0.6) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(249,115,22,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Radial orange glow (center) ── */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/5 blur-3xl" />

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-4">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            {language ? 'পোর্টফোলিও' : 'Portfolio'}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-center text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          {language ? (
            <>আমাদের তৈরি কিছু <span className="text-orange-500">বিজ্ঞাপন!</span></>
          ) : (
            <>Some of Our <span className="text-orange-500">Created Ads!</span></>
          )}
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-14 max-w-xl text-center text-sm text-white/40 md:text-base"
        >
          {language
            ? 'প্রতিটি ডিজাইন পেশাদারভাবে তৈরি — ব্র্যান্ড পরিচিতি থেকে বিক্রয় বৃদ্ধি পর্যন্ত।'
            : 'Every design crafted professionally — from brand awareness to driving real sales.'}
        </motion.p>
      </div>

      {/* ── Carousel ── */}
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#080808] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#080808] to-transparent" />

      <div
        className="relative z-10 w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex"
          animate={{ x: paused ? undefined : [0, -TOTAL_W] }}
          transition={{
            ease: 'linear',
            duration: 22,
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
              <TiltCard src={item.src} alt={item.alt} />
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
              <TiltCard src={item.src} alt={item.alt} />
            </div>
          ))}

          {/* Second duplicate for longer loops (3 items = very short) */}
          {portfolioItems.map((item, i) => (
            <div
              key={`dup2-${i}`}
              className="mx-4 flex-shrink-0"
              style={{ width: `${ITEM_W}px`, perspective: '1000px' }}
              aria-hidden="true"
            >
              <TiltCard src={item.src} alt={item.alt} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom CTA strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 mt-14 flex justify-center"
      >
        <a
          href="#portfolio"
          className="group inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-7 py-3 text-sm font-semibold text-orange-400 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.35)]"
        >
          {language ? 'সব কাজ দেখুন' : 'View All Work'}
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}