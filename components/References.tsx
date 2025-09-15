import React from 'react';
import { Section } from './Section';
import { useLanguage } from '../contexts/LanguageContext';

export const References: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Section id="references" title={t.sectionTitles.references}>
      <div className="bg-l_secondary dark:bg-secondary p-8 rounded-lg shadow-lg text-center md:text-left">
        <p className="text-xl font-bold text-l_light dark:text-light mb-4">
            {t.references.title}
        </p>
        <p className="text-l_dark dark:text-dark">
            {t.references.body}
        </p>
      </div>
    </Section>
  );
};
