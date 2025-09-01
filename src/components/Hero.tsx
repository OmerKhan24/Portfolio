'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Code, Brain, Database, Globe } from 'lucide-react';
import AnimatedRoom from './AnimatedRoom';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const titles = [
    'Computer Science Undergraduate passionate about AI, Data Analytics, and Full-Stack Development',
    'Building intelligent systems and data-driven applications',
    'Exploring NLP, BI tools, and cutting-edge technologies'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let i = 0;
    setText('');
    
    const timer = setInterval(() => {
      setText(currentTitle.slice(0, i));
      i++;
      if (i > currentTitle.length) {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skillIcons = [
    { icon: Code, label: 'Full-Stack', color: 'text-blue-400' },
    { icon: Brain, label: 'AI/ML', color: 'text-purple-400' },
    { icon: Database, label: 'Data Analytics', color: 'text-green-400' },
    { icon: Globe, label: 'Web Dev', color: 'text-cyan-400' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      
      {/* Interactive cursor follower */}
      <motion.div
        className="fixed w-6 h-6 border border-blue-400/30 rounded-full pointer-events-none z-10 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left relative"
          >
            
            {/* Floating background elements */}
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-blue-400/20 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
                <span className="text-blue-300 text-sm font-medium">Available for opportunities</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-4"
            >
              <span className="text-blue-400 text-lg font-mono tracking-wider">Hello, I&apos;m</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <motion.span 
                className="gradient-text block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Muhammad
              </motion.span>
              <motion.span 
                className="text-white block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Omer Khan
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-8 relative"
            >
              <div className="h-20 lg:h-16 flex items-center">
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed text-shadow">
                  {text}
                  <motion.span
                    className="inline-block w-1 h-6 bg-blue-400 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </p>
              </div>
            </motion.div>

            {/* Skills showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex justify-center lg:justify-start gap-4 mb-8"
            >
              {skillIcons.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center p-3 glass rounded-xl border border-gray-700/50 group cursor-pointer"
                >
                  <skill.icon className={`${skill.color} mb-2 group-hover:scale-110 transition-transform`} size={24} />
                  <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{skill.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-8 text-gray-400"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2"
              >
                <MapPin size={18} className="text-blue-400" />
                <span>Karachi, Pakistan</span>
              </motion.div>
              <div className="w-1 h-1 bg-gray-600 rounded-full" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Open to work</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex gap-4 justify-center lg:justify-start mb-8"
            >
              {[
                { icon: Github, href: 'https://github.com/OmerKhan24', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/omer-khan24/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:omerkhan2406@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 glass rounded-xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <social.icon 
                    size={24} 
                    className="text-gray-400 group-hover:text-blue-400 transition-colors" 
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 }}
              className="flex gap-4 justify-center lg:justify-start flex-wrap"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-2 shadow-2xl"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>View My Work</span>
                <ArrowDown size={18} className="rotate-[-90deg]" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 font-semibold glass"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let&apos;s Connect
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex justify-end relative"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                {/* Gaming Setup Display */}
                <div className="relative ">
                  <AnimatedRoom imageSrc="/room_image_2.png" duration={5} />
                  
                  {/* Overlay with stats */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-5 transform translate-x-40"
                  >
                    <div className="text-center text-white">
                      <div className="grid grid-cols-2 gap-4 lg:gap-6">
                        <div>
                          <div className="text-xl lg:text-2xl font-bold text-blue-400">6+</div>
                          <div className="text-xs lg:text-sm text-gray-300">Projects</div>
                        </div>
                        <div>
                          <div className="text-xl lg:text-2xl font-bold text-purple-400">3+</div>
                          <div className="text-xs lg:text-sm text-gray-300">Years Learning</div>
                        </div>
                        <div>
                          <div className="text-xl lg:text-2xl font-bold text-green-400">10+</div>
                          <div className="text-xs lg:text-sm text-gray-300">Technologies</div>
                        </div>
                        <div>
                          <div className="text-xl lg:text-2xl font-bold text-cyan-400">∞</div>
                          <div className="text-xs lg:text-sm text-gray-300">Passion</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 cursor-pointer group"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="mb-3 text-sm group-hover:text-white transition-colors">Discover more</span>
            <div className="w-6 h-10 border-2 border-gray-400 group-hover:border-blue-400 rounded-full flex justify-center transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 group-hover:bg-blue-400 rounded-full mt-2 transition-colors"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
