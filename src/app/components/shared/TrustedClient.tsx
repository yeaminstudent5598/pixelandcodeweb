'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

/* ─── Accent color per client icon ───
   Each key maps to fully-static Tailwind class strings
   (kept static, not template-built, so Tailwind's JIT never purges them). */
type AccentColor =
  | 'orange'
  | 'rose'
  | 'teal'
  | 'sky'
  | 'indigo'
  | 'purple'
  | 'blue'
  | 'cyan'
  | 'violet';

const ACCENTS: Record<
  AccentColor,
  { iconBg: string; iconBorder: string; hoverBorder: string; hoverShadow: string; hoverText: string; tagHover: string }
> = {
  orange: {
    iconBg: 'bg-orange-50',
    iconBorder: 'border-orange-100',
    hoverBorder: 'group-hover:border-orange-300',
    hoverShadow: 'group-hover:shadow-[0_0_15px_rgba(249,115,22,0.25)]',
    hoverText: 'group-hover:text-orange-600',
    tagHover: 'group-hover:bg-orange-50 group-hover:border-orange-200 group-hover:text-orange-600',
  },
  rose: {
    iconBg: 'bg-rose-50',
    iconBorder: 'border-rose-100',
    hoverBorder: 'group-hover:border-rose-300',
    hoverShadow: 'group-hover:shadow-[0_0_15px_rgba(244,63,94,0.25)]',
    hoverText: 'group-hover:text-rose-600',
    tagHover: 'group-hover:bg-rose-50 group-hover:border-rose-200 group-hover:text-rose-600',
  },
  teal: {
    iconBg: 'bg-teal-50',
    iconBorder: 'border-teal-100',
    hoverBorder: 'group-hover:border-teal-300',
    hoverShadow: 'group-hover:shadow-[0_0_15px_rgba(20,184,166,0.25)]',
    hoverText: 'group-hover:text-teal-600',
    tagHover: 'group-hover:bg-teal-50 group-hover:border-teal-200 group-hover:text-teal-600',
  },
  sky: {
    iconBg: 'bg-sky-50',
    iconBorder: 'border-sky-100',
    hoverBorder: 'group-hover:border-sky-300',
    hoverShadow: 'group-hover:shadow-[0_0_15px_rgba(14,165,233,0.25)]',
    hoverText: 'group-hover:text-sky-600',
    tagHover: 'group-hover:bg-sky-50 group-hover:border-sky-200 group-hover:text-sky-600',
  },
  indigo: {
    iconBg: 'bg-indigo-50',
    iconBorder: 'border-indigo-100',
    hoverBorder: 'group-hover:border-indigo-300',
    hoverShadow: 'group-hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]',
    hoverText: 'group-hover:text-indigo-600',
    tagHover: 'group-hover:bg-indigo-50 group-hover:border-indigo-200 group-hover:text-indigo-600',
  },
  purple: {
    iconBg: 'bg-purple-50',
    iconBorder: 'border-purple-100',
    hoverBorder: 'group-hover:border-purple-300',
    hoverShadow: 'group-hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]',
    hoverText: 'group-hover:text-purple-600',
    tagHover: 'group-hover:bg-purple-50 group-hover:border-purple-200 group-hover:text-purple-600',
  },
  blue: {
    iconBg: 'bg-blue-50',
    iconBorder: 'border-blue-100',
    hoverBorder: 'group-hover:border-blue-300',
    hoverShadow: 'group-hover:shadow-[0_0_15px_rgba(59,130,246,0.25)]',
    hoverText: 'group-hover:text-blue-600',
    tagHover: 'group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-600',
  },
  cyan: {
    iconBg: 'bg-cyan-50',
    iconBorder: 'border-cyan-100',
    hoverBorder: 'group-hover:border-cyan-300',
    hoverShadow: 'group-hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]',
    hoverText: 'group-hover:text-cyan-600',
    tagHover: 'group-hover:bg-cyan-50 group-hover:border-cyan-200 group-hover:text-cyan-600',
  },
  violet: {
    iconBg: 'bg-violet-50',
    iconBorder: 'border-violet-100',
    hoverBorder: 'group-hover:border-violet-300',
    hoverShadow: 'group-hover:shadow-[0_0_15px_rgba(139,92,246,0.25)]',
    hoverText: 'group-hover:text-violet-600',
    tagHover: 'group-hover:bg-violet-50 group-hover:border-violet-200 group-hover:text-violet-600',
  },
};

type MarqueeItem = { name: string; category: string; icon: string; tag: string; accent: AccentColor };

/* ─── Marquee Data ─── */
const MARQUEE_DATA: {
  bn: { badge: string; title: string; subtitle: string; row1: MarqueeItem[]; row2: MarqueeItem[] };
  en: { badge: string; title: string; subtitle: string; row1: MarqueeItem[]; row2: MarqueeItem[] };
} = {
  bn: {
    badge: 'আমাদের গ্লোবাল নেটওয়ার্ক',
    title: 'বিশ্বস্ত ব্র্যান্ড ও পার্টনারসমূহ',
    subtitle:
      'আন্তর্জাতিক মানসম্পন্ন বিভিন্ন এন্টারপ্রাইজ ও টেকনোলজি স্টার্টআপের সাথে আমাদের সফল অংশীদারিত্ব',
    row1: [
      { name: 'TechCorp', category: 'এন্টারপ্রাইজ সলিউশন', icon: '⚡', tag: 'ইউএসএ', accent: 'orange' },
      { name: 'InnovateX', category: 'এআই রিসার্চ ল্যাব', icon: '🚀', tag: 'গ্লোবাল', accent: 'rose' },
      { name: 'DevStudio', category: 'প্রোডাক্ট ইঞ্জিনিয়ারিং', icon: '🎨', tag: 'ইউকে', accent: 'teal' },
      { name: 'NextGen', category: 'ক্লাউড সাস প্ল্যাটফর্ম', icon: '🌐', tag: 'জার্মানি', accent: 'sky' },
      { name: 'CloudScale', category: 'ডেভঅপ্স ইনফ্রাস্ট্রাকচার', icon: '☁️', tag: 'কানাডা', accent: 'indigo' },
    ],
    row2: [
      { name: 'DataPulse', category: 'বিগ ডাটা অ্যানালিটিক্স', icon: '📊', tag: 'সিঙ্গাপুর', accent: 'purple' },
      { name: 'CyberShield', category: 'সাইবার সিকিউরিটি', icon: '🛡️', tag: 'জাপান', accent: 'blue' },
      { name: 'Apex Digital', category: 'ফিনটেক ইঞ্জিন', icon: '💎', tag: 'ইউএই', accent: 'cyan' },
      { name: 'QuantumLabs', category: 'কোয়ান্টাম কম্পিউটিং', icon: '⚛️', tag: 'সুইজারল্যান্ড', accent: 'violet' },
      { name: 'FlowMotion', category: 'ইউআই/ইউএক্স প্রোটোটাইপিং', icon: '✨', tag: 'অস্ট্রেলিয়া', accent: 'orange' },
    ],
  },
  en: {
    badge: 'OUR GLOBAL NETWORK',
    title: 'Trusted by Industry Leaders',
    subtitle:
      'Empowering next-generation enterprises, startups, and innovative tech teams worldwide',
    row1: [
      { name: 'TechCorp', category: 'Enterprise Solutions', icon: '⚡', tag: 'USA', accent: 'orange' },
      { name: 'InnovateX', category: 'AI Research Lab', icon: '🚀', tag: 'Global', accent: 'rose' },
      { name: 'DevStudio', category: 'Product Engineering', icon: '🎨', tag: 'UK', accent: 'teal' },
      { name: 'NextGen', category: 'Cloud SaaS Platform', icon: '🌐', tag: 'Germany', accent: 'sky' },
      { name: 'CloudScale', category: 'DevOps Infra', icon: '☁️', tag: 'Canada', accent: 'indigo' },
    ],
    row2: [
      { name: 'DataPulse', category: 'Big Data Analytics', icon: '📊', tag: 'Singapore', accent: 'purple' },
      { name: 'CyberShield', category: 'Cyber Security', icon: '🛡️', tag: 'Japan', accent: 'blue' },
      { name: 'Apex Digital', category: 'Fintech Engine', icon: '💎', tag: 'UAE', accent: 'cyan' },
      { name: 'QuantumLabs', category: 'Quantum Computing', icon: '⚛️', tag: 'Switzerland', accent: 'violet' },
      { name: 'FlowMotion', category: 'UI/UX Prototyping', icon: '✨', tag: 'Australia', accent: 'orange' },
    ],
  },
};

export default function TrustedClient() {
  // LanguageContext exposes a boolean: false = English (default), true = Bangla
  const { language } = useLanguage();
  const isEn = !language;
  const currentLang = isEn ? 'en' : 'bn';
  const content = MARQUEE_DATA[currentLang];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* ─── Animations ─── */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-33.3333%); }
          100% { transform: translateX(0%); }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(24px, -18px) scale(1.06); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 38s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 44s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
        .bg-orb-1 { animation: floatOrb 12s ease-in-out infinite; }
        .bg-orb-2 { animation: floatOrb 14s ease-in-out infinite reverse; }

        .shine-badge {
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.22), transparent);
          background-size: 200% 100%;
          animation: shimmer 3.5s linear infinite;
        }
      `}</style>

      {/* ─── Background: soft light-blue glow, matching the reference CTA style ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* base soft radial wash */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(99,102,241,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_85%_100%,rgba(59,130,246,0.06),transparent)]" />
        {/* faint decorative dots, like the reference card */}
        <div className="absolute top-10 left-[12%] w-1.5 h-1.5 rounded-full bg-indigo-300/40" />
        <div className="absolute top-24 right-[18%] w-1.5 h-1.5 rounded-full bg-blue-300/40" />
        <div className="absolute bottom-16 left-[22%] w-1.5 h-1.5 rounded-full bg-indigo-300/30" />
        <div className="absolute bottom-10 right-[10%] w-2 h-2 rounded-full bg-blue-300/30" />
        {/* very subtle floating glow blobs */}
        <div className="bg-orb-1 absolute -top-16 left-1/4 w-[380px] h-[380px] bg-blue-300/15 rounded-full blur-[130px]" />
        <div className="bg-orb-2 absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-indigo-300/15 rounded-full blur-[140px]" />
        {/* thin top hairline like the reference card border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent" />
      </div>

      {/* ─── Header ─── */}
      <div className="max-w-3xl mx-auto px-6 text-center mb-14 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold tracking-widest text-indigo-600 bg-white border border-indigo-100 rounded-full uppercase mb-4 shadow-[0_2px_12px_rgba(99,102,241,0.15)] overflow-hidden"
        >
          <span className="shine-badge absolute inset-0" />
          {/* <Sparkles className="w-3.5 h-3.5 relative z-10 text-indigo-500" /> */}
          {/* <span className="relative z-10">{content.badge}</span> */}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-black tracking-tight text-slate-900"
        >
          {isEn ? (
            <>
              Trusted by{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </>
          ) : (
            <>
              বিশ্বস্ত{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ব্র্যান্ড ও পার্টনারসমূহ
              </span>
            </>
          )}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed"
        >
          {content.subtitle}
        </motion.p>
      </div>

      {/* ─── Double Row Marquee Track ─── */}
      <div className="relative w-full space-y-5 overflow-hidden [mask-image:linear-gradient(to_r,transparent,black_10%,black_90%,transparent)] z-10">
        <div className="animate-marquee-left gap-6 py-2">
          {[...content.row1, ...content.row1, ...content.row1].map((client, idx) => (
            <MarqueeCard key={`r1-${idx}`} client={client} />
          ))}
        </div>

        <div className="animate-marquee-right gap-6 py-2">
          {[...content.row2, ...content.row2, ...content.row2].map((client, idx) => (
            <MarqueeCard key={`r2-${idx}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Marquee Card (light theme, per-client accent color) ─── */
function MarqueeCard({ client }: { client: MarqueeItem }) {
  const c = ACCENTS[client.accent];

  return (
    <div
      className={`group relative flex items-center justify-between gap-5 px-6 py-4 rounded-2xl bg-white border border-slate-200 backdrop-blur-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer min-w-[280px] md:min-w-[310px] ${c.hoverBorder} ${c.hoverShadow}`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-xl border flex items-center justify-center text-2xl group-hover:scale-110 transition-all duration-300 shrink-0 ${c.iconBg} ${c.iconBorder}`}
        >
          {client.icon}
        </div>

        <div>
          <h3 className={`text-base font-bold text-slate-800 transition-colors ${c.hoverText}`}>
            {client.name}
          </h3>
          <p className="text-xs font-medium text-slate-500 group-hover:text-slate-600 transition-colors flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-slate-400" />
            {client.category}
          </p>
        </div>
      </div>

      <span
        className={`text-[10px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 border border-slate-200 transition-colors ${c.tagHover}`}
      >
        {client.tag}
      </span>
    </div>
  );
}