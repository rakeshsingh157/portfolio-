'use client';

import { motion } from 'framer-motion';
import { FiAward, FiStar, FiBookOpen } from 'react-icons/fi';

const Achievements = () => {
  const achievements = [
    {
      icon: FiAward,
      title: 'Invento Hackathon Winner',
      organization: 'Tech Fest 2024',
      description: 'Won first place for developing an innovative AI-powered solution',
      date: '2024',
      color: 'from-yellow-400 to-amber-500'
    },
    {
      icon: FiAward,
      title: 'CodeBug Champion',
      organization: 'National Coding Competition',
      description: 'Secured top position among 500+ participants',
      date: '2024',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: FiStar,
      title: 'Web Development Bootcamp',
      organization: 'Tech Academy',
      description: 'Completed intensive full-stack development program',
      date: '2023',
      color: 'from-orange-500 to-yellow-500'
    },
  ];

  const certifications = [
    {
      title: 'Machine Learning Specialization',
      platform: 'Coursera',
      issuer: 'Stanford University',
      date: '2024'
    },
    {
      title: 'React - The Complete Guide',
      platform: 'Udemy',
      issuer: 'Maximilian Schwarzmüller',
      date: '2023'
    },
    {
      title: 'AWS Cloud Practitioner',
      platform: 'AWS Training',
      issuer: 'Amazon Web Services',
      date: '2023'
    },
    {
      title: 'Python for Data Science',
      platform: 'edX',
      issuer: 'IBM',
      date: '2023'
    },
  ];

  const workshops = [
    'Advanced JavaScript Patterns Workshop',
    'AI/ML Conference 2024 - Speaker',
    'DevOps & Cloud Computing Workshop',
    'Mobile App Development Bootcamp',
  ];

  return (
    <section id="achievements" className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f5f3ef] to-[#fef9f0] overflow-hidden">
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
          y: [0, -20, 0],
          rotateX: [0, 180],
          rotateZ: [0, 180]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 left-20 w-32 h-32"
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      >
        <div className="absolute inset-0 border-4 border-yellow-400/20 rounded-3xl" style={{ transform: 'translateZ(0px)' }}></div>
        <div className="absolute inset-0 border-4 border-amber-400/15 rounded-3xl" style={{ transform: 'translateZ(20px)' }}></div>
      </motion.div>

      <motion.div
        animate={{ 
          x: [0, 25, 0],
          rotateY: [0, 180],
          rotateZ: [180, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-16 w-28 h-28"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/35 to-orange-500/35 rounded-2xl shadow-xl" style={{ transform: 'rotateX(0deg) translateZ(0px)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-amber-500/30 rounded-2xl shadow-xl" style={{ transform: 'rotateX(90deg) translateZ(14px)' }}></div>
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -25, 0],
          rotateY: [0, 180],
          scale: [1, 1.08, 1]
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-24 h-24"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 border-4 border-orange-400/20 rounded-3xl" style={{ transform: 'rotateZ(45deg)' }}></div>
        <div className="absolute inset-0 border-4 border-yellow-400/25 rounded-3xl" style={{ transform: 'rotateZ(45deg) translateZ(12px)' }}></div>
      </motion.div>

      {/* Floating Award Icons */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -45, 0],
            x: [0, (i % 2 === 0 ? 25 : -25), 0],
            rotate: [0, 180],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 15 + i * 1.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          className="absolute rounded-full"
          style={{
            left: `${8 + i * 10}%`,
            top: `${18 + (i % 4) * 20}%`,
            width: `${10 + (i % 3) * 4}px`,
            height: `${10 + (i % 3) * 4}px`,
            background: `linear-gradient(135deg, ${i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#f59e0b' : '#fb923c'}, ${i % 3 === 0 ? '#f59e0b' : i % 3 === 1 ? '#fb923c' : '#fbbf24'})`,
            boxShadow: '0 4px 15px rgba(251, 191, 36, 0.5)'
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black gradient-text-animated mb-4">Achievements & Certifications</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Milestones that shaped my journey and validated my skills
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Major Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <FiAward className="text-yellow-500" />
            Major Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
                className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hover:border-yellow-400 transition-all duration-300 group relative overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)', transformStyle: 'preserve-3d' }}
              >
                {/* 3D Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-amber-400/0 group-hover:from-yellow-400/5 group-hover:to-amber-400/5 transition-all duration-500" style={{ transform: 'translateZ(-10px)' }}></div>
                <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h4>
                <p className="text-yellow-600 font-semibold text-sm mb-3">{achievement.organization}</p>
                <p className="text-gray-600 text-sm mb-4">{achievement.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {achievement.date}
                  </span>
                  <FiStar className="text-yellow-500" />
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <FiAward className="text-orange-500" />
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02, rotateY: 3 }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400 hover:border-orange-500 transition-all duration-300 group relative" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', transformStyle: 'preserve-3d' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(-10px)' }}></div>
                <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-semibold">Platform:</span> {cert.platform}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Issued by:</span> {cert.issuer}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workshops & Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <FiBookOpen className="text-amber-500" />
            Workshops & Events
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-5 shadow-md border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 flex items-center gap-4 relative overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative flex-shrink-0">
                  <motion.div 
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"
                  />
                  <div className="absolute inset-0 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <p className="text-gray-800 font-semibold">{workshop}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
