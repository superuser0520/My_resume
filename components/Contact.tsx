import React from 'react';
import { Section } from './Section';
import { Mail, Linkedin, Whatsapp, Phone } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { useEdit } from '../contexts/EditContext';
import { EditableText } from './Editable';

export const Contact: React.FC = () => {
    const { t } = useLanguage();
    const { content } = useEdit();

    return (
        <Section id="contact" title={t.sectionTitles.contact}>
            <div className="text-center max-w-2xl mx-auto">
                <p className="text-lg text-l_dark dark:text-dark mb-8">
                    <EditableText path="contact.intro">{content.contact.intro}</EditableText>
                </p>
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                    <a href="mailto:SOOLIHJING@ICLOUD.COM" className="flex items-center bg-l_secondary dark:bg-secondary py-3 px-6 rounded-lg text-l_light dark:text-light hover:text-l_accent dark:hover:text-accent hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300">
                        <Mail className="w-5 h-5 mr-3" />
                        <EditableText path="contact.email">{content.contact.email}</EditableText>
                    </a>
                    <a href="https://linkedin.com/in/soolihjing/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-l_secondary dark:bg-secondary py-3 px-6 rounded-lg text-l_light dark:text-light hover:text-l_accent dark:hover:text-accent hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300">
                        <Linkedin className="w-5 h-5 mr-3" />
                        LinkedIn
                    </a>
                    <a href="https://wa.me/6589208001" target="_blank" rel="noopener noreferrer" className="flex items-center bg-l_secondary dark:bg-secondary py-3 px-6 rounded-lg text-l_light dark:text-light hover:text-l_accent dark:hover:text-accent hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300">
                        <Whatsapp className="w-5 h-5 mr-3" />
                        WhatsApp
                    </a>
                </div>
                <div className="space-y-2 text-l_dark dark:text-dark">
                    <p className="flex items-center justify-center"><Phone className="w-5 h-5 mr-3 text-l_accent dark:text-accent" /> SG: +65 8920 8001</p>
                    <p className="flex items-center justify-center"><Phone className="w-5 h-5 mr-3 text-l_accent dark:text-accent" /> MY: +60 16 726 4334</p>
                </div>
            </div>
        </Section>
    );
};