// src/app/components/store/ProductCard.tsx
'use client'; // Client Component for Language Context

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/storeData';
import { Button } from '@/components/ui/button';
import { Eye, ExternalLink, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { language } = useLanguage(); // Language Hook
  
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  // Language variables
  const title = language ? product.titleBn : product.titleEn;
  const description = language ? product.shortDescriptionBn : product.shortDescriptionEn;
  const category = language ? product.categoryBn : product.categoryEn;

  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 dark:hover:shadow-blue-900/20">
      
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
            {product.isPopular && (
            <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-[10px] font-bold text-white shadow-lg">
                <Zap className="h-3 w-3 fill-white" /> {language ? 'জনপ্রিয়' : 'POPULAR'}
            </div>
            )}
            {discount > 0 && (
            <div className="rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold text-white shadow-md">
                -{discount}% OFF
            </div>
            )}
        </div>

        {product.image ? (
           <Image
             src={product.image}
             alt={title}
             fill
             className="object-cover transition-transform duration-700 group-hover:scale-110"
           />
        ) : (
          <div className="flex h-full items-center justify-center">
             <span className="text-slate-400">No Image</span>
          </div>
        )}

        {/* Overlay Action Buttons */}
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-3 backdrop-blur-[2px]">
           <Link href={`/store/${product.id}`}>
             <Button variant="secondary" className="rounded-full h-12 w-12 p-0 bg-white text-black hover:bg-slate-200 shadow-lg">
               <Eye className="h-5 w-5" />
             </Button>
           </Link>
           <a href={product.livePreviewUrl} target="_blank" rel="noopener noreferrer">
             <Button className="rounded-full h-12 w-12 p-0 bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
               <ExternalLink className="h-5 w-5" />
             </Button>
           </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-md bg-blue-50 dark:bg-blue-900/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {category}
          </span>
          <div className="flex flex-col items-end">
             {product.originalPrice && (
               <span className="text-xs text-slate-400 line-through">৳{product.originalPrice.toLocaleString()}</span>
             )}
             <span className="text-lg font-bold text-slate-900 dark:text-white">
               ৳{product.price.toLocaleString()}
             </span>
          </div>
        </div>

        <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <Link href={`/store/${product.id}`}>{title}</Link>
        </h3>
        
        <p className="mb-4 text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Preview */}
        <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
           {product.techStack.slice(0,3).map(tech => (
             <span key={tech} className="text-[10px] font-medium text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
               {tech}
             </span>
           ))}
           {product.techStack.length > 3 && (
             <span className="text-[10px] font-medium text-slate-400 px-1 py-1">+More</span>
           )}
        </div>
      </div>
    </div>
  );
}