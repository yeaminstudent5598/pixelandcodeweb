'use client';

import React, { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Handshake, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

/* ══════════════════════════════════════════════════════════════════
   STYLES
══════════════════════════════════════════════════════════════════ */
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

  /* ── Infinite scroll ── */
  @keyframes cl-toLeft  { from{transform:translateX(0)}  to{transform:translateX(-50%)} }
  @keyframes cl-toRight { from{transform:translateX(-50%)} to{transform:translateX(0)} }
  .cl-left  { animation: cl-toLeft  32s linear infinite; }
  .cl-right { animation: cl-toRight 40s linear infinite; }
  .cl-row:hover .cl-left,
  .cl-row:hover .cl-right { animation-play-state: paused; }

  /* ── Fade mask ── */
  .cl-fade {
    -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%);
    mask-image:         linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%);
  }

  /* ── Ticker cards ── */
  .cl-ticker-card {
    transition: transform .4s cubic-bezier(.175,.885,.32,1.275), box-shadow .3s;
    cursor: default;
  }
  .cl-ticker-card:hover {
    transform: translateY(-8px) scale(1.06) !important;
    box-shadow: 0 20px 50px rgba(249,115,22,.2), 0 0 0 1px rgba(249,115,22,.35) !important;
    z-index: 10;
    position: relative;
  }
  .cl-ticker-card:hover .cl-ti { color: #f97316 !important; }
  .cl-ticker-card:hover .cl-logo-box {
    background: rgba(249,115,22,.12) !important;
    border-color: rgba(249,115,22,.35) !important;
  }

  /* ── 3D cluster cards ── */
  .cl-float-card {
    transition: box-shadow .3s ease, border-color .3s ease;
  }

  /* ── Float keyframes ── */
  @keyframes cl-f1 { 0%,100%{transform:translateY(0px)  rotate(-6deg)} 50%{transform:translateY(-14px) rotate(-6deg)} }
  @keyframes cl-f2 { 0%,100%{transform:translateY(0px)  rotate(4deg)}  50%{transform:translateY(-18px) rotate(4deg)} }
  @keyframes cl-f3 { 0%,100%{transform:translateY(0px)  rotate(-3deg)} 50%{transform:translateY(-10px) rotate(-3deg)} }
  @keyframes cl-f4 { 0%,100%{transform:translateY(0px)  rotate(7deg)}  50%{transform:translateY(-20px) rotate(7deg)} }
  @keyframes cl-f5 { 0%,100%{transform:translateY(0px)  rotate(-9deg)} 50%{transform:translateY(-12px) rotate(-9deg)} }
  @keyframes cl-f6 { 0%,100%{transform:translateY(0px)  rotate(5deg)}  50%{transform:translateY(-16px) rotate(5deg)} }
  @keyframes cl-f7 { 0%,100%{transform:translateY(0px)  rotate(-4deg)} 50%{transform:translateY(-22px) rotate(-4deg)} }

  /* ── Orbital rings ── */
  @keyframes cl-orb-cw  { from{transform:translate(-50%,-50%) rotateX(66deg) rotate(0deg)}   to{transform:translate(-50%,-50%) rotateX(66deg) rotate(360deg)} }
  @keyframes cl-orb-ccw { from{transform:translate(-50%,-50%) rotateX(60deg) rotateY(40deg) rotate(0deg)} to{transform:translate(-50%,-50%) rotateX(60deg) rotateY(40deg) rotate(-360deg)} }
  @keyframes cl-orb-glow { 0%,100%{box-shadow:0 0 20px 4px rgba(249,115,22,.35)} 50%{box-shadow:0 0 50px 12px rgba(249,115,22,.60)} }

  /* ── Holographic shimmer on cluster cards ── */
  @keyframes cl-shimmer {
    0%   { background-position: -200% center }
    100% { background-position:  200% center }
  }
  .cl-shimmer::after {
    content:'';
    position:absolute; inset:0; border-radius:inherit;
    background: linear-gradient(105deg, transparent 40%, rgba(249,115,22,.08) 50%, transparent 60%);
    background-size: 200% 100%;
    animation: cl-shimmer 3s linear infinite;
    pointer-events: none;
  }

  /* ── Dot grid bg ── */
  .cl-dotgrid {
    background-image: radial-gradient(circle, rgba(249,115,22,.10) 1px, transparent 1px);
    background-size: 34px 34px;
  }

  /* ── Perspective grid floor ── */
  .cl-pgrid {
    background-image:
      linear-gradient(rgba(249,115,22,.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(249,115,22,.07) 1px, transparent 1px);
    background-size: 60px 60px;
    transform: perspective(600px) rotateX(55deg) scaleX(1.8);
    transform-origin: center bottom;
  }
`;

/* ══════════════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════════════ */
type Company = {
  name: string; initials: string; color: string; industry: string;
};

const ALL_CLIENTS: Company[] = [
  { name:'Daraz BD',         initials:'DZ', color:'#f97316', industry:'E-Commerce'     },
  { name:'bKash Limited',    initials:'BK', color:'#e11d48', industry:'FinTech'         },
  { name:'Grameenphone',     initials:'GP', color:'#3b82f6', industry:'Telecom'         },
  { name:'ShajGoj',          initials:'SG', color:'#8b5cf6', industry:'Real Estate'     },
  { name:'10 Minute School', initials:'10', color:'#f59e0b', industry:'EdTech'          },
  { name:'Chaldal',          initials:'CL', color:'#22c55e', industry:'Grocery'         },
  { name:'Pathao',           initials:'PH', color:'#ec4899', industry:'Ride-sharing'    },
  { name:'SSL Wireless',     initials:'SW', color:'#06b6d4', industry:'Payment'         },
  { name:'Shohoz',           initials:'SH', color:'#f97316', industry:'Transport'       },
  { name:'ACI Limited',      initials:'AC', color:'#64748b', industry:'FMCG'            },
  { name:'Robi Axiata',      initials:'RB', color:'#ef4444', industry:'Telecom'         },
  { name:'BRAC Bank',        initials:'BB', color:'#16a34a', industry:'Banking'         },
  { name:'Khaas Food',       initials:'KF', color:'#15803d', industry:'Organic Food'    },
  { name:'Truck Lagbe',      initials:'TL', color:'#7c3aed', industry:'Logistics'       },
  { name:'Cookups BD',       initials:'CK', color:'#dc2626', industry:'Food Tech'       },
  { name:'Shajahan Silks',   initials:'SS', color:'#d97706', industry:'Fashion'         },
];

// 7 featured clients shown in 3D cluster
const CLUSTER_CLIENTS = ALL_CLIENTS.slice(0, 7);

// Two ticker rows
const ROW1 = [...ALL_CLIENTS.slice(0,  8), ...ALL_CLIENTS.slice(0,  8)];
const ROW2 = [...ALL_CLIENTS.slice(8, 16), ...ALL_CLIENTS.slice(8, 16)];

const STATS = [
  { en:'50+',  bn:'৫০+',  enL:'Projects',       bnL:'প্রজেক্ট'      },
  { en:'30+',  bn:'৩০+',  enL:'Clients',         bnL:'ক্লায়েন্ট'     },
  { en:'15+',  bn:'১৫+',  enL:'Industries',      bnL:'ইন্ডাস্ট্রি'   },
  { en:'100%', bn:'১০০%', enL:'Satisfaction',    bnL:'সন্তুষ্টি'      },
];

// Float animations assigned to cluster positions
const FLOAT_ANIMS = ['cl-f1','cl-f2','cl-f3','cl-f4','cl-f5','cl-f6','cl-f7'];
const FLOAT_DUR   = [6,7,5,8,6.5,7.5,5.5];
const FLOAT_DEL   = [0,1,2,0.5,1.5,2.5,0.8];

/* ══════════════════════════════════════════════════════════════════
   TICKER CARD
══════════════════════════════════════════════════════════════════ */
function TickerCard({ name, initials, color, industry }: Company) {
  return (
    <div className="cl-ticker-card" style={{
      display:'flex', flexDirection:'column', alignItems:'center',
      gap:10, padding:'16px 20px',
      background:'rgba(255,255,255,.03)',
      border:'1px solid rgba(255,255,255,.07)',
      borderRadius:16, minWidth:130, flexShrink:0,
      backdropFilter:'blur(14px)',
    }}>
      <div className="cl-logo-box" style={{
        width:48, height:48, borderRadius:12,
        background:`${color}14`, border:`1px solid ${color}28`,
        display:'flex', alignItems:'center', justifyContent:'center',
        transition:'all .3s',
      }}>
        <span className="cl-ti cl-display" style={{
          fontSize:16, fontWeight:900, color,
          letterSpacing:'-0.03em', transition:'color .3s',
        }}>{initials}</span>
      </div>
      <div style={{textAlign:'center'}}>
        <p style={{fontSize:11,fontWeight:700,color:'#d1d5db',whiteSpace:'nowrap'}}>{name}</p>
        <p style={{fontSize:10,color:'#4b5563',marginTop:2,whiteSpace:'nowrap'}}>{industry}</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   3-D CLUSTER CARD  (mouse-tracked tilt)
══════════════════════════════════════════════════════════════════ */
function ClusterCard({
  company, style, animClass, dur, delay,
}: {
  company: Company;
  style: React.CSSProperties;
  animClass: string; dur: number; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r  = el.getBoundingClientRect();
    const x  = (e.clientX - r.left)  / r.width  - 0.5;
    const y  = (e.clientY - r.top)   / r.height - 0.5;
    el.style.transform =
      `perspective(700px) rotateY(${x * 22}deg) rotateX(${-y * 22}deg) scale(1.12) translateY(-8px)`;
    el.style.boxShadow = `0 28px 60px rgba(0,0,0,.55), 0 0 0 1.5px ${company.color}55, 0 0 30px ${company.color}30`;
    el.style.zIndex    = '20';
  };
  const onLeave = () => {
    const el = ref.current; if (!el) return;
    el.style.transform = '';
    el.style.boxShadow = '';
    el.style.zIndex    = '';
  };

  return (
    <div
      ref={ref}
      className={`cl-float-card cl-shimmer ${animClass}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        position:'absolute',
        animationDuration:`${dur}s`,
        animationDelay:`${delay}s`,
        animationTimingFunction:'ease-in-out',
        animationIterationCount:'infinite',
        willChange:'transform',
        padding:'14px 18px',
        background:'rgba(12,12,12,.9)',
        border:`1px solid rgba(255,255,255,.09)`,
        borderRadius:18,
        backdropFilter:'blur(20px)',
        display:'flex', alignItems:'center', gap:12,
        cursor:'default',
        transition:'box-shadow .3s, border-color .3s',
        ...style,
      }}
    >
      {/* Colored logo badge */}
      <div style={{
        width:42, height:42, borderRadius:10, flexShrink:0,
        background:`${company.color}18`,
        border:`1px solid ${company.color}35`,
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>
        <span className="cl-display" style={{
          fontSize:14, fontWeight:900, color:company.color,
        }}>{company.initials}</span>
      </div>
      <div>
        <p style={{fontSize:12,fontWeight:700,color:'#e5e7eb',whiteSpace:'nowrap'}}>{company.name}</p>
        <p style={{fontSize:10,color:'#6b7280',marginTop:1,whiteSpace:'nowrap'}}>{company.industry}</p>
      </div>
      {/* Glowing dot */}
      <div style={{
        position:'absolute', top:10, right:12,
        width:6, height:6, borderRadius:'50%',
        background:company.color,
        boxShadow:`0 0 8px ${company.color}`,
        opacity:.7,
      }} />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   3-D ORBITAL  (mini version matching AboutSection vibe)
══════════════════════════════════════════════════════════════════ */
function MiniOrbital() {
  return (
    <div style={{
      position:'absolute', bottom:'8%', right:'5%',
      width:120, height:120, zIndex:2, pointerEvents:'none',
    }}>
      {/* Core */}
      <div style={{
        position:'absolute', top:'50%', left:'50%',
        transform:'translate(-50%,-50%)',
        width:32, height:32, borderRadius:'50%',
        background:'linear-gradient(135deg,#f97316,#b91c1c)',
        boxShadow:'0 0 20px rgba(249,115,22,.7)',
        animation:'cl-orb-glow 3s ease-in-out infinite',
      }} />
      {/* Ring 1 */}
      <div style={{
        position:'absolute', top:'50%', left:'50%',
        width:80, height:80, borderRadius:'50%',
        border:'1px solid rgba(249,115,22,.25)',
        animation:'cl-orb-cw 10s linear infinite',
      }}>
        <div style={{
          position:'absolute', top:-3, left:'50%', transform:'translateX(-50%)',
          width:6, height:6, borderRadius:'50%',
          background:'#f97316', boxShadow:'0 0 8px rgba(249,115,22,.9)',
        }} />
      </div>
      {/* Ring 2 */}
      <div style={{
        position:'absolute', top:'50%', left:'50%',
        width:116, height:116, borderRadius:'50%',
        border:'1px solid rgba(239,68,68,.18)',
        animation:'cl-orb-ccw 15s linear infinite',
      }}>
        <div style={{
          position:'absolute', bottom:-3, left:'50%', transform:'translateX(-50%)',
          width:5, height:5, borderRadius:'50%',
          background:'#ef4444', boxShadow:'0 0 8px rgba(239,68,68,.9)',
        }} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════════ */
export function ClientsSection() {
  const { language } = useLanguage();

  // Cluster card layout positions
  const clusterPositions: React.CSSProperties[] = [
    { top:'5%',  left:'0%',  width:180 },
    { top:'2%',  right:'0%', width:165 },
    { top:'30%', left:'5%',  width:195 },
    { top:'25%', right:'2%', width:170 },
    { top:'55%', left:'0%',  width:185 },
    { top:'58%', right:'0%', width:160 },
    { top:'80%', left:'22%', width:175 },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <section className="cl-root" style={{
        position:'relative', width:'100%', overflow:'hidden',
        background:'#060606',
        borderTop:'1px solid rgba(255,255,255,.05)',
      }}>

        {/* ── Dot grid bg ── */}
        <div className="cl-dotgrid" style={{
          position:'absolute', inset:0, opacity:.6, pointerEvents:'none',
        }} />

        {/* ── Ambient orbs ── */}
        <div style={{
          position:'absolute', top:'10%', left:'5%',
          width:480, height:480, borderRadius:'50%',
          background:'radial-gradient(circle,rgba(249,115,22,.10) 0%,transparent 65%)',
          filter:'blur(70px)', pointerEvents:'none',
        }} />
        <div style={{
          position:'absolute', bottom:'15%', right:'5%',
          width:360, height:360, borderRadius:'50%',
          background:'radial-gradient(circle,rgba(59,130,246,.07) 0%,transparent 65%)',
          filter:'blur(60px)', pointerEvents:'none',
        }} />

        {/* ── Orange top line ── */}
        <div style={{
          position:'absolute', top:0, left:0, right:0, height:1,
          background:'linear-gradient(to right,transparent,rgba(249,115,22,.5),transparent)',
        }} />

        {/* ════════════════════════════════════════════════
            HERO AREA  ─  Left text  |  Right 3D cluster
        ════════════════════════════════════════════════ */}
        {/* ✅ FIX: Combined duplicated className attributes into one */}
        <div 
          className="container mx-auto grid-cols-1 lg:grid-cols-2" 
          style={{
            position:'relative', zIndex:5,
            display:'grid',
            gap:48, alignItems:'center',
            padding:'100px 24px 80px',
            minHeight:'70vh',
          }}
        >

          {/* ── LEFT : Text ── */}
          <div style={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>

            {/* Badge */}
            <div style={{ marginBottom:28 }}>
              <span style={{
                display:'inline-flex', alignItems:'center', gap:8,
                padding:'6px 18px', borderRadius:9999,
                border:'1px solid rgba(249,115,22,.30)',
                background:'rgba(249,115,22,.07)',
                color:'#fb923c', fontSize:11, fontWeight:700,
                letterSpacing:'.14em', textTransform:'uppercase',
                backdropFilter:'blur(8px)',
              }}>
                <Handshake style={{ width:13, height:13 }} />
                {language ? 'আমাদের ক্লায়েন্ট' : 'Our Clients'}
              </span>
            </div>

            {/* Title */}
            <h2 className="cl-display" style={{
              fontSize:'clamp(32px, 5vw, 68px)',
              fontWeight:900, lineHeight:.95,
              letterSpacing:'-0.03em', color:'#fff', marginBottom:20,
            }}>
              {language ? (
                <>যাদের সাথে<br/><span className="cl-grad">কাজ করেছি</span></>
              ) : (
                <>Brands We've<br/><span className="cl-grad">Worked With</span></>
              )}
            </h2>

            {/* Divider */}
            <div style={{
              width:48, height:2, borderRadius:1,
              background:'linear-gradient(to right,#f97316,transparent)',
              marginBottom:20,
            }} />

            {/* Subtitle */}
            <p style={{
              color:'#6b7280', fontSize:16, lineHeight:1.8,
              fontWeight:300, maxWidth:420, marginBottom:36,
            }}>
              {language
                ? 'বাংলাদেশের শীর্ষ ব্র্যান্ড থেকে উদীয়মান স্টার্টআপ পর্যন্ত — আমরা বিভিন্ন ইন্ডাস্ট্রিতে সফলভাবে ডেলিভার করেছি।'
                : "From Bangladesh's top brands to ambitious startups — we've consistently delivered across industries."
              }
            </p>

            {/* Mini stats */}
            <div style={{ display:'flex', gap:24, flexWrap:'wrap', marginBottom:40 }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  padding:'14px 20px', borderRadius:14,
                  background:'rgba(255,255,255,.03)',
                  border:'1px solid rgba(255,255,255,.07)',
                  textAlign:'center', minWidth:80,
                  backdropFilter:'blur(8px)',
                  transition:'border-color .3s, transform .3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(249,115,22,.3)'; e.currentTarget.style.transform='translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,.07)'; e.currentTarget.style.transform='translateY(0)'; }}
                >
                  <div className="cl-display cl-grad" style={{
                    fontSize:28, fontWeight:900, lineHeight:1,
                  }}>
                    {language ? s.bn : s.en}
                  </div>
                  <div style={{ fontSize:11, color:'#6b7280', marginTop:4, fontWeight:500 }}>
                    {language ? s.bnL : s.enL}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Link href="/contact" style={{ textDecoration:'none' }}>
                <button className="cl-display" style={{
                  display:'inline-flex', alignItems:'center', gap:8,
                  padding:'15px 32px', borderRadius:9999,
                  background:'#ea580c', color:'#fff',
                  fontWeight:800, fontSize:14, cursor:'pointer', border:'none',
                  transition:'background .2s, box-shadow .3s, transform .15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background='#f97316'; e.currentTarget.style.boxShadow='0 0 40px rgba(249,115,22,.45)'; e.currentTarget.style.transform='translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='#ea580c'; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)'; }}
                >
                  <Sparkles style={{ width:15, height:15 }} />
                  {language ? 'আমাদের সাথে কাজ করুন' : "Let's Work Together"}
                  <ArrowRight style={{ width:15, height:15 }} />
                </button>
              </Link>
            </div>
          </div>

          {/* ── RIGHT : 3D floating card cluster ── */}
          <div style={{
            position:'relative',
            height:'clamp(460px, 60vh, 640px)',
          }}
            className="hidden lg:block"
          >
            {/* Perspective wrapper — depth plane */}
            <div style={{
              position:'absolute', inset:0,
              perspective:'1200px',
              perspectiveOrigin:'50% 40%',
            }}>
              {CLUSTER_CLIENTS.map((company, i) => (
                <ClusterCard
                  key={i}
                  company={company}
                  style={clusterPositions[i]}
                  animClass={FLOAT_ANIMS[i]}
                  dur={FLOAT_DUR[i]}
                  delay={FLOAT_DEL[i]}
                />
              ))}
            </div>

            {/* Mini orbital decoration */}
            <MiniOrbital />

            {/* Radial glow behind cluster */}
            <div style={{
              position:'absolute', top:'50%', left:'50%',
              transform:'translate(-50%,-50%)',
              width:300, height:300, borderRadius:'50%',
              background:'radial-gradient(circle,rgba(249,115,22,.08) 0%,transparent 65%)',
              filter:'blur(30px)', pointerEvents:'none',
            }} />

            {/* "16+ Companies" badge floating */}
            <div style={{
              position:'absolute', bottom:'4%', left:'50%',
              transform:'translateX(-50%)',
              padding:'8px 18px', borderRadius:9999,
              background:'rgba(249,115,22,.1)',
              border:'1px solid rgba(249,115,22,.25)',
              backdropFilter:'blur(12px)',
              display:'flex', alignItems:'center', gap:6,
              whiteSpace:'nowrap',
            }}>
              <div style={{
                width:6, height:6, borderRadius:'50%', background:'#f97316',
                boxShadow:'0 0 8px rgba(249,115,22,.9)',
              }} />
              <span style={{ fontSize:11, fontWeight:700, color:'#fb923c', letterSpacing:'.08em' }}>
                {language ? '১৬+ ক্লায়েন্ট এবং বাড়ছে' : '16+ Clients & Growing'}
              </span>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            PERSPECTIVE TICKER ROWS
        ════════════════════════════════════════════════ */}
        <div style={{
          position:'relative', zIndex:5,
          padding:'0 0 80px',
        }}>

          {/* Section label */}
          <div style={{ textAlign:'center', marginBottom:40 }}>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:10,
              color:'rgba(255,255,255,.2)', fontSize:11,
              fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase',
            }}>
              <div style={{ height:1, width:32, background:'rgba(255,255,255,.15)' }} />
              {language ? 'সকল ক্লায়েন্ট' : 'Full Client Roster'}
              <div style={{ height:1, width:32, background:'rgba(255,255,255,.15)' }} />
            </div>
          </div>

          {/* 3D perspective wrapper for tickers */}
          <div style={{
            perspective:'1000px',
            perspectiveOrigin:'50% 0%',
          }}>
            <div style={{
              transform:'rotateX(6deg)',
              transformOrigin:'top center',
            }}>

              {/* Row 1 → */}
              <div className="cl-row cl-fade" style={{ overflow:'hidden', marginBottom:14 }}>
                <div className="cl-left" style={{ display:'flex', gap:14, width:'max-content' }}>
                  {ROW1.map((c, i) => <TickerCard key={i} {...c} />)}
                </div>
              </div>

              {/* Row 2 ← */}
              <div className="cl-row cl-fade" style={{ overflow:'hidden' }}>
                <div className="cl-right" style={{ display:'flex', gap:14, width:'max-content' }}>
                  {ROW2.map((c, i) => <TickerCard key={i} {...c} />)}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════
            BOTTOM PERSPECTIVE GRID FLOOR
        ════════════════════════════════════════════════ */}
        <div style={{
          position:'relative', overflow:'hidden', height:120,
          borderTop:'1px solid rgba(255,255,255,.04)',
        }}>
          <div className="cl-pgrid" style={{
            position:'absolute', inset:'-60px -40% 0',
            opacity:.5,
          }} />
          {/* Fade over grid */}
          <div style={{
            position:'absolute', inset:0,
            background:'linear-gradient(to top, #060606 0%, transparent 100%)',
          }} />
          {/* Centred label */}
          <div style={{
            position:'absolute', inset:0,
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <span className="cl-display" style={{
              fontSize:11, fontWeight:700, letterSpacing:'.16em',
              textTransform:'uppercase', color:'rgba(255,255,255,.18)',
            }}>
              {language ? 'বিশ্বস্ত ব্র্যান্ডগুলোর পছন্দ' : 'Trusted By Leading Brands'}
            </span>
          </div>
        </div>

      </section>
    </>
  );
}