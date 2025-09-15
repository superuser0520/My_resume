import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {

  return (
    <div
      onClick={onClick}
      className="group bg-l_secondary dark:bg-secondary rounded-lg shadow-lg hover:shadow-xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex flex-col relative"
    >
      <div className="overflow-hidden h-48 bg-l_primary dark:bg-primary">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-l_light dark:text-light mb-2 truncate">
            {project.title}
        </h3>
        <p className="text-sm text-l_dark dark:text-dark line-clamp-2 mb-4 flex-grow">
            {project.concept}
        </p>
        <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="bg-l_primary dark:bg-primary text-l_accent dark:text-accent text-xs font-semibold px-2 py-1 rounded-full">
                    {tech}
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
