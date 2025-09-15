import React from 'react';
import { Section } from './Section';
import { ExperienceCard } from './ExperienceCard';
import { useLanguage } from '../contexts/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="experience" title={t.sectionTitles.experience}>
      <div className="space-y-8">
        {t.experienceData.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </Section>
  );
};
