import React from 'react';
import type { Project } from '../types';
import { EditableText, EditableImage } from './Editable';
import { useEdit } from '../contexts/EditContext';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  path: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, path }) => {
  const { isEditing } = useEdit();

  return (
    <div
      onClick={!isEditing ? onClick : undefined}
      className="group bg-l_secondary dark:bg-secondary rounded-lg shadow-lg hover:shadow-xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex flex-col relative"
    >
      {project.value && (
        <div className="absolute top-3 right-3 bg-l_accent dark:bg-accent text-white dark:text-primary text-xs font-bold px-3 py-1 rounded-full z-10">
            <EditableText path={`${path}.value`}>{project.value}</EditableText>
        </div>
      )}
      <div className="overflow-hidden h-48">
        <EditableImage path={`${path}.imageUrl`} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-l_light dark:text-light mb-2 truncate pr-20">
            <EditableText path={`${path}.title`}>{project.title}</EditableText>
        </h3>
        <p className="text-sm text-l_dark dark:text-dark line-clamp-2 mb-4 flex-grow">
            <EditableText path={`${path}.concept`}>{project.concept}</EditableText>
        </p>
        <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
                <span key={tech} className="bg-l_primary dark:bg-primary text-l_accent dark:text-accent text-xs font-semibold px-2 py-1 rounded-full">
                    <EditableText path={`${path}.technologies.${index}`}>{tech}</EditableText>
                </span>
            ))}
             {project.technologies.length > 3 && (
                <span className="bg-l_primary dark:bg-primary text-l_accent dark:text-accent text-xs font-semibold px-2 py-1 rounded-full">
                    + {project.technologies.length - 3} more
                </span>
            )}
        </div>
      </div>
    </div>
  );
};