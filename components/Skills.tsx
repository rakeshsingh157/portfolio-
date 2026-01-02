'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillsData = [
    { name: 'C/C++', level: 85, category: 'programming', color: 'from-blue-500 to-blue-600' },
    { name: 'Python', level: 80, category: 'programming', color: 'from-yellow-400 to-yellow-500' },
    { name: 'JavaScript', level: 90, category: 'programming', color: 'from-yellow-300 to-yellow-400' },
    { name: 'C#', level: 75, category: 'programming', color: 'from-purple-500 to-purple-600' },
    { name: 'PHP', level: 70, category: 'programming', color: 'from-indigo-500 to-indigo-600' },
    { name: 'HTML/CSS', level: 95, category: 'frontend', color: 'from-orange-500 to-red-500' },
    { name: 'Node.js', level: 85, category: 'backend', color: 'from-green-500 to-green-600' },
    { name: 'MySQL', level: 80, category: 'database', color: 'from-blue-400 to-blue-500' },
    { name: 'PostgreSQL', level: 78, category: 'database', color: 'from-blue-600 to-blue-700' },
    { name: 'MongoDB', level: 82, category: 'database', color: 'from-green-400 to-green-500' },
  ];

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f5f3ef] to-[#fef9f0] overflow-hidden">
      {/* 3D Perspective Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(251, 191, 36, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(251, 191, 36, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: 'perspective(800px) rotateX(50deg) scale(2)',
          transformOrigin: 'center top'
        }}></div>
      </div>
      
      {/* Enhanced 3D Decorative Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Complex Floating 3D Shapes */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotateX: [0, 360],
          rotateY: [0, 360],
          rotateZ: [0, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 right-20 w-32 h-32"
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      >
        <div className="absolute inset-0 border-4 border-yellow-400/20 rounded-3xl" style={{ transform: 'rotateX(0deg) translateZ(0px)' }}></div>
        <div className="absolute inset-0 border-4 border-amber-400/20 rounded-3xl" style={{ transform: 'rotateY(90deg) translateZ(16px)' }}></div>
        <div className="absolute inset-0 border-4 border-yellow-500/15 rounded-3xl" style={{ transform: 'rotateX(90deg) translateZ(16px)' }}></div>
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 40, 0],
          rotateX: [360, 0],
          rotateY: [360, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-16 w-24 h-24"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 border-4 border-amber-400/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-yellow-400/15 rounded-full" style={{ transform: 'rotateY(45deg)' }}></div>
        <div className="absolute inset-0 border-4 border-orange-400/15 rounded-full" style={{ transform: 'rotateX(45deg)' }}></div>
      </motion.div>
      
      <motion.div
        animate={{ 
          x: [0, 50, 0],
          y: [0, -20, 0],
          rotateZ: [0, 360]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-20 h-20"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-xl" style={{ transform: 'translateZ(0px)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-yellow-400/30 rounded-xl" style={{ transform: 'translateZ(10px)' }}></div>
      </motion.div>
      
      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 80 - 40, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 12 + i * 1.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
          className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full"
          style={{
            left: `${5 + i * 8}%`,
            top: `${15 + (i % 4) * 20}%`
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className="gradient-text-animated">My Skills</span>
          </motion.h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build amazing projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all relative overflow-hidden ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white card-shadow'
                  : 'bg-white/60 text-gray-700 hover:shadow-md border border-gray-200/50'
              }`}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -12, scale: 1.03, rotateY: 8, rotateX: 5 }}
              className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all border-2 border-gray-100 shadow-lg relative overflow-hidden group"
              style={{ 
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                transformStyle: 'preserve-3d',
                perspective: '1200px'
              }}
            >
              {/* Multi-Layer 3D Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-15 transition-all duration-500`} style={{ transform: 'translateZ(-10px)' }}></div>

              
              {/* 3D Geometric Accent */}
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-yellow-400/0 group-hover:border-yellow-400/20 rounded-xl transition-all duration-500" style={{ transform: 'translateZ(20px) rotateZ(45deg)' }}></div>
              
              <div className="relative z-10" style={{ transform: 'translateZ(15px)' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.3 }}
                    className="text-3xl font-bold gradient-text-animated"
                    style={{ transform: 'translateZ(10px)' }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden" style={{ boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.05, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden shadow-md`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent animate-shimmer"></div>
                    <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                  </motion.div>
                </div>

                {/* Skill Level Indicator */}
                <div className="mt-3 flex justify-between text-xs font-medium text-gray-500">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
            className="bg-white rounded-2xl p-8 text-center border-2 border-gray-100 hover:shadow-2xl transition-all cursor-pointer shadow-lg relative overflow-hidden group"
            style={{ 
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-amber-400/0 group-hover:from-yellow-400/5 group-hover:to-amber-400/5 transition-all duration-500" style={{ transform: 'translateZ(-5px)' }}></div>
            <div className="text-5xl font-bold gradient-text-animated mb-2" style={{ transform: 'translateZ(10px)' }}>10+</div>
            <div className="text-gray-600 font-medium" style={{ transform: 'translateZ(5px)' }}>Technologies</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
            className="bg-white rounded-2xl p-8 text-center border-2 border-gray-100 hover:shadow-2xl transition-all cursor-pointer shadow-lg relative overflow-hidden group"
            style={{ 
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-amber-400/0 group-hover:from-yellow-400/5 group-hover:to-amber-400/5 transition-all duration-500" style={{ transform: 'translateZ(-5px)' }}></div>
            <div className="text-5xl font-bold gradient-text-animated mb-2" style={{ transform: 'translateZ(10px)' }}>5</div>
            <div className="text-gray-600 font-medium" style={{ transform: 'translateZ(5px)' }}>Languages</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
            className="bg-white rounded-2xl p-8 text-center border-2 border-gray-100 hover:shadow-2xl transition-all cursor-pointer shadow-lg relative overflow-hidden group"
            style={{ 
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-amber-400/0 group-hover:from-yellow-400/5 group-hover:to-amber-400/5 transition-all duration-500" style={{ transform: 'translateZ(-5px)' }}></div>
            <div className="text-5xl font-bold gradient-text-animated mb-2" style={{ transform: 'translateZ(10px)' }}>3</div>
            <div className="text-gray-600 font-medium" style={{ transform: 'translateZ(5px)' }}>Databases</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
            className="bg-white rounded-2xl p-8 text-center border-2 border-gray-100 hover:shadow-2xl transition-all cursor-pointer shadow-lg relative overflow-hidden group"
            style={{ 
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-amber-400/0 group-hover:from-yellow-400/5 group-hover:to-amber-400/5 transition-all duration-500" style={{ transform: 'translateZ(-5px)' }}></div>
            <div className="text-5xl font-bold gradient-text-animated mb-2" style={{ transform: 'translateZ(10px)' }}>∞</div>
            <div className="text-gray-600 font-medium" style={{ transform: 'translateZ(5px)' }}>Learning</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
