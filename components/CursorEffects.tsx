'use client';

import { useEffect, useState, useRef } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const CursorEffects = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const moveTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsMoving(true);
      
      // Clear existing timeout
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }
      
      // Set new timeout to detect when mouse stops
      moveTimeout.current = setTimeout(() => {
        setIsMoving(false);
      }, 150);
      
      // Smooth cursor follow using requestAnimationFrame
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
      
      // Add sparkles more frequently when moving
      if (Math.random() > 0.85) {
        const newSparkle: Sparkle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          size: Math.random() * 6 + 3,
          color: ['#fbbf24', '#f59e0b', '#fcd34d', '#fef3c7'][Math.floor(Math.random() * 4)]
        };
        
        setSparkles(prev => [...prev.slice(-15), newSparkle]);
        
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, 800);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }
    };
  }, []);

  return (
    <>
      {/* Outer Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-50"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isMoving ? '60px' : '40px',
          height: isMoving ? '60px' : '40px',
          transition: 'width 0.3s ease, height 0.3s ease',
        }}
      >
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(251, 191, 36, 0.1) 50%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </div>
      
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div 
          className="w-3 h-3 rounded-full bg-yellow-400"
          style={{
            boxShadow: `
              0 0 10px rgba(251, 191, 36, 0.8),
              0 0 20px rgba(251, 191, 36, 0.6),
              0 0 30px rgba(251, 191, 36, 0.4),
              0 0 40px rgba(251, 191, 36, 0.2)
            `,
          }}
        />
      </div>
      
      {/* Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="pointer-events-none fixed z-40"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="rounded-full animate-sparkle"
            style={{
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              background: `radial-gradient(circle, ${sparkle.color} 0%, transparent 70%)`,
              boxShadow: `
                0 0 ${sparkle.size * 2}px ${sparkle.color},
                0 0 ${sparkle.size * 4}px ${sparkle.color}40
              `,
            }}
          />
        </div>
      ))}
    </>
  );
};

export default CursorEffects;
