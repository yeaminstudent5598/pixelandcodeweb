// src/app/store/page.tsx
import { products } from '@/lib/storeData';
import { ProductCard } from '@/app/components/store/ProductCard';
import { ShoppingBag } from 'lucide-react';

export default function StorePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-black transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-white dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
         {/* Background Glow */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">
              <ShoppingBag className="w-4 h-4" />
              <span>প্রিমিয়াম ডিজিটাল প্রোডাক্টস</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              Pixel & Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Store</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              আপনার প্রজেক্টের জন্য সেরা সলিউশনটি বেছে নিন। আমাদের তৈরি প্রতিটি টেমপ্লেট এবং স্ক্রিপ্ট প্রোডাকশন-রেডি এবং হাই-পারফর্মেন্স।
            </p>
         </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="h-full">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          {products.length === 0 && (
             <div className="text-center py-20">
                <p className="text-slate-500 dark:text-slate-400">No products found currently.</p>
             </div>
          )}
        </div>
      </section>

    </main>
  );
}