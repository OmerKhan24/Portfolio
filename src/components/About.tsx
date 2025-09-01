'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Brain, BarChart3 } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Computer Science Student',
      description: 'FAST University undergraduate with focus on AI and software development',
      color: 'text-blue-400',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Passionate about neural networks, NLP, and intelligent systems',
      color: 'text-purple-400',
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building end-to-end solutions with modern web technologies',
      color: 'text-cyan-400',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & BI',
      description: 'Transforming data into actionable insights with advanced analytics',
      color: 'text-green-400',
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I specialize in building AI-powered and data-driven applications—from neural networks 
              and ML tools to web interfaces and e-commerce systems. Currently pursuing my Computer 
              Science degree at FAST University, I'm passionate about exploring the intersection of 
              artificial intelligence, data analytics, and modern web development.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gray-700/50 ${highlight.color}`}>
                    <highlight.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              My <span className="gradient-text">Journey</span>
            </h3>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <motion.div
                  variants={itemVariants}
                  className="flex items-center relative"
                >
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-blue-400 mb-2">
                        Computer Science Undergraduate
                      </h4>
                      <p className="text-gray-300 mb-2">FAST University</p>
                      <p className="text-sm text-gray-400">2021 - Present</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                  <div className="flex-1 pl-8"></div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-center relative"
                >
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900"></div>
                  <div className="flex-1 pl-8">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-purple-400 mb-2">
                        AI & ML Projects
                      </h4>
                      <p className="text-gray-300 mb-2">Neural Networks, Computer Vision</p>
                      <p className="text-sm text-gray-400">2023 - Present</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-center relative"
                >
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                        Full-Stack Development
                      </h4>
                      <p className="text-gray-300 mb-2">Web Applications, E-commerce</p>
                      <p className="text-sm text-gray-400">2022 - Present</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900"></div>
                  <div className="flex-1 pl-8"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 rounded-full font-semibold text-white"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
