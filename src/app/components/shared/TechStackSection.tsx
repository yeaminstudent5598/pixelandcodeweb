'use client';

import { Code, Cpu, Database, Figma, Palette, Server, Smartphone } from 'lucide-react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect } from 'react';

const techStack = [
  { icon: <Code className="h-10 w-10 text-blue-500" />, name: 'Next.js' },
  { icon: <Palette className="h-10 w-10 text-pink-500" />, name: 'Tailwind CSS' },
  { icon: <Figma className="h-10 w-10 text-purple-500" />, name: 'Figma' },
  { icon: <Database className="h-10 w-10 text-green-500" />, name: 'MongoDB' },
  { icon: <Server className="h-10 w-10 text-gray-700" />, name: 'Node.js' },
  { icon: <Cpu className="h-10 w-10 text-orange-500" />, name: 'Framer Motion' },
  { icon: <Smartphone className="h-10 w-10 text-sky-400" />, name: 'Flutter' }, // 👈 added Flutter
];

export function TechStackSection() {
  const { language } = useLanguage();
  const controls = useAnimation();

  // Infinite left scroll animation
  const marqueeVariants: Variants = {
    animate: {
      x: ['0%', '-50%'],
      transition: {
        ease: 'linear',
        duration: 40,
        repeat: Infinity,
      },
    },
  };

  useEffect(() => {
    controls.start('animate');
  }, [controls]);

  // Duplicate techs to make the loop seamless
  const duplicatedTechs = [...techStack, ...techStack];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 overflow-hidden">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          {language ? 'আমরা যেসকল টেকনোলজি ব্যবহার করি' : 'Technologies We Use'}
        </motion.h2>

        {/* Continuous left scroll */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            variants={marqueeVariants}
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => controls.start('animate')}>
            {duplicatedTechs.map((tech, index) => (
              <motion.div
                key={index}
                className="mx-6 flex min-w-[140px] flex-col items-center justify-center rounded-lg border bg-white p-6 shadow-sm"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}>
                {tech.icon}
                <p className="mt-3 text-center font-semibold">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
