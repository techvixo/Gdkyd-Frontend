export default function robots() {
      return {
        rules: {
          userAgent: '*',
          allow: '/',
          disallow: '/admin/',
          disallow: '/private/',
        },
        sitemap: 'https://gdkyd.com/sitemap.xml',
      }
    }