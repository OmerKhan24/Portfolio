'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Github, ExternalLink, Code, Brain, Database, Globe } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'CryptoTraderCpp',
      description: 'A cryptocurrency trading simulation tool built with C++, showcasing the power and versatility of C++ in the world of finance.',
      category: 'System / C++ Tools',
      tags: ['C++', 'Finance', 'Simulation'],
      github: 'https://github.com/OmerKhan24/CryptoTraderCpp-',
      icon: Code,
      gradient: 'from-yellow-500 to-orange-500',
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
    },
    {
      title: 'Car Showroom Management System',
      description: 'A comprehensive web-based car showroom management system with vehicle listings, test drive scheduling, user inquiries, and financial management features.',
      category: 'Web Apps',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python Flask', 'MySQL'],
      github: 'https://github.com/OmerKhan24/car_showroom',
      icon: Globe,
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'Emotion Recognizer',
      description: 'CNN-based emotion detection system using facial images, leveraging deep learning for accurate emotion classification.',
      category: 'AI / ML Projects',
      tags: ['Python', 'CNN', 'OpenCV'],
      github: 'https://github.com/OmerKhan24/Emotion_Recognizer',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'MNIST Neural Network',
      description: 'Neural network implementation for classifying handwritten digits from the MNIST dataset, featuring training and testing capabilities.',
      category: 'AI / ML Projects',
      tags: ['Python', 'Neural Network', 'MNIST'],
      github: 'https://github.com/OmerKhan24/MNIST-Neural-Network',
      icon: Brain,
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Contact Management System',
      description: 'A comprehensive CLI-based contact management system built with C++, featuring full CRUD operations and data persistence.',
      category: 'System / C++ Tools',
      tags: ['C++', 'CLI', 'Data Management'],
      github: 'https://github.com/OmerKhan24/Contact-Management-System',
      icon: Database,
      gradient: 'from-red-500 to-pink-500',
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
    },
  ];

  const categories = ['All', 'Web Apps', 'AI / ML Projects', 'System / C++ Tools'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
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
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[8rem] lg:text-[12rem] font-black bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 bg-clip-text text-transparent select-none whitespace-nowrap">
                PROJECTS
              </span>
            </div>            {/* Main Content */}
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                My <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A showcase of my technical projects spanning AI/ML, web development, and system programming
              </p>
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
                whileHover={{ scale: 1.05, y: -10 }}
                className="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 group"
              >
                {/* Project Header */}
                <div className={`p-6 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <project.icon size={32} className="text-white" />
                    <div className="flex space-x-2">
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
                  <div className="mb-2">
                    <span className="text-sm text-gray-400 font-medium">{project.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 text-gray-400 hover:text-white font-medium transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>
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
