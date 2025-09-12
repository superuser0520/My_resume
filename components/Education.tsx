import React from 'react';
import { Section } from './Section';
import { useLanguage } from '../contexts/LanguageContext';

export const Education: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Section id="education" title={t.sectionTitles.education}>
      <div className="space-y-8">
        {t.educationData.map((edu, index) => (
          <div key={index} className="bg-l_secondary dark:bg-secondary p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-l_light dark:text-light">{edu.degree}</h3>
            <p className="text-l_accent dark:text-accent">{edu.institution} | {edu.period}</p>
            <p className="text-l_dark dark:text-dark mt-2">{edu.details}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};