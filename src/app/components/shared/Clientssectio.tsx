// Path: src/app/components/shared/ClientsSection.tsx
'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Handshake, ExternalLink } from 'lucide-react';

/* ─── Styles ─────────────────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  .cl-root    { font-family: 'DM Sans', sans-serif; }
  .cl-display { font-family: 'Syne', sans-serif !important; }

  /* ── Gradient text ── */
  @keyframes cl-gradX {
    0%,100% { background-position:0% 50% }
    50%      { background-position:100% 50% }
  }
  .cl-grad {
    background: linear-gradient(135deg,#f97316 0%,#ef4444 50%,#f59e0b 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: cl-gradX 5s ease infinite;
  }

  /* ── Ticker scroll animations ── */
  @keyframes cl-scrollL {
    0%   { transform: translateX(0) }
    100% { transform: translateX(-50%) }
  }
  @keyframes cl-scrollR {
    0%   { transform: translateX(-50%) }
    100% { transform: translateX(0) }
  }

  .cl-track-l { animation: cl-scrollL 30s linear infinite; }
  .cl-track-r { animation: cl-scrollR 36s linear infinite; }

  /* Pause on hover */
  .cl-row:hover .cl-track-l,
  .cl-row:hover .cl-track-r { animation-play-state: paused; }

  /* ── Card hover ── */
  .cl-card {
    transition: transform .35s cubic-bezier(.175,.885,.32,1.275),
                border-color .3s ease,
                box-shadow .3s ease;
    cursor: default;
  }
  .cl-card:hover {
    transform: translateY(-6px) scale(1.03);
    border-color: rgba(249,115,22,.4) !important;
    box-shadow: 0 16px 48px rgba(249,115,22,.14),
                0 4px 16px rgba(0,0,0,.4) !important;
  }
  .cl-card:hover .cl-logo-bg {
    background: rgba(249,115,22,.12) !important;
    border-color: rgba(249,115,22,.3) !important;
  }
  .cl-card:hover .cl-initials {
    color: #f97316 !important;
  }
  .cl-card:hover .cl-company-name {
    color: #fff !important;
  }

  /* ── Grid pattern ── */
  .cl-grid {
    background-image:
      linear-gradient(rgba(249,115,22,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(249,115,22,.04) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  /* ── Fade masks on rows ── */
  .cl-fade-mask {
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 12%,
      black 88%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 12%,
      black 88%,
      transparent 100%
    );
  }

  /* ── Stats counter ── */
  .cl-stat {
    transition: border-color .25s, transform .25s;
  }
  .cl-stat:hover {
    border-color: rgba(249,115,22,.3) !important;
    transform: translateY(-4px);
  }
`;

/* ─── Company Data ────────────────────────────────────────────────
   Replace imgSrc with real logo path (e.g. '/logos/daraz.svg')
   when you have actual logo files. Until then, initials + color
   create a professional placeholder.
─────────────────────────────────────────────────────────────────── */
const ROW_ONE = [
  { name: 'Daraz BD',          initials: 'DZ', color: '#f97316', industry: 'E-Commerce'      },
  { name: 'bKash Limited',     initials: 'BK', color: '#e11d48', industry: 'FinTech'          },
  { name: 'Grameenphone',      initials: 'GP', color: '#3b82f6', industry: 'Telecom'          },
  { name: 'ShajGoj',           initials: 'SG', color: '#8b5cf6', industry: 'Real Estate'      },
  { name: '10 Minute School',  initials: '10', color: '#f59e0b', industry: 'EdTech'           },
  { name: 'Chaldal',           initials: 'CL', color: '#22c55e', industry: 'Grocery'          },
  { name: 'Pathao',            initials: 'PH', color: '#ec4899', industry: 'Ride-sharing'     },
  { name: 'SSL Wireless',      initials: 'SW', color: '#06b6d4', industry: 'Payment Gateway'  },
];

const ROW_TWO = [
  { name: 'Shohoz',            initials: 'SH', color: '#f97316', industry: 'Transport'        },
  { name: 'ACI Limited',       initials: 'AC', color: '#64748b', industry: 'FMCG'             },
  { name: 'Robi Axiata',       initials: 'RB', color: '#ef4444', industry: 'Telecom'          },
  { name: 'BRAC Bank',         initials: 'BB', color: '#16a34a', industry: 'Banking'          },
  { name: 'Shajahan Silks',    initials: 'SS', color: '#d97706', industry: 'Fashion'          },
  { name: 'Cookups BD',        initials: 'CK', color: '#dc2626', industry: 'Food Tech'        },
  { name: 'Khaas Food',        initials: 'KF', color: '#15803d', industry: 'Organic Food'     },
  { name: 'Truck Lagbe',       initials: 'TL', color: '#7c3aed', industry: 'Logistics'        },
];

/* ─── Stat Data ───────────────────────────────────────────────────── */
const STATS = [
  { numEN: '50+',  numBN: '৫০+',  labelEN: 'Projects Done',      labelBN: 'প্রজেক্ট সম্পন্ন'  },
  { numEN: '30+',  numBN: '৩০+',  labelEN: 'Happy Clients',       labelBN: 'সন্তুষ্ট ক্লায়েন্ট' },
  { numEN: '15+',  numBN: '১৫+',  labelEN: 'Industries Served',   labelBN: 'ইন্ডাস্ট্রি'        },
  { numEN: '100%', numBN: '১০০%', labelEN: 'Client Satisfaction', labelBN: 'ক্লায়েন্ট সন্তুষ্টি' },
];

/* ─── Logo Card Component ─────────────────────────────────────────── */
function LogoCard({ name, initials, color, industry }: {
  name: string; initials: string; color: string; industry: string;
}) {
  return (
    <div className="cl-card" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: 10, padding: '18px 22px',
      background: 'rgba(255,255,255,.03)',
      border: '1px solid rgba(255,255,255,.07)',
      borderRadius: 18,
      backdropFilter: 'blur(12px)',
      minWidth: 140, flexShrink: 0,
      boxShadow: '0 4px 20px rgba(0,0,0,.25)',
    }}>
      {/* Logo placeholder */}
      <div className="cl-logo-bg" style={{
        width: 52, height: 52, borderRadius: 14,
        background: `${color}14`,
        border: `1px solid ${color}28`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background .3s, border-color .3s',
      }}>
        <span className="cl-initials cl-display" style={{
          fontSize: 17, fontWeight: 900,
          color, letterSpacing: '-0.03em',
          transition: 'color .3s',
        }}>
          {initials}
        </span>
      </div>

      {/* Company name */}
      <div style={{ textAlign: 'center' }}>
        <p className="cl-company-name" style={{
          fontSize: 12, fontWeight: 700, color: '#d1d5db',
          whiteSpace: 'nowrap', lineHeight: 1.2,
          transition: 'color .3s',
        }}>
          {name}
        </p>
        <p style={{
          fontSize: 10, color: '#4b5563', fontWeight: 500,
          marginTop: 2, whiteSpace: 'nowrap',
        }}>
          {industry}
        </p>
      </div>
    </div>
  );
}

/* ─── Ticker Row ─────────────────────────────────────────────────── */
function TickerRow({ items, direction }: {
  items: typeof ROW_ONE; direction: 'left' | 'right';
}) {
  const doubled = [...items, ...items]; // seamless loop
  return (
    <div className="cl-row cl-fade-mask" style={{ overflow: 'hidden', width: '100%' }}>
      <div
        className={direction === 'left' ? 'cl-track-l' : 'cl-track-r'}
        style={{ display: 'flex', gap: 16, width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <LogoCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export function ClientsSection() {
  const { language } = useLanguage();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <section className="cl-root cl-grid" style={{
        position: 'relative', width: '100%',
        background: '#070707', overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,.05)',
      }}>

        {/* ── Ambient orbs ── */}
        <div style={{
          position: 'absolute', top: '20%', left: '10%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,.06) 0%, transparent 65%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '10%',
          width: 320, height: 320, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,.05) 0%, transparent 65%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        {/* ── Top border glow ── */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(to right, transparent, rgba(249,115,22,.4), transparent)',
        }} />

        <div style={{ position: 'relative', zIndex: 5 }}>

          {/* ════════════════════════════════
              SECTION HEADER
          ════════════════════════════════ */}
          <div className="container mx-auto" style={{ padding: '80px 24px 56px', textAlign: 'center' }}>

            {/* Badge */}
            <div style={{ marginBottom: 20 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 18px', borderRadius: 9999,
                border: '1px solid rgba(249,115,22,.30)',
                background: 'rgba(249,115,22,.07)',
                color: '#fb923c', fontSize: 11, fontWeight: 700,
                letterSpacing: '.14em', textTransform: 'uppercase',
                backdropFilter: 'blur(8px)',
              }}>
                <Handshake style={{ width: 13, height: 13 }} />
                {language ? 'আমাদের ক্লায়েন্ট' : 'Our Clients'}
              </span>
            </div>

            {/* Title */}
            <h2 className="cl-display" style={{
              fontSize: 'clamp(28px, 5vw, 60px)',
              fontWeight: 900, lineHeight: 1,
              letterSpacing: '-0.03em', color: '#fff',
              marginBottom: 16,
            }}>
              {language
                ? <>যাদের সাথে আমরা <span className="cl-grad">কাজ করেছি</span></>
                : <>Companies We've <span className="cl-grad">Worked With</span></>
              }
            </h2>

            <p style={{
              color: '#6b7280', fontSize: 16, fontWeight: 300,
              lineHeight: 1.7, maxWidth: 520, margin: '0 auto',
            }}>
              {language
                ? 'বাংলাদেশের শীর্ষস্থানীয় ব্র্যান্ড থেকে শুরু করে স্টার্টআপ পর্যন্ত, আমরা বিভিন্ন ইন্ডাস্ট্রিতে সফলভাবে কাজ করেছি।'
                : 'From Bangladesh\'s leading brands to emerging startups — we\'ve delivered results across diverse industries.'
              }
            </p>
          </div>

          {/* ════════════════════════════════
              TICKER ROWS
          ════════════════════════════════ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 80 }}>
            <TickerRow items={ROW_ONE} direction="left"  />
            <TickerRow items={ROW_TWO} direction="right" />
          </div>

          {/* ════════════════════════════════
              STATS ROW
          ════════════════════════════════ */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,.05)',
            borderBottom: '1px solid rgba(255,255,255,.05)',
            background: 'rgba(255,255,255,.02)',
          }}>
            <div className="container mx-auto" style={{ padding: '0 24px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 0,
              }}
                className="grid-cols-2 md:grid-cols-4"
              >
                {STATS.map((s, i) => (
                  <div key={i} className="cl-stat" style={{
                    padding: '32px 24px', textAlign: 'center',
                    borderRight: i < STATS.length - 1
                      ? '1px solid rgba(255,255,255,.05)' : 'none',
                    borderBottom: '0',
                    transition: 'border-color .25s, transform .25s',
                  }}>
                    <div className="cl-display" style={{
                      fontSize: 'clamp(28px, 4vw, 44px)',
                      fontWeight: 900, lineHeight: 1,
                      color: '#fff', marginBottom: 6,
                    }}>
                      <span className="cl-grad">
                        {language ? s.numBN : s.numEN}
                      </span>
                    </div>
                    <p style={{
                      fontSize: 12, fontWeight: 600, color: '#6b7280',
                      letterSpacing: '.06em', textTransform: 'uppercase',
                    }}>
                      {language ? s.labelBN : s.labelEN}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ════════════════════════════════
              CTA STRIP
          ════════════════════════════════ */}
          <div className="container mx-auto" style={{ padding: '56px 24px', textAlign: 'center' }}>
            <p style={{
              color: '#6b7280', fontSize: 15, fontWeight: 300,
              marginBottom: 24, lineHeight: 1.7,
            }}>
              {language
                ? 'আপনার ব্র্যান্ডকেও এই তালিকায় যোগ করতে চান?'
                : 'Want to add your brand to this list?'
              }
            </p>
            <a href="/contact" style={{ textDecoration: 'none' }}>
              <button className="cl-display" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 32px', borderRadius: 9999,
                background: '#ea580c', color: '#fff',
                fontWeight: 800, fontSize: 14, cursor: 'pointer',
                border: 'none',
                transition: 'background .2s, box-shadow .3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#f97316'; e.currentTarget.style.boxShadow = '0 0 40px rgba(249,115,22,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#ea580c'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <ExternalLink style={{ width: 15, height: 15 }} />
                {language ? 'আমাদের সাথে কাজ করুন' : "Let's Work Together"}
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}