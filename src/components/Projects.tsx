'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Github, ExternalLink, Code, Brain, Database, Globe, Briefcase, Star, Zap } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'IntelliHire — AI Interview Platform',
      description: 'Final Year Project. Full-stack AI hiring platform: DeepSeek LLM conducts live interviews by voice, YOLOv8 detects phones, MediaPipe tracks eye gaze, Sentence Transformers score answers semantically. 5 AI models running simultaneously.',
      category: 'AI / ML Projects',
      tags: ['React 19', 'Flask', 'DeepSeek LLM', 'YOLOv8', 'MediaPipe', 'ChromaDB', 'MySQL'],
      scrollTo: 'fyp',
      icon: Brain,
      gradient: 'from-violet-600 to-indigo-600',
      featured: true,
      highlight: true,
      fyp: true,
    },
    {
      title: 'Fast Track Driving School',
      description: 'Freelance. Production-deployed UK driving school platform with Stripe payments, 10-section ADI onboarding (document uploads, digital signatures), full admin CMS, instructor portal, referral tracking, and AES-256 encryption for PII.',
      category: 'Freelancing',
      tags: ['React 18', 'Node.js', 'Express.js', 'MySQL', 'Stripe', 'JWT', 'Nodemailer'],
      liveUrl: 'https://fasttrackds.co.uk',
      icon: Briefcase,
      gradient: 'from-emerald-500 to-teal-600',
      freelance: true,
      featured: true,
      highlight: true,
    },
    {
      title: 'Car Showroom Management System',
      description: 'A comprehensive web-based car showroom management system with vehicle listings, test drive scheduling, user inquiries, and financial management features.',
      category: 'Web Apps',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python Flask', 'MySQL'],
      github: 'https://github.com/OmerKhan24/car_showroom',
      icon: Globe,
      gradient: 'from-red-500 to-orange-500',
      featured: true,
      highlight: true,
    },
    {
      title: 'Gemini Clone',
      description: 'A pixel-perfect UI clone project demonstrating advanced frontend development skills and attention to design details.',
      category: 'Web Apps',
      tags: ['HTML', 'CSS', 'UI Design'],
      github: 'https://github.com/OmerKhan24/Gemini-Clone',
      liveUrl: 'https://gemini-clone-rouge.vercel.app/',
      icon: Globe,
      gradient: 'from-indigo-500 to-purple-500',
      featured: true,
      highlight: false,
    },
    {
      title: 'Emotion Recognizer',
      description: 'CNN-based emotion detection system using facial images, leveraging deep learning for accurate emotion classification.',
      category: 'AI / ML Projects',
      tags: ['Python', 'CNN', 'OpenCV'],
      github: 'https://github.com/OmerKhan24/Emotion_Recognizer',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      featured: true,
      highlight: false,
    },
    {
      title: 'MNIST Neural Network',
      description: 'Neural network implementation for classifying handwritten digits from the MNIST dataset, featuring training and testing capabilities.',
      category: 'AI / ML Projects',
      tags: ['Python', 'Neural Network', 'MNIST'],
      github: 'https://github.com/OmerKhan24/MNIST-Neural-Network',
      icon: Brain,
      gradient: 'from-green-500 to-teal-500',
      featured: true,
      highlight: false,
    },
    {
      title: 'CryptoTraderCpp',
      description: 'A cryptocurrency trading simulation tool built with C++, showcasing the power and versatility of C++ in the world of finance.',
      category: 'System / C++ Tools',
      tags: ['C++', 'Finance', 'Simulation'],
      github: 'https://github.com/OmerKhan24/CryptoTraderCpp-',
      icon: Code,
      gradient: 'from-yellow-500 to-orange-500',
      featured: false,
      highlight: false,
    },
    {
      title: 'SleepSmart',
      description: 'A web application focused on boosting academic success through optimized sleep analysis and calculator tools for students.',
      category: 'Web Apps',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/OmerKhan24/SleepSmart',
      liveUrl: 'https://omerkhan24.github.io/SleepSmart/',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-500',
      featured: false,
      highlight: false,
    },
    {
      title: 'Contact Management System',
      description: 'A comprehensive CLI-based contact management system built with C++, featuring full CRUD operations and data persistence.',
      category: 'System / C++ Tools',
      tags: ['C++', 'CLI', 'Data Management'],
      github: 'https://github.com/OmerKhan24/Contact-Management-System',
      icon: Database,
      gradient: 'from-red-500 to-pink-500',
      featured: false,
      highlight: false,
    },
  ];

  const categories = ['All', 'Freelancing', 'Web Apps', 'AI / ML Projects', 'System / C++ Tools'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 relative">
            {/* Background Text */}
            <div className="absolute inset-0 flex items-start justify-center pointer-events-none overflow-hidden">
              <span className="text-[5.5rem] lg:text-[7rem] font-black bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 bg-clip-text text-transparent select-none whitespace-nowrap">
                PROJECTS
              </span>
            </div>            {/* Main Content */}
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                My <span className="gradient-text section-title-accent">Projects</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A showcase of my technical projects spanning AI/ML, web development, and system programming
              </p>
            </div>
          </motion.div>

          {/* Freelancing Banner */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 bg-gradient-to-r from-emerald-900/30 via-teal-900/20 to-cyan-900/30 backdrop-blur-sm p-6 md:p-8">
              <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500/20 border border-emerald-500/30 shrink-0">
                  <Briefcase size={28} className="text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">Available for Freelance Work</h3>
                    <span className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold rounded-full">Open to Projects</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    I freelance in building full-stack web applications using <span className="text-emerald-400 font-medium">React</span>, <span className="text-emerald-400 font-medium">Node.js</span>, <span className="text-emerald-400 font-medium">Next.js</span>, and modern backend technologies — from solo MVPs to complex multi-role platforms.
                    I have also delivered <span className="text-cyan-400 font-semibold">200+ PPC landing pages &amp; Google Ads sites</span>, helping businesses convert paid traffic into measurable results.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-yellow-300 text-sm font-medium whitespace-nowrap">200+ Sites Delivered</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8, zIndex: 10 }}
                className={`relative bg-gray-800/45 backdrop-blur-sm rounded-xl overflow-hidden border group transition-all duration-300 hover:shadow-xl ${
                  project.highlight
                    ? 'border-yellow-500/30 hover:border-yellow-500/50 hover:shadow-yellow-500/5'
                    : 'border-gray-700/40 hover:border-gray-600/60 hover:shadow-blue-500/5'
                }`}
              >
                {/* Featured ribbon — removed absolute variant */}
                {/* Project Header */}
                <div className={`p-6 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <project.icon size={32} className="text-white" />
                      {project.freelance && (
                        <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/30">
                          FREELANCE
                        </span>
                      )}
                      {project.fyp && (
                        <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/30">
                          FYP
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300"
                          title="View Source Code"
                        >
                          <Github size={20} className="text-white" />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300"
                          title="View Live Demo"
                        >
                          <ExternalLink size={20} className="text-white" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400 font-medium">{project.category}</span>
                    {project.highlight && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-500/15 border border-yellow-500/40 rounded-full">
                        <Star size={9} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-yellow-300 text-[9px] font-bold tracking-wide">FEATURED</span>
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-gray-700/40 border border-gray-600/30 text-gray-300 text-[11px] font-medium rounded-full hover:bg-gray-700/70 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.scrollTo && (
                      <button
                        onClick={() => document.getElementById(project.scrollTo!)?.scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-violet-500/50 text-violet-300 hover:bg-violet-500/20 transition-all duration-200 cursor-pointer"
                      >
                        <Zap size={13} />
                        View Full FYP
                      </button>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-all duration-200"
                      >
                        <Github size={13} />
                        See Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-blue-500/50 text-blue-300 hover:bg-blue-500/20 transition-all duration-200"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-gray-300 mb-6">
              Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
            </p>
            <motion.a
              href="https://github.com/OmerKhan24"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 btn-primary px-8 py-3 rounded-full font-semibold text-white"
            >
              <Github size={20} />
              <span>View All Projects</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
