import React, { useState } from 'react';
import { Section } from './Section';
import { Mail, Linkedin, SendIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { useEdit } from '../contexts/EditContext';
import { EditableText } from './Editable';

export const Contact: React.FC = () => {
    const { t } = useLanguage();
    const { content } = useEdit();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [isSending, setIsSending] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (value) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = (): boolean => {
        const newErrors = { name: '', email: '', message: '' };
        let isValid = true;
        if (!formData.name.trim()) {
            newErrors.name = t.contactForm.validation.nameRequired;
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = t.contactForm.validation.emailRequired;
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t.contactForm.validation.emailInvalid;
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = t.contactForm.validation.messageRequired;
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSending(true);
        setFormStatus('idle');

        try {
            // This will call the Vercel Serverless Function you'll create
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error('API returned an error');
                setFormStatus('error');
            }
        } catch (error) {
            console.error('An error occurred while sending the message:', error);
            setFormStatus('error');
        } finally {
            setIsSending(false);
        }
    };


    return (
        <Section id="contact" title={t.sectionTitles.contact}>
            <div className="max-w-3xl mx-auto">
                <p className="text-lg text-center text-l_dark dark:text-dark mb-12">
                    <EditableText path="contact.intro">{content.contact.intro}</EditableText>
                </p>
                
                <div className="bg-l_secondary dark:bg-secondary p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-l_dark dark:text-dark mb-2 font-medium">
                                    {t.contactForm.nameLabel}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t.contactForm.namePlaceholder}
                                    className={`w-full bg-l_primary dark:bg-primary text-l_light dark:text-light px-4 py-2 rounded-md border  focus:outline-none focus:ring-2 focus:ring-accent ${errors.name ? 'border-red-500' : 'border-slate-600'}`}
                                    aria-required="true"
                                    aria-invalid={!!errors.name}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-l_dark dark:text-dark mb-2 font-medium">
                                    {t.contactForm.emailLabel}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t.contactForm.emailPlaceholder}
                                    className={`w-full bg-l_primary dark:bg-primary text-l_light dark:text-light px-4 py-2 rounded-md border  focus:outline-none focus:ring-2 focus:ring-accent ${errors.email ? 'border-red-500' : 'border-slate-600'}`}
                                    aria-required="true"
                                    aria-invalid={!!errors.email}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-l_dark dark:text-dark mb-2 font-medium">
                                {t.contactForm.messageLabel}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                placeholder={t.contactForm.messagePlaceholder}
                                className={`w-full bg-l_primary dark:bg-primary text-l_light dark:text-light px-4 py-2 rounded-md border  focus:outline-none focus:ring-2 focus:ring-accent ${errors.message ? 'border-red-500' : 'border-slate-600'}`}
                                aria-required="true"
                                aria-invalid={!!errors.message}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSending}
                                className="inline-flex items-center justify-center bg-l_accent dark:bg-accent text-white dark:text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <SendIcon className="w-5 h-5 mr-2" />
                                {isSending ? t.contactForm.sendingButton : t.contactForm.sendButton}
                            </button>
                        </div>
                    </form>
                    {formStatus === 'success' && <p className="text-green-500 text-center mt-4">{t.contactForm.successMessage}</p>}
                    {formStatus === 'error' && <p className="text-red-500 text-center mt-4">{t.contactForm.errorMessage}</p>}
                </div>

                <div className="text-center mt-12">
                     <p className="text-l_dark dark:text-dark mb-6">{t.contactForm.altContact}</p>
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        <a href="mailto:SOOLIHJING@ICLOUD.COM" className="flex items-center bg-l_secondary dark:bg-secondary py-3 px-6 rounded-lg text-l_light dark:text-light hover:text-l_accent dark:hover:text-accent hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300">
                            <Mail className="w-5 h-5 mr-3" />
                            <EditableText path="contact.email">{content.contact.email}</EditableText>
                        </a>
                        <a href="https://linkedin.com/in/soolihjing/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-l_secondary dark:bg-secondary py-3 px-6 rounded-lg text-l_light dark:text-light hover:text-l_accent dark:hover:text-accent hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300">
                            <Linkedin className="w-5 h-5 mr-3" />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};