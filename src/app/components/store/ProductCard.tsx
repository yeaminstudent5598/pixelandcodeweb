// src/app/components/store/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/storeData';
import { Button } from '@/components/ui/button';
import { Eye, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-gray-900/50">
      
      {/* Image Section */}
      {/* ✅ মোবাইলে হাইট কম (h-32), ডেস্কটপে বেশি (h-56) */}
      <div className="relative h-32 sm:h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        {product.image ? (
           <div className="relative h-full w-full">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
               src={product.image} 
               alt={product.title} 
               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
             />
           </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
             <span className="text-xl sm:text-4xl font-bold text-gray-200 dark:text-gray-700">Image</span>
          </div>
        )}
        
        {/* Sale Badge: মোবাইলে ছোট */}
        {product.originalPrice && (
          <span className="absolute left-2 top-2 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white shadow-md sm:left-3 sm:top-3 sm:rounded-full sm:px-3 sm:py-1 sm:text-xs">
            SALE
          </span>
        )}
      </div>

      {/* Content Section */}
      {/* ✅ মোবাইলে প্যাডিং খুব কম (p-2.5) */}
      <div className="flex flex-1 flex-col p-2.5 sm:p-5">
        
        {/* Category & Price */}
        <div className="mb-1 sm:mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <span className="w-fit rounded bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 sm:rounded-full sm:px-2">
            {product.category}
          </span>
          <span className="text-xs sm:text-lg font-bold text-gray-900 dark:text-white">
            ৳{product.price.toLocaleString()}
          </span>
        </div>

        {/* Title: মোবাইলে ছোট এবং ২ লাইনের বেশি হবে না */}
        <h3 className="mb-2 text-xs sm:text-xl font-bold text-gray-800 dark:text-gray-100 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {product.title}
        </h3>
        
        {/* Description: ✅ মোবাইলে হাইড করা হয়েছে (hidden), শুধু পিসিতে দেখাবে (sm:block) */}
        <p className="mb-4 hidden line-clamp-2 text-sm text-gray-600 dark:text-gray-400 sm:block">
          {product.shortDescription}
        </p>

        {/* Action Buttons */}
        {/* ✅ মোবাইলে বাটনগুলো নিচে নিচে (flex-col), পিসিতে পাশাপাশি (sm:flex-row) */}
        <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:gap-3">
          
          {/* Details Button */}
          <Button asChild variant="outline" className="h-8 w-full flex-1 border-gray-300 dark:border-gray-700 text-[10px] sm:text-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300 sm:h-10">
            <Link href={`/store/${product.id}`}>
              <Eye className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" /> Details
            </Link>
          </Button>
          
          {/* Demo Button */}
          <Button asChild className="h-8 w-full flex-1 bg-blue-600 text-[10px] text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 sm:text-sm sm:h-10">
            <a href={product.livePreviewUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" /> Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}