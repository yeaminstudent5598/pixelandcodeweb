// src/lib/storeData.ts

export interface Product {
  id: string;
<<<<<<< HEAD
  titleEn: string;
  shortDescriptionEn: string;
  featuresEn: string[];
  categoryEn: string;
  titleBn: string;
  shortDescriptionBn: string;
  featuresBn: string[];
  categoryBn: string;
  price: number; // In USD
  originalPrice?: number; // In USD
  image: string; 
  fullImage?: string; 
  appImage?: string;
  techStack: string[];
  livePreviewUrl: string;
  isPopular?: boolean;
}

export const products: Product[] = [
  {
    id: 'premium-organic-store',
    // EN
    titleEn: 'Premium Organic Food Store',
    shortDescriptionEn: 'A high-converting e-commerce solution tailored for organic food, honey, and natural products with a premium brand layout.',
    featuresEn: ['Premium Brand Aesthetics', 'Direct Order Landing Pages', 'Mobile-Optimized Checkout', 'SEO & Performance Optimized', 'Lightning Fast Speed'],
    categoryEn: 'E-Commerce',
    
    // BN
    titleBn: 'প্রিমিয়াম অর্গানিক ফুড স্টোর',
    shortDescriptionBn: 'মধু, ঘি এবং ন্যাচারাল প্রোডাক্ট ব্যবসার জন্য একটি হাই-কনভার্টিং ও প্রিমিয়াম ই-কমার্স সলিউশন।',
    featuresBn: ['প্রিমিয়াম ব্র্যান্ড ডিজাইন', 'ডাইরেক্ট অর্ডার ল্যান্ডিং পেজ', 'মোবাইল ফ্রেন্ডলি চেকআউট', 'এসইও অপ্টিমাইজড', 'সুপার ফাস্ট লোডিং'],
    categoryBn: 'ই-কমার্স',

    price: 199,
    originalPrice: 299,
    image: 'https://i.ibb.co.com/ycy6z49g/porerbarazbd-vercel-app.jpg',
    techStack: ['Next.js', 'Tailwind', 'Framer Motion'],
    livePreviewUrl: 'https://porerbarazbd.vercel.app/',
    isPopular: true,
  },
  {
    id: 'fresh-grocery-store',
    // EN
    titleEn: 'Fresh Grocery & Supermart',
    shortDescriptionEn: 'A complete end-to-end digital storefront for fresh produce, meat, and daily grocery businesses.',
    featuresEn: ['Smart Category Filtering', 'Advanced Cart & Wishlist', 'Customer Dashboard', 'Comprehensive Admin Panel', 'SMS Notifications'],
    categoryEn: 'Grocery',

    // BN
    titleBn: 'ফ্রেশ গ্রোসারি ও সুপারমার্ট',
    shortDescriptionBn: 'তাজা শাকসবজি, মাছ-মাংস এবং নিত্যপ্রয়োজনীয় কাঁচাবাজার ব্যবসার জন্য একটি স্বয়ংসম্পূর্ণ ডিজিটাল স্টোরফ্রন্ট।',
    featuresBn: ['স্মার্ট ক্যাটাগরি ফিল্টারিং', 'অ্যাডভান্সড কার্ট ও উইশলিস্ট', 'কাস্টমার ড্যাশবোর্ড', 'পাওয়ারফুল অ্যাডমিন প্যানেল', 'এসএমএস নোটিফিকেশন'],
    categoryBn: 'গ্রোসারি',

    price: 179,
    originalPrice: 249,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB'],
    livePreviewUrl: 'https://pro-ecommerce-iota.vercel.app/',
  },
  {
    id: 'multi-vendor-marketplace',
    // EN
    titleEn: 'Multi-Vendor Marketplace (Web + App)',
    shortDescriptionEn: 'An enterprise-grade, Amazon-style multi-vendor platform for large-scale e-commerce, complete with iOS & Android apps.',
    featuresEn: ['Dedicated Vendor Dashboard', 'Advanced Search & Filters', 'Real-time Order Tracking', 'Native Android & iOS Apps', 'Rating & Review System'],
    categoryEn: 'Marketplace',
    
    // BN
    titleBn: 'মাল্টি-ভেন্ডর মার্কেটপ্লেস (ওয়েব + অ্যাপ)',
    shortDescriptionBn: 'অ্যামাজন বা দারাজের মতো বড় পরিসরের ই-কমার্স ব্যবসার জন্য এন্টারপ্রাইজ-গ্রেড মাল্টি-ভেন্ডর প্ল্যাটফর্ম (মোবাইল অ্যাপসহ)।',
    featuresBn: ['ডেডিকেটেড ভেন্ডর ড্যাশবোর্ড', 'অ্যাডভান্সড সার্চ ও ফিল্টার', 'রিয়েল-টাইম অর্ডার ট্র্যাকিং', 'অ্যান্ড্রয়েড ও আইওএস অ্যাপ', 'রেটিং ও রিভিউ সিস্টেম'],
    categoryBn: 'মার্কেটপ্লেস',
    
    price: 2999,
    originalPrice: 3999,
    image: 'https://i.ibb.co.com/PG8vqsBb/www-guptodhandigital-com-3.png',
    fullImage: 'https://i.ibb.co.com/9kv5dMfQ/www-guptodhandigital-com-4.png',
    appImage: 'https://i.ibb.co.com/6cdrV73V/Whats-App-Image-2025-12-28-at-1-26-58-PM.jpg',
    techStack: ['Next.js', 'MongoDB', 'Mongoose', 'SSLCommerz', 'Flutter', 'Tailwind CSS'],
    livePreviewUrl: 'https://guptodhan.com',
    isPopular: true,
  },
  {
    id: 'parcel-go-delivery',
    // EN
    titleEn: 'ParcelGo - Logistics & Delivery SaaS',
    shortDescriptionEn: 'A high-performance logistics and delivery management system featuring real-time tracking and automated workflows.',
    featuresEn: ['Live GPS Tracking', 'Merchant & Rider Panels', 'Smart Order Management', 'Role-based Authentication', 'Automated Invoicing', 'Analytics Dashboard'],
    categoryEn: 'Logistics & SaaS',

    // BN
    titleBn: 'পার্সেলগো - লজিস্টিকস ও ডেলিভারি স্যাস (SaaS)',
    shortDescriptionBn: 'রিয়েল-টাইম ট্র্যাকিং এবং অটোমেটেড ওয়ার্কফ্লো সমৃদ্ধ একটি হাই-পারফরম্যান্স ডেলিভারি ম্যানেজমেন্ট সিস্টেম।',
    featuresBn: ['লাইভ জিপিএস ট্র্যাকিং', 'মার্চেন্ট ও রাইডার প্যানেল', 'স্মার্ট অর্ডার ম্যানেজমেন্ট', 'রোল-বেসড সিকিউরিটি', 'অটোমেটেড ইনভয়েসিং', 'অ্যানালিটিক্স ড্যাশবোর্ড'],
    categoryBn: 'লজিস্টিকস ও সফটওয়্যার',

    price: 249,
    originalPrice: 349,
    image: 'https://i.ibb.co.com/n8fJwBFw/parcel-go-vercel-app.png', 
    fullImage: 'https://i.ibb.co.com/QvrNtWZp/parcel-go-vercel-app-1.png',
    techStack: ["React Js", 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB', 'Mongoose', 'shadcn UI', 'Framer Motion'],
    livePreviewUrl: 'https://parcel-go.vercel.app/',
    isPopular: true,
  },
  {
    id: 'agency-portfolio-pro',
    // EN
    titleEn: 'Creative Agency Portfolio Pro',
    shortDescriptionEn: 'A stunning, highly-animated portfolio website template crafted specifically for digital agencies and creative freelancers.',
    featuresEn: ['GSAP Smooth Animations', 'Dynamic Project Showcase', 'Integrated Contact Form', 'Seamless Dark/Light Mode', 'Optimized Performance'],
    categoryEn: 'Portfolio',

    // BN
    titleBn: 'ক্রিয়েটিভ এজেন্সি পোর্টফোলিও প্রো',
    shortDescriptionBn: 'ডিজিটাল এজেন্সি এবং ক্রিয়েটিভ ফ্রিল্যান্সারদের জন্য বিশেষভাবে তৈরি একটি দৃষ্টিনন্দন ও স্মুথ অ্যানিমেটেড পোর্টফোলিও টেমপ্লেট।',
    featuresBn: ['GSAP স্মুথ অ্যানিমেশন', 'ডায়নামিক প্রজেক্ট শোকেস', 'ইন্টিগ্রেটেড কন্টাক্ট ফর্ম', 'সিমলেস ডার্ক/লাইট মোড', 'অপ্টিমাইজড পারফরম্যান্স'],
    categoryBn: 'পোর্টফোলিও',

    price: 149,
    originalPrice: 199,
    image: 'https://i.ibb.co.com/3y9zQvHY/www-modifydigital-agency.png',
    techStack: ['React', 'GSAP', 'Tailwind'],
    livePreviewUrl: 'https://www.modifydigital.agency/',
  },
=======
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
    image: '/images/porer-bazar.jpg', // ⚠️ নোট: এই নামে একটি স্ক্রিনশট public ফোল্ডারে রাখবেন
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
    image: '/images/amader-shodai.jpg',
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
    image: '/images/ecommerce.jpg',
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
>>>>>>> origin/development
];