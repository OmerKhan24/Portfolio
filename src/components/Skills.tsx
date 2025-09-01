'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend & Web',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML/CSS', level: 'Proficient', icon: '🎨' },
        { name: 'JavaScript', level: 'Proficient', icon: '⚡' },
        { name: 'React', level: 'Working Knowledge', icon: '⚛️' },
        { name: 'Next.js', level: 'Working Knowledge', icon: '🚀' },
        { name: 'Tailwind CSS', level: 'Proficient', icon: '💨' },
        { name: 'Shopify', level: 'Working Knowledge', icon: '🛍️' },
      ],
    },
    {
      title: 'Backend & Systems',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'C++', level: 'Proficient', icon: '⚙️' },
        { name: 'Python', level: 'Proficient', icon: '🐍' },
        { name: 'Node.js', level: 'Working Knowledge', icon: '🟢' },
        { name: 'MySQL', level: 'Working Knowledge', icon: '🗄️' },
        { name: 'Flask/FastAPI', level: 'Working Knowledge', icon: '🌶️' },
        { name: 'Linux', level: 'Working Knowledge', icon: '🐧' },
      ],
    },
    {
      title: 'AI / Machine Learning',
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Neural Networks', level: 'Working Knowledge', icon: '🧠' },
        { name: 'CNNs', level: 'Working Knowledge', icon: '👁️' },
        { name: 'LSTMs', level: 'Exploring', icon: '🔄' },
        { name: 'NLP', level: 'Exploring', icon: '💬' },
        { name: 'TensorFlow/PyTorch', level: 'Working Knowledge', icon: '🔥' },
        { name: 'OpenCV', level: 'Working Knowledge', icon: '📸' },
      ],
    },
    {
      title: 'Data & BI',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Data Analytics', level: 'Proficient', icon: '📊' },
        { name: 'Power BI', level: 'Working Knowledge', icon: '📈' },
        { name: 'Pandas', level: 'Working Knowledge', icon: '🐼' },
        { name: 'Sentiment Analysis', level: 'Working Knowledge', icon: '😊' },
        { name: 'Dashboards', level: 'Working Knowledge', icon: '📋' },
        { name: 'Firebase', level: 'Working Knowledge', icon: '🔥' },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Proficient':
        return 'bg-green-500';
      case 'Working Knowledge':
        return 'bg-blue-500';
      case 'Exploring':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

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
    <section id="skills" className="py-20 px-6 bg-gray-900/30">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across different domains
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card-hover bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <div className={`h-1 w-20 bg-gradient-to-r ${category.color} rounded-full`}></div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Legend */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-gray-300">Proficient</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-gray-300">Working Knowledge</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-300">Exploring</span>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              Currently focusing on advanced machine learning techniques, cloud computing, and modern 
              web development frameworks to build more sophisticated and scalable applications.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
