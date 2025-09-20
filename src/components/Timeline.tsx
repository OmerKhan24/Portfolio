'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, Code2, Briefcase, GraduationCap, Star } from 'lucide-react';

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEvents = [
    {
      date: "2022",
      title: "Started Computer Science Journey",
      subtitle: "FAST University",
      description: "Began my Computer Science degree with a focus on AI and software development. Discovered my passion for coding and problem-solving.",
      icon: GraduationCap,
      type: "education",
      technologies: ["C++", "Python", "Data Structures"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      date: "2023",
      title: "Deep Dive into AI/ML",
      subtitle: "Machine Learning Projects",
      description: "Built emotion recognition systems and neural networks. Mastered CNN architectures and computer vision techniques.",
      icon: Code2,
      type: "project",
      technologies: ["Python", "OpenCV", "TensorFlow", "Neural Networks"],
      color: "from-purple-500 to-pink-500"
    },
    {
      date: "2024",
      title: "Full-Stack Development Mastery",
      subtitle: "Modern Web Technologies",
      description: "Expanded into full-stack development with React, Next.js, and backend technologies. Created multiple web applications.",
      icon: Code2,
      type: "skill",
      technologies: ["React", "Next.js", "Node.js", "JavaScript"],
      color: "from-green-500 to-teal-500"
    },
    {
      date: "2025",
      title: "Professional Experience at PayPro",
      subtitle: "FinTech Internship",
      description: "Gained real-world experience in a fast-paced FinTech environment. Worked with React, Next.js, and SQL while delivering high-quality solutions.",
      icon: Briefcase,
      type: "experience",
      technologies: ["React", "Next.js", "SQL", "Team Collaboration"],
      color: "from-orange-500 to-red-500"
    },
    {
      date: "Future",
      title: "Next Chapter",
      subtitle: "Career Growth",
      description: "Ready to take on new challenges and contribute to innovative projects that combine AI/ML with modern web development.",
      icon: Star,
      type: "future",
      technologies: ["AI/ML", "Full-Stack", "Innovation"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education': return '🎓';
      case 'project': return '🚀';
      case 'skill': return '💻';
      case 'experience': return '💼';
      case 'future': return '⭐';
      default: return '📍';
    }
  };

  return (
    <section id="timeline" className="py-20 px-6">
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
                JOURNEY
              </span>
            </div>
            
            {/* Main Content */}
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                My <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From computer science student to professional developer - a timeline of growth, learning, and achievement
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 opacity-30"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 
                                 hover:bg-gray-800/70 hover:border-purple-500/30 transition-all duration-300
                                 hover:shadow-2xl hover:shadow-purple-500/10"
                    >
                      {/* Header */}
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${event.color}`}>
                          <event.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-400">{event.date}</span>
                            <span className="text-lg">{getTypeIcon(event.type)}</span>
                          </div>
                          <h3 className="text-lg font-bold text-white">{event.title}</h3>
                          <p className="text-sm text-purple-400">{event.subtitle}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">{event.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {event.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700/50 text-cyan-400 rounded-full text-xs font-medium 
                                     border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${event.color} border-4 border-gray-900 shadow-lg`}
                    />
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
