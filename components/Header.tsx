import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from './Icons';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  const navLinks = t.navLinks;

  const NavLinks: React.FC<{isMobile?: boolean}> = ({ isMobile = false }) => (
    <>
      {navLinks.map((link) => {
        const isActive = link.href === `#${activeSection}`;
        return (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className={`transition-colors duration-300 ${isMobile ? 'py-2' : ''} ${
              isActive
                ? 'text-l_accent dark:text-accent font-semibold'
                : 'text-l_dark dark:text-dark font-medium hover:text-l_accent dark:hover:text-accent'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {link.name}
          </a>
        );
      })}
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-l_secondary/80 dark:bg-secondary/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <nav className="container mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
        <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-xl font-bold text-l_accent dark:text-accent transition-colors hover:opacity-80">
          Soo Lih Jing
        </a>
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-6">
            <NavLinks />
          </div>
          <div className="flex items-center space-x-4 border-l border-slate-200 dark:border-slate-700 pl-4">
            <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} className="font-bold text-l_dark dark:text-dark hover:text-l_accent dark:hover:text-accent transition-colors">
              {lang === 'en' ? '中文' : 'EN'}
            </button>
            <button onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? <MoonIcon className="w-5 h-5 text-l_dark" /> : <SunIcon className="w-5 h-5 text-dark" />}
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Open menu" aria-expanded={isOpen}>
            <svg className="w-6 h-6 text-l_accent dark:text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-l_secondary dark:bg-secondary">
          <div className="flex flex-col items-center py-4">
            <NavLinks isMobile />
             <div className="flex items-center space-x-6 border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} className="font-bold text-l_dark dark:text-dark hover:text-l_accent dark:hover:text-accent transition-colors">
                    {lang === 'en' ? '中文' : 'EN'}
                </button>
                <button onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === 'light' ? <MoonIcon className="w-6 h-6 text-l_dark" /> : <SunIcon className="w-6 h-6 text-dark" />}
                </button>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};