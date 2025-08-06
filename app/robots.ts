import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/success', '/error'],
    },
    sitemap: 'https://trytalentflow.com/sitemap.xml',
  }
}