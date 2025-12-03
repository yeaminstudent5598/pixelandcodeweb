// File Path: D:\yeamin student\PixelandCode Web\pixelandcode\src\app\components\shared\SplineModel.tsx

"use client";

import React, { Suspense, useEffect, useState, useRef } from 'react';

interface SplineProps {
  scene: string;
  className?: string;
}

const SplineModel: React.FC<SplineProps> = ({ scene, className }) => {
  const [SplineComponent, setSplineComponent] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !SplineComponent) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [SplineComponent]);

  // Load Spline only when visible
  useEffect(() => {
    if (!isVisible || SplineComponent) return;

    // Add delay to prevent HMR issues
    const timer = setTimeout(() => {
      import('@splinetool/react-spline')
        .then((mod) => {
          setSplineComponent(() => mod.default);
          setLoadError(false);
        })
        .catch((error) => {
          console.warn('Spline loading failed:', error);
          setLoadError(true);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [isVisible, SplineComponent]);

  // Error fallback
  if (loadError) {
    return (
      <div ref={containerRef} className={`flex items-center justify-center ${className}`}>
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            3D Model temporarily unavailable
          </p>
        </div>
      </div>
    );
  }

  // Loading state
  if (!isVisible || !SplineComponent) {
    return (
      <div ref={containerRef} className={`flex items-center justify-center ${className}`}>
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Loading 3D...</p>
        </div>
      </div>
    );
  }

  // Render Spline component
  return (
    <Suspense
      fallback={
        <div className={`flex items-center justify-center ${className}`}>
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      }
    >
      <SplineComponent
        scene={scene}
        className={className}
        onLoad={() => console.log('✅ Spline loaded')}
        onError={(error: any) => {
          console.warn('Spline render error:', error);
          setLoadError(true);
        }}
      />
    </Suspense>
  );
};

export default SplineModel;