import React from 'react';
import { Section } from './Section';
import { Certificate, Star } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

export const Development: React.FC = () => {
  const { t } = useLanguage();
  const professionalDev = t.developmentData.filter(d => d.category === 'Professional Development');
  const achievements = t.developmentData.filter(d => d.category === 'Additional Achievement');

  return (
    <Section id="development" title={t.sectionTitles.development}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-l_accent dark:text-accent mb-6">{t.dev.profDev}</h3>
          <ul className="space-y-4">
            {professionalDev.map((item, index) => (
              <li key={index} className="flex items-start">
                <Certificate className="w-5 h-5 text-l_accent dark:text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-l_light dark:text-light">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-l_accent dark:text-accent mb-6">{t.dev.achieve}</h3>
          <ul className="space-y-4">
            {achievements.map((item, index) => (
              <li key={index} className="flex items-start">
                <Star className="w-5 h-5 text-l_accent dark:text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-l_light dark:text-light">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};