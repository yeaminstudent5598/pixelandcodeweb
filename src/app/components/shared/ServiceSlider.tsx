"use client"

import React, { useRef, useEffect, useState } from 'react';
import { Home, Laptop, Paintbrush, Megaphone, Video, Wand2, ArrowUpRight } from 'lucide-react';

export  const services = [
  { 
    title: "Studio Rent Facilities", 
    icon: Home,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    title: "Web Design & Development", 
    icon: Laptop,
    color: "from-blue-500 to-indigo-500"
  },
  { 
    title: "Graphics Design", 
    icon: Paintbrush,
    color: "from-blue-500 to-purple-500"
  },
  { 
    title: "Digital Marketing", 
    icon: Megaphone,
    color: "from-blue-500 to-cyan-500"
  },
  { 
    title: "Video Production", 
    icon: Video,
    color: "from-blue-500 to-indigo-500"
  },
  { 
    title: "Video Editing", 
    icon: Wand2,
    color: "from-blue-500 to-purple-500"
  },
];

export default function ServiceSlider() {
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="mb-4 text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          আমরা কী করি
        </h2>
        <p className="mb-12 text-lg text-gray-400 text-center max-w-2xl mx-auto">
          আমরা আপনার ব্যবসাকে পরবর্তী স্তরে নিয়ে যেতে প্রস্তুত।
        </p>
      </div>

      {/* 3D Carousel Container */}
      <div 
        ref={carouselRef}
        className="relative w-full overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
        style={{ 
          perspective: '1500px',
          perspectiveOrigin: 'center center'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="flex gap-8 px-[10%] py-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-[380px]"
              style={{
                transform: 'rotateY(-15deg) rotateX(5deg)',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.5s ease-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(50px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotateY(-15deg) rotateX(5deg) translateZ(0px) scale(1)';
              }}
            >
              {/* Card with Glow Effect */}
              <div className="relative h-[320px] rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 p-8 overflow-hidden">
                {/* Animated Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-auto text-white group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Get Service Button */}
                  <button className="mt-auto flex items-center gap-2 text-gray-400 group-hover:text-blue-400 font-medium text-lg transition-all duration-300 group-hover:gap-4">
                    Get Service
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}