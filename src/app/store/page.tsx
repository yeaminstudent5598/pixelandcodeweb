'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { products } from '@/lib/storeData';
import { ProductCard } from '@/app/components/store/ProductCard';
import { ShoppingBag, Zap, Globe, Search, SlidersHorizontal } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

/* ─── Styles ──────────────────────────────────────────────────────── */
const STORE_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
  .st-root    { font-family:'DM Sans',sans-serif; }
  .st-display { font-family:'Syne',sans-serif !important; }
  .st-mono    { font-family:'JetBrains Mono',monospace !important; }

  @keyframes st-gradX { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  @keyframes st-pulse  { 0%,100%{opacity:1} 50%{opacity:.35} }
  @keyframes st-spinCW { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes st-ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

  .st-grad-text {
    background:linear-gradient(135deg,#f97316 0%,#ef4444 45%,#f59e0b 100%);
    background-size:200% 200%;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    background-clip:text; animation:st-gradX 4s ease infinite;
  }
  .st-grid-bg {
    background-image:
      linear-gradient(rgba(249,115,22,.04) 1px, transparent 1px),
      linear-gradient(90deg,rgba(249,115,22,.04) 1px, transparent 1px);
    background-size:60px 60px;
  }
  .st-filter-btn { transition:all .25s; }
  .st-filter-btn:hover {
    border-color:rgba(249,115,22,.45) !important;
    color:#fb923c !important;
  }
  .st-filter-btn.active {
    background:rgba(249,115,22,.12) !important;
    border-color:rgba(249,115,22,.40) !important;
    color:#f97316 !important;
  }
  .st-search-input:focus { outline:none; border-color:rgba(249,115,22,.45) !important; }
`;

/* ─── Category list ───────────────────────────────────────────────── */
type Lang = { en: string; bn: string };

const CATS: Lang[] = [
  { en: 'All',         bn: 'সব'            },
  { en: 'E-Commerce',  bn: 'ই-কমার্স'      },
  { en: 'Grocery',     bn: 'গ্রোসারি'      },
  { en: 'Marketplace', bn: 'মার্কেটপ্লেস'  },
  { en: 'Logistics & SaaS', bn: 'লজিস্টিকস ও সফটওয়্যার' },
  { en: 'Portfolio',   bn: 'পোর্টফোলিও'   },
];

const TICKER_WORDS = [
  'Next.js', 'React', 'Node.js', 'MongoDB', 'Flutter', 'Tailwind CSS',
  'Framer Motion', 'TypeScript', 'SSLCommerz', 'GSAP', 'Express', 'shadcn UI',
];

const EO = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ─── Page ────────────────────────────────────────────────────────── */
export default function StorePage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery,    setSearchQuery]    = useState('');
  const gridRef  = useRef(null);
  const gridView = useInView(gridRef, { once: true, margin: '-60px' });

  /* filter logic */
  const filtered = products.filter(p => {
    const matchCat = activeCategory === 'All' || p.categoryEn === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      p.titleEn.toLowerCase().includes(q) ||
      p.titleBn.toLowerCase().includes(q) ||
      p.categoryEn.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: STORE_STYLES }} />

      <main className="st-root st-grid-bg w-full overflow-x-hidden" style={{ background: '#080808', minHeight: '100vh' }}>

        {/* ══════════════════════════════════
            HERO
        ══════════════════════════════════ */}
        <section style={{
          position: 'relative', overflow: 'hidden',
          paddingTop: 140, paddingBottom: 80,
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          {/* ambient orb */}
          <div style={{
            position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
            width: 900, height: 600, borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(249,115,22,0.10) 0%, transparent 65%)',
            filter: 'blur(60px)', pointerEvents: 'none',
          }} />
          {/* top line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(to right, transparent, rgba(249,115,22,.5), transparent)',
          }} />
          {/* orbit ring */}
          <div style={{
            position: 'absolute', top: '50%', right: '-3%',
            width: 380, height: 380, marginTop: -190,
            borderRadius: '50%',
            border: '1px solid rgba(249,115,22,.06)',
            animation: 'st-spinCW 35s linear infinite',
            pointerEvents: 'none',
          }}>
            <div style={{
              position: 'absolute', top: -4, left: '50%', marginLeft: -4,
              width: 8, height: 8, borderRadius: '50%',
              background: '#f97316', boxShadow: '0 0 12px rgba(249,115,22,.9)',
            }} />
          </div>

          <div className="container mx-auto px-6" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>

            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EO }}
              style={{ marginBottom: 24 }}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 18px', borderRadius: 9999,
                border: '1px solid rgba(249,115,22,.28)',
                background: 'rgba(249,115,22,.07)',
                color: '#fb923c', fontSize: 11, fontWeight: 700,
                letterSpacing: '.14em', textTransform: 'uppercase',
              }}>
                <ShoppingBag style={{ width: 12, height: 12 }} />
                {language ? 'প্রিমিয়াম ডিজিটাল প্রোডাক্ট' : 'Premium Digital Products'}
              </span>
            </motion.div>

            {/* heading */}
            <motion.h1
              className="st-display"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EO, delay: 0.08 }}
              style={{
                fontSize: 'clamp(40px,6vw,80px)', fontWeight: 900,
                lineHeight: 0.95, letterSpacing: '-0.03em',
                color: '#fff', marginBottom: 20,
              }}
            >
              Pixel &amp; Code{' '}
              <span className="st-grad-text">Store</span>
            </motion.h1>

            {/* subtext */}
            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EO, delay: 0.15 }}
              style={{
                fontSize: 16, color: 'rgba(255,255,255,.42)',
                maxWidth: 540, margin: '0 auto 16px', lineHeight: 1.8,
              }}
            >
              {language
                ? 'প্রতিটি প্রোডাক্ট ১০০% প্রোডাকশন-রেডি, উচ্চ-পারফরম্যান্ট এবং আপনার ব্যবসার জন্য কাস্টমাইজযোগ্য।'
                : 'Every product is 100% production-ready, high-performance, and customizable for your business needs.'}
            </motion.p>

            {/* mini stats */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'inline-flex', gap: 32, marginTop: 8, marginBottom: 40 }}
            >
              {[
                { num: products.length + '+', label: language ? 'প্রোডাক্ট' : 'Products' },
                { num: '100%',  label: language ? 'প্রোডাকশন-রেডি' : 'Production-Ready' },
                { num: '50+',   label: language ? 'ক্লায়েন্ট' : 'Clients Served' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div className="st-display" style={{ fontSize: 24, fontWeight: 900, color: '#fff', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,.30)', marginTop: 4, letterSpacing: '.08em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* search bar */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EO, delay: 0.22 }}
              style={{
                maxWidth: 460, margin: '0 auto',
                position: 'relative',
              }}
            >
              <Search style={{
                position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
                width: 16, height: 16, color: 'rgba(255,255,255,0.30)',
                pointerEvents: 'none',
              }} />
              <input
                type="text"
                className="st-search-input"
                placeholder={language ? 'প্রোডাক্ট খুঁজুন...' : 'Search products...'}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%', padding: '13px 16px 13px 44px',
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  color: '#fff', fontSize: 14,
                  transition: 'border-color .25s',
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* ── Ticker ── */}
        <div style={{
          borderBottom: '1px solid rgba(255,255,255,.05)',
          padding: '12px 0', background: 'rgba(249,115,22,.025)',
          overflow: 'hidden',
        }}>
          <div style={{ display: 'inline-flex', animation: 'st-ticker 28s linear infinite', whiteSpace: 'nowrap' }}>
            {[...TICKER_WORDS, ...TICKER_WORDS].map((w, i) => (
              <span key={i} className="st-mono" style={{
                fontSize: 10, color: 'rgba(255,255,255,.22)',
                letterSpacing: '.12em', textTransform: 'uppercase',
                marginRight: 44, flexShrink: 0,
              }}>
                <span style={{ color: 'rgba(249,115,22,.45)', marginRight: 14 }}>✦</span>
                {w}
              </span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════
            FILTER BAR + GRID
        ══════════════════════════════════ */}
        <section style={{ padding: '56px 0 80px' }}>
          <div className="container mx-auto px-6">

            {/* Category filter + count */}
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', gap: 16,
              marginBottom: 36, flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {CATS.map(cat => (
                  <button
                    key={cat.en}
                    onClick={() => setActiveCategory(cat.en)}
                    className={`st-filter-btn${activeCategory === cat.en ? ' active' : ''}`}
                    style={{
                      padding: '7px 16px', borderRadius: 9999,
                      border: `1px solid ${activeCategory === cat.en ? 'rgba(249,115,22,.40)' : 'rgba(255,255,255,.09)'}`,
                      background: activeCategory === cat.en ? 'rgba(249,115,22,.12)' : 'rgba(255,255,255,.03)',
                      color: activeCategory === cat.en ? '#f97316' : 'rgba(255,255,255,.45)',
                      fontSize: 12, fontWeight: 700,
                      letterSpacing: '.04em', cursor: 'pointer',
                      transition: 'all .25s',
                    }}
                  >
                    {language ? cat.bn : cat.en}
                  </button>
                ))}
              </div>

              <div className="st-mono" style={{
                fontSize: 12, color: 'rgba(255,255,255,.25)',
                letterSpacing: '.06em',
              }}>
                {filtered.length} {language ? 'টি প্রোডাক্ট' : 'products'}
              </div>
            </div>

            {/* Product grid */}
            <div ref={gridRef} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 24,
            }}>
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={gridView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: EO }}
                  style={{ height: '100%' }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                style={{ textAlign: 'center', padding: '80px 0' }}
              >
                <div style={{
                  width: 64, height: 64, borderRadius: '50%', margin: '0 auto 20px',
                  background: 'rgba(249,115,22,.08)',
                  border: '1px solid rgba(249,115,22,.20)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <SlidersHorizontal style={{ width: 24, height: 24, color: '#f97316' }} />
                </div>
                <p className="st-display" style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 8 }}>
                  {language ? 'কোনো প্রোডাক্ট পাওয়া যায়নি' : 'No products found'}
                </p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.35)' }}>
                  {language ? 'অন্য ক্যাটাগরি বা শব্দ দিয়ে খুঁজুন' : 'Try a different category or search term'}
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* ══════════════════════════════════
            BOTTOM CTA
        ══════════════════════════════════ */}
        <section style={{
          borderTop: '1px solid rgba(255,255,255,.05)',
          padding: '72px 0', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(249,115,22,.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(to right, transparent, rgba(249,115,22,.40), transparent)',
          }} />
          <div className="container mx-auto px-6" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EO }}
            >
              <h2 className="st-display" style={{
                fontSize: 'clamp(26px,3.5vw,46px)', fontWeight: 900, color: '#fff',
                letterSpacing: '-0.03em', marginBottom: 16,
              }}>
                {language ? (
                  <>কাস্টম সলিউশন দরকার? <span className="st-grad-text">আমাদের সাথে কথা বলুন।</span></>
                ) : (
                  <>Need a Custom Solution? <span className="st-grad-text">Let's Talk.</span></>
                )}
              </h2>
              <p style={{
                fontSize: 15, color: 'rgba(255,255,255,.38)',
                maxWidth: 440, margin: '0 auto 32px', lineHeight: 1.8,
              }}>
                {language
                  ? 'আপনার ব্যবসার জন্য পুরোপুরি কাস্টম ওয়েব বা অ্যাপ সলিউশন তৈরি করি আমরা।'
                  : "We build fully custom web and app solutions tailored precisely to your business."}
              </p>
              <a href="/contact"
                className="st-display"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 32px', borderRadius: 12,
                  background: '#ea580c', color: '#fff',
                  fontSize: 14, fontWeight: 800, letterSpacing: '.04em',
                  textDecoration: 'none', transition: 'background .25s, box-shadow .3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#f97316';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 32px rgba(249,115,22,.45)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#ea580c';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                }}
              >
                {language ? 'কাস্টম প্রজেক্ট শুরু করুন' : 'Start a Custom Project'}
                <Globe style={{ width: 15, height: 15 }} />
              </a>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}