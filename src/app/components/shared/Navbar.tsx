"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  LogIn, Menu, Home, Briefcase, Package,
  ShoppingBag, Mail, Globe, LayoutGrid,
  Sparkles, type LucideIcon,
} from "lucide-react";

/* ─── Styles ─────────────────────────────────────────────────────── */
const NAV_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  .nav-root { font-family: 'DM Sans', sans-serif; }
  .nav-display { font-family: 'Syne', sans-serif !important; }

  @keyframes nav-fadeDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .nav-animate { animation: nav-fadeDown .25s ease forwards; }

  /* Dropdown panel */
  .nav-dropdown-content {
    background: #0d0d0d !important;
    border: 1px solid rgba(255,255,255,.08) !important;
    border-radius: 16px !important;
    overflow: hidden;
  }

  /* Service item hover */
  .nav-service-item { transition: background .2s; }
  .nav-service-item:hover { background: rgba(249,115,22,.08) !important; }
  .nav-service-item:hover .nav-service-title { color: #f97316 !important; }

  /* Desktop nav link */
  .nav-link {
    display: inline-flex; align-items: center;
    height: 36px; padding: 0 14px; border-radius: 9999px;
    font-size: 14px; font-weight: 400;
    color: #d1d5db; background: transparent;
    text-decoration: none; transition: background .2s, color .2s;
    cursor: pointer; white-space: nowrap;
  }
  .nav-link:hover  { background: rgba(255,255,255,.06); color: #fff; }
  .nav-link.active { background: rgba(249,115,22,.1); color: #f97316; font-weight: 600; }

  /* Login button */
  .nav-login {
    display: flex; align-items: center; gap: 6px;
    height: 38px; padding: 0 20px; border-radius: 9999px;
    background: #ea580c; color: #fff;
    font-weight: 800; font-size: 13px;
    border: none; cursor: pointer;
    transition: background .2s, box-shadow .3s;
    white-space: nowrap;
  }
  .nav-login:hover { background: #f97316; box-shadow: 0 0 24px rgba(249,115,22,.45); }

  /* Lang toggle */
  .nav-lang {
    height: 34px; padding: 0 14px; border-radius: 9999px;
    border: 1px solid rgba(255,255,255,.1);
    background: rgba(255,255,255,.05);
    font-size: 12px; font-weight: 700; color: #9ca3af;
    cursor: pointer; transition: background .2s, color .2s; letter-spacing: .04em;
    white-space: nowrap;
  }
  .nav-lang:hover { background: rgba(255,255,255,.1); color: #fff; }

  /* Mobile nav link */
  .mnav-link {
    display: flex; align-items: center; gap: 12px;
    padding: 11px 14px; border-radius: 12px;
    text-decoration: none; font-size: 14px;
    color: #9ca3af; font-weight: 400;
    transition: background .2s, color .2s;
  }
  .mnav-link:hover { background: rgba(249,115,22,.06); color: #f97316; }
  .mnav-link.active { background: rgba(249,115,22,.1); color: #f97316; font-weight: 600; }

  /* Bottom nav */
  .bnav-item { display: flex; flex-direction: column; align-items: center; padding: 8px 0; flex: 1; text-decoration: none; }
  .bnav-icon { padding: 8px; border-radius: 12px; transition: background .2s; }
  .bnav-icon.active { background: rgba(249,115,22,.15); }
  .bnav-label { font-size: 10px; font-weight: 600; margin-top: 2px; }
`;

/* ─── Nav data ────────────────────────────────────────────────────── */
const servicesBN = [
  { title: "ওয়েব সার্ভিস",      href: "/web-service",       desc: "আধুনিক ও দ্রুতগতির ওয়েবসাইট।" },
  { title: "ডিজিটাল মার্কেটিং", href: "/digital-marketing", desc: "ব্যবসাকে অনলাইন জগতে ছড়িয়ে দিন।" },
  { title: "Meta Marketing",     href: "/meta-marketing",    desc: "Facebook Ads-এর মাধ্যমে সেলস বৃদ্ধি।" },
  { title: "গ্রাফিক্স ডিজাইন", href: "/graphics-design",   desc: "আকর্ষণীয় লোগো ও ব্র্যান্ডিং।" },
  { title: "SEO",                href: "/seo",               desc: "গুগল র‍্যাঙ্কিং এ শীর্ষে থাকুন।" },
  { title: "ভিডিও এডিটিং",      href: "/video-editing",     desc: "প্রফেশনাল ভিডিও প্রোডাকশন।" },
  { title: "UI/UX ডিজাইন",      href: "/ui-ux-design",      desc: "ইউজার-ফ্রেন্ডলি অ্যাপ ডিজাইন।" },
];
const servicesEN = [
  { title: "Web Service",       href: "/web-service",       desc: "Modern & fast websites." },
  { title: "Digital Marketing", href: "/digital-marketing", desc: "Grow your business online." },
  { title: "Meta Marketing",    href: "/meta-marketing",    desc: "Boost sales via FB Ads." },
  { title: "Graphics Design",   href: "/graphics-design",   desc: "Creative branding assets." },
  { title: "SEO",               href: "/seo",               desc: "Rank #1 on Google." },
  { title: "Video Editing",     href: "/video-editing",     desc: "Professional video production." },
  { title: "UI/UX Design",      href: "/ui-ux-design",      desc: "User-friendly interfaces." },
];

/* ─── Logo ───────────────────────────────────────────────────────── */
function Logo() {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
      <svg
        style={{ width: 34, height: 34, color: "#3b82f6" }}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2047.88 1852.16"
      >
        <path style={{ fill: "currentColor" }} d="M926.1,1163.22q0,84.22,0,168.46c0,18.81.07,18.49-18.17,18.71-25.33.3-50.65,1.6-76,1.68-85.84.25-171.67-.12-257.5.48-12,.09-14.37-4.92-14.32-14.79.15-28.68.09-57.36.09-86,0-86.45.2-172.9-.27-259.35-.06-11.51,3.74-14.39,14.61-14.35q165.4.51,330.83.28c18.43,0,18.44,0,18.45-18.24q0-90.28,0-180.57,0-74.82,0-149.63c0-14.06,2.82-16.81,17-16.82q163.61-.13,327.21-.23c4,0,8.46.86,12-.49,12.54-4.74,14.28,3.33,14.3,12,.16,114.32,0,228.65.23,343,0,11.4-6.56,11.7-15.07,11.69q-168.46-.18-336.91-.06c-16.86,0-16.62,0-16.58,17C926.17,1051.73,926.09,1107.47,926.1,1163.22Z" transform="translate(-555.32 -610.92)"/>
        <path style={{ fill: "currentColor" }} d="M925.87,2094h-351c-18.78,0-19.51-.76-19.5-19.91,0-63.41-.25-126.83.11-190.24.25-43.7,1.38-87.38,2.08-131.07.06-4,.6-8.27-.39-12.07-2.61-10,3.59-12.24,10.94-12.59,10.47-.51,21-.06,31.49-.06,103,0,206,.17,309-.3,12-.06,15.94,2.87,15.88,15.42-.46,101.79-.23,203.58-.2,305.36,0,11.63.4,23.27-.08,34.88-.34,8.35,3.2,9.94,10.9,9.82,30.55-.47,61.12-.1,91.67-.29,33-.21,65.91-.93,98.87-1,27.72-.07,55.43.48,83.15.7,23.76.19,47.53.56,71.29.32,10.66-.1,16,2.53,13.55,14.76-1.29,6.47.73,13.53.73,20.33q.1,158.74,0,317.48c0,17.54,0,17.49-17.32,17.49q-167.22,0-334.44.06c-16.88,0-16.57-.07-16.84-16.88-.38-23.93-1.58-47.85-1.88-71.78q-.51-40.55,0-81.12c.37-30.64,1.55-61.27,1.84-91.91C926.13,2166.37,925.87,2131.34,925.87,2094Z" transform="translate(-555.32 -610.92)"/>
        <path style={{ fill: "currentColor" }} d="M1915.46,960.49c41.91,23.15,81.69,45.15,121.52,67,2.64,1.45,5.78,2,8.61,3.12,8.18,3.34,11,8.37,8.09,17.65-8,25.29-14.88,50.9-22.45,76.32-6.69,22.45-14,44.73-20.49,67.24-6.57,22.69-12.4,45.6-18.77,68.36-6,21.49-12.37,42.88-18.48,64.34-6.46,22.7-12.73,45.45-19.25,68.14-6.73,23.42-13.8,46.75-20.44,70.2-4,14.23-7.41,28.64-11.28,42.92-3,10.94-6.3,21.79-9.38,32.71-12.85,45.72-25.42,91.52-38.6,137.15-8.85,30.66-19,60.94-27.74,91.64-9,31.83-16.54,64.08-25.42,96-6.3,22.65-14.06,44.89-20.63,67.46s-12.42,45.45-18.73,68.15c-3.15,11.36-6.74,22.6-10,34-2.14,7.56-4.41,15.13-5.77,22.85-1.78,10.05-7.8,13.26-16.65,8.34-37.44-20.79-74.82-41.71-112.46-62.15-10.36-5.62-13-11.91-8.8-23.46,5.58-15.52,8.71-31.92,13.07-47.9,2.75-10,5.8-20,8.75-30,9.73-33,19.9-65.91,29.11-99.08,9-32.34,16.56-65.06,25.52-97.41,8.6-31,18.48-61.74,27.22-92.76,6.51-23.11,12-46.51,18.14-69.72,3.24-12.23,7-24.3,10.43-36.48,7.15-25.5,14-51.07,21.38-76.5,6.78-23.4,14.4-46.57,21-70,6.51-23,11.89-46.41,18.41-69.46,6.27-22.12,13.65-43.93,20-66,6.15-21.42,11.46-43.07,17.46-64.53,4.33-15.51,9.2-30.86,13.8-46.29,3.1-10.42,6.49-20.77,9.15-31.3,3.3-13.06,5.35-26.46,9.06-39.39C1898.61,1014.78,1907,988.19,1915.46,960.49Z" transform="translate(-555.32 -610.92)"/>
        <path style={{ fill: "currentColor" }} d="M1138.46,1530.5,1557,1113.16l4.06,2.88c-.7,8.48-2,17-2,25.44-.16,58.39.15,116.79-.37,175.17-.06,6.24-2.86,14.08-7.17,18.4q-95.47,95.85-191.92,190.72c-6.34,6.25-6.41,10.61-.44,16.43q65,63.36,129.92,126.83c20.18,19.7,40.64,39.12,60.46,59.18,3.58,3.62,6.54,9.71,6.58,14.68.53,62.37.48,124.74.51,187.11,0,2.48-.66,5-1.65,12Z" transform="translate(-555.32 -610.92)"/>
        <path style={{ fill: "currentColor" }} d="M2187.72,1944.68c-1.19-8.13-2.29-12.16-2.3-16.18-.1-58.81-.34-117.61.32-176.41.08-7.07,3.43-15.91,8.36-20.83q94.37-94.07,189.84-187c6.63-6.49,6.88-9.94-.1-16.84Q2288.4,1433,2194,1337.52c-4.87-4.93-8.17-13.68-8.25-20.71-.67-57.47-.43-115-.36-172.43,0-4.11.85-8.21,1.59-14.93,4.86,3.75,7.69,5.54,10.06,7.82,57.55,55.48,115.43,110.63,172.46,166.63,68.94,67.69,137.11,136.15,205.7,204.19,7.51,7.44,15.44,14.47,23.44,21.39,5.26,4.56,6.43,8.32.79,13.79q-88.87,86.2-177.5,172.69-107.29,104.32-214.65,208.60C2201.74,1930,2196.44,1935.72,2187.72,1944.68Z" transform="translate(-555.32 -610.92)"/>
      </svg>
      <span className="nav-display" style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>
        Pixel<span style={{ color: "#f97316" }}>&</span>Code
      </span>
    </Link>
  );
}

/* ─── Bottom Nav Item ─────────────────────────────────────────────── */
function BottomNavItem({ href, label, icon: Icon, active }: {
  href: string; label: string; icon: LucideIcon; active: boolean;
}) {
  return (
    <Link href={href} className="bnav-item" style={{ textDecoration: "none" }}>
      <div className={`bnav-icon ${active ? "active" : ""}`}>
        <Icon style={{ width: 22, height: 22, color: active ? "#f97316" : "#6b7280", transition: "color .2s" }} />
        {active && (
          <motion.div layoutId="bottomDot" style={{
            width: 4, height: 4, borderRadius: "50%",
            background: "#f97316", margin: "4px auto 0",
          }} />
        )}
      </div>
      <span className="bnav-label" style={{ color: active ? "#f97316" : "#6b7280" }}>{label}</span>
    </Link>
  );
}

/* ─── Main Navbar ────────────────────────────────────────────────── */
export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = language
    ? { home: "হোম", services: "সার্ভিসেস", store: "স্টোর", packages: "প্যাকেজ", portfolio: "পোর্টফোলিও", about: "আমাদের সম্পর্কে", contact: "যোগাযোগ", login: "লগ-ইন" }
    : { home: "Home", services: "Services", store: "Store", packages: "Packages", portfolio: "Portfolio", about: "About", contact: "Contact", login: "Login" };

  const services = language ? servicesBN : servicesEN;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: NAV_STYLES }} />

      {/* ══════════════════════════════════════════
          DESKTOP HEADER
      ══════════════════════════════════════════ */}
      <header className="nav-root" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all .35s ease",
        background: isScrolled ? "rgba(5,5,5,.88)" : "transparent",
        backdropFilter: isScrolled ? "blur(24px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255,255,255,.06)" : "1px solid transparent",
        boxShadow: isScrolled ? "0 4px 40px rgba(0,0,0,.4)" : "none",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 70, padding: "0 24px",
          gap: 16,
        }}>

          {/* Logo */}
          <Logo />

          {/* ── Center nav pill (desktop only) ── */}
          <div className="hidden lg:flex" style={{
            alignItems: "center",
            background: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: 9999, padding: "5px 6px",
            backdropFilter: "blur(12px)",
            flexShrink: 0,
          }}>
            <NavigationMenu>
              <NavigationMenuList style={{ gap: 2, flexWrap: "nowrap" }}>

                {/* Home */}
                <NavigationMenuItem>
                  <Link href="/">
                    <span className={`nav-link ${pathname === "/" ? "active" : ""}`}>{t.home}</span>
                  </Link>
                </NavigationMenuItem>

                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger style={{
                    background: "transparent", borderRadius: 9999,
                    height: 36, padding: "0 14px",
                    fontSize: 14, fontWeight: 400,
                    color: "#d1d5db",
                  }}>
                    {t.services}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="nav-dropdown-content nav-animate" style={{
                      width: 540,
                      display: "grid", gridTemplateColumns: "1fr 1fr",
                      gap: 4, padding: 14,
                    }}>
                      {services.map((s) => (
                        <li key={s.href}>
                          <NavigationMenuLink asChild>
                            <Link href={s.href} className="nav-service-item" style={{
                              display: "block", padding: "11px 13px",
                              borderRadius: 11, textDecoration: "none",
                            }}>
                              <div className="nav-service-title" style={{
                                fontSize: 13, fontWeight: 600,
                                color: "#e5e7eb", marginBottom: 3,
                                transition: "color .2s",
                              }}>{s.title}</div>
                              <div style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.5 }}>{s.desc}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {[
                  { href: "/store",     label: t.store },
                  { href: "/packages",  label: t.packages },
                  { href: "/portfolio", label: t.portfolio },
                  { href: "/about",     label: t.about },
                  { href: "/contact",   label: t.contact },
                ].map(item => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href}>
                      <span className={`nav-link ${pathname === item.href ? "active" : ""}`}>{item.label}</span>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* ── Right actions ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>

            {/* Language toggle — desktop only */}
            <button className="nav-lang hidden lg:flex" onClick={() => setLanguage(!language)}>
              <Globe style={{ width: 13, height: 13, marginRight: 5, display: "inline" }} />
              {language ? "EN" : "বাং"}
            </button>

            {/* Login CTA — desktop */}
            <Link href="/login" className="hidden lg:flex" style={{ textDecoration: "none" }}>
              <button className="nav-display nav-login">
                <LogIn style={{ width: 14, height: 14 }} />
                {t.login}
              </button>
            </Link>

            {/* Hamburger — mobile */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden" style={{
                  width: 38, height: 38, borderRadius: 10,
                  border: "1px solid rgba(255,255,255,.1)",
                  background: "rgba(255,255,255,.05)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: "#9ca3af",
                }}>
                  <Menu style={{ width: 18, height: 18 }} />
                </button>
              </SheetTrigger>

              {/* ── Mobile Sheet ── */}
              <SheetContent side="left" style={{
                width: 290, padding: 0,
                background: "#080808", border: "none",
                borderRight: "1px solid rgba(255,255,255,.06)",
                display: "flex", flexDirection: "column",
              }}>
                {/* Sheet header */}
                <div style={{ padding: "22px 20px 18px", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                  <SheetTitle asChild>
                    <div><Logo /></div>
                  </SheetTitle>
                </div>

                {/* Nav links */}
                <div style={{ flex: 1, overflowY: "auto", padding: "12px 14px" }}>
                  <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {[
                      { href: "/",          label: t.home,      icon: Home },
                      { href: "/portfolio", label: t.portfolio, icon: Briefcase },
                      { href: "/packages",  label: t.packages,  icon: Package },
                      { href: "/store",     label: t.store,     icon: ShoppingBag },
                      { href: "/about",     label: t.about,     icon: LayoutGrid },
                      { href: "/contact",   label: t.contact,   icon: Mail },
                    ].map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={`mnav-link ${pathname === item.href ? "active" : ""}`}
                        >
                          <item.icon style={{ width: 17, height: 17, flexShrink: 0 }} />
                          {item.label}
                          {pathname === item.href && (
                            <div style={{
                              marginLeft: "auto", width: 6, height: 6,
                              borderRadius: "50%", background: "#f97316",
                            }} />
                          )}
                        </Link>
                      </SheetClose>
                    ))}

                    {/* Services sub-list */}
                    <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,.06)" }}>
                      <p style={{
                        padding: "0 14px 8px",
                        fontSize: 10, fontWeight: 700, color: "#4b5563",
                        letterSpacing: ".1em", textTransform: "uppercase",
                      }}>
                        {t.services}
                      </p>
                      {services.map((s) => (
                        <SheetClose asChild key={s.href}>
                          <Link href={s.href} style={{
                            display: "flex", alignItems: "center", gap: 10,
                            padding: "9px 14px", borderRadius: 10,
                            textDecoration: "none", color: "#6b7280",
                            fontSize: 13, transition: "all .2s",
                          }}
                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(249,115,22,.07)"; e.currentTarget.style.color = "#f97316"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#6b7280"; }}
                          >
                            <Sparkles style={{ width: 13, height: 13, color: "#f97316", flexShrink: 0 }} />
                            {s.title}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </nav>
                </div>

                {/* Sheet footer — lang + login */}
                <div style={{
                  padding: "14px 16px",
                  borderTop: "1px solid rgba(255,255,255,.06)",
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                  <button
                    onClick={() => setLanguage(!language)}
                    style={{
                      display: "flex", alignItems: "center", gap: 6,
                      height: 36, padding: "0 14px", borderRadius: 10,
                      border: "1px solid rgba(255,255,255,.1)",
                      background: "rgba(255,255,255,.05)",
                      fontSize: 12, fontWeight: 700, color: "#9ca3af",
                      cursor: "pointer", flex: 1, justifyContent: "center",
                    }}
                  >
                    <Globe style={{ width: 13, height: 13 }} />
                    {language ? "English" : "বাংলা"}
                  </button>

                  <SheetClose asChild>
                    <Link href="/login" style={{ textDecoration: "none", flex: 1 }}>
                      <button className="nav-display" style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                        width: "100%", height: 36, padding: "0 14px", borderRadius: 10,
                        background: "#ea580c", color: "#fff",
                        fontWeight: 800, fontSize: 12,
                        border: "none", cursor: "pointer",
                      }}>
                        <LogIn style={{ width: 13, height: 13 }} />
                        {t.login}
                      </button>
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          MOBILE FLOATING BOTTOM NAV
      ══════════════════════════════════════════ */}
      <div className="lg:hidden nav-root" style={{
        position: "fixed", bottom: 18, left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        width: "calc(100% - 28px)",
        maxWidth: 400,
      }}>
        <nav style={{
          background: "rgba(10,10,10,.92)",
          backdropFilter: "blur(28px)",
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: 22,
          boxShadow: "0 8px 40px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.05)",
          padding: "4px 6px",
          display: "flex", justifyContent: "space-around", alignItems: "center",
        }}>
          <BottomNavItem href="/"          label={t.home}      icon={Home}      active={pathname === "/"} />
          <BottomNavItem href="/portfolio" label={t.portfolio} icon={Briefcase} active={pathname === "/portfolio"} />

          {/* Centre contact CTA bubble */}
          <Link href="/contact" style={{ position: "relative", top: -18, textDecoration: "none", flexShrink: 0 }}>
            <div style={{
              width: 52, height: 52, borderRadius: "50%",
              background: "linear-gradient(135deg, #f97316, #ea580c)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 24px rgba(249,115,22,.5)",
            }}>
              <Mail style={{ width: 22, height: 22, color: "#fff" }} />
            </div>
          </Link>

          <BottomNavItem href="/packages" label={t.packages} icon={Package}     active={pathname === "/packages"} />
          <BottomNavItem href="/store"    label={t.store}    icon={ShoppingBag} active={pathname === "/store"} />
        </nav>
      </div>
    </>
  );
}