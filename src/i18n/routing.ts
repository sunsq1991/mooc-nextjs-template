import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'zh-CN', 'zh-TW'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/faq': '/faq',
    '/blog': '/blog',
    '/contact': '/contact'
  }
});
