'use client';

import React, { useState, useEffect, useRef } from 'react';

// Types
interface Pixel {
  id: number;
  x: number;
  y: number;
  color: string;
  scale: number;
}

interface CollectAnimation {
  x: number;
  y: number;
  value: string;
}

interface HighScore {
  name: string;
  score: number;
}

// Constants
const PIXEL_SIZE = 20;
const SPAWN_INTERVAL = 500;
const COLLECTION_RADIUS = 30;
const MAX_PIXELS = 15;
const INITIAL_TIME = 30;

// Color palette (retro synthwave inspired)
const COLORS = [
  'bg-pink-500',
  'bg-purple-500',
  'bg-blue-400',
  'bg-cyan-300',
  'bg-yellow-400'
] as const;

const RetroPixelCollector = () => {
  // Game state
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pixels, setPixels] = useState<Pixel[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [collectAnimation, setCollectAnimation] = useState<CollectAnimation | null>(null);
  const [highScores, setHighScores] = useState<HighScore[]>([
    { name: "PLAYER1", score: 120 },
    { name: "PLAYER2", score: 80 },
    { name: "PLAYER3", score: 50 }
  ]);
  const [showNameInput, setShowNameInput] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [isNewHighScore, setIsNewHighScore] = useState(false);
  
  // Refs
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pixelSpawnRef = useRef<NodeJS.Timeout | null>(null);
  
  // Game logic functions
  const saveHighScore = (name: string, newScore: number) => {
    try {
      const tempScores = [...highScores];
      tempScores.push({ name, score: newScore });
      tempScores.sort((a, b) => b.score - a.score);
      if (tempScores.length > 5) tempScores.length = 5;
      setHighScores(tempScores);
    } catch (error) {
      console.error("Error saving high score:", error);
    }
  };

  const handleSkipSave = () => {
    setShowNameInput(false);
    setIsNewHighScore(false);
    setPlayerName('');
  };
  
  const handleStartGame = () => {
    if (isPlaying) return;
    
    setScore(0);
    setTimeLeft(INITIAL_TIME);
    setPixels([]);
    setIsPlaying(true);
    
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleEndGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    pixelSpawnRef.current = setInterval(spawnPixel, SPAWN_INTERVAL);
  };
  
  const handleEndGame = () => {
    setIsPlaying(false);
    if (timerRef.current) clearInterval(timerRef.current);
    if (pixelSpawnRef.current) clearInterval(pixelSpawnRef.current);
    
    const qualifiesForHighScore = score > 0 && (highScores.length < 5 || score > highScores[highScores.length - 1]?.score);
    
    setTimeout(() => {
      if (qualifiesForHighScore) {
        setIsNewHighScore(true);
        setShowNameInput(true);
      }
    }, 500);
  };
  
  const spawnPixel = () => {
    if (!gameAreaRef.current || pixels.length >= MAX_PIXELS) return;
    
    const rect = gameAreaRef.current.getBoundingClientRect();
    const x = Math.random() * (rect.width - PIXEL_SIZE);
    const y = Math.random() * (rect.height - PIXEL_SIZE);
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    
    const newPixel: Pixel = {
      id: Date.now() + Math.random(),
      x,
      y,
      color,
      scale: 1
    };
    
    setPixels(prev => [...prev, newPixel]);
    
    setTimeout(() => {
      setPixels(prev => prev.filter(p => p.id !== newPixel.id));
    }, 3000);
  };
  
  // Effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gameAreaRef.current) return;
      
      const rect = gameAreaRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useEffect(() => {
    if (!isPlaying) return;
    
    const collectedPixels: Pixel[] = [];
    
    pixels.forEach(pixel => {
      const centerX = pixel.x + PIXEL_SIZE / 2;
      const centerY = pixel.y + PIXEL_SIZE / 2;
      
      const distance = Math.sqrt(
        Math.pow(mousePos.x - centerX, 2) + 
        Math.pow(mousePos.y - centerY, 2)
      );
      
      if (distance < COLLECTION_RADIUS) {
        collectedPixels.push(pixel);
      }
    });
    
    if (collectedPixels.length > 0) {
      setScore(prev => prev + collectedPixels.length);
      
      setCollectAnimation({
        x: mousePos.x,
        y: mousePos.y,
        value: `+${collectedPixels.length}`
      });
      
      setTimeout(() => setCollectAnimation(null), 700);
      
      setPixels(prev => 
        prev.filter(pixel => !collectedPixels.some(p => p.id === pixel.id))
      );
    }
  }, [mousePos, pixels, isPlaying]);
  
  useEffect(() => {
    if (!isPlaying && timeLeft === 0 && score > 0) {
      const qualifiesForHighScore = highScores.length < 5 || score > highScores[highScores.length - 1]?.score;
      
      if (qualifiesForHighScore) {
        setIsNewHighScore(true);
        setShowNameInput(true);
      }
    }
  }, [isPlaying, timeLeft, score, highScores]);
  
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (pixelSpawnRef.current) clearInterval(pixelSpawnRef.current);
    };
  }, []);
  
  // Render
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6 bg-gray-900 text-white font-mono">
      <h1 className="text-3xl mb-4 text-center text-cyan-300 tracking-widest">RETRO PIXEL COLLECTOR</h1>
      
      <div className="flex justify-between w-full max-w-lg mb-4">
        <div className="text-xl">
          <span className="text-yellow-400">SCORE:</span> {score}
        </div>
        <div className="text-xl">
          <span className={`${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-pink-500'}`}>
            TIME: {timeLeft}s
          </span>
        </div>
      </div>
      
      <div 
        ref={gameAreaRef}
        className="relative w-full max-w-lg h-96 border-4 border-purple-500 bg-gray-800 cursor-none overflow-hidden"
      >
        {pixels.map(pixel => (
          <div
            key={pixel.id}
            className={`absolute ${pixel.color} rounded-sm animate-pulse transition-all duration-200`}
            style={{
              left: `${pixel.x}px`,
              top: `${pixel.y}px`,
              width: `${PIXEL_SIZE}px`,
              height: `${PIXEL_SIZE}px`,
              transform: `scale(${pixel.scale})`
            }}
          />
        ))}
        
        <div 
          className="absolute w-10 h-10 rounded-full border-2 border-white mix-blend-difference pointer-events-none z-10"
          style={{
            left: `${mousePos.x - 20}px`,
            top: `${mousePos.y - 20}px`,
            transition: 'transform 0.05s ease-out'
          }}
        />
        
        {collectAnimation && (
          <div 
            className="absolute text-lg font-bold text-green-400 pointer-events-none z-20 animate-bounce"
            style={{
              left: `${collectAnimation.x}px`,
              top: `${collectAnimation.y - 20}px`
            }}
          >
            {collectAnimation.value}
          </div>
        )}
        
        {!isPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 z-30">
            <h2 className="text-2xl mb-4 text-cyan-300">
              {timeLeft === 0 ? 'GAME OVER!' : 'READY TO PLAY?'}
            </h2>
            {timeLeft === 0 && (
              <p className="text-xl mb-6 text-yellow-400">Final Score: {score}</p>
            )}
            <button
              onClick={handleStartGame}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-sm hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-200"
              tabIndex={0}
              aria-label="Start Game"
            >
              {timeLeft === 0 ? 'PLAY AGAIN' : 'START GAME'}
            </button>
          </div>
        )}
      </div>
      
      {showNameInput && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-gray-800 border-4 border-purple-500 p-6 max-w-md w-full rounded-sm"
          >
            <h2 className="text-xl text-center text-cyan-300 mb-4 animate-pulse">
              {isNewHighScore ? 'NEW HIGH SCORE!' : 'YOU MADE THE LEADERBOARD!'}
            </h2>
            <p className="text-yellow-400 text-center text-2xl mb-4">{score} POINTS</p>
            
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="playerName" className="block text-white mb-2">Enter Your Name:</label>
                <input
                  type="text"
                  id="playerName"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  maxLength={15}
                  className="w-full p-2 bg-gray-700 border-2 border-pink-500 text-white focus:outline-none focus:border-cyan-300"
                  autoFocus
                />
              </div>
              
              <div className="flex justify-between gap-4">
                <button
                  onClick={() => {
                    if (playerName.trim()) {
                      saveHighScore(playerName.trim(), score);
                      setShowNameInput(false);
                      setIsNewHighScore(false);
                      setPlayerName('');
                    }
                  }}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-sm hover:from-green-700 hover:to-emerald-700"
                  disabled={!playerName.trim()}
                >
                  Save Score
                </button>
                <button
                  onClick={handleSkipSave}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-sm hover:from-gray-700 hover:to-gray-800"
                >
                  Skip
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-6 text-sm text-center text-gray-400 max-w-lg">
        <p>Move your cursor to collect the colorful pixels before they disappear. Collect as many as you can in 30 seconds!</p>
      </div>
    </div>
  );
};

export default RetroPixelCollector; 