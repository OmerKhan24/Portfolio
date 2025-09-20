'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Play, Code, Terminal, Zap, Copy, Check, Calculator, Hash, FileText } from 'lucide-react';

const CodePlayground = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeDemo, setActiveDemo] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');
  const [showFullCode, setShowFullCode] = useState(false);
  
  // Interactive demo states
  const [counterValue, setCounterValue] = useState(0);
  const [calcInput, setCalcInput] = useState('');
  const [calcResult, setCalcResult] = useState('');
  const [textAnalysis, setTextAnalysis] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');

  const demos = [
    {
      title: 'Interactive Counter',
      language: 'React',
      description: 'Live counter with custom hooks',
      icon: Hash,
      preview: `// Interactive Counter Component
import { useState, useEffect } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);
  
  // ... more functionality
}`,
      code: `// Interactive Counter Component
import { useState, useEffect } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);
  
  useEffect(() => {
    console.log(\`Count updated: \${count}\`);
  }, [count]);
  
  return { count, increment, decrement, reset };
}

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    <div className="counter-demo">
      <h3>Count: {count}</h3>
      <div className="controls">
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}`,
      component: () => (
        <div className="bg-gray-800/30 rounded-lg p-4">
          <h3 className="text-xl font-bold text-white mb-4">Live Counter Demo</h3>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-4">{counterValue}</div>
            <div className="flex justify-center space-x-3">
              <button
                onClick={() => setCounterValue(prev => prev + 1)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
              >
                +1
              </button>
              <button
                onClick={() => setCounterValue(prev => prev - 1)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
              >
                -1
              </button>
              <button
                onClick={() => setCounterValue(0)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Smart Calculator',
      language: 'JavaScript',
      description: 'Advanced calculator with error handling',
      icon: Calculator,
      preview: `// Smart Calculator with Error Handling
class SmartCalculator {
  constructor() {
    this.history = [];
    this.memory = 0;
  }
  
  calculate(expression) {
    try {
      const sanitized = expression.replace(/[^0-9+\-*/.() ]/g, '');
      const result = Function(\`"use strict"; return (\${sanitized})\`)();
      
      // ... more functionality
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}`,
      code: `// Smart Calculator with Error Handling
class SmartCalculator {
  constructor() {
    this.history = [];
    this.memory = 0;
  }
  
  calculate(expression) {
    try {
      // Sanitize input - only allow numbers, operators, parentheses
      const sanitized = expression.replace(/[^0-9+\-*/.() ]/g, '');
      
      if (!sanitized) {
        throw new Error('Invalid expression');
      }
      
      // Evaluate safely
      const result = Function(\`"use strict"; return (\${sanitized})\`)();
      
      if (!isFinite(result)) {
        throw new Error('Result is not a finite number');
      }
      
      // Add to history
      this.history.push({ expression: sanitized, result });
      
      return {
        success: true,
        result: result,
        formatted: this.formatResult(result)
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Calculation error'
      };
    }
  }
  
  formatResult(num) {
    if (Number.isInteger(num)) return num.toString();
    return num.toFixed(6).replace(/\.?0+$/, '');
  }
  
  getHistory() {
    return this.history.slice(-5); // Last 5 calculations
  }
}

const calc = new SmartCalculator();
console.log(calc.calculate('2 + 2 * 3')); // { success: true, result: 8 }`,
      component: () => (
        <div className="bg-gray-800/30 rounded-lg p-4">
          <h3 className="text-xl font-bold text-white mb-4">Live Calculator Demo</h3>
          <div className="space-y-3">
            <input
              type="text"
              value={calcInput}
              onChange={(e) => setCalcInput(e.target.value)}
              placeholder="Enter expression (e.g., 2 + 2 * 3)"
              className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-cyan-400 outline-none"
            />
            <button
              onClick={() => {
                try {
                  const sanitized = calcInput.replace(/[^0-9+\-*/.() ]/g, '');
                  if (sanitized) {
                    const result = Function(`"use strict"; return (${sanitized})`)();
                    setCalcResult(`${calcInput} = ${result}`);
                  }
                } catch (error) {
                  setCalcResult('Error: Invalid expression');
                }
              }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded transition-colors"
            >
              Calculate
            </button>
            {calcResult && (
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-green-400">{calcResult}</code>
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      title: 'Text Analyzer',
      language: 'JavaScript',
      description: 'Real-time text analysis tool',
      icon: FileText,
      preview: `// Advanced Text Analyzer
class TextAnalyzer {
  constructor() {
    this.stopWords = new Set(['the', 'a', 'an', 'and', 'or', 'but']);
  }
  
  analyze(text) {
    const words = this.extractWords(text);
    const sentences = this.extractSentences(text);
    
    return {
      characters: text.length,
      words: words.length,
      sentences: sentences.length,
      readingTime: Math.ceil(words.length / 200)
    };
  }
  
  // ... more analysis methods
}`,
      code: `// Advanced Text Analyzer
class TextAnalyzer {
  constructor() {
    this.stopWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 
      'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being'
    ]);
  }
  
  analyze(text) {
    if (!text || typeof text !== 'string') {
      return this.getEmptyAnalysis();
    }
    
    const words = this.extractWords(text);
    const sentences = this.extractSentences(text);
    const paragraphs = this.extractParagraphs(text);
    
    return {
      characters: text.length,
      charactersNoSpaces: text.replace(/\s/g, '').length,
      words: words.length,
      sentences: sentences.length,
      paragraphs: paragraphs.length,
      averageWordsPerSentence: words.length / Math.max(sentences.length, 1),
      readingTime: Math.ceil(words.length / 200), // ~200 WPM
      topWords: this.getTopWords(words),
      sentiment: this.basicSentiment(text)
    };
  }
  
  extractWords(text) {
    return text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 0);
  }
  
  extractSentences(text) {
    return text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  }
  
  extractParagraphs(text) {
    return text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
  }
  
  getTopWords(words) {
    const wordCount = {};
    words.forEach(word => {
      if (!this.stopWords.has(word) && word.length > 2) {
        wordCount[word] = (wordCount[word] || 0) + 1;
      }
    });
    
    return Object.entries(wordCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([word, count]) => ({ word, count }));
  }
  
  basicSentiment(text) {
    const positive = ['good', 'great', 'excellent', 'amazing', 'wonderful', 'fantastic'];
    const negative = ['bad', 'terrible', 'awful', 'horrible', 'worst'];
    
    const words = text.toLowerCase().split(/\W+/);
    const posCount = words.filter(w => positive.includes(w)).length;
    const negCount = words.filter(w => negative.includes(w)).length;
    
    if (posCount > negCount) return 'Positive 😊';
    if (negCount > posCount) return 'Negative 😟';
    return 'Neutral 😐';
  }
}

const analyzer = new TextAnalyzer();`,
      component: () => (
        <div className="bg-gray-800/30 rounded-lg p-4">
          <h3 className="text-xl font-bold text-white mb-4">Live Text Analyzer</h3>
          <div className="space-y-3">
            <textarea
              value={textAnalysis}
              onChange={(e) => {
                setTextAnalysis(e.target.value);
                if (e.target.value) {
                  const words = e.target.value.trim().split(/\s+/).length;
                  const chars = e.target.value.length;
                  const sentences = e.target.value.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
                  setAnalysisResult(`Words: ${words} | Characters: ${chars} | Sentences: ${sentences} | Reading time: ${Math.ceil(words / 200)} min`);
                } else {
                  setAnalysisResult('');
                }
              }}
              placeholder="Enter text to analyze..."
              className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-cyan-400 outline-none h-24 resize-none"
            />
            {analysisResult && (
              <div className="bg-gray-900/50 p-3 rounded">
                <code className="text-green-400">{analysisResult}</code>
              </div>
            )}
          </div>
        </div>
      )
    }
  ];

  const runDemo = async () => {
    setIsRunning(true);
    setOutput('');
    
    // Simulate running the code
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const outputs = [
      '✅ Counter component initialized\n🔄 State management active\n📊 Hooks working perfectly',
      '🧮 Calculator engine started\n✅ Expression parser ready\n🎯 Error handling active\n📈 History tracking enabled',
      '📝 Text processor initialized\n🔍 Analysis engine ready\n📊 Sentiment detection active\n⚡ Real-time processing enabled'
    ];
    
    setOutput(outputs[activeDemo]);
    setIsRunning(false);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

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
    <section id="code-playground" className="py-20 px-6">
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
                PLAYGROUND
              </span>
            </div>
            
            {/* Main Content */}
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Interactive <span className="gradient-text">Playground</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Live demonstrations of my coding skills with functional, interactive examples
              </p>
            </div>
          </motion.div>

          {/* Demo Selector */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8">
            {demos.map((demo, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveDemo(index);
                  setShowFullCode(false); // Reset to preview when switching demos
                }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <demo.icon className="w-4 h-4" />
                <span>{demo.title}</span>
              </button>
            ))}
          </motion.div>

          {/* Code Editor and Interactive Demo */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Code Panel */}
            <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              {/* Editor Header */}
              <div className="flex items-center justify-between p-4 bg-gray-800/50 border-b border-gray-700/50">
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-purple-400" />
                  <span className="font-medium text-white">{demos[activeDemo].title}</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                    {demos[activeDemo].language}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => copyToClipboard(demos[activeDemo].code)}
                    className="flex items-center space-x-2 px-3 py-1 bg-gray-700/50 hover:bg-gray-600/50 
                             text-gray-300 rounded transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                  <button
                    onClick={runDemo}
                    disabled={isRunning}
                    className="flex items-center space-x-2 px-3 py-1 bg-green-600/50 hover:bg-green-600/70 
                             disabled:bg-gray-600/50 text-white rounded transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    <span className="text-sm">{isRunning ? 'Running...' : 'Run'}</span>
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{showFullCode ? demos[activeDemo].code : demos[activeDemo].preview}</code>
                </pre>
                
                {/* See More Button */}
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => setShowFullCode(!showFullCode)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                             hover:from-purple-500/30 hover:to-blue-500/30 border border-purple-500/30 
                             hover:border-purple-500/50 text-purple-400 hover:text-purple-300 rounded-lg 
                             transition-all duration-300 text-sm"
                  >
                    <span>{showFullCode ? 'Show Less' : 'See Full Code'}</span>
                    <motion.div
                      animate={{ rotate: showFullCode ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>
                </div>
              </div>

              {/* Console Output */}
              {output && (
                <div className="border-t border-gray-700/50 p-4 bg-black/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Terminal className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400">Console Output</span>
                  </div>
                  <pre className="text-sm text-green-300 whitespace-pre-line">{output}</pre>
                </div>
              )}
            </div>

            {/* Interactive Demo Panel */}
            <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
              {/* Demo Header */}
              <div className="flex items-center justify-between p-4 bg-gray-800/50 border-b border-gray-700/50">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium text-white">Live Demo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400">Interactive</span>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-4">{demos[activeDemo].description}</p>
                {demos[activeDemo].component()}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodePlayground;
