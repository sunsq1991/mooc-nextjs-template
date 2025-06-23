import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageLayout from '@/components/PageLayout';

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function ContactPage({params}: Props) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('ContactPage');

  return (
    <PageLayout title={t('title') || 'Contact Us'}>
      <div className="max-w-3xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('getInTouch') || 'Get in Touch'}</h2>
          <p className="mb-6">
            {t('contactIntro') || 
            'Have questions or want to learn more? Fill out the form below and our team will get back to you as soon as possible.'}
          </p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">{t('form.name') || 'Name'}</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 border rounded-md" 
                placeholder={t('form.namePlaceholder') || 'Your name'}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1">{t('form.email') || 'Email'}</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border rounded-md" 
                placeholder={t('form.emailPlaceholder') || 'your.email@example.com'}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1">{t('form.message') || 'Message'}</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full p-2 border rounded-md" 
                placeholder={t('form.messagePlaceholder') || 'How can we help you?'}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              {t('form.submit') || 'Send Message'}
            </button>
          </form>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('contactInfo.title') || 'Contact Information'}</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold mb-2">{t('contactInfo.address.title') || 'Address'}</h3>
              <p>{t('contactInfo.address.value') || '123 Main Street, City, Country'}</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold mb-2">{t('contactInfo.email.title') || 'Email'}</h3>
              <p>{t('contactInfo.email.value') || 'contact@example.com'}</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold mb-2">{t('contactInfo.phone.title') || 'Phone'}</h3>
              <p>{t('contactInfo.phone.value') || '+1 (555) 123-4567'}</p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
