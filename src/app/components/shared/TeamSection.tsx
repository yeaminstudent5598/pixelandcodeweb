'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Linkedin, Twitter, Mail,
  ChevronLeft, ChevronRight, Users, ArrowUpRight,
} from 'lucide-react';

/* ─── Global styles ───────────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  .ts-root    { font-family:'DM Sans',sans-serif; }
  .ts-display { font-family:'Syne',sans-serif !important; }

  @keyframes ts-gradX {
    0%,100%{ background-position:0% 50% }
    50%    { background-position:100% 50% }
  }
  @keyframes ts-floatY {
    0%,100% { transform:translateY(0px) }
    50%     { transform:translateY(-12px) }
  }
  @keyframes ts-orbitCW {
    from { transform:rotate(0deg) }
    to   { transform:rotate(360deg) }
  }
  @keyframes ts-orbitCCW {
    from { transform:rotate(0deg) }
    to   { transform:rotate(-360deg) }
  }

  .ts-grad-text {
    background:linear-gradient(135deg,#f97316 0%,#ef4444 50%,#f59e0b 100%);
    background-size:200% 200%;
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
    animation:ts-gradX 5s ease infinite;
  }

  /* grid overlay */
  .ts-grid {
    background-image:
      linear-gradient(rgba(249,115,22,.04) 1px, transparent 1px),
      linear-gradient(90deg,rgba(249,115,22,.04) 1px, transparent 1px);
    background-size:60px 60px;
  }

  /* portrait float */
  .ts-portrait-float { animation:ts-floatY 6s ease-in-out infinite; }

  /* nav / social hover — CSS only (no JS) */
  .ts-nav-btn {
    display:flex; align-items:center; justify-content:center;
    transition:all .25s;
    cursor:pointer;
  }
  .ts-nav-btn:hover {
    background:rgba(249,115,22,.18) !important;
    border-color:rgba(249,115,22,.50) !important;
    color:#fb923c !important;
    box-shadow:0 0 20px rgba(249,115,22,.25) !important;
  }
  .ts-social-btn { transition:all .2s; }
  .ts-social-btn:hover {
    background:rgba(249,115,22,.18) !important;
    border-color:rgba(249,115,22,.40) !important;
    color:#fb923c !important;
  }
  .ts-avatar-btn { transition:all .3s; cursor:pointer; }
  .ts-avatar-btn:hover {
    opacity:1 !important; filter:none !important; transform:translateY(-3px);
  }

  /* 3-D tilt card on left panel */
  .ts-left-3d {
    transform-style:preserve-3d;
    transition:transform .08s linear;
  }
`;

/* ─── Data ────────────────────────────────────────────────────────── */
const teamMembers = [
  {
    imgSrc:'/yeaminpng3.png', name:'Yeamin Madbor',
    role:'Project Lead & Full Stack Developer', tag:'Leadership',
    desc:'Architecting scalable digital products from concept to deployment, leading the team with a pixel-perfect and performance-first mindset.',
    linkedin:'https://www.linkedin.com/in/yeamin-madbor-83b3302b8/', twitter:'#', mail:'#',
  },
  {
    imgSrc:'/arham_safwan.png', name:'Arham Safwan',
    role:'Production Manager', tag:'Operations',
    desc:'Orchestrating project pipelines and client deliveries with precision, ensuring every product ships on time and exceeds expectations.',
    linkedin:'#', twitter:'#', mail:'#',
  },
  {
    imgSrc:'/kawserpng.png', name:'Kawser Ahmed',
    role:'Lead App Developer', tag:'Mobile',
    desc:'Crafting high-performance mobile applications that deliver smooth, native-grade experiences across Android and iOS.',
    linkedin:'#', twitter:'#', mail:'#',
  },
  {
    imgSrc:'/sifatpng.png', name:'Sifat Hossain',
    role:'Lead UI/UX Designer', tag:'Design',
    desc:'Transforming ideas into intuitive interfaces — blending visual storytelling with user-centered design principles.',
    linkedin:'#', twitter:'#', mail:'#',
  },
  {
    imgSrc:'/naeempng.png', name:'Naeem Majumder',
    role:'Senior Backend Engineer', tag:'Backend',
    desc:'Building robust server-side architectures and APIs that power reliable, secure, and scalable web systems.',
    linkedin:'#', twitter:'#', mail:'#',
  },
  {
    imgSrc:'/sabbirpng.png', name:'Sabbir Hossain',
    role:'Frontend Engineer', tag:'Frontend',
    desc:'Bringing designs to life with clean, accessible, and performant frontend code using modern React ecosystems.',
    linkedin:'#', twitter:'#', mail:'#',
  },
  {
    imgSrc:'/moinpng.png', name:'Moin Uddin',
    role:'Frontend Developer', tag:'Frontend',
    desc:'Developing responsive, interactive user interfaces with a strong eye for detail and smooth micro-animations.',
    linkedin:'#', twitter:'#', mail:'#',
  },
  {
    imgSrc:'/ayshapng.png', name:'Aysha Akter',
    role:'Frontend Developer', tag:'Frontend',
    desc:'Creating elegant, user-friendly web experiences through structured code and thoughtful component design.',
    linkedin:'#', twitter:'#', mail:'#',
  },
  {
    imgSrc:'/Iftiak_Hossain.webp', name:'Iftiak Hossain',
    role:'UI/UX Designer', tag:'Design',
    desc:'Designing clean, purposeful interfaces that balance aesthetic clarity with seamless usability.',
    linkedin:'#', twitter:'#', mail:'#',
  },
  {
    imgSrc:'/mizanpng2.png', name:'Mizan Munshi',
    role:'Video Editor', tag:'Media',
    desc:'Transforming raw footage into polished, engaging content that elevates brand identity and drives real results.',
    linkedin:'#', twitter:'#', mail:'#',
  },
  {
    imgSrc:'/yousufpng.png', name:'Yousuf Rahman',
    role:'Social Media & Frontend Dev', tag:'Marketing',
    desc:'Driving brand visibility through strategic social content while actively contributing to frontend development.',
    linkedin:'#', twitter:'#', mail:'#',
  },
];

type Dir = 1 | -1;
const EASE_OUT = [0.22, 1, 0.36, 1] as [number, number, number, number];
const EASE_IN  = 'easeIn' as const;

/* ─── Motion variants ─────────────────────────────────────────────── */
const infoV = (d: Dir) => ({
  enter:  { opacity:0, y: d*28, filter:'blur(5px)' },
  center: { opacity:1, y:0,     filter:'blur(0px)',
            transition:{ duration:0.55, ease:EASE_OUT, delay:0.06 } },
  exit:   { opacity:0, y: d*-18, filter:'blur(3px)',
            transition:{ duration:0.28, ease:EASE_IN } },
});

const portraitV = (d: Dir) => ({
  enter:  { opacity:0, x: d*70, scale:1.04, filter:'blur(10px)' },
  center: { opacity:1, x:0,     scale:1,    filter:'blur(0px)',
            transition:{ duration:0.70, ease:EASE_OUT } },
  exit:   { opacity:0, x: d*-45, scale:0.97, filter:'blur(6px)',
            transition:{ duration:0.32, ease:EASE_IN } },
});

const wmV = {
  enter:  { opacity:0, scale:0.92, y:20 },
  center: { opacity:1, scale:1,    y:0,
            transition:{ duration:0.70, ease:EASE_OUT, delay:0.10 } },
  exit:   { opacity:0, scale:1.04, y:-12,
            transition:{ duration:0.26 } },
};

/* ─── Component ───────────────────────────────────────────────────── */
export function TeamSection() {
  const { language } = useLanguage();
  const [active, setActive] = useState(0);
  const [dir,    setDir]    = useState<Dir>(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((n: number, d: Dir) => { setDir(d); setActive(n); }, []);
  const prev = () => go((active - 1 + teamMembers.length) % teamMembers.length, -1);
  const next = () => go((active + 1) % teamMembers.length, 1);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go((active + 1) % teamMembers.length, 1), 5500);
    return () => clearTimeout(t);
  }, [active, paused, go]);

  const m = teamMembers[active];

  return (
    <>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: STYLES }} />

      <section
        className="ts-root ts-grid relative w-full overflow-hidden"
        style={{ background:'#080808', borderTop:'1px solid rgba(255,255,255,0.05)' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* ambient orange glow */}
        <div style={{
          position:'absolute', inset:0, pointerEvents:'none',
          background:'radial-gradient(ellipse 60% 70% at 72% 45%, rgba(249,115,22,0.07) 0%, transparent 70%)',
        }} />
        {/* top orange hairline */}
        <div style={{
          position:'absolute', top:0, left:0, right:0, height:1,
          background:'linear-gradient(to right, transparent, rgba(249,115,22,0.5), transparent)',
        }} />

        {/* ═══════ SPLIT GRID ═══════ */}
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr',
          minHeight:'min(88vh, 760px)', position:'relative',
        }}>

          {/* ── LEFT: text panel ── */}
          <div style={{
            display:'flex', flexDirection:'column', justifyContent:'center',
            padding:'56px 48px', position:'relative', zIndex:10,
            borderRight:'1px solid rgba(255,255,255,0.04)',
          }}>
            {/* ghost index number */}
            <div className="ts-display" style={{
              position:'absolute', top:14, right:18,
              fontSize:128, fontWeight:900, lineHeight:1,
              color:'rgba(255,255,255,0.022)', userSelect:'none',
              pointerEvents:'none', letterSpacing:'-0.05em',
            }}>
              {String(active+1).padStart(2,'0')}
            </div>

            {/* badge */}
            <div style={{ marginBottom:30 }}>
              <span style={{
                display:'inline-flex', alignItems:'center', gap:8,
                padding:'6px 16px', borderRadius:9999,
                border:'1px solid rgba(249,115,22,0.30)',
                background:'rgba(249,115,22,0.07)',
                color:'#fb923c', fontSize:11, fontWeight:700,
                letterSpacing:'.14em', textTransform:'uppercase',
              }}>
                <Users style={{ width:12, height:12 }} />
                {language ? 'আমাদের টিম' : 'Our Team'}
              </span>
            </div>

            {/* animated info block */}
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`info-${active}`}
                custom={dir}
                variants={infoV(dir)}
                initial="enter" animate="center" exit="exit"
              >
                {/* tag chip */}
                <div style={{
                  display:'inline-block', marginBottom:14,
                  padding:'4px 12px', borderRadius:6,
                  background:'rgba(249,115,22,0.10)',
                  border:'1px solid rgba(249,115,22,0.22)',
                  color:'#f97316', fontSize:11, fontWeight:700,
                  letterSpacing:'.10em', textTransform:'uppercase',
                }}>
                  {m.tag}
                </div>

                {/* name */}
                <h2 className="ts-display" style={{
                  fontSize:'clamp(34px,4vw,60px)', fontWeight:900,
                  lineHeight:1.0, letterSpacing:'-0.03em',
                  color:'#fff', marginBottom:10,
                }}>
                  {m.name.split(' ').map((word, i) => (
                    <span key={i} style={{ display:'block' }}>
                      {i === 0
                        ? word
                        : <span className="ts-grad-text">{word}</span>
                      }
                    </span>
                  ))}
                </h2>

                {/* role */}
                <p style={{
                  fontSize:11, fontWeight:700, letterSpacing:'.10em',
                  textTransform:'uppercase', color:'#6b7280', marginBottom:18,
                }}>
                  {m.role}
                </p>

                {/* orange divider */}
                <div style={{
                  width:44, height:2, borderRadius:1, marginBottom:20,
                  background:'linear-gradient(to right,#f97316,transparent)',
                }} />

                {/* description */}
                <p style={{
                  color:'#9ca3af', fontSize:15, lineHeight:1.80,
                  fontWeight:300, maxWidth:380, marginBottom:30,
                }}>
                  {m.desc}
                </p>

                {/* socials + connect */}
                <div style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap' }}>
                  {[
                    { href:m.linkedin, Icon:Linkedin, label:'LinkedIn' },
                    { href:m.twitter,  Icon:Twitter,  label:'Twitter'  },
                    { href:m.mail,     Icon:Mail,     label:'Email'    },
                  ].map(({ href, Icon, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="ts-social-btn" title={label}
                      style={{
                        width:40, height:40, borderRadius:10,
                        display:'flex', alignItems:'center', justifyContent:'center',
                        border:'1px solid rgba(255,255,255,0.08)',
                        background:'rgba(255,255,255,0.04)',
                        color:'rgba(255,255,255,0.40)', textDecoration:'none',
                      }}
                    >
                      <Icon style={{ width:16, height:16 }} />
                    </a>
                  ))}

                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
                    className="ts-display"
                    style={{
                      marginLeft:6,
                      display:'inline-flex', alignItems:'center', gap:6,
                      padding:'10px 20px', borderRadius:10,
                      background:'#ea580c', color:'#fff',
                      fontSize:12, fontWeight:800, letterSpacing:'.04em',
                      textDecoration:'none', transition:'background .2s, box-shadow .3s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background='#f97316';
                      e.currentTarget.style.boxShadow='0 0 24px rgba(249,115,22,.4)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background='#ea580c';
                      e.currentTarget.style.boxShadow='none';
                    }}
                  >
                    {language ? 'সংযোগ করুন' : 'Connect'}
                    <ArrowUpRight style={{ width:13, height:13 }} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* arrows + counter + progress */}
            <div style={{ display:'flex', alignItems:'center', gap:12, marginTop:44 }}>
              {[
                { fn:prev, icon:<ChevronLeft  style={{ width:18, height:18 }} /> },
                { fn:next, icon:<ChevronRight style={{ width:18, height:18 }} /> },
              ].map(({ fn, icon }, i) => (
                <button key={i} onClick={fn} className="ts-nav-btn" style={{
                  width:44, height:44, borderRadius:12,
                  border:'1px solid rgba(255,255,255,0.10)',
                  background:'rgba(255,255,255,0.04)',
                  color:'rgba(255,255,255,0.50)',
                }}>
                  {icon}
                </button>
              ))}

              <span className="ts-display" style={{
                fontSize:13, fontWeight:700,
                color:'rgba(255,255,255,0.22)', letterSpacing:'.06em', marginLeft:4,
              }}>
                {String(active+1).padStart(2,'0')}
                <span style={{ color:'rgba(255,255,255,0.10)', margin:'0 4px' }}>/</span>
                {String(teamMembers.length).padStart(2,'0')}
              </span>

              <div style={{
                flex:1, height:2, borderRadius:1,
                background:'rgba(255,255,255,0.06)', overflow:'hidden',
              }}>
                <motion.div
                  style={{
                    height:'100%', borderRadius:1,
                    background:'linear-gradient(to right,#f97316,#fb923c)',
                  }}
                  animate={{ width:`${((active+1)/teamMembers.length)*100}%` }}
                  transition={{ duration:0.45, ease:'easeOut' }}
                />
              </div>
            </div>
          </div>

          {/* ── RIGHT: portrait panel ── */}
          <div style={{ position:'relative', overflow:'hidden' }}>

            {/* ① atmospheric bg removed — grid + radial glow is enough */}

            {/* ② Watermark name — behind portrait */}
            <div style={{
              position:'absolute', inset:0, zIndex:2,
              display:'flex', alignItems:'center', justifyContent:'center',
              pointerEvents:'none', overflow:'hidden',
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`wm-${active}`}
                  variants={wmV}
                  initial="enter" animate="center" exit="exit"
                  className="ts-display"
                  style={{
                    textAlign:'center',
                    fontSize:'clamp(50px,9.5vw,116px)',
                    fontWeight:900, letterSpacing:'-0.03em', lineHeight:0.88,
                    color:'transparent',
                    WebkitTextStroke:'1px rgba(249,115,22,0.09)',
                    userSelect:'none',
                  }}
                >
                  {m.name.split(' ').map((w,i) => <div key={i}>{w}</div>)}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ③ 3-D floating portrait — CONTAIN keeps full person, no zoom */}
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`portrait-${active}`}
                custom={dir}
                variants={portraitV(dir)}
                initial="enter" animate="center" exit="exit"
                style={{
                  position:'absolute', inset:0, zIndex:3,
                  display:'flex',
                  alignItems:'flex-end',   /* anchor to bottom */
                  justifyContent:'center',
                }}
              >
                {/*
                  CRITICAL FIX: objectFit='contain' + explicit dimensions
                  keeps the entire person visible without any cropping/zoom.
                  We size the wrapper to 75% width and 95% height so the
                  photo fits naturally inside and edges blend via gradients.
                */}
                <div
                  style={{
                    position:'relative',
                    width:'92%',
                    height:'100%',
                    flexShrink:0,
                  }}
                >
                  <Image
                    src={m.imgSrc}
                    alt={m.name}
                    fill
                    priority
                    sizes="(max-width:768px) 100vw, 50vw"
                    style={{
                      objectFit:'contain',
                      objectPosition:'center bottom',
                      filter:'brightness(1.0) contrast(1.03) saturate(1.05)',
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ④ 3-D decorative rings — depth layers */}
            <div style={{
              position:'absolute', bottom:'8%', left:'50%',
              transform:'translateX(-50%)',
              width:280, height:280,
              borderRadius:'50%',
              border:'1px solid rgba(249,115,22,0.06)',
              zIndex:2, pointerEvents:'none',
              animation:'ts-orbitCW 20s linear infinite',
            }}>
              {/* dot on ring */}
              <div style={{
                position:'absolute', top:-3, left:'50%', marginLeft:-3,
                width:6, height:6, borderRadius:'50%',
                background:'rgba(249,115,22,0.5)',
                boxShadow:'0 0 8px rgba(249,115,22,0.6)',
              }} />
            </div>
            <div style={{
              position:'absolute', bottom:'4%', left:'50%',
              transform:'translateX(-50%)',
              width:380, height:380,
              borderRadius:'50%',
              border:'1px solid rgba(249,115,22,0.04)',
              zIndex:2, pointerEvents:'none',
              animation:'ts-orbitCCW 28s linear infinite',
            }}>
              <div style={{
                position:'absolute', bottom:-3, left:'50%', marginLeft:-3,
                width:4, height:4, borderRadius:'50%',
                background:'rgba(249,115,22,0.35)',
              }} />
            </div>

            {/* vertical role label */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`role-${active}`}
                initial={{ opacity:0, x:12 }}
                animate={{ opacity:1, x:0, transition:{ duration:0.5, delay:0.25 } }}
                exit={{ opacity:0, transition:{ duration:0.2 } }}
                style={{
                  position:'absolute', right:18, top:'50%',
                  transform:'translateY(-50%)',
                  zIndex:10,
                  display:'flex', flexDirection:'column',
                  alignItems:'center', gap:10,
                }}
              >
                <div style={{
                  writingMode:'vertical-rl', transform:'rotate(180deg)',
                  fontSize:9, fontWeight:700, letterSpacing:'.20em',
                  textTransform:'uppercase', color:'rgba(255,255,255,0.20)',
                  maxHeight:200, overflow:'hidden', lineHeight:1.4,
                }}>
                  {m.role}
                </div>
                <div style={{
                  width:1, height:48,
                  background:'linear-gradient(to bottom,rgba(249,115,22,0.5),transparent)',
                }} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ═══════ AVATAR STRIP ═══════ */}
        <div style={{
          position:'relative', zIndex:10,
          background:'rgba(5,5,5,0.98)',
          borderTop:'1px solid rgba(255,255,255,0.05)',
          padding:'14px 24px',
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          <div style={{
            display:'flex', alignItems:'center', gap:10,
            overflowX:'auto', padding:'4px 0',
          }}>
            {teamMembers.map((tm, i) => {
              const isActive = i === active;
              return (
                <button key={i}
                  onClick={() => go(i, i > active ? 1 : -1)}
                  className="ts-avatar-btn" title={tm.name}
                  style={{
                    position:'relative', flexShrink:0,
                    width:isActive ? 48 : 36, height:isActive ? 48 : 36,
                    borderRadius:'50%',
                    opacity: isActive ? 1 : 0.32,
                    filter: isActive ? 'none' : 'grayscale(85%)',
                    background:'none', border:'none', padding:0,
                    transition:'width .3s,height .3s,opacity .3s,filter .3s',
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="ring"
                      style={{
                        position:'absolute', inset:-3, borderRadius:'50%',
                        border:'2px solid #f97316',
                        boxShadow:'0 0 14px rgba(249,115,22,0.55)',
                      }}
                      transition={{ type:'spring', stiffness:350, damping:28 }}
                    />
                  )}
                  <div style={{ width:'100%', height:'100%', borderRadius:'50%', overflow:'hidden' }}>
                    <Image
                      src={tm.imgSrc} alt={tm.name}
                      width={48} height={48}
                      style={{
                        objectFit:'cover', objectPosition:'top',
                        width:'100%', height:'100%',
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}