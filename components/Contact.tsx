'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter, FiUser, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Construct mailto link
    const mailtoLink = `mailto:kumarpatelrakesh222@gmail.com?subject=Contact from Portfolio&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;

    // Open email client
    window.location.href = mailtoLink;

    setStatus('sent');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f5f3ef] to-[#fef9f0] overflow-hidden">
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

      {/* Enhanced 3D Geometric Shapes */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-40 h-40 z-0"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 to-amber-500/50 rounded-2xl shadow-2xl shadow-yellow-400/30" style={{ transform: 'rotateY(0deg) translateZ(20px)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/45 to-yellow-500/45 rounded-2xl shadow-2xl shadow-amber-400/30" style={{ transform: 'rotateY(90deg) translateZ(20px)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/40 to-orange-500/40 rounded-2xl shadow-2xl shadow-yellow-500/30" style={{ transform: 'rotateX(90deg) translateZ(20px)' }}></div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -50, 0],
          rotateZ: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-20 w-32 h-32 border-[6px] border-yellow-400/40 rounded-3xl shadow-xl shadow-yellow-400/20 z-0"
        style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}
      />

      <div className="absolute top-1/2 right-10 w-72 h-72 bg-gradient-to-bl from-yellow-300/40 to-transparent rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-amber-300/40 to-transparent rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-35 animate-blob z-0"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-35 animate-blob animation-delay-2000 z-0"></div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 10 + i * 1.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
          className="absolute w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50 z-0"
          style={{
            left: `${10 + i * 12}%`,
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
            <span className="gradient-text-animated">Get In Touch</span>
          </motion.h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ y: -10, scale: 1.02, rotateY: 2 }}
              className="bg-gradient-to-br from-white via-white to-amber-50/30 rounded-2xl p-1 shadow-lg relative overflow-hidden group"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 via-amber-400/50 to-orange-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative bg-white rounded-2xl p-6 z-10">
                {/* Premium Header with Gradient */}
                <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl p-4 mb-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white" style={{ transform: 'translateZ(10px)' }}>Contact Information</h3>
                  <p className="text-white/90 text-xs mt-1">Let's connect and collaborate</p>
                </div>

                <div className="space-y-4 relative z-10" style={{ transform: 'translateZ(8px)' }}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ x: 6, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-amber-50/30 hover:from-yellow-50 hover:to-amber-50 transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-yellow-400/30"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:shadow-yellow-400/30 transition-all"
                      style={{ transform: 'translateZ(15px)' }}
                    >
                      <FiMail size={20} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Email Address</div>
                      <div className="font-bold text-gray-900 text-base">kumarpatelrakesh222@gmail.com</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ x: 6, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-amber-50/30 hover:from-gray-100 hover:to-gray-50 transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-gray-400/30"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:shadow-gray-600/30 transition-all"
                      style={{ transform: 'translateZ(15px)' }}
                    >
                      <FiMapPin size={20} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Location</div>
                      <div className="font-bold text-gray-900 text-base">Mumbai , Maharashtra</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02, rotateY: 2 }}
              className="bg-gradient-to-br from-white via-white to-blue-50/30 rounded-2xl p-1 shadow-lg relative overflow-hidden group"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 via-cyan-400/50 to-blue-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative bg-white rounded-2xl p-6 z-10">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 mb-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white" style={{ transform: 'translateZ(10px)' }}>Connect With Me</h3>
                  <p className="text-white/90 text-xs mt-1">Follow for updates and projects</p>
                </div>

                <div className="flex gap-4 relative z-10" style={{ transform: 'translateZ(8px)' }}>
                  <motion.a
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.2, rotate: 360, y: -6 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/rakeshsingh157"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white hover:shadow-xl hover:shadow-gray-600/40 transition-all"
                    style={{ transform: 'translateZ(12px)' }}
                  >
                    <FiGithub size={22} />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.2, rotate: 360, y: -6 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.linkedin.com/in/rakesh-kumar-singh-14b17331a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white hover:shadow-xl hover:shadow-blue-500/40 transition-all"
                    style={{ transform: 'translateZ(12px)' }}
                  >
                    <FiLinkedin size={22} />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.2, rotate: 360, y: -6 }}
                    whileTap={{ scale: 0.9 }}
                    href="mailto:kumarpatelrakesh222@gmail.com"
                    className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center text-white hover:shadow-xl hover:shadow-yellow-400/40 transition-all"
                    style={{ transform: 'translateZ(12px)' }}
                  >
                    <FiMail size={22} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -6, rotateY: 5 }}
                className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-5 text-center shadow-lg relative overflow-hidden group"
                style={{
                  boxShadow: '0 8px 24px rgba(34, 197, 94, 0.25)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="text-4xl font-black text-white mb-1 relative z-10"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  24/7
                </motion.div>
                <div className="text-white/90 text-xs font-bold uppercase tracking-wider relative z-10">Available</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, y: -6, rotateY: 5 }}
                className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-5 text-center shadow-lg relative overflow-hidden group"
                style={{
                  boxShadow: '0 8px 24px rgba(168, 85, 247, 0.25)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="text-4xl font-black text-white mb-1 relative z-10"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  &lt;24h
                </motion.div>
                <div className="text-white/90 text-xs font-bold uppercase tracking-wider relative z-10">Response</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            whileHover={{ y: -10, scale: 1.01 }}
            className="bg-gradient-to-br from-white via-white to-yellow-50/30 rounded-2xl p-1 shadow-xl relative overflow-hidden"
            style={{
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
              transformStyle: 'preserve-3d',
              perspective: '1200px'
            }}
          >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-500 rounded-2xl opacity-50 blur-xl animate-pulse"></div>

            <div className="relative bg-white rounded-2xl p-6 z-10">
              {/* Premium Form Header */}
              <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-xl p-5 mb-6 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
                <h3 className="text-2xl font-black text-white mb-1 relative z-10" style={{ transform: 'translateZ(10px)' }}>Send Message</h3>
                <p className="text-white/90 text-sm relative z-10">I'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" style={{ transform: 'translateZ(8px)' }}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative group"
                  style={{ transform: 'translateZ(12px)' }}
                >
                  <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider flex items-center gap-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.02, borderColor: "rgb(251, 191, 36)" }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-amber-50/30 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all text-base font-medium shadow-inner"
                      placeholder="Enter your full name"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-yellow-400 transition-colors">
                      <FiUser size={18} />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative group"
                  style={{ transform: 'translateZ(12px)' }}
                >
                  <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider flex items-center gap-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.02, borderColor: "rgb(251, 191, 36)" }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-amber-50/30 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all text-base font-medium shadow-inner"
                      placeholder="your.email@example.com"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-yellow-400 transition-colors">
                      <FiMail size={18} />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative group"
                  style={{ transform: 'translateZ(12px)' }}
                >
                  <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider flex items-center gap-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <motion.textarea
                      whileFocus={{ scale: 1.02, borderColor: "rgb(251, 191, 36)" }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gradient-to-r from-gray-50 to-amber-50/30 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all resize-none text-base font-medium shadow-inner"
                      placeholder="Tell me about your project or just say hi!"
                    />
                    <div className="absolute right-4 top-4 text-gray-400 group-hover:text-yellow-400 transition-colors">
                      <FiMessageSquare size={18} />
                    </div>
                  </div>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.03, y: -2, boxShadow: '0 15px 30px rgba(251, 191, 36, 0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-xl hover:shadow-yellow-400/40 transition-all relative overflow-hidden group disabled:opacity-50"
                  style={{ transform: 'translateZ(15px)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === 'sending' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : status === 'sent' ? (
                      <>
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          ✓
                        </motion.span>
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        <FiSend size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                        Send Message
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
};

export default Contact;
