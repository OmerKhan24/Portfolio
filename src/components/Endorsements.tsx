'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star, Linkedin } from 'lucide-react';

const Endorsements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Real LinkedIn endorsements
  const endorsements = [
    {
      name: "Muhammad Talha Siddiqui",
      position: "Full Stack Developer",
      company: "PayPro | Proficient in React.js, Redux, Next.js, Node.js and Laravel",
      text: "I had the pleasure of supervising Omer during his internship at PayPro. He quickly adapted to our workflow, demonstrated a strong grasp of React, Next, and SQL problem-solving, and consistently delivered high-quality work on time. His enthusiasm, attention to detail, and willingness to learn made him a valuable part of the team. I'm confident he will excel in any role he pursues, and I highly recommend him for future opportunities.",
      linkedinUrl: "https://www.linkedin.com/in/muhammd-talha-siddiqui-01950a194",
      rating: 5,
      date: "August 15, 2025"
    },
    {
      name: "Ebad Lodhi",
      position: "FinTech Enthusiast | Android Application Development Manager",
      company: "PayPro | Driving Digital Innovation in Financial Services",
      text: "As Omer's Team Lead at PayPro, I saw his fast learning, strong work ethic, and proactive attitude firsthand. He reliably delivered quality work and was a great team player. Omer has a bright future ahead and will be an asset to any team.",
      linkedinUrl: "https://www.linkedin.com/in/ebad-lodhi-b78841232",
      rating: 5,
      date: "August 12, 2025"
    },
  ];

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

  return (
    <section id="endorsements" className="py-20 px-6 bg-gray-900/30">
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
                TESTIMONIALS
              </span>
            </div>
            
            {/* Main Content */}
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Professional <span className="gradient-text">Endorsements</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                What colleagues and collaborators say about working with me
              </p>
            </div>
          </motion.div>

          {/* Endorsements Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {endorsements.map((endorsement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full 
                               hover:bg-gray-800/70 hover:border-purple-500/30 transition-all duration-300
                               hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
                  
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-purple-400/60" />
                    
                    {/* Rating Stars */}
                    <div className="flex space-x-1">
                      {[...Array(endorsement.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Endorsement Text */}
                  <blockquote className="text-gray-300 mb-6 leading-relaxed">
                    &ldquo;{endorsement.text}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{endorsement.name}</h4>
                      <p className="text-sm text-gray-400 mb-1">{endorsement.position}</p>
                      <p className="text-sm text-purple-400 mb-2">{endorsement.company}</p>
                      {endorsement.date && (
                        <p className="text-xs text-gray-500">{endorsement.date}</p>
                      )}
                    </div>
                    
                    {/* LinkedIn Link */}
                    <a
                      href={endorsement.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors ml-4"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Hover Gradient Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* LinkedIn CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://www.linkedin.com/in/omer-khan24/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 
                         hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 
                         rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 
                         hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5" />
              <span>View More on LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Endorsements;
