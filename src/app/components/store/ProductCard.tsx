'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/storeData';
import { Eye, ExternalLink, Zap, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const TECH_COLORS: Record<string, string> = {
  'Next.js':      '#ffffff',
  'React':        '#61dafb',
  'React Js':     '#61dafb',
  'Tailwind':     '#22d3ee',
  'Tailwind CSS': '#22d3ee',
  'Node.js':      '#68a063',
  'MongoDB':      '#4ade80',
  'Flutter':      '#38bdf8',
  'GSAP':         '#c084fc',
  'Framer Motion':'#f472b6',
  'SSLCommerz':   '#f97316',
  'Express':      '#94a3b8',
  'shadcn UI':    '#a78bfa',
  'Mongoose':     '#4ade80',
};

export function ProductCard({ product }: ProductCardProps) {
  const { language } = useLanguage();
  const [hovered, setHovered] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const title       = language ? product.titleBn       : product.titleEn;
  const description = language ? product.shortDescriptionBn : product.shortDescriptionEn;
  const category    = language ? product.categoryBn    : product.categoryEn;

  return (
    <div
      className="group relative flex flex-col h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(249,115,22,0.35)' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? '0 0 40px rgba(249,115,22,0.10), 0 24px 48px rgba(0,0,0,0.4)' : '0 4px 24px rgba(0,0,0,0.3)',
        transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
    >
      {/* ── Image area ── */}
      <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', background: '#111' }}>

        {/* Badges */}
        <div style={{
          position: 'absolute', top: 12, left: 12, zIndex: 10,
          display: 'flex', gap: 6,
        }}>
          {product.isPopular && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '4px 10px', borderRadius: 9999,
              background: 'linear-gradient(135deg,#ea580c,#f97316)',
              color: '#fff', fontSize: 9, fontWeight: 800,
              letterSpacing: '.10em', textTransform: 'uppercase',
              boxShadow: '0 4px 12px rgba(249,115,22,0.5)',
            }}>
              <Zap style={{ width: 9, height: 9, fill: '#fff' }} />
              {language ? 'জনপ্রিয়' : 'POPULAR'}
            </div>
          )}
          {discount > 0 && (
            <div style={{
              padding: '4px 10px', borderRadius: 9999,
              background: '#dc2626', color: '#fff',
              fontSize: 9, fontWeight: 800,
              letterSpacing: '.10em',
            }}>
              -{discount}% OFF
            </div>
          )}
        </div>

        {/* Image */}
        {product.image ? (
          <Image
            src={product.image}
            alt={title}
            fill
            className="object-cover"
            style={{
              transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
              transform: hovered ? 'scale(1.07)' : 'scale(1)',
              filter: hovered ? 'brightness(0.55)' : 'brightness(0.85)',
            }}
          />
        ) : (
          <div style={{
            height: '100%', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.20)', fontSize: 13,
          }}>No Preview</div>
        )}

        {/* Hover action buttons */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 5,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
        }}>
          <Link href={`/store/${product.id}`}
            style={{
              width: 46, height: 46, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(255,255,255,0.95)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              transition: 'transform .2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}
          >
            <Eye style={{ width: 18, height: 18, color: '#0a0a0a' }} />
          </Link>
          <a href={product.livePreviewUrl} target="_blank" rel="noopener noreferrer"
            style={{
              width: 46, height: 46, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: '#f97316',
              boxShadow: '0 4px 16px rgba(249,115,22,0.5)',
              transition: 'transform .2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}
          >
            <ExternalLink style={{ width: 18, height: 18, color: '#fff' }} />
          </a>
        </div>

        {/* Bottom gradient on image */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
          background: 'linear-gradient(to top, rgba(8,8,8,0.9), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
      </div>

      {/* ── Content ── */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '20px 22px 22px' }}>

        {/* category + price row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <span style={{
            padding: '3px 10px', borderRadius: 6,
            background: 'rgba(249,115,22,0.10)',
            border: '1px solid rgba(249,115,22,0.22)',
            color: '#f97316', fontSize: 10, fontWeight: 700,
            letterSpacing: '.10em', textTransform: 'uppercase',
          }}>
            {category}
          </span>

          {/* Price block */}
          <div style={{ textAlign: 'right' }}>
            {product.originalPrice && (
              <div style={{
                fontSize: 11, color: 'rgba(255,255,255,0.28)',
                textDecoration: 'line-through', lineHeight: 1,
              }}>
                ${product.originalPrice.toLocaleString()}
              </div>
            )}
            <div style={{
              fontSize: 20, fontWeight: 900, color: '#fff',
              lineHeight: 1.1, fontFamily: "'Syne',sans-serif",
            }}>
              ${product.price.toLocaleString()}
              <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.35)', marginLeft: 2 }}>USD</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: 16, fontWeight: 800, color: '#fff',
          lineHeight: 1.25, marginBottom: 8,
          fontFamily: "'Syne',sans-serif",
          transition: 'color .25s',
          ...(hovered ? { color: '#fb923c' } : {}),
        }}>
          <Link href={`/store/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {title}
          </Link>
        </h3>

        {/* Description */}
        <p style={{
          fontSize: 12, color: 'rgba(255,255,255,0.42)',
          lineHeight: 1.75, marginBottom: 18, flex: 1,
          display: '-webkit-box', WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {description}
        </p>

        {/* Tech stack */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 6,
          paddingTop: 14,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          marginBottom: 18,
        }}>
          {product.techStack.slice(0, 4).map(tech => (
            <span key={tech} style={{
              padding: '3px 8px', borderRadius: 5,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              fontSize: 10, fontWeight: 600,
              fontFamily: "'JetBrains Mono',monospace",
              color: TECH_COLORS[tech] || 'rgba(255,255,255,0.45)',
              letterSpacing: '.04em',
            }}>{tech}</span>
          ))}
          {product.techStack.length > 4 && (
            <span style={{
              fontSize: 10, color: 'rgba(255,255,255,0.25)',
              padding: '3px 6px', fontFamily: "'JetBrains Mono',monospace",
            }}>+{product.techStack.length - 4}</span>
          )}
        </div>

        {/* CTA row */}
        <div style={{ display: 'flex', gap: 8 }}>
          <Link href={`/store/${product.id}`}
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              padding: '10px 14px', borderRadius: 10,
              background: 'rgba(249,115,22,0.10)',
              border: '1px solid rgba(249,115,22,0.25)',
              color: '#fb923c', fontSize: 12, fontWeight: 700,
              letterSpacing: '.04em', textDecoration: 'none',
              transition: 'all .25s',
              fontFamily: "'Syne',sans-serif",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#f97316';
              el.style.color = '#fff';
              el.style.boxShadow = '0 0 20px rgba(249,115,22,0.35)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = 'rgba(249,115,22,0.10)';
              el.style.color = '#fb923c';
              el.style.boxShadow = 'none';
            }}
          >
            {language ? 'বিস্তারিত দেখুন' : 'View Details'}
            <ArrowUpRight style={{ width: 13, height: 13 }} />
          </Link>

          <a href={product.livePreviewUrl} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 40, height: 40, borderRadius: 10,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.40)',
              transition: 'all .25s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = 'rgba(249,115,22,0.35)';
              el.style.color = '#fb923c';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = 'rgba(255,255,255,0.08)';
              el.style.color = 'rgba(255,255,255,0.40)';
            }}
            title="Live Preview"
          >
            <ExternalLink style={{ width: 15, height: 15 }} />
          </a>
        </div>
      </div>
    </div>
  );
}