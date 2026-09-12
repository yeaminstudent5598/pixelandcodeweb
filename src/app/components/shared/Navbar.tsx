"use client";

<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import {
  Menu,
=======
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
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
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  LogIn,
  Menu,
  ChevronDown,
  ChevronUp,
  Search,
  Home,
>>>>>>> origin/development
  Briefcase,
  Package,
  ShoppingBag,
  Mail,
  Sun,
  Moon,
<<<<<<< HEAD
  Sparkles,
  Code2,
  Megaphone,
  Share2,
  Palette,
  Search,
  Film,
  Smartphone,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

// =====================================================
// SERVICES DATA
// =====================================================

const serviceComponentsBN = [
  {
    title: "ওয়েব সার্ভিস",
    href: "/web-service",
    description: "আধুনিক, দ্রুত ও স্কেলেবল ওয়েবসাইট তৈরি করুন।",
    icon: Code2,
=======
  Laptop,
  type LucideIcon, // 👈 Icon Type Import kora hoyeche
} from "lucide-react";

// Services data
const serviceComponentsBN: { title: string; href: string; description: string }[] = [
  {
    title: "ওয়েব সার্ভিস",
    href: "/web-service",
    description: "আপনার ব্যবসার জন্য আধুনিক, রেসপন্সিভ এবং দ্রুতগতির ওয়েবসাইট।",
>>>>>>> origin/development
  },
  {
    title: "ডিজিটাল মার্কেটিং",
    href: "/digital-marketing",
<<<<<<< HEAD
    description: "সঠিক ডিজিটাল স্ট্র্যাটেজির মাধ্যমে ব্যবসা বাড়ান।",
    icon: Megaphone,
  },
  {
    title: "Meta Marketing",
    href: "/meta-marketing",
    description: "Facebook ও Instagram marketing দিয়ে sales বৃদ্ধি করুন।",
    icon: Share2,
=======
    description: "ফেসবুক, গুগল অ্যাডের মাধ্যমে আপনার ব্যবসাকে ছড়িয়ে দিন।",
  },
  {
    "title": "Meta Marketing",
    "href": "/meta-marketing",
    "description": "Facebook Ads-এর মাধ্যমে আপনার ব্যবসার বিক্রয় এবং ব্র্যান্ড গ্রোথ বৃদ্ধি করুন।"
>>>>>>> origin/development
  },
  {
    title: "গ্রাফিক্স ডিজাইন",
    href: "/graphics-design",
<<<<<<< HEAD
    description: "আপনার ব্র্যান্ডের জন্য premium visual identity।",
    icon: Palette,
=======
    description: "আপনার ব্র্যান্ডের জন্য আকর্ষণীয় লোগো, ব্যানার এবং পোস্টার ডিজাইন।",
>>>>>>> origin/development
  },
  {
    title: "SEO",
    href: "/seo",
<<<<<<< HEAD
    description: "Google search-এ আপনার business-এর visibility বাড়ান।",
    icon: Search,
=======
    description: "সার্চ ইঞ্জিনে আপনার ওয়েবসাইটকে প্রথম পাতায় নিয়ে আসুন।",
>>>>>>> origin/development
  },
  {
    title: "ভিডিও এডিটিং",
    href: "/video-editing",
<<<<<<< HEAD
    description: "Professional এবং engaging video content তৈরি করুন।",
    icon: Film,
=======
    description: "আপনার পণ্যের জন্য আকর্ষণীয় এবং প্রফেশনাল ভিডিও তৈরি করুন।",
>>>>>>> origin/development
  },
  {
    title: "UI/UX ডিজাইন",
    href: "/ui-ux-design",
<<<<<<< HEAD
    description: "ব্যবহারকারীর জন্য সহজ ও modern interface design।",
    icon: Smartphone,
  },
];

const serviceComponentsEN = [
  {
    title: "Web Service",
    href: "/web-service",
    description: "Modern, fast and scalable websites.",
    icon: Code2,
  },
  {
    title: "Digital Marketing",
    href: "/digital-marketing",
    description: "Grow your business with smart digital strategies.",
    icon: Megaphone,
  },
  {
    title: "Meta Marketing",
    href: "/meta-marketing",
    description: "Increase sales through Facebook & Instagram.",
    icon: Share2,
  },
  {
    title: "Graphics Design",
    href: "/graphics-design",
    description: "Premium visual identity for your brand.",
    icon: Palette,
  },
  {
    title: "SEO",
    href: "/seo",
    description: "Improve visibility and rankings on Google.",
    icon: Search,
  },
  {
    title: "Video Editing",
    href: "/video-editing",
    description: "Professional and engaging video content.",
    icon: Film,
  },
  {
    title: "UI/UX Design",
    href: "/ui-ux-design",
    description: "Simple, modern and user-focused interfaces.",
    icon: Smartphone,
  },
];

// =====================================================
// LOGO
// =====================================================

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 group shrink-0"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-cyan-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

        <svg
          className="relative z-10 h-8 w-8 text-cyan-600 dark:text-cyan-400"
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

      <span className="hidden sm:inline-block text-xl font-extrabold tracking-tight text-slate-800 dark:text-white">
=======
    description: "আপনার অ্যাপ ও ওয়েবসাইটের জন্য ইউজার-ফ্রেন্ডলি এবং আকর্ষণীয় ডিজাইন।",
  },
];

const serviceComponentsEN: { title: string; href: string; description: string }[] = [
  { title: "Web Service", href: "/web-service", description: "Modern, responsive and fast websites for your business." },
  { title: "Meta Marketing", href: "/meta-marketing", description: "Boost your business using Facebook Ads strategies."},
  { title: "Digital Marketing", href: "/digital-marketing", description: "Grow your business through Facebook and Google Ads." },
  { title: "Graphics Design", href: "/graphics-design", description: "Attractive logos, banners and posters for your brand." },
  { title: "SEO", href: "/seo", description: "Bring your website to the first page of search engines." },
  { title: "Video Editing", href: "/video-editing", description: "Create attractive and professional videos for your product." },
  { title: "UI/UX Design", href: "/ui-ux-design", description: "User-friendly and engaging designs for your app and website." },
];

// ✅ Logo Component
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg
        className="h-8 w-8 text-blue-600 dark:text-blue-500"
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
      <span className="hidden text-lg font-bold sm:inline-block">
>>>>>>> origin/development
        Pixel & Code
      </span>
    </Link>
  );
}

<<<<<<< HEAD
// =====================================================
// NAV ITEM
// =====================================================

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
    <Link
      href={href}
      className={cn(
        "relative px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 cursor-pointer",
        active
          ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50/70 dark:bg-cyan-950/30"
          : "text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-900/50"
      )}
    >
      {children}

      {active && (
        <motion.span
          layoutId="activeNavIndicator"
          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-500 rounded-full"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      )}
    </Link>
  );
}

// =====================================================
// SERVICE CARD
// =====================================================

function ServiceCard({
  service,
  index,
}: {
  service: {
    title: string;
    href: string;
    description: string;
    icon: LucideIcon;
  };
  index: number;
}) {
  const Icon = service.icon;

  return (
    <Link href={service.href} className="group cursor-pointer  block">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.22,
          delay: index * 0.03,
        }}
        className="relative cursor-pointer  h-full overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 dark:hover:border-cyan-800 hover:bg-cyan-50/40 dark:hover:bg-cyan-950/20 hover:shadow-[0_8px_25px_rgba(14,165,233,0.12)]"
      >
        <div className="relative  flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 group-hover:bg-cyan-500 group-hover:border-cyan-500">
            <Icon className="h-4.5 w-4.5 text-cyan-600 dark:text-cyan-400 transition-colors duration-300 group-hover:text-white" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-1.5">
              <h3 className="text-sm font-extrabold text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300 dark:text-slate-600 group-hover:text-cyan-500 group-hover:translate-x-0.5 transition-all duration-300" />
            </div>

            <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
              {service.description}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// =====================================================
// MOBILE NAV ITEM
// =====================================================

function MobileNavItem({
=======
// ✅ মোবাইল বটম নেভিগেশনের জন্য আইটেম কম্পোনেন্ট (SOLVED HERE)
function BottomNavItem({
>>>>>>> origin/development
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
<<<<<<< HEAD
  icon: LucideIcon;
=======
  icon: LucideIcon; // 👈 Fix: Use LucideIcon or React.ElementType<{ className?: string }>
>>>>>>> origin/development
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
<<<<<<< HEAD
        "flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all",
        active
          ? "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/30 dark:text-cyan-400"
          : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
      )}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>

      {active && (
        <CheckCircle2 className="ml-auto h-4 w-4" />
      )}
=======
        "flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors",
        active ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
      )}
    >
      {/* এখন আর এখানে কোনো Error দেবে না */}
      <Icon className={cn("h-6 w-6", active && "fill-current")} />
      <span>{label}</span>
>>>>>>> origin/development
    </Link>
  );
}

<<<<<<< HEAD
// =====================================================
// MAIN NAVBAR
// =====================================================

export function Navbar() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const serviceComponents = language
    ? serviceComponentsBN
    : serviceComponentsEN;

  const t = language
    ? {
        services: "সার্ভিসেস",
        store: "কোম্পানিস",
        packages: "প্যাকেজ",
        portfolio: "পোর্টফোলিও",
        contact: "যোগাযোগ",
        requestDemo: "ডেমো রিকোয়েস্ট",
        allServices: "সব সার্ভিস দেখুন",
        bannerBadge: "ডিজিটাল সলিউশন",
        bannerTitle: "আপনার ব্যবসাকে নিয়ে যান পরবর্তী ধাপে",
        bannerDesc: "আধুনিক ডিজাইন এবং নিখুঁত কোডিংয়ের সাথে আপনার ব্র্যান্ডকে অনন্য করে তুলুন।",
        exploreBtn: "প্রজেক্ট আলোচনা করুন",
      }
    : {
        services: "Services",
        store: "Companies",
        packages: "Packages",
        portfolio: "Portfolio",
        contact: "Contact",
        requestDemo: "Request For Demo",
        allServices: "View All Services",
        bannerBadge: "Digital Ecosystem",
        bannerTitle: "Scale Your Business to New Heights",
        bannerDesc: "Empowering your brand with cutting-edge code & high-converting design.",
        exploreBtn: "Let's Talk Strategy",
      };

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-[100] transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/90 dark:bg-[#0b0f17]/90 backdrop-blur-xl border-slate-200/80 dark:border-slate-800/80 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
            : "bg-white/70 dark:bg-slate-950/40 backdrop-blur-sm border-transparent"
        )}
      >
        <div className="relative max-w-[90%] w-full mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">

          <Logo />

          <nav className="hidden lg:flex items-center">
            <div className="flex items-center gap-1.5">

              {/* SERVICES MEGA MENU HOVER */}
              <div
                className="relative "
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  className={cn(
                    "relative flex cursor-pointer items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 outline-none",
                    servicesOpen
                      ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50/80 dark:bg-cyan-950/30"
                      : "text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-900/50"
                  )}
                >
                  <span>{t.services}</span>

                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-300",
                      servicesOpen && "rotate-180"
                    )}
                  />

                  {servicesOpen && (
                    <motion.span
                      layoutId="servicesIndicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-500"
                    />
                  )}
                </button>

                {/* MEGA MENU DROPDOWN (10-COLUMN GRID SYSTEM) */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="absolute left-0 top-full pt-3 z-50 pointer-events-auto"
                    >
                      <div
                        style={{ width: "960px", maxWidth: "95vw" }}
                        className="relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-[#0b0f17]/95 backdrop-blur-2xl shadow-[0_25px_80px_rgba(15,23,42,0.18)]"
                      >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
                        <div className="pointer-events-none absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

                        {/* GRID COLS 10 SYSTEM */}
                        <div className="relative p-6 grid grid-cols-10 gap-6 text-left">

                          {/* LEFT SIDE: 4 PARTS OUT OF 10 */}
                          <div className="col-span-4 relative flex flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-900 group/banner p-6 min-h-[460px]">

                            <Image
                              src="/services/service-hover.png"
                              alt="Services Showcase"
                              fill
                              priority
                              sizes="400px"
                              className="object-cover object-top transition-transform duration-700 ease-out group-hover/banner:scale-105 opacity-90"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-transparent pointer-events-none" />
                            <div className="absolute inset-0 bg-cyan-950/20 group-hover/banner:bg-transparent transition-colors duration-500 pointer-events-none" />

                            <div className="relative z-10 space-y-3">
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 text-[11px] font-bold text-cyan-300">
                                <TrendingUp className="w-3 h-3 text-cyan-400" />
                                <span>{t.bannerBadge}</span>
                              </div>

                              <h3 className="text-xl font-black leading-snug text-white drop-shadow-sm">
                                {t.bannerTitle}
                              </h3>

                              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                                {t.bannerDesc}
                              </p>

                              <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 pt-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                              >
                                <span>{t.exploreBtn}</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                              </Link>
                            </div>
                          </div>

                          {/* RIGHT SIDE: 6 PARTS OUT OF 10 */}
                          <div className="col-span-6 flex flex-col justify-between space-y-4">

                            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3">
                              <div className="flex items-center gap-2.5">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200/50 dark:border-cyan-800/50">
                                  <Sparkles className="h-4 w-4 text-cyan-500" />
                                </div>

                                <div>
                                  <p className="text-sm font-extrabold text-slate-900 dark:text-white">
                                    {language
                                      ? "আমাদের ডিজিটাল সার্ভিস"
                                      : "Our Digital Services"}
                                  </p>

                                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                    {language
                                      ? "আপনার ব্যবসার জন্য সম্পূর্ণ ডিজিটাল সলিউশন"
                                      : "Complete digital solutions for your business"}
                                  </p>
                                </div>
                              </div>

                              <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                                Pixel & Code
                              </div>
                            </div>

                            {/* SPLIT INTO 2 COLUMNS FOR CONTENT */}
                            <div className="grid grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1 custom-scrollbar">
                              {serviceComponents.map((service, index) => (
                                <ServiceCard
                                  key={service.href}
                                  service={service}
                                  index={index}
                                />
                              ))}
                            </div>

                            {/* FOOTER BAR */}
                            <div className="flex items-center justify-between rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 px-4 py-3">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

                                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                                  {language
                                    ? "আপনার প্রজেক্ট নিয়ে কথা বলতে প্রস্তুত"
                                    : "Ready to discuss your project?"}
                                </span>
                              </div>

                              <Link
                                href="/portfolio"
                                className="group flex items-center gap-1.5 text-xs font-extrabold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500"
                              >
                                {t.allServices}
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </div>

                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavItem href="/store" active={pathname === "/store"}>
                {t.store}
              </NavItem>

              <NavItem href="/packages" active={pathname === "/packages"}>
                {t.packages}
              </NavItem>

              <NavItem href="/portfolio" active={pathname === "/portfolio"}>
                {t.portfolio}
              </NavItem>

              <NavItem href="/contact" active={pathname === "/contact"}>
                {t.contact}
              </NavItem>
            </div>
          </nav>

          {/* RIGHT BUTTONS & CONTROLS */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-4">
              {mounted && (
                <div className="flex items-center p-1 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-200/80 dark:border-slate-800 shadow-inner">
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="relative p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center"
                    aria-label="Toggle Theme"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={theme}
                        initial={{ y: -12, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 12, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        {theme === "dark" ? (
                          <Moon className="w-4 h-4 text-cyan-400" />
                        ) : (
                          <Sun className="w-4 h-4 text-amber-500" />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </motion.button>

                  <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-1" />

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setLanguage(!language)}
                    className="px-3 py-1.5 rounded-full text-xs font-extrabold tracking-wider text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-all"
                  >
                    {language ? "BN" : "EN"}
                  </motion.button>
                </div>
              )}

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/request-demo"
                  className="group relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-white to-sky-50 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-white rounded-full border border-sky-200/70 dark:border-slate-700 overflow-hidden hover:shadow-md hover:border-sky-300 transition-all duration-300"
                >
                  <span className="absolute top-0 right-0 w-12 h-full bg-white/60 dark:bg-white/10 skew-x-[-25deg] -translate-x-[300%] group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out" />
                  <Sparkles className="w-4 h-4 text-sky-500" />
                  <span className="text-sm font-bold tracking-wide">
                    {t.requestDemo}
                  </span>
                  <ArrowRight className="w-4 h-4 text-sky-500 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* MOBILE MENU SHEET */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-full"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="w-[300px] sm:w-[380px] p-0 border-r border-slate-200 dark:border-slate-800"
              >
                <div className="flex flex-col h-full bg-white dark:bg-slate-950">
                  <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                    <Logo />
                  </div>

                  <div className="flex-1 overflow-y-auto p-4">
                    <nav className="space-y-1">
                      <SheetClose asChild>
                        <MobileNavItem
                          href="/portfolio"
                          label={t.portfolio}
                          icon={Briefcase}
                          active={pathname === "/portfolio"}
                        />
                      </SheetClose>

                      <SheetClose asChild>
                        <MobileNavItem
                          href="/packages"
                          label={t.packages}
                          icon={Package}
                          active={pathname === "/packages"}
                        />
                      </SheetClose>

                      <SheetClose asChild>
                        <MobileNavItem
                          href="/store"
                          label={t.store}
                          icon={ShoppingBag}
                          active={pathname === "/store"}
                        />
                      </SheetClose>

                      <SheetClose asChild>
                        <MobileNavItem
                          href="/contact"
                          label={t.contact}
                          icon={Mail}
                          active={pathname === "/contact"}
                        />
                      </SheetClose>
                    </nav>

                    <div className="mt-6">
                      <div className="px-4 mb-3">
                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                          {t.services}
                        </p>
                      </div>

                      <div className="space-y-1">
                        {serviceComponents.map((service) => {
                          const Icon = service.icon;
                          return (
                            <SheetClose asChild key={service.href}>
                              <Link
                                href={service.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-cyan-500 transition-colors"
                              >
                                <Icon className="w-4 h-4" />
                                {service.title}
                              </Link>
                            </SheetClose>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                    <SheetClose asChild>
                      <Link
                        href="/request-demo"
                        className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-cyan-500 text-white font-bold shadow-lg shadow-cyan-500/20 hover:bg-cyan-600 transition-colors"
                      >
                        <Sparkles className="w-4 h-4" />
                        {t.requestDemo}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </SheetClose>
                  </div>
=======
// Main Navbar Component
export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  
  // ✅ Theme Hook & Mounted State for Hydration Fix
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = language
    ? {
        home: "হোম",
        services: "সার্ভিসেস",
        store: "স্টোর",
        packages: "প্যাকেজ",
        portfolio: "পোর্টফোলিও",
        about: "আমাদের সম্পর্কে",
        contact: "যোগাযোগ",
        login: "লগ-ইন",
        languageLabel: "Language",
        themeLabel: "থিম",
        light: "লাইট",
        dark: "ডার্ক",
        system: "সিস্টেম",
      }
    : {
        home: "Home",
        services: "Services",
        store: "Store",
        packages: "Packages",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact",
        login: "Login",
        languageLabel: "Language",
        themeLabel: "Theme",
        light: "Light",
        dark: "Dark",
        system: "System",
      };
  const serviceComponents = language ? serviceComponentsBN : serviceComponentsEN;

  return (
    <>
      {/* --- টপ নেভিগেশন বার (ডেস্কটপ এবং মোবাইল) --- */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-background/80 dark:border-border shadow-sm backdrop-blur-md transition-colors duration-300">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          
          {/* ✅ ফিক্সড লোগো (মোবাইল) */}
          <div className="flex items-center gap-2 lg:hidden">
             <Logo />
          </div>

          {/* ডেস্কটপ লোগো */}
          <div className="hidden lg:block">
            <Logo />
          </div>

          {/* --- ডেস্কটপ মেনু --- */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  active={pathname === "/"}
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/">{t.home}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>{t.services}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {serviceComponents.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  active={pathname === "/store"}
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/store" className="text-blue-600 dark:text-blue-400 font-semibold">
                    {t.store}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  active={pathname === "/packages"}
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/packages">{t.packages}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  active={pathname === "/portfolio"}
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/portfolio">{t.portfolio}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  active={pathname === "/about"}
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/about">{t.about}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  active={pathname === "/contact"}
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/contact">{t.contact}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* --- ডান পাশের আইকন গ্রুপ --- */}
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-4 lg:flex">
              
              {/* ✅ Desktop Theme Toggle Button */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full"
                  title="Toggle Theme"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              )}

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium select-none">
                  {language ? "BN" : "EN"}
                </span>
                <Switch
                  checked={language}
                  onCheckedChange={(checked) => setLanguage(Boolean(checked))}
                  aria-label="Toggle language"
                />
              </div>
              <Button
                asChild
                className="bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
              >
                <Link href="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>{t.login}</span>
                </Link>
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="flex lg:hidden"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 bg-background">
                <SheetHeader className="p-6">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Main navigation menu for the website.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-6 px-6 overflow-y-auto max-h-screen pb-20">
                  <Logo />
                  <nav className="flex flex-col gap-2">
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className="rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        {t.home}
                      </Link>
                    </SheetClose>

                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full rounded-md px-3 py-2 text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        {t.services}
                        {servicesOpen ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 pt-2 pb-1 border-l-2 border-gray-200 dark:border-gray-700 ml-3">
                          {serviceComponents.map((item) => (
                            <SheetClose asChild key={item.href}>
                              <Link
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                              >
                                {item.title}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      )}
                    </div>

                    <SheetClose asChild>
                      <Link
                        href="/store"
                        className="rounded-md px-3 py-2 text-lg font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30"
                      >
                        {t.store}
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        href="/packages"
                        className="rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {t.packages}
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/portfolio"
                        className="rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {t.portfolio}
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/about"
                        className="rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {t.about}
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/contact"
                        className="rounded-md px-3 py-2 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {t.contact}
                      </Link>
                    </SheetClose>

                    <div className="mt-4 border-t dark:border-gray-700 pt-4">
                      <SheetClose asChild>
                        <Button
                          asChild
                          className="w-full bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
                        >
                          <Link href="/login">
                            <LogIn className="mr-2 h-4 w-4" />
                            <span>{t.login}</span>
                          </Link>
                        </Button>
                      </SheetClose>
                    </div>

                    {/* ✅ Mobile Settings Section (Language & Theme) */}
                    <div className="mt-4 flex flex-col gap-3">
                      
                      {/* Language */}
                      <div className="flex items-center justify-between rounded-md border dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-900/50">
                        <span className="text-sm font-medium flex items-center gap-2">
                           {t.languageLabel}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs select-none font-bold">
                            {language ? "BN" : "EN"}
                          </span>
                          <Switch
                            checked={language}
                            onCheckedChange={(checked) =>
                              setLanguage(Boolean(checked))
                            }
                            aria-label="Toggle language"
                          />
                        </div>
                      </div>

                      {/* Theme */}
                      {mounted && (
                        <div className="flex items-center justify-between rounded-md border dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-900/50">
                            <span className="text-sm font-medium">{t.themeLabel}</span>
                            <div className="flex gap-1 bg-white dark:bg-black rounded-full border dark:border-gray-700 p-1">
                                <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className={cn("h-7 w-7 rounded-full", theme === 'light' && "bg-gray-200 text-orange-500")}
                                    onClick={() => setTheme('light')}
                                >
                                    <Sun className="h-4 w-4" />
                                </Button>
                                <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className={cn("h-7 w-7 rounded-full", theme === 'system' && "bg-gray-200 dark:bg-gray-700")}
                                    onClick={() => setTheme('system')}
                                >
                                    <Laptop className="h-4 w-4" />
                                </Button>
                                <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className={cn("h-7 w-7 rounded-full", theme === 'dark' && "bg-gray-800 text-blue-400")}
                                    onClick={() => setTheme('dark')}
                                >
                                    <Moon className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                      )}

                    </div>
                  </nav>
>>>>>>> origin/development
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
<<<<<<< HEAD
    </>
  );
}
=======

      {/* --- মোবাইল বটম নেভিগেশন বার --- */}
      <nav className="fixed bottom-0 z-50 w-full border-t bg-white dark:bg-black dark:border-gray-800 shadow-[0_-2px_6px_rgba(0,0,0,0.06)] lg:hidden">
        <div className="mx-auto flex h-16 max-w-md items-center justify-around px-4">
          <BottomNavItem
            href="/"
            label={t.home}
            icon={Home}
            active={pathname === "/"}
          />
          <BottomNavItem
            href="/portfolio"
            label={t.portfolio}
            icon={Briefcase}
            active={pathname === "/portfolio"}
          />
          <BottomNavItem
            href="/store"
            label={t.store}
            icon={ShoppingBag}
            active={pathname === "/store"}
          />
          <BottomNavItem
            href="/packages"
            label={t.packages}
            icon={Package}
            active={pathname === "/packages"}
          />
          <BottomNavItem
            href="/contact"
            label={t.contact}
            icon={Mail}
            active={pathname === "/contact"}
          />
        </div>
      </nav>
    </>
  );
}

// Dropdown ListItem Component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:hover:bg-gray-800 dark:focus:bg-gray-800",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
>>>>>>> origin/development
