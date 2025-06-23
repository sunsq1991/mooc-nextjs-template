import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageLayout from '@/components/PageLayout';

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function TermsOfServicePage({params}: Props) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('TermsPage');

  return (
    <PageLayout title={t('title') || 'Terms of Service'}>
      <div className="max-w-3xl mx-auto prose">
        <h1 className="text-3xl font-bold mb-6">{t('title') || 'Terms of Service'}</h1>
        <p className="text-sm text-gray-500 mb-8">
          {t('lastUpdated') || 'Last Updated: June 23, 2025'}
        </p>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{t('agreement.title') || '1. Agreement to Terms'}</h2>
          <p>
            {t('agreement.content') || 
            'These Terms of Service constitute a legally binding agreement between you and our company regarding your use of our website and the services we provide. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms.'}
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{t('access.title') || '2. Access to the Site'}</h2>
          <p>
            {t('access.content') || 
            'We reserve the right to withdraw or amend this website, and any service or material we provide, in our sole discretion without notice. We will not be liable if for any reason all or any part of the website is unavailable at any time or for any period.'}
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{t('accounts.title') || '3. User Accounts'}</h2>
          <p>
            {t('accounts.content') || 
            'When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our website.'}
          </p>
          <p className="mt-3">
            {t('accounts.responsibility') || 
            'You are responsible for safeguarding the password that you use to access the website and for any activities or actions under your password. We encourage you to use "strong" passwords (passwords that use a combination of upper and lower case letters, numbers, and symbols) with your account.'}
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{t('intellectual.title') || '4. Intellectual Property Rights'}</h2>
          <p>
            {t('intellectual.content') || 
            'The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), are owned by our company, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.'}
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{t('prohibited.title') || '5. Prohibited Uses'}</h2>
          <p>
            {t('prohibited.content') || 
            'You may use the website only for lawful purposes and in accordance with these Terms. You agree not to use the website:'}
          </p>
          <ul className="list-disc pl-6 mt-3">
            <li>{t('prohibited.reason1') || 'In any way that violates any applicable federal, state, local, or international law or regulation'}</li>
            <li>{t('prohibited.reason2') || 'For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way'}</li>
            <li>{t('prohibited.reason3') || 'To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation'}</li>
            <li>{t('prohibited.reason4') || 'To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity'}</li>
            <li>{t('prohibited.reason5') || 'To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website'}</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{t('disclaimer.title') || '6. Disclaimer of Warranties'}</h2>
          <p>
            {t('disclaimer.content') || 
            'THE WEBSITE AND ITS CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE WEBSITE.'}
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{t('contact.title') || '7. Contact Us'}</h2>
          <p>
            {t('contact.content') || 
            'All questions, feedback, comments, requests for technical support, and other communications relating to the website should be directed to:'}
          </p>
          <address className="mt-3 not-italic">
            <strong>{t('contact.company') || 'Company Name'}</strong><br />
            {t('contact.address') || '123 Main Street, City, Country'}<br />
            {t('contact.email') || 'legal@example.com'}<br />
            {t('contact.phone') || '+1 (555) 123-4567'}
          </address>
        </section>
      </div>
    </PageLayout>
  );
}
