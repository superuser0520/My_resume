import React from 'react';
import { Section } from './Section';
import { useLanguage } from '../contexts/LanguageContext';

export const AIPanelTool: React.FC = () => {
  const { t } = useLanguage();
  const toolUrl = "https://ai-panel-design-tools-49698135359.us-west1.run.app/";

  if (!t.aiPanelTool) {
    return null;
  }

  return (
    <Section id="ai-panel-tool" title={t.sectionTitles.aiPanelTool}>
      <div className="bg-l_secondary dark:bg-secondary p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-l_light dark:text-light mb-4">
              {t.aiPanelTool.title}
            </h3>
            <p className="text-l_dark dark:text-dark mb-6">
              {t.aiPanelTool.description}
            </p>
            <a
              href={toolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-l_accent dark:bg-accent text-white dark:text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
            >
              {t.aiPanelTool.button}
            </a>
          </div>
          <div className="flex justify-center">
             <img 
                src={t.aiPanelTool.imageUrl} 
                alt="AI Panel Design Tool" 
                className="rounded-lg shadow-xl w-full max-w-md object-cover aspect-video transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
