import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Section } from './Section';
import { GearIcon, WrenchIcon, ChipIcon } from './GameIcons';
import { Mail, Linkedin } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

type GameState = 'idle' | 'running' | 'won' | 'lost';

// =================================================================
// Main Game Component
// =================================================================
export const Game: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <Section id="game" title={t.sectionTitles.game}>
            <div className="bg-l_secondary dark:bg-secondary p-4 md:p-8 rounded-lg shadow-lg">
                <div className="text-center">
                    <CatchPartsGame />
                </div>
            </div>
        </Section>
    );
};

// =================================================================
// Game: Catch The Parts
// =================================================================
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;
const CATCH_ITEM_SIZE = 40;
const CATCH_GAME_HEIGHT = 500;
const ITEM_SPEED = 3;
const GOAL_SCORE = 250;

interface FallingItem { id: number; x: number; y: number; type: 'gear' | 'wrench' | 'chip'; }
const CatchItemTypes: Array<FallingItem['type']> = ['gear', 'wrench', 'chip'];
const CatchItemIcon = ({ type }: { type: FallingItem['type'] }) => {
    const className = "w-full h-full text-l_accent dark:text-accent";
    switch(type) {
        case 'gear': return <GearIcon className={className} />;
        case 'wrench': return <WrenchIcon className={className} />;
        case 'chip': return <ChipIcon className={className} />;
    }
};

const CatchPartsGame: React.FC = () => {
    const { t } = useLanguage();
    const [gameState, setGameState] = useState<GameState>('idle');
    const [score, setScore] = useState(0);
    const [paddleX, setPaddleX] = useState(0);
    const [items, setItems] = useState<FallingItem[]>([]);
    const gameAreaRef = useRef<HTMLDivElement>(null);
    const animationFrameId = useRef<number | null>(null);
    
    useEffect(() => {
        if(gameAreaRef.current) {
            setPaddleX((gameAreaRef.current.clientWidth - PADDLE_WIDTH) / 2);
        }
    }, []);

    const startGame = () => {
        setScore(0);
        setItems([]);
        setGameState('running');
    };

    const gameLoop = useCallback(() => {
        if (gameState !== 'running') return;

        setItems(prevItems => {
            const newItems = prevItems
                .map(item => ({ ...item, y: item.y + ITEM_SPEED }))
                .filter(item => item.y < CATCH_GAME_HEIGHT);

            const paddleY = CATCH_GAME_HEIGHT - PADDLE_HEIGHT - 5;
            const caughtItems = new Set<number>();
            
            newItems.forEach(item => {
                if (
                    item.y + CATCH_ITEM_SIZE >= paddleY &&
                    item.y + CATCH_ITEM_SIZE < paddleY + ITEM_SPEED + PADDLE_HEIGHT && // Only catch once
                    item.x > paddleX - CATCH_ITEM_SIZE / 2 &&
                    item.x < paddleX + PADDLE_WIDTH - CATCH_ITEM_SIZE / 2
                ) {
                    caughtItems.add(item.id);
                    setScore(s => {
                        const newScore = s + 10;
                        if (newScore >= GOAL_SCORE) {
                            setGameState('won');
                        }
                        return newScore;
                    });
                }
            });

            if (Math.random() < 0.04 && gameAreaRef.current) {
                newItems.push({
                    id: Date.now(),
                    x: Math.random() * (gameAreaRef.current.clientWidth - CATCH_ITEM_SIZE),
                    y: -CATCH_ITEM_SIZE,
                    type: CatchItemTypes[Math.floor(Math.random() * CatchItemTypes.length)],
                });
            }

            return newItems.filter(item => !caughtItems.has(item.id));
        });

        animationFrameId.current = requestAnimationFrame(gameLoop);
    }, [gameState, paddleX]);

    useEffect(() => {
        if (gameState === 'running') {
            animationFrameId.current = requestAnimationFrame(gameLoop);
        }
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [gameState, gameLoop]);


    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (gameAreaRef.current) {
            const rect = gameAreaRef.current.getBoundingClientRect();
            let newX = e.clientX - rect.left - PADDLE_WIDTH / 2;
            newX = Math.max(0, Math.min(newX, rect.width - PADDLE_WIDTH));
            setPaddleX(newX);
        }
    };
    
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (gameAreaRef.current) {
            const rect = gameAreaRef.current.getBoundingClientRect();
            let newX = e.touches[0].clientX - rect.left - PADDLE_WIDTH / 2;
            newX = Math.max(0, Math.min(newX, rect.width - PADDLE_WIDTH));
            setPaddleX(newX);
        }
    };

    return (
        <div>
            <div 
                ref={gameAreaRef}
                className="w-full h-[500px] bg-l_primary dark:bg-primary rounded-lg shadow-inner relative overflow-hidden cursor-crosshair touch-none"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
            >
                {gameState === 'running' ? (
                    <>
                        {items.map(item => (
                            <div key={item.id} className="absolute" style={{ left: item.x, top: item.y, width: CATCH_ITEM_SIZE, height: CATCH_ITEM_SIZE }}>
                               <CatchItemIcon type={item.type} />
                            </div>
                        ))}
                        <div className="absolute bg-l_accent dark:bg-accent rounded-md" style={{ left: paddleX, bottom: 5, width: PADDLE_WIDTH, height: PADDLE_HEIGHT }} />
                    </>
                ) : (
                    <div className="w-full h-full flex flex-col justify-center items-center p-4">
                        {gameState === 'won' ? (
                            <>
                                <h3 className="text-3xl font-bold text-l_accent dark:text-accent mb-4">{t.game.catchGame.wonTitle}</h3>
                                <p className="text-l_light dark:text-light mb-6">{t.game.catchGame.wonBody}</p>
                                <div className="flex flex-wrap justify-center gap-4 mb-6">
                                    <a href="mailto:SOOLIHJING@ICLOUD.COM" className="flex items-center bg-l_primary dark:bg-primary py-2 px-4 rounded-lg text-l_light dark:text-light hover:text-l_accent dark:hover:text-accent hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"><Mail className="w-5 h-5 mr-3" />Email</a>
                                    <a href="https://linkedin.com/in/soolihjing/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-l_primary dark:bg-primary py-2 px-4 rounded-lg text-l_light dark:text-light hover:text-l_accent dark:hover:text-accent hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"><Linkedin className="w-5 h-5 mr-3" />LinkedIn</a>
                                </div>
                                <button onClick={startGame} className="bg-l_accent dark:bg-accent text-white dark:text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">{t.game.catchGame.playAgain}</button>
                            </>
                        ) : (
                            <>
                                <h3 className="text-3xl font-bold text-l_light dark:text-light mb-4">{t.game.catchGame.title}</h3>
                                <p className="text-l_dark dark:text-dark mb-2">{t.game.catchGame.description}</p>
                                <p className="text-l_dark dark:text-dark mb-6">{t.game.catchGame.goal(GOAL_SCORE)}</p>
                                <button onClick={startGame} className="bg-l_accent dark:bg-accent text-white dark:text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">{t.game.catchGame.start}</button>
                            </>
                        )}
                    </div>
                )}
            </div>
             <div className="mt-4 text-l_light dark:text-light text-2xl font-bold">
                {t.game.score}: <span className="text-l_accent dark:text-accent">{score}</span> / {GOAL_SCORE}
            </div>
        </div>
    );
};