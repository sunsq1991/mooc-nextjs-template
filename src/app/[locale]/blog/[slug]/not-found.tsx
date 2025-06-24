import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('BlogDetail');
  
  return (
    <div className="py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">{t('postNotFound')}</h1>
      <p className="mb-8 text-gray-600">{t('postNotFoundDescription')}</p>
      <Link
        href="/blog"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        {t('backToBlog')}
      </Link>
    </div>
  );
}
