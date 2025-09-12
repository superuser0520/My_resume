import React from 'react';
import { Section } from './Section';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { useEdit } from '../contexts/EditContext';

interface AcademicProjectsProps {
    onProjectClick: (project: Project) => void;
}

export const AcademicProjects: React.FC<AcademicProjectsProps> = ({ onProjectClick }) => {
    const { t } = useLanguage();
    const { content } = useEdit();

    return (
        <Section id="academic-projects" title={t.sectionTitles.academicProjects}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.academicProjectsData.map((project, index) => (
                     <ProjectCard 
                        key={index} 
                        project={project} 
                        onClick={() => onProjectClick(project)} 
                        path={`academicProjectsData.${index}`}
                    />
                ))}
            </div>
        </Section>
    );
};