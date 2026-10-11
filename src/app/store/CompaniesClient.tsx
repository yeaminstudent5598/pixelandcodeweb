'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

/* ─────────────────────────────────────────────
   Brand blue (light blue gradient — no dark blue)
───────────────────────────────────────────── */
const BLUE_GRADIENT = 'linear-gradient(180deg, #38bdf8 0%, #3b82f6 100%)';
const BLUE_GRADIENT_H = 'linear-gradient(90deg, #0ea5e9 0%, #3b82f6 100%)';
const CTA_GRADIENT = 'linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)';
const GLASS_SHEEN =
  'linear-gradient(135deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0) 70%)';

/* ─────────────────────────────────────────────
   Companies
   - href dile card e "Visit website" link ashbe (na dile ashbe na)
   - TODO likha gulo apni nijer moto thik kore nien
───────────────────────────────────────────── */
type Company = {
  name: string;
  category: string;
  description: string;
  logo: string;
  href?: string;
};

const COMPANIES: Company[] = [
  {
    name: 'Guptodhan',
    category: 'E-commerce',
    description:
      'A multi-vendor e-commerce platform where many sellers list and sell their products in one marketplace.',
    logo: '/ourclients/company6.avif',
    href: 'https://guptodhan.com',
    
 
  },
  {
    name: 'Pilot Natural Tea',
    category: 'E-commerce',
    description:
      'A modern e-commerce website for a Bangladeshi tea brand, designed to showcase products and take orders online.',
    logo: '/ourclients/company8.jpg',
  },
  {
    name: 'Chapaghor',
    category: 'E-commerce',
    description: 'An e-commerce platform for print services, built with Next.js.',
    logo: '/ourclients/company3.webp',
  },
  // TODO: description thik kore nien
  {
    name: 'Taiba Online Mall',
    category: 'E-commerce',
    description:
      'An online mall website where customers can browse and shop products.',
    logo: '/ourclients/company5.webp',
  },
  {
    name: 'ModaSource International',
    category: 'Corporate',
    description: 'A corporate website for an apparel sourcing company.',
    logo: '/ourclients/company4.png',
  },
  // TODO: description thik kore nien
  {
    name: 'Midify Academy',
    category: 'Education',
    description: 'A website and digital presence for an online academy.',
    logo: '/ourclients/comapany1.webp',
  },
  // TODO: description thik kore nien
  {
    name: 'Timetorol',
    category: 'Branding',
    description: 'A brand website built by Pixel & Code.',
    logo: '/ourclients/company2.png',
  },
  // company7.svg blank render hocche, tai list e nei.
];

const STATS = [
  { num: '50+', label: 'Projects' },
  { num: '10+', label: 'Clients' },
  { num: '2.5+', label: 'Years' },
];

/* ─────────────────────────────────────────────
   Logo: charpashe faka jayga kete same size e dekhay
───────────────────────────────────────────── */
const MAX_SIDE = 800;

function loadAndTrim(src: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const img = new window.Image();

    img.onerror = () => reject(new Error(`Failed to load ${src}`));

    img.onload = () => {
      if (src.toLowerCase().endsWith('.svg')) return resolve(src);

      try {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        if (!w || !h) return resolve(src);

        const ratio = Math.min(1, MAX_SIDE / Math.max(w, h));
        const cw = Math.round(w * ratio);
        const ch = Math.round(h * ratio);

        const canvas = document.createElement('canvas');
        canvas.width = cw;
        canvas.height = ch;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return resolve(src);

        ctx.drawImage(img, 0, 0, cw, ch);
        const { data } = ctx.getImageData(0, 0, cw, ch);

        let minX = cw;
        let minY = ch;
        let maxX = -1;
        let maxY = -1;

        for (let y = 0; y < ch; y++) {
          for (let x = 0; x < cw; x++) {
            const i = (y * cw + x) * 4;
            if (data[i + 3] < 20) continue;
            if (data[i] > 242 && data[i + 1] > 242 && data[i + 2] > 242) continue;

            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }

        if (maxX < 0 || maxY < 0) return resolve(src);

        const pad = 2;
        const sx = Math.max(0, minX - pad);
        const sy = Math.max(0, minY - pad);
        const sw = Math.min(cw - sx, maxX - minX + 1 + pad * 2);
        const sh = Math.min(ch - sy, maxY - minY + 1 + pad * 2);

        if (sw < 8 || sh < 8) return resolve(src);

        const out = document.createElement('canvas');
        out.width = sw;
        out.height = sh;
        const outCtx = out.getContext('2d');
        if (!outCtx) return resolve(src);

        outCtx.drawImage(canvas, sx, sy, sw, sh, 0, 0, sw, sh);
        resolve(out.toDataURL('image/png'));
      } catch {
        resolve(src);
      }
    };

    img.src = src;
  });
}

function CompanyLogo({ src, name }: { src: string; name: string }) {
  const [url, setUrl] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;

    loadAndTrim(src)
      .then((u) => {
        if (alive) setUrl(u);
      })
      .catch(() => {
        if (alive) setFailed(true);
      });

    return () => {
      alive = false;
    };
  }, [src]);

  // logo load na hole company nam er prothom okkhor dekhabe
  if (failed) {
    return (
      <span
        className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-semibold"
        style={{ background: BLUE_GRADIENT, color: '#ffffff' }}
        aria-label={name}
      >
        {name.charAt(0)}
      </span>
    );
  }

  if (!url) {
    return <span className="h-10 w-24 animate-pulse rounded-md bg-slate-100" />;
  }

  return (
    <img
      src={url}
      alt={`${name} logo`}
      draggable={false}
      className="max-h-14 max-w-[72%] select-none object-contain transition-transform duration-300 group-hover:scale-105"
    />
  );
}

/* ─────────────────────────────────────────────
   Animation
───────────────────────────────────────────── */
const heroV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemV: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const gridV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function CompaniesClient() {
  return (
    <main className="relative w-full overflow-hidden bg-white dark:bg-[#050b16]">
      {/* one soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(56,189,248,0.16) 0%, rgba(56,189,248,0) 70%)',
        }}
      />

      {/* Container — navbar / hero er sathe same width & padding */}
      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* ═════════ HERO ═════════ */}
        <motion.section
          variants={heroV}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl pb-12 pt-32 text-center sm:pt-36 md:pb-16"
        >
          <motion.span
            variants={itemV}
            className="inline-flex items-center rounded-full border border-[rgba(56,189,248,0.45)] bg-[rgba(255,255,255,0.75)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-sky-700 backdrop-blur-md dark:border-[rgba(56,189,248,0.35)] dark:bg-[rgba(56,189,248,0.12)] dark:text-sky-200"
          >
            Our Companies
          </motion.span>

          <motion.h1
            variants={itemV}
            className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[46px]"
            style={{ textWrap: 'balance' }}
          >
            Companies we&apos;ve{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: BLUE_GRADIENT_H }}
            >
              worked with
            </span>
          </motion.h1>

          <motion.p
            variants={itemV}
            className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-slate-600 dark:text-slate-400 sm:text-base"
          >
            From online stores to education and corporate websites, these are
            the brands that trust Pixel &amp; Code with their digital presence.
          </motion.p>

          {/* stats */}
          <motion.dl
            variants={itemV}
            className="mx-auto mt-9 grid max-w-md grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white/70 py-4 backdrop-blur-md dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.04]"
          >
            {STATS.map((s) => (
              <div key={s.label} className="px-3">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  {s.num}
                </dd>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.dl>
        </motion.section>

        {/* ═════════ GRID ═════════ */}
        <motion.ul
          variants={gridV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 pb-20 sm:grid-cols-2 lg:grid-cols-4 md:pb-28"
        >
          {COMPANIES.map((c) => (
            <motion.li
              key={c.name}
              variants={itemV}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_18px_44px_rgba(59,130,246,0.14)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/50"
            >
              {/* logo tile (always white, jate dark logo-o dekha jay) */}
              <div className="m-3 flex h-28 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                <CompanyLogo src={c.logo} name={c.name} />
              </div>

              <div className="flex flex-1 flex-col px-5 pb-5 pt-2">
                <span className="inline-flex w-fit items-center rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
                  {c.category}
                </span>

                <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900 dark:text-white">
                  {c.name}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {c.description}
                </p>

                {c.href && (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-300"
                  >
                    Visit website
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.li>
          ))}

          {/* CTA card (grid er last slot) */}
          <motion.li
            variants={itemV}
            className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl p-6"
            style={{
              background: CTA_GRADIENT,
              border: '1px solid rgba(255,255,255,0.55)',
              boxShadow:
                '0 24px 60px rgba(59,130,246,0.30), inset 0 1px 0 rgba(255,255,255,0.5)',
            }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: GLASS_SHEEN }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-12 h-44 w-44 rounded-full"
              style={{ border: '30px solid rgba(255,255,255,0.14)' }}
            />

            <span
              className="relative flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                background: 'rgba(255,255,255,0.22)',
                border: '1px solid rgba(255,255,255,0.5)',
              }}
            >
              <ArrowUpRight className="h-5 w-5" color="#ffffff" />
            </span>

            <div className="relative">
              <h3
                className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl"
                style={{ color: '#ffffff' }}
              >
                Your brand could be next
              </h3>
              <p
                className="mt-2 text-sm leading-6"
                style={{ color: 'rgba(255,255,255,0.92)' }}
              >
                Tell us about your project and we will get back with a clear
                plan.
              </p>

              <Link
                href="/contact"
                className="group/cta mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: '#ffffff',
                  color: '#1d6fd8',
                  boxShadow: '0 12px 30px rgba(15,23,42,0.20)',
                }}
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
              </Link>
            </div>
          </motion.li>
        </motion.ul>
      </div>
    </main>
  );
}