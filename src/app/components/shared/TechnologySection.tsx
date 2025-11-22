'use client';
import React, { useEffect } from 'react';
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
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, useAnimation, Variants } from 'framer-motion';

export function TechnologySection() {
  // আইকনগুলোর কালার ডার্ক মোডের জন্য অ্যাডজাস্ট করা হয়েছে
  const technologies = [
    { name: 'React', icon: <Atom size={48} className="text-sky-500" /> },
    { name: 'Next.js', icon: <Code size={48} className="text-black dark:text-white" /> },
    { name: 'Node.js', icon: <Hexagon size={48} className="text-green-600 dark:text-green-500" /> },
    { name: 'Express.js', icon: <Server size={48} className="text-gray-700 dark:text-gray-300" /> },
    { name: 'MongoDB', icon: <Database size={48} className="text-green-700 dark:text-green-500" /> },
    { name: 'PostgreSQL', icon: <Database size={48} className="text-blue-700 dark:text-blue-400" /> },
    { name: 'Prisma', icon: <DatabaseZap size={48} className="text-teal-500 dark:text-teal-400" /> },
    { name: 'Docker', icon: <Container size={48} className="text-blue-500" /> },
    { name: 'Figma', icon: <Figma size={48} className="text-gray-600 dark:text-gray-300" /> },
    { name: 'Framer', icon: <Framer size={48} className="text-gray-600 dark:text-gray-300" /> },
    { name: 'Flutter', icon: <Smartphone size={48} className="text-sky-400" /> },
  ];

  const duplicatedTechnologies = [...technologies, ...technologies];
  const { language } = useLanguage();
  const controls = useAnimation();

  const marqueeVariants: Variants = {
    animate: {
      x: [0, '-50%'],
      transition: {
        ease: 'linear' as any,
        duration: 40,
        repeat: Infinity,
      },
    },
  };

  useEffect(() => {
    controls.start('animate');
  }, [controls]);

  return (
    <section className="w-full bg-blue-600 dark:bg-gray-950 py-20 sm:py-28 transition-colors duration-300">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="mb-4 rounded-full border-2 border-white/50 px-6 py-2 text-sm font-medium text-white">
          {language ? 'সফটওয়্যার ও টুলস' : 'Software & Tools'}
        </div>

        <h2 className="mb-10 text-center text-3xl font-extrabold text-white md:text-4xl">
          {language
            ? 'আমরা যেসকল টেকনোলজি ব্যবহার করে থাকি!'
            : 'Technologies We Use!'}
        </h2>

        {/* স্লাইডার কন্টেইনারে ডার্ক ব্যাকগ্রাউন্ড যুক্ত করা হয়েছে */}
        <div className="relative w-full max-w-5xl overflow-hidden rounded-full bg-white dark:bg-gray-900 p-4 shadow-lg dark:shadow-gray-900/50">
          <motion.div
            className="flex whitespace-nowrap"
            variants={marqueeVariants}
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => controls.start('animate')}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={index}
                className="mx-8 flex flex-shrink-0 items-center justify-center"
                title={tech.name}
              >
                {tech.icon}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}