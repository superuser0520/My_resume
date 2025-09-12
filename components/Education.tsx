import React from 'react';
import { Section } from './Section';
import { useLanguage } from '../contexts/LanguageContext';
import { useEdit } from '../contexts/EditContext';
import { EditableText } from './Editable';

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const { content } = useEdit();

  return (
    <Section id="education" title={t.sectionTitles.education}>
      <div className="space-y-8">
        {content.educationData.map((edu, index) => (
          <div key={index} className="bg-l_secondary dark:bg-secondary p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-l_light dark:text-light">
              <EditableText path={`educationData.${index}.degree`}>{edu.degree}</EditableText>
            </h3>
            <p className="text-l_accent dark:text-accent">
              <EditableText path={`educationData.${index}.institution`}>{edu.institution}</EditableText> | <EditableText path={`educationData.${index}.period`}>{edu.period}</EditableText>
            </p>
            <p className="text-l_dark dark:text-dark mt-2">
              <EditableText path={`educationData.${index}.details`}>{edu.details}</EditableText>
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};