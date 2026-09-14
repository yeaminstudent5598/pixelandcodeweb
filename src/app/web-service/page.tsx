// File: src/app/web-service/page.tsx

import React from 'react';
import type { Metadata } from 'next';
import { WebServiceContent } from '../components/shared/WebServiceContent';

// SEO Metadata for the Web Service Page
export const metadata: Metadata = {
  title: 'Web Services | Pixel & Code',
  description: 'We build exceptional web experiences using Next.js, React, and modern technology. Transform your business with our expert web development solutions.',
};

// Next.js page MUST have a default export
export default function WebServicePage() {
  return (
    <main>
      <WebServiceContent />
    </main>
  );
}