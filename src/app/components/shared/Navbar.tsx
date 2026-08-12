"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { motion, Variants, AnimatePresence } from "framer-motion";
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
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
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
  Bot,
  Cpu,
  Zap,
  type LucideIcon,
} from "lucide-react";

// ==========================================
// 🛠️ Data & Configuration
// ==========================================
const serviceComponentsBN = [
  {
    title: "ওয়েব সার্ভিস",
    href: "/web-service",
    description: "আধুনিক ও দ্রুতগতির ওয়েবসাইট।",
    icon: Code2,
  },
  {
    title: "ডিজিটাল মার্কেটিং",
    href: "/digital-marketing",
    description: "ব্যবসাকে অনলাইন জগতে ছড়িয়ে দিন।",
    icon: Megaphone,
  },
  {
    title: "Meta Marketing",
    href: "/meta-marketing",
    description: "Facebook Ads-এর মাধ্যমে সেলস বৃদ্ধি।",
    icon: Share2,
  },
  {
    title: "গ্রাফিক্স ডিজাইন",
    href: "/graphics-design",
    description: "আকর্ষণীয় লোগো ও ব্র্যান্ডিং।",
    icon: Palette,
  },
  {
    title: "SEO",
    href: "/seo",
    description: "গুগল র‍্যাঙ্কিং এ শীর্ষে থাকুন।",
    icon: Search,
  },
  {
    title: "ভিডিও এডিটিং",
    href: "/video-editing",
    description: "প্রফেশনাল ভিডিও প্রোডাকশন।",
    icon: Film,
  },
  {
    title: "UI/UX ডিজাইন",
    href: "/ui-ux-design",
    description: "ইউজার-ফ্রেন্ডলি অ্যাপ ডিজাইন।",
    icon: Smartphone,
  },
];

const serviceComponentsEN = [
  {
    title: "Web Service",
    href: "/web-service",
    description: "Modern & fast websites.",
    icon: Code2,
  },
  {
    title: "Digital Marketing",
    href: "/digital-marketing",
    description: "Grow business online.",
    icon: Megaphone,
  },
  {
    title: "Meta Marketing",
    href: "/meta-marketing",
    description: "Boost sales via FB Ads.",
    icon: Share2,
  },
  {
    title: "Graphics Design",
    href: "/graphics-design",
    description: "Creative branding assets.",
    icon: Palette,
  },
  {
    title: "SEO",
    href: "/seo",
    description: "Rank #1 on Google.",
    icon: Search,
  },
  {
    title: "Video Editing",
    href: "/video-editing",
    description: "Professional video edits.",
    icon: Film,
  },
  {
    title: "UI/UX Design",
    href: "/ui-ux-design",
    description: "User-friendly interfaces.",
    icon: Smartphone,
  },
];

// ==========================================
// 🎨 Logo Component
// ==========================================
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-500"></div>
        <svg
          className="h-8 w-8 text-cyan-600 dark:text-cyan-400 relative z-10"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2047.88 1852.16"
        >
          <path
            style={{ fill: "currentColor" }}
            d="M926.1,1163.22q0,84.22,0,168.46c0,18.81.07,18.49-18.17,18.71-25.33.3-50.65,1.6-76,1.68-85.84.25-171.67-.12-257.5.48-12,.09-14.37-4.92-14.32-14.79.15-28.68.09-57.36.09-86,0-86.45.2-172.9-.27-259.35-.06-11.51,3.74-14.39,14.61-14.35q165.4.51,330.83.28c18.43,0,18.44,0,18.45-18.24q0-90.28,0-180.57,0-74.82,0-149.63c0-14.06,2.82-16.81,17-16.82q163.61-.13,327.21-.23c4,0,8.46.86,12-.49,12.54-4.74,14.28,3.33,14.3,12,.16,114.32,0,228.65.23,343,0,11.4-6.56,11.7-15.07,11.69q-168.46-.18-336.91-.06c-16.86,0-16.62,0-16.58,17C926.17,1051.73,926.09,1107.47,926.1,1163.22Z"
            transform="translate(-555.32 -610.92)"
          />
          <path
            style={{ fill: "currentColor" }}
            d="M925.87,2094h-351c-18.78,0-19.51-.76-19.5-19.91,0-63.41-.25-126.83.11-190.24.25-43.7,1.38-87.38,2.08-131.07.06-4,.6-8.27-.39-12.07-2.61-10,3.59-12.24,10.94-12.59,10.47-.51,21-.06,31.49-.06,103,0,206,.17,309-.3,12-.06,15.94,2.87,15.88,15.42-.46,101.79-.23,203.58-.2,305.36,0,11.63.4,23.27-.08,34.88-.34,8.35,3.2,9.94,10.9,9.82,30.55-.47,61.12-.1,91.67-.29,33-.21,65.91-.93,98.87-1,27.72-.07,55.43.48,83.15.7,23.76.19,47.53.56,71.29.32,10.66-.1,16,2.53,13.55,14.76-1.29,6.47.73,13.53.73,20.33q.1,158.74,0,317.48c0,17.54,0,17.49-17.32,17.49q-167.22,0-334.44.06c-16.88,0-16.57-.07-16.84-16.88-.38-23.93-1.58-47.85-1.88-71.78q-.51-40.55,0-81.12c.37-30.64,1.55-61.27,1.84-91.91C926.13,2166.37,925.87,2131.34,925.87,2094Z"
            transform="translate(-555.32 -610.92)"
          />
          <path
            style={{ fill: "currentColor" }}
            d="M1915.46,960.49c41.91,23.15,81.69,45.15,121.52,67,2.64,1.45,5.78,2,8.61,3.12,8.18,3.34,11,8.37,8.09,17.65-8,25.29-14.88,50.9-22.45,76.32-6.69,22.45-14,44.73-20.49,67.24-6.57,22.69-12.4,45.6-18.77,68.36-6,21.49-12.37,42.88-18.48,64.34-6.46,22.7-12.73,45.45-19.25,68.14-6.73,23.42-13.8,46.75-20.44,70.2-4,14.23-7.41,28.64-11.28,42.92-3,10.94-6.3,21.79-9.38,32.71-12.85,45.72-25.42,91.52-38.6,137.15-8.85,30.66-19,60.94-27.74,91.64-9,31.83-16.54,64.08-25.42,96-6.3,22.65-14.06,44.89-20.63,67.46s-12.42,45.45-18.73,68.15c-3.15,11.36-6.74,22.6-10,34-2.14,7.56-4.41,15.13-5.77,22.85-1.78,10.05-7.8,13.26-16.65,8.34-37.44-20.79-74.82-41.71-112.46-62.15-10.36-5.62-13-11.91-8.8-23.46,5.58-15.52,8.71-31.92,13.07-47.9,2.75-10,5.8-20,8.75-30,9.73-33,19.9-65.91,29.11-99.08,9-32.34,16.56-65.06,25.52-97.41,8.6-31,18.48-61.74,27.22-92.76,6.51-23.11,12-46.51,18.14-69.72,3.24-12.23,7-24.3,10.43-36.48,7.15-25.5,14-51.07,21.38-76.5,6.78-23.4,14.4-46.57,21-70,6.51-23,11.89-46.41,18.41-69.46,6.27-22.12,13.65-43.93,20-66,6.15-21.42,11.46-43.07,17.46-64.53,4.33-15.51,9.2-30.86,13.8-46.29,3.1-10.42,6.49-20.77,9.15-31.3,3.3-13.06,5.35-26.46,9.06-39.39C1898.61,1014.78,1907,988.19,1915.46,960.49Z"
            transform="translate(-555.32 -610.92)"
          />
          <path
            style={{ fill: "currentColor" }}
            d="M1138.46,1530.5,1557,1113.16l4.06,2.88c-.7,8.48-2,17-2,25.44-.16,58.39.15,116.79-.37,175.17-.06,6.24-2.86,14.08-7.17,18.4q-95.47,95.85-191.92,190.72c-6.34,6.25-6.41,10.61-.44,16.43q65,63.36,129.92,126.83c20.18,19.7,40.64,39.12,60.46,59.18,3.58,3.62,6.54,9.71,6.58,14.68.53,62.37.48,124.74.51,187.11,0,2.48-.66,5-1.65,12Z"
            transform="translate(-555.32 -610.92)"
          />
          <path
            style={{ fill: "currentColor" }}
            d="M2187.72,1944.68c-1.19-8.13-2.29-12.16-2.3-16.18-.1-58.81-.34-117.61.32-176.41.08-7.07,3.43-15.91,8.36-20.83q94.37-94.07,189.84-187c6.63-6.49,6.88-9.94-.1-16.84Q2288.4,1433,2194,1337.52c-4.87-4.93-8.17-13.68-8.25-20.71-.67-57.47-.43-115-.36-172.43,0-4.11.85-8.21,1.59-14.93,4.86,3.75,7.69,5.54,10.06,7.82,57.55,55.48,115.43,110.63,172.46,166.63,68.94,67.69,137.11,136.15,205.7,204.19,7.51,7.44,15.44,14.47,23.44,21.39,5.26,4.56,6.43,8.32.79,13.79q-88.87,86.2-177.5,172.69-107.29,104.32-214.65,208.60C2201.74,1930,2196.44,1935.72,2187.72,1944.68Z"
            transform="translate(-555.32 -610.92)"
          />
        </svg>
      </div>
      <span className="hidden text-xl font-extrabold sm:inline-block tracking-tight text-slate-800 dark:text-white">
        Pixel & Code
      </span>
    </Link>
  );
}

// ==========================================
// 🔗 Navigation Item Component
// ==========================================
function NavItem({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full",
            active
              ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50/50 dark:bg-cyan-950/30"
              : "text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-900/50"
          )}
        >
          {children}
          {active && (
            <motion.div
              layoutId="activeNavIndicator"
              className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-500 rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
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
            "relative p-2 rounded-xl transition-colors duration-300 bg-transparent hover:bg-transparent",
            active
              ? "text-cyan-600 dark:text-cyan-400"
              : "text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400",
          )}
        >
          <Icon
            className={cn(
              "h-5 w-5 transition-all duration-300",
              active
                ? "text-cyan-600 dark:text-cyan-400 scale-110"
                : "text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400",
            )}
          />
          {active && (
            <motion.span
              layoutId="bottomNavDot"
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-600 dark:bg-cyan-400 rounded-full"
            />
          )}
        </div>
        <span
          className={cn(
            "text-[10px] font-semibold mt-1 transition-colors",
            active
              ? "text-cyan-600 dark:text-cyan-400"
              : "text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400",
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
        store: "Companies",
        packages: "Packages",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact",
        requestDemo: "Request For Demo",
      };

  const serviceComponents = language
    ? serviceComponentsBN
    : serviceComponentsEN;

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
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  return (
    <>
      {/* 🖥️ Desktop Header - Full Screen Background */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/90 dark:bg-[#0b0f17]/90 backdrop-blur-md border-slate-200/80 dark:border-slate-800/80 shadow-sm"
            : "bg-white/50 dark:bg-transparent border-transparent",
        )}
      >
        {/* Content Container - Max-w-7xl width restriction */}
        <div className="max-w-7xl w-full mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-2.5 items-center">
                <NavigationMenuItem>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className={cn(
                          "relative bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_auto] bg-[position:0%_0] hover:bg-[position:100%_0] text-white font-bold px-4 py-1.5 text-sm  border border-transparent transition-all duration-500 shadow-md shadow-cyan-500/25 flex items-center gap-1.5 focus:bg-transparent data-[state=open]:shadow-lg data-[state=open]:shadow-cyan-500/40",
                          pathname === "/" && "shadow-lg shadow-cyan-500/40",
                        )}
                      >
                      <div className="flex gap-1.5 rounded-full">
                          <motion.div
                          whileHover={{ rotate: [0, -12, 12, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          <Home className="w-4 h-4 text-white" /> 
                        </motion.div>
                        
                        <span>{t.home}</span>
                      </div>


                      </Link>
                    </NavigationMenuLink>
                  </motion.div>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <NavigationMenuTrigger
                      className={cn(
                        "relative bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_auto] bg-[position:0%_0] hover:bg-[position:100%_0] text-white font-bold px-4 py-1.5 text-sm rounded-full border border-transparent transition-all duration-500 shadow-md shadow-cyan-500/25 flex items-center gap-1.5 focus:bg-transparent data-[state=open]:shadow-lg data-[state=open]:shadow-cyan-500/40",
                      )}
                    >
                      <motion.div
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut",
                        }}
                      >
                        <Sparkles className="w-4 h-4 text-white" />
                      </motion.div>
                      <span>{t.services}</span>
                    </NavigationMenuTrigger>
                  </motion.div>

                  {/* Mega Menu */}
                  <NavigationMenuContent className="p-0 bg-transparent border-none shadow-none">
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      className="flex w-[92vw] max-w-sm min-w-0 flex-col p-4 sm:max-w-xl md:max-w-2xl lg:w-[860px] lg:max-w-[860px] lg:flex-row gap-4 bg-gradient-to-br from-slate-50 via-cyan-50/20 to-slate-50 dark:from-slate-950 dark:via-slate-900/90 dark:to-slate-950 rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800/80 shadow-2xl shadow-slate-400/20 dark:shadow-black/70 mt-3 overflow-hidden backdrop-blur-xl"
                    >
                      <ul className="grid flex-1 min-w-0 grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 p-3">
                        {serviceComponents.map((component) => (
                          <motion.li
                            key={component.title}
                            variants={itemVariants}
                            className="min-w-0"
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                href={component.href}
                                className="group flex items-start gap-3 rounded-2xl p-3.5 outline-none transition-colors duration-300 bg-transparent hover:bg-transparent min-w-0"
                              >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-500 transition-colors duration-300 group-hover:text-cyan-500 dark:group-hover:text-cyan-400">
                                  <component.icon className="h-5 w-5" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <h4 className="text-sm font-bold text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 truncate">
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

                      {/* 🤖 Cyberpunk AI Side Showcase Panel */}
                      <motion.div
                        variants={itemVariants}
                        className="hidden lg:flex flex-col w-[340px] shrink-0 relative overflow-hidden rounded-2xl p-6 bg-slate-950 text-white border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] group"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.25),transparent_60%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.2),transparent_60%)]" />
                        <div className="absolute -right-12 -top-12 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />

                        <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                                <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
                                <span>AI Innovation Hub</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-500/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                                Active
                              </div>
                            </div>

                            <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-200 leading-snug">
                              Next-Gen AI & Web Automation
                            </h3>
                            <p className="mt-2 text-xs text-slate-300/80 leading-relaxed font-medium">
                              Power up your web platform with custom AI agents,
                              automated workflows, and high-converting smart
                              tools.
                            </p>

                            <div className="mt-5 space-y-2">
                              {[
                                {
                                  icon: Cpu,
                                  text: "Custom AI Agent Integration",
                                },
                                {
                                  icon: Zap,
                                  text: "Automated Workflow Engines",
                                },
                                {
                                  icon: Bot,
                                  text: "Intelligent UI Interactions",
                                },
                              ].map((feature, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2.5 text-xs text-slate-200 bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-sm group/item hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300"
                                >
                                  <div className="p-1 rounded-lg bg-cyan-500/20 text-cyan-300 group-hover/item:bg-cyan-500 group-hover/item:text-slate-950 transition-colors">
                                    <feature.icon className="w-3.5 h-3.5" />
                                  </div>
                                  <span className="font-semibold text-[11px] text-slate-200">
                                    {feature.text}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2">
                            <Link
                              href="/ai-services"
                              className="relative group/btn flex items-center justify-between w-full px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_28px_rgba(6,182,212,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                            >
                              <span className="relative z-10 flex items-center gap-2 font-extrabold text-slate-950">
                                Explore AI Features
                              </span>
                              <ArrowRight className="w-4 h-4 text-slate-950 transition-transform group-hover/btn:translate-x-1 relative z-10" />
                              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 🌟 Standard Nav Links */}
                <NavItem href="/store" active={pathname === "/store"}>
                  {t.store}
                </NavItem>
                <NavItem href="/packages" active={pathname === "/packages"}>
                  {t.packages}
                </NavItem>
                <NavItem href="/portfolio" active={pathname === "/portfolio"}>
                  {t.portfolio}
                </NavItem>
                <NavItem href="/about" active={pathname === "/about"}>
                  {t.about}
                </NavItem>
                <NavItem href="/contact" active={pathname === "/contact"}>
                  {t.contact}
                </NavItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-4">
              {mounted && (
                <div className="flex items-center p-1 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-200/80 dark:border-slate-800 shadow-inner transition-all duration-300 hover:border-cyan-500/40">
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="relative p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm flex items-center justify-center overflow-hidden"
                    aria-label="Toggle Theme"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={theme}
                        initial={{ y: -16, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 16, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                      >
                        {theme === "dark" ? (
                          <Moon className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                        ) : (
                          <Sun className="w-4 h-4 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </motion.button>

                  <div className="w-[1px] h-4 bg-slate-300/80 dark:bg-slate-700 mx-1" />

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setLanguage(!language)}
                    className="relative px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm flex items-center justify-center overflow-hidden hover:bg-white dark:hover:bg-slate-800"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={language ? "BN" : "EN"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="block tracking-wider font-extrabold text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400"
                      >
                        {language ? "BN" : "EN"}
                      </motion.span>
                    </AnimatePresence>
                  </motion.button>
                </div>
              )}

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative group"
              >
                <Link
                  href="/request-demo"
                  className="relative flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-950 text-white rounded-full border border-cyan-500/30 overflow-hidden backdrop-blur-xl group-hover:border-cyan-400/70 transition-all duration-300"
                >
                  <span className="absolute top-0 right-0 w-12 h-full bg-white/20 skew-x-[-25deg] -translate-x-[300%] group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out" />
                  <motion.div
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.15, 1.15, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </motion.div>

                  <span className="text-sm font-bold tracking-wide text-white group-hover:text-cyan-200 transition-colors">
                    {t.requestDemo}
                  </span>

                  <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Hamburger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-slate-800 dark:text-slate-200 hover:bg-transparent rounded-full"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] p-0 border-r border-slate-200 dark:border-slate-800"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Site navigation links, language and theme settings
                </SheetDescription>
                <div className="flex flex-col h-full bg-white dark:bg-slate-950">
                  <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                    <Logo />
                  </div>
                  <div className="flex-1 overflow-y-auto p-4">
                    <nav className="space-y-1">
                      {[
                        { href: "/", label: t.home, icon: Home },
                        {
                          href: "/portfolio",
                          label: t.portfolio,
                          icon: Briefcase,
                        },
                        { href: "/packages", label: t.packages, icon: Package },
                        { href: "/store", label: t.store, icon: ShoppingBag },
                        { href: "/about", label: t.about, icon: LayoutGrid },
                        { href: "/contact", label: t.contact, icon: Mail },
                      ].map((item) => (
                        <SheetClose asChild key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors bg-transparent hover:bg-transparent",
                              pathname === item.href
                                ? "text-cyan-600 dark:text-cyan-400"
                                : "text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400",
                            )}
                          >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}