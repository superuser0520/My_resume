import React, { useState, useEffect, useRef } from 'react';
import type { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

  return (
    <div 
      ref={cardRef}
      className="bg-l_secondary dark:bg-secondary p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <h3 className="text-xl font-bold text-l_light dark:text-light mb-3">{skill.name}</h3>
      <div className="w-full bg-l_primary dark:bg-primary rounded-full h-2.5 mb-4 overflow-hidden">
        <div 
          className="bg-l_accent dark:bg-accent h-2.5 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: progressBarWidth }}
        ></div>
      </div>
      <p className="text-l_dark dark:text-dark">
        {skill.description}
      </p>
    </div>
  );
};