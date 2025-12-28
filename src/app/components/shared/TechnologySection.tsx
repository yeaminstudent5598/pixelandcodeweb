'use client';

import React, { useEffect, useState } from 'react';
import {
  Figma,
  Framer,
  Code,
  Atom,
  Hexagon,
  Server,
  Database,
  DatabaseZap,
  Container,
  Smartphone,
  Cpu,
  Globe,
  Layers,
  LayoutTemplate,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

// টেকনোলজি ডাটা টাইপ
interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export function TechnologySection() {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  // টেকনোলজি লিস্ট - আরও কিছু আইকন এবং স্পেসিফিক কালার কোড সহ
  const technologies: TechItem[] = [
    { name: 'React', icon: <Atom size={40} />, color: '#0EA5E9' }, // Sky-500
    { name: 'Next.js', icon: <Code size={40} />, color: '#ffffff' }, // White (managed via class for light/dark)
    { name: 'Node.js', icon: <Hexagon size={40} />, color: '#16A34A' }, // Green-600
    { name: 'Express', icon: <Server size={40} />, color: '#9CA3AF' }, // Gray-400
    { name: 'MongoDB', icon: <Database size={40} />, color: '#22C55E' }, // Green-500
    { name: 'PostgreSQL', icon: <Database size={40} />, color: '#3B82F6' }, // Blue-500
    { name: 'Prisma', icon: <DatabaseZap size={40} />, color: '#14B8A6' }, // Teal-500
    { name: 'Docker', icon: <Container size={40} />, color: '#0EA5E9' }, // Blue-500
    { name: 'Figma', icon: <Figma size={40} />, color: '#F472B6' }, // Pink-400
    { name: 'Framer', icon: <Framer size={40} />, color: '#ffffff' }, // White
    { name: 'Flutter', icon: <Smartphone size={40} />, color: '#38BDF8' }, // Sky-400
    { name: 'TypeScript', icon: <Cpu size={40} />, color: '#3B82F6' }, // Blue-600
    { name: 'Tailwind', icon: <LayoutTemplate size={40} />, color: '#06B6D4' }, // Cyan-500
  ];

  // ইনফিনিটি লুপের জন্য অ্যারে ডুপ্লিকেট করা
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 py-24 sm:py-32">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন (Gradient Blobs) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* হেডার সেকশন */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full ring-1 ring-blue-500/20"
          >
            {language ? 'টুলস ও টেকনোলজি' : 'Tools & Technologies'}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            {language ? (
              <>
                আমরা ব্যবহার করি <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">আধুনিক প্রযুক্তি</span>
              </>
            ) : (
              <>
                Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Modern Tech</span>
              </>
            )}
          </motion.h2>

          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl"
          >
            {language 
              ? 'সেরা পারফরম্যান্স এবং স্কেলেবিলিটি নিশ্চিত করতে আমরা ইন্ডাস্ট্রির লেটেস্ট টুলস ব্যবহার করি।'
              : 'We leverage the latest industry-standard tools to ensure top-notch performance and scalability.'}
          </motion.p>
        </div>

        {/* স্লাইডার কন্টেইনার */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* বাম এবং ডান পাশের ফেইড মাস্ক (Fade Mask) - প্রফেশনাল লুকের জন্য */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-20 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-20 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />

          {/* মারকিউ/স্লাইডার */}
          <div className="flex overflow-hidden py-10">
            <motion.div
              className="flex gap-8 items-center"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                ease: 'linear',
                duration: 40, // স্পিড কন্ট্রোল
                repeat: Infinity,
                repeatType: "loop",
              }}
              // হোভার করলে এনিমেশন পজ হবে না, তবে স্লো হবে বা ইউজার চাইলে style দিয়ে কন্ট্রোল করতে পারে। 
              // এখানে সিম্পল রাখার জন্য continuous রাখা হলো।
            >
              {duplicatedTechnologies.map((tech, index) => (
                <TechCard key={`${tech.name}-${index}`} tech={tech} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// আলাদা কার্ড কম্পোনেন্ট কোড ক্লিনার রাখার জন্য
function TechCard({ tech }: { tech: TechItem }) {
  return (
    <div className="group relative flex flex-col items-center justify-center p-6 w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 cursor-default">
      {/* আইকন কন্টেইনার */}
      <div 
        className="mb-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
        style={{ color: tech.name === 'Next.js' || tech.name === 'Framer' ? undefined : tech.color }} // Next.js/Framer এর জন্য ডিফল্ট টেক্সট কালার ক্লাস ব্যবহার হবে
      >
        <span className={`
          ${(tech.name === 'Next.js' || tech.name === 'Framer') ? 'text-slate-900 dark:text-white' : ''} 
          filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100
        `}>
          {tech.icon}
        </span>
      </div>
      
      {/* টেকনোলজি নাম */}
      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
        {tech.name}
      </span>

      {/* গ্লো এফেক্ট (Hover Glow) */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: tech.color }}
      />
    </div>
  );
}