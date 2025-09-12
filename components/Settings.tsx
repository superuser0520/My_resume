import React, { useState } from 'react';
import { useEdit } from '../contexts/EditContext';

const GearIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const LogoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
);

export const Settings: React.FC = () => {
    const { isEditing, login, logout } = useEdit();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (login(password)) {
            setIsModalOpen(false);
            setPassword('');
            setError('');
        } else {
            setError('Incorrect password.');
        }
    };
    
    const handleOpenModal = () => {
        setIsModalOpen(true);
    }
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setPassword('');
        setError('');
    }

    if (isEditing) {
        return (
            <button
                onClick={logout}
                className="fixed bottom-5 right-5 z-50 bg-red-500 hover:bg-red-600 text-white font-bold p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
                aria-label="Logout from edit mode"
            >
                <LogoutIcon />
            </button>
        );
    }

    return (
        <>
            <button
                onClick={handleOpenModal}
                className="fixed bottom-5 right-5 z-50 bg-l_accent dark:bg-accent hover:opacity-80 text-white dark:text-primary font-bold p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
                aria-label="Open settings"
            >
                <GearIcon />
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4">
                    <div className="bg-l_secondary dark:bg-secondary rounded-lg shadow-2xl w-full max-w-sm p-8 relative">
                        <button onClick={handleCloseModal} className="absolute top-4 right-4 text-l_dark dark:text-dark hover:text-l_accent dark:hover:text-accent transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                        <h2 className="text-2xl font-bold text-center text-l_light dark:text-light mb-6">Enter Edit Mode</h2>
                        <form onSubmit={handleLogin}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full bg-l_primary dark:bg-primary text-l_light dark:text-light px-4 py-2 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                            <button
                                type="submit"
                                className="w-full mt-6 bg-l_accent dark:bg-accent text-white dark:text-primary font-bold py-2 px-4 rounded-md hover:bg-opacity-80 transition-all duration-300"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
