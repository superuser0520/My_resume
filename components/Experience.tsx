import React from 'react';
import { Section } from './Section';
import { ExperienceCard } from './ExperienceCard';
import { useLanguage } from '../contexts/LanguageContext';
import { useEdit } from '../contexts/EditContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  const { content } = useEdit();

  return (
    <Section id="experience" title={t.sectionTitles.experience}>
      <div className="space-y-8">
        {content.experienceData.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} path={`experienceData.${index}`} />
        ))}
      </div>
    </Section>
  );
};