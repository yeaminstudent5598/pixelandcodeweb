// src/app/components/shared/HeroSection.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Zap, Globe, Code2, Terminal, Cpu, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/* ─────────────────────────────────────────────
   Global Styles
───────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

  .hs-root *, .hs-root *::before, .hs-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .hs-display  { font-family: 'Syne', sans-serif !important; }
  .hs-body     { font-family: 'DM Sans', sans-serif; }
  .hs-mono     { font-family: 'JetBrains Mono', monospace !important; }

  @keyframes hs-fadeUp   { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
  @keyframes hs-gradX    { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  @keyframes hs-cubeY    { from{transform:rotateX(-22deg) rotateY(0deg)} to{transform:rotateX(-22deg) rotateY(360deg)} }
  @keyframes hs-pulse    { 0%,100%{box-shadow:0 0 0 0 rgba(249,115,22,.5)} 50%{box-shadow:0 0 0 10px rgba(249,115,22,0)} }
  @keyframes hs-glow     { 0%,100%{opacity:.5} 50%{opacity:1} }
  @keyframes hs-floatA   { 0%,100%{transform:translateY(0) translateX(0)} 50%{transform:translateY(-14px) translateX(3px)} }
  @keyframes hs-floatB   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes hs-floatC   { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-12px) rotate(2deg)} }
  @keyframes hs-blink    { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes hs-scan     { 0%{top:-20%} 100%{top:120%} }
  @keyframes hs-typeText {
    0%  { width:0 }
    60% { width:100% }
    80% { width:100% }
    100%{ width:0 }
  }
  @keyframes hs-orbitBadge {
    from { transform: rotate(var(--start)) translateX(var(--r)) rotate(calc(-1 * var(--start))); }
    to   { transform: rotate(calc(var(--start) + 360deg)) translateX(var(--r)) rotate(calc(-1 * (var(--start) + 360deg))); }
  }
  @keyframes hs-ringPulse {
    0%,100%  { opacity:.25; transform:scale(1)  rotate(0deg); }
    50%      { opacity:.5;  transform:scale(1.04) rotate(180deg); }
  }

  .hs-text-grad {
    background: linear-gradient(135deg, #f97316 0%, #ef4444 40%, #f59e0b 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: hs-gradX 5s ease infinite;
  }
  .hs-grid {
    background-image:
      linear-gradient(rgba(249,115,22,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(249,115,22,.04) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  /* Cube face */
  .hs-face {
    position: absolute;
    width: 170px; height: 170px;
    border: 1px solid rgba(249,115,22,.3);
    background: rgba(249,115,22,.02);
  }
  .hs-face::before, .hs-face::after {
    content: '';
    position: absolute;
    background: rgba(249,115,22,.4);
  }
  /* cross-hair lines on each face */
  .hs-face::before { top:50%; left:0; right:0; height:1px; transform:translateY(-50%); opacity:.2; }
  .hs-face::after  { top:0; bottom:0; left:50%; width:1px; transform:translateX(-50%); opacity:.2; }

  /* Hover / interaction */
  .hs-cta-primary  { transition: transform .2s, box-shadow .3s; }
  .hs-cta-primary:hover  { transform:translateY(-2px); box-shadow:0 0 52px rgba(249,115,22,.5) !important; }
  .hs-cta-secondary { transition: border-color .2s, color .2s, transform .2s; }
  .hs-cta-secondary:hover { border-color:rgba(249,115,22,.45) !important; color:#fff !important; transform:translateY(-2px); }
  .hs-stat { transition: border-color .25s, transform .25s; }
  .hs-stat:hover { border-color:rgba(249,115,22,.35) !important; transform:translateY(-4px); }
  .hs-tech-badge { transition: border-color .2s, box-shadow .2s; }
  .hs-tech-badge:hover { border-color:rgba(249,115,22,.4) !important; box-shadow:0 0 16px rgba(249,115,22,.15) !important; }
`;

/* ─────────────────────────────────────────────
   CSS 3D Wireframe Cube
───────────────────────────────────────────── */
function WireframeCube() {
  const S = 170;
  const H = S / 2;
  const faces = [
    { id: "front",  style: { transform: `rotateY(0deg)   translateZ(${H}px)` } },
    { id: "back",   style: { transform: `rotateY(180deg) translateZ(${H}px)` } },
    { id: "left",   style: { transform: `rotateY(-90deg) translateZ(${H}px)` } },
    { id: "right",  style: { transform: `rotateY(90deg)  translateZ(${H}px)` } },
    { id: "top",    style: { transform: `rotateX(90deg)  translateZ(${H}px)` } },
    { id: "bottom", style: { transform: `rotateX(-90deg) translateZ(${H}px)` } },
  ];
  const corners = [
    { top: -3, left: -3 }, { top: -3, right: -3 },
    { bottom: -3, left: -3 }, { bottom: -3, right: -3 },
  ];

  return (
    <div style={{ perspective: 700, perspectiveOrigin: "50% 50%", width: S, height: S }}>
      <div style={{
        width: S, height: S, position: "relative",
        transformStyle: "preserve-3d",
        animation: "hs-cubeY 14s linear infinite",
      }}>
        {faces.map(face => (
          <div key={face.id} className="hs-face" style={face.style}>
            {corners.map((c, ci) => (
              <div key={ci} style={{
                position: "absolute", width: 5, height: 5, borderRadius: "50%",
                background: "#f97316",
                boxShadow: "0 0 8px rgba(249,115,22,.9)",
                ...c,
              }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Orbiting tech badges (elliptical orbit = 3D feel)
───────────────────────────────────────────── */
const TECHS = [
  { label: "Next.js",    color: "#ffffff", bg: "rgba(255,255,255,.06)", icon: "▲" },
  { label: "React",      color: "#61dafb", bg: "rgba(97,218,251,.06)",  icon: "⚛" },
  { label: "TypeScript", color: "#3b82f6", bg: "rgba(59,130,246,.06)",  icon: "TS" },
  { label: "Node.js",    color: "#68a063", bg: "rgba(104,160,99,.06)",  icon: "⬡" },
  { label: "AWS",        color: "#f97316", bg: "rgba(249,115,22,.06)",  icon: "☁" },
  { label: "Python",     color: "#ffd43b", bg: "rgba(255,212,59,.06)",  icon: "🐍" },
];

function TechOrbit() {
  const RX = 185; // horizontal radius
  const RY = 80;  // vertical radius (squished = 3D perspective feel)

  return (
    <div style={{ position: "relative", width: 420, height: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>

      {/* Ambient glow behind cube */}
      <div style={{
        position: "absolute", width: 260, height: 260, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(249,115,22,.13) 0%, transparent 65%)",
        filter: "blur(28px)", pointerEvents: "none",
      }} />

      {/* Decorative orbit rings */}
      {[200, 240, 280].map((r, i) => (
        <div key={i} style={{
          position: "absolute",
          width: r, height: r * 0.42,
          borderRadius: "50%",
          border: `1px solid rgba(249,115,22,${0.06 + i * 0.025})`,
          pointerEvents: "none",
          animation: `hs-ringPulse ${7 + i * 2}s ease-in-out infinite`,
          animationDelay: `${i * 1.2}s`,
        }} />
      ))}

      {/* Central 3D cube */}
      <WireframeCube />

      {/* Tech badges on elliptical orbit */}
      {TECHS.map((tech, i) => {
        const angle = (i / TECHS.length) * 2 * Math.PI;
        const x = Math.cos(angle) * RX;
        const y = Math.sin(angle) * RY;
        const depth = Math.sin(angle); // -1 to 1 — fake z
        const scale = 0.8 + depth * 0.2;
        const zIndex = depth > 0 ? 20 : 5;
        const floatAnim = ["hs-floatA", "hs-floatB", "hs-floatC"][i % 3];
        const dur = 4 + (i * 0.7);

        return (
          <div
            key={tech.label}
            style={{
              position: "absolute",
              left: "50%", top: "50%",
              transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%)) scale(${scale})`,
              zIndex,
              animation: `${floatAnim} ${dur}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            <div
              className="hs-tech-badge"
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "7px 13px", borderRadius: 10,
                background: "rgba(8,8,8,.92)",
                backdropFilter: "blur(16px)",
                border: `1px solid ${tech.color}28`,
                whiteSpace: "nowrap",
                cursor: "default",
              }}
            >
              <span style={{ fontSize: 13, color: tech.color, lineHeight: 1 }}>{tech.icon}</span>
              <span className="hs-mono" style={{ fontSize: 11, fontWeight: 500, color: "#e5e7eb" }}>
                {tech.label}
              </span>
            </div>
          </div>
        );
      })}

      {/* Floating status badge — top right */}
      <div style={{
        position: "absolute", top: "6%", right: "2%", zIndex: 30,
        background: "rgba(8,8,8,.92)", backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,.09)", borderRadius: 14,
        padding: "10px 14px",
        animation: "hs-floatC 5.5s ease-in-out infinite",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "rgba(34,197,94,.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Zap style={{ width: 15, height: 15, color: "#22c55e" }} />
          </div>
          <div>
            <div style={{ color: "#fff", fontSize: 12, fontWeight: 600, lineHeight: 1.3 }}>Delivered on Time</div>
            <div style={{ color: "#6b7280", fontSize: 11 }}>50+ Projects</div>
          </div>
        </div>
      </div>

      {/* Floating status badge — bottom left */}
      <div style={{
        position: "absolute", bottom: "6%", left: "2%", zIndex: 30,
        background: "rgba(8,8,8,.92)", backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,.09)", borderRadius: 14,
        padding: "10px 14px",
        animation: "hs-floatA 6s ease-in-out infinite 1s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "rgba(59,130,246,.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Globe style={{ width: 15, height: 15, color: "#60a5fa" }} />
          </div>
          <div>
            <div style={{ color: "#fff", fontSize: 12, fontWeight: 600, lineHeight: 1.3 }}>30+ Happy Clients</div>
            <div style={{ color: "#6b7280", fontSize: 11 }}>Bangladesh & beyond</div>
          </div>
        </div>
      </div>

      {/* Live terminal snippet — bottom right */}
      <div style={{
        position: "absolute", bottom: "14%", right: "-2%", zIndex: 30,
        background: "rgba(8,8,8,.95)", backdropFilter: "blur(16px)",
        border: "1px solid rgba(249,115,22,.14)", borderRadius: 12,
        padding: "10px 14px", minWidth: 168,
        animation: "hs-floatB 7s ease-in-out infinite .5s",
      }}>
        {/* Terminal top dots */}
        <div style={{ display: "flex", gap: 5, marginBottom: 8 }}>
          {["#ef4444","#f59e0b","#22c55e"].map(c => (
            <div key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div className="hs-mono" style={{ fontSize: 10, color: "#4b5563", marginBottom: 4 }}>$ npm run build</div>
        <div className="hs-mono" style={{ fontSize: 10, color: "#22c55e" }}>✓ Compiled successfully</div>
        <div className="hs-mono" style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
          <span style={{ fontSize: 10, color: "#6b7280" }}>$ _</span>
          <div style={{
            width: 6, height: 11, background: "#f97316", borderRadius: 1,
            animation: "hs-blink 1.2s ease-in-out infinite",
          }} />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Hero Section
───────────────────────────────────────────── */
export function HeroSection() {
  const { language } = useLanguage();

  const stats = language
    ? [
        { num: "50+", label: "প্রজেক্ট", icon: <Code2 style={{ width: 14, height: 14 }} /> },
        { num: "30+", label: "ক্লায়েন্ট", icon: <Globe style={{ width: 14, height: 14 }} /> },
        { num: "100%", label: "সন্তুষ্টি",  icon: <Zap   style={{ width: 14, height: 14 }} /> },
      ]
    : [
        { num: "50+", label: "Projects",     icon: <Code2 style={{ width: 14, height: 14 }} /> },
        { num: "30+", label: "Clients",      icon: <Globe style={{ width: 14, height: 14 }} /> },
        { num: "100%", label: "Satisfaction", icon: <Zap  style={{ width: 14, height: 14 }} /> },
      ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <section
        className="hs-root hs-body hs-grid"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          background: "#050505",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          paddingTop: 80,
        }}
      >
        {/* ── Ambient orbs ── */}
        <div style={{
          position: "absolute", top: "10%", left: "2%",
          width: 520, height: 520, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,.1) 0%, transparent 65%)",
          filter: "blur(70px)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "5%", right: "3%",
          width: 380, height: 380, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,.07) 0%, transparent 65%)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />
        {/* Top-right corner glow */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: 300, height: 300,
          background: "radial-gradient(circle at top right, rgba(249,115,22,.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        {/* ── Content grid ── */}
        <div style={{
          width: "100%", maxWidth: 1280,
          margin: "0 auto",
          padding: "60px 32px 80px",
          position: "relative", zIndex: 10,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}>

          {/* ════ LEFT — Copy ════ */}
          <div style={{ animation: "hs-fadeUp .9s ease forwards" }}>

            {/* Agency badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "7px 16px", borderRadius: 9999,
              border: "1px solid rgba(249,115,22,.28)",
              background: "rgba(249,115,22,.06)",
              color: "#fb923c", fontSize: 11, fontWeight: 700,
              letterSpacing: ".09em", textTransform: "uppercase",
              marginBottom: 28, backdropFilter: "blur(8px)",
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%", background: "#f97316",
                boxShadow: "0 0 8px rgba(249,115,22,.9)",
                animation: "hs-pulse 2s ease-in-out infinite",
              }} />
              {language ? "বাংলাদেশের ক্রিয়েটিভ এজেন্সি" : "Creative Software Agency · BD"}
            </div>

            {/* Headline */}
            <h1
              className="hs-display"
              style={{
                fontSize: "clamp(44px, 5.5vw, 82px)",
                fontWeight: 900,
                lineHeight: 0.93,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                marginBottom: 28,
              }}
            >
              {language ? (
                <>
                  <span style={{ display: "block" }}>আমরা তৈরি করি</span>
                  <span className="hs-text-grad" style={{ display: "block" }}>ডিজিটাল</span>
                  <span style={{ display: "block" }}>অভিজ্ঞতা</span>
                </>
              ) : (
                <>
                  <span style={{ display: "block" }}>We Build</span>
                  <span className="hs-text-grad" style={{ display: "block" }}>Digital</span>
                  <span style={{ display: "block" }}>Experiences</span>
                </>
              )}
            </h1>

            {/* Sub-description */}
            <p style={{
              color: "#6b7280",
              fontSize: 17,
              lineHeight: 1.78,
              fontWeight: 300,
              maxWidth: 470,
              marginBottom: 40,
            }}>
              {language
                ? "আধুনিক ওয়েবসাইট, অ্যাপ এবং ব্র্যান্ড আইডেন্টিটি তৈরিতে আমরা বিশেষজ্ঞ। Pixel & Code — যেখানে ডিজাইন ও প্রযুক্তি একসাথে কাজ করে।"
                : "We craft modern websites, apps, and brand identities that drive real growth. Where pixel-perfect design meets production-grade code."}
            </p>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 52 }}>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button
                  className="hs-display hs-cta-primary"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 9,
                    padding: "15px 30px", borderRadius: 9999,
                    background: "#ea580c",
                    color: "#fff", fontWeight: 800, fontSize: 15,
                    border: "none", cursor: "pointer",
                    boxShadow: "0 0 32px rgba(234,88,12,.35)",
                  }}
                >
                  {language ? "প্রজেক্ট শুরু করুন" : "Start a Project"}
                  <ArrowRight style={{ width: 17, height: 17 }} />
                </button>
              </Link>

              <Link href="/portfolio" style={{ textDecoration: "none" }}>
                <button
                  className="hs-cta-secondary"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "15px 30px", borderRadius: 9999,
                    border: "1px solid rgba(255,255,255,.11)",
                    background: "rgba(255,255,255,.04)",
                    color: "#d1d5db", fontWeight: 500, fontSize: 15,
                    cursor: "pointer", backdropFilter: "blur(8px)",
                  }}
                >
                  <Layers style={{ width: 15, height: 15 }} />
                  {language ? "আমাদের কাজ দেখুন" : "View Portfolio"}
                </button>
              </Link>
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="hs-stat"
                  style={{
                    padding: "14px 20px", borderRadius: 14,
                    background: "rgba(255,255,255,.025)",
                    border: "1px solid rgba(255,255,255,.07)",
                    minWidth: 90, textAlign: "center",
                    backdropFilter: "blur(8px)",
                    cursor: "default",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center", color: "#f97316", marginBottom: 4 }}>
                    {s.icon}
                  </div>
                  <div className="hs-display" style={{ fontSize: 26, fontWeight: 900, color: "#fff", lineHeight: 1 }}>
                    {s.num}
                  </div>
                  <div style={{ fontSize: 11, color: "#6b7280", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}

              {/* Divider + domain pill */}
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "14px 18px", borderRadius: 14,
                background: "rgba(249,115,22,.05)",
                border: "1px solid rgba(249,115,22,.15)",
                backdropFilter: "blur(8px)",
                cursor: "default",
              }}>
                <div style={{
                  width: 7, height: 7, borderRadius: "50%", background: "#22c55e",
                  animation: "hs-pulse 2s ease-in-out infinite",
                  flexShrink: 0,
                }} />
                <span className="hs-mono" style={{ fontSize: 11, color: "#9ca3af" }}>
                  pixelandcode.agency
                </span>
              </div>
            </div>
          </div>

          {/* ════ RIGHT — 3D Visual ════ */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            animation: "hs-fadeUp 1s ease .18s both",
          }}>
            <TechOrbit />
          </div>

        </div>{/* /grid */}

        {/* Bottom fade gradient */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 130,
          background: "linear-gradient(to top, #050505, transparent)",
          pointerEvents: "none",
        }} />

        {/* Scanline overlay for depth */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.04) 2px, rgba(0,0,0,.04) 4px)",
          zIndex: 1,
        }} />

      </section>
    </>
  );
}