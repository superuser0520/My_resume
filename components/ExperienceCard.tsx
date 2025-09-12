import React, { useState } from 'react';
import type { Experience, Role } from '../types';
import { ChevronDown } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { useEdit } from '../contexts/EditContext';
import { EditableText, EditableImage } from './Editable';

interface RoleItemProps {
    role: Role;
    path: string;
}

const RoleItem: React.FC<RoleItemProps> = ({ role, path }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasDetails = role.details && role.details.length > 0;
    const { t } = useLanguage();

    return (
        <div className="border-l-2 border-slate-300 dark:border-slate-700 pl-6 pb-6 relative">
             <div className="absolute -left-[10px] top-1.5 w-4 h-4 bg-slate-300 dark:bg-slate-700 rounded-full border-4 border-l_secondary dark:border-secondary"></div>
             <div className="flex items-center flex-wrap mb-1">
                <h4 className="font-bold text-l_light dark:text-light mr-3">
                    <EditableText path={`${path}.title`}>{role.title}</EditableText>
                </h4>
                {role.type === 'Internship' && (
                    <span className="bg-l_accent/20 dark:bg-accent/20 text-l_accent dark:text-accent text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        <EditableText path="roleTypes.internship">{t.roleTypes.internship}</EditableText>
                    </span>
                )}
             </div>
             <div className="flex items-center">
                <p className="text-sm text-l_accent dark:text-accent">
                    <EditableText path={`${path}.period`}>{role.period}</EditableText>
                </p>
                {hasDetails && (
                    <button onClick={() => setIsOpen(!isOpen)} className="ml-4 text-l_accent dark:text-accent" aria-expanded={isOpen} aria-label="Toggle details">
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                )}
             </div>
             <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {hasDetails && (
                     <ul className="list-disc list-inside text-l_dark dark:text-dark space-y-2 mt-4">
                        {role.details.map((detail, index) => (
                            <li key={index}>
                                <EditableText path={`${path}.details.${index}`}>{detail}</EditableText>
                            </li>
                        ))}
                    </ul>
                )}
             </div>
        </div>
    );
};

interface ExperienceCardProps {
  experience: Experience;
  path: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, path }) => {
  return (
    <div className="bg-l_secondary dark:bg-secondary p-8 rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-20 h-16 mr-6 bg-l_primary dark:bg-primary rounded-md p-2 flex items-center justify-center flex-shrink-0">
            <EditableImage path={`${path}.logoUrl`} alt={`${experience.company} logo`} className="max-w-full max-h-full object-contain" />
        </div>
        <h3 className="text-2xl font-bold text-l_accent dark:text-accent">
            <EditableText path={`${path}.company`}>{experience.company}</EditableText>
        </h3>
      </div>
      <div>
        {experience.roles.map((role, index) => (
          <RoleItem key={index} role={role} path={`${path}.roles.${index}`} />
        ))}
      </div>
    </div>
  );
};