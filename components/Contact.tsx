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
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `💼 New Portfolio Contact from ${formData.name}`,
          from_name: 'Portfolio Contact Form',
          replyto: formData.email,
          to: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
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
      
      {/* Complex 3D Floating Shapes */}
      <motion.div
        animate={{ 
          y: [0, -18, 0],
          rotateX: [0, 180],
          rotateY: [0, 180],
          rotateZ: [0, 180]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 right-24 w-36 h-36"
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      >
        <div className="absolute inset-0 border-4 border-yellow-400/20 rounded-3xl" style={{ transform: 'translateZ(0px)' }}></div>
        <div className="absolute inset-0 border-4 border-amber-400/15 rounded-3xl" style={{ transform: 'translateZ(18px)' }}></div>
        <div className="absolute inset-0 border-4 border-orange-400/10 rounded-3xl" style={{ transform: 'translateZ(-18px)' }}></div>
      </motion.div>
      
      <motion.div
        animate={{ 
          x: [0, 25, 0],
          rotateY: [0, 180],
          scale: [1, 1.08, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-16 w-32 h-32"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/35 to-amber-500/35 rounded-2xl shadow-xl" style={{ transform: 'rotateY(0deg) translateZ(10px)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-2xl shadow-xl" style={{ transform: 'rotateY(90deg) translateZ(10px)' }}></div>
      </motion.div>
      
      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -45, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.15, 1],
            rotate: [0, 180]
          }}
          transition={{
            duration: 18 + i * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
          className="absolute rounded-full shadow-lg"
          style={{
            left: `${5 + i * 8}%`,
            top: `${15 + (i % 4) * 20}%`,
            width: `${8 + (i % 3) * 4}px`,
            height: `${8 + (i % 3) * 4}px`,
            background: `linear-gradient(135deg, ${i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#f59e0b' : '#fb923c'}, ${i % 3 === 0 ? '#f59e0b' : i % 3 === 1 ? '#fb923c' : '#fbbf24'})`,
            boxShadow: '0 4px 15px rgba(251, 191, 36, 0.5)'
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl font-black mb-6"
          >
            <span className="gradient-text-animated">Get In Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-2xl mx-auto mb-4"
          >
            Have a project in mind? Let's work together to create something amazing!
          </motion.p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full mx-auto" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-amber-400/20 to-orange-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
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
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:shadow-yellow-400/30 transition-all"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    <FiMail size={20} />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Email Address</div>
                    <div className="font-bold text-gray-900 text-base">developer@example.com</div>
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
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:shadow-gray-600/30 transition-all"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    <FiMapPin size={20} />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Location</div>
                    <div className="font-bold text-gray-900 text-base">Available Worldwide</div>
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
              className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-gray-100 hover:border-amber-300 transition-all duration-300 relative overflow-hidden" 
              style={{ 
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-yellow-100/50 to-amber-100/50 rounded-full filter blur-3xl opacity-40" style={{ transform: 'translateZ(-20px)' }}></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-4 mb-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white" style={{ transform: 'translateZ(10px)' }}>Connect With Me</h3>
                  <p className="text-white/90 text-xs mt-1">Follow for updates and projects</p>
                </div>
              
              <div className="flex gap-4 justify-center relative z-10" style={{ transform: 'translateZ(8px)' }}>
                <motion.a
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/rakeshsingh157"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-white hover:shadow-2xl hover:shadow-gray-800/40 transition-all"
                  style={{ transform: 'translateZ(12px)' }}
                >
                  <FiGithub size={24} />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/rakesh-kumar-singh-14b17331a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center text-white hover:shadow-2xl hover:shadow-yellow-500/40 transition-all"
                  style={{ transform: 'translateZ(12px)' }}
                >
                  <FiLinkedin size={24} />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white hover:shadow-2xl hover:shadow-orange-500/40 transition-all"
                  style={{ transform: 'translateZ(12px)' }}
                >
                  <FiTwitter size={24} />
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
                whileHover={{ scale: 1.1, y: -8, rotateY: 5 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl p-6 text-center shadow-xl relative overflow-hidden group" 
                style={{ 
                  boxShadow: '0 12px 32px rgba(251, 191, 36, 0.3)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="text-5xl font-black text-white mb-2 relative z-10" 
                  style={{ transform: 'translateZ(10px)' }}
                >
                  24/7
                </motion.div>
                <div className="text-white/95 text-sm font-bold uppercase tracking-wider relative z-10">Available</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.1, y: -8, rotateY: 5 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-center shadow-xl relative overflow-hidden group" 
                style={{ 
                  boxShadow: '0 12px 32px rgba(251, 146, 60, 0.3)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="text-5xl font-black text-white mb-2 relative z-10" 
                  style={{ transform: 'translateZ(10px)' }}
                >
                  &lt;24h
                </motion.div>
                <div className="text-white/95 text-sm font-bold uppercase tracking-wider relative z-10">Response</div>
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
            className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-100 hover:border-yellow-300 transition-all duration-300 relative overflow-hidden"
            style={{ 
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
              transformStyle: 'preserve-3d',
              perspective: '1200px'
            }}
          >
            {/* 3D Background Gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full filter blur-3xl opacity-40 -mr-32 -mt-32" style={{ transform: 'translateZ(-40px)' }}></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-full filter blur-3xl opacity-30 -ml-24 -mb-24" style={{ transform: 'translateZ(-30px)' }}></div>
            
            <div className="relative z-10">
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
                  ) : status === 'error' ? (
                    <>
                      <span>✗</span>
                      Failed to Send. Try Again
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
    </section>
  );
};

export default Contact;
