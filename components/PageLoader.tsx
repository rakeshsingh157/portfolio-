'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted || !isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.8 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-[#f5f3ef] via-[#fef9f0] to-[#f5f3ef] flex items-center justify-center overflow-hidden"
      onAnimationComplete={() => setIsLoading(false)}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        />
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
      </div>

      <div className="text-center relative z-10">
        {/* 3D Cube Container */}
        <div className="relative w-48 h-48 mx-auto mb-12" style={{ perspective: '1000px' }}>
          {/* Main 3D Rotating Cube */}
          <motion.div
            animate={{ 
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 360]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="relative w-full h-full"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Cube Faces */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl opacity-90 shadow-2xl"
              style={{ transform: 'translateZ(96px)' }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl opacity-80 shadow-2xl"
              style={{ transform: 'translateZ(-96px) rotateY(180deg)' }}
              animate={{ opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-3xl opacity-85 shadow-2xl"
              style={{ transform: 'rotateY(90deg) translateZ(96px)' }}
              animate={{ opacity: [0.65, 0.95, 0.65] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-600 rounded-3xl opacity-75 shadow-2xl"
              style={{ transform: 'rotateY(-90deg) translateZ(96px)' }}
              animate={{ opacity: [0.55, 0.85, 0.55] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-400 rounded-3xl opacity-80 shadow-2xl"
              style={{ transform: 'rotateX(90deg) translateZ(96px)' }}
              animate={{ opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-3xl opacity-70 shadow-2xl"
              style={{ transform: 'rotateX(-90deg) translateZ(96px)' }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>

          {/* Orbiting Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                className="absolute top-0 left-1/2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full shadow-lg"
                style={{
                  transform: `translateX(-50%) translateY(-120px) rotateX(${i * 45}deg)`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            </motion.div>
          ))}

          {/* Glow Effect */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full blur-3xl"
          />
        </div>

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-black gradient-text-animated mb-4"
        >
          Loading
        </motion.h2>

        {/* Animated Dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
            />
          ))}
        </div>
        
        {/* Progress Bar */}
        <div className="w-80 h-2 bg-gray-200/50 rounded-full mx-auto overflow-hidden backdrop-blur-sm">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full relative overflow-hidden"
          >
            <motion.div
              animate={{
                x: ["-100%", "200%"]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          </motion.div>
        </div>

        {/* Percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-600 font-bold text-lg"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Please wait...
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
