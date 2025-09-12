import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLanguage, Language } from './LanguageContext';
import * as en from '../locales/en';
import * as zh from '../locales/zh';
import { produce } from 'immer';

const defaultContent = { en, zh };

type ContentType = typeof en;

interface EditContextType {
  isEditing: boolean;
  content: ContentType;
  login: (password: string) => boolean;
  logout: () => void;
  updateContent: (path: string, value: any) => void;
}

const EditContext = createContext<EditContextType | undefined>(undefined);

const PASSWORD = 'Soo980520@';

export const EditProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [storedContent, setStoredContent] = useState<typeof defaultContent | null>(null);
  const { lang, t } = useLanguage();

  useEffect(() => {
    try {
      const item = window.localStorage.getItem('portfolioContent');
      const parsedItem = item ? JSON.parse(item) : defaultContent;
      // Deep merge with default to ensure new fields are present
      const merged = {
        en: { ...defaultContent.en, ...parsedItem.en },
        zh: { ...defaultContent.zh, ...parsedItem.zh },
      };
      setStoredContent(merged);
    } catch (error) {
      console.error("Failed to load content from localStorage", error);
      setStoredContent(defaultContent);
    }
  }, []);

  const login = (password: string): boolean => {
    if (password === PASSWORD) {
      setIsEditing(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsEditing(false);
  };

  const updateContent = (path: string, value: any) => {
    if (!storedContent) return;

    const newContent = produce(storedContent, draft => {
        const keys = path.split('.');
        let current: any = draft[lang];
        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
    });

    setStoredContent(newContent);
    window.localStorage.setItem('portfolioContent', JSON.stringify(newContent));
  };
  
  const content = storedContent ? storedContent[lang] : t;
  
  if (!storedContent) {
    return null; // or a loading spinner
  }

  return (
    <EditContext.Provider value={{ isEditing, content, login, logout, updateContent }}>
      {children}
    </EditContext.Provider>
  );
};

export const useEdit = (): EditContextType => {
  const context = useContext(EditContext);
  if (context === undefined) {
    throw new Error('useEdit must be used within an EditProvider');
  }
  return context;
};