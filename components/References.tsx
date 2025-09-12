import React from 'react';
import { Section } from './Section';
import { useLanguage } from '../contexts/LanguageContext';
import { useEdit } from '../contexts/EditContext';
import { EditableText } from './Editable';

export const References: React.FC = () => {
  const { t } = useLanguage();
  const { content } = useEdit();
  return (
    <Section id="references" title={t.sectionTitles.references}>
      <div className="bg-l_secondary dark:bg-secondary p-8 rounded-lg shadow-lg text-center md:text-left">
        <p className="text-xl font-bold text-l_light dark:text-light mb-4">
            <EditableText path="references.title">{content.references.title}</EditableText>
        </p>
        <p className="text-l_dark dark:text-dark">
            <EditableText path="references.body">{content.references.body}</EditableText>
        </p>
      </div>
    </Section>
  );
};