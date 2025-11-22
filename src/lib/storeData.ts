// src/lib/storeData.ts

export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  techStack: string[];
  features: string[];
  livePreviewUrl: string;
}

export const products: Product[] = [
  // ✅ ১. নতুন প্রোডাক্ট: Porer Bazar (Ghorer Bazar Style)
  {
    id: 'premium-organic-store',
    title: 'Premium Organic Food Store',
    shortDescription: 'মধু, ঘি, তেল এবং প্রিমিয়াম অর্গানিক ফুড ব্যবসার জন্য "ঘরের বাজার" স্টাইল ই-কমার্স।',
    price: 22000, // একটু বেশি ভ্যালু কারণ এটি প্রিমিয়াম লুক
    originalPrice: 30000,
    image: '/images/porer-bazar.png', // ⚠️ নোট: এই নামে একটি স্ক্রিনশট public ফোল্ডারে রাখবেন
    category: 'Premium Grocery',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React'],
    features: [
      'Premium Brand Look', // ব্র্যান্ড ভ্যালু বাড়ানোর মতো ডিজাইন
      'Ghorer Bazar Style Layout', // পপুলার স্টাইল
      'Direct Order System', // ল্যান্ডিং পেজ স্টাইলে অর্ডার
      'Trust Badges & Reviews',
      'Fast Checkout',
    ],
    livePreviewUrl: 'https://porerbarazbd.vercel.app/',
  },

  // ✅ ২. আগের প্রোডাক্ট: Amader Shodai
  {
    id: 'fresh-grocery-store',
    title: 'Fresh Grocery & Food Store',
    shortDescription: 'মাছ, মাংস, শাকসবজি এবং নিত্যপ্রয়োজনীয় কাঁচাবাজার ব্যবসার জন্য পারফেক্ট।',
    price: 20000,
    originalPrice: 28000,
    image: '/images/amader-shodai.png',
    category: 'Grocery & Food',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React'],
    features: [
      'Fresh Food Oriented Design',
      'Mobile Friendly Ordering',
      'Category: Fish, Meat, Veg',
      'Fast Loading Speed',
      'Easy Checkout System',
    ],
    livePreviewUrl: 'https://amadershodai.vercel.app/',
  },

  // ৩. ডামি প্রোডাক্ট (E-Commerce Pro)
  {
    id: '1',
    title: 'Multi-Vendor Marketplace',
    shortDescription: 'ফ্যাশন, গ্যাজেট বা বড় পরিসরের ই-কমার্স ব্যবসার জন্য মাল্টি-ভেন্ডার সলিউশন।',
    price: 300000,
    originalPrice: 500000,
    image: '/images/ecommerce.png',
    category: 'E-Commerce',
    techStack: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    features: [
      'User & Admin Dashboard',
      'Payment Gateway Integration',
      'Order Tracking System',
      'Mobile Responsive',
    ],
    livePreviewUrl: 'https://guptodhan.com',
  },

  // ৪. ডামি প্রোডাক্ট (Agency Portfolio)
//   {
//     id: '2',
//     title: 'Creative Agency Portfolio',
//     shortDescription: 'ক্রিয়েটিভ এজেন্সির জন্য মডার্ন 3D পোর্টফোলিও টেমপ্লেট।',
//     price: 8000,
//     image: '/products/portfolio.jpg',
//     category: 'Portfolio',
//     techStack: ['React', 'Three.js', 'Framer Motion'],
//     features: [
//       '3D Animations',
//       'Case Study Layouts',
//       'Contact Form Integration',
//       'SEO Optimized',
//     ],
//     livePreviewUrl: 'https://example.com',
//   },

//   // ৫. ডামি প্রোডাক্ট (Restaurant)
//   {
//     id: '3',
//     title: 'Restaurant Management',
//     shortDescription: 'রেস্টুরেন্টের অর্ডার এবং বুকিং ম্যানেজমেন্ট সিস্টেম।',
//     price: 12000,
//     originalPrice: 15000,
//     image: '/products/restaurant.jpg',
//     category: 'Business',
//     techStack: ['Next.js', 'Prisma', 'PostgreSQL'],
//     features: [
//       'Table Booking',
//       'Online Food Order',
//       'Inventory Management',
//       'POS System',
//     ],
//     livePreviewUrl: 'https://example.com',
//   },
];