// File Path: D:\yeamin student\PixelandCode Web\pixelandcode\src\app\components\shared\GrowthSection.tsx

import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Globe,
  Megaphone,
  PenTool,
  Search,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";
import styles from "./GrowthSection.module.css";

type Tab = { label: string; Icon: LucideIcon; active?: boolean };

const TABS: Tab[] = [
  { label: "Web", Icon: Globe },
  { label: "Design", Icon: PenTool, active: true },
  { label: "Video", Icon: Video },
  { label: "Ads", Icon: Megaphone },
  { label: "SEO", Icon: Search },
];

export function GrowthSection() {
  return (
    <section className={styles.section} aria-labelledby="growth-heading">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        {/* LEFT: TEXT */}
        <div className={styles.text}>
          <h2 id="growth-heading" className={styles.heading}>
            Same Team. More ways to grow your business.
          </h2>

          <p className={styles.para}>
            Pixel &amp; Code is one team for your website, design, video and
            marketing. Start with one service and add more as you grow: web
            development, graphic design, video editing, Meta ads and SEO, all
            under one roof.
          </p>

          <Link href="/services" className={styles.link}>
            <span>Learn more</span>
            <span className={styles.arrow}>
              <ArrowRight size={20} />
            </span>
          </Link>
        </div>

        {/* RIGHT: VISUAL */}
        <div className={styles.visualWrap}>
          <div className={styles.scaleBox}>
            <div className={styles.stage} aria-hidden="true">
              <div className={`${styles.card} ${styles.card1}`}>
                <p className={styles.cardText}>Build my online shop</p>
                <span className={styles.cardIcon}>
                  <Zap size={22} />
                </span>
              </div>

              <div className={`${styles.card} ${styles.card2}`}>
                <p className={styles.cardText}>Design my brand logo</p>
                <span className={styles.cardIcon}>
                  <Zap size={22} />
                </span>
              </div>

              <div className={`${styles.card} ${styles.card3}`}>
                <p className={styles.cardText}>Run Facebook ads for my shop</p>
                <div className={styles.cardFooter}>
                  <Zap size={22} />
                  <span>Services</span>
                  <ChevronDown size={16} />
                </div>
              </div>

              <div className={styles.appIcon}>P&amp;C</div>

              <div className={styles.toolbar}>
                {TABS.map(({ label, Icon, active }) => (
                  <div
                    key={label}
                    className={`${styles.tab} ${active ? styles.tabActive : ""}`}
                  >
                    <Icon size={18} strokeWidth={1.6} />
                    <span className={styles.tabLabel}>{label}</span>
                  </div>
                ))}
              </div>

              <svg
                className={styles.cursor}
                width="34"
                height="42"
                viewBox="0 0 34 42"
                fill="none"
              >
                <path
                  d="M3 2 L3 33 L11 26 L17 39 L23 36 L17 24 L28 23 Z"
                  fill="#fff"
                  stroke="#14102e"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowthSection;