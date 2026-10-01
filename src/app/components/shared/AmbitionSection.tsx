// File Path: D:\yeamin student\PixelandCode Web\pixelandcode\src\app\components\shared\AmbitionSection.tsx
"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import {
  ArrowUp,
  ArrowUpRight,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Plus,
  Search,
  Send,
  ShoppingBag,
} from "lucide-react";
import styles from "./AmbitionSection.module.css";

/* ------------------------------------------------------------------ */
/* Config: edit images / numbers here                                  */
/* ------------------------------------------------------------------ */

const FOUNDED = 2023; // same as foundingDate in your Organization schema

const PHOTOS = {
  // base cards
  a: "/digital%20marketing%20team.jpg",
  c: "/graphic%20team.jpg",
  e: "/video_editor_team.webp",
  // hover (alternate) cards
  altB: "/Seo%20team.png",
  altD: "/digital_markteting.jpg",
};

const STATS = [
  {
    label: `Founded in ${FOUNDED}`,
    value: String(new Date().getFullYear() - FOUNDED),
    caption: "Years in business",
  },
  { label: "Services under one roof", value: "4", caption: "Web, design, video and ads" },
  { label: "Ready-made packages", value: "3", caption: "Silver, Gold and Diamond" },
  { label: "Languages supported", value: "2", caption: "Bangla and English" },
];

// Final position of each card + how far it starts from its place (fan-out)
const CARDS = [
  { id: "a", left: 12, top: 34, w: 235, h: 235, rot: -7, fx: 398, z: 1 },
  { id: "b", left: 207, top: 2, w: 248, h: 249, rot: 0, fx: 198, z: 2 },
  { id: "c", left: 402, top: 30, w: 240, h: 240, rot: 4, fx: 7, z: 3 },
  { id: "d", left: 602, top: 33, w: 240, h: 240, rot: 4, fx: -193, z: 4 },
  { id: "e", left: 797, top: 26, w: 255, h: 255, rot: -6, fx: -396, z: 5 },
] as const;

type CardId = (typeof CARDS)[number]["id"];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/* Rolling-digit counter (slot / odometer style) */
function Odometer({ value, active }: { value: string; active: boolean }) {
  return (
    <span
      className={`${styles.odo} ${active ? styles.odoIn : ""}`}
      role="img"
      aria-label={value}
    >
      {value.split("").map((ch, i) => {
        if (!/\d/.test(ch)) {
          return (
            <span key={i} className={styles.symbol} aria-hidden="true">
              {ch}
            </span>
          );
        }
        const style = {
          "--d": Number(ch),
          transitionDelay: `${i * 120}ms`,
          transitionDuration: `${1.6 + i * 0.25}s`,
        } as CSSProperties;
        return (
          <span key={i} className={styles.digit} aria-hidden="true">
            <span className={styles.strip} style={style}>
              {DIGITS.map((n, k) => (
                <span key={k}>{n}</span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}

const FILL: CSSProperties = { position: "absolute", inset: 0 };

function Photo({ src, link }: { src: string; link: string }) {
  return (
    <div className={styles.photo} style={FILL}>
      <Image src={src} alt="" fill sizes="280px" className={styles.img} />
      <span className={styles.caption}>
        <ArrowUpRight size={14} />
        {link}
      </span>
    </div>
  );
}

/* Default (tilted) card faces */
function BaseFace({ id }: { id: CardId }) {
  if (id === "a") return <Photo src={PHOTOS.a} link="pixelandcode.agency" />;
  if (id === "c") return <Photo src={PHOTOS.c} link="pixelandcode.agency/portfolio" />;

  if (id === "b") {
    return (
      <div className={styles.email} style={FILL}>
        <span className={`${styles.plus} ${styles.plusTop}`}>
          <Plus size={12} strokeWidth={2.5} />
        </span>
        <div className={styles.emailCard}>
          <div className={styles.emailHead}>
            <span className={styles.emailIcon}>
              <Mail size={11} />
            </span>
            <div>
              <p className={styles.emailSmall}>Send email</p>
              <p className={styles.emailBold}>New campaign teaser</p>
            </div>
          </div>
          <div className={styles.emailArt}>
            <span className={styles.script}>pixel &amp; code</span>
            <span className={styles.serif}>
              Coming
              <br />
              soon
            </span>
          </div>
        </div>
        <span className={`${styles.plus} ${styles.plusBottom}`}>
          <Plus size={12} strokeWidth={2.5} />
        </span>
      </div>
    );
  }

  if (id === "d") {
    return (
      <div className={styles.search} style={FILL}>
        <div className={styles.searchBar}>
          <Search size={16} />
          <span>Logo for a bakery</span>
        </div>
        <div className={styles.result}>
          <div className={styles.resultHead}>
            <span className={styles.resultDot} />
            Pixel &amp; Code
          </div>
          <div className={styles.art}>
            <span className={styles.ring}>P&amp;C</span>
          </div>
        </div>
      </div>
    );
  }

  // id === "e"
  return (
    <div className={styles.photo} style={FILL}>
      <Image src={PHOTOS.e} alt="" fill sizes="280px" className={styles.img} />
      {/* Sample dashboard numbers, for illustration only. Edit or remove. */}
      <div className={styles.sales}>
        <span className={styles.salesLabel}>
          <ShoppingBag size={12} />
          Total sales
        </span>
        <div className={styles.salesRow}>
          <span className={styles.salesValue}>৳ 1,20,935</span>
          <span className={styles.badge}>
            +50% <ArrowUp size={11} />
          </span>
        </div>
      </div>
    </div>
  );
}

/* Hover (alternate) card faces: shown straight on hover */
function AltFace({ id }: { id: CardId }) {
  if (id === "a") {
    return (
      <div className={styles.altPink} style={FILL}>
        <div className={styles.altWin} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={styles.altPill}>
          Brand starter kit
          <br />
          Logo + social set
        </div>
        <span className={styles.altBtn}>Get a quote</span>
      </div>
    );
  }

  if (id === "b") return <Photo src={PHOTOS.altB} link="pixelandcode.agency/about" />;

  if (id === "c") {
    return (
      <div className={styles.post} style={FILL}>
        <div className={styles.postImg}>
          <span className={styles.postDome} />
          <span className={styles.postBulb} />
          <span className={styles.postTag}>Meta ad preview</span>
        </div>
        <div className={styles.postBar}>
          <span className={styles.postIcons}>
            <Heart size={17} />
            <MessageCircle size={17} />
          </span>
          <Send size={17} />
        </div>
      </div>
    );
  }

  if (id === "d") return <Photo src={PHOTOS.altD} link="pixelandcode.agency/services" />;

  // id === "e"
  return (
    <div className={styles.dark} style={FILL}>
      <span className={styles.deck}>PRINT</span>
      <p className={styles.darkLabel}>BRAND MERCH</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export function AmbitionSection() {
  const [cardsRef, cardsIn] = useInView<HTMLDivElement>(0.25);
  const [statsRef, statsIn] = useInView<HTMLDivElement>(0.35);

  return (
    <section className={styles.section} aria-labelledby="ambition-heading">
      <div className={styles.container}>
        <div className={styles.head}>
          <h2 id="ambition-heading" className={styles.title}>
            Digital-first. Built for your ambition.
          </h2>
          <p className={styles.sub}>
            Pixel &amp; Code is a digital agency to build, design, and grow your
            business online, all in one place.
          </p>
        </div>

        {/* Card fan (hover a card to swap it) */}
        <div
          ref={cardsRef}
          className={`${styles.cardsWrap} ${cardsIn ? styles.cardsIn : ""}`}
          aria-hidden="true"
        >
          <div className={styles.stage}>
            {CARDS.map((c, i) => (
              <div
                key={c.id}
                className={styles.card}
                style={
                  {
                    left: c.left,
                    top: c.top,
                    width: c.w,
                    height: c.h,
                    zIndex: c.z,
                    "--r": `${c.rot}deg`,
                    "--rn": `${-c.rot}deg`,
                    "--fx": `${c.fx}px`,
                    "--i": i,
                  } as CSSProperties
                }
              >
                <div className={styles.base}>
                  <BaseFace id={c.id} />
                </div>
                <div className={styles.alt}>
                  <AltFace id={c.id} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location row */}
        <div className={styles.rating}>
          <span className={styles.ratingIcon}>
            <MapPin size={14} />
          </span>
          <span>Proudly based in Shariatpur, working with clients across Bangladesh</span>
        </div>

        {/* Stats */}
        <div ref={statsRef} className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <p className={styles.statLabel}>{s.label}</p>
              <Odometer value={s.value} active={statsIn} />
              <p className={styles.statCaption}>{s.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AmbitionSection;