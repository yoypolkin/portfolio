export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      //   disallow: '/api/', // Set API routes when create one to not to be indexed
    },
    sitemap: 'https://yoypolkin.com/sitemap.xml',
  };
}
