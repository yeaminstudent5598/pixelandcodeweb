// File Path: D:\yeamin student\PixelandCode Web\pixelandcode\src\app\components\shared\PowerSection.tsx

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Clapperboard,
  Code2,
  GitBranch,
  Globe,
  Megaphone,
  Palette,
  PenTool,
  RefreshCw,
  Search,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import styles from "./PowerSection.module.css";

const AUTOMATIONS = [
  { label: "Meta & Facebook ads", href: "/meta-marketing" },
  { label: "SEO & content", href: "/seo" },
  { label: "Website care & updates", href: "/web-service" },
];

type PowerCard = { title: string; text: string; href: string; Icon: LucideIcon };

const CARDS: PowerCard[] = [
  {
    title: "Web development",
    text: "Fast Next.js websites, e-commerce stores and custom web apps.",
    href: "/web-service",
    Icon: Code2,
  },
  {
    title: "UI/UX design",
    text: "Clean interfaces designed around how your customers use them.",
    href: "/ui-ux-design",
    Icon: PenTool,
  },
  {
    title: "Graphic design",
    text: "Logos, branding and social media designs that look consistent.",
    href: "/graphics-design",
    Icon: Palette,
  },
  {
    title: "Video editing",
    text: "Reels, ads and YouTube videos edited for attention.",
    href: "/video-editing",
    Icon: Clapperboard,
  },
  {
    title: "Digital marketing",
    text: "Plans and packages to bring in leads and grow sales.",
    href: "/digital-marketing",
    Icon: TrendingUp,
  },
];

export function PowerSection() {
  return (
    <section className={styles.section} aria-labelledby="power-heading">
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.head}>
          <h2 id="power-heading" className={styles.title}>
            Put digital growth to work for you
          </h2>
          <p className={styles.sub}>
            Websites, design, video and ads from one team, so more of your
            marketing gets done while you run your business.
          </p>
        </div>

        {/* Middle row */}
        <div className={styles.mid}>
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.badge}>
              <RefreshCw size={26} strokeWidth={1.8} />
            </div>

            <svg
              className={styles.cursor}
              width="22"
              height="28"
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

            <div className={styles.panel}>
              <svg
                className={styles.lines}
                viewBox="0 0 231 318"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              >
                <path d="M102 118 H137" strokeDasharray="3 4" />
                <path d="M163 144 V186" />
                <path d="M76 144 V162 H36 V209 H66" />
                <path d="M133 232 V244 H76 V253" />
                <path d="M133 244 H163 V253" />
              </svg>

              <div className={`${styles.node} ${styles.nodeRound}`} style={{ left: 50, top: 92 }}>
                <Globe size={20} strokeWidth={1.6} />
              </div>
              <div className={styles.node} style={{ left: 137, top: 92 }}>
                <GitBranch size={20} strokeWidth={1.6} />
              </div>

              <div className={styles.agent}>
                <Bot size={16} strokeWidth={1.6} />
                <span>Pixel &amp; Code</span>
              </div>

              <div className={`${styles.tile} ${styles.tileRed}`}>
                <Megaphone size={22} strokeWidth={1.8} />
              </div>
              <div className={`${styles.tile} ${styles.tileWhite}`}>
                <Search size={22} strokeWidth={1.8} />
              </div>
            </div>
          </div>

          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Marketing that keeps running</h3>
            <p className={styles.infoText}>
              Connect your website, ads and content in one plan, and keep
              leads coming in, even when you&apos;re not online.
            </p>

            <ul className={styles.list}>
              {AUTOMATIONS.map((item) => (
                <li key={item.label} className={styles.listItem}>
                  <Link href={item.href} className={styles.listLink}>
                    <span>{item.label}</span>
                    <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* More power */}
        <div className={styles.more}>
          <h3 className={styles.moreTitle}>More power when you need it</h3>

          <div className={styles.cards}>
            {CARDS.map(({ title, text, href, Icon }) => (
              <Link key={title} href={href} className={styles.card}>
                <span className={styles.cardIcon}>
                  <Icon size={18} strokeWidth={1.7} />
                </span>
                <span className={styles.cardArrow}>
                  <ArrowUpRight size={14} />
                </span>
                <h4 className={styles.cardTitle}>{title}</h4>
                <p className={styles.cardText}>{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PowerSection;