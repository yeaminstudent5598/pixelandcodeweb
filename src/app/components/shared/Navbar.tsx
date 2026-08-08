"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Home,
  Briefcase,
  Package,
  ShoppingBag,
  Mail,
  Sun,
  Moon,
  Globe,
  LayoutGrid,
  Sparkles,
  Code2,
  Megaphone,
  Share2,
  Palette,
  Search,
  Film,
  Smartphone,
  ArrowRight,
  Rocket,
  type LucideIcon,
} from "lucide-react";

// ==========================================
// 🛠️ Data & Configuration (With Icons)
// ==========================================
const serviceComponentsBN = [
  { title: "ওয়েব সার্ভিস", href: "/web-service", description: "আধুনিক ও দ্রুতগতির ওয়েবসাইট।", icon: Code2 },
  { title: "ডিজিটাল মার্কেটিং", href: "/digital-marketing", description: "ব্যবসাকে অনলাইন জগতে ছড়িয়ে দিন।", icon: Megaphone },
  { title: "Meta Marketing", href: "/meta-marketing", description: "Facebook Ads-এর মাধ্যমে সেলস বৃদ্ধি।", icon: Share2 },
  { title: "গ্রাফিক্স ডিজাইন", href: "/graphics-design", description: "আকর্ষণীয় লোগো ও ব্র্যান্ডিং।", icon: Palette },
  { title: "SEO", href: "/seo", description: "গুগল র‍্যাঙ্কিং এ শীর্ষে থাকুন।", icon: Search },
  { title: "ভিডিও এডিটিং", href: "/video-editing", description: "প্রফেশনাল ভিডিও প্রোডাকশন।", icon: Film },
  { title: "UI/UX ডিজাইন", href: "/ui-ux-design", description: "ইউজার-ফ্রেন্ডলি অ্যাপ ডিজাইন।", icon: Smartphone },
];

const serviceComponentsEN = [
  { title: "Web Service", href: "/web-service", description: "Modern & fast websites.", icon: Code2 },
  { title: "Digital Marketing", href: "/digital-marketing", description: "Grow business online.", icon: Megaphone },
  { title: "Meta Marketing", href: "/meta-marketing", description: "Boost sales via FB Ads.", icon: Share2 },
  { title: "Graphics Design", href: "/graphics-design", description: "Creative branding assets.", icon: Palette },
  { title: "SEO", href: "/seo", description: "Rank #1 on Google.", icon: Search },
  { title: "Video Editing", href: "/video-editing", description: "Professional video edits.", icon: Film },
  { title: "UI/UX Design", href: "/ui-ux-design", description: "User-friendly interfaces.", icon: Smartphone },
];

// ==========================================
// 🎨 Logo Component
// ==========================================
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-500"></div>
        <svg
          className="h-8 w-8 text-blue-600 dark:text-blue-500 relative z-10"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2047.88 1852.16"
        >
          <path style={{ fill: "currentColor" }} d="M926.1,1163.22q0,84.22,0,168.46c0,18.81.07,18.49-18.17,18.71-25.33.3-50.65,1.6-76,1.68-85.84.25-171.67-.12-257.5.48-12,.09-14.37-4.92-14.32-14.79.15-28.68.09-57.36.09-86,0-86.45.2-172.9-.27-259.35-.06-11.51,3.74-14.39,14.61-14.35q165.4.51,330.83.28c18.43,0,18.44,0,18.45-18.24q0-90.28,0-180.57,0-74.82,0-149.63c0-14.06,2.82-16.81,17-16.82q163.61-.13,327.21-.23c4,0,8.46.86,12-.49,12.54-4.74,14.28,3.33,14.3,12,.16,114.32,0,228.65.23,343,0,11.4-6.56,11.7-15.07,11.69q-168.46-.18-336.91-.06c-16.86,0-16.62,0-16.58,17C926.17,1051.73,926.09,1107.47,926.1,1163.22Z" transform="translate(-555.32 -610.92)" />
          <path style={{ fill: "currentColor" }} d="M925.87,2094h-351c-18.78,0-19.51-.76-19.5-19.91,0-63.41-.25-126.83.11-190.24.25-43.7,1.38-87.38,2.08-131.07.06-4,.6-8.27-.39-12.07-2.61-10,3.59-12.24,10.94-12.59,10.47-.51,21-.06,31.49-.06,103,0,206,.17,309-.3,12-.06,15.94,2.87,15.88,15.42-.46,101.79-.23,203.58-.2,305.36,0,11.63.4,23.27-.08,34.88-.34,8.35,3.2,9.94,10.9,9.82,30.55-.47,61.12-.1,91.67-.29,33-.21,65.91-.93,98.87-1,27.72-.07,55.43.48,83.15.7,23.76.19,47.53.56,71.29.32,10.66-.1,16,2.53,13.55,14.76-1.29,6.47.73,13.53.73,20.33q.1,158.74,0,317.48c0,17.54,0,17.49-17.32,17.49q-167.22,0-334.44.06c-16.88,0-16.57-.07-16.84-16.88-.38-23.93-1.58-47.85-1.88-71.78q-.51-40.55,0-81.12c.37-30.64,1.55-61.27,1.84-91.91C926.13,2166.37,925.87,2131.34,925.87,2094Z" transform="translate(-555.32 -610.92)" />
          <path style={{ fill: "currentColor" }} d="M1915.46,960.49c41.91,23.15,81.69,45.15,121.52,67,2.64,1.45,5.78,2,8.61,3.12,8.18,3.34,11,8.37,8.09,17.65-8,25.29-14.88,50.9-22.45,76.32-6.69,22.45-14,44.73-20.49,67.24-6.57,22.69-12.4,45.6-18.77,68.36-6,21.49-12.37,42.88-18.48,64.34-6.46,22.7-12.73,45.45-19.25,68.14-6.73,23.42-13.8,46.75-20.44,70.2-4,14.23-7.41,28.64-11.28,42.92-3,10.94-6.3,21.79-9.38,32.71-12.85,45.72-25.42,91.52-38.6,137.15-8.85,30.66-19,60.94-27.74,91.64-9,31.83-16.54,64.08-25.42,96-6.3,22.65-14.06,44.89-20.63,67.46s-12.42,45.45-18.73,68.15c-3.15,11.36-6.74,22.6-10,34-2.14,7.56-4.41,15.13-5.77,22.85-1.78,10.05-7.8,13.26-16.65,8.34-37.44-20.79-74.82-41.71-112.46-62.15-10.36-5.62-13-11.91-8.8-23.46,5.58-15.52,8.71-31.92,13.07-47.9,2.75-10,5.8-20,8.75-30,9.73-33,19.9-65.91,29.11-99.08,9-32.34,16.56-65.06,25.52-97.41,8.6-31,18.48-61.74,27.22-92.76,6.51-23.11,12-46.51,18.14-69.72,3.24-12.23,7-24.3,10.43-36.48,7.15-25.5,14-51.07,21.38-76.5,6.78-23.4,14.4-46.57,21-70,6.51-23,11.89-46.41,18.41-69.46,6.27-22.12,13.65-43.93,20-66,6.15-21.42,11.46-43.07,17.46-64.53,4.33-15.51,9.2-30.86,13.8-46.29,3.1-10.42,6.49-20.77,9.15-31.3,3.3-13.06,5.35-26.46,9.06-39.39C1898.61,1014.78,1907,988.19,1915.46,960.49Z" transform="translate(-555.32 -610.92)" />
          <path style={{ fill: "currentColor" }} d="M1138.46,1530.5,1557,1113.16l4.06,2.88c-.7,8.48-2,17-2,25.44-.16,58.39.15,116.79-.37,175.17-.06,6.24-2.86,14.08-7.17,18.4q-95.47,95.85-191.92,190.72c-6.34,6.25-6.41,10.61-.44,16.43q65,63.36,129.92,126.83c20.18,19.7,40.64,39.12,60.46,59.18,3.58,3.62,6.54,9.71,6.58,14.68.53,62.37.48,124.74.51,187.11,0,2.48-.66,5-1.65,12Z" transform="translate(-555.32 -610.92)" />
          <path style={{ fill: "currentColor" }} d="M2187.72,1944.68c-1.19-8.13-2.29-12.16-2.3-16.18-.1-58.81-.34-117.61.32-176.41.08-7.07,3.43-15.91,8.36-20.83q94.37-94.07,189.84-187c6.63-6.49,6.88-9.94-.1-16.84Q2288.4,1433,2194,1337.52c-4.87-4.93-8.17-13.68-8.25-20.71-.67-57.47-.43-115-.36-172.43,0-4.11.85-8.21,1.59-14.93,4.86,3.75,7.69,5.54,10.06,7.82,57.55,55.48,115.43,110.63,172.46,166.63,68.94,67.69,137.11,136.15,205.7,204.19,7.51,7.44,15.44,14.47,23.44,21.39,5.26,4.56,6.43,8.32.79,13.79q-88.87,86.2-177.5,172.69-107.29,104.32-214.65,208.60C2201.74,1930,2196.44,1935.72,2187.72,1944.68Z" transform="translate(-555.32 -610.92)" />
        </svg>
      </div>
      <span className="hidden text-xl font-extrabold sm:inline-block tracking-tight text-slate-800 dark:text-white">
        Pixel & Code
      </span>
    </Link>
  );
}

// ==========================================
// 📱 Mobile Bottom Navigation Item
// ==========================================
function BottomNavItem({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
}) {
  return (
    <Link href={href} className="relative flex-1 group">
      <div className="flex flex-col items-center justify-center py-2">
        <div
          className={cn(
            "relative p-2 rounded-xl transition-all duration-300",
            active
              ? "bg-blue-50 dark:bg-blue-500/20"
              : "hover:bg-slate-100 dark:hover:bg-slate-800"
          )}
        >
          <Icon
            className={cn(
              "h-5 w-5 transition-all duration-300",
              active
                ? "text-blue-600 dark:text-blue-400 scale-110"
                : "text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200"
            )}
          />
          {active && (
            <motion.span
              layoutId="bottomNavDot"
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
            />
          )}
        </div>
        <span
          className={cn(
            "text-[10px] font-semibold mt-1 transition-colors",
            active
              ? "text-blue-600 dark:text-blue-400"
              : "text-slate-500 dark:text-slate-400"
          )}
        >
          {label}
        </span>
      </div>
    </Link>
  );
}

// ==========================================
// 🚀 Main Navbar
// ==========================================
export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = language
    ? {
        home: "হোম",
        services: "সার্ভিসেস",
        store: "স্টোর",
        packages: "প্যাকেজ",
        portfolio: "পোর্টফোলিও",
        about: "সম্পর্কে",
        contact: "যোগাযোগ",
        requestDemo: "ডেমো রিকোয়েস্ট",
      }
    : {
        home: "Home",
        services: "Services",
        store: "Store",
        packages: "Packages",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact",
        requestDemo: "Request For Demo",
      };

  const serviceComponents = language ? serviceComponentsBN : serviceComponentsEN;

  // 🚀 TS Fix: Explicitly defining Framer Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut" as const,
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
  };

  return (
    <>
      {/* 🎨 CSS Keyframes for Button Gradient Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes navBtnGradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-nav-btn-gradient {
            background-size: 200% 200%;
            animation: navBtnGradientMove 4s ease infinite;
          }
        `
      }} />

      {/* 🖥️ Desktop Header (Clean White / Glassmorphism) */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm"
            : "bg-white/50 dark:bg-transparent border-transparent"
        )}
      >
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavItem href="/" active={pathname === "/"}>{t.home}</NavItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium rounded-full h-10 px-4 transition-colors data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800"
                  >
                    {t.services}
                  </NavigationMenuTrigger>
                  
                  {/* 🚀 Clean & Creative Mega Menu */}
                  <NavigationMenuContent className="p-0 bg-transparent border-none shadow-none">
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      className="flex w-[360px] flex-col p-4 md:w-[680px] lg:w-[880px] lg:flex-row gap-4 bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-[1.75rem] border border-slate-200/70 dark:border-slate-800 shadow-2xl shadow-slate-300/40 dark:shadow-black/40 mt-3 overflow-hidden"
                    >
                      {/* Left side: Links Grid */}
                      <ul className="grid flex-1 grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-2 p-3">
                        {serviceComponents.map((component) => (
                          <motion.li key={component.title} variants={itemVariants}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={component.href}
                                className="group flex items-start gap-4 rounded-2xl p-3.5 outline-none transition-all duration-300 hover:bg-white dark:hover:bg-slate-800/80 hover:shadow-sm"
                              >
                                {/* Clean Icon Box (Hover won't hide icon, just adds soft glow) */}
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.15)]">
                                  <component.icon className="h-5 w-5" />
                                </div>
                                {/* Text Content */}
                                <div>
                                  <h4 className="text-sm font-bold text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                    {component.title}
                                  </h4>
                                  <p className="mt-1 line-clamp-2 text-xs font-medium leading-relaxed text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                                    {component.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Right side: Creative Feature Card */}
                      <motion.div variants={itemVariants} className="hidden lg:flex flex-col w-[320px] bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-slate-800 dark:to-slate-900 rounded-[1.25rem] p-6 shadow-xl relative overflow-hidden group text-white">
                        
                        {/* Abstract Glow Background */}
                        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
                        <div className="absolute -left-10 -top-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                          <div>
                            <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/10">
                              <Rocket className="w-3.5 h-3.5 text-blue-300" />
                              Pixel & Code Studio
                            </div>
                            
                            <h3 className="text-xl font-extrabold text-white mb-2.5 leading-snug">
                              Building The Future of Digital Scale
                            </h3>
                            
                            <p className="text-xs text-blue-100/80 leading-relaxed font-medium">
                              Transform your digital presence with enterprise-grade web solutions and high-converting strategies.
                            </p>
                          </div>

                          <div className="pt-6 mt-auto">
                            <Link 
                              href="/contact"
                              className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-white text-blue-600 hover:bg-blue-50 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                              <span>Start Your Project</span>
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>

                    </motion.div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavItem href="/store" active={pathname === "/store"}>{t.store}</NavItem>
                <NavItem href="/packages" active={pathname === "/packages"}>{t.packages}</NavItem>
                <NavItem href="/portfolio" active={pathname === "/portfolio"}>{t.portfolio}</NavItem>
                <NavItem href="/about" active={pathname === "/about"}>{t.about}</NavItem>
                <NavItem href="/contact" active={pathname === "/contact"}>{t.contact}</NavItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-4">
              {mounted && (
                <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-1.5 rounded-full hover:bg-white dark:hover:bg-slate-700 transition-all shadow-sm text-slate-600 dark:text-slate-300"
                    aria-label="Toggle Theme"
                  >
                    {theme === "dark" ? <Moon className="w-4 h-4 text-blue-400" /> : <Sun className="w-4 h-4 text-orange-500" />}
                  </button>
                  <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                  <button
                    onClick={() => setLanguage(!language)}
                    className="px-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
                  >
                    {language ? "BN" : "EN"}
                  </button>
                </div>
              )}

              {/* Request Demo Button */}
              <Link 
                href="/request-demo" 
                className="relative group inline-flex items-center justify-center p-[2px] rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-blue-500/30 hover:-translate-y-0.5 focus:outline-none"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 animate-nav-btn-gradient rounded-full"></span>
                <span className="relative flex items-center justify-center px-5 py-2.5 w-full h-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-full transition-all duration-300 group-hover:bg-blue-50 dark:group-hover:bg-slate-800 text-sm">
                  <Sparkles className="mr-2 h-4 w-4 text-blue-500" />
                  {t.requestDemo}
                  <ArrowRight className="ml-1.5 w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0 border-r border-slate-200 dark:border-slate-800">
                <div className="flex flex-col h-full bg-white dark:bg-slate-950">
                  <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                    <Logo />
                  </div>
                  <div className="flex-1 overflow-y-auto p-4">
                    <nav className="space-y-1">
                      {[
                        { href: "/", label: t.home, icon: Home },
                        { href: "/portfolio", label: t.portfolio, icon: Briefcase },
                        { href: "/packages", label: t.packages, icon: Package },
                        { href: "/store", label: t.store, icon: ShoppingBag },
                        { href: "/about", label: t.about, icon: LayoutGrid },
                        { href: "/contact", label: t.contact, icon: Mail },
                      ].map((item) => (
                        <SheetClose asChild key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all",
                              pathname === item.href ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                            )}
                          >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                          </Link>
                        </SheetClose>
                      ))}

                      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                        <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t.services}</p>
                        {serviceComponents.map((item) => (
                          <SheetClose asChild key={item.href}>
                            <Link href={item.href} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
                              <item.icon className="w-4 h-4 text-blue-500" />
                              {item.title}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </nav>
                  </div>

                  <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                        {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                      </Button>
                      <Button variant="outline" className="rounded-full h-10 flex-1 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium" onClick={() => setLanguage(!language)}>
                        <Globe className="mr-2 h-4 w-4 text-blue-500" />
                        {language ? "Bangla" : "English"}
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* 📱 Mobile Floating Bottom Navbar */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md">
        <nav className="bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-2">
          <div className="flex justify-around items-center">
            <BottomNavItem href="/" label={t.home} icon={Home} active={pathname === "/"} />
            <BottomNavItem href="/portfolio" label={t.portfolio} icon={Briefcase} active={pathname === "/portfolio"} />
            <Link href="/contact" className="relative -top-6 group">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-600 group-hover:bg-blue-700 rounded-full shadow-lg shadow-blue-500/40 text-white transform transition-all active:scale-95 border-4 border-white dark:border-slate-950">
                <Mail className="w-6 h-6" />
              </div>
            </Link>
            <BottomNavItem href="/packages" label={t.packages} icon={Package} active={pathname === "/packages"} />
            <BottomNavItem href="/store" label={t.store} icon={ShoppingBag} active={pathname === "/store"} />
          </div>
        </nav>
      </div>
    </>
  );
}

// ==========================================
// 🧩 Helper Components
// ==========================================
function NavItem({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium rounded-full h-10 px-4 transition-all",
            active && "bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-blue-400 font-bold"
          )}
        >
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}