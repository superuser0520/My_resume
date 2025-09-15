import React from 'react';
import { Section } from './Section';
import { useLanguage } from '../contexts/LanguageContext';

export const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="education" title={t.sectionTitles.education}>
      <div className="space-y-8">
        {t.educationData.map((edu, index) => (
          <div key={index} className="bg-l_secondary dark:bg-secondary p-6 rounded-lg shadow-lg flex items-center gap-6">
            <div className="w-24 h-24 flex-shrink-0 bg-white rounded-md p-2 flex items-center justify-center">
              <img 
                src={edu.imageUrl} 
                alt={`${edu.institution} logo`} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-l_light dark:text-light">
                {edu.degree}
              </h3>
              <p className="text-l_accent dark:text-accent">
                {edu.institution} | {edu.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
