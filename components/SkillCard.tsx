import React, { useState, useEffect, useRef } from 'react';
import type { Skill } from '../types';
import { useEdit } from '../contexts/EditContext';
import { EditableText } from './Editable';

interface SkillCardProps {
  skill: Skill;
  path: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, path }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { content } = useEdit();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  const progressBarWidth = isVisible ? `${skill.level * 10}%` : '0%';

  const getProficiency = (level: number): string => {
    if (!content.proficiencyLevels) return '';
    if (level >= 9) return content.proficiencyLevels.expert;
    if (level >= 7) return content.proficiencyLevels.advanced;
    if (level >= 5) return content.proficiencyLevels.proficient;
    if (level >= 3) return content.proficiencyLevels.intermediate;
    return content.proficiencyLevels.beginner;
  };

  return (
    <div 
      ref={cardRef}
      className="bg-l_secondary dark:bg-secondary p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <h3 className="text-xl font-bold text-l_light dark:text-light mb-2">
        <EditableText path={`${path}.name`}>{skill.name}</EditableText>
      </h3>
       <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-l_dark dark:text-dark">{skill.level}/10</span>
        <span className="text-sm font-bold text-l_accent dark:text-accent">{getProficiency(skill.level)}</span>
      </div>
      <div className="w-full bg-l_primary dark:bg-primary rounded-full h-2.5 mb-4 overflow-hidden">
        <div 
          className="bg-l_accent dark:bg-accent h-2.5 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: progressBarWidth }}
        ></div>
      </div>
      <p className="text-l_dark dark:text-dark">
        <EditableText path={`${path}.description`}>{skill.description}</EditableText>
      </p>
    </div>
  );
};