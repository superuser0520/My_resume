import React from 'react';
import { Linkedin } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-l_secondary dark:bg-secondary mt-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8 text-center text-l_dark dark:text-dark">
                <div className="flex justify-center mb-4">
                    <a href="https://linkedin.com/in/soolihjing/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-l_dark dark:text-dark hover:text-l_accent dark:hover:text-accent transition-transform duration-300 hover:scale-110">
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Soo Lih Jing. All Rights Reserved.</p>
                <p className="text-sm mt-2">{t.footer.builtWith}</p>
            </div>
        </footer>
    );
};