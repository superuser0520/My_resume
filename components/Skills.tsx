import React from 'react';
import { Section } from './Section';
import { SkillCard } from './SkillCard';
import { useLanguage } from '../contexts/LanguageContext';
import { useEdit } from '../contexts/EditContext';
import { EditableText } from './Editable';

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const { content } = useEdit();

  return (
    <Section id="skills" title={t.sectionTitles.skills}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.skillsData.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} path={`skillsData.${index}`} />
        ))}
      </div>
    </Section>
  );
};