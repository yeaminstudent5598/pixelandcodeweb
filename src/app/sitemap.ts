import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pixelandcode.agency'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/pricing',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Services pages
  const services = [
    'web-design',
    'graphics-design',
    'video-editing',
    'meta-marketing',
    'ui-ux-design',
    'seo',
    'services',
    'portfolio',
    'about',
    'contact',
  ].map((service) => ({
    url: `${baseUrl}/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...services]
}