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
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed z-50 top-8 left-80 transform -translate-x-1/2 hidden md:block"
      >
      {/* 3D Layered Design with Better Positioning */}
      <div className="relative">
        {/* Background Layer - Purple Shadow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl transform rotate-1 scale-105"
          animate={{ 
            rotate: [1, -1, 1],
            scale: [1.05, 1.08, 1.05] 
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Main Navigation Layer */}
        <motion.nav
          className={`relative transition-all duration-700 ${
            scrolled 
              ? 'backdrop-blur-xl border border-white/20' 
              : 'backdrop-blur-xl border border-white/10'
          } rounded-full px-10 py-5 flex items-center justify-between`}
          style={{
            width: 'fit-content',
            minWidth: '1300px',
            background: 'rgba(0, 0, 0, 0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
          }}
          whileHover={{ 
            y: -3,
            boxShadow: '0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)'
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between w-full">
            {/* Premium Logo with Original Design */}
            <motion.div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-2xl md:text-3xl font-bold gradient-text flex-shrink-0"
              >
                Omer.
              </motion.div>
              
              {/* Elegant Status Indicator */}
              <motion.div 
                className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      '0 0 5px rgba(34, 197, 94, 0.5)',
                      '0 0 20px rgba(34, 197, 94, 0.8)',
                      '0 0 5px rgba(34, 197, 94, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-300 text-[10px] font-medium tracking-wide">Available</span>
              </motion.div>
            </motion.div>

            {/* Subtle Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group px-3 py-2 text-base font-medium transition-all duration-300"
                >
                  {/* Enhanced Text */}
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>
                  
                  {/* Smooth Underline Animation */}
                  <motion.span 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500 ease-out rounded-full"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.nav>
      </div>
    </motion.header>

    {/* Mobile Header */}
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="md:hidden fixed z-40 top-4 px-4 "
    >
      {/* 3D Layered Design with Better Positioning - Mobile Version */}
      <div className="relative">
        {/* Background Layer - Purple Shadow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl transform rotate-1 scale-105"
          animate={{ 
            rotate: [1, -1, 1],
            scale: [1.05, 1.08, 1.05] 
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Main Navigation Layer - Mobile */}
        <motion.nav
          className={`relative transition-all duration-700 ${
            scrolled 
              ? 'backdrop-blur-xl border border-white/20' 
              : 'backdrop-blur-xl border border-white/10'
          } rounded-full px-6 py-3 flex items-center justify-between`}
          style={{
            width: 'fit-content',
            minWidth: '350px',
            background: 'rgba(0, 0, 0, 0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
          }}
          whileHover={{ 
            y: -3,
            boxShadow: '0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)'
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between w-full">
            {/* Mobile Logo */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-xl font-bold gradient-text flex-shrink-0"
            >
              Omer.
            </motion.div>
            
            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white z-50 p-2 rounded-lg hover:bg-white/10 transition-colors"
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
      </div>

      {/* Premium Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          className="absolute top-20 left-3 right-3 z-40"
        >
          {/* 3D Layered Design for Mobile Menu */}
          <div className="relative">
            {/* Background Layer - Purple Shadow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl transform rotate-1 scale-105"
              animate={{ 
                rotate: [1, -1, 1],
                scale: [1.05, 1.08, 1.05] 
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Main Menu Layer */}
            <motion.div
              className="relative backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
              style={{
                background: 'rgba(0, 0, 0, 0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
              whileHover={{ 
                boxShadow: '0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)'
              }}
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    x: 5, 
                    scale: 1.02,
                    y: -1
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                  className="relative group block py-3 px-4 text-base font-medium transition-all duration-300 rounded-xl mb-2 last:mb-0"
                >
                  {/* Enhanced Text */}
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>
                  
                  {/* Smooth Underline Animation */}
                  <motion.span 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500 ease-out rounded-full"
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
    </>
  );
};

export default Header;
