// src/components/shared/TeamSection.tsx
'use client';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

// টিম মেম্বারদের ডেটা
const teamMembers = [
  {
    imgSrc: '/Yeamin.png', // ❗️ আপনার নিজের ছবি দিন
    name: 'Yeamin',
    role: 'CEO & Backend Developer',
  },
  {
    imgSrc: '/Sifat.jpg', // ❗️ আপনার নিজের ছবি দিন
    name: 'Sifat Hossain',
    role: 'Graphics Desinger',
  },
  {
    imgSrc: '/Naeem.jpg', // ❗️ আপনার নিজের ছবি দিন
    name: 'Naeem Majumder',
    role: 'Backend Developer',
  },
  {
    imgSrc: '/Sabbir_Hossain.jpg', // ❗️ আপনার নিজের ছবি দিন
    name: 'Sabbir Hossain',
    role: 'Frontend Developer',
  },
  {
    imgSrc: '/Moin_Uddin.jpg', // ❗️ আপনার নিজের ছবি দিন
    name: 'Moin Uddin',
    role: 'Frontend Developer',
  },
  {
    imgSrc: '/Aysa_Akter.jpg', // ❗️ আপনার নিজের ছবি দিন
    name: 'Aysha Akter Urmi',
    role: 'Frontend Developer',
  },
  {
    imgSrc: '/Iftiak_Hossain.webp', // ❗️ আপনার নিজের ছবি দিন
    name: 'Iftiak Hossain',
    role: 'UI/UX Desinger',
  },
  {
    imgSrc: '/Mizan.jpg', // ❗️ আপনার নিজের ছবি দিন
    name: 'Mizan',
    role: 'Video Editing',
  },
];

// 3D কার্ড কম্পোনেন্ট
const TeamCard3D = ({ member }: { member: typeof teamMembers[0] }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * 32.5;
    const mouseY = (e.clientY - rect.top) * 32.5;

    const rX = (mouseY / height - 32.5 / 2) * -1;
    const rY = (mouseX / width - 32.5 / 2) * 1;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className="group relative flex flex-col items-center rounded-2xl bg-white dark:bg-gray-900 p-6 text-center shadow-lg transition-all duration-200 hover:shadow-2xl dark:border dark:border-gray-800"
    >
      <div
        style={{ transform: 'translateZ(50px)' }}
        className="relative mb-4 h-36 w-36 overflow-hidden rounded-full border-4 border-white dark:border-gray-700 shadow-md"
      >
        <Image
          src={member.imgSrc}
          alt={`Profile picture of ${member.name}`}
          width={144}
          height={144}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3
        style={{ transform: 'translateZ(30px)' }}
        className="text-xl font-bold text-gray-900 dark:text-white"
      >
        {member.name}
      </h3>
      <p
        style={{ transform: 'translateZ(20px)' }}
        className="mt-1 text-base text-gray-500 dark:text-gray-400"
      >
        {member.role}
      </p>
    </motion.div>
  );
};

export function TeamSection() {
  const { language } = useLanguage();
  return (
    <section className="w-full bg-gradient-to-br from-white via-pink-50 to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-red-950/20 py-20 sm:py-28 transition-colors duration-300 perspective-1000">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full border border-red-200 bg-white dark:bg-gray-900 dark:border-red-900 px-6 py-2 text-sm font-medium text-red-500 dark:text-red-400 shadow-sm">
            {language ? 'টিম মেম্বার' : 'Team Members'}
          </div>

          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white md:text-4xl">
            {language
              ? 'আপনাদের সঠিক সেবা নিশ্চিত করার পিছনের হিরো যারা!!'
              : 'The Heroes Behind Ensuring Your Perfect Service!!'}
          </h2>
        </div>

        {/* টিম মেম্বারদের কার্ড (3D Grid) */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="perspective-1000">
              <TeamCard3D member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}