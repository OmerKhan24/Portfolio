'use client';

import { motion } from 'framer-motion';

export default function AnimatedGamingSetup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* Gaming Setup Container - Properly positioned */}
      <div className="relative w-80 h-64 flex items-center justify-center">
        
        {/* Desk Surface - Main base */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-20 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-2xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* RGB Strip under desk */}
          <motion.div
            className="absolute bottom-0 left-4 right-4 h-1.5 rounded-full"
            animate={{
              background: [
                "linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4)",
                "linear-gradient(90deg, #ec4899, #06b6d4, #10b981)",
                "linear-gradient(90deg, #06b6d4, #10b981, #f59e0b)",
                "linear-gradient(90deg, #10b981, #f59e0b, #8b5cf6)",
                "linear-gradient(90deg, #f59e0b, #8b5cf6, #ec4899)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Monitor - Centered on desk */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-black rounded border-2 border-gray-600 shadow-2xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Screen */}
          <motion.div
            className="absolute inset-1 rounded"
            animate={{
              background: [
                "linear-gradient(45deg, #1e1b4b, #312e81, #1e40af)",
                "linear-gradient(45deg, #312e81, #1e40af, #7c3aed)",
                "linear-gradient(45deg, #1e40af, #7c3aed, #db2777)",
                "linear-gradient(45deg, #7c3aed, #db2777, #1e1b4b)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Code lines simulation */}
            <div className="p-3 text-sm text-green-400 font-mono leading-tight">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                &gt; npm run dev
              </motion.div>
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="text-blue-400"
              >
                localhost:3000
              </motion.div>
              <motion.div
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="text-purple-400"
              >
                ✓ Ready
              </motion.div>
            </div>
          </motion.div>
          
          {/* Monitor Stand */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-gray-700 rounded"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-800 rounded"></div>
        </motion.div>

        {/* PC Tower - Right side */}
        <motion.div
          className="absolute bottom-12 right-4 w-16 h-32 bg-gradient-to-b from-gray-900 to-black rounded border border-gray-600 shadow-2xl"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {/* RGB Fan */}
          <motion.div
            className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 border border-gray-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="absolute inset-1 rounded-full"
              animate={{
                background: [
                  "radial-gradient(circle, #8b5cf6, transparent)",
                  "radial-gradient(circle, #ec4899, transparent)",
                  "radial-gradient(circle, #06b6d4, transparent)",
                  "radial-gradient(circle, #8b5cf6, transparent)"
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {/* Fan blades */}
            <div className="absolute inset-2">
              <div className="absolute w-full h-0.5 bg-gray-400 top-1/2 transform -translate-y-1/2"></div>
              <div className="absolute h-full w-0.5 bg-gray-400 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </motion.div>

          {/* Power LED */}
          <motion.div
            className="absolute top-16 left-2 w-3 h-3 rounded-full"
            animate={{
              backgroundColor: ["#10b981", "#06b6d4", "#8b5cf6", "#10b981"],
              boxShadow: [
                "0 0 8px #10b981",
                "0 0 8px #06b6d4", 
                "0 0 8px #8b5cf6",
                "0 0 8px #10b981"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* GPU */}
          <motion.div
            className="absolute bottom-6 left-1 right-1 h-5 bg-gradient-to-r from-red-600 to-red-800 rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-x-0 top-0 h-0.5 rounded-full"
              animate={{
                background: [
                  "linear-gradient(90deg, #ef4444, #f97316)",
                  "linear-gradient(90deg, #f97316, #eab308)",
                  "linear-gradient(90deg, #eab308, #ef4444)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Keyboard - Front of desk */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-12 bg-gray-800 rounded border border-gray-600 shadow-xl"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {/* RGB Backlight */}
          <motion.div
            className="absolute inset-0 rounded opacity-30"
            animate={{
              backgroundColor: ["#8b5cf6", "#ec4899", "#06b6d4", "#8b5cf6"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Keys */}
          <div className="absolute inset-1 grid grid-cols-10 gap-0.5">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-gray-700 rounded-sm h-2"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.05
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Mouse - Right of keyboard */}
        <motion.div
          className="absolute bottom-4 right-16 w-8 h-12 bg-gray-800 rounded-lg border border-gray-600 shadow-xl"
          initial={{ x: 15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <motion.div
            className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-4 rounded"
            animate={{
              backgroundColor: ["#8b5cf6", "#ec4899", "#06b6d4", "#8b5cf6"],
              boxShadow: [
                "0 0 5px #8b5cf6",
                "0 0 5px #ec4899",
                "0 0 5px #06b6d4",
                "0 0 5px #8b5cf6"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Ambient Lighting Effects */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          animate={{
            background: [
              "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
              "radial-gradient(ellipse at center, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
              "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.1) 0%, transparent 70%)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-50"
            style={{
              left: `${25 + (i * 10)}%`,
              top: `${35 + (i * 6)}%`,
            }}
            animate={{
              y: [-8, 8, -8],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + (i * 0.3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
