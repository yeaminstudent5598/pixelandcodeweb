// src/app/store/page.tsx
import { products } from '@/lib/storeData';
import { ProductCard } from '@/app/components/store/ProductCard';

export default function StorePage() {
  return (
    <main className="min-h-screen bg-gray-50/50 dark:bg-gray-950 py-8 sm:py-20 transition-colors duration-300">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-8 sm:mb-16 text-center">
        <h1 className="mb-2 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
          Pixel & Code <span className="text-blue-600 dark:text-blue-500">Store</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xs sm:text-base text-gray-600 dark:text-gray-400">
          আমাদের টিমের তৈরি হাই-কোয়ালিটি রেডিমেড ওয়েবসাইট। 
          আপনার প্রজেক্টের জন্য সেরা সলিউশনটি বেছে নিন।
        </p>
      </div>

      {/* Products Grid */}
      {/* ✅ মোবাইলে প্যাডিং কম (px-2) এবং গ্যাপ কম (gap-3) যাতে কার্ডগুলো বড় দেখায় */}
      <div className="container mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}