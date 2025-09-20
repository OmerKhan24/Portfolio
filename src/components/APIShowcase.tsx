import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Zap, Globe, Lock, BarChart3, Copy, Check } from 'lucide-react';

const APIShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeAPI, setActiveAPI] = useState(0);
  const [copiedEndpoint, setCopiedEndpoint] = useState('');

  const apis = [
    {
      name: "Data Analytics API",
      description: "RESTful API for real-time data analytics and insights",
      baseUrl: "https://api.omerkhan.dev/analytics",
      tech: ["FastAPI", "Python", "MySQL", "Redis", "JWT"],
      endpoints: [
        { method: "GET", path: "/metrics", desc: "Retrieve system metrics", auth: true },
        { method: "POST", path: "/query", desc: "Execute custom data queries", auth: true },
        { method: "GET", path: "/reports/{id}", desc: "Get specific report data", auth: true },
        { method: "POST", path: "/visualize", desc: "Generate data visualizations", auth: true }
      ],
      features: ["Rate limiting", "Caching", "Authentication", "Documentation"],
      performance: { rps: "1000+", latency: "< 100ms", uptime: "99.95%" }
    },
    {
      name: "Web Scraping API",
      description: "Scalable web scraping service with intelligent data extraction",
      baseUrl: "https://api.omerkhan.dev/scraper",
      tech: ["Flask", "Python", "Scrapy", "PostgreSQL", "Celery"],
      endpoints: [
        { method: "POST", path: "/scrape", desc: "Start new scraping job", auth: true },
        { method: "GET", path: "/jobs/{id}", desc: "Check job status", auth: true },
        { method: "GET", path: "/data/{id}", desc: "Retrieve scraped data", auth: true },
        { method: "DELETE", path: "/jobs/{id}", desc: "Cancel scraping job", auth: true }
      ],
      features: ["Async processing", "Proxy rotation", "Data validation", "Export formats"],
      performance: { rps: "500+", latency: "< 200ms", uptime: "99.9%" }
    },
    {
      name: "ETL Pipeline API",
      description: "Automated data pipeline management and orchestration",
      baseUrl: "https://api.omerkhan.dev/etl",
      tech: ["FastAPI", "Python", "Airflow", "Pandas", "S3"],
      endpoints: [
        { method: "POST", path: "/pipelines", desc: "Create new ETL pipeline", auth: true },
        { method: "GET", path: "/pipelines/{id}/status", desc: "Monitor pipeline status", auth: true },
        { method: "POST", path: "/pipelines/{id}/trigger", desc: "Manually trigger pipeline", auth: true },
        { method: "GET", path: "/logs/{pipeline_id}", desc: "Retrieve execution logs", auth: true }
      ],
      features: ["Scheduling", "Error handling", "Data lineage", "Monitoring"],
      performance: { rps: "800+", latency: "< 150ms", uptime: "99.8%" }
    }
  ];

  const copyToClipboard = async (text: string, endpoint: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedEndpoint(endpoint);
      setTimeout(() => setCopiedEndpoint(''), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section id="api-showcase" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900/20 to-blue-900/20" />
      <div className="absolute top-10 left-10 w-48 h-48 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      
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
            <span className="text-[8rem] lg:text-[12rem] font-black bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 bg-clip-text text-transparent select-none whitespace-nowrap">
              APIS
            </span>
          </div>
          
          {/* Main Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                API Development
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Production-ready APIs built with Flask & FastAPI, featuring authentication, caching, and comprehensive documentation
            </p>
          </div>
        </motion.div>

        {/* API Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {apis.map((api, index) => (
            <button
              key={index}
              onClick={() => setActiveAPI(index)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeAPI === index
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {api.name}
            </button>
          ))}
        </motion.div>

        {/* API Details */}
        <motion.div
          key={activeAPI}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
        >
          {/* API Info */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Globe className="w-6 h-6 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">{apis[activeAPI].name}</h3>
            </div>
            
            <p className="text-gray-300 mb-6">{apis[activeAPI].description}</p>
            
            {/* Base URL */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-green-400 mb-2">BASE URL</h4>
              <div className="flex items-center bg-gray-900/50 rounded-lg p-3">
                <code className="text-green-300 text-sm flex-1">{apis[activeAPI].baseUrl}</code>
                <button
                  onClick={() => copyToClipboard(apis[activeAPI].baseUrl, 'base')}
                  className="ml-2 p-2 hover:bg-gray-700/50 rounded transition-colors"
                >
                  {copiedEndpoint === 'base' ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-blue-400 mb-3">TECHNOLOGY STACK</h4>
              <div className="flex flex-wrap gap-2">
                {apis[activeAPI].tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-3">KEY FEATURES</h4>
              <div className="grid grid-cols-2 gap-2">
                {apis[activeAPI].features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Endpoints */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-orange-400 mb-4">API ENDPOINTS</h4>
            <div className="space-y-3">
              {apis[activeAPI].endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border border-gray-600/30 rounded-lg p-4 hover:border-gray-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className={`px-2 py-1 rounded text-xs font-mono ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-300' :
                        endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="ml-3 text-gray-300 text-sm">{endpoint.path}</code>
                    </div>
                    {endpoint.auth && <Lock className="w-4 h-4 text-yellow-400" />}
                  </div>
                  <p className="text-gray-400 text-sm">{endpoint.desc}</p>
                  <button
                    onClick={() => copyToClipboard(`${apis[activeAPI].baseUrl}${endpoint.path}`, endpoint.path)}
                    className="mt-2 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {copiedEndpoint === endpoint.path ? 'Copied!' : 'Copy full URL'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          <div className="bg-gray-800/30 rounded-lg p-6">
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-yellow-400 mb-1">
              {apis[activeAPI].performance.rps}
            </div>
            <div className="text-gray-400 text-sm">Requests/Second</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-6">
            <BarChart3 className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-green-400 mb-1">
              {apis[activeAPI].performance.latency}
            </div>
            <div className="text-gray-400 text-sm">Average Latency</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-6">
            <Cloud className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-blue-400 mb-1">
              {apis[activeAPI].performance.uptime}
            </div>
            <div className="text-gray-400 text-sm">Uptime</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default APIShowcase;
