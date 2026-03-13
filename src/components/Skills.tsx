import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showAllSkills, setShowAllSkills] = useState(false);

  // Top skills to show initially (most important ones from CV)
  const topSkills = [
    { name: 'Python', icon: '🐍', level: 'Expert', category: 'Languages' },
    { name: 'C/C++', icon: '⚙️', level: 'Expert', category: 'Languages' },
    { name: 'JavaScript', icon: '📜', level: 'Proficient', category: 'Languages' },
    { name: 'React', icon: '⚛️', level: 'Proficient', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', level: 'Proficient', category: 'Frontend' },
    { name: 'Flask', icon: '🌶️', level: 'Proficient', category: 'Backend' },
    { name: 'MySQL', icon: '🗄️', level: 'Proficient', category: 'Data & Tools' },
    { name: 'TensorFlow', icon: '🧠', level: 'Proficient', category: 'AI/ML' },
  ];

  const additionalSkills = [
    { name: 'HTML5', icon: '🌐', level: 'Expert', category: 'Languages' },
    { name: 'CSS3', icon: '🎨', level: 'Expert', category: 'Languages' },
    { name: 'FastAPI', icon: '⚡', level: 'Proficient', category: 'Backend' },
    { name: 'Node.js', icon: '🟢', level: 'Proficient', category: 'Backend' },
    { name: 'NumPy', icon: '🔢', level: 'Proficient', category: 'AI/ML' },
    { name: 'Pandas', icon: '🐼', level: 'Proficient', category: 'AI/ML' },
    { name: 'Scikit-learn', icon: '🤖', level: 'Proficient', category: 'AI/ML' },
    { name: 'Seaborn', icon: '📊', level: 'Proficient', category: 'AI/ML' },
    { name: 'Power BI', icon: '💼', level: 'Proficient', category: 'Data & Tools' },
    { name: 'Git', icon: '📚', level: 'Proficient', category: 'Data & Tools' },
    { name: 'Jupyter Notebook', icon: '📓', level: 'Proficient', category: 'Data & Tools' },
    { name: 'Shopify', icon: '🛒', level: 'Proficient', category: 'Data & Tools' },
    { name: 'Meta Ads Manager', icon: '📱', level: 'Proficient', category: 'Data & Tools' },
    { name: 'REST APIs', icon: '🔗', level: 'Proficient', category: 'Other' },
    { name: 'Web Scraping', icon: '🕷️', level: 'Proficient', category: 'Other' },
    { name: 'Data Visualization', icon: '📈', level: 'Proficient', category: 'Other' },
    { name: 'SQL', icon: '💾', level: 'Proficient', category: 'Other' },
    { name: 'ETL Pipelines', icon: '🔄', level: 'Proficient', category: 'Other' },
  ];

  const skillsToShow = showAllSkills ? [...topSkills, ...additionalSkills] : topSkills;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black';
      case 'Proficient':
        return 'bg-gradient-to-r from-green-400 to-green-600 text-white';
      case 'Working Knowledge':
        return 'bg-gradient-to-r from-blue-400 to-blue-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Languages':
        return 'text-cyan-400 border-cyan-400/30';
      case 'Frontend':
        return 'text-blue-400 border-blue-400/30';
      case 'Backend':
        return 'text-purple-400 border-purple-400/30';
      case 'AI/ML':
        return 'text-green-400 border-green-400/30';
      case 'Data & Tools':
        return 'text-orange-400 border-orange-400/30';
      case 'Other':
        return 'text-pink-400 border-pink-400/30';
      default:
        return 'text-gray-400 border-gray-400/30';
    }
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
      <div className="absolute top-10 left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 relative"
        >
          {/* Background Text */}
          <div className="absolute inset-0 flex items-start justify-center pointer-events-none overflow-hidden">
            <span className="text-[5.5rem] lg:text-[7rem] font-black bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 bg-clip-text text-transparent select-none whitespace-nowrap">
              SKILLS
            </span>
          </div>
          
          {/* Main Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent section-title-accent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My expertise across programming languages, frameworks, AI/ML, and data tools
            </p>
          </div>
        </motion.div>

        {/* Skills Grid - Compact Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8"
        >
          {skillsToShow.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-xl p-4 
                            hover:bg-gray-800/60 hover:border-gray-600/50 transition-all duration-300 
                            hover:-translate-y-1 hover:shadow-lg group">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-xl">{skill.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm truncate">{skill.name}</h3>
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${getCategoryColor(skill.category)}`}>
                      {skill.category}
                    </span>
                  </div>
                </div>
                <div className="flex justify-start">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More/Less Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-8"
        >
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="flex items-center space-x-2 mx-auto px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                     hover:from-purple-500/30 hover:to-blue-500/30 border border-purple-500/30 
                     hover:border-purple-500/50 text-purple-400 hover:text-purple-300 rounded-full 
                     transition-all duration-300"
          >
            <span>{showAllSkills ? 'Show Less' : `Show All Skills (+${additionalSkills.length})`}</span>
            {showAllSkills ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          {[
            { value: '4+', label: 'Years Experience', color: 'text-blue-400', border: 'border-blue-400/20' },
            { value: String(topSkills.length + additionalSkills.length), label: 'Technologies', color: 'text-purple-400', border: 'border-purple-400/20' },
            { value: '10+', label: 'Projects', color: 'text-green-400', border: 'border-green-400/20' },
            { value: '6', label: 'Categories', color: 'text-orange-400', border: 'border-orange-400/20' },
          ].map((stat) => (
            <div key={stat.label} className={`bg-gray-800/30 rounded-xl p-5 border ${stat.border} hover:bg-gray-800/50 transition-all duration-300`}>
              <div className={`text-3xl font-bold mb-1.5 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;