import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Eye, Calendar, MapPin, Mail, Phone, Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Award },
  ];

  const experience = [
    {
      title: 'Software Engineering Intern',
      company: 'PayPro Pvt Limited',
      period: 'Jun - Aug 2025',
      location: 'Karachi, Pakistan',
      highlights: [
        'Led complete website redesign and development through deployment stage',
        'Developed and integrated frontend UI and backend APIs for multiple client websites',
        'Delivered high-impact insights and recommendations directly to COO'
      ]
    },
    {
      title: 'E-Commerce Analytics & Shopify Store Manager',
      company: 'Enfanto Pakistan',
      period: 'Mar 2023 - Present',
      location: 'Karachi, Pakistan',
      highlights: [
        'Scaled brand to PKR 900K+ monthly revenue through trend analysis and conversion optimization',
        'Leveraged Shopify Analytics to monitor traffic and make data-backed decisions',
        'Optimized marketing strategies, inventory management, and UX improvements'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'FAST-NUCES, Karachi',
      period: '2022 - Present',
      location: 'Karachi, Pakistan',
      gpa: '',
      highlights: [
        'Focus: Artificial Intelligence, Software Engineering, Data Analytics',
        'Relevant Coursework: Data Structures, Algorithms, Machine Learning, Database Systems',
        'Active in programming competitions and tech community events'
      ]
    }
  ];

  return (
    <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20" />
      <div className="absolute top-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 relative"
        >
          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[8rem] lg:text-[12rem] font-black bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 bg-clip-text text-transparent select-none whitespace-nowrap">
              RESUME
            </span>
          </div>
          
          {/* Main Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Resume</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A comprehensive overview of my education, experience, and achievements
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/Muhammad-Omer-Khan-CV.docx"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                         hover:from-blue-600 hover:to-purple-600 rounded-full text-white font-medium 
                         transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                <span>Download CV (DOCX)</span>
              </motion.a>
              
              <motion.a
                href="/Muhammad-Omer-Khan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                         hover:from-purple-500/30 hover:to-blue-500/30 border border-purple-500/30 
                         hover:border-purple-500/50 text-purple-400 hover:text-purple-300 rounded-full 
                         transition-all duration-300"
              >
                <Eye className="w-5 h-5" />
                <span>View PDF</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6"
          >
            {activeTab === 'experience' && (
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 
                             hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                      </div>
                      <div className="text-sm text-gray-400">
                        <div className="flex items-center space-x-1 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start space-x-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 
                             hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                        {edu.gpa && (
                          <p className="text-green-400 font-medium">GPA: {edu.gpa}</p>
                        )}
                      </div>
                      <div className="text-sm text-gray-400">
                        <div className="flex items-center space-x-1 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start space-x-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="text-center py-8">
                <p className="text-gray-400 text-lg">
                  Skills section is available in the dedicated Skills component above!
                </p>
                <motion.button
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                           hover:from-blue-600 hover:to-purple-600 rounded-full text-white font-medium 
                           transition-all duration-300"
                >
                  View Skills Section
                </motion.button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Resume;
