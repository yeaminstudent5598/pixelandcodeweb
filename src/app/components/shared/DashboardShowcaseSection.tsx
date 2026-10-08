'use client';

import React, { useId } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import {
  Check,
  ShieldCheck,
  Sparkles,
  Globe,
  Code2,
  Database,
  Cloud,
  Layers,
  Smartphone,
  Search,
  Lock,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Brand blue (light blue gradient — no dark blue)
───────────────────────────────────────────── */
const BLUE_GRADIENT = 'linear-gradient(180deg, #38bdf8 0%, #3b82f6 100%)';
const BLUE_GRADIENT_H = 'linear-gradient(90deg, #0ea5e9 0%, #3b82f6 100%)';

/* ─────────────────────────────────────────────
   Content (ekhan theke easily change korben)
───────────────────────────────────────────── */
const FEATURES = [
  'Built with Next.js & React',
  'Responsive on every device',
  'SEO-ready from day one',
  'Ongoing support & maintenance',
];

// Mockup er sample number — eta illustration, real number boshaben
const METRICS = [
  {
    label: 'Performance',
    value: '96',
    suffix: '/100',
    points: [26, 22, 24, 18, 20, 14, 17, 11, 13, 8],
  },
  {
    label: 'SEO score',
    value: '92',
    suffix: '/100',
    points: [28, 25, 27, 21, 23, 17, 19, 15, 12, 10],
  },
];

const FADED_METRICS = ['Visitors', 'Leads'];

const TECH_ICONS = [Code2, Database, Cloud, Layers, Smartphone, Search, Lock];

/* ─────────────────────────────────────────────
   Animation
───────────────────────────────────────────── */
const leftV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemV: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

/* ─────────────────────────────────────────────
   Glass panel (light + dark)
───────────────────────────────────────────── */
function Panel({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 ${className}`}
    >
      <div
        className="absolute inset-0 dark:hidden"
        style={{ background: 'rgba(255,255,255,0.80)' }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Sparkline
───────────────────────────────────────────── */
function Sparkline({ points }: { points: number[] }) {
  const gid = useId();
  const w = 120;
  const h = 36;
  const step = w / (points.length - 1);

  const line = points
    .map((y, i) => `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(1)},${y}`)
    .join(' ');
  const area = `${line} L${w},${h} L0,${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-9 w-[110px] sm:w-[130px]" aria-hidden="true">
      <defs>
        <linearGradient id={`${gid}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gid}-fill)`} />
      <motion.path
        d={line}
        fill="none"
        stroke="#0ea5e9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Section
───────────────────────────────────────────── */
export function DashboardShowcaseSection() {
  const reduce = useReducedMotion();
  const frameId = useId();

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 dark:bg-[#050b16] md:py-24">
      {/* Container — navbar / hero er sathe same width & padding */}
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-12">
        {/* ════ LEFT ════ */}
        <motion.div
          variants={leftV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-[560px]"
        >
          {/* eyebrow */}
          <motion.p
            variants={itemV}
            className="text-[15px] font-semibold text-slate-900 dark:text-white"
          >
            Web apps built to{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: BLUE_GRADIENT_H }}
            >
              scale
            </span>
          </motion.p>

          {/* heading */}
          <motion.h2
            variants={itemV}
            className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-slate-900 dark:text-white sm:text-4xl lg:text-[44px]"
          >
            Websites &amp; web apps for more speed and control
          </motion.h2>

          {/* features */}
          <motion.ul variants={itemV} className="mt-7 space-y-3">
            {FEATURES.map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 text-[15px] text-slate-700 dark:text-slate-300"
              >
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: BLUE_GRADIENT }}
                >
                  <Check className="h-3 w-3" color="#ffffff" strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </motion.ul>

          {/* button */}
          <motion.div variants={itemV}>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              style={{
                background: BLUE_GRADIENT_H,
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow:
                  '0 10px 28px rgba(59,130,246,0.38), inset 0 1px 0 rgba(255,255,255,0.45)',
              }}
            >
              Start your project
            </Link>
          </motion.div>

          {/* guarantee line */}
          <motion.p
            variants={itemV}
            className="mt-4 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
          >
            <ShieldCheck className="h-4 w-4 text-sky-500" />
            Free consultation, no commitment
          </motion.p>
        </motion.div>

        {/* ════ RIGHT: dashboard mockup ════ */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[640px] px-3 pt-14 sm:px-6 lg:ml-auto lg:mr-0"
        >
          {/* chamfered outline frame */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={`${frameId}-stroke`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <polygon
              points="0,9 62,9 66,13 100,13 100,78 95,83 95,100 6,100 0,94"
              fill="rgba(56,189,248,0.06)"
              stroke={`url(#${frameId}-stroke)`}
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* floating badge (top right) */}
          <motion.div
            animate={reduce ? {} : { y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="absolute right-4 top-0 z-20 sm:right-8"
          >
            <div
              className="relative flex h-[76px] w-[104px] flex-col items-center justify-center gap-1 overflow-hidden rounded-xl backdrop-blur-xl"
              style={{
                border: '1px solid rgba(56,189,248,0.7)',
                boxShadow: '0 18px 40px rgba(59,130,246,0.30)',
              }}
            >
              <div
                className="absolute inset-0 dark:hidden"
                style={{ background: 'rgba(255,255,255,0.92)' }}
              />
              <div
                className="absolute inset-0 hidden dark:block"
                style={{ background: 'rgba(8,20,31,0.92)' }}
              />
              <Code2 className="relative h-5 w-5 text-sky-500" />
              <span className="relative text-[13px] font-bold tracking-wide text-slate-900 dark:text-white">
                Next.js
              </span>
            </div>
          </motion.div>

          {/* sparkle button (right side) */}
          <div
            className="absolute right-0 top-[40%] z-20 flex h-11 w-11 items-center justify-center rounded-xl backdrop-blur-xl sm:right-1"
            style={{
              background: BLUE_GRADIENT,
              border: '1px solid rgba(255,255,255,0.6)',
              boxShadow: '0 12px 28px rgba(59,130,246,0.38)',
            }}
          >
            <Sparkles className="h-5 w-5" color="#ffffff" />
          </div>

          {/* main card */}
          <div
            className="relative z-10 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
            style={{
              boxShadow: '0 28px 70px rgba(15,23,42,0.16)',
              WebkitMaskImage:
                'linear-gradient(to bottom, #000 78%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, #000 78%, transparent 100%)',
            }}
          >
            {/* card bg */}
            <div
              className="absolute inset-0 dark:hidden"
              style={{
                background:
                  'linear-gradient(160deg, #f4f8ff 0%, #eaf6ff 55%, #e9fbff 100%)',
              }}
            />
            <div
              className="absolute inset-0 hidden dark:block"
              style={{
                background:
                  'linear-gradient(160deg, #0d1730 0%, #0a1c33 55%, #082231 100%)',
              }}
            />

            <div className="relative space-y-3 p-4 sm:space-y-4 sm:p-5">
              {/* project status */}
              <Panel className="px-4 py-3.5">
                <div className="flex items-center gap-3.5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: BLUE_GRADIENT }}
                  >
                    <Globe className="h-5 w-5" color="#ffffff" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                      pixelandcode.agency
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Production
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                        Live
                      </span>
                    </div>
                  </div>
                </div>
              </Panel>

              {/* tech row */}
              <Panel className="px-3 py-4 sm:px-5">
                <div className="flex items-center justify-between gap-2">
                  {TECH_ICONS.map((Icon, i) => (
                    <Icon
                      key={i}
                      className="h-6 w-6 shrink-0 text-slate-500 dark:text-slate-300 sm:h-7 sm:w-7"
                      strokeWidth={1.5}
                    />
                  ))}
                  <span className="flex shrink-0 gap-1" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-white/25" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-white/25" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-white/25" />
                  </span>
                </div>
              </Panel>

              {/* metrics */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {METRICS.map((m) => (
                  <Panel key={m.label} className="px-4 py-4">
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {m.label}
                        </p>
                        <p className="mt-1.5 text-xl font-semibold text-slate-900 dark:text-white">
                          {m.value}
                          <span className="ml-0.5 text-xs font-medium text-slate-400">
                            {m.suffix}
                          </span>
                        </p>
                      </div>
                      <Sparkline points={m.points} />
                    </div>
                  </Panel>
                ))}

                {/* faded rows (niche fade hoye jabe) */}
                {FADED_METRICS.map((label) => (
                  <Panel key={label} className="px-4 py-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {label}
                    </p>
                    <div className="mt-2 h-2.5 w-16 rounded-full bg-slate-200 dark:bg-white/10" />
                  </Panel>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DashboardShowcaseSection;