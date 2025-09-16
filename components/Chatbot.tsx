import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { useLanguage } from '../contexts/LanguageContext';
import { ChatIcon, SendIcon } from './Icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
    role: 'user' | 'model';
    text: string;
}

export const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentInput, setCurrentInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const { t, lang } = useLanguage();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);
    
    useEffect(() => {
        if (!isOpen) return;

        const initializeChat = async () => {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

                const knowledge = `
                    Skills: ${JSON.stringify(t.skillsData)}
                    Experience: ${JSON.stringify(t.experienceData)}
                    Work Projects: ${JSON.stringify(t.workProjectsData)}
                    Academic Projects: ${JSON.stringify(t.academicProjectsData)}
                    Development & Achievements: ${JSON.stringify(t.developmentData)}
                    Education: ${JSON.stringify(t.educationData)}
                    Personal Info: ${JSON.stringify(t.personalInfo)}
                `;

                const systemInstruction = `You are a highly specialized AI assistant for Soo Lih Jing, a Mechanical Designer and Automation Engineer. Your name is 'SooBot'. You MUST answer all questions from his perspective, using 'I', 'my', and 'me'. Your tone should be professional, confident, and friendly. Your ONLY task is to answer questions about Soo Lih Jing's professional background based *exclusively* on the detailed information provided below. Do not use any external knowledge.

**Strict Rules:**
1.  **First-Person Perspective:** ALWAYS speak as Soo Lih Jing (e.g., "I led the mechanical design...", "My skills include...").
2.  **Information Boundary:** Your knowledge is strictly limited to the data provided. If the information is not present, you must state that it's not in your profile, for example: "That specific detail isn't in my profile, but I can tell you about my overall project management experience." Do NOT make up any details.
3.  **Relevance Enforcement:** You MUST refuse to answer any question that is not directly related to Soo Lih Jing's professional life (skills, experience, projects, education, career goals, job search status, location). This includes but is not limited to general knowledge, trivia, personal opinions on unrelated topics (e.g., politics, food, movies), or requests to perform other tasks (e.g., writing a poem, telling a joke).
4.  **Polite Refusal:** When a question is irrelevant, you must politely decline and redirect the conversation. Use a firm but courteous response like: "My purpose is to provide information about my professional background as an engineer. I can't answer questions outside of that topic. Would you like to know about my projects or skills?"
5.  **Conciseness:** Keep your answers concise and to the point.
6.  **Formatting:** Use markdown for formatting, such as lists, bolding, etc., to make the text readable.

**[BEGIN KNOWLEDGE BASE]**
${knowledge}
**[END KNOWLEDGE BASE]**`;

                const newChat = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: systemInstruction,
                    },
                });
                setChat(newChat);
                setMessages([{ role: 'model', text: t.chatbot.greeting }]);
            } catch (error) {
                console.error("Failed to initialize AI Chat:", error);
                setMessages([{ role: 'model', text: "Sorry, the AI assistant is currently unavailable." }]);
            }
        };

        initializeChat();

    }, [isOpen, lang, t]);

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();
        if (!currentInput.trim() || !chat || isLoading) return;

        const userMessage: Message = { role: 'user', text: currentInput };
        setMessages(prev => [...prev, userMessage]);
        setCurrentInput('');
        setIsLoading(true);

        try {
            const responseStream = await chat.sendMessageStream({ message: currentInput });
            let fullResponse = '';
            setMessages(prev => [...prev, { role: 'model', text: '' }]);

            for await (const chunk of responseStream) {
                fullResponse += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text = fullResponse;
                    return newMessages;
                });
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };
    
    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                type="button"
                onClick={toggleChat}
                className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-l_accent dark:bg-accent text-white dark:text-primary shadow-lg hover:bg-opacity-80 dark:hover:opacity-80 transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
                aria-label={t.chatbot.open}
            >
                <ChatIcon className="w-6 h-6" />
            </button>

            <div className={`fixed bottom-0 right-0 z-50 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}>
                <div className="bg-l_secondary dark:bg-secondary w-screen h-[80vh] sm:w-[400px] sm:h-[600px] sm:rounded-tl-lg shadow-2xl flex flex-col sm:mr-5 sm:mb-5">
                    <header className="flex justify-between items-center p-4 border-b border-l_primary dark:border-primary flex-shrink-0">
                        <h3 className="text-lg font-bold text-l_light dark:text-light">{t.chatbot.title}</h3>
                        <button onClick={toggleChat} className="text-l_dark dark:text-dark hover:text-l_accent dark:hover:text-accent" aria-label={t.chatbot.close}>
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </header>
                    <main className="flex-grow p-4 overflow-y-auto">
                        <div className="space-y-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] rounded-xl px-4 py-2 ${msg.role === 'user' ? 'bg-l_accent dark:bg-accent text-white dark:text-primary' : 'bg-l_primary dark:bg-primary'}`}>
                                        <div className="prose prose-sm dark:prose-invert prose-p:my-2 prose-ul:my-2 prose-ol:my-2">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
                                        </div>
                                    </div>
                                </div>
                            ))}
                             {isLoading && (
                                <div className="flex justify-start">
                                    <div className="max-w-[80%] rounded-xl px-4 py-3 bg-l_primary dark:bg-primary flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-l_dark dark:text-dark rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                                        <span className="w-2 h-2 bg-l_dark dark:text-dark rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                                        <span className="w-2 h-2 bg-l_dark dark:text-dark rounded-full animate-pulse"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </main>
                    <footer className="p-4 border-t border-l_primary dark:border-primary flex-shrink-0">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                            <input
                                type="text"
                                value={currentInput}
                                onChange={(e) => setCurrentInput(e.target.value)}
                                placeholder={t.chatbot.placeholder}
                                className="w-full bg-l_primary dark:bg-primary text-l_light dark:text-light px-4 py-2 rounded-full border border-slate-600 focus:outline-none focus:ring-2 focus:ring-accent"
                                disabled={isLoading}
                            />
                            <button type="submit" className="p-3 rounded-full bg-l_accent dark:bg-accent text-white dark:text-primary disabled:opacity-50" disabled={isLoading || !currentInput.trim()}>
                                <SendIcon className="w-5 h-5" />
                            </button>
                        </form>
                    </footer>
                </div>
            </div>
        </>
    );
};