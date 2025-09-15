import React from 'react';
import { Section } from './Section';
import { useLanguage } from '../contexts/LanguageContext';
import { useEdit } from '../contexts/EditContext';
import { EditableText, EditableImage } from './Editable';

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const { content } = useEdit();

  return (
    <Section id="education" title={t.sectionTitles.education}>
      <div className="space-y-8">
        {content.educationData.map((edu, index) => (
          <div key={index} className="bg-l_secondary dark:bg-secondary p-6 rounded-lg shadow-lg flex items-center gap-6">
            <div className="w-24 h-24 flex-shrink-0 bg-white rounded-md p-2 flex items-center justify-center">
              <EditableImage 
                path={`educationData.${index}.imageUrl`} 
                alt={`${edu.institution} logo`} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-l_light dark:text-light">
                <EditableText path={`educationData.${index}.degree`}>{edu.degree}</EditableText>
              </h3>
              <p className="text-l_accent dark:text-accent">
                <EditableText path={`educationData.${index}.institution`}>{edu.institution}</EditableText> | <EditableText path={`educationData.${index}.period`}>{edu.period}</EditableText>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};