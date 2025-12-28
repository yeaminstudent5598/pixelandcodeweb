'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { LucideIcon } from 'lucide-react';

import {
  Code,
  Cpu,
  Database,
  Figma,
  Server,
  Smartphone,
  Zap,
  Box,
  GitBranch,
  Cloud,
  ShieldCheck,
  Layers,
} from 'lucide-react';

// ==========================================
// 🛠️ Tech data (TYPE SAFE)
// ==========================================
type TechItem = {
  icon: LucideIcon;
  name: string;
  color: string;
};

const techStack: TechItem[] = [
  { icon: Code, name: 'Next.js', color: 'hover:text-black dark:hover:text-white' },
  { icon: Zap, name: 'Tailwind CSS', color: 'hover:text-cyan-500' },
  { icon: Cpu, name: 'React', color: 'hover:text-blue-500' },
  { icon: Database, name: 'MongoDB', color: 'hover:text-green-500' },
  { icon: Server, name: 'Node.js', color: 'hover:text-green-600' },
  { icon: Figma, name: 'Figma', color: 'hover:text-purple-500' },
  { icon: Smartphone, name: 'Flutter', color: 'hover:text-blue-400' },
  { icon: Layers, name: 'Framer Motion', color: 'hover:text-pink-500' },
  { icon: Cloud, name: 'Cloud Server', color: 'hover:text-orange-500' },
  { icon: GitBranch, name: 'Version Control', color: 'hover:text-slate-700 dark:hover:text-slate-300' },
];

// ==========================================
// 🧩 Tech Card Component
// ==========================================
const TechCard = ({ item }: { item: TechItem }) => {
  const Icon = item.icon;

  return (
    <div
      className="group flex items-center gap-3 min-w-[160px] md:min-w-[180px] px-5 py-4 mx-3
      bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl
      transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5"
    >
      {/* Icon */}
      <div className={`w-6 h-6 text-slate-400 transition-colors duration-300 ${item.color}`}>
        <Icon className="w-full h-full" />
      </div>

      {/* Name */}
      <p className="font-semibold text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
        {item.name}
      </p>
    </div>
  );
};

// ==========================================
// 🚀 Main Component
// ==========================================
export function TechStackSection() {
  const { language } = useLanguage();

  const duplicatedTechs = [...techStack, ...techStack, ...techStack];
  const reversedTechs = [...duplicatedTechs].reverse();

  return (
    <section className="relative py-24 bg-slate-50/50 dark:bg-black overflow-hidden border-t border-slate-200 dark:border-slate-900">

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold uppercase mb-4">
            <Box className="w-3.5 h-3.5" />
            {language ? 'আমাদের টেকনোলজি' : 'Our Technology'}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language ? (
              <>আধুনিক ও স্কেলেবল <span className="text-blue-600">সফটওয়্যার আর্কিটেকচার</span></>
            ) : (
              <>Modern & Scalable <span className="text-blue-600">Software Architecture</span></>
            )}
          </h2>

          <p className="text-slate-500 dark:text-slate-400 text-lg">
            {language
              ? 'আমরা ব্যবহার করি বিশ্বের সবচেয়ে নির্ভরযোগ্য এবং দ্রুতগতির ফ্রেমওয়ার্কসমূহ।'
              : "We build products using the world's most reliable frameworks."}
          </p>
        </div>

        {/* Scrolling Rows */}
        <div className="relative">

          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-black to-transparent z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-black to-transparent z-20" />

          <div className="flex flex-col gap-6">

            {/* Row 1 */}
            <div className="flex overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: ['0%', '-33.33%'] }}
                transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
              >
                {duplicatedTechs.map((tech, i) => (
                  <TechCard key={`row1-${i}`} item={tech} />
                ))}
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="flex overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: ['-33.33%', '0%'] }}
                transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
              >
                {reversedTechs.map((tech, i) => (
                  <TechCard key={`row2-${i}`} item={tech} />
                ))}
              </motion.div>
            </div>

          </div>
        </div>

        {/* Bottom Badge */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2 text-sm text-slate-400 bg-white/50 dark:bg-slate-900/50 px-4 py-2 rounded-full border backdrop-blur">
            <ShieldCheck className="w-4 h-4" />
            {language ? 'নিরাপদ এবং অপটিমাইজড কোডবেস' : 'Secure & Optimized Codebase'}
          </div>
        </div>

      </div>
    </section>
  );
}
