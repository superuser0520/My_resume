import React from 'react';
import type { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    const { t } = useLanguage();
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
            onClick={onClose}
        >
            <div 
                className="bg-l_secondary dark:bg-secondary rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-l_dark dark:text-dark hover:text-l_accent dark:hover:text-accent transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div className="w-full h-64 bg-l_primary dark:bg-primary rounded-md mb-6 flex items-center justify-center overflow-hidden">
                    <img src={project.imageUrl} alt={project.title} className="max-w-full max-h-full object-contain" />
                </div>
                <h2 className="text-3xl font-bold text-l_accent dark:text-accent mb-4">{project.title}</h2>
                
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-l_dark dark:text-dark mb-3">{t.projectModal.tech}</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="bg-l_primary dark:bg-primary text-l_accent dark:text-accent text-sm font-medium px-3 py-1.5 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="text-l_light dark:text-light space-y-4">
                    <p><strong className="text-l_dark dark:text-dark">{t.projectModal.concept}:</strong> {project.concept}</p>
                    {project.details && <p>{project.details}</p>}
                    {project.impact && <p><strong className="text-l_dark dark:text-dark">{t.projectModal.impact}:</strong> {project.impact}</p>}
                    {project.process && <p><strong className="text-l_dark dark:text-dark">{t.projectModal.process}:</strong> {project.process}</p>}
                    {project.methodology && <p><strong className="text-l_dark dark:text-dark">{t.projectModal.methodology}:</strong> {project.methodology}</p>}
                    {project.keyFeatures && (
                        <div>
                            <strong className="text-l_dark dark:text-dark">{t.projectModal.keyFeatures}:</strong>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                {project.keyFeatures.map((feature, index) => <li key={index}>{feature}</li>)}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};