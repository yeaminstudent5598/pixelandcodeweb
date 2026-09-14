// src/app/components/shared/Hero.tsx
"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Zap, Code2, Layers, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SplineModel = dynamic(() => import("./SplineModel"), {
  ssr: false,
  loading: () => null,
});

/* ─── Styles ─────────────────────────────────────────────────────── */
const HERO_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  .hero-root { font-family: 'DM Sans', sans-serif; }
  .hero-display { font-family: 'Syne', sans-serif !important; }

  @keyframes hero-fadeUp {
    from { opacity:0; transform:translateY(32px) }
    to   { opacity:1; transform:translateY(0) }
  }
  @keyframes hero-floatY {
    0%,100% { transform:translateY(0) }
    50%      { transform:translateY(-12px) }
  }
  @keyframes hero-floatCard1 {
    0%,100% { transform:translateY(0) rotate(-2deg) }
    50%      { transform:translateY(-10px) rotate(-2deg) }
  }
  @keyframes hero-floatCard2 {
    0%,100% { transform:translateY(0) rotate(2deg) }
    50%      { transform:translateY(-14px) rotate(2deg) }
  }
  @keyframes hero-gradX {
    0%,100% { background-position:0% 50% }
    50%      { background-position:100% 50% }
  }
  @keyframes hero-blink {
    0%,100% { opacity:1 }
    50%      { opacity:0 }
  }
  @keyframes hero-barGrow {
    from { width:0 }
    to   { width:var(--bar-w) }
  }
  @keyframes hero-pulse {
    0%,100% { box-shadow:0 0 0 0 rgba(249,115,22,.4) }
    50%      { box-shadow:0 0 0 10px rgba(249,115,22,0) }
  }
  @keyframes hero-scanline {
    0%   { transform:translateY(0) }
    100% { transform:translateY(100%) }
  }

  .hero-text-grad {
    background: linear-gradient(135deg, #f97316 0%, #ef4444 45%, #f59e0b 100%);
    background-size:200% 200%;
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
    animation: hero-gradX 5s ease infinite;
  }
  .hero-grid {
    background-image:
      linear-gradient(rgba(249,115,22,.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(249,115,22,.05) 1px, transparent 1px);
    background-size: 56px 56px;
  }
  .hero-cta-primary {
    transition: background .2s, box-shadow .3s, transform .15s;
  }
  .hero-cta-primary:hover {
    background: #f97316 !important;
    box-shadow: 0 0 48px rgba(249,115,22,.5) !important;
    transform: translateY(-2px);
  }
  .hero-cta-secondary {
    transition: border-color .2s, color .2s, transform .15s;
  }
  .hero-cta-secondary:hover {
    border-color: rgba(249,115,22,.5) !important;
    color: #fff !important;
    transform: translateY(-2px);
  }
  .hero-stat-card {
    transition: border-color .25s, transform .25s;
  }
  .hero-stat-card:hover {
    border-color: rgba(249,115,22,.3) !important;
    transform: translateY(-4px);
  }
`;

/* ─── Right-side Visual: "Pixel & Code" split card ──────────────── */
function TechVisual() {
  const codeLines = [
    { w: "80%",  color: "#60a5fa" },
    { w: "55%",  color: "#f97316" },
    { w: "70%",  color: "#9ca3af" },
    { w: "40%",  color: "#34d399" },
    { w: "65%",  color: "#9ca3af" },
    { w: "50%",  color: "#f59e0b" },
    { w: "75%",  color: "#60a5fa" },
    { w: "35%",  color: "#9ca3af" },
  ];

  const pixelGrid = [
    ["#3b82f6", "#1d4ed8", "#60a5fa", "#2563eb"],
    ["#f97316", "#ea580c", "#fb923c", "#3b82f6"],
    ["#1d4ed8", "#60a5fa", "#3b82f6", "#f97316"],
    ["#2563eb", "#f97316", "#ea580c", "#1d4ed8"],
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: 480, display: "flex", alignItems: "center", justifyContent: "center" }}>

      {/* Ambient glow */}
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(249,115,22,.1) 0%, transparent 65%)",
        filter: "blur(30px)", pointerEvents: "none",
      }} />

      {/* Main card */}
      <div style={{
        position: "relative", width: "100%", maxWidth: 440,
        background: "#0d0d0d", border: "1px solid rgba(255,255,255,.08)",
        borderRadius: 24, overflow: "hidden",
        boxShadow: "0 24px 80px rgba(0,0,0,.6)",
        animation: "hero-floatY 7s ease-in-out infinite",
      }}>

        {/* Card top bar */}
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "14px 18px",
          background: "rgba(255,255,255,.03)",
          borderBottom: "1px solid rgba(255,255,255,.06)",
        }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }} />
          <div style={{
            marginLeft: 8, fontSize: 11, color: "#4b5563", fontFamily: "monospace",
            letterSpacing: ".05em",
          }}>
            pixel-and-code.dev
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>

          {/* Left: Pixel grid (Design) */}
          <div style={{ padding: 20, borderRight: "1px solid rgba(255,255,255,.06)" }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#6b7280", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 14 }}>
              Pixel ✦ Design
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 }}>
              {pixelGrid.flat().map((color, i) => (
                <div key={i} style={{
                  aspectRatio: "1", borderRadius: 4,
                  background: color,
                  opacity: 0.7 + (i % 3) * 0.1,
                  transition: "opacity .3s",
                }} />
              ))}
            </div>
            <div style={{
              marginTop: 14, padding: "8px 12px", borderRadius: 8,
              background: "rgba(59,130,246,.1)", border: "1px solid rgba(59,130,246,.2)",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <Layers style={{ width: 13, height: 13, color: "#60a5fa", flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: "#93c5fd", fontWeight: 600 }}>UI/UX Design</span>
            </div>
          </div>

          {/* Right: Code lines (Dev) */}
          <div style={{ padding: 20 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "#6b7280", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 14 }}>
              Code ✦ Dev
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {codeLines.map((line, i) => (
                <div key={i} style={{
                  height: 4, borderRadius: 2,
                  background: line.color, opacity: 0.5 + (i % 3) * 0.15,
                  width: line.w,
                  animation: `hero-barGrow .8s ease ${i * 0.08}s both`,
                  "--bar-w": line.w,
                } as React.CSSProperties} />
              ))}
              {/* Cursor */}
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
                <div style={{ width: 6, height: 13, background: "#f97316", borderRadius: 1, animation: "hero-blink 1.2s ease-in-out infinite" }} />
              </div>
            </div>
            <div style={{
              marginTop: 10, padding: "8px 12px", borderRadius: 8,
              background: "rgba(249,115,22,.1)", border: "1px solid rgba(249,115,22,.2)",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <Code2 style={{ width: 13, height: 13, color: "#f97316", flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: "#fdba74", fontWeight: 600 }}>Next.js + React</span>
            </div>
          </div>
        </div>

        {/* Card bottom status */}
        <div style={{
          padding: "12px 18px",
          background: "rgba(255,255,255,.02)",
          borderTop: "1px solid rgba(255,255,255,.06)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{
              width: 7, height: 7, borderRadius: "50%", background: "#22c55e",
              animation: "hero-pulse 2s ease-in-out infinite",
            }} />
            <span style={{ fontSize: 11, color: "#6b7280" }}>Building your vision...</span>
          </div>
          <span style={{ fontSize: 11, color: "#22c55e", fontWeight: 600 }}>Live</span>
        </div>
      </div>

      {/* Floating badge 1 — top right */}
      <div style={{
        position: "absolute", top: "8%", right: "0%",
        background: "rgba(10,10,10,.9)", backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,.1)", borderRadius: 14,
        padding: "10px 14px", animation: "hero-floatCard1 5s ease-in-out infinite",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(34,197,94,.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap style={{ width: 16, height: 16, color: "#22c55e" }} />
          </div>
          <div>
            <div style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>Project Delivered</div>
            <div style={{ color: "#6b7280", fontSize: 11 }}>Ahead of schedule</div>
          </div>
        </div>
      </div>

      {/* Floating badge 2 — bottom left */}
      <div style={{
        position: "absolute", bottom: "10%", left: "0%",
        background: "rgba(10,10,10,.9)", backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,.1)", borderRadius: 14,
        padding: "10px 14px", animation: "hero-floatCard2 6s ease-in-out infinite 1s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(59,130,246,.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Globe style={{ width: 16, height: 16, color: "#60a5fa" }} />
          </div>
          <div>
            <div style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>30+ Happy Clients</div>
            <div style={{ color: "#6b7280", fontSize: 11 }}>Bangladesh & beyond</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero Component ─────────────────────────────────────────────── */
export function Hero() {
  const { language } = useLanguage();
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth > 1024) {
        setTimeout(() => setShow3D(true), 1000);
      }
    };
    checkScreen();
    let tid: NodeJS.Timeout;
    const onResize = () => {
      clearTimeout(tid);
      tid = setTimeout(() => setShow3D(window.innerWidth > 1024), 500);
    };
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("resize", onResize); clearTimeout(tid); };
  }, []);

  const stats = language
    ? [{ num: "50+", label: "প্রজেক্ট" }, { num: "30+", label: "ক্লায়েন্ট" }, { num: "100%", label: "সন্তুষ্টি" }]
    : [{ num: "50+", label: "Projects" }, { num: "30+", label: "Clients" }, { num: "100%", label: "Satisfaction" }];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: HERO_STYLES }} />

      <section className="hero-root hero-grid" style={{
        position: "relative", width: "100%", minHeight: "100vh",
        background: "#050505", overflow: "hidden",
        display: "flex", alignItems: "center",
        paddingTop: 80,
      }}>

        {/* Ambient orbs */}
        <div style={{
          position: "absolute", top: "15%", left: "5%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,.12) 0%, transparent 65%)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "5%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,.08) 0%, transparent 65%)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />

        <div className="container mx-auto" style={{ padding: "60px 24px 80px", position: "relative", zIndex: 10 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64, alignItems: "center",
          }} className="lg:grid-cols-2 grid-cols-1">

            {/* ── Left: Text ── */}
            <div style={{ animation: "hero-fadeUp .9s ease forwards" }}>

              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "7px 16px", borderRadius: 9999,
                border: "1px solid rgba(249,115,22,.3)",
                background: "rgba(249,115,22,.07)",
                color: "#fb923c", fontSize: 12, fontWeight: 700,
                letterSpacing: ".08em", textTransform: "uppercase",
                marginBottom: 28, backdropFilter: "blur(8px)",
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%", background: "#f97316",
                  boxShadow: "0 0 8px rgba(249,115,22,.8)", display: "inline-block",
                  animation: "hero-pulse 2s ease-in-out infinite",
                }} />
                {language ? "বাংলাদেশের ক্রিয়েটিভ এজেন্সি" : "Creative Digital Agency"}
              </div>

              {/* Headline */}
              <h1 className="hero-display" style={{
                fontSize: "clamp(42px, 6vw, 80px)",
                fontWeight: 900, lineHeight: .95,
                letterSpacing: "-0.03em",
                color: "#fff", marginBottom: 28,
              }}>
                {language ? (
                  <>
                    <span style={{ display: "block" }}>আমরা তৈরি করি</span>
                    <span className="hero-text-grad" style={{ display: "block" }}>ডিজিটাল</span>
                    <span style={{ display: "block" }}>অভিজ্ঞতা</span>
                  </>
                ) : (
                  <>
                    <span style={{ display: "block" }}>We Build</span>
                    <span className="hero-text-grad" style={{ display: "block" }}>Digital</span>
                    <span style={{ display: "block" }}>Experiences</span>
                  </>
                )}
              </h1>

              {/* Sub */}
              <p style={{
                color: "#6b7280", fontSize: 17, lineHeight: 1.75,
                fontWeight: 300, maxWidth: 480, marginBottom: 40,
              }}>
                {language
                  ? "আপনার ব্যবসার জন্য আমরা তৈরি করি আধুনিক ওয়েবসাইট, অ্যাপ এবং ব্র্যান্ড আইডেন্টিটি। Pixel & Code এর সাথে আপনার ডিজিটাল যাত্রা শুরু করুন।"
                  : "We create modern websites, apps, and brand identities that drive real results. Start your digital journey with Pixel & Code today."}
              </p>

              {/* CTA Buttons */}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 52 }}>
                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <button className="hero-display hero-cta-primary" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "15px 30px", borderRadius: 9999,
                    background: "#ea580c", color: "#fff",
                    fontWeight: 800, fontSize: 15, border: "none", cursor: "pointer",
                  }}>
                    {language ? "প্রজেক্ট শুরু করুন" : "Start Project"}
                    <ArrowRight style={{ width: 18, height: 18 }} />
                  </button>
                </Link>
                <Link href="/portfolio" style={{ textDecoration: "none" }}>
                  <button className="hero-cta-secondary" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "15px 30px", borderRadius: 9999,
                    border: "1px solid rgba(255,255,255,.12)",
                    background: "rgba(255,255,255,.04)",
                    color: "#d1d5db", fontWeight: 600, fontSize: 15, cursor: "pointer",
                    backdropFilter: "blur(8px)",
                  }}>
                    <Play style={{ width: 15, height: 15, fill: "currentColor" }} />
                    {language ? "আমাদের কাজ দেখুন" : "View Our Work"}
                  </button>
                </Link>
              </div>

              {/* Stats row */}
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {stats.map((s, i) => (
                  <div key={i} className="hero-stat-card" style={{
                    padding: "14px 20px", borderRadius: 14,
                    background: "rgba(255,255,255,.03)",
                    border: "1px solid rgba(255,255,255,.07)",
                    minWidth: 90, textAlign: "center",
                    backdropFilter: "blur(8px)",
                  }}>
                    <div className="hero-display" style={{
                      fontSize: 26, fontWeight: 900, color: "#fff",
                      lineHeight: 1,
                    }}>{s.num}</div>
                    <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: 3D or Visual ── */}
            <div style={{
              position: "relative", height: 480,
              display: "flex", alignItems: "center", justifyContent: "center",
              animation: "hero-fadeUp 1s ease .2s both",
            }} className="order-first lg:order-last">

              {show3D ? (
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <SplineModel
                    scene="https://prod.spline.design/EyT5-iTgphWIpH2g/scene.splinecode"
                    className="w-full h-full"
                  />
                  {/* Spline logo cover */}
                  <div style={{
                    position: "absolute", bottom: 8, right: 8,
                    width: 160, height: 60, background: "#050505",
                    zIndex: 50, pointerEvents: "none",
                  }} />
                </div>
              ) : (
                <TechVisual />
              )}
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 120,
          background: "linear-gradient(to top, #050505, transparent)",
          pointerEvents: "none",
        }} />
      </section>
    </>
  );
}