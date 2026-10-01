// File Path: D:\yeamin student\PixelandCode Web\pixelandcode\src\app\components\shared\WorkShowcaseSection.tsx

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import styles from "./WorkShowcaseSection.module.css";

type Inset = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  radius: string;
};

type Tile =
  | {
      kind: "project";
      tag: string;
      image: string; // screenshot shown inside the mockup
      bg: string; // card background gradient
      inset: Inset;
      size: "short" | "tall";
    }
  | { kind: "portrait"; label: string; image: string }
  | { kind: "quote"; quote: string; name: string; role: string; initials: string };

const COLUMNS: Tile[][] = [
  // ---------- Column 1 ----------
  [
    {
      kind: "project",
      tag: "Web design",
      image: "/Demo_Work_01.jpg",
      bg: "linear-gradient(160deg,#5a5a5a 0%,#2c2c2c 100%)",
      inset: { left: "6%", right: "5%", top: "39%", bottom: "7%", radius: "8px" },
      size: "short",
    },
    { kind: "portrait", label: "Graphic design", image: "/graphic%20team.jpg" },
    {
      kind: "project",
      tag: "Portfolio",
      image: "/web%20design.jpg",
      bg: "linear-gradient(160deg,#3b6aa5 0%,#0f2a4d 100%)",
      inset: { left: "15%", right: "-4%", top: "24%", bottom: "8%", radius: "8px" },
      size: "tall",
    },
  ],
  // ---------- Column 2 ----------
  [
    {
      kind: "quote",
      quote: "Pixel & Code completely transformed our online presence. The new e-commerce platform is incredibly fast, and our conversion rates have noticeably increased.",
      name: "Tariqul Islam",
      role: "E-commerce Founder",
      initials: "TI",
    },
    {
      kind: "project",
      tag: "E-commerce",
      image: "/images/ecommerce.jpg",
      bg: "linear-gradient(160deg,#bfd3b8 0%,#6b7d5c 100%)",
      inset: { left: "7%", right: "6%", top: "20%", bottom: "0", radius: "14px 14px 0 0" },
      size: "tall",
    },
    {
      kind: "quote",
      quote: "Working with this team was a breeze. They delivered our management system ahead of schedule, with a flawless user interface and seamless backend.",
      name: "Ayesha Siddiqua",
      role: "Operations Manager",
      initials: "AS",
    },
  ],
  // ---------- Column 3 ----------
  [
    {
      kind: "project",
      tag: "Business",
      image: "/web02.jpeg",
      bg: "linear-gradient(180deg,#a9c9e8 0%,#2f5d3a 100%)",
      inset: { left: "5%", right: "11%", top: "38%", bottom: "6%", radius: "8px" },
      size: "short",
    },
    { kind: "portrait", label: "Video editing", image: "/video_editor_team.webp" },
    {
      kind: "project",
      tag: "E-commerce",
      image: "/images/porer-bazar.jpg",
      bg: "linear-gradient(160deg,#6d7d8c 0%,#2a3440 100%)",
      inset: { left: "8%", right: "-6%", top: "36%", bottom: "0", radius: "8px 0 0 0" },
      size: "short",
    },
  ],
  // ---------- Column 4 ----------
  [
    { kind: "portrait", label: "Digital marketing", image: "/digital%20marketing%20team.jpg" },
    {
      kind: "quote",
      quote: "Their web design and development skills are top-notch. The customized business portfolio they built perfectly represents our brand's vision.",
      name: "Hasan Mahmud",
      role: "Business Owner",
      initials: "HM",
    },
    {
      kind: "project",
      tag: "Web app",
      image: "/images/amader-shodai.jpg",
      bg: "linear-gradient(160deg,#2f6b72 0%,#0f2a30 100%)",
      inset: { left: "7%", right: "7%", top: "20%", bottom: "6%", radius: "14px" },
      size: "tall",
    },
  ],
];

function TileView({ tile }: { tile: Tile }) {
  if (tile.kind === "quote") {
    return (
      <figure className={`${styles.card} ${styles.quoteH} ${styles.quote}`} style={{ margin: 0 }}>
        <blockquote className={styles.quoteText} style={{ margin: 0 }}>
          &ldquo;{tile.quote}&rdquo;
        </blockquote>
        <figcaption className={styles.author}>
          <span className={styles.avatar} aria-hidden="true">
            {tile.initials}
          </span>
          <span>
            <p className={styles.name}>{tile.name}</p>
            <p className={styles.role}>{tile.role}</p>
          </span>
        </figcaption>
      </figure>
    );
  }

  if (tile.kind === "portrait") {
    return (
      <div
        className={`${styles.card} ${styles.tall} ${styles.portrait}`}
        style={{ background: "linear-gradient(180deg,#5a2ee0 0%,#2a0f7a 55%,#0d0620 100%)" }}
      >
        <Image
          src={tile.image}
          alt={tile.label}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
          className={styles.img}
        />
        <span className={styles.play} aria-hidden="true">
          <Play size={14} fill="#ffffff" strokeWidth={0} />
        </span>
        <p className={styles.label}>{tile.label}</p>
      </div>
    );
  }

  const { inset } = tile;
  return (
    <div
      className={`${styles.card} ${tile.size === "tall" ? styles.tall : styles.short}`}
      style={{ background: tile.bg }}
    >
      <span className={styles.tag}>{tile.tag}</span>
      <div
        className={styles.inset}
        style={{
          left: inset.left,
          right: inset.right,
          top: inset.top,
          bottom: inset.bottom,
          borderRadius: inset.radius,
        }}
      >
        <Image
          src={tile.image}
          alt={`${tile.tag} project preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
          className={styles.imgTop}
        />
      </div>
    </div>
  );
}

export function WorkShowcaseSection() {
  return (
    <section className={styles.section} aria-labelledby="showcase-heading">
      <div className={styles.container}>
        <div className={styles.head}>
          <h2 id="showcase-heading" className={styles.title}>
            See what we&apos;ve built for our clients
          </h2>
          <p className={styles.sub}>Their ideas went live. Yours could be next.</p>
          <Link href="/portfolio" className={styles.btn}>
            View portfolio
          </Link>
        </div>

        <div className={styles.grid}>
          {COLUMNS.map((column, i) => (
            <div key={i} className={styles.col}>
              {column.map((tile, j) => (
                <TileView key={j} tile={tile} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkShowcaseSection;