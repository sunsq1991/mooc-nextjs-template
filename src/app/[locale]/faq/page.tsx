import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageLayout from '@/components/PageLayout';

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function FAQPage({params}: Props) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('FAQPage');

  // Mock FAQ data
  const faqItems = [
    {
      id: 1,
      question: t('faqs.1.question') || 'How do I get started with your service?',
      answer: t('faqs.1.answer') || 'Getting started is easy! Simply sign up for an account on our website, choose your preferred plan, and follow our step-by-step onboarding process.'
    },
    {
      id: 2,
      question: t('faqs.2.question') || 'What payment methods do you accept?',
      answer: t('faqs.2.answer') || 'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for business accounts.'
    },
    {
      id: 3,
      question: t('faqs.3.question') || 'Can I cancel my subscription at any time?',
      answer: t('faqs.3.answer') || 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your subscription will remain active until the end of your current billing period.'
    },
    {
      id: 4,
      question: t('faqs.4.question') || 'Is there a free trial available?',
      answer: t('faqs.4.answer') || 'Yes! We offer a 14-day free trial on all our plans so you can test our services before committing to a paid subscription.'
    },
    {
      id: 5,
      question: t('faqs.5.question') || 'How can I contact customer support?',
      answer: t('faqs.5.answer') || 'Our customer support team is available 24/7. You can reach us through our contact form, email at support@example.com, or by phone at +1 (555) 123-4567.'
    },
    {
      id: 6,
      question: t('faqs.6.question') || 'Do you offer discounts for non-profits or educational institutions?',
      answer: t('faqs.6.answer') || 'Yes, we offer special pricing for non-profit organizations, educational institutions, and students. Please contact our sales team for more information.'
    },
  ];

  return (
    <PageLayout title={t('title') || 'Frequently Asked Questions'}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">{t('faqTitle') || 'Frequently Asked Questions'}</h1>
        
        <p className="text-center mb-12">
          {t('faqIntro') || 'Find answers to the most common questions about our products and services. If you can't find what you're looking for, please contact our support team.'}
        </p>
        
        <div className="space-y-6">
          {faqItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-3">
            {t('stillHaveQuestions') || 'Still Have Questions?'}
          </h2>
          <p className="mb-4">
            {t('contactSupportText') || 'Our support team is here to help with any questions you might have.'}
          </p>
          <a 
            href={`/${locale}/contact`}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            {t('contactSupport') || 'Contact Support'}
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
