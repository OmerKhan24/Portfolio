'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Brain, BarChart3, TrendingUp, Users, Zap, Award, Building, Briefcase } from 'lucide-react';

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
            <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
              I specialize in building AI-powered and data-driven applications. Currently pursuing Computer 
              Science at FAST University, I&apos;m passionate about AI, data analytics, and modern web development.
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

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Education</span>
            </h3>
            
            <div className="max-w-4xl mx-auto">
              <motion.div
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-gray-700/50"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-4 lg:mb-0">
                    <h4 className="text-2xl font-semibold text-blue-400 mb-2">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-xl text-gray-300 mb-2">FAST University, Karachi</p>
                    <p className="text-gray-400">Focus: Artificial Intelligence, Software Engineering, Data Analytics</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-semibold text-purple-400">2022 - 2026</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-4">
              <span className="gradient-text">Professional Experience</span>
            </h3>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Building real impact through technology and data-driven solutions
            </p>
            
            <div className="max-w-5xl mx-auto space-y-8">
              {/* E-Commerce Analytics Experience */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-400/30 group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                          E-Commerce Analytics & Shopify Store Manager
                        </h4>
                        <div className="flex items-center space-x-2 mb-3">
                          <Building className="text-gray-400" size={16} />
                          <p className="text-gray-300 font-medium">Enfanto Pakistan – Karachi, Pakistan</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Briefcase className="text-purple-400" size={16} />
                          <span className="text-purple-400 font-semibold">Part-Time Position</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:text-right">
                      <span className="text-lg font-bold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
                        Mar 2023 – Present
                      </span>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
                      <div className="flex items-center space-x-3 mb-2">
                        <Award className="text-yellow-400" size={20} />
                        <span className="text-yellow-400 font-semibold">Revenue Impact</span>
                      </div>
                      <p className="text-2xl font-bold text-white mb-1">PKR 900K+</p>
                      <p className="text-gray-400 text-sm">Monthly revenue scaled</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
                      <div className="flex items-center space-x-3 mb-2">
                        <BarChart3 className="text-green-400" size={20} />
                        <span className="text-green-400 font-semibold">Analytics Driven</span>
                      </div>
                      <p className="text-2xl font-bold text-white mb-1">Data-First</p>
                      <p className="text-gray-400 text-sm">Decision making approach</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Zap className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-300">Scaled brand to <span className="text-blue-400 font-semibold">PKR 900K+ monthly revenue</span> through trend analysis, product performance tracking, and conversion optimization</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-300">Leveraged <span className="text-blue-400 font-semibold">Shopify Analytics</span> to monitor traffic, identify top sellers, and make data-backed decisions on marketing, inventory, and UX improvements</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Software Engineering Intern Experience */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-400/30 group-hover:scale-110 transition-transform duration-300">
                        <Code className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                          Software Engineering Intern
                        </h4>
                        <div className="flex items-center space-x-2 mb-3">
                          <Building className="text-gray-400" size={16} />
                          <p className="text-gray-300 font-medium">PayPro Pvt Limited</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Briefcase className="text-pink-400" size={16} />
                          <span className="text-pink-400 font-semibold">Full-Time Internship</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:text-right">
                      <span className="text-lg font-bold text-pink-400 bg-pink-500/20 px-3 py-1 rounded-full">
                        Jun–Aug 2025
                      </span>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
                      <div className="flex items-center space-x-3 mb-2">
                        <Users className="text-cyan-400" size={20} />
                        <span className="text-cyan-400 font-semibold">Leadership</span>
                      </div>
                      <p className="text-2xl font-bold text-white mb-1">Full Stack</p>
                      <p className="text-gray-400 text-sm">Led complete redesign</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
                      <div className="flex items-center space-x-3 mb-2">
                        <BarChart3 className="text-green-400" size={20} />
                        <span className="text-green-400 font-semibold">Impact</span>
                      </div>
                      <p className="text-2xl font-bold text-white mb-1">C-Level</p>
                      <p className="text-gray-400 text-sm">Insights to COO</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Zap className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-300"><span className="text-purple-400 font-semibold">Led complete website revamp</span>, handling redesign and development through deployment stage</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-300">Developed and integrated <span className="text-purple-400 font-semibold">frontend UI and backend APIs</span> for multiple client websites</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-300">Implemented <span className="text-purple-400 font-semibold">PayPro APIs</span> across multiple client sites</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="text-purple-400 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-300">Analyzed and visualized sales data, providing <span className="text-purple-400 font-semibold">strategic insights to COO</span> for sales team optimization</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Projects Experience */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-gradient-to-r from-cyan-900/20 to-teal-900/20 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                        <Brain className="text-cyan-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                          Personal Projects & Development
                        </h4>
                        <div className="flex items-center space-x-2 mb-3">
                          <Building className="text-gray-400" size={16} />
                          <p className="text-gray-300 font-medium">AI/ML, Web Development, Software Engineering</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Briefcase className="text-teal-400" size={16} />
                          <span className="text-teal-400 font-semibold">Continuous Learning</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:text-right">
                      <span className="text-lg font-bold text-teal-400 bg-teal-500/20 px-3 py-1 rounded-full">
                        2022 - Present
                      </span>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
                      <div className="flex items-center space-x-3 mb-2">
                        <Brain className="text-blue-400" size={20} />
                        <span className="text-blue-400 font-semibold">AI/ML Focus</span>
                      </div>
                      <p className="text-2xl font-bold text-white mb-1">Neural Nets</p>
                      <p className="text-gray-400 text-sm">Computer vision & ML</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
                      <div className="flex items-center space-x-3 mb-2">
                        <Code className="text-green-400" size={20} />
                        <span className="text-green-400 font-semibold">Full Stack</span>
                      </div>
                      <p className="text-2xl font-bold text-white mb-1">Web Apps</p>
                      <p className="text-gray-400 text-sm">End-to-end solutions</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Zap className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-300">Developed <span className="text-cyan-400 font-semibold">CNN-based emotion recognition system</span> and MNIST neural network classifier</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-300">Built <span className="text-cyan-400 font-semibold">SleepSmart web app</span> for academic performance optimization</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-300">Created <span className="text-cyan-400 font-semibold">CryptoTraderCpp and Contact Management System</span> using C++</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                      <p className="text-gray-300">Designed various <span className="text-cyan-400 font-semibold">UI clones and interactive web interfaces</span></p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
