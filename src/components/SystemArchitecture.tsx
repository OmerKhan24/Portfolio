import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Cloud, Cpu, Network, GitBranch, Shield, Monitor, Zap } from 'lucide-react';

const SystemArchitecture = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedSystem, setSelectedSystem] = useState(0);

  const architectures = [
    {
      name: "Real-Time Analytics Platform",
      description: "Scalable data processing architecture handling millions of events",
      components: [
        { name: "Load Balancer", icon: <Network className="w-5 h-5" />, pos: "top-4 left-1/2 transform -translate-x-1/2", color: "blue" },
        { name: "API Gateway", icon: <Shield className="w-5 h-5" />, pos: "top-16 left-1/4", color: "green" },
        { name: "Kafka Cluster", icon: <Zap className="w-5 h-5" />, pos: "top-16 right-1/4", color: "yellow" },
        { name: "Spark Streaming", icon: <Cpu className="w-5 h-5" />, pos: "top-32 left-1/3", color: "purple" },
        { name: "Data Lake", icon: <Database className="w-5 h-5" />, pos: "top-32 right-1/3", color: "orange" },
        { name: "Redis Cache", icon: <Database className="w-5 h-5" />, pos: "top-48 left-1/4", color: "red" },
        { name: "MySQL", icon: <Database className="w-5 h-5" />, pos: "top-48 right-1/4", color: "blue" },
        { name: "Monitoring", icon: <Monitor className="w-5 h-5" />, pos: "bottom-4 left-1/2 transform -translate-x-1/2", color: "cyan" }
      ],
      connections: [
        { from: 0, to: 1, style: "stroke-blue-400" },
        { from: 0, to: 2, style: "stroke-blue-400" },
        { from: 1, to: 3, style: "stroke-green-400" },
        { from: 2, to: 3, style: "stroke-yellow-400" },
        { from: 3, to: 4, style: "stroke-purple-400" },
        { from: 3, to: 5, style: "stroke-purple-400" },
        { from: 3, to: 6, style: "stroke-purple-400" }
      ],
      metrics: {
        throughput: "1M events/sec",
        latency: "< 100ms",
        availability: "99.95%",
        scaling: "Auto-scaling"
      }
    },
    {
      name: "ETL Data Pipeline",
      description: "Automated data transformation and loading system",
      components: [
        { name: "Data Sources", icon: <Cloud className="w-5 h-5" />, pos: "top-4 left-1/4", color: "blue" },
        { name: "Airflow", icon: <GitBranch className="w-5 h-5" />, pos: "top-16 left-1/2 transform -translate-x-1/2", color: "green" },
        { name: "Spark Jobs", icon: <Cpu className="w-5 h-5" />, pos: "top-32 left-1/3", color: "purple" },
        { name: "Data Validation", icon: <Shield className="w-5 h-5" />, pos: "top-32 right-1/3", color: "yellow" },
        { name: "Data Warehouse", icon: <Database className="w-5 h-5" />, pos: "top-48 left-1/2 transform -translate-x-1/2", color: "orange" },
        { name: "BI Tools", icon: <Monitor className="w-5 h-5" />, pos: "bottom-4 left-1/4", color: "cyan" },
        { name: "Alerts", icon: <Monitor className="w-5 h-5" />, pos: "bottom-4 right-1/4", color: "red" }
      ],
      connections: [
        { from: 0, to: 1, style: "stroke-blue-400" },
        { from: 1, to: 2, style: "stroke-green-400" },
        { from: 1, to: 3, style: "stroke-green-400" },
        { from: 2, to: 4, style: "stroke-purple-400" },
        { from: 3, to: 4, style: "stroke-yellow-400" },
        { from: 4, to: 5, style: "stroke-orange-400" },
        { from: 4, to: 6, style: "stroke-orange-400" }
      ],
      metrics: {
        throughput: "500GB/day",
        latency: "< 5min",
        availability: "99.9%",
        scaling: "Horizontal"
      }
    },
    {
      name: "Web Scraping System",
      description: "Distributed web scraping with intelligent data extraction",
      components: [
        { name: "Scheduler", icon: <GitBranch className="w-5 h-5" />, pos: "top-4 left-1/2 transform -translate-x-1/2", color: "blue" },
        { name: "Proxy Pool", icon: <Network className="w-5 h-5" />, pos: "top-16 left-1/4", color: "green" },
        { name: "Scrapy Cluster", icon: <Cpu className="w-5 h-5" />, pos: "top-16 right-1/4", color: "purple" },
        { name: "Data Cleaning", icon: <Shield className="w-5 h-5" />, pos: "top-32 left-1/3", color: "yellow" },
        { name: "Queue System", icon: <Database className="w-5 h-5" />, pos: "top-32 right-1/3", color: "orange" },
        { name: "Storage", icon: <Database className="w-5 h-5" />, pos: "top-48 left-1/2 transform -translate-x-1/2", color: "red" },
        { name: "API", icon: <Monitor className="w-5 h-5" />, pos: "bottom-4 left-1/2 transform -translate-x-1/2", color: "cyan" }
      ],
      connections: [
        { from: 0, to: 1, style: "stroke-blue-400" },
        { from: 0, to: 2, style: "stroke-blue-400" },
        { from: 2, to: 3, style: "stroke-purple-400" },
        { from: 2, to: 4, style: "stroke-purple-400" },
        { from: 3, to: 5, style: "stroke-yellow-400" },
        { from: 4, to: 5, style: "stroke-orange-400" },
        { from: 5, to: 6, style: "stroke-red-400" }
      ],
      metrics: {
        throughput: "10K pages/hour",
        latency: "< 2s/page",
        availability: "99.8%",
        scaling: "Multi-threaded"
      }
    }
  ];

  const getColorClass = (color: string) => {
    const colors = {
      blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      green: "bg-green-500/20 text-green-300 border-green-500/30",
      purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      yellow: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      orange: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      red: "bg-red-500/20 text-red-300 border-red-500/30",
      cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="system-architecture" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 relative"
        >
          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[6rem] lg:text-[10rem] font-black bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 bg-clip-text text-transparent select-none whitespace-nowrap">
              SYSTEMS
            </span>
          </div>
          
          {/* Main Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                System Architecture
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scalable system designs demonstrating distributed computing, microservices, and cloud-native architectures
            </p>
          </div>
        </motion.div>

        {/* Architecture Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {architectures.map((arch, index) => (
            <button
              key={index}
              onClick={() => setSelectedSystem(index)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedSystem === index
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {arch.name}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Architecture Diagram */}
          <div className="lg:col-span-2">
            <motion.div
              key={selectedSystem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-96 relative"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {architectures[selectedSystem].name}
              </h3>
              
              {/* Architecture Components */}
              <div className="relative h-full">
                {/* SVG for connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {architectures[selectedSystem].connections.map((conn, index) => {
                    return (
                      <motion.line
                        key={index}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        x1="25%"
                        y1="20%"
                        x2="75%"
                        y2="80%"
                        className={`${conn.style} stroke-2 opacity-60`}
                        strokeDasharray="5,5"
                      />
                    );
                  })}
                </svg>

                {/* Components */}
                {architectures[selectedSystem].components.map((component, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`absolute ${component.pos} transform -translate-x-1/2 -translate-y-1/2`}
                  >
                    <div className={`p-3 rounded-lg border ${getColorClass(component.color)} backdrop-blur-sm hover:scale-110 transition-transform cursor-pointer`}>
                      <div className="flex items-center space-x-2">
                        {component.icon}
                        <span className="text-xs font-medium whitespace-nowrap">{component.name}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* System Details */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold text-purple-400 mb-3">Description</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {architectures[selectedSystem].description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Performance Metrics</h4>
              <div className="space-y-3">
                {Object.entries(architectures[selectedSystem].metrics).map(([key, value], index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm capitalize">{key}:</span>
                    <span className="text-white font-medium text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold text-green-400 mb-3">Key Benefits</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                  High Availability & Fault Tolerance
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                  Horizontal Scaling
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                  Real-time Monitoring
                </li>
                <li className="flex items-center text-gray-300 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                  Cost Optimization
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;
