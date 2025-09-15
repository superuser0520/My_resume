import React, { useState } from 'react';
import { Section } from './Section';
import { Mail, Linkedin, SendIcon, FileIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { useEdit } from '../contexts/EditContext';
import { EditableText } from './Editable';

export const Contact: React.FC = () => {
    const { t } = useLanguage();
    const { content } = useEdit();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (value) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
        if (formStatus === 'success' || formStatus === 'error') {
            setFormStatus('idle');
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

    const fileToBase64 = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve((reader.result as string).split(',')[1]);
            reader.onerror = error => reject(error);
        });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formStatus === 'sending' || !validate()) {
            return;
        }

        setFormStatus('sending');

        try {
            let attachment;
            if (file) {
                const content = await fileToBase64(file);
                attachment = { filename: file.name, content };
            }

            const payload = { ...formData, attachment };
            
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setFile(null);
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            console.error('Contact form submission error:', error);
            setFormStatus('error');
        }
    };
    
    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };
    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setFile(e.dataTransfer.files[0]);
            e.dataTransfer.clearData();
        }
    };

    const removeFile = () => {
        setFile(null);
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
                            <div
                                onDragEnter={handleDragEnter}
                                onDragLeave={handleDragLeave}
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                                className={`relative transition-all duration-300 rounded-md ${isDragging ? 'ring-2 ring-l_accent/50 dark:ring-accent/50' : ''}`}
                            >
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
                                {isDragging && (
                                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-l_secondary/90 dark:bg-secondary/90 rounded-md pointer-events-none border-2 border-dashed border-l_accent dark:border-accent">
                                        <p className="text-lg font-semibold text-l_accent dark:text-accent">Drop File Here</p>
                                        <p className="text-sm text-l_dark dark:text-dark">Attach a job description or other file</p>
                                    </div>
                                )}
                            </div>
                             {file && (
                                <div className="mt-2 flex items-center justify-between bg-l_primary dark:bg-primary p-2 rounded-md text-sm">
                                    <div className="flex items-center text-l_light dark:text-light overflow-hidden">
                                        <FileIcon className="w-5 h-5 mr-2 text-l_accent dark:text-accent flex-shrink-0" />
                                        <span className="font-semibold truncate">{file.name}</span>
                                        <span className="text-l_dark dark:text-dark ml-2 flex-shrink-0">({(file.size / 1024).toFixed(1)} KB)</span>
                                    </div>
                                    <button
                                        onClick={removeFile}
                                        type="button"
                                        className="text-red-500 hover:text-red-400 font-bold ml-2 p-1 rounded-full flex-shrink-0"
                                        aria-label="Remove file"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
                                    </button>
                                </div>
                            )}
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={formStatus === 'sending'}
                                className="inline-flex items-center justify-center bg-l_accent dark:bg-accent text-white dark:text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {formStatus !== 'sending' && <SendIcon className="w-5 h-5 mr-2" />}
                                {formStatus === 'sending' ? t.contactForm.sendingButton : t.contactForm.sendButton}
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-4 h-6">
                        {formStatus === 'success' && (
                            <p className="text-green-400">{t.contactForm.successMessage}</p>
                        )}
                        {formStatus === 'error' && (
                            <p className="text-red-500">{t.contactForm.errorMessage}</p>
                        )}
                    </div>
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
