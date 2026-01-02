'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiServer, FiSmartphone, FiGlobe, FiCpu, FiImage, FiMessageSquare, FiBriefcase, FiPlay, FiActivity, FiFileText } from 'react-icons/fi';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'NFC Data Transfer',
      description: 'Secure offline data transfer between devices using NFC technology.',
      tags: ['Flutter', 'Dart', 'NFC'],
      category: 'mobile',
      gradient: 'from-blue-500 to-cyan-500',
      icon: <FiSmartphone size={24} />
    },
    {
      id: 2,
      title: 'HealthLock',
      description: 'Secure medical records management with AI-driven health insights.',
      tags: ['Flutter', 'Node.js', 'AI/ML'],
      category: 'mobile',
      gradient: 'from-green-500 to-emerald-500',
      icon: <FiActivity size={24} />
    },
    {
      id: 3,
      title: 'NayaSetu',
      description: 'AI-based document analysis for financial insights and risk assessment.',
      tags: ['Flutter', 'Node.js', 'AI/ML'],
      category: 'ai',
      gradient: 'from-purple-500 to-indigo-500',
      icon: <FiFileText size={24} />
    },
    {
      id: 4,
      title: 'Smart AI Reminder',
      description: 'Intelligent reminder app with analytics and multi-channel notifications.',
      tags: ['Flutter', 'Python', 'AI'],
      category: 'mobile',
      gradient: 'from-yellow-500 to-orange-500',
      icon: <FiCpu size={24} />
    },
    {
      id: 5,
      title: 'IoT Env Monitor',
      description: 'Real-time environmental monitoring system with mobile visualization.',
      tags: ['C++', 'Flutter', 'IoT'],
      category: 'iot',
      gradient: 'from-teal-500 to-green-500',
      icon: <FiCpu size={24} />
    },
    {
      id: 6,
      title: 'Android Space Game',
      description: 'Immersive 2D/3D space-themed game with engaging mechanics.',
      tags: ['Unity', 'C#', 'Android'],
      category: 'game',
      gradient: 'from-indigo-900 to-purple-900',
      icon: <FiPlay size={24} />
    },
    {
      id: 7,
      title: 'AI Roleplay Chatbot',
      description: 'Empathetic AI chatbot for emotional support and roleplay scenarios.',
      tags: ['GenAI', 'HTML/JS', 'Web'],
      category: 'ai',
      gradient: 'from-pink-500 to-rose-500',
      icon: <FiMessageSquare size={24} />
    },
    {
      id: 8,
      title: 'PicShot',
      description: 'Authentic photo-sharing platform focused on original content.',
      tags: ['PHP', 'JS', 'HTML/CSS'],
      category: 'web',
      gradient: 'from-red-500 to-orange-500',
      icon: <FiImage size={24} />
    },
    {
      id: 9,
      title: 'RKMods App Store',
      description: 'Custom app store with modern UI and scalable backend.',
      tags: ['Next.js', 'PostgreSQL', 'React'],
      category: 'web',
      gradient: 'from-blue-600 to-indigo-600',
      icon: <FiGlobe size={24} />
    },
    {
      id: 10,
      title: 'JobKro',
      description: 'User-friendly job portal for job seekers and employers.',
      tags: ['PHP', 'JS', 'HTML/CSS'],
      category: 'web',
      gradient: 'from-blue-400 to-blue-600',
      icon: <FiBriefcase size={24} />
    },
    {
      id: 11,
      title: 'PostgreSQL Runner',
      description: 'Developer tool for executing and managing PostgreSQL queries.',
      tags: ['PostgreSQL', 'SQL', 'Tools'],
      category: 'tools',
      gradient: 'from-gray-700 to-gray-900',
      icon: <FiDatabase size={24} />
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'web', label: 'Websites' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'iot', label: 'IoT' },
    { id: 'game', label: 'Games' },
    { id: 'tools', label: 'Tools' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fef9f0] to-[#f5f3ef] overflow-hidden">
      {/* 3D Perspective Grid */}
      <div className="absolute inset-0 opacity-15 -z-10">
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

      {/* Enhanced 3D Graphics Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-300/40 to-amber-400/40 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-300/40 to-yellow-400/40 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-35 animate-blob z-0"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-35 animate-blob animation-delay-2000 z-0"></div>

      {/* 3D Rotating Shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 border-[6px] border-dashed border-yellow-400/30 rounded-full z-0 shadow-lg shadow-yellow-400/10"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-1/4 w-48 h-48 border-[6px] border-dashed border-amber-400/30 rounded-full z-0 shadow-lg shadow-amber-400/10"
      />

      {/* Floating 3D Shapes */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotateX: [0, 360],
          rotateY: [0, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-1/3 w-32 h-32 z-0"
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      >
        <div className="absolute inset-0 border-[6px] border-yellow-400/40 rounded-2xl shadow-xl shadow-yellow-400/20" style={{ transform: 'translateZ(0px)' }}></div>
        <div className="absolute inset-0 border-[6px] border-amber-400/35 rounded-2xl shadow-xl shadow-amber-400/20" style={{ transform: 'translateZ(20px)' }}></div>
      </motion.div>

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          rotateZ: [0, 360]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/3 w-28 h-28 z-0"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 to-amber-500/50 rounded-xl shadow-2xl shadow-yellow-400/30" style={{ transform: 'rotateY(0deg) translateZ(10px)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/45 to-yellow-500/45 rounded-xl shadow-2xl shadow-amber-400/30" style={{ transform: 'rotateY(90deg) translateZ(10px)' }}></div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -120, 0],
            x: [0, Math.random() * 80 - 40, 0],
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          className="absolute w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 z-0"
          style={{
            left: `${10 + i * 9}%`,
            top: `${20 + (i % 3) * 25}%`
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
            className="text-6xl font-bold mb-4"
          >
            <span className="gradient-text-animated">My Projects</span>
          </motion.h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of {projects.length}+ projects showcasing my development journey
          </p>
        </motion.div>

        {/* Project Count Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            className="glass-effect rounded-xl px-6 py-4 border-2 border-white/50 shadow-lg"
          >
            <span className="text-3xl font-bold gradient-text-animated">{filteredProjects.length}</span>
            <span className="text-gray-600 ml-2 font-medium">Projects</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            className="glass-effect rounded-xl px-6 py-4 border-2 border-white/50 shadow-lg"
          >
            <span className="text-3xl font-bold gradient-text-animated">{projects.filter(p => p.category === 'mobile').length}</span>
            <span className="text-gray-600 ml-2 font-medium">Mobile Apps</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            className="glass-effect rounded-xl px-6 py-4 border-2 border-white/50 shadow-lg"
          >
            <span className="text-3xl font-bold gradient-text-animated">{projects.filter(p => p.category === 'web').length}</span>
            <span className="text-gray-600 ml-2 font-medium">Web Projects</span>
          </motion.div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all relative overflow-hidden ${activeFilter === filter.id
                ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white card-shadow'
                : 'bg-white/60 text-gray-700 hover:shadow-md border border-gray-200/50'
                }`}
            >
              {activeFilter === filter.id && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
                rotateY: 5,
                rotateX: -5,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 shadow-lg"
              style={{
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Project Header with Gradient */}
              <div className={`bg-gradient-to-br ${project.gradient} p-8 relative overflow-hidden h-40`} style={{ transform: 'translateZ(20px)' }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black opacity-10 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>
                <motion.div
                  className="relative z-10 flex items-center justify-between h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <motion.div
                      className="text-white mb-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6 bg-gradient-to-b from-white to-gray-50" style={{ transform: 'translateZ(10px)' }}>
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + tagIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-lg text-xs font-semibold border border-gray-300 cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl py-3 px-4 font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                  >
                    <FiGithub size={18} />
                    Code
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-xl py-3 px-4 font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                  >
                    <FiExternalLink size={18} />
                    Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
