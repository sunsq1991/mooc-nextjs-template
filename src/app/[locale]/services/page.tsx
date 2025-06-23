import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageLayout from '@/components/PageLayout';

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function ServicesPage({params}: Props) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('ServicesPage');

  // Mock services data
  const services = [
    {
      id: 1,
      title: t('services.1.title') || 'Web Development',
      description: t('services.1.description') || 'Custom websites built with modern technologies',
      icon: '🖥️',
    },
    {
      id: 2,
      title: t('services.2.title') || 'Mobile App Development',
      description: t('services.2.description') || 'Native and cross-platform mobile applications',
      icon: '📱',
    },
    {
      id: 3,
      title: t('services.3.title') || 'UI/UX Design',
      description: t('services.3.description') || 'User-centered design that enhances user experience',
      icon: '🎨',
    },
    {
      id: 4,
      title: t('services.4.title') || 'Digital Marketing',
      description: t('services.4.description') || 'Strategic marketing to help your business grow online',
      icon: '📈',
    },
    {
      id: 5,
      title: t('services.5.title') || 'Content Creation',
      description: t('services.5.description') || 'Engaging content that tells your brand story',
      icon: '✏️',
    },
    {
      id: 6,
      title: t('services.6.title') || 'Consulting',
      description: t('services.6.description') || 'Expert advice to optimize your digital strategy',
      icon: '💡',
    }
  ];

  return (
    <PageLayout title={t('title') || 'Our Services'}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">{t('servicesTitle') || 'Services We Offer'}</h1>
        
        <p className="text-center max-w-3xl mx-auto mb-12">
          {t('servicesIntro') || 'We provide a comprehensive range of services to help your business thrive in the digital world. Our expert team is dedicated to delivering high-quality solutions tailored to your specific needs.'}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
              <a 
                href={`/${locale}/services/${service.id}`} 
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                {t('learnMore') || 'Learn More'} →
              </a>
            </div>
          ))}
        </div>
        
        <section className="mt-16 p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {t('cta.title') || 'Ready to Work Together?'}
          </h2>
          <p className="text-center mb-8">
            {t('cta.description') || 'Contact us today to discuss how our services can help your business grow.'}
          </p>
          <div className="flex justify-center">
            <a 
              href={`/${locale}/contact`} 
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              {t('cta.button') || 'Get in Touch'}
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
