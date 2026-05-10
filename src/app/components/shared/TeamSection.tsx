'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Mail, ChevronLeft, ChevronRight, Users, ArrowUpRight } from 'lucide-react';

/* ─── Styles ─────────────────────────────────────────────────────── */
const TEAM_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  .team-root { font-family: 'DM Sans', sans-serif; }
  .team-display { font-family: 'Syne', sans-serif !important; }

  @keyframes team-gradX {
    0%,100% { background-position:0% 50% }
    50%      { background-position:100% 50% }
  }
  @keyframes team-pulse {
    0%,100% { box-shadow:0 0 0 0 rgba(249,115,22,0.5) }
    50%      { box-shadow:0 0 0 8px rgba(249,115,22,0) }
  }
  @keyframes team-scanline {
    0%   { transform:translateY(-100%) }
    100% { transform:translateY(400%) }
  }
  @keyframes team-float {
    0%,100% { transform:translateY(0px) }
    50%      { transform:translateY(-10px) }
  }

  .team-text-grad {
    background: linear-gradient(135deg, #f97316 0%, #ef4444 50%, #f59e0b 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: team-gradX 5s ease infinite;
  }

  .team-portrait-wrap {
    position: relative;
    overflow: hidden;
  }
  /* scanline shimmer on portrait */
  .team-portrait-wrap::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(249,115,22,0.04) 50%,
      transparent 100%
    );
    height: 60%;
    animation: team-scanline 4s linear infinite;
    pointer-events: none;
  }

  .team-nav-btn {
    transition: all .25s ease;
  }
  .team-nav-btn:hover {
    background: rgba(249,115,22,0.18) !important;
    border-color: rgba(249,115,22,0.5) !important;
    color: #fb923c !important;
    box-shadow: 0 0 20px rgba(249,115,22,0.25) !important;
  }

  .team-social-btn {
    transition: all .2s ease;
  }
  .team-social-btn:hover {
    background: rgba(249,115,22,0.18) !important;
    border-color: rgba(249,115,22,0.4) !important;
    color: #fb923c !important;
  }

  .team-avatar-thumb {
    transition: all .3s ease;
  }
  .team-avatar-thumb:hover {
    opacity: 1 !important;
    filter: none !important;
    transform: translateY(-3px);
  }

  .team-grid-bg {
    background-image:
      linear-gradient(rgba(249,115,22,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(249,115,22,.04) 1px, transparent 1px);
    background-size: 60px 60px;
  }
`;

/* ─── Data ────────────────────────────────────────────────────────── */
const teamMembers = [
  {
    imgSrc: '/image.png',
    name: 'Yeamin Madbor',
    role: 'Project Lead & Full Stack Developer',
    desc: 'Architecting scalable digital products from concept to deployment, leading the team with a pixel-perfect and performance-first mindset.',
    linkedin: 'https://www.linkedin.com/in/yeamin-madbor-83b3302b8/',
    twitter: '#',
    mail: '#',
    tag: 'Leadership',
  },
  {
    imgSrc: '/arham_safwan.jpeg',
    name: 'Arham Safwan',
    role: 'Production Manager',
    desc: 'Orchestrating project pipelines and client deliveries with precision, ensuring every product ships on time and exceeds expectations.',
    linkedin: '#', twitter: '#', mail: '#',
    tag: 'Operations',
  },
  {
    imgSrc: '/kawser_app_dev.jpeg',
    name: 'Kawser Ahmed',
    role: 'Lead App Developer',
    desc: 'Crafting high-performance mobile applications that deliver smooth, native-grade experiences across Android and iOS.',
    linkedin: '#', twitter: '#', mail: '#',
    tag: 'Mobile',
  },
  {
    imgSrc: '/Sifat.jpg',
    name: 'Sifat Hossain',
    role: 'Lead UI/UX Designer',
    desc: 'Transforming ideas into intuitive interfaces — blending visual storytelling with user-centered design principles.',
    linkedin: '#', twitter: '#', mail: '#',
    tag: 'Design',
  },
  {
    imgSrc: '/Naeem.jpg',
    name: 'Naeem Majumder',
    role: 'Senior Backend Engineer',
    desc: 'Building robust server-side architectures and APIs that power reliable, secure, and scalable web systems.',
    linkedin: '#', twitter: '#', mail: '#',
    tag: 'Backend',
  },
  {
    imgSrc: '/Sabbir_Hossain.jpg',
    name: 'Sabbir Hossain',
    role: 'Frontend Engineer',
    desc: 'Bringing designs to life with clean, accessible, and performant frontend code using modern React ecosystems.',
    linkedin: '#', twitter: '#', mail: '#',
    tag: 'Frontend',
  },
  {
    imgSrc: '/Moin_Uddin.jpg',
    name: 'Moin Uddin',
    role: 'Frontend Developer',
    desc: 'Developing responsive, interactive user interfaces with a strong eye for detail and smooth micro-animations.',
    linkedin: '#', twitter: '#', mail: '#',
    tag: 'Frontend',
  },
  {
    imgSrc: '/Aysa_Akter.jpg',
    name: 'Aysha Akter',
    role: 'Frontend Developer',
    desc: 'Creating elegant, user-friendly web experiences through structured code and thoughtful component design.',
    linkedin: '#', twitter: '#', mail: '#',
    tag: 'Frontend',
  },
  {
    imgSrc: '/Iftiak_Hossain.webp',
    name: 'Iftiak Hossain',
    role: 'UI/UX Designer',
    desc: 'Designing clean, purposeful interfaces that balance aesthetic clarity with seamless usability.',
    linkedin: '#', twitter: '#', mail: '#',
    tag: 'Design',
  },
  {
    imgSrc: '/Mizan.jpg',
    name: 'Mizan Munshi',
    role: 'Video Editor',
    desc: 'Transforming raw footage into polished, engaging content that elevates brand identity and drives real results.',
    linkedin: '#', twitter: '#', mail: '#',
    tag: 'Media',
  },
  {
    imgSrc: '/yousuf.jpg',
    name: 'Yousuf Rahman',
    role: 'Social Media & Frontend Dev',
    desc: 'Driving brand visibility through strategic social content while actively contributing to frontend development.',
    linkedin: '#', twitter: '#', mail: '#',
    tag: 'Marketing',
  },
];

type Dir = 1 | -1;

const EASE_OUT = [0.22, 1, 0.36, 1] as [number, number, number, number];
const EASE_IN  = 'easeIn' as const;

/* ─── Animation Variants ─────────────────────────────────────────── */

// Portrait: slides in from dir, fades + scales
const portraitVariants = (dir: Dir) => ({
  enter:  {
    opacity: 0,
    x: dir * 60,
    scale: 1.04,
    filter: 'blur(6px)',
  },
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: EASE_OUT },
  },
  exit:   {
    opacity: 0,
    x: dir * -40,
    scale: 0.97,
    filter: 'blur(4px)',
    transition: { duration: 0.35, ease: EASE_IN },
  },
});

// Info panel: slides up
const infoVariants = (dir: Dir) => ({
  enter:  { opacity: 0, y: dir * 30, filter: 'blur(4px)' },
  center: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: EASE_OUT, delay: 0.08 } },
  exit:   { opacity: 0, y: dir * -20, filter: 'blur(3px)', transition: { duration: 0.30, ease: EASE_IN } },
});

// Watermark name
const wmVariants = {
  enter:  { opacity: 0, y: 24 },
  center: { opacity: 1, y: 0, transition: { duration: 0.70, ease: EASE_OUT, delay: 0.12 } },
  exit:   { opacity: 0, y: -12, transition: { duration: 0.28 } },
};

/* ─── Main Component ─────────────────────────────────────────────── */
export function TeamSection() {
  const { language } = useLanguage();
  const [active, setActive] = useState(0);
  const [dir, setDir]       = useState<Dir>(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number, d: Dir) => {
    setDir(d);
    setActive(next);
  }, []);

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
      <style dangerouslySetInnerHTML={{ __html: TEAM_STYLES }} />

      <section
        className="team-root team-grid-bg relative w-full overflow-hidden"
        style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* ── Ambient background glow ── */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 60% at 70% 40%, rgba(249,115,22,0.06) 0%, transparent 70%)',
        }} />

        {/* ── Orange top border ── */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(to right, transparent, rgba(249,115,22,0.5), transparent)',
        }} />

        {/* ══════════════════════════════════════════
            MAIN CONTENT AREA
        ══════════════════════════════════════════ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: 'min(90vh, 780px)',
          position: 'relative',
        }}
          className="lg:grid-cols-2 grid-cols-1"
        >

          {/* ── LEFT: Info Panel ── */}
          <div style={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', padding: '60px 48px',
            position: 'relative', zIndex: 10,
            borderRight: '1px solid rgba(255,255,255,0.05)',
          }}
            className="px-6 md:px-12"
          >
            {/* Watermark number */}
            <div className="team-display" style={{
              position: 'absolute', top: 20, right: 20,
              fontSize: 120, fontWeight: 900, lineHeight: 1,
              color: 'rgba(255,255,255,0.025)',
              userSelect: 'none', pointerEvents: 'none',
              letterSpacing: '-0.05em',
            }}>
              {String(active + 1).padStart(2, '0')}
            </div>

            {/* Badge */}
            <div style={{ marginBottom: 32 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 16px', borderRadius: 9999,
                border: '1px solid rgba(249,115,22,0.30)',
                background: 'rgba(249,115,22,0.07)',
                color: '#fb923c', fontSize: 11, fontWeight: 700,
                letterSpacing: '.14em', textTransform: 'uppercase',
                backdropFilter: 'blur(8px)',
              }}>
                <Users style={{ width: 12, height: 12 }} />
                {language ? 'আমাদের টিম' : 'Our Team'}
              </span>
            </div>

            {/* Name + role (animated) */}
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`info-${active}`}
                custom={dir}
                variants={infoVariants(dir)}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Role tag */}
                <div style={{
                  display: 'inline-block',
                  padding: '4px 12px', borderRadius: 6,
                  background: 'rgba(249,115,22,0.1)',
                  border: '1px solid rgba(249,115,22,0.2)',
                  color: '#f97316', fontSize: 11, fontWeight: 700,
                  letterSpacing: '.1em', textTransform: 'uppercase',
                  marginBottom: 16,
                }}>
                  {m.tag}
                </div>

                {/* Name */}
                <h2 className="team-display" style={{
                  fontSize: 'clamp(32px, 4vw, 58px)',
                  fontWeight: 900, lineHeight: 1,
                  letterSpacing: '-0.03em',
                  color: '#fff', marginBottom: 12,
                }}>
                  {m.name.split(' ').map((word, i) => (
                    <span key={i} style={{ display: 'block' }}>
                      {i === 0 ? word : <span className="team-text-grad">{word}</span>}
                    </span>
                  ))}
                </h2>

                {/* Role */}
                <p style={{
                  fontSize: 13, fontWeight: 600, color: '#6b7280',
                  letterSpacing: '.06em', textTransform: 'uppercase',
                  marginBottom: 24,
                }}>
                  {m.role}
                </p>

                {/* Divider */}
                <div style={{
                  width: 48, height: 2, borderRadius: 1,
                  background: 'linear-gradient(to right, #f97316, transparent)',
                  marginBottom: 24,
                }} />

                {/* Desc */}
                <p style={{
                  color: '#9ca3af', fontSize: 15, lineHeight: 1.8,
                  fontWeight: 300, maxWidth: 380, marginBottom: 32,
                }}>
                  {m.desc}
                </p>

                {/* Social links */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {[
                    { href: m.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                    { href: m.twitter,  Icon: Twitter,  label: 'Twitter' },
                    { href: m.mail,     Icon: Mail,     label: 'Email' },
                  ].map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-social-btn"
                      title={label}
                      style={{
                        width: 40, height: 40, borderRadius: 10,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.08)',
                        background: 'rgba(255,255,255,0.04)',
                        color: 'rgba(255,255,255,0.4)',
                        textDecoration: 'none',
                      }}
                    >
                      <Icon style={{ width: 16, height: 16 }} />
                    </a>
                  ))}

                  {/* Connect button */}
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-display"
                    style={{
                      marginLeft: 8,
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '10px 18px', borderRadius: 10,
                      background: '#ea580c', color: '#fff',
                      fontSize: 12, fontWeight: 800,
                      textDecoration: 'none', letterSpacing: '.04em',
                      transition: 'background .2s, box-shadow .3s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#f97316'; e.currentTarget.style.boxShadow = '0 0 24px rgba(249,115,22,.4)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#ea580c'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    {language ? 'সংযোগ করুন' : 'Connect'}
                    <ArrowUpRight style={{ width: 13, height: 13 }} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ── Navigation arrows ── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 48 }}>
              {[
                { onClick: prev, icon: <ChevronLeft style={{ width: 18, height: 18 }} /> },
                { onClick: next, icon: <ChevronRight style={{ width: 18, height: 18 }} /> },
              ].map(({ onClick, icon }, i) => (
                <button
                  key={i}
                  onClick={onClick}
                  className="team-nav-btn"
                  style={{
                    width: 44, height: 44, borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'rgba(255,255,255,0.5)', cursor: 'pointer',
                  }}
                >
                  {icon}
                </button>
              ))}

              {/* Counter */}
              <span className="team-display" style={{
                fontSize: 13, fontWeight: 700,
                color: 'rgba(255,255,255,0.2)',
                letterSpacing: '.06em', marginLeft: 4,
              }}>
                {String(active + 1).padStart(2, '0')}
                <span style={{ color: 'rgba(255,255,255,0.1)', margin: '0 4px' }}>/</span>
                {String(teamMembers.length).padStart(2, '0')}
              </span>

              {/* Progress bar */}
              <div style={{
                flex: 1, height: 2, borderRadius: 1,
                background: 'rgba(255,255,255,0.06)', overflow: 'hidden',
              }}>
                <motion.div
                  style={{
                    height: '100%', borderRadius: 1,
                    background: 'linear-gradient(to right, #f97316, #fb923c)',
                  }}
                  animate={{ width: `${((active + 1) / teamMembers.length) * 100}%` }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>

          {/* ── RIGHT: Portrait Photo ── */}
          <div style={{
            position: 'relative', overflow: 'hidden',
            minHeight: 500,
          }}>
            {/* Background photo (blurred atmospheric — behind the portrait) */}
            <AnimatePresence mode="sync">
              <motion.div
                key={`bg-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.8 } }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                style={{ position: 'absolute', inset: 0 }}
              >
                <Image
                  src={m.imgSrc}
                  alt=""
                  fill
                  className="object-cover object-center"
                  style={{
                    filter: 'blur(40px) brightness(0.15) saturate(0.5)',
                    transform: 'scale(1.2)',
                  }}
                  aria-hidden
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient overlays */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
              background: 'linear-gradient(to right, #080808 0%, transparent 20%)',
            }} />
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
              background: 'linear-gradient(to top, #080808 0%, transparent 30%)',
            }} />

            {/* Watermark name */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 2,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              pointerEvents: 'none', overflow: 'hidden',
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`wm-${active}`}
                  variants={wmVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="team-display"
                  style={{
                    textAlign: 'center',
                    fontSize: 'clamp(48px, 9vw, 110px)',
                    fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.9,
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(249,115,22,0.08)',
                    userSelect: 'none',
                  }}
                >
                  {m.name.split(' ').map((w, i) => <div key={i}>{w}</div>)}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ★ THE MAIN PORTRAIT — clearly visible face ★ */}
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`portrait-${active}`}
                custom={dir}
                variants={portraitVariants(dir)}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                  position: 'absolute', inset: 0, zIndex: 3,
                  display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                }}
              >
                {/* Portrait container — shows full person with face clearly */}
                <div className="team-portrait-wrap" style={{
                  position: 'relative',
                  width: '75%',
                  maxWidth: 340,
                  height: '90%',
                  bottom: 0,
                  borderRadius: '24px 24px 0 0',
                  overflow: 'hidden',
                  boxShadow: '0 -20px 80px rgba(0,0,0,0.4), -4px 0 40px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderBottom: 'none',
                }}>
                  {/* Actual photo — bright and clear face */}
                  <Image
                    src={m.imgSrc}
                    alt={m.name}
                    fill
                    priority
                    className="object-cover"
                    style={{
                      objectPosition: 'center top',  /* always show face */
                      filter: 'brightness(0.88) contrast(1.05) saturate(1.1)',
                    }}
                  />

                  {/* Subtle bottom gradient so portrait blends into dark bg */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
                    background: 'linear-gradient(to top, rgba(8,8,8,0.85), transparent)',
                    pointerEvents: 'none',
                  }} />

                  {/* Left orange accent line */}
                  <div style={{
                    position: 'absolute', top: '15%', bottom: '20%', left: 0,
                    width: 2, borderRadius: 1,
                    background: 'linear-gradient(to bottom, transparent, rgba(249,115,22,0.6), transparent)',
                    pointerEvents: 'none',
                  }} />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Role label — vertical, right side */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`role-${active}`}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                style={{
                  position: 'absolute', right: 20, top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                }}
              >
                <div style={{
                  writingMode: 'vertical-rl', transform: 'rotate(180deg)',
                  fontSize: 10, fontWeight: 700, letterSpacing: '.18em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
                  lineHeight: 1.4, maxHeight: 200, overflow: 'hidden',
                }}>
                  {m.role}
                </div>
                <div style={{
                  width: 1, height: 48,
                  background: 'linear-gradient(to bottom, rgba(249,115,22,0.5), transparent)',
                }} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            AVATAR STRIP
        ══════════════════════════════════════════ */}
        <div style={{
          position: 'relative', zIndex: 10,
          background: 'rgba(6,6,6,0.98)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '16px 24px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: 16,
        }}>
          {/* Avatars */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            overflowX: 'auto', padding: '4px 0',
          }}>
            {teamMembers.map((tm, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => go(i, i > active ? 1 : -1)}
                  className="team-avatar-thumb"
                  title={tm.name}
                  style={{
                    position: 'relative', flexShrink: 0,
                    width: isActive ? 48 : 36, height: isActive ? 48 : 36,
                    borderRadius: '50%',
                    opacity: isActive ? 1 : 0.35,
                    filter: isActive ? 'none' : 'grayscale(80%)',
                    cursor: 'pointer', background: 'none', border: 'none',
                    padding: 0,
                    transition: 'width .3s, height .3s, opacity .3s, filter .3s',
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeRing"
                      style={{
                        position: 'absolute',
                        inset: -3, borderRadius: '50%',
                        border: '2px solid #f97316',
                        boxShadow: '0 0 14px rgba(249,115,22,0.55)',
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <div style={{
                    width: '100%', height: '100%',
                    borderRadius: '50%', overflow: 'hidden',
                  }}>
                    <Image
                      src={tm.imgSrc}
                      alt={tm.name}
                      width={48} height={48}
                      className="object-cover object-top w-full h-full"
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