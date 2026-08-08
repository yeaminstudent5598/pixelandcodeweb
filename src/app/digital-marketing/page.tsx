'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Check, BarChart2, Search,
  Megaphone, Mail, TrendingUp, Users,
  Zap, Globe, Target, ChevronRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

/* ─── Styles ──────────────────────────────────────────────────────── */
const DM_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

  .dm-root    { font-family:'DM Sans',sans-serif; }
  .dm-display { font-family:'Syne',sans-serif !important; }
  .dm-mono    { font-family:'JetBrains Mono',monospace !important; }

  @keyframes dm-gradX  { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  @keyframes dm-spin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes dm-spinR  { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
  @keyframes dm-float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  @keyframes dm-pulse  { 0%,100%{opacity:1} 50%{opacity:.4} }
  @keyframes dm-scanY  { 0%{transform:translateY(-100%)} 100%{transform:translateY(500%)} }
  @keyframes dm-ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

  .dm-grad-text {
    background:linear-gradient(135deg,#f97316 0%,#ef4444 45%,#f59e0b 100%);
    background-size:200% 200%;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    background-clip:text; animation:dm-gradX 4s ease infinite;
  }
  .dm-grid-bg {
    background-image:
      linear-gradient(rgba(249,115,22,.045) 1px, transparent 1px),
      linear-gradient(90deg,rgba(249,115,22,.045) 1px, transparent 1px);
    background-size:60px 60px;
  }
  .dm-card {
    transition:border-color .3s, box-shadow .3s, transform .35s;
    cursor:default;
  }
  .dm-card:hover {
    border-color:rgba(249,115,22,.40) !important;
    box-shadow:0 0 36px rgba(249,115,22,.12) !important;
    transform:translateY(-6px) !important;
  }
  .dm-card:hover .dm-card-icon { transform:scale(1.15) rotate(-5deg); }
  .dm-card-icon { transition:transform .35s; }

  .dm-stat-card { transition:border-color .25s, transform .25s; }
  .dm-stat-card:hover { border-color:rgba(249,115,22,.30) !important; transform:translateY(-4px); }

  .dm-ticker-wrap { overflow:hidden; }
  .dm-ticker { display:inline-flex; animation:dm-ticker 30s linear infinite; white-space:nowrap; }

  .dm-cta-btn {
    transition:background .25s, box-shadow .3s, transform .2s;
  }
  .dm-cta-btn:hover {
    background:#f97316 !important;
    box-shadow:0 0 32px rgba(249,115,22,.45) !important;
    transform:translateY(-2px);
  }
`;

/* ─── Data ────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    Icon: Megaphone,
    color: '#60a5fa',
    glow: 'rgba(96,165,250,.18)',
    titleBn: 'সোশ্যাল মিডিয়া মার্কেটিং',
    titleEn: 'Social Media Marketing',
    descBn:  'ফেসবুক, ইন্সটাগ্রামে ব্র্যান্ড পরিচিতি ও এনগেজমেন্ট বৃদ্ধি করুন।',
    descEn:  'Build brand visibility and engagement across Facebook, Instagram and beyond.',
    tag: 'Social',
  },
  {
    Icon: Search,
    color: '#4ade80',
    glow: 'rgba(74,222,128,.18)',
    titleBn: 'SEO অপটিমাইজেশন',
    titleEn: 'Search Engine Optimization',
    descBn:  'গুগলের প্রথম পাতায় আসুন এবং অর্গানিক ট্র্যাফিক বৃদ্ধি করুন।',
    descEn:  'Rank on Google page one and drive consistent organic traffic to your site.',
    tag: 'SEO',
  },
  {
    Icon: BarChart2,
    color: '#c084fc',
    glow: 'rgba(192,132,252,.18)',
    titleBn: 'গুগল এডস',
    titleEn: 'Google Ads',
    descBn:  'টার্গেটেড বিজ্ঞাপন দিয়ে সঠিক কাস্টমারের কাছে পৌঁছান।',
    descEn:  'Reach the right customers at the right time with precision Google Ads campaigns.',
    tag: 'PPC',
  },
  {
    Icon: Mail,
    color: '#f87171',
    glow: 'rgba(248,113,113,.18)',
    titleBn: 'ইমেইল মার্কেটিং',
    titleEn: 'Email Marketing',
    descBn:  'কার্যকর ক্যাম্পেইনে পুরনো কাস্টমার ধরে রাখুন ও নতুন লিড তৈরি করুন।',
    descEn:  'Nurture leads and retain customers through high-converting email campaigns.',
    tag: 'Email',
  },
  {
    Icon: Globe,
    color: '#fb923c',
    glow: 'rgba(251,146,60,.18)',
    titleBn: 'কন্টেন্ট মার্কেটিং',
    titleEn: 'Content Marketing',
    descBn:  'মানসম্পন্ন কন্টেন্ট দিয়ে অডিয়েন্স তৈরি করুন এবং ব্র্যান্ড অথরিটি বাড়ান।',
    descEn:  'Build authority and grow your audience with high-quality strategic content.',
    tag: 'Content',
  },
  {
    Icon: TrendingUp,
    color: '#38bdf8',
    glow: 'rgba(56,189,248,.18)',
    titleBn: 'অ্যানালিটিক্স ও রিপোর্টিং',
    titleEn: 'Analytics & Reporting',
    descBn:  'ডেটা-ড্রিভেন সিদ্ধান্তের জন্য বিস্তারিত পারফরম্যান্স রিপোর্ট পান।',
    descEn:  'Get detailed performance reports to make confident data-driven decisions.',
    tag: 'Data',
  },
];

const WHY_US = [
  {
    Icon: Target,
    titleBn: 'ডেটা-ড্রিভেন স্ট্র্যাটেজি',
    titleEn: 'Data-Driven Strategy',
    descBn:  'প্রতিটি ক্যাম্পেইন গভীরভাবে অ্যানালাইজ করে সর্বোচ্চ ROI নিশ্চিত করা হয়।',
    descEn:  'Every campaign is deeply analyzed to ensure maximum ROI for your investment.',
  },
  {
    Icon: Users,
    titleBn: 'অভিজ্ঞ এক্সপার্ট টিম',
    titleEn: 'Experienced Expert Team',
    descBn:  'ইন্ডাস্ট্রি-প্রমাণিত মার্কেটারদের দল আপনার ব্র্যান্ডের পাশে থেকে কাজ করে।',
    descEn:  'A team of industry-proven marketers works alongside your brand at every step.',
  },
  {
    Icon: Zap,
    titleBn: 'দ্রুত ও পরিমাপযোগ্য ফলাফল',
    titleEn: 'Fast & Measurable Results',
    descBn:  'স্বচ্ছ রিপোর্টিং ও রিয়েল-টাইম ড্যাশবোর্ডে ক্যাম্পেইনের প্রভাব দেখুন।',
    descEn:  'Track campaign impact in real-time with transparent dashboards and reporting.',
  },
  {
    Icon: Check,
    titleBn: 'কাস্টম সলিউশন',
    titleEn: 'Custom Solutions',
    descBn:  'আপনার ব্যবসার জন্য কাস্টমাইজড স্ট্র্যাটেজি — কোনো one-size-fits-all নেই।',
    descEn:  "Strategies built specifically for your business — zero one-size-fits-all thinking.",
  },
];

const STATS = [
  { num: '200+', labelBn: 'ক্যাম্পেইন পরিচালিত', labelEn: 'Campaigns Run' },
  { num: '3.8×', labelBn: 'গড় ROI বৃদ্ধি',       labelEn: 'Avg. ROI Growth' },
  { num: '98%',  labelBn: 'ক্লায়েন্ট সন্তুষ্টি',  labelEn: 'Client Satisfaction' },
  { num: '50+',  labelBn: 'ব্র্যান্ড পার্টনার',   labelEn: 'Brand Partners' },
];

const TICKER_ITEMS = [
  'Social Media Marketing', 'SEO', 'Google Ads', 'Content Marketing',
  'Email Campaigns', 'Analytics', 'Brand Strategy', 'Lead Generation',
  'Conversion Optimization', 'ROI Growth',
];

/* ─── Ease constants ──────────────────────────────────────────────── */
const EO = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ─── Page Component ──────────────────────────────────────────────── */
export default function DigitalMarketingPage() {
  const { language } = useLanguage();
  const statsRef   = useRef(null);
  const servRef    = useRef(null);
  const whyRef     = useRef(null);
  const statsInView = useInView(statsRef,  { once: true, margin: '-60px' });
  const servInView  = useInView(servRef,   { once: true, margin: '-60px' });
  const whyInView   = useInView(whyRef,    { once: true, margin: '-60px' });

  return (
    <>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: DM_STYLES }} />

      <main className="dm-root dm-grid-bg w-full overflow-x-hidden" style={{ background:'#080808' }}>

        {/* ═══════════════════════════════════════════
            § 1  HERO
        ═══════════════════════════════════════════ */}
        <section className="relative w-full overflow-hidden" style={{ minHeight:'100vh', display:'flex', alignItems:'center' }}>

          {/* ambient orbs */}
          <div style={{
            position:'absolute', top:'-10%', right:'-5%',
            width:700, height:700, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(249,115,22,.10) 0%, transparent 65%)',
            filter:'blur(60px)', pointerEvents:'none',
          }} />
          <div style={{
            position:'absolute', bottom:'5%', left:'-8%',
            width:500, height:500, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(59,130,246,.07) 0%, transparent 65%)',
            filter:'blur(60px)', pointerEvents:'none',
          }} />

          {/* top orange line */}
          <div style={{
            position:'absolute', top:0, left:0, right:0, height:1,
            background:'linear-gradient(to right, transparent, rgba(249,115,22,.5), transparent)',
          }} />

          {/* 3D rotating outer ring */}
          <div style={{
            position:'absolute', top:'50%', right:'8%',
            width:520, height:520,
            marginTop:-260,
            borderRadius:'50%',
            border:'1px solid rgba(249,115,22,.08)',
            animation:'dm-spin 40s linear infinite',
            pointerEvents:'none',
          }}>
            <div style={{
              position:'absolute', top:-4, left:'50%', marginLeft:-4,
              width:8, height:8, borderRadius:'50%',
              background:'#f97316', boxShadow:'0 0 12px rgba(249,115,22,.8)',
            }} />
          </div>
          <div style={{
            position:'absolute', top:'50%', right:'8%',
            width:380, height:380, marginTop:-190,
            borderRadius:'50%',
            border:'1px solid rgba(249,115,22,.05)',
            animation:'dm-spinR 28s linear infinite',
            pointerEvents:'none',
          }} />

          <div className="container mx-auto px-6 relative z-10" style={{ paddingTop:120, paddingBottom:120 }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}
              className="grid-cols-1 lg:grid-cols-2">

              {/* LEFT */}
              <div>
                {/* badge */}
                <motion.div
                  initial={{ opacity:0, y:-14 }} animate={{ opacity:1, y:0 }}
                  transition={{ duration:0.5, ease:EO }}
                  style={{ marginBottom:28 }}
                >
                  <span style={{
                    display:'inline-flex', alignItems:'center', gap:8,
                    padding:'6px 16px', borderRadius:9999,
                    border:'1px solid rgba(249,115,22,.28)',
                    background:'rgba(249,115,22,.07)',
                    color:'#fb923c', fontSize:11, fontWeight:700,
                    letterSpacing:'.14em', textTransform:'uppercase',
                  }}>
                    <span style={{
                      width:6, height:6, borderRadius:'50%', background:'#f97316',
                      boxShadow:'0 0 8px rgba(249,115,22,.9)',
                      animation:'dm-pulse 1.8s ease-in-out infinite',
                    }} />
                    {language ? 'ডিজিটাল মার্কেটিং' : 'Digital Marketing'}
                  </span>
                </motion.div>

                {/* heading */}
                <motion.h1
                  className="dm-display"
                  initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}
                  transition={{ duration:0.65, ease:EO, delay:0.08 }}
                  style={{
                    fontSize:'clamp(38px,5vw,72px)',
                    fontWeight:900, lineHeight:0.95,
                    letterSpacing:'-0.03em', color:'#fff', marginBottom:24,
                  }}
                >
                  {language ? (
                    <>ডিজিটাল মার্কেটিং-এ<br /><span className="dm-grad-text">নতুন উচ্চতায়</span><br />পৌঁছান</>
                  ) : (
                    <>Grow Your Brand<br /><span className="dm-grad-text">Faster & Smarter</span><br />With Digital</>
                  )}
                </motion.h1>

                {/* subtext */}
                <motion.p
                  initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
                  transition={{ duration:0.55, ease:EO, delay:0.16 }}
                  style={{ color:'rgba(255,255,255,.45)', fontSize:16, lineHeight:1.8, maxWidth:440, marginBottom:36 }}
                >
                  {language
                    ? 'আমরা আপনার ব্র্যান্ডের জন্য সঠিক ডিজিটাল মার্কেটিং স্ট্র্যাটেজি তৈরি করি — যা ব্যবসাকে পরিমাপযোগ্যভাবে এগিয়ে নেয়।'
                    : "We craft data-driven digital marketing strategies that move your business forward with measurable, sustainable growth."}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }}
                  transition={{ duration:0.5, ease:EO, delay:0.24 }}
                  style={{ display:'flex', alignItems:'center', gap:14, flexWrap:'wrap' }}
                >
                  <Link href="/contact" className="dm-display dm-cta-btn"
                    style={{
                      display:'inline-flex', alignItems:'center', gap:8,
                      padding:'14px 28px', borderRadius:12,
                      background:'#ea580c', color:'#fff',
                      fontSize:14, fontWeight:800, letterSpacing:'.04em',
                      textDecoration:'none',
                    }}
                  >
                    {language ? 'ফ্রি কনসালটেন্সি নিন' : 'Get Free Consultancy'}
                    <ArrowRight style={{ width:16, height:16 }} />
                  </Link>

                  <Link href="#services"
                    style={{
                      display:'inline-flex', alignItems:'center', gap:6,
                      padding:'14px 24px', borderRadius:12,
                      border:'1px solid rgba(255,255,255,.10)',
                      background:'rgba(255,255,255,.04)',
                      color:'rgba(255,255,255,.65)',
                      fontSize:14, fontWeight:600, letterSpacing:'.02em',
                      textDecoration:'none', transition:'all .25s',
                    }}
                    onMouseEnter={e=>{
                      (e.currentTarget as HTMLAnchorElement).style.borderColor='rgba(249,115,22,.35)';
                      (e.currentTarget as HTMLAnchorElement).style.color='#fb923c';
                    }}
                    onMouseLeave={e=>{
                      (e.currentTarget as HTMLAnchorElement).style.borderColor='rgba(255,255,255,.10)';
                      (e.currentTarget as HTMLAnchorElement).style.color='rgba(255,255,255,.65)';
                    }}
                  >
                    {language ? 'সার্ভিস দেখুন' : 'Explore Services'}
                    <ChevronRight style={{ width:15, height:15 }} />
                  </Link>
                </motion.div>

                {/* mini stats */}
                <motion.div
                  initial={{ opacity:0 }} animate={{ opacity:1 }}
                  transition={{ duration:0.6, delay:0.4 }}
                  style={{ display:'flex', gap:32, marginTop:48 }}
                >
                  {[
                    { num:'200+', label: language ? 'ক্যাম্পেইন' : 'Campaigns' },
                    { num:'3.8×', label: language ? 'ROI বৃদ্ধি' : 'ROI Growth' },
                    { num:'98%',  label: language ? 'সন্তুষ্টি' : 'Satisfaction' },
                  ].map((s,i) => (
                    <div key={i}>
                      <div className="dm-display" style={{ fontSize:26, fontWeight:900, color:'#fff', lineHeight:1 }}>
                        {s.num}
                      </div>
                      <div style={{ fontSize:11, color:'rgba(255,255,255,.35)', marginTop:4, letterSpacing:'.06em', textTransform:'uppercase' }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* RIGHT — 3D floating dashboard card */}
              <motion.div
                className="hidden lg:flex"
                initial={{ opacity:0, x:50 }} animate={{ opacity:1, x:0 }}
                transition={{ duration:0.75, ease:EO, delay:0.2 }}
                style={{ position:'relative', height:520, alignItems:'center', justifyContent:'center' }}
              >
                {/* outer glow ring */}
                <div style={{
                  position:'absolute', inset:-20, borderRadius:'50%',
                  background:'radial-gradient(circle, rgba(249,115,22,.08) 0%, transparent 65%)',
                  animation:'dm-float 6s ease-in-out infinite',
                }} />

                {/* main dashboard card */}
                <motion.div
                  animate={{ y:[0,-14,0] }}
                  transition={{ duration:5.5, repeat:Infinity, ease:'easeInOut' }}
                  style={{
                    width:340, borderRadius:20,
                    background:'rgba(15,15,15,.95)',
                    border:'1px solid rgba(249,115,22,.18)',
                    boxShadow:'0 40px 80px rgba(0,0,0,.6), 0 0 0 1px rgba(249,115,22,.06) inset',
                    overflow:'hidden',
                    backdropFilter:'blur(20px)',
                  }}
                >
                  {/* card header */}
                  <div style={{
                    padding:'16px 20px',
                    background:'rgba(249,115,22,.06)',
                    borderBottom:'1px solid rgba(255,255,255,.05)',
                    display:'flex', alignItems:'center', justifyContent:'space-between',
                  }}>
                    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                      <div style={{
                        width:8, height:8, borderRadius:'50%', background:'#f97316',
                        boxShadow:'0 0 8px rgba(249,115,22,.8)',
                        animation:'dm-pulse 2s ease-in-out infinite',
                      }} />
                      <span className="dm-mono" style={{ fontSize:11, color:'rgba(255,255,255,.50)', letterSpacing:'.1em' }}>
                        CAMPAIGN LIVE
                      </span>
                    </div>
                    <span className="dm-mono" style={{ fontSize:10, color:'rgba(249,115,22,.6)' }}>↑ +38%</span>
                  </div>

                  {/* chart bars */}
                  <div style={{ padding:'20px 20px 8px' }}>
                    <div style={{ display:'flex', alignItems:'flex-end', gap:8, height:80 }}>
                      {[40,65,45,80,60,90,72,95,68,100].map((h,i) => (
                        <motion.div key={i}
                          initial={{ height:0 }}
                          animate={{ height:`${h}%` }}
                          transition={{ duration:0.6, delay:0.5+i*0.06, ease:EO }}
                          style={{
                            flex:1, borderRadius:'3px 3px 0 0',
                            background: i===9
                              ? 'linear-gradient(to top, #ea580c, #f97316)'
                              : i%3===0
                              ? 'rgba(249,115,22,.35)'
                              : 'rgba(255,255,255,.08)',
                          }}
                        />
                      ))}
                    </div>
                    <div style={{
                      height:1, background:'rgba(255,255,255,.06)',
                      marginTop:4,
                    }} />
                  </div>

                  {/* metrics row */}
                  <div style={{ padding:'12px 20px 20px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8 }}>
                    {[
                      { label:'Reach',       val:'24.8K', up:true },
                      { label:'Conversions', val:'1,240',  up:true },
                      { label:'Avg. CPC',    val:'৳0.42',  up:false },
                    ].map((m,i) => (
                      <div key={i} style={{
                        padding:'10px 8px', borderRadius:10,
                        background:'rgba(255,255,255,.03)',
                        border:'1px solid rgba(255,255,255,.06)',
                        textAlign:'center',
                      }}>
                        <div className="dm-display" style={{ fontSize:15, fontWeight:800, color:'#fff', lineHeight:1 }}>{m.val}</div>
                        <div style={{ fontSize:9, color:'rgba(255,255,255,.30)', marginTop:3, letterSpacing:'.06em' }}>{m.label}</div>
                        <div style={{ fontSize:9, marginTop:2, color: m.up ? '#4ade80' : '#f87171' }}>
                          {m.up ? '▲' : '▼'} {m.up ? '+' : '-'}{[12,8,3][i]}%
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* floating badge — top left */}
                <motion.div
                  animate={{ y:[0,-8,0] }}
                  transition={{ duration:4, repeat:Infinity, ease:'easeInOut', delay:1 }}
                  style={{
                    position:'absolute', top:'12%', left:'-8%',
                    padding:'10px 16px', borderRadius:12,
                    background:'rgba(74,222,128,.12)',
                    border:'1px solid rgba(74,222,128,.25)',
                    backdropFilter:'blur(12px)',
                    display:'flex', alignItems:'center', gap:8,
                  }}
                >
                  <TrendingUp style={{ width:14, height:14, color:'#4ade80' }} />
                  <span className="dm-mono" style={{ fontSize:11, color:'#4ade80', fontWeight:600 }}>
                    {language ? 'ট্র্যাফিক +156%' : 'Traffic +156%'}
                  </span>
                </motion.div>

                {/* floating badge — bottom right */}
                <motion.div
                  animate={{ y:[0,-8,0] }}
                  transition={{ duration:4.5, repeat:Infinity, ease:'easeInOut', delay:2.5 }}
                  style={{
                    position:'absolute', bottom:'14%', right:'-6%',
                    padding:'10px 16px', borderRadius:12,
                    background:'rgba(249,115,22,.12)',
                    border:'1px solid rgba(249,115,22,.25)',
                    backdropFilter:'blur(12px)',
                    display:'flex', alignItems:'center', gap:8,
                  }}
                >
                  <Target style={{ width:14, height:14, color:'#f97316' }} />
                  <span className="dm-mono" style={{ fontSize:11, color:'#f97316', fontWeight:600 }}>
                    ROI 3.8×
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Ticker strip ─── */}
        <div style={{
          borderTop:'1px solid rgba(255,255,255,.05)',
          borderBottom:'1px solid rgba(255,255,255,.05)',
          padding:'14px 0',
          background:'rgba(249,115,22,.03)',
          overflow:'hidden',
        }}>
          <div className="dm-ticker">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="dm-mono" style={{
                fontSize:11, color:'rgba(255,255,255,.25)',
                fontWeight:500, letterSpacing:'.12em',
                textTransform:'uppercase', marginRight:48,
                flexShrink:0,
              }}>
                <span style={{ color:'rgba(249,115,22,.5)', marginRight:16 }}>✦</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            § 2  SERVICES
        ═══════════════════════════════════════════ */}
        <section id="services" ref={servRef} style={{ padding:'100px 0', position:'relative' }}>
          <div className="container mx-auto px-6">

            {/* header */}
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <motion.div
                initial={{ opacity:0, y:-12 }}
                animate={servInView ? { opacity:1, y:0 } : {}}
                transition={{ duration:0.5 }}
                style={{ marginBottom:16 }}
              >
                <span style={{
                  display:'inline-flex', alignItems:'center', gap:8,
                  padding:'6px 16px', borderRadius:9999,
                  border:'1px solid rgba(249,115,22,.28)',
                  background:'rgba(249,115,22,.07)',
                  color:'#fb923c', fontSize:11, fontWeight:700,
                  letterSpacing:'.14em', textTransform:'uppercase',
                }}>
                  <Zap style={{ width:12, height:12 }} />
                  {language ? 'আমাদের সার্ভিস' : 'Our Services'}
                </span>
              </motion.div>

              <motion.h2 className="dm-display"
                initial={{ opacity:0, y:20 }}
                animate={servInView ? { opacity:1, y:0 } : {}}
                transition={{ duration:0.6, delay:0.08, ease:EO }}
                style={{ fontSize:'clamp(32px,4vw,54px)', fontWeight:900, color:'#fff', letterSpacing:'-0.03em', lineHeight:1 }}
              >
                {language ? (
                  <>সম্পূর্ণ ডিজিটাল মার্কেটিং <span className="dm-grad-text">সলিউশন</span></>
                ) : (
                  <>Full-Spectrum Digital <span className="dm-grad-text">Marketing</span></>
                )}
              </motion.h2>
            </div>

            {/* service cards grid */}
            <div style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',
              gap:20,
            }}>
              {SERVICES.map((s, i) => (
                <motion.div key={i}
                  className="dm-card"
                  initial={{ opacity:0, y:40 }}
                  animate={servInView ? { opacity:1, y:0 } : {}}
                  transition={{ duration:0.5, delay:i*0.07, ease:EO }}
                  style={{
                    padding:'28px', borderRadius:18,
                    background:'rgba(255,255,255,.03)',
                    border:'1px solid rgba(255,255,255,.07)',
                    position:'relative', overflow:'hidden',
                  }}
                >
                  {/* corner glow */}
                  <div style={{
                    position:'absolute', top:0, right:0,
                    width:100, height:100, borderRadius:'0 18px 0 100%',
                    background:`radial-gradient(circle at top right, ${s.glow}, transparent 70%)`,
                    pointerEvents:'none',
                  }} />

                  {/* tag */}
                  <div style={{
                    display:'inline-block', marginBottom:18,
                    padding:'3px 10px', borderRadius:6,
                    background:`${s.color}18`,
                    border:`1px solid ${s.color}30`,
                    color:s.color, fontSize:10, fontWeight:700,
                    letterSpacing:'.10em', textTransform:'uppercase',
                  }}>
                    {s.tag}
                  </div>

                  {/* icon */}
                  <div className="dm-card-icon" style={{
                    width:52, height:52, borderRadius:14, marginBottom:18,
                    background:`${s.color}12`,
                    border:`1px solid ${s.color}25`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                  }}>
                    <s.Icon style={{ width:24, height:24, color:s.color }} />
                  </div>

                  <h3 className="dm-display" style={{
                    fontSize:18, fontWeight:800, color:'#fff', marginBottom:10, lineHeight:1.2,
                  }}>
                    {language ? s.titleBn : s.titleEn}
                  </h3>
                  <p style={{ fontSize:13, color:'rgba(255,255,255,.45)', lineHeight:1.75 }}>
                    {language ? s.descBn : s.descEn}
                  </p>

                  {/* bottom arrow */}
                  <div style={{
                    marginTop:20, display:'flex', alignItems:'center', gap:4,
                    color:'rgba(249,115,22,.5)', fontSize:11, fontWeight:600,
                    letterSpacing:'.06em', textTransform:'uppercase',
                  }}>
                    {language ? 'বিস্তারিত' : 'Learn more'}
                    <ArrowRight style={{ width:12, height:12 }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            § 3  STATS BAR
        ═══════════════════════════════════════════ */}
        <div ref={statsRef} style={{
          borderTop:'1px solid rgba(255,255,255,.05)',
          borderBottom:'1px solid rgba(255,255,255,.05)',
          background:'rgba(249,115,22,.03)',
        }}>
          <div className="container mx-auto px-6" style={{ padding:'56px 24px' }}>
            <div style={{
              display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:20,
            }}>
              {STATS.map((s, i) => (
                <motion.div key={i}
                  className="dm-stat-card"
                  initial={{ opacity:0, y:24 }}
                  animate={statsInView ? { opacity:1, y:0 } : {}}
                  transition={{ duration:0.5, delay:i*0.08, ease:EO }}
                  style={{
                    textAlign:'center', padding:'24px 16px', borderRadius:16,
                    background:'rgba(255,255,255,.025)',
                    border:'1px solid rgba(255,255,255,.07)',
                  }}
                >
                  <div className="dm-display" style={{
                    fontSize:36, fontWeight:900, color:'#fff', lineHeight:1, marginBottom:6,
                  }}>{s.num}</div>
                  <div style={{
                    fontSize:11, color:'#f97316', fontWeight:700,
                    letterSpacing:'.08em', textTransform:'uppercase',
                  }}>
                    {language ? s.labelBn : s.labelEn}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            § 4  WHY US
        ═══════════════════════════════════════════ */}
        <section ref={whyRef} style={{ padding:'100px 0' }}>
          <div className="container mx-auto px-6">
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}
              className="grid-cols-1 lg:grid-cols-2">

              {/* LEFT — checklist */}
              <div>
                <motion.div
                  initial={{ opacity:0, y:-12 }}
                  animate={whyInView ? { opacity:1, y:0 } : {}}
                  transition={{ duration:0.5 }}
                  style={{ marginBottom:20 }}
                >
                  <span style={{
                    display:'inline-flex', alignItems:'center', gap:8,
                    padding:'6px 16px', borderRadius:9999,
                    border:'1px solid rgba(249,115,22,.28)',
                    background:'rgba(249,115,22,.07)',
                    color:'#fb923c', fontSize:11, fontWeight:700,
                    letterSpacing:'.14em', textTransform:'uppercase',
                  }}>
                    {language ? 'কেন আমরা?' : 'Why Us?'}
                  </span>
                </motion.div>

                <motion.h2 className="dm-display"
                  initial={{ opacity:0, y:20 }}
                  animate={whyInView ? { opacity:1, y:0 } : {}}
                  transition={{ duration:0.6, delay:0.08, ease:EO }}
                  style={{
                    fontSize:'clamp(28px,3.5vw,48px)', fontWeight:900,
                    color:'#fff', letterSpacing:'-0.03em', lineHeight:1.05, marginBottom:44,
                  }}
                >
                  {language ? (
                    <>কেন আমাদের বেছে <span className="dm-grad-text">নিবেন?</span></>
                  ) : (
                    <>Why Brands <span className="dm-grad-text">Choose Us</span></>
                  )}
                </motion.h2>

                <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                  {WHY_US.map((w, i) => (
                    <motion.div key={i}
                      initial={{ opacity:0, x:-20 }}
                      animate={whyInView ? { opacity:1, x:0 } : {}}
                      transition={{ duration:0.5, delay:0.12+i*0.09, ease:EO }}
                      style={{
                        display:'flex', gap:16, alignItems:'flex-start',
                        padding:'20px', borderRadius:14,
                        background:'rgba(255,255,255,.025)',
                        border:'1px solid rgba(255,255,255,.06)',
                        transition:'border-color .25s, transform .25s',
                      }}
                      whileHover={{ borderColor:'rgba(249,115,22,.25)', y:-2 }}
                    >
                      <div style={{
                        width:40, height:40, borderRadius:10, flexShrink:0,
                        background:'rgba(249,115,22,.10)',
                        border:'1px solid rgba(249,115,22,.20)',
                        display:'flex', alignItems:'center', justifyContent:'center',
                      }}>
                        <w.Icon style={{ width:18, height:18, color:'#f97316' }} />
                      </div>
                      <div>
                        <h4 className="dm-display" style={{
                          fontSize:15, fontWeight:800, color:'#fff', marginBottom:5,
                        }}>
                          {language ? w.titleBn : w.titleEn}
                        </h4>
                        <p style={{ fontSize:13, color:'rgba(255,255,255,.45)', lineHeight:1.7 }}>
                          {language ? w.descBn : w.descEn}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* RIGHT — 3D metrics panel */}
              <motion.div
                className="hidden lg:block"
                initial={{ opacity:0, x:40 }}
                animate={whyInView ? { opacity:1, x:0 } : {}}
                transition={{ duration:0.7, delay:0.15, ease:EO }}
                style={{ position:'relative' }}
              >
                {/* glow bg */}
                <div style={{
                  position:'absolute', inset:-40,
                  background:'radial-gradient(ellipse, rgba(249,115,22,.07) 0%, transparent 65%)',
                  filter:'blur(30px)', pointerEvents:'none',
                }} />

                {/* funnel visualization */}
                <div style={{
                  borderRadius:20, overflow:'hidden',
                  background:'rgba(12,12,12,.95)',
                  border:'1px solid rgba(249,115,22,.15)',
                  boxShadow:'0 32px 64px rgba(0,0,0,.5)',
                  position:'relative',
                }}>
                  {/* header */}
                  <div style={{
                    padding:'16px 22px',
                    borderBottom:'1px solid rgba(255,255,255,.05)',
                    display:'flex', alignItems:'center', gap:8,
                    background:'rgba(249,115,22,.04)',
                  }}>
                    <div style={{ width:8, height:8, borderRadius:'50%', background:'#f97316', boxShadow:'0 0 8px rgba(249,115,22,.8)' }} />
                    <span className="dm-mono" style={{ fontSize:10, color:'rgba(255,255,255,.4)', letterSpacing:'.1em' }}>
                      CONVERSION FUNNEL
                    </span>
                  </div>

                  <div style={{ padding:'24px 22px', display:'flex', flexDirection:'column', gap:10 }}>
                    {[
                      { label: language ? 'ইম্প্রেশন'  : 'Impressions',  val:'124,500', w:'100%', color:'#60a5fa' },
                      { label: language ? 'ক্লিক'       : 'Clicks',       val: '18,240',  w: '72%', color:'#c084fc' },
                      { label: language ? 'ল্যান্ডিং'   : 'Landing Page', val:  '9,820',  w: '48%', color:'#fb923c' },
                      { label: language ? 'লিড'          : 'Leads',        val:  '2,460',  w: '28%', color:'#4ade80' },
                      { label: language ? 'কনভার্শন'    : 'Conversions',  val:    '874',  w: '14%', color:'#f97316' },
                    ].map((row, i) => (
                      <div key={i}>
                        <div style={{
                          display:'flex', justifyContent:'space-between',
                          marginBottom:6, fontSize:11,
                        }}>
                          <span style={{ color:'rgba(255,255,255,.50)', letterSpacing:'.04em' }}>{row.label}</span>
                          <span className="dm-mono" style={{ color:'rgba(255,255,255,.70)', fontWeight:600 }}>{row.val}</span>
                        </div>
                        <div style={{
                          height:8, borderRadius:4,
                          background:'rgba(255,255,255,.05)', overflow:'hidden',
                        }}>
                          <motion.div
                            initial={{ width:0 }}
                            animate={whyInView ? { width:row.w } : { width:0 }}
                            transition={{ duration:0.8, delay:0.3+i*0.12, ease:EO }}
                            style={{ height:'100%', borderRadius:4, background:row.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* bottom ROI tag */}
                  <div style={{
                    margin:'0 22px 22px',
                    padding:'14px 18px', borderRadius:12,
                    background:'rgba(249,115,22,.08)',
                    border:'1px solid rgba(249,115,22,.18)',
                    display:'flex', alignItems:'center', justifyContent:'space-between',
                  }}>
                    <span style={{ fontSize:12, color:'rgba(255,255,255,.50)' }}>
                      {language ? 'মোট ROI' : 'Total ROI'}
                    </span>
                    <span className="dm-display" style={{ fontSize:22, fontWeight:900, color:'#f97316' }}>
                      3.8×
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            § 5  CTA BANNER
        ═══════════════════════════════════════════ */}
        <section style={{
          borderTop:'1px solid rgba(255,255,255,.05)',
          padding:'80px 0', position:'relative', overflow:'hidden',
        }}>
          {/* bg glow */}
          <div style={{
            position:'absolute', inset:0,
            background:'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(249,115,22,.08) 0%, transparent 70%)',
            pointerEvents:'none',
          }} />
          <div style={{
            position:'absolute', top:0, left:0, right:0, height:1,
            background:'linear-gradient(to right, transparent, rgba(249,115,22,.4), transparent)',
          }} />

          <div className="container mx-auto px-6" style={{ textAlign:'center', position:'relative', zIndex:1 }}>
            <motion.div
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.6, ease:EO }}
            >
              <h2 className="dm-display" style={{
                fontSize:'clamp(28px,4vw,54px)', fontWeight:900, color:'#fff',
                letterSpacing:'-0.03em', lineHeight:1.05, marginBottom:20,
              }}>
                {language ? (
                  <>আজই শুরু করুন আপনার <span className="dm-grad-text">ডিজিটাল যাত্রা</span></>
                ) : (
                  <>Ready to <span className="dm-grad-text">Scale Your Brand?</span></>
                )}
              </h2>
              <p style={{
                fontSize:16, color:'rgba(255,255,255,.40)',
                maxWidth:480, margin:'0 auto 36px', lineHeight:1.75,
              }}>
                {language
                  ? 'আমাদের বিশেষজ্ঞ টিমের সাথে কথা বলুন এবং আপনার ব্যবসার জন্য কাস্টম স্ট্র্যাটেজি তৈরি করুন।'
                  : 'Talk to our expert team and get a custom strategy built specifically for your business goals.'}
              </p>
              <Link href="/contact" className="dm-display dm-cta-btn"
                style={{
                  display:'inline-flex', alignItems:'center', gap:8,
                  padding:'16px 36px', borderRadius:14,
                  background:'#ea580c', color:'#fff',
                  fontSize:15, fontWeight:800, letterSpacing:'.04em',
                  textDecoration:'none',
                }}
              >
                {language ? 'ফ্রি কনসালটেন্সি নিন' : 'Start Free Consultation'}
                <ArrowRight style={{ width:17, height:17 }} />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}