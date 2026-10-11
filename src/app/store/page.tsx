import type { Metadata } from 'next';
import CompaniesClient from './CompaniesClient';

export const metadata: Metadata = {
  title: 'Our Companies | Pixel & Code',
  description:
    'Brands and businesses that trust Pixel & Code with their websites, e-commerce stores and digital presence in Bangladesh.',
  alternates: {
    canonical: 'https://pixelandcode.agency/store',
  },
};

export default function CompaniesPage() {
  return <CompaniesClient />;
}