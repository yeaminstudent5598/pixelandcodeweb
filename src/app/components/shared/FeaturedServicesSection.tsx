'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight, Camera, Palette, Share2, Sparkles, ArrowRight } from 'lucide-react';

/* ─────────────────────────────────────────────
   Styles
───────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  .fss-display { font-family: 'Syne', sans-serif !important; }
  .fss-body    { font-family: 'DM Sans', sans-serif; }

  @keyframes fss-gradX  { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  @keyframes fss-pulse  { 0%,100%{box-shadow:0 0 0 0 rgba(249,115,22,.5)} 50%{box-shadow:0 0 0 8px rgba(249,115,22,0)} }
  @keyframes fss-shimmer {
    0%   { transform: translateX(-100%) skewX(-12deg); }
    100% { transform: translateX(250%)  skewX(-12deg); }
  }

  .fss-text-grad {
    background: linear-gradient(135deg, #f97316 0%, #ef4444 45%, #f59e0b 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fss-gradX 5s ease infinite;
  }
  .fss-grid {
    background-image:
      linear-gradient(rgba(249,115,22,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(249,115,22,.04) 1px, transparent 1px);
    background-size: 56px 56px;
  }

  /* Card */
  .fss-card {
    position: relative;
    background: rgba(255,255,255,.025);
    border: 1px solid rgba(255,255,255,.07);
    border-radius: 24px;
    overflow: hidden;
    display: flex; flex-direction: column;
    transition: border-color .3s, transform .3s, box-shadow .3s;
    cursor: default;
  }
  .fss-card:hover {
    border-color: rgba(249,115,22,.3);
    transform: translateY(-6px);
    box-shadow: 0 24px 64px rgba(0,0,0,.4), 0 0 0 1px rgba(249,115,22,.1);
  }
  .fss-card:hover .fss-card-img {
    transform: scale(1.07);
  }
  .fss-card:hover .fss-icon-wrap {
    transform: scale(1.1) rotate(-6deg);
  }
  .fss-card:hover .fss-arrow {
    transform: rotate(45deg);
  }
  .fss-card:hover .fss-shimmer {
    animation: fss-shimmer .7s ease forwards;
  }

  .fss-card-img    { transition: transform .6s cubic-bezier(.25,.46,.45,.94); }
  .fss-icon-wrap   { transition: transform .3s; }
  .fss-arrow       { transition: transform .3s; }

  /* CTA button */
  .fss-cta {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 14px 28px; border-radius: 9999px;
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(255,255,255,.1);
    color: #d1d5db; font-size: 15px; font-weight: 500;
    text-decoration: none; backdrop-filter: blur(8px);
    transition: border-color .2s, color .2s, background .2s, transform .2s;
    cursor: pointer;
  }
  .fss-cta:hover {
    border-color: rgba(249,115,22,.45);
    color: #fff; background: rgba(249,115,22,.07);
    transform: translateY(-2px);
  }
  .fss-cta-primary {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 14px 28px; border-radius: 9999px;
    background: #ea580c; color: #fff;
    font-size: 15px; font-weight: 800;
    text-decoration: none;
    transition: background .2s, box-shadow .3s, transform .2s;
    cursor: pointer; border: none;
  }
  .fss-cta-primary:hover {
    background: #f97316;
    box-shadow: 0 0 48px rgba(249,115,22,.45);
    transform: translateY(-2px);
  }
`;

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
type ServiceItem = {
  src: string;
  alt: string;
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  link: string;
  accent: string;
  accentBg: string;
  tag: string;
};

const DATA_BN: ServiceItem[] = [
  {
    src: '/Service-01.jpg', alt: 'Product Photography',
    icon: <Camera style={{ width: 18, height: 18, color: '#fff' }} />,
    title: 'প্রোডাক্ট ফটোগ্রাফি',
    price: '৪৯৯',
    description: 'হাই-কোয়ালিটি ছবির মাধ্যমে আপনার পণ্যের আসল সৌন্দর্য তুলে ধরুন। ই-কমার্স ব্যবসার জন্য অপরিহার্য।',
    link: '/services/photography',
    accent: '#60a5fa', accentBg: 'rgba(59,130,246,.15)',
    tag: 'ফটোগ্রাফি',
  },
  {
    src: '/Service-02.jpg', alt: 'Social Media Design',
    icon: <Share2 style={{ width: 18, height: 18, color: '#fff' }} />,
    title: 'সোশ্যাল মিডিয়া ডিজাইন',
    price: '৪৯৯',
    description: 'আকর্ষণীয় পোস্টার ডিজাইনের মাধ্যমে আপনার ব্র্যান্ড ভ্যালু এবং কাস্টমার এঙ্গেজমেন্ট বাড়ান।',
    link: '/services/social-media',
    accent: '#f97316', accentBg: 'rgba(249,115,22,.15)',
    tag: 'ডিজাইন',
  },
  {
    src: '/Service-03.jpg', alt: 'Logo Design',
    icon: <Palette style={{ width: 18, height: 18, color: '#fff' }} />,
    title: 'লোগো ও ব্র্যান্ডিং',
    price: '৯৯৯',
    description: 'আপনার ব্যবসার পরিচয়ের জন্য একটি প্রফেশনাল এবং ইউনিক লোগো ডিজাইন করিয়ে নিন।',
    link: '/services/logo-design',
    accent: '#c084fc', accentBg: 'rgba(192,132,252,.15)',
    tag: 'ব্র্যান্ডিং',
  },
];

const DATA_EN: ServiceItem[] = [
  {
    src: '/Service-01.jpg', alt: 'Product Photography',
    icon: <Camera style={{ width: 18, height: 18, color: '#fff' }} />,
    title: 'Product Photography',
    price: '499',
    description: 'Showcase your products with studio-quality photography. Designed to convert browsers into buyers.',
    link: '/services/photography',
    accent: '#60a5fa', accentBg: 'rgba(59,130,246,.15)',
    tag: 'Photography',
  },
  {
    src: '/Service-02.jpg', alt: 'Social Media Design',
    icon: <Share2 style={{ width: 18, height: 18, color: '#fff' }} />,
    title: 'Social Media Design',
    price: '499',
    description: 'Boost your brand value and customer engagement with eye-catching design assets for every platform.',
    link: '/services/social-media',
    accent: '#f97316', accentBg: 'rgba(249,115,22,.15)',
    tag: 'Design',
  },
  {
    src: '/Service-03.jpg', alt: 'Logo Design',
    icon: <Palette style={{ width: 18, height: 18, color: '#fff' }} />,
    title: 'Logo & Branding',
    price: '999',
    description: 'Get a professional, unique logo and full brand identity that sets your business apart.',
    link: '/services/logo-design',
    accent: '#c084fc', accentBg: 'rgba(192,132,252,.15)',
    tag: 'Branding',
  },
];

/* ─────────────────────────────────────────────
   Service Card
───────────────────────────────────────────── */
function ServiceCard({ item, index, language }: { item: ServiceItem; index: number; language: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <div className="fss-card fss-body" style={{ height: '100%' }}>

        {/* ── Image ── */}
        <div style={{ position: 'relative', height: 240, overflow: 'hidden', flexShrink: 0 }}>
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="fss-card-img"
            style={{ objectFit: 'cover' }}
          />

          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(5,5,5,.85) 0%, rgba(5,5,5,.2) 50%, transparent 100%)',
          }} />

          {/* Shimmer sweep */}
          <div className="fss-shimmer" style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,.06), transparent)',
            transform: 'translateX(-100%) skewX(-12deg)',
            pointerEvents: 'none',
          }} />

          {/* Tag pill */}
          <div style={{
            position: 'absolute', top: 14, left: 14,
            padding: '4px 12px', borderRadius: 9999,
            background: 'rgba(0,0,0,.6)', backdropFilter: 'blur(12px)',
            border: `1px solid ${item.accent}40`,
            color: item.accent, fontSize: 11, fontWeight: 700,
            letterSpacing: '.07em', textTransform: 'uppercase',
          }}>
            {item.tag}
          </div>

          {/* Price badge */}
          <div style={{
            position: 'absolute', top: 14, right: 14,
            padding: '6px 14px', borderRadius: 9999,
            background: item.accentBg, backdropFilter: 'blur(12px)',
            border: `1px solid ${item.accent}40`,
            display: 'flex', alignItems: 'center', gap: 3,
          }}>
            <span style={{ fontSize: 11, color: item.accent, fontWeight: 500 }}>
              {language ? 'শুরু' : 'from'}
            </span>
            <span style={{ fontSize: 14, color: '#fff', fontWeight: 800 }}>৳{item.price}</span>
          </div>

          {/* Icon — floats on the border */}
          <div
            className="fss-icon-wrap"
            style={{
              position: 'absolute', bottom: -18, left: 24,
              width: 44, height: 44, borderRadius: 12,
              background: item.accentBg,
              border: `1px solid ${item.accent}50`,
              backdropFilter: 'blur(16px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 10,
              boxShadow: `0 0 20px ${item.accent}30`,
            }}
          >
            <div style={{ color: item.accent }}>{item.icon}</div>
          </div>
        </div>

        {/* ── Content ── */}
        <div style={{ padding: '32px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>

          <h3 className="fss-display" style={{
            fontSize: 20, fontWeight: 800, color: '#fff',
            letterSpacing: '-0.02em', marginBottom: 10, lineHeight: 1.2,
          }}>
            {item.title}
          </h3>

          <p style={{
            color: '#6b7280', fontSize: 14, lineHeight: 1.75,
            fontWeight: 300, flex: 1, marginBottom: 24,
          }}>
            {item.description}
          </p>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,.06)', marginBottom: 20 }} />

          {/* CTA row */}
          <Link href={item.link} style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 16px', borderRadius: 12,
              background: 'rgba(255,255,255,.03)',
              border: '1px solid rgba(255,255,255,.07)',
              transition: 'border-color .2s, background .2s',
              cursor: 'pointer',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${item.accent}40`;
                (e.currentTarget as HTMLDivElement).style.background = `${item.accentBg}`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,.07)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,.03)';
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 600, color: '#d1d5db' }}>
                {language ? 'বিস্তারিত দেখুন' : 'View Details'}
              </span>
              <div
                className="fss-arrow"
                style={{
                  width: 30, height: 30, borderRadius: '50%',
                  background: item.accentBg,
                  border: `1px solid ${item.accent}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <ArrowUpRight style={{ width: 14, height: 14, color: item.accent }} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
export function FeaturedServicesSection() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const data = language ? DATA_BN : DATA_EN;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <section
        ref={ref}
        className="fss-body fss-grid"
        style={{
          position: 'relative', width: '100%', overflow: 'hidden',
          paddingTop: 96, paddingBottom: 96,
          background: '#050505',
          borderTop: '1px solid rgba(255,255,255,.05)',
        }}
      >
        {/* ── Ambient orbs ── */}
        <div style={{
          position: 'absolute', top: '8%', right: '5%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,.07) 0%, transparent 65%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', left: '5%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,.07) 0%, transparent 65%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: '0 24px',
          position: 'relative', zIndex: 10,
        }}>

          {/* ── Header ── */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: 20 }}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '6px 16px', borderRadius: 9999,
                border: '1px solid rgba(249,115,22,.28)',
                background: 'rgba(249,115,22,.07)',
                color: '#fb923c', fontSize: 11, fontWeight: 700,
                letterSpacing: '.09em', textTransform: 'uppercase',
              }}>
                <Sparkles style={{ width: 12, height: 12 }} />
                {language ? 'জনপ্রিয় সার্ভিস' : 'Featured Services'}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="fss-display"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 900, lineHeight: 0.95,
                letterSpacing: '-0.03em', color: '#fff',
                marginBottom: 20,
              }}
            >
              {language ? (
                <>আপনার ব্যবসার<br /><span className="fss-text-grad">ক্রিয়েটিভ যাত্রা</span></>
              ) : (
                <>Start Your<br /><span className="fss-text-grad">Creative Journey</span></>
              )}
            </motion.h2>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                color: '#6b7280', fontSize: 16, lineHeight: 1.75,
                fontWeight: 300, maxWidth: 480, margin: '0 auto',
              }}
            >
              {language
                ? 'আমরা দিচ্ছি আপনার ব্যবসার জন্য কমপ্লিট ডিজিটাল সল্যুশন — ডিজাইন থেকে ডেলিভারি।'
                : 'Complete digital solutions for your business — from concept and design to final delivery.'}
            </motion.p>
          </div>

          {/* ── Cards Grid ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
            marginBottom: 56,
          }}>
            {data.map((item, i) => (
              <ServiceCard key={i} item={item} index={i} language={language} />
            ))}
          </div>

          {/* ── Bottom CTA row ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: 'flex', justifyContent: 'center',
              gap: 14, flexWrap: 'wrap',
            }}
          >
            <Link href="/services" className="fss-cta-primary fss-display">
              {language ? 'সব সার্ভিস দেখুন' : 'Explore All Services'}
              <ArrowRight style={{ width: 17, height: 17 }} />
            </Link>
            <Link href="/contact" className="fss-cta fss-body">
              {language ? 'কাস্টম কোট নিন' : 'Get Custom Quote'}
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
}