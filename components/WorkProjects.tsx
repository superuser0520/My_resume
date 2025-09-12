import React from 'react';
import { Section } from './Section';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { useEdit } from '../contexts/EditContext';

interface WorkProjectsProps {
    onProjectClick: (project: Project) => void;
}

export const WorkProjects: React.FC<WorkProjectsProps> = ({ onProjectClick }) => {
    const { t } = useLanguage();
    const { content } = useEdit();

    return (
        <Section id="work-projects" title={t.sectionTitles.workProjects}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.workProjectsData.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        project={project} 
                        onClick={() => onProjectClick(project)} 
                        path={`workProjectsData.${index}`}
                    />
                ))}
            </div>
        </Section>
    );
};