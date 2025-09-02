'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed z-50 top-4 w-full md:w-auto left-0 md:left-[300px] flex justify-center md:justify-start"
    >
      {/* Floating Island Container */}
      <motion.nav
        className={`transition-all duration-500 ${
          scrolled 
            ? 'bg-black/20 backdrop-blur-sm border border-white/30' 
            : 'bg-white/5 backdrop-blur-sm border border-white/30'
        } rounded-full px-6 md:px-12 py-4 md:py-5 shadow-2xl min-w-fit md:min-w-[1000px] border-transparent`}
        whileHover={{ 
          boxShadow: "0 20px 40px rgba(255,255,255,0.1)",
          scale: 1.02
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between space-x-40 md:space-x-[700px]">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl md:text-3xl font-bold gradient-text flex-shrink-0"
          >
            Omer.
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-white/80 hover:text-white transition-all duration-300 relative group px-4 py-2 text-[16px] font-medium"
              >
                {item.label}
                <motion.span 
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-6 transition-all duration-300 rounded-full"
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white z-50 relative p-2 transition-all duration-300"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Floating Island */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          className="md:hidden absolute top-full transform  mt-4 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 pb-5 shadow-2xl w-64"
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5, scale: 1.05 }}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-white/80 hover:text-white transition-all duration-300 rounded-xl mb-2 last:mb-0 text-[16px] font-medium"
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
