import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageLayout from '@/components/PageLayout';

type Props = {
  params: Promise<{locale: Locale}>;
};

export default function AboutPage({params}: Props) {
  const {locale} = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('AboutPage');

  return (
    <PageLayout title={t('title') || 'About Us'}>
      <div className="max-w-3xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('ourStory.title') || 'Our Story'}</h2>
          <p className="mb-4">
            {t('ourStory.description') || 
            'Founded in [YEAR], we have been dedicated to [MISSION]. Our journey began with a simple idea: [IDEA], and has since evolved into [CURRENT STATE].'}
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('mission.title') || 'Our Mission'}</h2>
          <p className="mb-4">
            {t('mission.description') || 
            'We strive to [MISSION STATEMENT]. Our team is committed to delivering excellence in everything we do.'}
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('team.title') || 'Our Team'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team members would be mapped here from data */}
            <div className="p-4 border rounded-lg">
              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
              <h3 className="font-bold text-center">{t('team.member1.name') || 'Team Member 1'}</h3>
              <p className="text-center text-sm">{t('team.member1.role') || 'Position'}</p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
