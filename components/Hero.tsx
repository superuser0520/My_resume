import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useEdit } from '../contexts/EditContext';
import { EditableText, EditableImage } from './Editable';

export const Hero: React.FC = () => {
    const { t } = useLanguage();
    const { content } = useEdit();

    const handleViewWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#experience')?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <section id="about" className="min-h-screen flex items-center justify-center scroll-m-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-l_light dark:text-light mb-4 leading-tight">
                        <EditableText path="hero.title" as="span">{content.hero.title}</EditableText>
                    </h1>
                    <p className="text-lg text-l_dark dark:text-dark mb-8 leading-relaxed">
                        <EditableText path="hero.subtitle" as="span">{content.hero.subtitle}</EditableText>
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <a 
                            href="#experience" 
                            onClick={handleViewWorkClick}
                            className="inline-block bg-l_accent dark:bg-accent text-white dark:text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
                        >
                            <EditableText path="hero.button">{content.hero.button}</EditableText>
                        </a>
                        <a 
                            href="/Soo_Lih_Jing_Resume.pdf"
                            download="Soo_Lih_Jing_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border-2 border-l_accent dark:border-accent text-l_accent dark:text-accent font-bold py-3 px-8 rounded-md hover:bg-l_accent/10 dark:hover:bg-accent/10 transition-all duration-300 transform hover:scale-105"
                        >
                            <EditableText path="hero.resumeButton">{content.hero.resumeButton}</EditableText>
                        </a>
                    </div>
                </div>
                <div className="lg:col-span-2 flex justify-center lg:justify-end">
                    <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-l_accent/30 dark:border-accent/50">
                        <img 
                            src="https://picsum.photos/seed/portrait/400/400" 
                            alt="Soo Lih Jing" 
                            className="w-full h-full object-cover"
                        />
                         <div className="absolute inset-0 bg-primary opacity-20 dark:opacity-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};