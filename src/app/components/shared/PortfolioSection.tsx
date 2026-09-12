<<<<<<< HEAD
'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

// ============================================================
// PORTFOLIO DATA
// ============================================================

=======
// src/components/shared/PortfolioSection.tsx
'use client';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion ইম্পোর্ট করুন

// পোর্টফোলিও আইটেমগুলোর ডেটা
>>>>>>> origin/development
const portfolioItems = [
  {
    src: '/Demo_Work_01.jpg',
    alt: 'Gadgets Social Media Post Design',
<<<<<<< HEAD
    category: 'Social Media',
=======
>>>>>>> origin/development
  },
  {
    src: '/Demo Work 02.jpg',
    alt: 'Food Delivery Social Media Post Design',
<<<<<<< HEAD
    category: 'Branding',
=======
>>>>>>> origin/development
  },
  {
    src: '/part-03.jpg',
    alt: 'Supershop Social Media Post Design',
<<<<<<< HEAD
    category: 'Digital Ads',
  },
];

// ============================================================
// CAROUSEL SETTINGS
// ============================================================

const ITEM_W = 380;
const GAP = 32;
const ITEM_STEP = ITEM_W + GAP;
const TOTAL_W = ITEM_STEP * portfolioItems.length;

// ============================================================
// TILT CARD
// ============================================================

interface TiltCardProps {
  src: string;
  alt: string;
  category: string;
}

function TiltCard({
  src,
  alt,
  category,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotX = useSpring(
    useTransform(y, [-0.5, 0.5], [8, -8]),
    {
      stiffness: 300,
      damping: 30,
    }
  );

  const rotY = useSpring(
    useTransform(x, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 300,
      damping: 30,
    }
  );

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    x.set(
      (e.clientX - rect.left) / rect.width - 0.5
    );

    y.set(
      (e.clientY - rect.top) / rect.height - 0.5
    );
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: rotX,
        rotateY: rotY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative w-full cursor-pointer"
    >
      {/* Card */}
      <div
        className="
          relative overflow-hidden
          rounded-2xl
          border border-slate-200
          bg-white
          p-3
          shadow-xl shadow-slate-200/50
          transition-all duration-300

          dark:border-slate-800
          dark:bg-slate-900
          dark:shadow-none

          group-hover:border-blue-300
          dark:group-hover:border-blue-700
        "
        style={{
          transform: 'translateZ(0px)',
        }}
      >
        {/* Image */}
        <div
          className="
            relative
            overflow-hidden
            rounded-xl
            bg-slate-100
            dark:bg-slate-800
          "
          style={{
            transform: 'translateZ(20px)',
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={600}
            height={800}
            priority={false}
            className="
              h-[400px]
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {/* Hover Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-blue-900/50
              via-blue-900/10
              to-transparent
              opacity-0
              transition-opacity duration-300
              group-hover:opacity-100
            "
          />
        </div>

        {/* Content */}
        <div
          className="
            mt-4
            mb-2
            flex
            flex-col
            gap-1
            px-2
          "
          style={{
            transform: 'translateZ(30px)',
          }}
        >
          <div className="flex items-center justify-between">
            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-wider
                text-blue-600
                dark:text-blue-400
              "
            >
              {category}
            </span>

            <ExternalLink
              className="
                h-4
                w-4
                text-slate-400
                opacity-0
                transition-all
                duration-300

                group-hover:translate-x-0.5
                group-hover:text-blue-600
                group-hover:opacity-100
              "
            />
          </div>

          <h3
            className="
              line-clamp-1
              text-lg
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            {alt}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// PORTFOLIO SECTION
// ============================================================
=======
  },
];

// একটি আইটেমের আনুমানিক প্রস্থ (width + gap)
// 350px width + 32px (mx-4 = 1rem = 16px * 2) gap
const itemWidth = 350 + 32;
// মোট প্রস্থ (অ্যানিমেশনের জন্য)
const totalWidth = itemWidth * portfolioItems.length;
>>>>>>> origin/development

export function PortfolioSection() {
  const { language } = useLanguage();

<<<<<<< HEAD
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-white
        py-24
        sm:py-32

        dark:bg-slate-950
      "
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue Glow */}
        <div
          className="
            absolute
            left-[-10%]
            top-[20%]
            h-[40%]
            w-[40%]
            rounded-full
            bg-blue-100/50
            blur-[120px]

            dark:bg-blue-900/20
          "
        />

        {/* Noise */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.015]
            mix-blend-overlay

            dark:opacity-[0.03]
          "
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-60
            dark:opacity-40
          "
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(128,128,128,0.07) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(128,128,128,0.07) 1px,
                transparent 1px
              )
            `,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          md:px-6
        "
      >
        <div
          className="
            mx-auto
            mb-16
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
          "
        >
          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: -12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-slate-50
              px-4
              py-2
              text-sm
              font-semibold
              text-slate-700
              shadow-sm

              dark:border-slate-800
              dark:bg-slate-900/50
              dark:text-slate-300
            "
          >
            <Sparkles className="h-4 w-4 text-blue-500" />

            {language
              ? 'আমাদের পোর্টফোলিও'
              : 'Our Portfolio'}
          </motion.div>

          {/* Heading */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              mb-6
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-slate-900

              md:text-5xl

              dark:text-white
            "
          >
            {language ? (
              <>
                আমাদের তৈরি কিছু{' '}
                <span
                  className="
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    bg-clip-text
                    text-transparent
                  "
                >
                  সাফল্যের গল্প
                </span>
              </>
            ) : (
              <>
                Discover Our Recent{' '}
                <span
                  className="
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    bg-clip-text
                    text-transparent
                  "
                >
                  Success Stories
                </span>
              </>
            )}
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              max-w-2xl
              text-base
              font-medium
              leading-7
              text-slate-600

              md:text-lg

              dark:text-slate-400
            "
          >
            {language
              ? 'প্রতিটি প্রজেক্ট আমরা এমনভাবে ডিজাইন করি যা শুধুমাত্র দেখতেই সুন্দর নয়, বরং আপনার ব্যবসার প্রকৃত ফলাফল নিয়ে আসে।'
              : 'Every project is crafted professionally — not just to look beautiful, but to drive real business results and sales.'}
          </motion.p>
        </div>
      </div>

      {/* ======================================================
          CAROUSEL
      ====================================================== */}

      <div className="relative z-10 w-full overflow-hidden py-6">
        {/* Left Fade */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-20
            bg-gradient-to-r
            from-white
            to-transparent

            md:w-48

            dark:from-slate-950
          "
        />

        {/* Right Fade */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-20
            bg-gradient-to-l
            from-white
            to-transparent

            md:w-48

            dark:from-slate-950
          "
        />

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="w-full"
        >
          <motion.div
            className="flex w-max"
            animate={{
              x: paused
                ? undefined
                : [0, -TOTAL_W],
            }}
            transition={{
              ease: 'linear',
              duration: 25,
              repeat: Infinity,
            }}
          >
            {/* First Set */}

            {portfolioItems.map((item, index) => (
              <div
                key={`portfolio-${index}`}
                className="mx-4 flex-shrink-0"
                style={{
                  width: `${ITEM_W}px`,
                  perspective: '1000px',
                }}
              >
                <TiltCard
                  src={item.src}
                  alt={item.alt}
                  category={item.category}
                />
              </div>
            ))}

            {/* Second Set */}

            {portfolioItems.map((item, index) => (
              <div
                key={`portfolio-copy-${index}`}
                className="mx-4 flex-shrink-0"
                style={{
                  width: `${ITEM_W}px`,
                  perspective: '1000px',
                }}
                aria-hidden="true"
              >
                <TiltCard
                  src={item.src}
                  alt={item.alt}
                  category={item.category}
                />
              </div>
            ))}

            {/* Third Set */}

            {portfolioItems.map((item, index) => (
              <div
                key={`portfolio-copy-2-${index}`}
                className="mx-4 flex-shrink-0"
                style={{
                  width: `${ITEM_W}px`,
                  perspective: '1000px',
                }}
                aria-hidden="true"
              >
                <TiltCard
                  src={item.src}
                  alt={item.alt}
                  category={item.category}
                />
=======
  return (
    // ✅ FIXED: dark:bg-blue-950 পরিবর্তন করে dark:bg-gray-950 করা হয়েছে যাতে নীল না দেখায়
    <section className="w-full bg-blue-600 dark:bg-gray-950 py-20 sm:py-28 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <h2 className="mb-12 text-center text-3xl font-extrabold text-white md:text-4xl">
          {language
            ? 'আমাদের তৈরি কিছু বিজ্ঞাপন!'
            : 'Some of Our Created Advertisements!'}
        </h2>

        {/* অটো-স্ক্রলিং ক্যারোসেল */}
        <div
          className="w-full overflow-hidden" // মেইন কন্টেইনার
        >
          {/* অ্যানিমেটেড কন্টেন্ট */}
          <motion.div
            className="flex" // ফ্লেক্স কন্টেইনার
            animate={{
              x: [0, -totalWidth], // 0 থেকে মোট প্রস্থ (-totalWidth) পর্যন্ত সরবে
            }}
            transition={{
              ease: 'linear', // রৈখিক গতি
              duration: 20, // অ্যানিমেশনের মোট সময় (সেকেন্ডে)
              repeat: Infinity, // অসীমভাবে চলতে থাকবে
            }}
          >
            {/* মূল ইমেজগুলো */}
            {portfolioItems.map((item, index) => (
              <div
                key={`item-${index}`}
                className="mx-4 flex-shrink-0"
                style={{ width: '350px' }} // প্রতিটি আইটেমের প্রস্থ
              >
                {/* কার্ডের ব্যাকগ্রাউন্ড ডার্ক মোডে সামান্য হালকা রাখা হয়েছে যাতে বোঝা যায় */}
                <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-lg">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}

            {/* লুপের জন্য ডুপ্লিকেট করা ইমেজগুলো */}
            {portfolioItems.map((item, index) => (
              <div
                key={`duplicate-${index}`}
                className="mx-4 flex-shrink-0"
                style={{ width: '350px' }}
                aria-hidden="true" // Screen reader থেকে হাইড
              >
                <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-lg">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
>>>>>>> origin/development
              </div>
            ))}
          </motion.div>
        </div>
      </div>
<<<<<<< HEAD

      {/* ======================================================
          CTA
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-16
          flex
          w-full
          max-w-7xl
          justify-center
          px-4
          md:px-6
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
        >
          <Link
            href="/portfolio"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-transparent
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              px-8
              py-3.5
              text-base
              font-bold
              text-white
              shadow-lg
              shadow-blue-600/25
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:from-blue-700
              hover:to-indigo-700
              hover:shadow-blue-600/40
            "
          >
            {language
              ? 'সম্পূর্ণ পোর্টফোলিও দেখুন'
              : 'View Full Portfolio'}

            <ArrowRight
              className="
                h-5
                w-5
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// IMPORTANT:
// BOTH EXPORTS ARE PROVIDED
// ============================================================

export default PortfolioSection;
=======
    </section>
  );
}
>>>>>>> origin/development
