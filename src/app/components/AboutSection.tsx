// src/app/components/AboutSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  ArrowRight,
  Sparkles,
  Target,
  Lightbulb,
  Users,
  Award,
  ShieldCheck,
  Zap,
  Code2,
  Globe,
  Cpu,
  Layers,
} from 'lucide-react';

/* ─── Inline keyframes & utility styles ─────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&display=swap');

  .abt-root { font-family: 'DM Sans', sans-serif; }
  .abt-display { font-family: 'Syne', sans-serif !important; }

  /* ── Keyframes ── */
  @keyframes abt-floatY {
    0%,100% { transform: translateY(0px) }
    50%      { transform: translateY(-18px) }
  }
  @keyframes abt-floatY2 {
    0%,100% { transform: translateY(0px) }
    50%      { transform: translateY(-24px) }
  }
  @keyframes abt-spinCW {
    from { transform: translate(-50%,-50%) rotateX(68deg) rotate(0deg) }
    to   { transform: translate(-50%,-50%) rotateX(68deg) rotate(360deg) }
  }
  @keyframes abt-spinCW2 {
    from { transform: translate(-50%,-50%) rotateX(68deg) rotateY(35deg) rotate(0deg) }
    to   { transform: translate(-50%,-50%) rotateX(68deg) rotateY(35deg) rotate(360deg) }
  }
  @keyframes abt-spinCCW {
    from { transform: translate(-50%,-50%) rotateX(65deg) rotateZ(55deg) rotate(0deg) }
    to   { transform: translate(-50%,-50%) rotateX(65deg) rotateZ(55deg) rotate(-360deg) }
  }
  @keyframes abt-glowPulse {
    0%,100% { box-shadow: 0 0 25px 4px rgba(249,115,22,.35) }
    50%      { box-shadow: 0 0 60px 12px rgba(249,115,22,.65) }
  }
  @keyframes abt-fadeUp {
    from { opacity:0; transform:translateY(36px) }
    to   { opacity:1; transform:translateY(0) }
  }
  @keyframes abt-gradX {
    0%,100% { background-position: 0% 50% }
    50%      { background-position: 100% 50% }
  }
  @keyframes abt-ticker {
    0%   { transform: translateX(0) }
    100% { transform: translateX(-50%) }
  }
  @keyframes abt-scrollBar {
    0%   { transform: translateY(0); opacity:1 }
    100% { transform: translateY(10px); opacity:0 }
  }
  @keyframes abt-borderSpin {
    from { transform: rotate(0deg) }
    to   { transform: rotate(360deg) }
  }

  /* ── Utility classes ── */
  .abt-text-grad {
    background: linear-gradient(135deg, #f97316 0%, #ef4444 50%, #f59e0b 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: abt-gradX 5s ease infinite;
  }
  .abt-grid {
    background-image:
      linear-gradient(rgba(249,115,22,.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(249,115,22,.06) 1px, transparent 1px);
    background-size: 56px 56px;
  }
  .abt-glass {
    background: rgba(255,255,255,.03);
    backdrop-filter: blur(18px);
    border: 1px solid rgba(255,255,255,.08);
  }
  .abt-ticker-inner {
    display: flex;
    gap: 3rem;
    width: max-content;
    animation: abt-ticker 28s linear infinite;
  }

  /* ── Hover cards ── */
  .abt-val-card {
    transition: transform .4s cubic-bezier(.175,.885,.32,1.275),
                border-color .3s ease,
                box-shadow .3s ease;
  }
  .abt-val-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 24px 64px rgba(249,115,22,.18);
  }
  .abt-mv-card {
    transition: transform .4s ease, box-shadow .4s ease;
  }
  .abt-mv-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 32px 80px rgba(0,0,0,.5);
  }

  /* ── Orbital helpers ── */
  .abt-ring {
    position: absolute;
    border-radius: 50%;
    top: 50%; left: 50%;
  }
  .abt-dot {
    position: absolute;
    width: 7px; height: 7px;
    border-radius: 50%;
  }

  /* ── Scroll indicator ── */
  .abt-scroll-dot {
    animation: abt-scrollBar 1.4s ease-in-out infinite;
  }

  /* ── Glowing underline on hover ── */
  .abt-cta-btn:hover {
    box-shadow: 0 0 60px rgba(249,115,22,.55);
  }
`;

/* ─── Ticker items ──────────────────────────────────────────────── */
const TICKER_ITEMS = [
  'Web Development', 'UI/UX Design', 'Brand Identity',
  'Video Editing', 'Digital Marketing', 'E-Commerce Solutions',
  'Mobile Apps', 'SEO Optimization',
];

/* ─── Component ─────────────────────────────────────────────────── */
export function AboutSection() {
  const { language } = useLanguage();

  const coreValues = language
    ? [
        { icon: <ShieldCheck className="w-7 h-7 text-orange-500" />, title: 'আস্থা ও বিশ্বস্ততা', desc: 'আমরা ক্লায়েন্টের ডেটা এবং প্রজেক্টের সর্বোচ্চ নিরাপত্তা নিশ্চিত করি।' },
        { icon: <Zap className="w-7 h-7 text-orange-500" />, title: 'দ্রুত ডেলিভারি', desc: 'কোয়ালিটি ঠিক রেখে নির্দিষ্ট সময়ের আগেই প্রজেক্ট বুঝিয়ে দেওয়া আমাদের লক্ষ্য।' },
        { icon: <Users className="w-7 h-7 text-orange-500" />, title: 'ডেডিকেটেড টিম', desc: 'প্রতিটি প্রজেক্টের জন্য আমাদের রয়েছে অভিজ্ঞ ও প্রফেশনাল এক্সপার্ট টিম।' },
        { icon: <Award className="w-7 h-7 text-orange-500" />, title: 'গুণগত মান', desc: 'আন্তর্জাতিক মানের ডিজাইন এবং ডেভেলপমেন্ট কোয়ালিটি বজায় রাখা হয়।' },
      ]
    : [
        { icon: <ShieldCheck className="w-7 h-7 text-orange-500" />, title: 'Trust & Reliability', desc: 'We ensure maximum security for our clients\' data and every project we handle.' },
        { icon: <Zap className="w-7 h-7 text-orange-500" />, title: 'Fast Delivery', desc: 'Our goal is to deliver every project ahead of schedule without compromising quality.' },
        { icon: <Users className="w-7 h-7 text-orange-500" />, title: 'Dedicated Team', desc: 'Experienced, passionate professionals committed to every project we take on.' },
        { icon: <Award className="w-7 h-7 text-orange-500" />, title: 'Premium Quality', desc: 'International-standard design and development quality, maintained on every build.' },
      ];

  const stats = language
    ? [{ num: '50+', label: 'প্রজেক্ট' }, { num: '30+', label: 'ক্লায়েন্ট' }, { num: '3+', label: 'বছরের অভিজ্ঞতা' }]
    : [{ num: '50+', label: 'Projects' }, { num: '30+', label: 'Clients' }, { num: '3+', label: 'Years Exp.' }];

  return (
    <>
      {/* ── Font + animation styles ── */}
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div className="abt-root w-full flex flex-col" style={{ background: '#050505' }}>

        {/* ═══════════════════════════════════════════════════════════
            1. HERO
        ═══════════════════════════════════════════════════════════ */}
        <section className="abt-grid relative min-h-screen flex items-center justify-center overflow-hidden">

          {/* Ambient orbs */}
          <div style={{
            position: 'absolute', top: '20%', left: '15%',
            width: 480, height: 480,
            background: 'radial-gradient(circle, rgba(249,115,22,.18) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(60px)',
            animation: 'abt-floatY 8s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', bottom: '20%', right: '10%',
            width: 360, height: 360,
            background: 'radial-gradient(circle, rgba(239,68,68,.12) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(60px)',
            animation: 'abt-floatY2 10s ease-in-out infinite 2s',
          }} />

          {/* Noise grain overlay */}
          <div style={{
            position: 'absolute', inset: 0, opacity: .25,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.12'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
            pointerEvents: 'none',
          }} />

          {/* Content */}
          <div className="container mx-auto px-4 text-center relative" style={{ zIndex: 10, animation: 'abt-fadeUp .9s ease forwards' }}>

            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 20px', borderRadius: 9999,
              border: '1px solid rgba(249,115,22,.35)',
              background: 'rgba(249,115,22,.08)',
              color: '#fb923c', fontSize: 13, fontWeight: 600,
              letterSpacing: '.06em', marginBottom: 32,
              backdropFilter: 'blur(12px)',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#f97316',
                boxShadow: '0 0 8px rgba(249,115,22,.9)',
                display: 'inline-block',
                animation: 'abt-glowPulse 2s ease-in-out infinite',
              }} />
              {language ? 'ডিজিটাল দুনিয়ায় আপনার পার্টনার' : 'Your Partner in the Digital World'}
            </div>

            {/* Heading */}
            <h1 className="abt-display" style={{
              fontSize: 'clamp(56px, 10vw, 130px)',
              fontWeight: 900, lineHeight: .95,
              letterSpacing: '-0.03em', marginBottom: 28, color: '#fff',
            }}>
              {language ? (
                <>
                  <span style={{ display: 'block' }}>আমাদের</span>
                  <span className="abt-text-grad" style={{ display: 'block' }}>সম্পর্কে</span>
                </>
              ) : (
                <>
                  <span style={{ display: 'block' }}>ABOUT</span>
                  <span className="abt-text-grad" style={{ display: 'block' }}>PIXEL&amp;CODE</span>
                </>
              )}
            </h1>

            {/* Sub */}
            <p style={{
              color: '#6b7280', fontSize: 18, lineHeight: 1.7,
              maxWidth: 580, margin: '0 auto 40px', fontWeight: 300,
            }}>
              {language
                ? 'প্রযুক্তি এবং ক্রিয়েটিভিটির মাধ্যমে আপনার ব্যবসার নতুন সম্ভাবনা তৈরির প্ল্যাটফর্ম।'
                : 'Where technology meets creativity to forge your business\'s next breakthrough.'}
            </p>

            {/* CTA row */}
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact">
                <button className="abt-display abt-cta-btn" style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '16px 32px', borderRadius: 9999,
                  background: '#ea580c', color: '#fff',
                  fontWeight: 800, fontSize: 16, cursor: 'pointer',
                  border: 'none', transition: 'background .2s, box-shadow .3s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#f97316')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#ea580c')}
                >
                  {language ? 'আমাদের সাথে কথা বলুন' : "Let's Talk"}
                  <ArrowRight style={{ width: 18, height: 18 }} />
                </button>
              </Link>
              <Link href="/portfolio">
                <button style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '16px 32px', borderRadius: 9999,
                  border: '1px solid rgba(255,255,255,.1)',
                  background: 'rgba(255,255,255,.04)', color: '#d1d5db',
                  fontWeight: 600, fontSize: 16, cursor: 'pointer',
                  backdropFilter: 'blur(12px)',
                  transition: 'border-color .2s, color .2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,.5)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)'; e.currentTarget.style.color = '#d1d5db'; }}
                >
                  {language ? 'আমাদের কাজ দেখুন' : 'View Our Work'}
                </button>
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          }}>
            <div style={{ width: 28, height: 44, borderRadius: 14, border: '1.5px solid rgba(255,255,255,.12)', position: 'relative', display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
              <div className="abt-scroll-dot" style={{ width: 4, height: 8, borderRadius: 2, background: '#f97316' }} />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            2. TICKER
        ═══════════════════════════════════════════════════════════ */}
        <div style={{ background: '#ea580c', padding: '14px 0', overflow: 'hidden' }}>
          <div className="abt-display abt-ticker-inner">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {TICKER_ITEMS.map((item, j) => (
                  <span key={j} style={{
                    color: '#fff', fontSize: 13, fontWeight: 700,
                    letterSpacing: '.1em', textTransform: 'uppercase',
                    display: 'flex', alignItems: 'center', gap: 24, whiteSpace: 'nowrap',
                  }}>
                    {item}
                    <span style={{ color: 'rgba(255,255,255,.5)', fontSize: 10 }}>✦</span>
                  </span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            3. MAIN ABOUT  (text + 3-D orbital)
        ═══════════════════════════════════════════════════════════ */}
        <section className="abt-grid" style={{ padding: '120px 0', background: '#090909', position: 'relative', overflow: 'hidden' }}>

          <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
              className="lg:grid-cols-2 grid-cols-1">

              {/* ── Left: Text ── */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                  <div style={{ height: 1, width: 44, background: '#f97316' }} />
                  <span className="abt-display" style={{ color: '#f97316', fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' }}>
                    {language ? 'পিক্সেল অ্যান্ড কোড' : 'Who We Are'}
                  </span>
                </div>

                <h2 className="abt-display" style={{ fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 900, lineHeight: 1.05, color: '#fff', marginBottom: 32, letterSpacing: '-0.02em' }}>
                  {language ? (
                    <>সৃজনশীলতা ও<br /><span className="abt-text-grad">প্রযুক্তির</span><br />মেলবন্ধন</>
                  ) : (
                    <>Crafting <span className="abt-text-grad">Digital</span><br />Experiences<br />That Endure</>
                  )}
                </h2>

                <p style={{ color: '#6b7280', fontSize: 17, lineHeight: 1.75, fontWeight: 300, marginBottom: 20 }}>
                  {language
                    ? 'আমরা শুধু একটি ডিজিটাল এজেন্সি নই, আমরা আপনার ব্যবসায়িক প্রবৃদ্ধির পার্টনার। অত্যাধুনিক ওয়েব ডেভেলপমেন্ট, ক্রিয়েটিভ গ্রাফিক্স ডিজাইন এবং ডেটা-ড্রিভেন মার্কেটিংয়ের সমন্বয়ে আমরা এমন সলিউশন তৈরি করি, যা আপনার ব্র্যান্ডকে সবার থেকে আলাদা করে।'
                    : 'We are more than just a digital agency — we are your growth partners. Combining cutting-edge web development, creative design, and data-driven marketing, we build solutions that make your brand truly unforgettable.'}
                </p>

                <p style={{ color: '#4b5563', fontSize: 15, lineHeight: 1.8, fontWeight: 300, marginBottom: 40 }}>
                  {language
                    ? 'গুণগত মান এবং নতুনত্বের প্রতি আমাদের অবিচল আস্থা আপনার ভিশনকে দৃশ্যমান সফলতায় রূপান্তর করে।'
                    : 'Our relentless focus on quality and innovation turns your boldest vision into measurable, lasting success.'}
                </p>

                {/* Stats */}
                <div style={{ display: 'flex', gap: 32, marginBottom: 40, flexWrap: 'wrap' }}>
                  {stats.map((s, i) => (
                    <div key={i} style={{ borderLeft: '2px solid rgba(249,115,22,.35)', paddingLeft: 16 }}>
                      <div className="abt-display" style={{ fontSize: 36, fontWeight: 900, color: '#fff', lineHeight: 1 }}>{s.num}</div>
                      <div style={{ color: '#6b7280', fontSize: 13, marginTop: 4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <button className="abt-display abt-cta-btn" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '15px 30px', borderRadius: 9999,
                    background: '#ea580c', color: '#fff',
                    fontWeight: 800, fontSize: 15, cursor: 'pointer',
                    border: 'none', transition: 'background .2s, box-shadow .3s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#f97316')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#ea580c')}
                  >
                    {language ? 'প্রজেক্ট শুরু করুন' : 'Start a Project'}
                    <ArrowRight style={{ width: 17, height: 17 }} />
                  </button>
                </Link>
              </div>

              {/* ── Right: 3D Orbital Sphere ── */}
              <div style={{ position: 'relative', height: 520, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                {/* Center glow */}
                <div style={{
                  position: 'absolute', width: 180, height: 180,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(249,115,22,.25) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  animation: 'abt-glowPulse 3s ease-in-out infinite',
                }} />

                {/* Outer ambient glow */}
                <div style={{
                  position: 'absolute', width: 420, height: 420,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(249,115,22,.05) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }} />

                {/* Core sphere */}
                <div style={{
                  position: 'relative', zIndex: 10,
                  width: 110, height: 110, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f97316 0%, #b91c1c 100%)',
                  boxShadow: '0 0 40px rgba(249,115,22,.7), inset 0 -6px 20px rgba(0,0,0,.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  animation: 'abt-glowPulse 3s ease-in-out infinite',
                }}>
                  <span className="abt-display" style={{ color: '#fff', fontWeight: 900, fontSize: 18, letterSpacing: '-0.02em' }}>P&amp;C</span>
                </div>

                {/* Ring 1 — orange */}
                <div className="abt-ring" style={{
                  width: 220, height: 220,
                  border: '1.5px solid rgba(249,115,22,.25)',
                  animation: 'abt-spinCW 12s linear infinite',
                }}>
                  <div className="abt-dot" style={{
                    top: -4, left: '50%', transform: 'translateX(-50%)',
                    background: '#f97316', boxShadow: '0 0 10px rgba(249,115,22,.9)',
                  }} />
                  <div className="abt-dot" style={{
                    bottom: -4, left: '50%', transform: 'translateX(-50%)',
                    background: '#f97316', width: 4, height: 4, boxShadow: '0 0 6px rgba(249,115,22,.6)',
                  }} />
                </div>

                {/* Ring 2 — red */}
                <div className="abt-ring" style={{
                  width: 310, height: 310,
                  border: '1.5px solid rgba(239,68,68,.2)',
                  animation: 'abt-spinCW2 18s linear infinite',
                }}>
                  <div className="abt-dot" style={{
                    top: -3.5, left: '50%', transform: 'translateX(-50%)',
                    background: '#ef4444', boxShadow: '0 0 10px rgba(239,68,68,.9)',
                  }} />
                </div>

                {/* Ring 3 — amber */}
                <div className="abt-ring" style={{
                  width: 400, height: 400,
                  border: '1px solid rgba(245,158,11,.15)',
                  animation: 'abt-spinCCW 26s linear infinite',
                }}>
                  <div className="abt-dot" style={{
                    bottom: -3.5, left: '50%', transform: 'translateX(-50%)',
                    background: '#f59e0b', width: 5, height: 5, boxShadow: '0 0 10px rgba(245,158,11,.9)',
                  }} />
                  <div className="abt-dot" style={{
                    top: -3.5, right: '25%',
                    background: '#f59e0b', width: 4, height: 4, opacity: .6,
                  }} />
                </div>

                {/* Floating micro-cards */}
                {[
                  { icon: <Code2 className="w-5 h-5" style={{ color: '#f97316' }} />, title: 'Web Dev', sub: 'React & Next.js', top: '10%', right: '2%', delay: '1s', accentBg: 'rgba(249,115,22,.12)' },
                  { icon: <Globe className="w-5 h-5" style={{ color: '#60a5fa' }} />, title: 'Digital', sub: 'Marketing', bottom: '18%', left: '0%', delay: '0.5s', accentBg: 'rgba(96,165,250,.12)' },
                  { icon: <Layers className="w-5 h-5" style={{ color: '#a78bfa' }} />, title: 'UI/UX', sub: 'Design', top: '40%', right: '0%', delay: '2s', accentBg: 'rgba(167,139,250,.12)' },
                  { icon: <Cpu className="w-5 h-5" style={{ color: '#34d399' }} />, title: 'E-Commerce', sub: 'Solutions', top: '12%', left: '4%', delay: '1.5s', accentBg: 'rgba(52,211,153,.12)' },
                ].map((card, i) => (
                  <div key={i} className="abt-glass" style={{
                    position: 'absolute',
                    top: card.top, bottom: card.bottom,
                    left: card.left, right: card.right,
                    padding: '12px 16px', borderRadius: 16,
                    display: 'flex', alignItems: 'center', gap: 10,
                    animation: `abt-floatY ${5 + i * 1.2}s ease-in-out infinite ${card.delay}`,
                    zIndex: 20,
                  }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: card.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {card.icon}
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>{card.title}</div>
                      <div style={{ color: '#6b7280', fontSize: 11, marginTop: 1 }}>{card.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            4. MISSION & VISION
        ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: '120px 0', background: '#050505' }}>
          <div className="container mx-auto px-4">

            {/* Section header */}
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ height: 1, width: 44, background: '#f97316' }} />
                <span className="abt-display" style={{ color: '#f97316', fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' }}>
                  {language ? 'আমাদের উদ্দেশ্য' : 'Our Purpose'}
                </span>
                <div style={{ height: 1, width: 44, background: '#f97316' }} />
              </div>
              <h2 className="abt-display" style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
                {language ? 'আমাদের লক্ষ্য' : 'Mission & Vision'}
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20, maxWidth: 960, margin: '0 auto' }}>

              {/* Mission */}
              <div className="abt-mv-card" style={{
                position: 'relative', padding: 48, borderRadius: 28,
                background: '#0d0d0d', border: '1px solid rgba(255,255,255,.06)',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: 140, height: 140, background: 'radial-gradient(circle, rgba(249,115,22,.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 2, background: 'linear-gradient(90deg, #f97316, transparent)', opacity: 0, transition: 'opacity .3s' }} className="abt-mv-line" />

                <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(249,115,22,.1)', border: '1px solid rgba(249,115,22,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <Target style={{ width: 26, height: 26, color: '#f97316' }} />
                </div>
                <div style={{ color: '#f97316', fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 12 }}>
                  {language ? 'মিশন' : 'Mission'}
                </div>
                <h3 className="abt-display" style={{ fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 16, letterSpacing: '-0.01em' }}>
                  {language ? 'আমাদের মিশন' : 'What Drives Us'}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: 1.8, fontWeight: 300, fontSize: 15 }}>
                  {language
                    ? 'উন্নত প্রযুক্তি এবং সৃজনশীল আইডিয়ার মাধ্যমে ক্ষুদ্র ও মাঝারি উদ্যোক্তাদের ব্যবসায়িক পরিধি বৃদ্ধি করা এবং তাদের ব্র্যান্ডকে অনলাইনে একটি শক্তিশালী অবস্থানে নিয়ে যাওয়া।'
                    : 'To expand the reach of small and medium entrepreneurs through advanced technology and creative ideas — establishing their brands as powerful forces in the digital landscape.'}
                </p>
              </div>

              {/* Vision */}
              <div className="abt-mv-card" style={{
                position: 'relative', padding: 48, borderRadius: 28,
                background: '#0d0d0d', border: '1px solid rgba(255,255,255,.06)',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: 140, height: 140, background: 'radial-gradient(circle, rgba(96,165,250,.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(96,165,250,.1)', border: '1px solid rgba(96,165,250,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <Lightbulb style={{ width: 26, height: 26, color: '#60a5fa' }} />
                </div>
                <div style={{ color: '#60a5fa', fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 12 }}>
                  {language ? 'ভিশন' : 'Vision'}
                </div>
                <h3 className="abt-display" style={{ fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 16, letterSpacing: '-0.01em' }}>
                  {language ? 'আমাদের ভিশন' : 'Where We\'re Headed'}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: 1.8, fontWeight: 300, fontSize: 15 }}>
                  {language
                    ? 'আগামী ৫ বছরের মধ্যে বাংলাদেশের অন্যতম শীর্ষস্থানীয় এবং বিশ্বস্ত ডিজিটাল সলিউশন প্রোভাইডার হিসেবে নিজেদের প্রতিষ্ঠিত করা এবং আন্তর্জাতিক প্রজেক্টে সফলতার স্বাক্ষর রাখা।'
                    : 'To become one of Bangladesh\'s most trusted digital solution providers within 5 years — and leave an unmistakable mark on international projects.'}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            5. CORE VALUES
        ═══════════════════════════════════════════════════════════ */}
        <section className="abt-grid" style={{ padding: '120px 0', background: '#080808', position: 'relative', overflow: 'hidden' }}>

          <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 10 }}>

            {/* Section header */}
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ height: 1, width: 44, background: '#f97316' }} />
                <span className="abt-display" style={{ color: '#f97316', fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase' }}>
                  {language ? 'কেন আমরা' : 'Why Us'}
                </span>
                <div style={{ height: 1, width: 44, background: '#f97316' }} />
              </div>
              <h2 className="abt-display" style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', marginBottom: 16 }}>
                {language ? 'কেন আমাদের বেছে নেবেন?' : 'Why Choose Us?'}
              </h2>
              <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 520, margin: '0 auto', fontWeight: 300 }}>
                {language
                  ? 'আমরা শুধু কাজ করি না, আমরা আপনার ব্যবসার প্রতি যত্নশীল।'
                  : 'We don\'t just work — we genuinely care about your business\'s success.'}
              </p>
            </div>

            {/* Cards grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, maxWidth: 1200, margin: '0 auto' }}>
              {coreValues.map((value, index) => (
                <div key={index} className="abt-val-card" style={{
                  position: 'relative', padding: 36, borderRadius: 24,
                  background: '#0d0d0d', border: '1px solid rgba(255,255,255,.05)',
                  overflow: 'hidden', cursor: 'default',
                }}>
                  {/* Bottom glide bar */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
                    background: 'linear-gradient(90deg, #f97316, #ef4444)',
                    transform: 'scaleX(0)', transformOrigin: 'left',
                    transition: 'transform .35s ease',
                  }}
                    className="abt-val-bar"
                  />

                  {/* Index watermark */}
                  <div className="abt-display" style={{
                    position: 'absolute', top: 20, right: 20,
                    fontSize: 48, fontWeight: 900, color: 'rgba(255,255,255,.03)',
                    lineHeight: 1, userSelect: 'none',
                  }}>
                    0{index + 1}
                  </div>

                  <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(249,115,22,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, transition: 'background .3s' }}>
                    {value.icon}
                  </div>

                  <h3 className="abt-display" style={{ fontSize: 19, fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: '-0.01em' }}>
                    {value.title}
                  </h3>

                  <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.75, fontWeight: 300 }}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hover bar activation via global CSS trick */}
          <style>{`
            .abt-val-card:hover .abt-val-bar { transform: scaleX(1) !important; }
          `}</style>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            6. FINAL CTA
        ═══════════════════════════════════════════════════════════ */}
        <section style={{ padding: '140px 0', background: '#050505', position: 'relative', overflow: 'hidden' }}>

          {/* Radial spotlight */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(249,115,22,.08) 0%, transparent 70%)',
          }} />

          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: 600, height: 600, border: '1px solid rgba(249,115,22,.05)', borderRadius: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: 900, height: 900, border: '1px solid rgba(249,115,22,.03)', borderRadius: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }} />

          <div className="container mx-auto px-4 text-center" style={{ position: 'relative', zIndex: 10 }}>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 20px', borderRadius: 9999, border: '1px solid rgba(249,115,22,.25)', background: 'rgba(249,115,22,.06)', color: '#fb923c', fontSize: 12, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 28 }}>
              <Sparkles style={{ width: 14, height: 14 }} />
              {language ? 'আমাদের সাথে শুরু করুন' : 'Start With Us Today'}
            </div>

            <h2 className="abt-display" style={{ fontSize: 'clamp(40px, 8vw, 100px)', fontWeight: 900, color: '#fff', lineHeight: .95, letterSpacing: '-0.03em', marginBottom: 24 }}>
              {language ? (
                <>প্রজেক্ট শুরু করতে<br /><span className="abt-text-grad">প্রস্তুত?</span></>
              ) : (
                <>Ready to Build<br /><span className="abt-text-grad">Something Great?</span></>
              )}
            </h2>

            <p style={{ color: '#6b7280', fontSize: 17, marginBottom: 48, maxWidth: 480, margin: '0 auto 48px', fontWeight: 300, lineHeight: 1.7 }}>
              {language
                ? 'আমাদের সাথে যোগাযোগ করুন এবং আপনার আইডিয়াকে বাস্তবে রূপ দিন।'
                : 'Get in touch and let\'s turn your idea into a powerful digital reality.'}
            </p>

            <Link href="/contact">
              <button className="abt-display abt-cta-btn" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '18px 44px', borderRadius: 9999,
                background: '#ea580c', color: '#fff',
                fontWeight: 900, fontSize: 18, cursor: 'pointer',
                border: 'none', transition: 'background .2s, box-shadow .3s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f97316')}
                onMouseLeave={e => (e.currentTarget.style.background = '#ea580c')}
              >
                {language ? 'যোগাযোগ করুন' : 'Get Started Today'}
                <ArrowRight style={{ width: 22, height: 22 }} />
              </button>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}