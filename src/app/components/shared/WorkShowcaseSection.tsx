import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import styles from "./WorkShowcaseSection.module.css";

type Tile =
  | {
      kind: "project";
      tag: string;
      image: string; // full mockup image, fills the whole card
      bg: string; // fallback background while the image loads
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
      image: "/portfolio/web-design.png",
      bg: "linear-gradient(160deg,#5a5a5a 0%,#2c2c2c 100%)",
      size: "short",
    },
    { kind: "portrait", label: "Graphic design", image: "/graphic%20team.jpg" },
    {
      kind: "project",
      tag: "Portfolio",
      image: "/portfolio/portfolio.png",
      bg: "linear-gradient(160deg,#3b6aa5 0%,#0f2a4d 100%)",
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
      image: "/portfolio/ecommerce-app.png",
      bg: "linear-gradient(160deg,#bfd3b8 0%,#6b7d5c 100%)",
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
      image: "/portfolio/business.png",
      bg: "linear-gradient(180deg,#a9c9e8 0%,#2f5d3a 100%)",
      size: "short",
    },
    { kind: "portrait", label: "Video editing", image: "/video_editor_team.webp" },
    {
      kind: "project",
      tag: "E-commerce",
      image: "/portfolio/ecommerce-web.png",
      bg: "linear-gradient(160deg,#6d7d8c 0%,#2a3440 100%)",
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
      image: "/portfolio/web-app.png",
      bg: "linear-gradient(160deg,#2f6b72 0%,#0f2a30 100%)",
      size: "tall",
    },
  ],
];

// --------------------------------------------------
// Dark mode overrides (light mode ekdom agerই moto)
// --------------------------------------------------
const DARK_MODE_CSS = `
  .dark [data-wc="section"] {
    background: #050b16 !important;
  }
  .dark [data-wc="title"] {
    color: #ffffff !important;
  }
  .dark [data-wc="sub"] {
    color: #94a3b8 !important;
  }
  .dark [data-wc="btn"] {
    background: linear-gradient(90deg, #0ea5e9 0%, #3b82f6 100%) !important;
    color: #ffffff !important;
    border-color: transparent !important;
    box-shadow: 0 10px 28px rgba(59, 130, 246, 0.35) !important;
  }
  .dark [data-wc="quote"] {
    background: rgba(255, 255, 255, 0.06) !important;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.10) !important;
  }
  .dark [data-wc="quote-text"] {
    color: #e2e8f0 !important;
  }
  .dark [data-wc="name"] {
    color: #ffffff !important;
  }
  .dark [data-wc="role"] {
    color: #94a3b8 !important;
  }
  .dark [data-wc="avatar"] {
    background: rgba(56, 189, 248, 0.18) !important;
    color: #7dd3fc !important;
  }
  .dark [data-wc="card"] {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
  }
`;

function TileView({ tile }: { tile: Tile }) {
  if (tile.kind === "quote") {
    return (
      <figure
        data-wc="quote"
        className={`${styles.card} ${styles.quoteH} ${styles.quote}`}
        style={{ margin: 0 }}
      >
        <blockquote
          data-wc="quote-text"
          className={styles.quoteText}
          style={{ margin: 0 }}
        >
          &ldquo;{tile.quote}&rdquo;
        </blockquote>
        <figcaption className={styles.author}>
          <span data-wc="avatar" className={styles.avatar} aria-hidden="true">
            {tile.initials}
          </span>
          <span>
            <p data-wc="name" className={styles.name}>{tile.name}</p>
            <p data-wc="role" className={styles.role}>{tile.role}</p>
          </span>
        </figcaption>
      </figure>
    );
  }

  if (tile.kind === "portrait") {
    return (
      <div
        data-wc="card"
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

  // project tile — image puro card jure, tag upore
  return (
    <div
      data-wc="card"
      className={`${styles.card} ${tile.size === "tall" ? styles.tall : styles.short}`}
      style={{ background: tile.bg }}
    >
      <Image
        src={tile.image}
        alt={`${tile.tag} project preview`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
        className={styles.img}
      />
      <span className={styles.tag}>{tile.tag}</span>
    </div>
  );
}

export function WorkShowcaseSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: DARK_MODE_CSS }} />

      <section
        data-wc="section"
        className={styles.section}
        aria-labelledby="showcase-heading"
      >
        <div className={styles.container}>
          <div className={styles.head}>
            <h2 data-wc="title" id="showcase-heading" className={styles.title}>
              See what we&apos;ve built for our clients
            </h2>
            <p data-wc="sub" className={styles.sub}>
              Their ideas went live. Yours could be next.
            </p>
            <Link data-wc="btn" href="/portfolio" className={styles.btn}>
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
    </>
  );
}

export default WorkShowcaseSection;