import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageLayout from '@/components/PageLayout';

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function BlogPage({params}: Props) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('BlogPage');

  // Mock blog posts data - in a real app, this would come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: t('posts.1.title') || 'Getting Started with Next.js',
      excerpt: t('posts.1.excerpt') || 'Learn how to build modern web applications with Next.js',
      date: '2025-06-20',
      imageUrl: '/blog-placeholder-1.jpg',
      slug: 'getting-started-with-nextjs'
    },
    {
      id: 2,
      title: t('posts.2.title') || 'The Power of Tailwind CSS',
      excerpt: t('posts.2.excerpt') || 'Discover how Tailwind CSS can speed up your design workflow',
      date: '2025-06-15',
      imageUrl: '/blog-placeholder-2.jpg',
      slug: 'power-of-tailwind-css'
    },
    {
      id: 3,
      title: t('posts.3.title') || 'Internationalization with next-intl',
      excerpt: t('posts.3.excerpt') || 'How to make your Next.js app support multiple languages',
      date: '2025-06-10',
      imageUrl: '/blog-placeholder-3.jpg',
      slug: 'internationalization-with-next-intl'
    }
  ];

  return (
    <PageLayout title={t('title') || 'Blog'}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{t('latestPosts') || 'Latest Posts'}</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href={`/${locale}/blog/${post.slug}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  {t('readMore') || 'Read More'} →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <nav aria-label="Blog pagination" className="inline-flex">
            <button className="px-4 py-2 border border-r-0 rounded-l-md">←</button>
            <button className="px-4 py-2 border bg-blue-600 text-white">1</button>
            <button className="px-4 py-2 border border-l-0">2</button>
            <button className="px-4 py-2 border border-l-0">3</button>
            <button className="px-4 py-2 border border-l-0 rounded-r-md">→</button>
          </nav>
        </div>
      </div>
    </PageLayout>
  );
}
