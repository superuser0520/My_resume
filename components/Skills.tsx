import React from 'react';
import { Section } from './Section';
import { SkillCard } from './SkillCard';
import { useLanguage } from '../contexts/LanguageContext';

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Section id="skills" title={t.sectionTitles.skills}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.skillsData.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
};