'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiCode, FiCoffee, FiZap, FiClock, FiGlobe, FiAward } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

const Hero = () => {
  const [time, setTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: '15+', label: 'Projects', color: 'bg-yellow-400', icon: <FiCode /> },
    { value: '10+', label: 'Skills', color: 'bg-gray-800', icon: <FiZap /> },
    { value: '100%', label: 'Dedication', color: 'bg-yellow-500', icon: <FiCoffee /> }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#f5f3ef] via-[#f9f7f3] to-[#fef9f0]">
      {/* 3D Perspective Grid - Same as Skills Section */}
      <div className="absolute inset-0 -z-10 opacity-15">
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

      {/* Enhanced Animated Background with Full 3D Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-2xl opacity-35 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Complex 3D Geometric Shapes */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotateX: [0, 360],
            rotateY: [0, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-40 h-40"
          style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        >
          <div className="absolute inset-0 border-[6px] border-yellow-400/40 rounded-[2rem] shadow-lg shadow-yellow-400/20" style={{ transform: 'translateZ(0px)' }}></div>
          <div className="absolute inset-0 border-[6px] border-amber-400/35 rounded-[2rem] shadow-lg shadow-amber-400/20" style={{ transform: 'translateZ(20px)' }}></div>
          <div className="absolute inset-0 border-[6px] border-yellow-500/30 rounded-[2rem] shadow-lg shadow-yellow-500/20" style={{ transform: 'translateZ(-20px)' }}></div>
        </motion.div>

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            rotateZ: [0, 360]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/3 w-32 h-32"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 to-amber-500/50 rounded-2xl shadow-xl shadow-yellow-400/30" style={{ transform: 'rotateY(0deg) translateZ(10px)' }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/45 to-yellow-500/45 rounded-2xl shadow-xl shadow-amber-400/30" style={{ transform: 'rotateY(90deg) translateZ(10px)' }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/40 to-orange-500/40 rounded-2xl shadow-xl shadow-yellow-500/30" style={{ transform: 'rotateY(180deg) translateZ(10px)' }}></div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
          />
        ))}
      </div>

      {/* 3D Background Element */}
      {mounted && (
        <div className="absolute top-0 right-0 w-full h-full opacity-30 -z-10 hidden lg:block">
          <Scene3D />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section with Logo and Stats */}
        <div className="hidden md:flex flex-wrap gap-4 mb-8 justify-between items-center">
          {/* Left - Animated Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg"
              style={{ boxShadow: '0 8px 24px rgba(251, 191, 36, 0.3)' }}
            >
              R
            </motion.div>
            <div>
              <div className="text-2xl font-bold gradient-text-animated">Rakesh Kumar Singh</div>
              <div className="text-sm text-gray-600">Creative Coder</div>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5, rotateY: 10 }}
                className="bg-white rounded-2xl px-8 py-5 flex items-center gap-4 cursor-pointer hover:shadow-2xl transition-all border-2 border-gray-100 shadow-lg relative overflow-hidden group"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* 3D Layered Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-amber-400/0 group-hover:from-yellow-400/10 group-hover:to-amber-400/10 transition-all duration-500"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-yellow-300/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center text-white text-xl shadow-md relative`} style={{ transform: 'translateZ(20px)' }}>
                  {stat.icon}
                </div>
                <div className="relative" style={{ transform: 'translateZ(10px)' }}>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}          </div>        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, rotateY: 5 }}
            className="bg-white rounded-3xl p-10 relative overflow-hidden border-2 border-gray-100 shadow-2xl"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            {/* 3D Layered Background Gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full filter blur-3xl opacity-50 -mr-32 -mt-32" style={{ transform: 'translateZ(-50px)' }}></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-full filter blur-3xl opacity-40 -ml-24 -mb-24" style={{ transform: 'translateZ(-30px)' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-yellow-400/5 to-transparent rounded-3xl" style={{ transform: 'translateZ(-20px)' }}></div>

            <div className="relative z-10">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full mb-6 font-bold text-sm shadow-lg"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Available for Freelance
              </motion.div>



              {/* Profile Image with Animation */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-48 h-48 bg-gray-900 rounded-3xl mb-6 relative overflow-hidden group shadow-2xl border-4 border-white"
              >
                <Image
                  src="/profile.jpg"
                  alt="Rakesh Kumar Singh"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              <div className="mb-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl font-bold mb-3"
                >
                  <span className="gradient-text-animated">Rakesh Kumar Singh</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 text-lg font-medium"
                >
                  Full Stack Developer and Creative Coder
                </motion.p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mb-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/rakeshsingh157"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                >
                  <FiGithub size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/rakesh-kumar-singh-14b17331a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <FiLinkedin size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:kumarpatelrakesh222@gmail.com"
                  className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center text-gray-800 hover:bg-gray-300 transition-colors"
                >
                  <FiMail size={20} />
                </motion.a>
              </div>

              {/* Download Resume Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl py-4 px-6 font-bold flex items-center justify-center gap-2 card-shadow hover:shadow-xl transition-all relative overflow-hidden group mb-6"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <FiDownload size={20} className="relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </motion.button>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-3">
                {['C/C++', 'Python', 'JavaScript', 'PHP', 'Node.js'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Dashboard Widgets */}
          <div className="space-y-6">
            {/* Time Tracker Widget */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-2xl"
              style={{ boxShadow: '0 12px 48px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Time Tracker</h3>
                <span className="text-sm text-gray-500">Binary Clock</span>
              </div>

              <div className="space-y-6">
                {/* Normal Time Display */}
                <div className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-2">
                    {time ? time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : '--:--:--'}
                  </div>
                  <div className="text-sm text-gray-500">Digital Time</div>
                </div>

                {/* Binary Time Display */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                  <div className="text-xs text-gray-500 text-center mb-3 font-semibold">BINARY REPRESENTATION</div>
                  <div className="grid grid-cols-3 gap-4">
                    {/* Hours */}
                    <div>
                      <div className="text-xs text-gray-600 text-center mb-2 font-medium">H</div>
                      <div className="flex flex-col gap-1">
                        {time && Array.from({ length: 6 }).map((_, i) => {
                          const hours = time.getHours();
                          const bit = (hours >> (5 - i)) & 1;
                          return (
                            <div
                              key={i}
                              className={`h-3 rounded-full transition-all duration-300 ${bit ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg' : 'bg-gray-200'
                                }`}
                              style={bit ? { boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)' } : {}}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Minutes */}
                    <div>
                      <div className="text-xs text-gray-600 text-center mb-2 font-medium">M</div>
                      <div className="flex flex-col gap-1">
                        {time && Array.from({ length: 6 }).map((_, i) => {
                          const minutes = time.getMinutes();
                          const bit = (minutes >> (5 - i)) & 1;
                          return (
                            <div
                              key={i}
                              className={`h-3 rounded-full transition-all duration-300 ${bit ? 'bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg' : 'bg-gray-200'
                                }`}
                              style={bit ? { boxShadow: '0 0 10px rgba(55, 65, 81, 0.5)' } : {}}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Seconds */}
                    <div>
                      <div className="text-xs text-gray-600 text-center mb-2 font-medium">S</div>
                      <div className="flex flex-col gap-1">
                        {time && Array.from({ length: 6 }).map((_, i) => {
                          const seconds = time.getSeconds();
                          const bit = (seconds >> (5 - i)) & 1;
                          return (
                            <div
                              key={i}
                              className={`h-3 rounded-full transition-all duration-300 ${bit ? 'bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg animate-pulse' : 'bg-gray-200'
                                }`}
                              style={bit ? { boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)' } : {}}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 text-center mt-3">1 = ON • 0 = OFF</div>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-lg"
                style={{ boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)' }}
              >
                <div className="text-sm text-gray-600 mb-2 font-medium">Lines of Code</div>
                <div className="text-3xl font-bold gradient-text">50K+</div>
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 shadow-sm"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-lg"
                style={{ boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)' }}
              >
                <div className="text-sm text-gray-600 mb-2 font-medium">Technologies</div>
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '90%' }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="h-full bg-gradient-to-r from-gray-700 to-gray-900 shadow-sm"
                  />
                </div>
              </motion.div>
            </div>

            {/* Activity Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-lg"
              style={{ boxShadow: '0 6px 24px rgba(0, 0, 0, 0.08)' }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Current Status</div>
                  <div className="text-xl font-semibold">Building Amazing Projects </div>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
