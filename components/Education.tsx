'use client';

import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin, FiCheck } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      college: 'Your University Name',
      location: 'City, State',
      year: '2022 - 2026',
      grade: 'CGPA: 8.5/10',
      status: 'Pursuing',
      subjects: [
        'Artificial Intelligence',
        'Machine Learning',
        'Database Management Systems',
        'Operating Systems',
        'Data Structures & Algorithms',
        'Web Technologies',
        'Computer Networks',
        'Software Engineering'
      ],
      achievements: [
        'Dean\'s List for Academic Excellence',
        'Member of Coding Club',
        'Participant in Technical Events'
      ]
    },
    {
      degree: 'Senior Secondary (12th)',
      college: 'Your School Name',
      location: 'City, State',
      year: '2020 - 2022',
      grade: 'Percentage: 92%',
      status: 'Completed',
      subjects: [
        'Physics',
        'Chemistry',
        'Mathematics',
        'Computer Science'
      ],
      achievements: [
        'School Topper in Computer Science',
        'Science Exhibition Winner'
      ]
    }
  ];

  return (
    <section id="education" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fef9f0] to-[#f5f3ef] overflow-hidden">
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
          y: [0, 20, 0],
          rotateY: [0, 180],
          rotateZ: [0, 180]
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-40 right-20 w-28 h-28"
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      >
        <div className="absolute inset-0 border-4 border-yellow-400/20 rounded-3xl" style={{ transform: 'rotateY(0deg) translateZ(0px)' }}></div>
        <div className="absolute inset-0 border-4 border-orange-400/15 rounded-3xl" style={{ transform: 'rotateY(90deg) translateZ(14px)' }}></div>
      </motion.div>

      <motion.div
        animate={{ 
          x: [0, -25, 0],
          y: [0, 15, 0],
          rotateX: [0, 180]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-16 w-24 h-24"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-amber-500/30 rounded-3xl" style={{ transform: 'translateZ(0px)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/25 to-orange-400/25 rounded-3xl" style={{ transform: 'translateZ(12px)' }}></div>
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -22, 0],
          rotateZ: [0, 180],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 29, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/3 w-26 h-26"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 border-4 border-amber-400/20 rounded-2xl" style={{ transform: 'rotateZ(30deg)' }}></div>
        <div className="absolute inset-0 border-4 border-yellow-400/25 rounded-2xl" style={{ transform: 'rotateZ(30deg) translateZ(13px)' }}></div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 14 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          className="absolute rounded-full shadow-lg"
          style={{
            left: `${18 + i * 10}%`,
            top: `${28 + (i % 3) * 22}%`,
            width: `${9 + (i % 3) * 3}px`,
            height: `${9 + (i % 3) * 3}px`,
            background: `linear-gradient(135deg, ${i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#f59e0b' : '#fb923c'}, ${i % 3 === 0 ? '#f59e0b' : i % 3 === 1 ? '#fb923c' : '#fbbf24'})`,
            boxShadow: '0 4px 14px rgba(251, 191, 36, 0.5)'
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
          <h2 className="text-5xl font-black gradient-text-animated mb-4">Education</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My academic journey and learning milestones
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-full bg-gradient-to-b from-yellow-400 to-orange-500 hidden md:block" />
              )}

              <div className="grid md:grid-cols-12 gap-6 items-start">
                {/* Timeline Dot */}
                <div className="hidden md:flex md:col-span-1 justify-center items-start pt-8">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg relative z-10"
                  >
                    <FiBookOpen className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 3 }}
                  className="md:col-span-11 bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-100 hover:border-yellow-400 transition-all duration-300 relative overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)', transformStyle: 'preserve-3d' }}
                >
                  {/* 3D Background Gradient */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full opacity-20\" style={{ transform: 'translateZ(-20px)' }}></div>
                  <div className="relative z-10">
                  <div className="flex flex-wrap items-start justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                      <p className="text-lg text-yellow-600 font-semibold mb-2">{edu.college}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <FiMapPin className="text-orange-500" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <FiCalendar className="text-yellow-500" />
                          {edu.year}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                      <span className={`relative px-5 py-2.5 rounded-xl font-bold text-sm overflow-hidden border-2 ${
                        edu.status === 'Pursuing' 
                          ? 'bg-white border-yellow-400 text-yellow-700'
                          : 'bg-white border-amber-400 text-amber-700'
                      }`}>
                        <div className={`absolute inset-0 animate-pulse ${
                          edu.status === 'Pursuing'
                            ? 'bg-gradient-to-r from-yellow-400/20 to-amber-400/20'
                            : 'bg-gradient-to-r from-amber-400/20 to-orange-400/20'
                        }`}></div>
                        <div className="absolute inset-0 opacity-40">
                          <div className={`absolute top-0 left-0 w-full h-full animate-shimmer ${
                            edu.status === 'Pursuing'
                              ? 'bg-gradient-to-r from-yellow-400/0 via-yellow-400/50 to-yellow-400/0'
                              : 'bg-gradient-to-r from-amber-400/0 via-amber-400/50 to-amber-400/0'
                          }`}></div>
                        </div>
                        <span className="relative z-10">{edu.status}</span>
                      </span>
                      <span className="px-5 py-2.5 rounded-xl bg-yellow-100 text-yellow-800 font-bold text-sm text-center border-2 border-yellow-200">
                        {edu.grade}
                      </span>
                    </div>
                  </div>

                  {/* Relevant Subjects */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                      Relevant Subjects
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {edu.subjects.map((subject, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg px-3 py-2 text-sm text-gray-700 font-medium border border-yellow-200 hover:border-yellow-400 transition-all duration-300 text-center"
                        >
                          {subject}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-400 rounded-full" />
                      Achievements
                    </h4>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <FiCheck className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, rotateY: 2 }}
          className="mt-16 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-3xl p-10 shadow-2xl text-center relative overflow-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Animated Shine Effect */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          <div className="relative z-10">
            <h3 className="text-4xl font-black text-white mb-4">Continuous Learner</h3>
            <p className="text-white/95 text-lg max-w-3xl mx-auto">
              Beyond formal education, I'm constantly exploring new technologies through online courses, 
              documentation, and hands-on projects. Learning never stops!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
