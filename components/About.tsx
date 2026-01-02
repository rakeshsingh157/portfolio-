'use client';

import { motion } from 'framer-motion';
import { FiCode, FiHeart, FiZap, FiTarget } from 'react-icons/fi';

const About = () => {
  const interests = [
    { icon: FiCode, title: 'Web Development', description: 'Building responsive and interactive web applications' },
    { icon: FiZap, title: 'AI & ML', description: 'Exploring intelligent systems and machine learning' },
    { icon: FiTarget, title: 'App Development', description: 'Creating seamless mobile experiences' },
    { icon: FiHeart, title: 'Problem Solving', description: 'Passionate about solving real-world challenges' },
  ];

  return (
    <section id="about" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fef9f0] to-[#f5f3ef] overflow-hidden">
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

      {/* Complex Floating 3D Shapes */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotateX: [0, 180],
          rotateY: [0, 180]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 right-20 w-32 h-32"
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      >
        <div className="absolute inset-0 border-4 border-yellow-400/20 rounded-3xl" style={{ transform: 'rotateX(0deg) translateZ(0px)' }}></div>
        <div className="absolute inset-0 border-4 border-amber-400/20 rounded-3xl" style={{ transform: 'rotateY(90deg) translateZ(16px)' }}></div>
      </motion.div>

      <motion.div
        animate={{ 
          x: [0, 30, 0],
          y: [0, -15, 0],
          rotateZ: [0, 180]
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/4 w-28 h-28"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/40 to-amber-500/40 rounded-2xl shadow-xl" style={{ transform: 'rotateY(0deg) translateZ(10px)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/35 to-orange-500/35 rounded-2xl shadow-xl" style={{ transform: 'rotateY(90deg) translateZ(10px)' }}></div>
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 25, 0],
          rotateX: [180, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-1/3 w-24 h-24"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 border-4 border-orange-400/25 rounded-2xl" style={{ transform: 'rotateZ(45deg) translateZ(0px)' }}></div>
        <div className="absolute inset-0 border-4 border-yellow-400/20 rounded-2xl" style={{ transform: 'rotateZ(45deg) translateZ(12px)' }}></div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
          className="absolute rounded-full shadow-lg"
          style={{
            left: `${15 + i * 12}%`,
            top: `${25 + (i % 3) * 20}%`,
            width: `${8 + (i % 3) * 3}px`,
            height: `${8 + (i % 3) * 3}px`,
            background: `linear-gradient(135deg, ${i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#f59e0b' : '#fb923c'}, ${i % 3 === 0 ? '#f59e0b' : i % 3 === 1 ? '#fb923c' : '#fbbf24'})`,
            boxShadow: '0 4px 12px rgba(251, 191, 36, 0.5)'
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black gradient-text-animated mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100 hover:border-yellow-300 transition-all duration-300 relative overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)', transformStyle: 'preserve-3d' }}>
              {/* 3D Layered Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full filter blur-3xl opacity-40 -mr-32 -mt-32" style={{ transform: 'translateZ(-30px)' }}></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-full filter blur-3xl opacity-30 -ml-24 -mb-24" style={{ transform: 'translateZ(-20px)' }}></div>
              
              <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">👋</span>
                My Journey
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Hey there! I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">Rakesh Kumar Singh</span>, 
                  a passionate developer currently pursuing my degree in Computer Science.
                </p>
                
                <p className="text-lg">
                  I'm deeply fascinated by how technology can transform ideas into reality. Whether it's crafting beautiful web interfaces, 
                  diving into the world of artificial intelligence, or building mobile apps that solve real problems—I love it all!
                </p>
                
                <p className="text-lg">
                  My journey in tech started with curiosity and evolved into a passion. I believe in continuous learning, 
                  experimenting with new technologies, and pushing boundaries to create something meaningful.
                </p>

                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border-l-4 border-yellow-400 mt-6">
                  <p className="text-lg font-semibold text-gray-800 mb-2">My Mindset</p>
                  <p className="text-gray-700 italic">
                    "Code is poetry, and every project is a canvas to paint innovation. I don't just build applications; 
                    I create experiences that matter."
                  </p>
                </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Interests Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">What Drives Me</h3>
            
            <div className="grid gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10, rotateY: 5 }}
                  className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hover:border-yellow-400 transition-all duration-300 group relative" style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)', transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <interest.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{interest.title}</h4>
                      <p className="text-gray-600">{interest.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              <motion.div 
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative bg-white rounded-2xl p-6 text-center shadow-2xl overflow-hidden border-2 border-yellow-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 animate-pulse"></div>
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/0 via-yellow-400/40 to-yellow-400/0 animate-shimmer"></div>
                </div>
                <div className="relative z-10">
                  <div className="text-5xl font-black bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent mb-2">2+</div>
                  <div className="text-sm font-bold text-gray-700">Years Coding</div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative bg-white rounded-2xl p-6 text-center shadow-2xl overflow-hidden border-2 border-amber-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 animate-pulse"></div>
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-400/0 via-amber-400/40 to-amber-400/0 animate-shimmer animation-delay-2000"></div>
                </div>
                <div className="relative z-10">
                  <div className="text-5xl font-black bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2">10+</div>
                  <div className="text-sm font-bold text-gray-700">Projects Built</div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative bg-white rounded-2xl p-6 text-center shadow-2xl overflow-hidden border-2 border-orange-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-yellow-500/20 animate-pulse"></div>
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-400/0 via-orange-400/40 to-orange-400/0 animate-shimmer animation-delay-4000"></div>
                </div>
                <div className="relative z-10">
                  <div className="text-5xl font-black bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent mb-2">∞</div>
                  <div className="text-sm font-bold text-gray-700">Ideas Ahead</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
