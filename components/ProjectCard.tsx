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
      className="group bg-l_secondary dark:bg-secondary rounded-lg shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:-translate-y-2 flex flex-col relative"
    >
      {project.value && (
        <div className="absolute top-3 right-3 bg-l_accent dark:bg-accent text-white dark:text-primary text-xs font-bold px-3 py-1 rounded-full z-10">
            {project.value}
        </div>
      )}
      <div className="overflow-hidden h-48">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-l_light dark:text-light mb-2 truncate pr-20">{project.title}</h3>
        <p className="text-sm text-l_dark dark:text-dark line-clamp-2 mb-4 flex-grow">{project.concept}</p>
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