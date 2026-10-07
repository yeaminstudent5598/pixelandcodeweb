"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// --------------------------------------------------
// Client logos (public/ourclients)
// --------------------------------------------------
const CLIENT_LOGOS = [
  { src: "/ourclients/comapany1.webp", alt: "Client logo 1" },
  { src: "/ourclients/company2.png", alt: "Client logo 2" },
  { src: "/ourclients/company3.webp", alt: "Client logo 3" },
  { src: "/ourclients/company4.png", alt: "Client logo 4" },
  { src: "/ourclients/company5.webp", alt: "Client logo 5" },
  { src: "/ourclients/company6.avif", alt: "Client logo 6" },
  { src: "/ourclients/company7.svg", alt: "Client logo 7" },
  { src: "/ourclients/company8.jpg", alt: "Client logo 8" },
];

type ReadyLogo = { url: string; alt: string };

// --------------------------------------------------
// Auto-trim: logo er charpashe faka jayga (transparent / white) kete dey,
// jate sob logo same size e dekhay. Load na hole reject kore.
// --------------------------------------------------
const MAX_SIDE = 1000;

function loadAndTrim(src: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const img = new window.Image();

    img.onerror = () => reject(new Error(`Failed to load ${src}`));

    img.onload = () => {
      // SVG scalable — as it is (load hoyeche mane thik ache)
      if (src.toLowerCase().endsWith(".svg")) return resolve(src);

      try {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        if (!w || !h) return resolve(src);

        const ratio = Math.min(1, MAX_SIDE / Math.max(w, h));
        const cw = Math.round(w * ratio);
        const ch = Math.round(h * ratio);

        const canvas = document.createElement("canvas");
        canvas.width = cw;
        canvas.height = ch;

        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) return resolve(src);

        ctx.drawImage(img, 0, 0, cw, ch);
        const { data } = ctx.getImageData(0, 0, cw, ch);

        let minX = cw;
        let minY = ch;
        let maxX = -1;
        let maxY = -1;

        for (let y = 0; y < ch; y++) {
          for (let x = 0; x < cw; x++) {
            const i = (y * cw + x) * 4;

            // transparent pixel
            if (data[i + 3] < 20) continue;
            // near-white pixel (white background)
            if (data[i] > 242 && data[i + 1] > 242 && data[i + 2] > 242) continue;

            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }

        if (maxX < 0 || maxY < 0) return resolve(src);

        const pad = 2;
        const sx = Math.max(0, minX - pad);
        const sy = Math.max(0, minY - pad);
        const sw = Math.min(cw - sx, maxX - minX + 1 + pad * 2);
        const sh = Math.min(ch - sy, maxY - minY + 1 + pad * 2);

        if (sw < 8 || sh < 8) return resolve(src);

        const out = document.createElement("canvas");
        out.width = sw;
        out.height = sh;
        const outCtx = out.getContext("2d");
        if (!outCtx) return resolve(src);

        outCtx.drawImage(canvas, sx, sy, sw, sh, 0, 0, sw, sh);
        resolve(out.toDataURL("image/png"));
      } catch {
        resolve(src);
      }
    };

    img.src = src;
  });
}

// --------------------------------------------------
// Single logo
// Light mode: plain logo (no box)
// Dark mode: soft white pill, jate dark logo gulo-o dekha jay
// --------------------------------------------------
function Logo({ url, alt }: ReadyLogo) {
  return (
    <li className="flex shrink-0 items-center dark:rounded-xl dark:bg-white/95 dark:px-4 dark:py-2">
      <img
        src={url}
        alt={alt}
        draggable={false}
        className="h-8 w-auto max-w-[110px] select-none object-contain transition-transform duration-300 hover:scale-110 sm:h-9 sm:max-w-[125px] lg:h-10 lg:max-w-[140px]"
      />
    </li>
  );
}

// --------------------------------------------------
// Trusted Client Marquee
// --------------------------------------------------
export default function ClientMarquee() {
  const { language } = useLanguage();
  const [logos, setLogos] = useState<ReadyLogo[]>([]);

  // sob logo ekshathe load kore, je gulo load hoy na oigulo bad dey
  useEffect(() => {
    let alive = true;

    Promise.allSettled(CLIENT_LOGOS.map((l) => loadAndTrim(l.src))).then(
      (results) => {
        if (!alive) return;

        const ready: ReadyLogo[] = [];
        results.forEach((r, i) => {
          if (r.status === "fulfilled") {
            ready.push({ url: r.value, alt: CLIENT_LOGOS[i].alt });
          }
        });

        setLogos(ready);
      }
    );

    return () => {
      alive = false;
    };
  }, []);

  // seamless loop er jonno list ta 2 bar repeat
  const group = [...logos, ...logos];

  return (
    <section className="relative overflow-hidden bg-white py-14 dark:bg-[#050b16] sm:py-16 lg:py-20">
      {/* marquee animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes clientMarqueeMove {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
            .client-marquee-track {
              animation: clientMarqueeMove 40s linear infinite;
            }
            .client-marquee-wrap:hover .client-marquee-track {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .client-marquee-track { animation: none; }
            }
          `,
        }}
      />

      {/* soft blue glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[30%] h-[300px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, rgba(56,189,248,0) 70%)",
          }}
        />
      </div>

      {/* Container — navbar ar hero er sathe same width & padding */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="
              inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] backdrop-blur-md
              border border-[rgba(56,189,248,0.45)] bg-[rgba(255,255,255,0.75)] text-sky-700
              dark:border-[rgba(56,189,248,0.35)] dark:bg-[rgba(56,189,248,0.12)] dark:text-sky-200
            "
          >
            {language ? "আমাদের ক্লায়েন্ট" : "Our Clients"}
          </span>

          <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {language ? (
              <>
                বাংলাদেশের দ্রুত বর্ধনশীল ব্র্যান্ডগুলো
                <br className="hidden sm:block" /> আমাদের উপর আস্থা রাখে
              </>
            ) : (
              <>
                Trusted by Fast-Growing Brands
                <br className="hidden sm:block" /> From Startups to Enterprises
              </>
            )}
          </h2>
        </div>

        {/* Marquee — same container, tai edge gulo navbar er sathe align */}
        <div
          className="client-marquee-wrap relative mt-10 overflow-hidden sm:mt-12"
          style={{
            minHeight: "2.5rem",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)",
          }}
        >
          {logos.length > 0 && (
            <div className="client-marquee-track flex w-max items-center">
              {/* Group 1 */}
              <ul className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
                {group.map((logo, i) => (
                  <Logo key={`a-${i}`} url={logo.url} alt={logo.alt} />
                ))}
              </ul>

              {/* Group 2 (seamless loop) */}
              <ul
                aria-hidden="true"
                className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
              >
                {group.map((logo, i) => (
                  <Logo key={`b-${i}`} url={logo.url} alt="" />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}