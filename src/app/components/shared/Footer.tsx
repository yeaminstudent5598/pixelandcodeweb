'use client';

import Link from 'next/link';
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Check,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Soft blue (halka, chokhe aram dey)
───────────────────────────────────────────── */
const SOFT_BLUE_H = 'linear-gradient(90deg, #3aa9e8 0%, #5b8ef0 100%)';
const SOFT_TINT = 'rgba(56, 189, 248, 0.16)';

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const socialLinks = [
  {
    href: 'https://www.facebook.com/pixelandcode07',
    icon: Facebook,
    label: 'Facebook',
  },
  {
    href: 'https://linkedin.com/company/pixel-and-code-agency',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:pixelandcode07@gmail.com',
    icon: Mail,
    label: 'Email',
  },
];

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Packages', href: '/packages' },
  { label: 'Store', href: '/store' },
  { label: 'Portfolio', href: '/portfolio' },
];

const serviceLinks = [
  { label: 'Web Development', href: '/web-service' },
  { label: 'Graphics Design', href: '/graphics-design' },
  { label: 'Digital Marketing', href: '/digital-marketing' },
  { label: 'Video Editing', href: '/video-editing' },
  { label: 'UI/UX Design', href: '/ui-ux-design' },
  { label: 'Meta Marketing', href: '/meta-marketing' },
];

const contactItems = [
  {
    icon: MapPin,
    label: 'Office',
    text: 'Shariatpur Sadar, Dhaka, BD',
  },
  {
    icon: Phone,
    label: 'Phone',
    text: '+880 1641-801705',
    href: 'tel:+8801641801705',
  },
  {
    icon: Mail,
    label: 'Email',
    text: 'pixelandcode07@gmail.com',
    href: 'mailto:pixelandcode07@gmail.com',
  },
];

const CTA_POINTS = ['Professional Team', 'Modern Technology', 'Smart Solutions'];

/* ─────────────────────────────────────────────
   Footer styles (gradient + fog animation)
   Tailwind er upor depend kore na
───────────────────────────────────────────── */
const FOOTER_CSS = `
  /* Fog: bam theke dane (vw diye, tai pura width jure jay) */
  @keyframes pcfFogLTR {
    0%   { transform: translateX(-55vw); opacity: 0; }
    14%  { opacity: 1; }
    86%  { opacity: 1; }
    100% { transform: translateX(105vw); opacity: 0; }
  }
  /* Fog: dane theke bam */
  @keyframes pcfFogRTL {
    0%   { transform: translateX(105vw); opacity: 0; }
    14%  { opacity: 1; }
    86%  { opacity: 1; }
    100% { transform: translateX(-55vw); opacity: 0; }
  }
  @keyframes pcfShine {
    from { transform: translateX(-140%) skewX(-20deg); }
    to   { transform: translateX(340%) skewX(-20deg); }
  }

  /* ---------- Footer gradient (upor theke niche, clear) ---------- */
  .pcf {
    position: relative;
    overflow: hidden;
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      #eef6ff 32%,
      #dcecff 68%,
      #c9e0ff 100%
    );
  }
  .dark .pcf {
    background: linear-gradient(
      180deg,
      #050b16 0%,
      #07142a 32%,
      #0a2140 68%,
      #0c2d52 100%
    );
  }

  /* ---------- Fog layers ---------- */
  .pcf-fog {
    position: absolute;
    left: 0;
    border-radius: 9999px;
    pointer-events: none;
    will-change: transform, opacity;
    filter: blur(70px);
  }
  .pcf-fog-a {
    top: 2%;
    width: 62vw; height: 420px;
    background: radial-gradient(ellipse at center, rgba(56, 189, 248, 0.48) 0%, rgba(56, 189, 248, 0) 70%);
    animation: pcfFogLTR 24s ease-in-out infinite;
  }
  .pcf-fog-b {
    top: 34%;
    width: 70vw; height: 360px;
    background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%);
    animation: pcfFogRTL 32s ease-in-out infinite;
    animation-delay: -10s;
  }
  .pcf-fog-c {
    top: 58%;
    width: 66vw; height: 400px;
    background: radial-gradient(ellipse at center, rgba(91, 142, 240, 0.40) 0%, rgba(91, 142, 240, 0) 70%);
    animation: pcfFogLTR 40s ease-in-out infinite;
    animation-delay: -22s;
  }
  .dark .pcf-fog-a {
    background: radial-gradient(ellipse at center, rgba(56, 189, 248, 0.30) 0%, rgba(56, 189, 248, 0) 70%);
  }
  .dark .pcf-fog-b {
    background: radial-gradient(ellipse at center, rgba(147, 197, 253, 0.20) 0%, rgba(147, 197, 253, 0) 70%);
  }
  .dark .pcf-fog-c {
    background: radial-gradient(ellipse at center, rgba(91, 142, 240, 0.30) 0%, rgba(91, 142, 240, 0) 70%);
  }

  /* ---------- Divider ---------- */
  .pcf-divider {
    height: 1px;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(56, 189, 248, 0) 0%,
      rgba(56, 189, 248, 0.4) 50%,
      rgba(56, 189, 248, 0) 100%
    );
  }

  /* ---------- Big watermark ---------- */
  .pcf-wm {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    height: clamp(56px, 10.5vw, 168px);
    overflow: hidden;
    pointer-events: none;
    user-select: none;
  }
  .pcf-wm span {
    font-size: clamp(64px, 14vw, 232px);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 0.88;
    white-space: nowrap;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(
      180deg,
      rgba(14, 165, 233, 0.28) 0%,
      rgba(14, 165, 233, 0) 92%
    );
  }
  .dark .pcf-wm span {
    background-image: linear-gradient(
      180deg,
      rgba(125, 211, 252, 0.20) 0%,
      rgba(125, 211, 252, 0) 92%
    );
  }

  /* ---------- Button shine ---------- */
  .pcf-btn { position: relative; overflow: hidden; }
  .pcf-btn .pcf-btn-shine {
    position: absolute;
    top: 0; bottom: 0; left: 0;
    width: 40%;
    pointer-events: none;
    background: rgba(255, 255, 255, 0.4);
    filter: blur(8px);
    transform: translateX(-140%) skewX(-20deg);
  }
  .pcf-btn:hover .pcf-btn-shine { animation: pcfShine 0.9s ease; }

  @media (prefers-reduced-motion: reduce) {
    .pcf-fog-a, .pcf-fog-b, .pcf-fog-c {
      animation: none;
      opacity: 0.6;
      transform: translateX(20vw);
    }
    .pcf-btn:hover .pcf-btn-shine { animation: none; }
  }
`;

/* ─────────────────────────────────────────────
   Logo (navbar er logo-i)
───────────────────────────────────────────── */
function LogoMark() {
  return (
    <svg
      className="h-9 w-9 text-sky-500 transition-transform duration-300 group-hover:scale-105 dark:text-sky-400"
      viewBox="0 0 2047.88 1852.16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M926.1,1163.22q0,84.22,0,168.46c0,18.81.07,18.49-18.17,18.71-25.33.3-50.65,1.6-76,1.68-85.84.25-171.67-.12-257.5.48-12,.09-14.37-4.92-14.32-14.79.15-28.68.09-57.36.09-86,0-86.45.2-172.9-.27-259.35-.06-11.51,3.74-14.39,14.61-14.35q165.4.51,330.83.28c18.43,0,18.44,0,18.45-18.24q0-90.28,0-180.57,0-74.82,0-149.63c0-14.06,2.82-16.81,17-16.82q163.61-.13,327.21-.23c4,0,8.46.86,12-.49,12.54-4.74,14.28,3.33,14.3,12,.16,114.32,0,228.65.23,343,0,11.4-6.56,11.7-15.07,11.69q-168.46-.18-336.91-.06c-16.86,0-16.62,0-16.58,17C926.17,1051.73,926.09,1107.47,926.1,1163.22Z"
        transform="translate(-555.32 -610.92)"
      />
      <path
        fill="currentColor"
        d="M925.87,2094h-351c-18.78,0-19.51-.76-19.5-19.91,0-63.41-.25-126.83.11-190.24.25-43.7,1.38-87.38,2.08-131.07.06-4,.6-8.27-.39-12.07-2.61-10,3.59-12.24,10.94-12.59,10.47-.51,21-.06,31.49-.06,103,0,206,.17,309-.3,12-.06,15.94,2.87,15.88,15.42-.46,101.79-.23,203.58-.2,305.36,0,11.63.4,23.27-.08,34.88-.34,8.35,3.2,9.94,10.9,9.82,30.55-.47,61.12-.1,91.67-.29,33-.21,65.91-.93,98.87-1,27.72-.07,55.43.48,83.15.7,23.76.19,47.53.56,71.29.32,10.66-.1,16,2.53,13.55,14.76-1.29,6.47.73,13.53.73,20.33q.1,158.74,0,317.48c0,17.54,0,17.49-17.32,17.49q-167.22,0-334.44.06c-16.88,0-16.57-.07-16.84-16.88-.38-23.93-1.58-47.85-1.88-71.78q-.51-40.55,0-81.12c.37-30.64,1.55-61.27,1.84-91.91C926.13,2166.37,925.87,2131.34,925.87,2094Z"
        transform="translate(-555.32 -610.92)"
      />
      <path
        fill="currentColor"
        d="M1915.46,960.49c41.91,23.15,81.69,45.15,121.52,67,2.64,1.45,5.78,2,8.61,3.12,8.18,3.34,11,8.37,8.09,17.65-8,25.29-14.88,50.9-22.45,76.32-6.69,22.45-14,44.73-20.49,67.24-6.57,22.69-12.4,45.6-18.77,68.36-6,21.49-12.37,42.88-18.48,64.34-6.46,22.7-12.73,45.45-19.25,68.14-6.73,23.42-13.8,46.75-20.44,70.2-4,14.23-7.41,28.64-11.28,42.92-3,10.94-6.3,21.79-9.38,32.71-12.85,45.72-25.42,91.52-38.6,137.15-8.85,30.66-19,60.94-27.74,91.64-9,31.83-16.54,64.08-25.42,96-6.3,22.65-14.06,44.89-20.63,67.46s-12.42,45.45-18.73,68.15c-3.15,11.36-6.74,22.6-10,34-2.14,7.56-4.41,15.13-5.77,22.85-1.78,10.05-7.8,13.26-16.65,8.34-37.44-20.79-74.82-41.71-112.46-62.15-10.36-5.62-13-11.91-8.8-23.46,5.58-15.52,8.71-31.92,13.07-47.9,2.75-10,5.8-20,8.75-30,9.73-33,19.9-65.91,29.11-99.08,9-32.34,16.56-65.06,25.52-97.41,8.6-31,18.48-61.74,27.22-92.76,6.51-23.11,12-46.51,18.14-69.72,3.24-12.23,7-24.3,10.43-36.48,7.15-25.5,14-51.07,21.38-76.5,6.78-23.4,14.4-46.57,21-70,6.51-23,11.89-46.41,18.41-69.46,6.27-22.12,13.65-43.93,20-66,6.15-21.42,11.46-43.07,17.46-64.53,4.33-15.51,9.2-30.86,13.8-46.29,3.1-10.42,6.49-20.77,9.15-31.3,3.3-13.06,5.35-26.46,9.06-39.39C1898.61,1014.78,1907,988.19,1915.46,960.49Z"
        transform="translate(-555.32 -610.92)"
      />
      <path
        fill="currentColor"
        d="M1138.46,1530.5,1557,1113.16l4.06,2.88c-.7,8.48-2,17-2,25.44-.16,58.39.15,116.79-.37,175.17-.06,6.24-2.86,14.08-7.17,18.4q-95.47,95.85-191.92,190.72c-6.34,6.25-6.41,10.61-.44,16.43q65,63.36,129.92,126.83c20.18,19.7,40.64,39.12,60.46,59.18,3.58,3.62,6.54,9.71,6.58,14.68.53,62.37.48,124.74.51,187.11,0,2.48-.66,5-1.65,12Z"
        transform="translate(-555.32 -610.92)"
      />
      <path
        fill="currentColor"
        d="M2187.72,1944.68c-1.19-8.13-2.29-12.16-2.3-16.18-.1-58.81-.34-117.61.32-176.41.08-7.07,3.43-15.91,8.36-20.83q94.37-94.07,189.84-187c6.63-6.49,6.88-9.94-.1-16.84Q2288.4,1433,2194,1337.52c-4.87-4.93-8.17-13.68-8.25-20.71-.67-57.47-.43-115-.36-172.43,0-4.11.85-8.21,1.59-14.93,4.86,3.75,7.69,5.54,10.06,7.82,57.55,55.48,115.43,110.63,172.46,166.63,68.94,67.69,137.11,136.15,205.7,204.19,7.51,7.44,15.44,14.47,23.44,21.39,5.26,4.56,6.43,8.32.79,13.79q-88.87,86.2-177.5,172.69-107.29,104.32-214.65,208.6C2201.74,1930,2196.44,1935.72,2187.72,1944.68Z"
        transform="translate(-555.32 -610.92)"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Footer
───────────────────────────────────────────── */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pcf">
      <style>{FOOTER_CSS}</style>

      {/* fog layers (bam <-> dane bhashe) */}
      <div className="pcf-fog pcf-fog-a" aria-hidden="true" />
      <div className="pcf-fog pcf-fog-b" aria-hidden="true" />
      <div className="pcf-fog pcf-fog-c" aria-hidden="true" />

      {/* Container — navbar / hero er sathe same width & padding */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* ═════════ CTA ZONE ═════════ */}
        <section className="grid gap-10 pb-14 pt-16 sm:pt-24 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-sky-700 backdrop-blur-md dark:text-sky-200"
              style={{
                border: '1px solid rgba(56,189,248,0.35)',
                background: 'rgba(255,255,255,0.55)',
              }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Ready for your next big idea
            </span>

            <h2
              className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-slate-900 dark:text-white sm:text-5xl lg:text-[58px]"
              style={{ textWrap: 'balance' }}
            >
              Let&apos;s build something{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: SOFT_BLUE_H }}
              >
                great together
              </span>
            </h2>

            <p className="mt-5 max-w-[540px] text-base leading-7 text-slate-600 dark:text-slate-300">
              Your idea, our technology. Let the journey to success begin
              today.
            </p>
          </div>

          <div className="lg:pb-2">
            <ul className="space-y-3">
              {CTA_POINTS.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full"
                    style={{ background: SOFT_TINT }}
                  >
                    <Check
                      className="h-3.5 w-3.5 text-sky-600 dark:text-sky-300"
                      strokeWidth={3}
                    />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="pcf-btn group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
                style={{
                  background: SOFT_BLUE_H,
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.55)',
                  boxShadow:
                    '0 12px 28px rgba(59,130,246,0.24), inset 0 1px 0 rgba(255,255,255,0.4)',
                }}
              >
                <span className="pcf-btn-shine" aria-hidden="true" />
                <span className="relative">Start a Project</span>
                <ArrowRight
                  className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  color="#ffffff"
                />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/50 px-6 py-4 text-sm font-semibold text-slate-700 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600 dark:border-white/20 dark:bg-white/5 dark:text-slate-200 dark:hover:border-sky-400/60 dark:hover:text-sky-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        <div className="pcf-divider" />

        {/* ═════════ MAIN GRID ═════════ */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.5fr_0.8fr_1fr_1.3fr] lg:gap-10">
          {/* BRAND */}
          <div className="min-w-0">
            <Link href="/" className="group inline-flex items-center gap-3">
              <LogoMark />
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Pixel &amp; Code
              </span>
            </Link>

            <p className="mt-5 max-w-[340px] text-sm leading-7 text-slate-600 dark:text-slate-400">
              Empowering businesses through modern technology and seamless
              digital transformation.
            </p>

            <div className="mt-6 flex gap-2.5">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/60 text-slate-500 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-300 dark:hover:border-sky-400/60 dark:hover:text-sky-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <nav className="min-w-0" aria-label="Company">
            <FooterTitle>Company</FooterTitle>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </ul>
          </nav>

          {/* SERVICES */}
          <nav className="min-w-0" aria-label="Services">
            <FooterTitle>Services</FooterTitle>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </ul>
          </nav>

          {/* CONTACT */}
          <div className="min-w-0">
            <FooterTitle>Contact</FooterTitle>
            <ul className="space-y-4">
              {contactItems.map(({ icon: Icon, label, text, href }) => {
                const inner = (
                  <>
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: SOFT_TINT }}
                    >
                      <Icon className="h-4 w-4 text-sky-600 dark:text-sky-300" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                        {label}
                      </span>
                      <span className="mt-0.5 block break-words text-sm font-medium text-slate-700 transition-colors group-hover:text-sky-600 dark:text-slate-300 dark:group-hover:text-sky-300">
                        {text}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={text}>
                    {href ? (
                      <a href={href} className="group flex items-center gap-3">
                        {inner}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-3">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="pcf-divider" />

        {/* ═════════ BOTTOM BAR ═════════ */}
        <div className="flex flex-col items-center justify-between gap-4 py-7 md:flex-row">
          <p className="text-center text-xs text-slate-600 dark:text-slate-400 md:text-left">
            © {year}{' '}
            <span className="font-semibold text-slate-900 dark:text-white">
              Pixel &amp; Code
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-xs font-medium text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300"
            >
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-slate-400/60 dark:bg-white/20" />
            <Link
              href="/terms"
              className="text-xs font-medium text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* ═════════ BIG WATERMARK ═════════ */}
      <div className="pcf-wm" aria-hidden="true">
        <span>PIXEL&amp;CODE</span>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   Small parts
───────────────────────────────────────────── */
function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 text-sm text-slate-600 transition-colors duration-300 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300"
      >
        {children}
        <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      </Link>
    </li>
  );
}