'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Star, Code, TrendingUp, Zap, Target } from 'lucide-react';

const GitHubStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // GitHub stats data (you can fetch this from GitHub API in a real implementation)
  const stats = {
    totalRepos: 12,
    totalCommits: 847,
    totalStars: 23,
    totalForks: 8,
    streakDays: 45,
    languagesUsed: 8,
    linesOfCode: 15420,
    contributionsThisYear: 324
  };

  const topLanguages = [
    { name: 'Python', percentage: 35, color: 'from-yellow-500 to-yellow-600' },
    { name: 'JavaScript', percentage: 28, color: 'from-yellow-400 to-yellow-500' },
    { name: 'TypeScript', percentage: 20, color: 'from-blue-500 to-blue-600' },
    { name: 'C++', percentage: 12, color: 'from-blue-600 to-purple-600' },
    { name: 'HTML/CSS', percentage: 5, color: 'from-orange-500 to-red-500' }
  ];

  const achievements = [
    {
      icon: Star,
      title: 'Rising Star',
      description: 'Gained 23+ stars across repositories',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'Code Contributor',
      description: '847+ commits and counting',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      title: 'Consistent Growth',
      description: '45-day coding streak',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Project Builder',
      description: '12+ repositories created',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="github-stats" className="py-20 px-6 bg-gray-900/30">
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
                STATISTICS
              </span>
            </div>
            
            {/* Main Content */}
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                GitHub <span className="gradient-text">Statistics</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A quantitative overview of my coding activity and contributions
              </p>
            </div>
          </motion.div>

          {/* Main Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center
                          hover:bg-gray-800/70 hover:border-purple-500/30 transition-all duration-300">
              <Github className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stats.totalRepos}</div>
              <div className="text-sm text-gray-400">Repositories</div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center
                          hover:bg-gray-800/70 hover:border-green-500/30 transition-all duration-300">
              <Zap className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stats.totalCommits}</div>
              <div className="text-sm text-gray-400">Total Commits</div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center
                          hover:bg-gray-800/70 hover:border-yellow-500/30 transition-all duration-300">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stats.totalStars}</div>
              <div className="text-sm text-gray-400">Stars Earned</div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center
                          hover:bg-gray-800/70 hover:border-blue-500/30 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stats.streakDays}</div>
              <div className="text-sm text-gray-400">Day Streak</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Top Languages */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Code className="w-5 h-5 text-cyan-400 mr-2" />
                  Top Languages
                </h3>
                <div className="space-y-4">
                  {topLanguages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{lang.name}</span>
                        <span className="text-gray-400 text-sm">{lang.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${lang.color}`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${lang.percentage}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* GitHub Achievements */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Target className="w-5 h-5 text-purple-400 mr-2" />
                  Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                        <achievement.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{achievement.title}</h4>
                        <p className="text-sm text-gray-400">{achievement.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* GitHub Profile Link */}
            <motion.div variants={itemVariants} className="text-center mt-16">
            <motion.a
              href="https://github.com/OmerKhan24"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 btn-primary px-8 py-3 rounded-full font-semibold text-white"
            >
              <Github size={20} />
              <span>View Github Profile</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
