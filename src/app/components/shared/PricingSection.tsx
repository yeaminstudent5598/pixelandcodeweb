<<<<<<< HEAD
'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Check, Crown, Zap, Star, ArrowRight, Sparkles } from 'lucide-react';

/* ─────────────────────────────────────────────
   Styles
───────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  .ps-display { font-family: 'Syne', sans-serif !important; }
  .ps-body    { font-family: 'DM Sans', sans-serif; }

  @keyframes ps-gradX  { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  @keyframes ps-pulse  { 0%,100%{box-shadow:0 0 0 0 rgba(249,115,22,.5)} 50%{box-shadow:0 0 0 10px rgba(249,115,22,0)} }
  @keyframes ps-glow   { 0%,100%{opacity:.6} 50%{opacity:1} }
  @keyframes ps-float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  @keyframes ps-shimmer {
    0%   { transform: translateX(-100%) skewX(-12deg); }
    100% { transform: translateX(250%)  skewX(-12deg); }
  }

  .ps-text-grad {
    background: linear-gradient(135deg, #f97316 0%, #ef4444 45%, #f59e0b 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ps-gradX 5s ease infinite;
  }
  .ps-grid {
    background-image:
      linear-gradient(rgba(249,115,22,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(249,115,22,.04) 1px, transparent 1px);
    background-size: 56px 56px;
  }

  /* Base card */
  .ps-card {
    position: relative;
    display: flex; flex-direction: column;
    border-radius: 24px; overflow: hidden;
    border: 1px solid rgba(255,255,255,.07);
    background: rgba(255,255,255,.025);
    transition: border-color .3s, transform .3s, box-shadow .3s;
  }
  .ps-card:hover {
    border-color: rgba(255,255,255,.12);
    transform: translateY(-4px);
    box-shadow: 0 24px 60px rgba(0,0,0,.35);
  }

  /* Popular card */
  .ps-card-popular {
    border-color: rgba(249,115,22,.5) !important;
    background: rgba(249,115,22,.04) !important;
    box-shadow: 0 0 0 1px rgba(249,115,22,.2), 0 24px 80px rgba(249,115,22,.12) !important;
    animation: ps-float 6s ease-in-out infinite;
  }
  .ps-card-popular:hover {
    border-color: rgba(249,115,22,.7) !important;
    box-shadow: 0 0 0 1px rgba(249,115,22,.3), 0 32px 80px rgba(249,115,22,.2) !important;
  }

  /* Feature check icon */
  .ps-check {
    width: 18px; height: 18px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.1);
    transition: background .2s;
  }
  .ps-check-popular {
    background: rgba(249,115,22,.15) !important;
    border-color: rgba(249,115,22,.35) !important;
  }

  /* CTA buttons */
  .ps-btn {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    width: 100%; padding: 14px 24px; border-radius: 12px;
    font-weight: 700; font-size: 14px; text-decoration: none;
    border: 1px solid rgba(255,255,255,.1);
    background: rgba(255,255,255,.05); color: #d1d5db;
    transition: border-color .2s, background .2s, color .2s, transform .15s;
    cursor: pointer;
  }
  .ps-btn:hover {
    border-color: rgba(255,255,255,.2);
    background: rgba(255,255,255,.09); color: #fff;
    transform: translateY(-1px);
  }
  .ps-btn-popular {
    background: #ea580c !important;
    border-color: transparent !important;
    color: #fff !important;
    box-shadow: 0 0 28px rgba(249,115,22,.35);
  }
  .ps-btn-popular:hover {
    background: #f97316 !important;
    box-shadow: 0 0 48px rgba(249,115,22,.5) !important;
    transform: translateY(-2px);
  }

  .ps-consult:hover {
    color: #f97316 !important;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

/* ─────────────────────────────────────────────
   Types & Data
───────────────────────────────────────────── */
type PricePlan = {
  planName: string;
  price: string;
  subtitle: string;
  icon: React.ReactNode;
  features: string[];
  link: string;
  isPopular: boolean;
  accent: string;
  accentBg: string;
};

const DATA_BN: PricePlan[] = [
  {
    planName: 'সিলভার স্টার্টার',
    price: '৩,০০০',
    subtitle: 'নতুন উদ্যোক্তাদের জন্য সেরা',
    icon: <Zap style={{ width: 20, height: 20 }} />,
    features: [
      '৫–২০০ মেসেজ কনভারসেশন',
      '৩ দিন অ্যাক্টিভ বুস্ট',
      'বেসিক অডিয়েন্স টার্গেটিং',
      'অ্যাড রিপোর্ট',
    ],
    link: '/packages/silver',
    isPopular: false,
    accent: '#60a5fa', accentBg: 'rgba(59,130,246,.1)',
  },
  {
    planName: 'গোল্ড গ্রোথ',
    price: '৪,৫০০',
    subtitle: 'ব্যবসায় দ্রুত গ্রোথ আনতে',
    icon: <Crown style={{ width: 20, height: 20 }} />,
    features: [
      '২০০–৩০০ মেসেজ কনভারসেশন',
      '৭ দিন অ্যাক্টিভ বুস্ট',
      'অ্যাডভান্সড টার্গেটিং',
      'ফ্রি কপিরাইটিং',
      '২৪/৭ সাপোর্ট',
    ],
    link: '/packages/gold',
    isPopular: true,
    accent: '#f97316', accentBg: 'rgba(249,115,22,.1)',
  },
  {
    planName: 'ডায়মন্ড প্রো',
    price: '৭,৫০০',
    subtitle: 'ব্র্যান্ডিং এবং সর্বোচ্চ রিচ',
    icon: <Star style={{ width: 20, height: 20 }} />,
    features: [
      '৩০০–১০০০+ কনভারসেশন',
      '১৫ দিন অ্যাক্টিভ বুস্ট',
      'প্রিমিয়াম রি-টার্গেটিং',
      'ভিডিও অ্যাড অপটিমাইজেশন',
      'ডেডিকেটেড ম্যানেজার',
    ],
    link: '/packages/diamond',
    isPopular: false,
    accent: '#c084fc', accentBg: 'rgba(192,132,252,.1)',
  },
];

const DATA_EN: PricePlan[] = [
  {
    planName: 'Silver Starter',
    price: '3,000',
    subtitle: 'Best for New Entrepreneurs',
    icon: <Zap style={{ width: 20, height: 20 }} />,
    features: [
      '5–200 Message Conversations',
      '3 Days Active Boost',
      'Basic Audience Targeting',
      'Ad Reporting',
    ],
    link: '/packages/silver',
    isPopular: false,
    accent: '#60a5fa', accentBg: 'rgba(59,130,246,.1)',
  },
  {
    planName: 'Gold Growth',
    price: '4,500',
    subtitle: 'Accelerate Business Growth',
    icon: <Crown style={{ width: 20, height: 20 }} />,
    features: [
      '200–300 Message Conversations',
      '7 Days Active Boost',
      'Advanced Targeting',
      'Free Copywriting',
      '24/7 Support',
    ],
    link: '/packages/gold',
    isPopular: true,
    accent: '#f97316', accentBg: 'rgba(249,115,22,.1)',
  },
  {
    planName: 'Diamond Pro',
    price: '7,500',
    subtitle: 'Max Branding & Reach',
    icon: <Star style={{ width: 20, height: 20 }} />,
    features: [
      '300–1000+ Conversations',
      '15 Days Active Boost',
      'Premium Re-targeting',
      'Video Ad Optimization',
      'Dedicated Manager',
    ],
    link: '/packages/diamond',
    isPopular: false,
    accent: '#c084fc', accentBg: 'rgba(192,132,252,.1)',
  },
];

/* ─────────────────────────────────────────────
   Pricing Card
───────────────────────────────────────────── */
function PricingCard({
  plan, index, language,
}: { plan: PricePlan; index: number; language: boolean }) {
  const p = plan.isPopular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.13 }}
      style={{ position: 'relative', zIndex: p ? 10 : 1 }}
    >
      {/* Popular glow backdrop */}
      {p && (
        <div style={{
          position: 'absolute', inset: -1, borderRadius: 26, zIndex: -1,
          background: 'rgba(249,115,22,.06)',
          boxShadow: '0 0 80px rgba(249,115,22,.18)',
          animation: 'ps-glow 3s ease-in-out infinite',
        }} />
      )}

      <div className={`ps-card ps-body ${p ? 'ps-card-popular' : ''}`}>

        {/* Top accent line */}
        <div style={{
          height: 3, width: '100%',
          background: p
            ? 'linear-gradient(90deg, #f97316, #ef4444, #f59e0b)'
            : `linear-gradient(90deg, ${plan.accent}60, transparent)`,
        }} />

        {/* Popular badge */}
        {p && (
          <div style={{
            position: 'absolute', top: -14, left: '50%',
            transform: 'translateX(-50%)',
            padding: '5px 16px', borderRadius: 9999,
            background: 'linear-gradient(135deg, #f97316, #ea580c)',
            color: '#fff', fontSize: 11, fontWeight: 800,
            letterSpacing: '.08em', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: 5,
            boxShadow: '0 4px 20px rgba(249,115,22,.45)',
            whiteSpace: 'nowrap', zIndex: 20,
          }}>
            <Crown style={{ width: 11, height: 11, fill: 'currentColor' }} />
            {language ? 'মোস্ট পপুলার' : 'Most Popular'}
          </div>
        )}

        <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>

          {/* Icon + Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <div style={{
              width: 46, height: 46, borderRadius: 13,
              background: plan.accentBg,
              border: `1px solid ${plan.accent}35`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: plan.accent, flexShrink: 0,
            }}>
              {plan.icon}
            </div>
            <div>
              <div className="ps-display" style={{
                fontSize: 17, fontWeight: 800, color: '#fff',
                letterSpacing: '-0.02em', lineHeight: 1.2,
              }}>
                {plan.planName}
              </div>
              <div style={{ fontSize: 11, color: p ? '#fdba74' : '#6b7280', marginTop: 2, fontWeight: 400 }}>
                {plan.subtitle}
              </div>
            </div>
          </div>

          {/* Price */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span className="ps-display" style={{
                fontSize: 44, fontWeight: 900, color: '#fff', lineHeight: 1,
              }}>
                ৳{plan.price}
              </span>
              <span style={{ fontSize: 13, color: '#6b7280', marginLeft: 4 }}>
                /{language ? 'ক্যাম্পেইন' : 'campaign'}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            height: 1, marginBottom: 24,
            background: p ? 'rgba(249,115,22,.2)' : 'rgba(255,255,255,.06)',
          }} />

          {/* Features */}
          <ul style={{
            display: 'flex', flexDirection: 'column', gap: 12,
            marginBottom: 28, flex: 1,
          }}>
            {plan.features.map((feature, fi) => (
              <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div className={`ps-check ${p ? 'ps-check-popular' : ''}`}>
                  <Check style={{ width: 10, height: 10, color: p ? '#f97316' : '#9ca3af' }} />
                </div>
                <span style={{ fontSize: 13, color: p ? '#e5e7eb' : '#9ca3af', fontWeight: 400, lineHeight: 1.5 }}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link href={plan.link} className={`ps-btn ps-display ${p ? 'ps-btn-popular' : ''}`}>
            {language ? 'প্যাকেজটি নিন' : 'Choose Plan'}
            <ArrowRight style={{ width: 15, height: 15 }} />
          </Link>

        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
export function PricingSection() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const data = language ? DATA_BN : DATA_EN;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <section
        id="pricing"
        ref={ref}
        className="ps-body ps-grid"
        style={{
          position: 'relative', width: '100%', overflow: 'hidden',
          paddingTop: 96, paddingBottom: 112,
          background: '#080808',
          borderTop: '1px solid rgba(255,255,255,.05)',
        }}
      >
        {/* ── Ambient orbs ── */}
        <div style={{
          position: 'absolute', top: '5%', left: '5%',
          width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,.08) 0%, transparent 65%)',
          filter: 'blur(70px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', right: '5%',
          width: 420, height: 420, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,132,252,.06) 0%, transparent 65%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>

          {/* ── Header ── */}
          <div style={{ textAlign: 'center', marginBottom: 72 }}>

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
                {language ? 'আমাদের প্যাকেজ' : 'Pricing Plans'}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="ps-display"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 900, lineHeight: 0.95,
                letterSpacing: '-0.03em', color: '#fff', marginBottom: 20,
              }}
            >
              {language ? (
                <>আপনার বাজেটের মধ্যেই<br /><span className="ps-text-grad">সেরা ফলাফল</span></>
              ) : (
                <>Best Results Within<br /><span className="ps-text-grad">Your Budget</span></>
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
                ? 'ছোট উদ্যোক্তা থেকে বড় ব্র্যান্ড — সবার জন্যই আমাদের পারফেক্ট সল্যুশন রয়েছে।'
                : 'From small startups to big brands — we have the perfect plan for every stage of growth.'}
            </motion.p>
          </div>

          {/* ── Cards ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: 24,
            alignItems: 'center',
            marginBottom: 64,
          }}>
            {data.map((plan, i) => (
              <PricingCard key={i} plan={plan} index={i} language={language} />
            ))}
          </div>

          {/* ── Bottom consult row ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ textAlign: 'center' }}
          >
            {/* Divider */}
            <div style={{
              height: 1, maxWidth: 320, margin: '0 auto 28px',
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,.1), transparent)',
            }} />

            <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 12 }}>
              {language ? 'কাস্টম রিকমেন্ডেশন দরকার?' : 'Need a custom recommendation?'}
            </p>
            <Link
              href="/contact"
              className="ps-consult ps-display"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                color: '#9ca3af', fontSize: 14, fontWeight: 700,
                textDecoration: 'none', transition: 'color .2s',
              }}
            >
              {language ? 'ফ্রি কনসালটেশন নিন' : 'Get Free Consultation'}
              <ArrowRight style={{ width: 14, height: 14 }} />
            </Link>
          </motion.div>

        </div>
      </section>
    </>
=======
// src/components/shared/PricingSection.tsx
'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

// প্যাকেজগুলোর ডেটা
const packagesDataBn = [
  {
    planName: 'সিলভার প্যাকেজ',
    imageSrc: '/Service-01.jpg', // ❗️ আপনার নিজের ছবি দিন
    alt: 'Silver Package Banner',
    priceUSD: 20,
    priceBDT: 3000,
    boostAmount: 3000,
    boostDescription: '৫-২০০ মেসেজ কনভারসেশন',
    link: '/package/silver',
    isPopular: false,
  },
  {
    planName: 'গোল্ড প্যাকেজ',
    imageSrc: '/Service-02.jpg', // ❗️ আপনার নিজের ছবি দিন
    alt: 'Gold Package Banner',
    priceUSD: 30,
    priceBDT: 4500,
    boostAmount: 4500,
    boostDescription: '২০০-৩০০ মেসেজ কনভারসেশন',
    link: '/package/gold',
    isPopular: true,
  },
  {
    planName: 'ডায়মন্ড প্যাকেজ',
    imageSrc: '/Service-03.jpg', // ❗️ আপনার নিজের ছবি দিন
    alt: 'Diamond Package Banner',
    priceUSD: 50,
    priceBDT: 7500,
    boostAmount: 10000,
    boostDescription: '৩০০-১০০০ মেসেজ কনভারসেশন',
    link: '/package/diamond',
    isPopular: false,
  },
];
const packagesDataEn = [
  {
    planName: 'Silver Package',
    imageSrc: '/Service-01.jpg', // ❗️ আপনার নিজের ছবি দিন
    alt: 'Silver Package Banner',
    priceUSD: 20,
    priceBDT: 3000,
    boostAmount: 3000,
    boostDescription: '5-200 message conversations',
    link: '/package/silver',
    isPopular: false,
  },
  {
    planName: 'Gold Package',
    imageSrc: '/Service-02.jpg', // ❗️ আপনার নিজের ছবি দিন
    alt: 'Gold Package Banner',
    priceUSD: 30,
    priceBDT: 4500,
    boostAmount: 4500,
    boostDescription: '200-300 message conversations',
    link: '/package/gold',
    isPopular: true,
  },
  {
    planName: 'Diamond Package',
    imageSrc: '/Service-03.jpg', // ❗️ আপনার নিজের ছবি দিন
    alt: 'Diamond Package Banner',
    priceUSD: 50,
    priceBDT: 7500,
    boostAmount: 10000,
    boostDescription: '300-1000 message conversations',
    link: '/package/diamond',
    isPopular: false,
  },
];

export function PricingSection() {
  const { language } = useLanguage();
  return (
    <section className="w-full bg-white dark:bg-background py-20 sm:py-28 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <h2 className="mb-12 text-center text-3xl font-extrabold text-green-700 dark:text-green-500 md:text-4xl">
          {language
            ? 'অ্যাডভার্টাইজ মার্কেটিং করে পৌঁছে যান সঠিক কাস্টমারের কাছে!'
            : 'Reach the Right Customers Through Advertise Marketing!'}
        </h2>

        {/* প্যাকেজ কার্ডগুলোর গ্রিড */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(language ? packagesDataBn : packagesDataEn).map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col overflow-hidden rounded-lg border-2 bg-gray-50 dark:bg-gray-900 dark:border-gray-800 shadow-lg transition-transform duration-300 ${
                item.isPopular
                  ? 'scale-105 border-green-500 dark:border-green-500'
                  : 'border-transparent hover:border-gray-200 dark:hover:border-gray-700'
              }`}
            >
              {item.isPopular && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-500 px-4 py-1 text-sm font-bold text-white">
                  {language ? 'জনপ্রিয়' : 'Popular'}
                </div>
              )}

              <div className="p-4">
                <h3 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {item.planName}
                </h3>
                <div className="relative mt-2 h-auto w-full">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    width={600}
                    height={300}
                    className="w-full rounded-md object-cover"
                  />
                </div>
              </div>

              {/* টেক্সট এবং বাটন অংশ */}
              <div className="flex flex-grow flex-col p-6 pt-2 text-center">
                <p className="font-bold text-gray-800 dark:text-gray-100">
                  {language
                    ? `পোস্ট বুস্ট করুন ${item.boostAmount.toLocaleString(
                        'bn-BD'
                      )} টাকায়!`
                    : `Boost your post for ${item.boostAmount.toLocaleString(
                        'en-US'
                      )} BDT!`}
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {item.boostDescription}
                </p>

                <Button
                  asChild
                  className="mt-6 w-full rounded-md bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
                >
                  <Link href={item.link}>
                    {language ? 'ক্যাম্পেইন সেট করুন' : 'Set Campaign'}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-green-600 px-10 py-6 text-lg text-white shadow-md transition-transform hover:scale-105 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
          >
            <Link href="/packages">
              {language ? 'প্যাকেজ সমূহ...' : 'View Packages...'}
            </Link>
          </Button>
        </div>
      </div>
    </section>
>>>>>>> origin/development
  );
}