import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Brain, 
  BarChart3,
  Monitor,
  Server,
  Cpu,
  TrendingUp
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      subtitle: 'Creating beautiful, responsive user interfaces',
      color: 'from-blue-500 to-cyan-500',
      icon: Monitor,
      bgGradient: 'from-blue-900/20 to-cyan-900/20',
      borderColor: 'hover:border-blue-400/50',
      iconBg: 'bg-blue-500/20 border-blue-400/30',
      iconColor: 'text-blue-400',
      skills: [
        { name: 'React.js', level: 'Proficient', icon: '⚛️', years: '2+' },
        { name: 'Next.js', level: 'Working Knowledge', icon: '▲', years: '1+' },
        { name: 'TypeScript', level: 'Working Knowledge', icon: '📘', years: '1+' },
        { name: 'Tailwind CSS', level: 'Proficient', icon: '🎨', years: '2+' },
        { name: 'HTML/CSS', level: 'Expert', icon: '🌐', years: '4+' },
        { name: 'JavaScript', level: 'Proficient', icon: '💛', years: '3+' },
        { name: 'Bootstrap', level: 'Proficient', icon: '🅱️', years: '2+' },
      ],
    },
    {
      title: 'Backend Development',
      subtitle: 'Building robust server-side applications',
      color: 'from-purple-500 to-pink-500',
      icon: Server,
      bgGradient: 'from-purple-900/20 to-pink-900/20',
      borderColor: 'hover:border-purple-400/50',
      iconBg: 'bg-purple-500/20 border-purple-400/30',
      iconColor: 'text-purple-400',
      skills: [
        { name: 'C++', level: 'Expert', icon: '⚙️', years: '4+' },
        { name: 'Python', level: 'Proficient', icon: '🐍', years: '3+' },
        { name: 'Node.js', level: 'Working Knowledge', icon: '🟢', years: '1+' },
        { name: 'MySQL', level: 'Proficient', icon: '🗄️', years: '2+' },
        { name: 'Flask/FastAPI', level: 'Working Knowledge', icon: '🌶️', years: '1+' },
        { name: 'RestAPI', level: 'Working Knowledge', icon: '🔗', years: '2+' },
        { name: 'Git/GitHub', level: 'Proficient', icon: '🔧', years: '2+' },
      ],
    },
    {
      title: 'AI & Machine Learning',
      subtitle: 'Intelligent systems and predictive analytics',
      color: 'from-green-500 to-teal-500',
      icon: Brain,
      bgGradient: 'from-green-900/20 to-teal-900/20',
      borderColor: 'hover:border-green-400/50',
      iconBg: 'bg-green-500/20 border-green-400/30',
      iconColor: 'text-green-400',
      skills: [
        { name: 'Neural Networks', level: 'Working Knowledge', icon: '🧠', years: '2+' },
        { name: 'CNNs', level: 'Working Knowledge', icon: '👁️', years: '1+' },
        { name: 'Computer Vision', level: 'Working Knowledge', icon: '👀', years: '1+' },
        { name: 'NLP', level: 'Exploring', icon: '💬', years: '1+' },
        { name: 'TensorFlow/PyTorch', level: 'Working Knowledge', icon: '🔥', years: '1+' },
        { name: 'Scikit-learn', level: 'Proficient', icon: '🔬', years: '2+' },
        { name: 'OpenCV', level: 'Working Knowledge', icon: '👁️‍🗨️', years: '1+' },
      ],
    },
    {
      title: 'Data Analytics & BI',
      subtitle: 'Transforming data into actionable business insights',
      color: 'from-orange-500 to-red-500',
      icon: BarChart3,
      bgGradient: 'from-orange-900/20 to-red-900/20',
      borderColor: 'hover:border-orange-400/50',
      iconBg: 'bg-orange-500/20 border-orange-400/30',
      iconColor: 'text-orange-400',
      skills: [
        { name: 'Pandas', level: 'Proficient', icon: '🐼', years: '2+' },
        { name: 'NumPy', level: 'Proficient', icon: '�', years: '2+' },
        { name: 'Matplotlib/Seaborn', level: 'Proficient', icon: '📊', years: '2+' },
        { name: 'Data Visualization', level: 'Proficient', icon: '📈', years: '2+' },
        { name: 'Power BI', level: 'Working Knowledge', icon: '💼', years: '1+' },
        { name: 'Shopify Analytics', level: 'Proficient', icon: '🛍️', years: '1+' },
        { name: 'Revenue & Marketing Analytics', level: 'Proficient', icon: '💰', years: '1+' },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black';
      case 'Proficient':
        return 'bg-gradient-to-r from-green-400 to-green-600 text-white';
      case 'Working Knowledge':
        return 'bg-gradient-to-r from-blue-400 to-blue-600 text-white';
      case 'Exploring':
        return 'bg-gradient-to-r from-purple-400 to-purple-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different domains of software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className={`relative group`}
            >
              <div className={`
                relative p-8 rounded-2xl border border-gray-700/50 ${category.borderColor}
                bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm
                transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
              `}>
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`
                    p-3 rounded-xl ${category.iconBg} border mr-4
                    transition-all duration-300 group-hover:scale-110
                  `}>
                    <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{category.subtitle}</p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/50">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <div>
                            <h4 className="font-semibold text-white group-hover/skill:text-gray-100">
                              {skill.name}
                            </h4>
                            <p className="text-sm text-gray-400">{skill.years} years</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`
                            px-3 py-1 rounded-full text-xs font-medium
                            ${getLevelColor(skill.level)}
                            transition-all duration-300 group-hover/skill:scale-105
                          `}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
                <div className="absolute bottom-8 left-6 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                4+
              </div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="group flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                25+
              </div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="group flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                10+
              </div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="group flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                4
              </div>
              <div className="text-gray-400 text-sm">Skill Categories</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;