import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { WorkProjects } from './components/WorkProjects';
import { AcademicProjects } from './components/AcademicProjects';
import { Development } from './components/Development';
import { Education } from './components/Education';
import { References } from './components/References';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Game } from './components/Game';
import { Settings } from './components/Settings';
import type { Project } from './types';
import { useLanguage } from './contexts/LanguageContext';


const App: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');
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

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
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
                <Education />
                <Game />
                <References />
                <Contact />
            </main>
            <Footer />
            {isModalOpen && selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
            <Settings />
        </div>
    );
};

export default App;