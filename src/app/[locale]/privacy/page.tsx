import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageLayout from '@/components/PageLayout';

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function PrivacyPolicyPage({params}: Props) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('PrivacyPage');

  return (
    <PageLayout title={t('title') || 'Privacy Policy'}>
      <div className="max-w-3xl mx-auto prose">
        <h1 className="text-3xl font-bold mb-6">{t('title') || 'Privacy Policy'}</h1>
        <p className="text-sm text-gray-500 mb-8">
          {t('lastUpdated') || 'Last Updated: June 23, 2025'}
        </p>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{t('introduction.title') || '1. Introduction'}</h2>
          <p>
            {t('introduction.content') || 
            'This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.'}
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{t('collection.title') || '2. Information We Collect'}</h2>
          <p>
            {t('collection.content') || 
            'We may collect information about you in various ways. The information we may collect on the Site includes:'}
          </p>
          <ul className="list-disc pl-6 mt-3">
            <li>{t('collection.personal') || 'Personal Data: Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.'}</li>
            <li>{t('collection.derivative') || 'Derivative Data: Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.'}</li>
            <li>{t('collection.cookies') || 'Cookies and Similar Technologies: We may use cookies and similar tracking technologies to track the activity on our Site and store certain information.'}</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{t('use.title') || '3. How We Use Your Information'}</h2>
          <p>
            {t('use.content') || 
            'We may use the information we collect about you for various purposes, including:'}
          </p>
          <ul className="list-disc pl-6 mt-3">
            <li>{t('use.reason1') || 'To provide and maintain our Service'}</li>
            <li>{t('use.reason2') || 'To notify you about changes to our Service'}</li>
            <li>{t('use.reason3') || 'To allow you to participate in interactive features of our Service when you choose to do so'}</li>
            <li>{t('use.reason4') || 'To provide customer support'}</li>
            <li>{t('use.reason5') || 'To gather analysis or valuable information so that we can improve our Service'}</li>
            <li>{t('use.reason6') || 'To monitor the usage of our Service'}</li>
            <li>{t('use.reason7') || 'To detect, prevent and address technical issues'}</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{t('disclosure.title') || '4. Disclosure of Your Information'}</h2>
          <p>
            {t('disclosure.content') || 
            'We may share information we have collected about you in certain situations. Your information may be disclosed as follows:'}
          </p>
          <ul className="list-disc pl-6 mt-3">
            <li>{t('disclosure.business') || 'Business Transfers: If we or our subsidiaries are involved in a merger, acquisition, or asset sale, your personal information may be transferred.'}</li>
            <li>{t('disclosure.thirdParty') || 'Third-Party Service Providers: We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.'}</li>
            <li>{t('disclosure.legal') || 'Legal Requirements: We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.'}</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{t('contact.title') || '5. Contact Us'}</h2>
          <p>
            {t('contact.content') || 
            'If you have questions or comments about this Privacy Policy, please contact us at:'}
          </p>
          <address className="mt-3 not-italic">
            <strong>{t('contact.company') || 'Company Name'}</strong><br />
            {t('contact.address') || '123 Main Street, City, Country'}<br />
            {t('contact.email') || 'privacy@example.com'}<br />
            {t('contact.phone') || '+1 (555) 123-4567'}
          </address>
        </section>
      </div>
    </PageLayout>
  );
}
