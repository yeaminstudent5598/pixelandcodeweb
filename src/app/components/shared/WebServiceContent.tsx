'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  ArrowRight, CheckCircle2, Code2, ShoppingCart, FileText,
  Layers, BookOpen, Building2, Zap, Shield, Globe,
  Database, Server, GitBranch, Package, ChevronRight,
  Star, Clock, Headphones, Monitor, Smartphone,
} from 'lucide-react';

/* ══════════════════════════════════════════════════════════
   STYLES
══════════════════════════════════════════════════════════ */
const S = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  .ws-root    { font-family:'DM Sans',sans-serif; }
  .ws-display { font-family:'Syne',sans-serif !important; }

  @keyframes ws-gradX {
    0%,100%{background-position:0% 50%} 50%{background-position:100% 50%}
  }
  .ws-grad {
    background:linear-gradient(135deg,#f97316 0%,#ef4444 50%,#f59e0b 100%);
    background-size:200% 200%;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
    background-clip:text; animation:ws-gradX 5s ease infinite;
  }

  /* dot grid */
  .ws-dotgrid {
    background-image:radial-gradient(circle,rgba(249,115,22,.10) 1px,transparent 1px);
    background-size:34px 34px;
  }
  /* line grid */
  .ws-linegrid {
    background-image:
      linear-gradient(rgba(249,115,22,.05) 1px,transparent 1px),
      linear-gradient(90deg,rgba(249,115,22,.05) 1px,transparent 1px);
    background-size:60px 60px;
  }

  /* infinite ticker */
  @keyframes ws-tick { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  .ws-ticker { animation:ws-tick 22s linear infinite; }
  .ws-ticker-wrap:hover .ws-ticker { animation-play-state:paused; }

  /* hero browser mockup */
  @keyframes ws-blink { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes ws-barIn { from{width:0} to{width:var(--w)} }
  @keyframes ws-floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes ws-pulse  { 0%,100%{box-shadow:0 0 0 0 rgba(249,115,22,.4)} 50%{box-shadow:0 0 0 8px rgba(249,115,22,0)} }

  /* orbital rings */
  @keyframes ws-cw  { from{transform:translate(-50%,-50%) rotateX(68deg) rotate(0deg)}   to{transform:translate(-50%,-50%) rotateX(68deg) rotate(360deg)} }
  @keyframes ws-ccw { from{transform:translate(-50%,-50%) rotateX(62deg) rotateY(38deg) rotate(0deg)} to{transform:translate(-50%,-50%) rotateX(62deg) rotateY(38deg) rotate(-360deg)} }
  @keyframes ws-glw { 0%,100%{box-shadow:0 0 20px rgba(249,115,22,.35)} 50%{box-shadow:0 0 50px rgba(249,115,22,.70)} }

  /* shimmer */
  @keyframes ws-shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
  .ws-shimmer::after {
    content:''; position:absolute; inset:0; border-radius:inherit;
    background:linear-gradient(105deg,transparent 40%,rgba(249,115,22,.07) 50%,transparent 60%);
    background-size:200% 100%; animation:ws-shimmer 3.5s linear infinite; pointer-events:none;
  }

  /* step connector */
  .ws-step-line { background:linear-gradient(to right,#f97316,rgba(249,115,22,.15)); }

  /* card tilt transition reset */
  .ws-tilt { transition:transform .5s cubic-bezier(.175,.885,.32,1.275),box-shadow .4s ease,border-color .3s; }
  .ws-tilt:hover { border-color:rgba(249,115,22,.35) !important; }

  /* price card */
  .ws-price-card { transition:transform .4s cubic-bezier(.175,.885,.32,1.275),box-shadow .4s; }
  .ws-price-card:hover { transform:translateY(-10px) scale(1.02); }

  /* FAQ */
  .ws-faq-item { transition:border-color .25s; }
  .ws-faq-item:hover { border-color:rgba(249,115,22,.25) !important; }

  /* tech badge */
  .ws-tech { transition:all .3s cubic-bezier(.175,.885,.32,1.275); }
  .ws-tech:hover {
    transform:translateY(-6px) scale(1.06);
    border-color:rgba(249,115,22,.45) !important;
    box-shadow:0 12px 32px rgba(249,115,22,.18) !important;
  }
  .ws-tech:hover .ws-tech-icon { color:#f97316 !important; }
`;

/* ══════════════════════════════════════════════════════════
   HELPER — 3D tilt card hook
══════════════════════════════════════════════════════════ */
function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x*16}deg) rotateX(${-y*16}deg) scale(1.04)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ''; };
  return { ref, onMove, onLeave };
}

/* ══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */
const WEBSITE_TYPES = [
  {
    icon: <ShoppingCart />, color:'#f97316',
    en:{ title:'E-Commerce',      desc:'Full-featured online store with payment gateway, inventory, and order management.',
         features:['Product management','bKash / Card payment','Order tracking','Admin dashboard'],
         from:'৳35,000' },
    bn:{ title:'ই-কমার্স',        desc:'পেমেন্ট গেটওয়ে, ইনভেন্টরি ও অর্ডার ম্যানেজমেন্টসহ পূর্ণাঙ্গ অনলাইন স্টোর।',
         features:['প্রোডাক্ট ম্যানেজমেন্ট','bKash / কার্ড পেমেন্ট','অর্ডার ট্র্যাকিং','অ্যাডমিন ড্যাশবোর্ড'],
         from:'৳৩৫,০০০' },
  },
  {
    icon: <Building2 />, color:'#3b82f6',
    en:{ title:'Corporate Website',  desc:'Professional business presence with service showcases, team pages, and lead capture.',
         features:['Service pages','Team section','Contact forms','SEO optimised'],
         from:'৳18,000' },
    bn:{ title:'কর্পোরেট ওয়েবসাইট', desc:'সার্ভিস শোকেস, টিম পেজ এবং লিড ক্যাপচারসহ পেশাদার বিজনেস ওয়েবসাইট।',
         features:['সার্ভিস পেজ','টিম সেকশন','কন্ট্যাক্ট ফর্ম','SEO অপ্টিমাইজড'],
         from:'৳১৮,০০০' },
  },
  {
    icon: <Layers />, color:'#8b5cf6',
    en:{ title:'Portfolio / Agency', desc:'Visually striking portfolio to showcase work, case studies, and win new clients.',
         features:['Project showcase','Case studies','Client testimonials','Animated UI'],
         from:'৳12,000' },
    bn:{ title:'পোর্টফোলিও / এজেন্সি', desc:'কাজ প্রদর্শন, কেস স্টাডি এবং নতুন ক্লায়েন্ট পেতে আকর্ষণীয় পোর্টফোলিও।',
         features:['প্রজেক্ট শোকেস','কেস স্টাডি','ক্লায়েন্ট রিভিউ','অ্যানিমেটেড UI'],
         from:'৳১২,০০০' },
  },
  {
    icon: <BookOpen />, color:'#22c55e',
    en:{ title:'LMS / EdTech',    desc:'Learning management system with course builder, video lessons, quizzes, and certificates.',
         features:['Course builder','Video lessons','Quiz & certificates','Student dashboard'],
         from:'৳55,000' },
    bn:{ title:'LMS / এডটেক',    desc:'কোর্স বিল্ডার, ভিডিও লেসন, কুইজ ও সার্টিফিকেটসহ লার্নিং ম্যানেজমেন্ট সিস্টেম।',
         features:['কোর্স বিল্ডার','ভিডিও লেসন','কুইজ ও সার্টিফিকেট','স্টুডেন্ট ড্যাশবোর্ড'],
         from:'৳৫৫,০০০' },
  },
  {
    icon: <FileText />, color:'#f59e0b',
    en:{ title:'Blog / News',     desc:'Content-rich blog or news portal with categories, search, and newsletter integration.',
         features:['Rich text editor','Category & tags','Newsletter','SEO-ready'],
         from:'৳10,000' },
    bn:{ title:'ব্লগ / নিউজ',    desc:'ক্যাটাগরি, সার্চ ও নিউজলেটারসহ কন্টেন্ট-রিচ ব্লগ বা নিউজ পোর্টাল।',
         features:['রিচ টেক্সট এডিটর','ক্যাটাগরি ও ট্যাগ','নিউজলেটার','SEO-রেডি'],
         from:'৳১০,০০০' },
  },
  {
    icon: <Monitor />, color:'#ec4899',
    en:{ title:'Landing Page',    desc:'High-converting single-page website designed to turn visitors into paying customers.',
         features:['Conversion-focused','A/B test ready','Fast load (<1s)','Mobile-first'],
         from:'৳6,000' },
    bn:{ title:'ল্যান্ডিং পেজ',  desc:'ভিজিটরকে কাস্টমারে রূপান্তর করতে ডিজাইন করা হাই-কনভার্টিং সিঙ্গেল পেজ।',
         features:['কনভার্সন-ফোকাসড','A/B টেস্ট রেডি','দ্রুত লোড (<১s)','মোবাইল-ফার্স্ট'],
         from:'৳৬,০০০' },
  },
];

const PROCESS_STEPS = [
  { num:'01', icon:<Headphones/>, color:'#f97316',
    en:{ title:'Discovery',     desc:'We understand your business goals, target audience, and project scope through in-depth consultation.' },
    bn:{ title:'ডিসকভারি',     desc:'গভীর আলোচনার মাধ্যমে আপনার ব্যবসার লক্ষ্য, টার্গেট অডিয়েন্স এবং প্রজেক্টের পরিধি বুঝি।' } },
  { num:'02', icon:<Layers/>,    color:'#3b82f6',
    en:{ title:'Design',        desc:'We craft pixel-perfect UI/UX wireframes and prototypes that align with your brand identity.' },
    bn:{ title:'ডিজাইন',       desc:'আপনার ব্র্যান্ড আইডেন্টিটির সাথে মিল রেখে পিক্সেল-পারফেক্ট UI/UX ওয়্যারফ্রেম তৈরি করি।' } },
  { num:'03', icon:<Code2/>,     color:'#8b5cf6',
    en:{ title:'Development',   desc:'Our engineers build your site with clean, scalable code using Next.js, React, and modern stacks.' },
    bn:{ title:'ডেভেলপমেন্ট', desc:'Next.js, React এবং আধুনিক স্ট্যাক ব্যবহার করে পরিষ্কার, স্কেলেবল কোডে সাইট তৈরি করি।' } },
  { num:'04', icon:<Zap/>,       color:'#22c55e',
    en:{ title:'Launch & Support', desc:'We deploy your site, run thorough QA testing, and provide ongoing maintenance and support.' },
    bn:{ title:'লঞ্চ ও সাপোর্ট', desc:'সাইট ডেপ্লয় করি, পুঙ্খানুপুঙ্খ QA টেস্টিং করি এবং চলমান রক্ষণাবেক্ষণ ও সাপোর্ট দিই।' } },
];

const TECH_STACK = [
  { cat:'Frontend',   items:[{n:'Next.js',icon:<Code2/>},{n:'React',icon:<Code2/>},{n:'TypeScript',icon:<Code2/>},{n:'Tailwind CSS',icon:<Layers/>},{n:'Framer Motion',icon:<Zap/>}] },
  { cat:'Backend',    items:[{n:'Node.js',icon:<Server/>},{n:'FastAPI',icon:<Server/>},{n:'Express',icon:<Server/>},{n:'REST API',icon:<Globe/>}] },
  { cat:'Database',   items:[{n:'PostgreSQL',icon:<Database/>},{n:'MongoDB',icon:<Database/>},{n:'Prisma ORM',icon:<Database/>},{n:'Redis',icon:<Zap/>}] },
  { cat:'Deployment', items:[{n:'Vercel',icon:<GitBranch/>},{n:'Render',icon:<Package/>},{n:'Cloudflare',icon:<Shield/>},{n:'GitHub CI/CD',icon:<GitBranch/>}] },
];

const PACKAGES = [
  {
    name:'Starter', nameBN:'স্টার্টার',
    price:'৳8,000', priceSuffix:'থেকে',
    badge:null,
    color:'#6b7280',
    en:{ desc:'Perfect for individuals, freelancers, and small businesses starting online.',
         features:[
           {t:'Up to 5 pages',ok:true},{t:'Mobile responsive',ok:true},
           {t:'Basic SEO setup',ok:true},{t:'Contact form',ok:true},
           {t:'1 month support',ok:true},{t:'Custom CMS',ok:false},
           {t:'E-commerce',ok:false},{t:'Custom animations',ok:false},
         ] },
    bn:{ desc:'ব্যক্তি, ফ্রিল্যান্সার এবং অনলাইনে শুরু করা ছোট ব্যবসার জন্য পারফেক্ট।',
         features:[
           {t:'সর্বোচ্চ ৫ পেজ',ok:true},{t:'মোবাইল রেসপন্সিভ',ok:true},
           {t:'বেসিক SEO',ok:true},{t:'কন্ট্যাক্ট ফর্ম',ok:true},
           {t:'১ মাস সাপোর্ট',ok:true},{t:'কাস্টম CMS',ok:false},
           {t:'ই-কমার্স',ok:false},{t:'কাস্টম অ্যানিমেশন',ok:false},
         ] },
  },
  {
    name:'Growth', nameBN:'গ্রোথ',
    price:'৳25,000', priceSuffix:'থেকে',
    badge:'Most Popular', badgeBN:'সবচেয়ে জনপ্রিয়',
    color:'#f97316',
    en:{ desc:'Ideal for growing businesses needing a powerful, feature-rich web presence.',
         features:[
           {t:'Up to 15 pages',ok:true},{t:'Mobile responsive',ok:true},
           {t:'Advanced SEO',ok:true},{t:'Custom CMS / Dashboard',ok:true},
           {t:'3 months support',ok:true},{t:'Payment integration',ok:true},
           {t:'Custom animations',ok:true},{t:'E-commerce (up to 200 products)',ok:false},
         ] },
    bn:{ desc:'শক্তিশালী, ফিচার-রিচ ওয়েব প্রেজেন্স প্রয়োজন এমন বিকাশমান ব্যবসার জন্য আদর্শ।',
         features:[
           {t:'সর্বোচ্চ ১৫ পেজ',ok:true},{t:'মোবাইল রেসপন্সিভ',ok:true},
           {t:'অ্যাডভান্সড SEO',ok:true},{t:'কাস্টম CMS / ড্যাশবোর্ড',ok:true},
           {t:'৩ মাস সাপোর্ট',ok:true},{t:'পেমেন্ট ইন্টিগ্রেশন',ok:true},
           {t:'কাস্টম অ্যানিমেশন',ok:true},{t:'ই-কমার্স (২০০ পণ্য পর্যন্ত)',ok:false},
         ] },
  },
  {
    name:'Enterprise', nameBN:'এন্টারপ্রাইজ',
    price:'৳55,000', priceSuffix:'থেকে',
    badge:null,
    color:'#8b5cf6',
    en:{ desc:'Full-scale custom solutions for large businesses, startups, and SaaS platforms.',
         features:[
           {t:'Unlimited pages',ok:true},{t:'Mobile responsive',ok:true},
           {t:'Full SEO strategy',ok:true},{t:'Custom CMS + API',ok:true},
           {t:'6 months support',ok:true},{t:'Full E-commerce',ok:true},
           {t:'Custom animations',ok:true},{t:'Multi-vendor / SaaS',ok:true},
         ] },
    bn:{ desc:'বড় ব্যবসা, স্টার্টআপ এবং SaaS প্ল্যাটফর্মের জন্য পূর্ণ-স্কেল কাস্টম সমাধান।',
         features:[
           {t:'আনলিমিটেড পেজ',ok:true},{t:'মোবাইল রেসপন্সিভ',ok:true},
           {t:'ফুল SEO স্ট্র্যাটেজি',ok:true},{t:'কাস্টম CMS + API',ok:true},
           {t:'৬ মাস সাপোর্ট',ok:true},{t:'ফুল ই-কমার্স',ok:true},
           {t:'কাস্টম অ্যানিমেশন',ok:true},{t:'মাল্টি-ভেন্ডর / SaaS',ok:true},
         ] },
  },
];

const FAQS = [
  { en:{ q:'How long does it take to build a website?', a:'Typically 2–6 weeks depending on the project complexity. A landing page takes 3–5 days, a full e-commerce site takes 4–6 weeks.' },
    bn:{ q:'একটি ওয়েবসাইট তৈরি করতে কতদিন লাগে?', a:'প্রজেক্টের জটিলতার উপর নির্ভর করে সাধারণত ২–৬ সপ্তাহ। ল্যান্ডিং পেজে ৩–৫ দিন, পূর্ণ ই-কমার্সে ৪–৬ সপ্তাহ।' } },
  { en:{ q:'Do you provide hosting and domain setup?', a:'Yes! We help you set up domain, hosting (Vercel, Render, or shared), SSL certificate, and DNS configuration.' },
    bn:{ q:'আপনারা কি হোস্টিং ও ডোমেইন সেটআপ দেন?', a:'হ্যাঁ! ডোমেইন, হোস্টিং (Vercel, Render বা শেয়ারড), SSL সার্টিফিকেট এবং DNS কনফিগারেশন সেটআপ করে দিই।' } },
  { en:{ q:'Can I update the website content myself?', a:'Absolutely. We build a custom CMS or integrate with headless CMS (Sanity, Contentful) so you can edit content without any coding knowledge.' },
    bn:{ q:'আমি কি নিজে ওয়েবসাইটের কনটেন্ট আপডেট করতে পারব?', a:'অবশ্যই। আমরা কাস্টম CMS বা হেডলেস CMS (Sanity, Contentful) ইন্টিগ্রেট করি যাতে কোনো কোডিং জ্ঞান ছাড়াই কনটেন্ট এডিট করা যায়।' } },
  { en:{ q:'What payment methods do you accept?', a:'We accept bKash, Nagad, bank transfer, and international payments via Wise or PayPal. 50% advance, 50% on delivery.' },
    bn:{ q:'আপনারা কোন পেমেন্ট মেথড গ্রহণ করেন?', a:'bKash, Nagad, ব্যাংক ট্রান্সফার এবং Wise বা PayPal এর মাধ্যমে আন্তর্জাতিক পেমেন্ট গ্রহণ করি। ৫০% অগ্রিম, ৫০% ডেলিভারিতে।' } },
];

const TICKER_ITEMS = ['Next.js','React','TypeScript','Tailwind CSS','Node.js','PostgreSQL',
  'Framer Motion','Prisma','Redis','FastAPI','MongoDB','Vercel','Docker','GraphQL'];

/* ══════════════════════════════════════════════════════════
   SECTION: HERO
══════════════════════════════════════════════════════════ */
function Hero({ lang }: { lang: boolean }) {
  const BrowserMockup = () => {
    const bars = [
      {w:'75%',c:'#60a5fa'},{w:'50%',c:'#f97316'},{w:'85%',c:'#9ca3af'},
      {w:'40%',c:'#34d399'},{w:'65%',c:'#9ca3af'},{w:'55%',c:'#f59e0b'},
      {w:'80%',c:'#60a5fa'},{w:'35%',c:'#9ca3af'},
    ];
    return (
      <div style={{
        position:'relative', width:'100%', maxWidth:480,
        background:'#0d0d0d', border:'1px solid rgba(255,255,255,.08)',
        borderRadius:20, overflow:'hidden',
        boxShadow:'0 32px 80px rgba(0,0,0,.6)',
        animation:'ws-floatY 7s ease-in-out infinite',
      }}>
        {/* Browser bar */}
        <div style={{
          display:'flex', alignItems:'center', gap:8,
          padding:'12px 16px', background:'rgba(255,255,255,.03)',
          borderBottom:'1px solid rgba(255,255,255,.06)',
        }}>
          {['#ef4444','#f59e0b','#22c55e'].map((c,i)=>(
            <div key={i} style={{width:10,height:10,borderRadius:'50%',background:c}} />
          ))}
          <div style={{
            flex:1, height:22, borderRadius:6,
            background:'rgba(255,255,255,.05)',
            display:'flex', alignItems:'center', paddingLeft:10,
            fontSize:10, color:'#4b5563', fontFamily:'monospace',
          }}>
            pixelandcode.agency
          </div>
        </div>
        {/* Code lines */}
        <div style={{padding:'20px 20px 16px'}}>
          {bars.map((b,i)=>(
            <div key={i} style={{
              height:5, borderRadius:3, background:b.c,
              width:b.w, opacity:.55+(i%3)*.12,
              marginBottom:10,
              animation:`ws-barIn .7s ease ${i*.07}s both`,
              '--w':b.w,
            } as React.CSSProperties} />
          ))}
          <div style={{
            display:'flex', alignItems:'center', gap:4, marginTop:6,
          }}>
            <div style={{
              width:5, height:14, background:'#f97316', borderRadius:1,
              animation:'ws-blink 1.2s ease-in-out infinite',
            }} />
          </div>
        </div>
        {/* Bottom status */}
        <div style={{
          padding:'10px 16px', background:'rgba(255,255,255,.02)',
          borderTop:'1px solid rgba(255,255,255,.05)',
          display:'flex', alignItems:'center', justifyContent:'space-between',
        }}>
          <div style={{display:'flex',alignItems:'center',gap:6}}>
            <div style={{
              width:6,height:6,borderRadius:'50%',background:'#22c55e',
              animation:'ws-pulse 2s ease-in-out infinite',
            }} />
            <span style={{fontSize:10,color:'#6b7280'}}>Building in progress…</span>
          </div>
          <span style={{fontSize:10,color:'#22c55e',fontWeight:600}}>Live</span>
        </div>
      </div>
    );
  };

  /* mini orbital */
  const Orbital = () => (
    <div style={{position:'relative',width:90,height:90,flexShrink:0}}>
      <div style={{
        position:'absolute',top:'50%',left:'50%',
        transform:'translate(-50%,-50%)',
        width:26,height:26,borderRadius:'50%',
        background:'linear-gradient(135deg,#f97316,#b91c1c)',
        boxShadow:'0 0 20px rgba(249,115,22,.8)',
        animation:'ws-glw 3s ease-in-out infinite',
      }} />
      <div style={{
        position:'absolute',top:'50%',left:'50%',
        width:60,height:60,borderRadius:'50%',
        border:'1.5px solid rgba(249,115,22,.28)',
        animation:'ws-cw 10s linear infinite',
      }}>
        <div style={{position:'absolute',top:-3.5,left:'50%',transform:'translateX(-50%)',
          width:7,height:7,borderRadius:'50%',background:'#f97316',
          boxShadow:'0 0 8px rgba(249,115,22,.9)'}} />
      </div>
      <div style={{
        position:'absolute',top:'50%',left:'50%',
        width:86,height:86,borderRadius:'50%',
        border:'1px solid rgba(239,68,68,.18)',
        animation:'ws-ccw 16s linear infinite',
      }}>
        <div style={{position:'absolute',bottom:-3,left:'50%',transform:'translateX(-50%)',
          width:5,height:5,borderRadius:'50%',background:'#ef4444',
          boxShadow:'0 0 8px rgba(239,68,68,.9)'}} />
      </div>
    </div>
  );

  return (
    <section className="ws-linegrid" style={{
      position:'relative',background:'#050505',overflow:'hidden',
      minHeight:'100vh',display:'flex',alignItems:'center',paddingTop:72,
    }}>
      {/* Orbs */}
      <div style={{position:'absolute',top:'15%',left:'5%',width:500,height:500,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(249,115,22,.12) 0%,transparent 65%)',
        filter:'blur(70px)',pointerEvents:'none'}} />
      <div style={{position:'absolute',bottom:'10%',right:'5%',width:380,height:380,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(59,130,246,.08) 0%,transparent 65%)',
        filter:'blur(60px)',pointerEvents:'none'}} />

      {/* Top line */}
      <div style={{position:'absolute',top:0,left:0,right:0,height:1,
        background:'linear-gradient(to right,transparent,rgba(249,115,22,.5),transparent)'}} />

      {/* FIXED className merge */}
      <div className="container mx-auto grid-cols-1 lg:grid-cols-2" style={{
        position:'relative',zIndex:5,
        display:'grid',
        gap:60,alignItems:'center',padding:'80px 24px',
      }}>

        {/* LEFT */}
        <div>
          <div style={{marginBottom:24}}>
            <span style={{
              display:'inline-flex',alignItems:'center',gap:8,
              padding:'6px 18px',borderRadius:9999,
              border:'1px solid rgba(249,115,22,.30)',
              background:'rgba(249,115,22,.07)',
              color:'#fb923c',fontSize:11,fontWeight:700,
              letterSpacing:'.14em',textTransform:'uppercase',
              backdropFilter:'blur(8px)',
            }}>
              <Globe style={{width:12,height:12}} />
              {lang ? 'ওয়েব সার্ভিস' : 'Web Service'}
            </span>
          </div>

          <h1 className="ws-display" style={{
            fontSize:'clamp(38px,5.5vw,76px)',fontWeight:900,
            lineHeight:.95,letterSpacing:'-0.03em',color:'#fff',marginBottom:24,
          }}>
            {lang ? (
              <><span style={{display:'block'}}>আমরা তৈরি করি</span>
                <span className="ws-grad" style={{display:'block'}}>অসাধারণ</span>
                <span style={{display:'block'}}>ওয়েবসাইট</span></>
            ) : (
              <><span style={{display:'block'}}>We Build</span>
                <span className="ws-grad" style={{display:'block'}}>Exceptional</span>
                <span style={{display:'block'}}>Web Experiences</span></>
            )}
          </h1>

          <p style={{color:'#6b7280',fontSize:17,lineHeight:1.8,fontWeight:300,
            maxWidth:440,marginBottom:36}}>
            {lang
              ? 'Next.js, React এবং আধুনিক প্রযুক্তি ব্যবহার করে আমরা তৈরি করি এমন ওয়েবসাইট যা দ্রুত লোড হয়, সুন্দর দেখায় এবং ব্যবসায় রিয়েল রেজাল্ট দেয়।'
              : 'Using Next.js, React, and modern technology, we create websites that load fast, look stunning, and deliver real business results.'}
          </p>

          <div style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:48}}>
            <Link href="/contact" style={{textDecoration:'none'}}>
              <button className="ws-display" style={{
                display:'inline-flex',alignItems:'center',gap:8,
                padding:'15px 30px',borderRadius:9999,
                background:'#ea580c',color:'#fff',
                fontWeight:800,fontSize:15,border:'none',cursor:'pointer',
                transition:'background .2s,box-shadow .3s,transform .15s',
              }}
                onMouseEnter={e=>{e.currentTarget.style.background='#f97316';e.currentTarget.style.boxShadow='0 0 40px rgba(249,115,22,.45)';e.currentTarget.style.transform='translateY(-2px)';}}
                onMouseLeave={e=>{e.currentTarget.style.background='#ea580c';e.currentTarget.style.boxShadow='none';e.currentTarget.style.transform='translateY(0)';}}
              >
                {lang ? 'প্রজেক্ট শুরু করুন' : 'Start a Project'}
                <ArrowRight style={{width:17,height:17}} />
              </button>
            </Link>
            <a href="#pricing" style={{textDecoration:'none'}}>
              <button style={{
                display:'inline-flex',alignItems:'center',gap:8,
                padding:'15px 30px',borderRadius:9999,
                border:'1px solid rgba(255,255,255,.12)',
                background:'rgba(255,255,255,.04)',
                color:'#d1d5db',fontWeight:600,fontSize:15,
                cursor:'pointer',backdropFilter:'blur(8px)',
                transition:'border-color .2s,color .2s,transform .15s',
              }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(249,115,22,.4)';e.currentTarget.style.color='#fff';e.currentTarget.style.transform='translateY(-2px)';}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,.12)';e.currentTarget.style.color='#d1d5db';e.currentTarget.style.transform='translateY(0)';}}
              >
                {lang ? 'প্যাকেজ দেখুন' : 'View Pricing'}
              </button>
            </a>
          </div>

          {/* Stats */}
          <div style={{display:'flex',gap:20,flexWrap:'wrap'}}>
            {[
              {n:'50+',l:lang?'প্রজেক্ট':'Projects'},
              {n:'3+', l:lang?'বছরের অভিজ্ঞতা':'Years Exp.'},
              {n:'100%',l:lang?'সন্তুষ্টি':'Satisfaction'},
            ].map((s,i)=>(
              <div key={i} style={{
                padding:'14px 20px',borderRadius:14,
                background:'rgba(255,255,255,.03)',
                border:'1px solid rgba(255,255,255,.07)',
                textAlign:'center',backdropFilter:'blur(8px)',
                transition:'border-color .3s,transform .3s',
              }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(249,115,22,.3)';e.currentTarget.style.transform='translateY(-4px)';}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,.07)';e.currentTarget.style.transform='translateY(0)';}}
              >
                <div className="ws-display ws-grad" style={{fontSize:28,fontWeight:900,lineHeight:1}}>{s.n}</div>
                <div style={{fontSize:11,color:'#6b7280',marginTop:4}}>{s.l}</div>
              </div>
            ))}
            <Orbital />
          </div>
        </div>

        {/* RIGHT — browser mockup */}
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',
          position:'relative'}} className="hidden lg:flex">

          {/* Glow under */}
          <div style={{
            position:'absolute',bottom:-20,left:'50%',transform:'translateX(-50%)',
            width:'60%',height:60,
            background:'radial-gradient(ellipse,rgba(249,115,22,.3) 0%,transparent 70%)',
            filter:'blur(14px)',pointerEvents:'none',
          }} />

          <BrowserMockup />

          {/* Floating badges */}
          {[
            {icon:<Smartphone/>,t:'Mobile First',s:'100% Responsive',top:'8%',right:'-5%',
              col:'rgba(249,115,22,.12)',bc:'rgba(249,115,22,.25)',anim:'ws-floatY 5s ease-in-out infinite'},
            {icon:<Zap/>,t:'Fast Load',s:'< 1s LCP',bottom:'22%',left:'-8%',
              col:'rgba(34,197,94,.12)',bc:'rgba(34,197,94,.25)',anim:'ws-floatY 6s ease-in-out infinite 1.5s'},
            {icon:<Shield/>,t:'SEO Ready',s:'100/100 Score',bottom:'5%',right:'5%',
              col:'rgba(96,165,250,.12)',bc:'rgba(96,165,250,.25)',anim:'ws-floatY 7s ease-in-out infinite .8s'},
          ].map((b,i)=>(
            <div key={i} style={{
              position:'absolute', ...(b.top?{top:b.top}:{}), ...(b.bottom?{bottom:b.bottom}:{}),
              ...(b.left?{left:b.left}:{}), ...(b.right?{right:b.right}:{}),
              display:'flex',alignItems:'center',gap:10,
              padding:'10px 14px',borderRadius:14,
              background:'rgba(10,10,10,.9)',backdropFilter:'blur(16px)',
              border:`1px solid ${b.bc}`,
              animation:b.anim,
            }}>
              <div style={{
                width:32,height:32,borderRadius:8,background:b.col,
                display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,
              }}>
                {/* FIXED: Removed direct style injection on cloneElement */}
                <div style={{ color:'#fff', width: 15, height: 15 }}>
                  {b.icon}
                </div>
              </div>
              <div>
                <p style={{fontSize:12,fontWeight:700,color:'#fff',lineHeight:1.2}}>{b.t}</p>
                <p style={{fontSize:10,color:'#6b7280',marginTop:1}}>{b.s}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   SECTION: TECH TICKER
══════════════════════════════════════════════════════════ */
function TechTicker() {
  const doubled = [...TICKER_ITEMS,...TICKER_ITEMS];
  return (
    <div style={{background:'rgba(249,115,22,1)',padding:'12px 0',overflow:'hidden'}}>
      <div className="ws-ticker-wrap">
        <div className="ws-ticker" style={{display:'flex',gap:'2.5rem',width:'max-content'}}>
          {doubled.map((item,i)=>(
            <span key={i} className="ws-display" style={{
              color:'#fff',fontSize:12,fontWeight:700,
              letterSpacing:'.12em',textTransform:'uppercase',
              display:'flex',alignItems:'center',gap:'2rem',whiteSpace:'nowrap',
            }}>
              {item}<span style={{color:'rgba(255,255,255,.4)',fontSize:8}}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   SECTION: WEBSITE TYPES
══════════════════════════════════════════════════════════ */
function WebsiteTypes({ lang }: { lang: boolean }) {
  return (
    <section className="ws-dotgrid" style={{
      padding:'120px 0',background:'#090909',position:'relative',overflow:'hidden',
    }}>
      <div style={{position:'absolute',top:'30%',right:'5%',width:400,height:400,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(249,115,22,.07) 0%,transparent 65%)',
        filter:'blur(60px)',pointerEvents:'none'}} />

      <div className="container mx-auto" style={{padding:'0 24px',position:'relative',zIndex:5}}>
        {/* Header */}
        <div style={{textAlign:'center',marginBottom:64}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:12,marginBottom:16}}>
            <div style={{height:1,width:44,background:'#f97316'}} />
            <span className="ws-display" style={{color:'#f97316',fontSize:11,fontWeight:700,
              letterSpacing:'.12em',textTransform:'uppercase'}}>
              {lang ? 'আমরা কী বানাই' : 'What We Build'}
            </span>
            <div style={{height:1,width:44,background:'#f97316'}} />
          </div>
          <h2 className="ws-display" style={{
            fontSize:'clamp(28px,5vw,60px)',fontWeight:900,color:'#fff',
            letterSpacing:'-0.02em',marginBottom:16,
          }}>
            {lang ? <>যেকোনো ধরনের <span className="ws-grad">ওয়েবসাইট</span></> : <>Any Type of <span className="ws-grad">Website</span></>}
          </h2>
          <p style={{color:'#6b7280',fontSize:16,fontWeight:300,maxWidth:480,margin:'0 auto'}}>
            {lang ? 'ল্যান্ডিং পেজ থেকে শুরু করে পূর্ণাঙ্গ SaaS প্ল্যাটফর্ম — আমরা সব ধরনের ওয়েব প্রজেক্ট হ্যান্ডেল করি।'
                  : 'From landing pages to full SaaS platforms — we handle every kind of web project.'}
          </p>
        </div>

        {/* 3×2 grid */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',
          gap:20,maxWidth:1100,margin:'0 auto',
        }}>
          {WEBSITE_TYPES.map((type,i)=>{
            const { ref, onMove, onLeave } = useTilt();
            const d = lang ? type.bn : type.en;
            return (
              <div key={i} ref={ref} className="ws-tilt ws-shimmer" onMouseMove={onMove} onMouseLeave={onLeave}
                style={{
                  position:'relative',padding:'32px 28px',borderRadius:22,
                  background:'#0d0d0d',border:'1px solid rgba(255,255,255,.06)',
                  overflow:'hidden',cursor:'default',
                }}>
                {/* Index */}
                <div className="ws-display" style={{
                  position:'absolute',top:20,right:20,
                  fontSize:52,fontWeight:900,lineHeight:1,
                  color:'rgba(255,255,255,.025)',userSelect:'none',
                }}>0{i+1}</div>

                {/* Icon */}
                <div style={{
                  width:52,height:52,borderRadius:14,
                  background:`${type.color}14`,border:`1px solid ${type.color}28`,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  marginBottom:20,transition:'all .3s',
                }}>
                  {/* FIXED: Removed direct style injection on cloneElement */}
                  <div style={{ color: type.color, width: 24, height: 24 }}>
                    {type.icon}
                  </div>
                </div>

                {/* From badge */}
                <div style={{
                  position:'absolute',top:22,right:52,
                  padding:'3px 10px',borderRadius:6,
                  background:`${type.color}14`,border:`1px solid ${type.color}25`,
                  fontSize:10,fontWeight:700,color:type.color,letterSpacing:'.06em',
                }}>
                  {d.from}+
                </div>

                <h3 className="ws-display" style={{
                  fontSize:20,fontWeight:800,color:'#fff',marginBottom:10,
                  letterSpacing:'-0.01em',
                }}>{d.title}</h3>

                <p style={{color:'#6b7280',fontSize:13,lineHeight:1.75,
                  fontWeight:300,marginBottom:18}}>{d.desc}</p>

                {/* Features */}
                <ul style={{listStyle:'none',padding:0,margin:0,display:'flex',
                  flexDirection:'column',gap:6}}>
                  {d.features.map((f,fi)=>(
                    <li key={fi} style={{
                      display:'flex',alignItems:'center',gap:8,
                      fontSize:12,color:'#9ca3af',
                    }}>
                      <CheckCircle2 style={{width:13,height:13,color:type.color,flexShrink:0}} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Bottom accent */}
                <div style={{
                  position:'absolute',bottom:0,left:0,right:0,height:2,
                  background:`linear-gradient(to right,${type.color},transparent)`,
                  borderRadius:'0 0 22px 22px',
                }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   SECTION: PROCESS
══════════════════════════════════════════════════════════ */
function Process({ lang }: { lang: boolean }) {
  return (
    <section style={{padding:'120px 0',background:'#060606',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',
        width:500,height:500,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(249,115,22,.06) 0%,transparent 65%)',
        filter:'blur(60px)',pointerEvents:'none'}} />

      <div className="container mx-auto" style={{padding:'0 24px',position:'relative',zIndex:5}}>
        {/* Header */}
        <div style={{textAlign:'center',marginBottom:80}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:12,marginBottom:16}}>
            <div style={{height:1,width:44,background:'#f97316'}} />
            <span className="ws-display" style={{color:'#f97316',fontSize:11,fontWeight:700,
              letterSpacing:'.12em',textTransform:'uppercase'}}>
              {lang ? 'আমাদের প্রক্রিয়া' : 'Our Process'}
            </span>
            <div style={{height:1,width:44,background:'#f97316'}} />
          </div>
          <h2 className="ws-display" style={{
            fontSize:'clamp(28px,5vw,60px)',fontWeight:900,color:'#fff',
            letterSpacing:'-0.02em',
          }}>
            {lang ? <>আমরা কীভাবে <span className="ws-grad">কাজ করি</span></>
                  : <>How We <span className="ws-grad">Work</span></>}
          </h2>
        </div>

        {/* Steps grid */}
        <div style={{
          display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',
          gap:0,maxWidth:1000,margin:'0 auto',position:'relative',
        }}>
          {PROCESS_STEPS.map((step,i)=>{
            const d = lang ? step.bn : step.en;
            const isLast = i === PROCESS_STEPS.length-1;
            return (
              <div key={i} style={{position:'relative',textAlign:'center',padding:'0 24px'}}>
                {/* Connector line (not on last) */}
                {/* FIXED JSX logic */}
                {!isLast ? (
                  <div className="ws-step-line hidden md:block" style={{
                    position:'absolute',top:36,left:'calc(50% + 36px)',
                    right:'calc(-50% + 36px)',height:1,zIndex:0,
                  }} />
                ) : null}

                {/* Number badge */}
                <div style={{
                  position:'relative',zIndex:1,
                  width:72,height:72,borderRadius:'50%',
                  background:`${step.color}14`,
                  border:`1.5px solid ${step.color}35`,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  margin:'0 auto 24px',
                  boxShadow:`0 0 20px ${step.color}20`,
                  transition:'all .3s',
                }}
                  onMouseEnter={e=>{e.currentTarget.style.boxShadow=`0 0 40px ${step.color}45`;e.currentTarget.style.transform='scale(1.1)';}}
                  onMouseLeave={e=>{e.currentTarget.style.boxShadow=`0 0 20px ${step.color}20`;e.currentTarget.style.transform='scale(1)';}}
                >
                  {/* FIXED: Removed direct style injection on cloneElement */}
                  <div style={{ color: step.color, width: 28, height: 28 }}>
                    {step.icon}
                  </div>
                </div>

                {/* Number label */}
                <div className="ws-display" style={{
                  fontSize:11,fontWeight:700,color:step.color,
                  letterSpacing:'.14em',textTransform:'uppercase',marginBottom:10,
                }}>
                  Step {step.num}
                </div>

                <h3 className="ws-display" style={{
                  fontSize:22,fontWeight:800,color:'#fff',
                  marginBottom:12,letterSpacing:'-0.01em',
                }}>{d.title}</h3>

                <p style={{
                  color:'#6b7280',fontSize:14,lineHeight:1.75,fontWeight:300,
                }}>{d.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   SECTION: TECH STACK
══════════════════════════════════════════════════════════ */
function TechStack({ lang }: { lang: boolean }) {
  return (
    <section className="ws-linegrid" style={{
      padding:'120px 0',background:'#090909',position:'relative',overflow:'hidden',
    }}>
      <div className="container mx-auto" style={{padding:'0 24px',position:'relative',zIndex:5}}>
        <div style={{textAlign:'center',marginBottom:64}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:12,marginBottom:16}}>
            <div style={{height:1,width:44,background:'#f97316'}} />
            <span className="ws-display" style={{color:'#f97316',fontSize:11,fontWeight:700,
              letterSpacing:'.12em',textTransform:'uppercase'}}>
              {lang ? 'আমাদের টেক স্ট্যাক' : 'Tech Stack'}
            </span>
            <div style={{height:1,width:44,background:'#f97316'}} />
          </div>
          <h2 className="ws-display" style={{
            fontSize:'clamp(28px,5vw,60px)',fontWeight:900,color:'#fff',
            letterSpacing:'-0.02em',marginBottom:16,
          }}>
            {lang ? <>আধুনিক <span className="ws-grad">প্রযুক্তি</span> ব্যবহার করি</>
                  : <>Built With <span className="ws-grad">Modern Tech</span></>}
          </h2>
          <p style={{color:'#6b7280',fontSize:16,fontWeight:300,maxWidth:440,margin:'0 auto'}}>
            {lang ? 'আমরা সর্বাধুনিক প্রযুক্তি ব্যবহার করি যা দ্রুত, নিরাপদ এবং স্কেলেবল।'
                  : 'We use cutting-edge technologies that are fast, secure, and scalable.'}
          </p>
        </div>

        {/* 3D perspective tech grid */}
        <div style={{
          perspective:'1200px',perspectiveOrigin:'50% -20%',
          maxWidth:900,margin:'0 auto',
        }}>
          <div style={{
            transform:'rotateX(8deg)',transformOrigin:'top center',
          }}>
            {TECH_STACK.map((cat,ci)=>(
              <div key={ci} style={{marginBottom:32}}>
                <p style={{
                  fontSize:10,fontWeight:700,color:'rgba(255,255,255,.2)',
                  letterSpacing:'.14em',textTransform:'uppercase',
                  marginBottom:14,textAlign:'center',
                }}>
                  {cat.cat}
                </p>
                <div style={{
                  display:'flex',flexWrap:'wrap',gap:10,justifyContent:'center',
                }}>
                  {cat.items.map((tech,ti)=>(
                    <div key={ti} className="ws-tech" style={{
                      display:'flex',alignItems:'center',gap:8,
                      padding:'10px 18px',borderRadius:12,
                      background:'rgba(255,255,255,.03)',
                      border:'1px solid rgba(255,255,255,.07)',
                      backdropFilter:'blur(12px)',cursor:'default',
                    }}>
                      <span className="ws-tech-icon" style={{
                        color:'#6b7280',transition:'color .3s',
                      }}>
                        {/* FIXED: Removed direct style injection on cloneElement */}
                        <div style={{ width: 14, height: 14 }}>
                          {tech.icon}
                        </div>
                      </span>
                      <span style={{fontSize:13,fontWeight:600,color:'#d1d5db',whiteSpace:'nowrap'}}>
                        {tech.n}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   SECTION: PRICING
══════════════════════════════════════════════════════════ */
function Pricing({ lang }: { lang: boolean }) {
  return (
    <section id="pricing" style={{
      padding:'120px 0',background:'#060606',position:'relative',overflow:'hidden',
    }}>
      <div style={{position:'absolute',top:'40%',left:'50%',transform:'translate(-50%,-50%)',
        width:600,height:600,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(249,115,22,.07) 0%,transparent 65%)',
        filter:'blur(80px)',pointerEvents:'none'}} />

      <div className="container mx-auto" style={{padding:'0 24px',position:'relative',zIndex:5}}>
        <div style={{textAlign:'center',marginBottom:64}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:12,marginBottom:16}}>
            <div style={{height:1,width:44,background:'#f97316'}} />
            <span className="ws-display" style={{color:'#f97316',fontSize:11,fontWeight:700,
              letterSpacing:'.12em',textTransform:'uppercase'}}>
              {lang ? 'মূল্য তালিকা' : 'Pricing'}
            </span>
            <div style={{height:1,width:44,background:'#f97316'}} />
          </div>
          <h2 className="ws-display" style={{
            fontSize:'clamp(28px,5vw,60px)',fontWeight:900,color:'#fff',
            letterSpacing:'-0.02em',marginBottom:16,
          }}>
            {lang ? <>স্বচ্ছ <span className="ws-grad">মূল্য নির্ধারণ</span></>
                  : <>Transparent <span className="ws-grad">Pricing</span></>}
          </h2>
          <p style={{color:'#6b7280',fontSize:16,fontWeight:300,maxWidth:440,margin:'0 auto'}}>
            {lang ? 'কোনো লুকানো চার্জ নেই। প্রজেক্ট অনুযায়ী কাস্টম কোটেশনও পাওয়া যায়।'
                  : 'No hidden fees. Custom quotes also available based on project needs.'}
          </p>
        </div>

        <div style={{
          display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',
          gap:20,maxWidth:1000,margin:'0 auto',
        }}>
          {PACKAGES.map((pkg,i)=>{
            const d = lang ? pkg.bn : pkg.en;
            const isFeatured = i===1;
            return (
              <div key={i} className="ws-price-card ws-shimmer" style={{
                position:'relative',padding: isFeatured ? '36px 28px 32px' : '28px',
                borderRadius:24,overflow:'hidden',cursor:'default',
                background: isFeatured ? '#0f0f0f' : '#0a0a0a',
                border: isFeatured ? `1.5px solid rgba(249,115,22,.45)` : '1px solid rgba(255,255,255,.07)',
                boxShadow: isFeatured ? '0 0 40px rgba(249,115,22,.12),0 24px 60px rgba(0,0,0,.5)' : '0 8px 32px rgba(0,0,0,.3)',
                transform: isFeatured ? 'scale(1.04)' : 'scale(1)',
              }}>
                {/* Popular badge */}
                {isFeatured && (
                  <div style={{
                    position:'absolute',top:-1,left:'50%',transform:'translateX(-50%)',
                    padding:'5px 16px',borderRadius:'0 0 10px 10px',
                    background:'linear-gradient(135deg,#f97316,#ef4444)',
                    fontSize:10,fontWeight:800,color:'#fff',
                    letterSpacing:'.08em',textTransform:'uppercase',
                    whiteSpace:'nowrap',
                  }}>
                    {lang ? pkg.badgeBN : pkg.badge}
                  </div>
                )}

                {/* Package name */}
                <div style={{marginBottom:6}}>
                  <span style={{
                    padding:'3px 10px',borderRadius:6,
                    background:`${pkg.color}14`,border:`1px solid ${pkg.color}25`,
                    fontSize:10,fontWeight:700,color:pkg.color,letterSpacing:'.08em',textTransform:'uppercase',
                  }}>{lang ? pkg.nameBN : pkg.name}</span>
                </div>

                {/* Price */}
                <div style={{marginBottom:8,marginTop:12}}>
                  <span className="ws-display" style={{
                    fontSize:'clamp(28px,4vw,42px)',fontWeight:900,color:'#fff',
                    letterSpacing:'-0.02em',
                  }}>{pkg.price}</span>
                  <span style={{fontSize:12,color:'#6b7280',marginLeft:6}}>{pkg.priceSuffix}</span>
                </div>

                <p style={{color:'#6b7280',fontSize:13,lineHeight:1.7,fontWeight:300,marginBottom:24}}>
                  {d.desc}
                </p>

                {/* Divider */}
                <div style={{height:1,background:'rgba(255,255,255,.06)',marginBottom:20}} />

                {/* Features */}
                <ul style={{listStyle:'none',padding:0,margin:'0 0 28px',
                  display:'flex',flexDirection:'column',gap:10}}>
                  {d.features.map((f,fi)=>(
                    <li key={fi} style={{
                      display:'flex',alignItems:'center',gap:10,
                      fontSize:13,color: f.ok ? '#d1d5db' : '#4b5563',
                      textDecoration: f.ok ? 'none' : 'none',
                    }}>
                      <CheckCircle2 style={{
                        width:14,height:14,flexShrink:0,
                        color: f.ok ? '#22c55e' : '#374151',
                      }} />
                      {f.t}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/contact" style={{textDecoration:'none'}}>
                  <button className="ws-display" style={{
                    width:'100%',padding:'13px 0',borderRadius:12,
                    background: isFeatured ? '#ea580c' : 'rgba(255,255,255,.05)',
                    color: isFeatured ? '#fff' : '#d1d5db',
                    fontWeight:800,fontSize:13,border: isFeatured ? 'none' : '1px solid rgba(255,255,255,.1)',
                    cursor:'pointer',display:'flex',alignItems:'center',
                    justifyContent:'center',gap:6,
                    transition:'all .2s',
                  }}
                    onMouseEnter={e=>{
                      if(isFeatured){e.currentTarget.style.background='#f97316';e.currentTarget.style.boxShadow='0 0 28px rgba(249,115,22,.4)';}
                      else{e.currentTarget.style.borderColor='rgba(249,115,22,.35)';e.currentTarget.style.color='#fff';}
                    }}
                    onMouseLeave={e=>{
                      if(isFeatured){e.currentTarget.style.background='#ea580c';e.currentTarget.style.boxShadow='none';}
                      else{e.currentTarget.style.borderColor='rgba(255,255,255,.1)';e.currentTarget.style.color='#d1d5db';}
                    }}
                  >
                    {lang ? 'এখনই শুরু করুন' : 'Get Started'}
                    <ChevronRight style={{width:15,height:15}} />
                  </button>
                </Link>

                {/* Accent bottom */}
                {isFeatured && (
                  <div style={{
                    position:'absolute',bottom:0,left:0,right:0,height:2,
                    background:'linear-gradient(to right,#f97316,#ef4444)',
                  }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p style={{textAlign:'center',color:'#4b5563',fontSize:13,marginTop:32,fontWeight:300}}>
          {lang
            ? '* দাম প্রজেক্টের জটিলতার উপর পরিবর্তন হতে পারে। বিনামূল্যে কনসালটেশনের জন্য যোগাযোগ করুন।'
            : '* Prices may vary based on project complexity. Contact us for a free consultation.'}
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   SECTION: FAQ
══════════════════════════════════════════════════════════ */
function FAQ({ lang }: { lang: boolean }) {
  const [open,setOpen] = React.useState<number|null>(0);
  return (
    <section style={{padding:'100px 0',background:'#090909'}}>
      <div className="container mx-auto" style={{padding:'0 24px',maxWidth:720}}>
        <div style={{textAlign:'center',marginBottom:56}}>
          <h2 className="ws-display" style={{
            fontSize:'clamp(24px,4vw,52px)',fontWeight:900,color:'#fff',
            letterSpacing:'-0.02em',marginBottom:12,
          }}>
            {lang ? <>সাধারণ <span className="ws-grad">প্রশ্নাবলী</span></>
                  : <>Frequently Asked <span className="ws-grad">Questions</span></>}
          </h2>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {FAQS.map((faq,i)=>{
            const d = lang ? faq.bn : faq.en;
            const isOpen = open===i;
            return (
              <div key={i} className="ws-faq-item" style={{
                borderRadius:16,overflow:'hidden',
                border:'1px solid rgba(255,255,255,.07)',
                background:'rgba(255,255,255,.03)',
                transition:'border-color .25s',
              }}>
                <button onClick={()=>setOpen(isOpen?null:i)} style={{
                  width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',
                  padding:'20px 24px',background:'none',border:'none',cursor:'pointer',
                  color:'#fff',textAlign:'left',gap:16,
                }}>
                  <span className="ws-display" style={{fontSize:15,fontWeight:700,lineHeight:1.4}}>
                    {d.q}
                  </span>
                  <ChevronRight style={{
                    width:18,height:18,color:'#f97316',flexShrink:0,
                    transform:isOpen?'rotate(90deg)':'rotate(0deg)',
                    transition:'transform .3s',
                  }} />
                </button>
                {isOpen && (
                  <div style={{padding:'0 24px 20px'}}>
                    <p style={{color:'#9ca3af',fontSize:14,lineHeight:1.8,fontWeight:300}}>{d.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   SECTION: BOTTOM CTA
══════════════════════════════════════════════════════════ */
function BottomCTA({ lang }: { lang: boolean }) {
  return (
    <section style={{padding:'120px 0',background:'#060606',position:'relative',overflow:'hidden'}}>
      <div style={{
        position:'absolute',inset:0,
        background:'radial-gradient(ellipse 70% 60% at 50% 60%,rgba(249,115,22,.09) 0%,transparent 70%)',
        pointerEvents:'none',
      }} />
      {/* Decorative rings */}
      {[500,750,1000].map((size,i)=>(
        <div key={i} style={{
          position:'absolute',top:'50%',left:'50%',
          width:size,height:size,borderRadius:'50%',
          border:`1px solid rgba(249,115,22,${.04-i*.01})`,
          transform:'translate(-50%,-50%)',pointerEvents:'none',
        }} />
      ))}

      <div className="container mx-auto" style={{padding:'0 24px',textAlign:'center',position:'relative',zIndex:5}}>
        <div style={{
          display:'inline-flex',alignItems:'center',gap:8,
          padding:'7px 18px',borderRadius:9999,
          border:'1px solid rgba(249,115,22,.25)',
          background:'rgba(249,115,22,.07)',
          color:'#fb923c',fontSize:11,fontWeight:700,
          letterSpacing:'.1em',textTransform:'uppercase',marginBottom:28,
        }}>
          <Star style={{width:13,height:13}} />
          {lang ? 'আজই শুরু করুন' : 'Start Today'}
        </div>

        <h2 className="ws-display" style={{
          fontSize:'clamp(36px,7vw,88px)',fontWeight:900,color:'#fff',
          lineHeight:.95,letterSpacing:'-0.03em',marginBottom:24,
        }}>
          {lang ? <><span>আপনার</span><br/><span className="ws-grad">স্বপ্নের সাইট</span><br/><span>বানাতে প্রস্তুত?</span></>
                : <><span>Ready to Build</span><br/><span className="ws-grad">Your Dream</span><br/><span>Website?</span></>}
        </h2>

        <p style={{color:'#6b7280',fontSize:17,fontWeight:300,
          maxWidth:440,margin:'0 auto 44px',lineHeight:1.7}}>
          {lang ? 'আজই আমাদের সাথে কথা বলুন। প্রথম কনসালটেশন সম্পূর্ণ বিনামূল্যে।'
                : 'Talk to us today. First consultation is completely free.'}
        </p>

        <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
          <Link href="/contact" style={{textDecoration:'none'}}>
            <button className="ws-display" style={{
              display:'inline-flex',alignItems:'center',gap:8,
              padding:'17px 40px',borderRadius:9999,
              background:'#ea580c',color:'#fff',
              fontWeight:900,fontSize:16,border:'none',cursor:'pointer',
              transition:'background .2s,box-shadow .3s,transform .15s',
            }}
              onMouseEnter={e=>{e.currentTarget.style.background='#f97316';e.currentTarget.style.boxShadow='0 0 60px rgba(249,115,22,.55)';e.currentTarget.style.transform='translateY(-3px)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='#ea580c';e.currentTarget.style.boxShadow='none';e.currentTarget.style.transform='translateY(0)';}}
            >
              {lang ? 'বিনামূল্যে কনসালটেশন' : 'Free Consultation'}
              <ArrowRight style={{width:19,height:19}} />
            </button>
          </Link>
          <a href="tel:+8801XXXXXXXXX" style={{textDecoration:'none'}}>
            <button style={{
              display:'inline-flex',alignItems:'center',gap:8,
              padding:'17px 36px',borderRadius:9999,
              border:'1px solid rgba(255,255,255,.12)',
              background:'rgba(255,255,255,.04)',
              color:'#d1d5db',fontWeight:600,fontSize:16,
              cursor:'pointer',backdropFilter:'blur(8px)',
              transition:'border-color .2s,color .2s,transform .15s',
            }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(249,115,22,.4)';e.currentTarget.style.color='#fff';e.currentTarget.style.transform='translateY(-3px)';}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,.12)';e.currentTarget.style.color='#d1d5db';e.currentTarget.style.transform='translateY(0)';}}
            >
              {lang ? 'কল করুন' : 'Call Us Now'}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   ROOT EXPORT
══════════════════════════════════════════════════════════ */
export function WebServiceContent() {
  const { language } = useLanguage();
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: S }} />
      <div className="ws-root" style={{background:'#060606'}}>
        <Hero         lang={language} />
        <TechTicker   />
        <WebsiteTypes lang={language} />
        <Process      lang={language} />
        <TechStack    lang={language} />
        <Pricing      lang={language} />
        <FAQ          lang={language} />
        <BottomCTA    lang={language} />
      </div>
    </>
  );
}