import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { WorkProjects } from './components/WorkProjects';
import { AcademicProjects } from './components/AcademicProjects';
import { Development } from './components/Development';
import { AIPanelTool } from './components/AIPanelTool';
import { Education } from './components/Education';
import { References } from './components/References';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Game } from './components/Game';
import { Chatbot } from './components/Chatbot';
import type { Project } from './types';
import { useLanguage } from './contexts/LanguageContext';
import { ArrowUpIcon } from './components/Icons';


const App: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-80px 0px -40% 0px',
                threshold: 0,
            }
        );

        document.querySelectorAll('section[id]').forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const checkScrollTop = () => {
            if (window.pageYOffset > 500) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, []);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };
    
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    return (
        <div className="bg-l_primary dark:bg-primary min-h-screen font-sans">
            <Header activeSection={activeSection} />
            <main className="container max-w-6xl mx-auto px-6 md:px-12 pt-20">
                <Hero />
                <Skills />
                <Experience />
                <WorkProjects onProjectClick={openModal} />
                <AcademicProjects onProjectClick={openModal} />
                <Development />
                <AIPanelTool />
                <Education />
                <Game />
                <References />
                <Contact />
            </main>
            <Footer />
            {isModalOpen && selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
            <button
                type="button"
                onClick={scrollTop}
                className={`fixed bottom-20 right-5 z-40 p-3 rounded-full bg-l_accent dark:bg-accent text-white dark:text-primary shadow-lg hover:bg-opacity-80 dark:hover:opacity-80 transition-all duration-300 transform ${
                    showScrollToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
                }`}
                aria-label="Scroll to top"
            >
                <ArrowUpIcon className="w-6 h-6" />
            </button>
            <Chatbot />
        </div>
    );
};

export default App;