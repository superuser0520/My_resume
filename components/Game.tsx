import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Section } from './Section';
import { GearIcon, WrenchIcon, ChipIcon, ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from './GameIcons';
import { Mail, Linkedin } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

type GameType = 'catch' | 'snake';
type GameState = 'idle' | 'running' | 'won' | 'lost';

// =================================================================
// Main Game Component (Arcade Hub)
// =================================================================
export const Game: React.FC = () => {
    const { t } = useLanguage();
    const [activeGame, setActiveGame] = useState<GameType>('catch');

    const renderActiveGame = () => {
        switch (activeGame) {
            case 'catch': return <CatchPartsGame />;
            case 'snake': return <SnakeEaterGame />;
            default: return <CatchPartsGame />;
        }
    };
    
    const gameTabs: { id: GameType; title: string; }[] = [
        { id: 'catch', title: t.game.catchGame.title },
        { id: 'snake', title: t.game.snakeEaterGame.title },
    ];

    return (
        <Section id="game" title={t.sectionTitles.game}>
            <div className="bg-l_secondary dark:bg-secondary p-4 md:p-8 rounded-lg shadow-lg">
                <div className="mb-6 flex justify-center flex-wrap gap-2 border-b border-l_primary dark:border-primary pb-6">
                     <h3 className="w-full text-center text-lg font-semibold text-l_light dark:text-light mb-2">{t.game.selectGame}</h3>
                    {gameTabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveGame(tab.id)}
                            className={`px-4 py-2 text-sm font-bold rounded-md transition-colors duration-300 ${
                                activeGame === tab.id
                                    ? 'bg-l_accent dark:bg-accent text-white dark:text-primary shadow-md'
                                    : 'bg-l_primary dark:bg-primary text-l_dark dark:text-dark hover:bg-slate-300 dark:hover:bg-slate-700'
                            }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="text-center">
                    {renderActiveGame()}
                </div>
            </div>
        </Section>
    );
};

// =================================================================
// Game 1: Catch The Parts
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


// =================================================================
// Game 2: Snake Eater
// =================================================================
const GRID_SIZE = 20;
const GAME_DIMENSIONS = 500;
const CELL_SIZE = GAME_DIMENSIONS / GRID_SIZE;
const GAME_SPEED = 200;
const INITIAL_SNAKE_POSITION = [{ x: 10, y: 10 }, { x: 11, y: 10 }, { x: 12, y: 10 }];
const INITIAL_DIRECTION = 'LEFT';
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const SnakeEaterGame: React.FC = () => {
    const { t } = useLanguage();
    const [gameState, setGameState] = useState<GameState>('idle');
    const [snake, setSnake] = useState(INITIAL_SNAKE_POSITION);
    const [food, setFood] = useState({ x: 0, y: 0 });
    const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
    const [score, setScore] = useState(0);
    const gameAreaRef = useRef<HTMLDivElement>(null);

    const generateFood = useCallback((snakeBody: { x: number; y: number }[]) => {
        let newFoodPos;
        do {
            newFoodPos = {
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE),
            };
        } while (snakeBody.some(segment => segment.x === newFoodPos.x && segment.y === newFoodPos.y));
        setFood(newFoodPos);
    }, []);

    const startGame = useCallback(() => {
        setSnake(INITIAL_SNAKE_POSITION);
        setDirection(INITIAL_DIRECTION);
        generateFood(INITIAL_SNAKE_POSITION);
        setScore(0);
        setGameState('running');
    }, [generateFood]);

    const handleDirectionChange = (newDirection: Direction) => {
        if (
            (direction === 'UP' && newDirection === 'DOWN') ||
            (direction === 'DOWN' && newDirection === 'UP') ||
            (direction === 'LEFT' && newDirection === 'RIGHT') ||
            (direction === 'RIGHT' && newDirection === 'LEFT')
        ) {
            return;
        }
        setDirection(newDirection);
    };
    
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        e.preventDefault();
        switch (e.key) {
            case 'ArrowUp': case 'w': handleDirectionChange('UP'); break;
            case 'ArrowDown': case 's': handleDirectionChange('DOWN'); break;
            case 'ArrowLeft': case 'a': handleDirectionChange('LEFT'); break;
            case 'ArrowRight': case 'd': handleDirectionChange('RIGHT'); break;
        }
    }, [direction]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);
    
    useEffect(() => {
        if (gameState !== 'running') return;
    
        const gameInterval = setInterval(() => {
            setSnake(prevSnake => {
                const newSnake = [...prevSnake];
                const head = { ...newSnake[0] };
    
                switch (direction) {
                    case 'UP': head.y -= 1; break;
                    case 'DOWN': head.y += 1; break;
                    case 'LEFT': head.x -= 1; break;
                    case 'RIGHT': head.x += 1; break;
                }

                // Wall collision
                if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
                    setGameState('lost');
                    return prevSnake;
                }
    
                // Self collision
                for (let i = 1; i < newSnake.length; i++) {
                    if (head.x === newSnake[i].x && head.y === newSnake[i].y) {
                        setGameState('lost');
                        return prevSnake;
                    }
                }
    
                newSnake.unshift(head);
    
                // Food collision
                if (head.x === food.x && head.y === food.y) {
                    setScore(s => s + 10);
                    generateFood(newSnake);
                } else {
                    newSnake.pop();
                }
    
                return newSnake;
            });
        }, GAME_SPEED);
    
        return () => clearInterval(gameInterval);
    }, [gameState, direction, food, generateFood]);

    return (
        <div>
            <div
                ref={gameAreaRef}
                className="w-full max-w-[500px] h-[500px] bg-l_primary dark:bg-primary rounded-lg shadow-inner relative overflow-hidden mx-auto"
                style={{ width: GAME_DIMENSIONS, height: GAME_DIMENSIONS }}
            >
                {gameState === 'running' ? (
                    <>
                        {/* Snake */}
                        {snake.map((segment, index) => (
                            <div
                                key={index}
                                className={`absolute rounded ${index === 0 ? 'bg-l_accent/80 dark:bg-accent/80' : 'bg-l_accent dark:bg-accent'}`}
                                style={{
                                    left: segment.x * CELL_SIZE,
                                    top: segment.y * CELL_SIZE,
                                    width: CELL_SIZE,
                                    height: CELL_SIZE,
                                }}
                            />
                        ))}
                        {/* Food */}
                        <div className="absolute text-l_light dark:text-light" style={{ left: food.x * CELL_SIZE, top: food.y * CELL_SIZE, width: CELL_SIZE, height: CELL_SIZE }}>
                            <ChipIcon className="w-full h-full" />
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full flex flex-col justify-center items-center p-4">
                        {gameState === 'lost' ? (
                            <>
                                <h3 className="text-3xl font-bold text-red-500 mb-4">{t.game.snakeEaterGame.gameOverTitle}</h3>
                                <p className="text-l_light dark:text-light mb-6 text-center">{t.game.snakeEaterGame.gameOverBody}</p>
                                <button onClick={startGame} className="bg-l_accent dark:bg-accent text-white dark:text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">{t.game.snakeEaterGame.playAgain}</button>
                            </>
                        ) : (
                             <>
                                <h3 className="text-3xl font-bold text-l_light dark:text-light mb-4">{t.game.snakeEaterGame.title}</h3>
                                <p className="text-l_dark dark:text-dark mb-6 text-center">{t.game.snakeEaterGame.description}</p>
                                <button onClick={startGame} className="bg-l_accent dark:bg-accent text-white dark:text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">{t.game.snakeEaterGame.start}</button>
                            </>
                        )}
                    </div>
                )}
            </div>
             <div className="mt-4 text-l_light dark:text-light text-2xl font-bold">
                {t.game.score}: <span className="text-l_accent dark:text-accent">{score}</span>
            </div>
            {/* Mobile Controls */}
            <div className="mt-4 md:hidden flex justify-center items-center">
                <div className="grid grid-cols-3 gap-2 w-48">
                    <div />
                    <button onClick={() => handleDirectionChange('UP')} className="bg-l_primary dark:bg-primary p-3 rounded-lg"><ArrowUpIcon className="w-6 h-6 mx-auto text-l_accent dark:text-accent" /></button>
                    <div />
                    <button onClick={() => handleDirectionChange('LEFT')} className="bg-l_primary dark:bg-primary p-3 rounded-lg"><ArrowLeftIcon className="w-6 h-6 mx-auto text-l_accent dark:text-accent" /></button>
                    <button onClick={() => handleDirectionChange('DOWN')} className="bg-l_primary dark:bg-primary p-3 rounded-lg"><ArrowDownIcon className="w-6 h-6 mx-auto text-l_accent dark:text-accent" /></button>
                    <button onClick={() => handleDirectionChange('RIGHT')} className="bg-l_primary dark:bg-primary p-3 rounded-lg"><ArrowRightIcon className="w-6 h-6 mx-auto text-l_accent dark:text-accent" /></button>
                </div>
            </div>
        </div>
    );
};
