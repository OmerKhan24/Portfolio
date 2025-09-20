import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Cloud, Zap, Code, GitBranch, Monitor } from 'lucide-react';

const DataPipelines = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedPipeline, setSelectedPipeline] = useState(0);

  const pipelines = [
    {
      title: "Real-Time E-commerce Analytics",
      description: "Streaming data pipeline processing customer behavior in real-time",
      tech: ["Python", "Apache Kafka", "Spark", "MySQL", "Redis"],
      components: [
        { name: "Data Ingestion", icon: <Database className="w-5 h-5" />, desc: "Kafka streams from web events" },
        { name: "Processing", icon: <Zap className="w-5 h-5" />, desc: "Spark streaming analytics" },
        { name: "Storage", icon: <Cloud className="w-5 h-5" />, desc: "MySQL & Redis caching" },
        { name: "Monitoring", icon: <Monitor className="w-5 h-5" />, desc: "Real-time dashboards" }
      ],
      features: ["Sub-second latency", "99.9% uptime", "Auto-scaling", "Data quality checks"]
    },
    {
      title: "Multi-Source ETL Platform",
      description: "Automated data integration from APIs, databases, and files",
      tech: ["Python", "FastAPI", "Pandas", "SQLAlchemy", "Airflow"],
      components: [
        { name: "API Gateway", icon: <Code className="w-5 h-5" />, desc: "FastAPI endpoints" },
        { name: "Orchestration", icon: <GitBranch className="w-5 h-5" />, desc: "Airflow scheduling" },
        { name: "Transformation", icon: <Database className="w-5 h-5" />, desc: "Pandas processing" },
        { name: "Quality Checks", icon: <Monitor className="w-5 h-5" />, desc: "Automated validation" }
      ],
      features: ["Multi-format support", "Error recovery", "Data lineage", "Incremental loading"]
    },
    {
      title: "Web Scraping & Analytics Engine",
      description: "Scalable web scraping with intelligent data extraction",
      tech: ["Python", "Scrapy", "BeautifulSoup", "Selenium", "Power BI"],
      components: [
        { name: "Scraping Engine", icon: <Zap className="w-5 h-5" />, desc: "Multi-threaded extraction" },
        { name: "Data Cleaning", icon: <Database className="w-5 h-5" />, desc: "Automated preprocessing" },
        { name: "Storage", icon: <Cloud className="w-5 h-5" />, desc: "Structured data warehouse" },
        { name: "Analytics", icon: <Monitor className="w-5 h-5" />, desc: "Power BI dashboards" }
      ],
      features: ["Rate limiting", "Proxy rotation", "CAPTCHA handling", "Data deduplication"]
    }
  ];

  return (
    <section id="data-pipelines" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
      
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
            <span className="text-[8rem] lg:text-[12rem] font-black bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 bg-clip-text text-transparent select-none whitespace-nowrap">
              PIPELINES
            </span>
          </div>
          
          {/* Main Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Data Engineering Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world data pipelines showcasing ETL processes, streaming analytics, and scalable architectures
            </p>
          </div>
        </motion.div>

        {/* Pipeline Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {pipelines.map((pipeline, index) => (
            <button
              key={index}
              onClick={() => setSelectedPipeline(index)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedPipeline === index
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {pipeline.title}
            </button>
          ))}
        </motion.div>

        {/* Selected Pipeline Details */}
        <motion.div
          key={selectedPipeline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pipeline Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {pipelines[selectedPipeline].title}
              </h3>
              <p className="text-gray-300 mb-6">
                {pipelines[selectedPipeline].description}
              </p>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {pipelines[selectedPipeline].tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {pipelines[selectedPipeline].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pipeline Architecture */}
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-4">Architecture Components</h4>
              <div className="space-y-4">
                {pipelines[selectedPipeline].components.map((component, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center p-4 bg-gray-700/30 rounded-lg border border-gray-600/30"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-500/20 rounded-lg mr-4">
                      {component.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">{component.name}</h5>
                      <p className="text-sm text-gray-400">{component.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="bg-gray-800/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">1M+</div>
            <div className="text-gray-400 text-sm">Records/Day</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-400 text-sm">Uptime</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">&lt;2s</div>
            <div className="text-gray-400 text-sm">Latency</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">50TB</div>
            <div className="text-gray-400 text-sm">Data Processed</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataPipelines;
