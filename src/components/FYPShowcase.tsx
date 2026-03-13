"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Brain,
  Github,
  Shield,
  Mic,
  FileText,
  BarChart3,
  ChevronRight,
  Cpu,
  Eye,
  MessageSquare,
  Zap,
  Users,
  Lock,
  Camera,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const FYPShowcase = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const aiEngines = [
    {
      name: "DeepSeek LLM",
      role: "The Brain",
      plain:
        "Reads the job description + your CV, then holds a real conversation — asking follow-up questions based on YOUR answers, just like a human interviewer would.",
      color: "from-violet-500 to-purple-600",
      glow: "shadow-violet-500/30",
      icon: Brain,
    },
    {
      name: "YOLOv8",
      role: "The Watchdog",
      plain:
        "A real-time object detection AI that watches your video feed every second. If you pick up a phone or any device, it catches it instantly and flags it in the report.",
      color: "from-red-500 to-rose-600",
      glow: "shadow-red-500/30",
      icon: Camera,
    },
    {
      name: "MediaPipe",
      role: "The Eye Tracker",
      plain:
        "Google's AI that maps 468 points on your face in real time. It knows exactly where your eyes are looking — if you look away from the screen too long, it's logged.",
      color: "from-cyan-500 to-sky-600",
      glow: "shadow-cyan-500/30",
      icon: Eye,
    },
    {
      name: "Sentence Transformers",
      role: "The Judge",
      plain:
        "Converts both the expected answer and your actual answer into mathematical vectors, then measures how semantically close they are — not just keyword matching, but meaning matching.",
      color: "from-emerald-500 to-teal-600",
      glow: "shadow-emerald-500/30",
      icon: BarChart3,
    },
    {
      name: "ChromaDB + RAG",
      role: "The Memory",
      plain:
        "Every CV and job description is stored as searchable AI embeddings. When generating questions, the system retrieves the most relevant context — so no two interviews are the same.",
      color: "from-orange-500 to-amber-600",
      glow: "shadow-orange-500/30",
      icon: Cpu,
    },
  ];

  const wowFeatures = [
    {
      icon: Mic,
      title: "It Actually Talks to You",
      plain:
        "The AI speaks the interview questions out loud using real-time text-to-speech. You answer by speaking — it transcribes your voice instantly. No typing. It feels like talking to a real interviewer.",
      tag: "Speech AI",
      color: "text-violet-400",
      border: "border-violet-500/20 hover:border-violet-500/50",
    },
    {
      icon: Shield,
      title: "You Can't Cheat. Seriously.",
      plain:
        "3 independent AI systems watch you simultaneously: one detects phones, one tracks your eyes, one monitors if you switch browser tab. Every violation is timestamped and goes into the final report.",
      tag: "Multi-Layer Proctoring",
      color: "text-red-400",
      border: "border-red-500/20 hover:border-red-500/50",
    },
    {
      icon: FileText,
      title: "HR Can Chat with CVs",
      plain:
        'HR managers can type questions like "Who has the most Python experience?" or "Which candidate worked at a startup?" and get instant AI-powered answers from the entire candidate pool.',
      tag: "RAG Chatbot",
      color: "text-cyan-400",
      border: "border-cyan-500/20 hover:border-cyan-500/50",
    },
    {
      icon: BarChart3,
      title: "A Score Card for Every Candidate",
      plain:
        "After each interview, HR gets a detailed report: a confidence score, an answer accuracy score, a cheating risk score, and a facial expression timeline — all combined into a single ranking.",
      tag: "Multi-Modal Scoring",
      color: "text-emerald-400",
      border: "border-emerald-500/20 hover:border-emerald-500/50",
    },
    {
      icon: Users,
      title: "Built for a Real Company",
      plain:
        "Not a demo with fake data. IntelliHire has 4 separate user roles (Admin, HR, Employee, Candidate), each with their own protected dashboard, login flow, and completely different interface.",
      tag: "Role-Based Platform",
      color: "text-yellow-400",
      border: "border-yellow-500/20 hover:border-yellow-500/50",
    },
    {
      icon: Sparkles,
      title: "Questions That Adapt to You",
      plain:
        "The interviewer AI reads your previous answers mid-interview and decides whether to probe deeper, move on, or challenge an inconsistency. It doesn't just follow a script — it thinks.",
      tag: "Adaptive AI",
      color: "text-pink-400",
      border: "border-pink-500/20 hover:border-pink-500/50",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Candidate Applies",
      desc: "Uploads CV. AI parses and indexes it into the vector database.",
    },
    {
      step: "02",
      title: "AI Reads Everything",
      desc: "DeepSeek reads the job description + CV, ChromaDB retrieves the most relevant context.",
    },
    {
      step: "03",
      title: "Live AI Interview",
      desc: "AI speaks questions. Candidate answers by voice. 3 proctoring AIs watch simultaneously.",
    },
    {
      step: "04",
      title: "Instant Scoring",
      desc: "5 AI signals are fused into a ranked multi-dimensional report delivered to HR.",
    },
  ];

  const stack = [
    {
      layer: "Frontend",
      tech: "React 19 · TypeScript · MUI · Recharts · WebRTC · Socket.IO",
    },
    {
      layer: "Backend",
      tech: "Flask 3 · SQLAlchemy · Flask-JWT-Extended · Gunicorn",
    },
    {
      layer: "LLM Engine",
      tech: "DeepSeek API · LangChain · ChromaDB (RAG vector store)",
    },
    {
      layer: "AI / ML",
      tech: "YOLOv8 · MediaPipe · OpenCV · Sentence Transformers · gTTS · SpeechRecognition",
    },
    { layer: "Database", tech: "MySQL (relational) · ChromaDB (vector store)" },
    { layer: "DevOps", tech: "Render · python-dotenv · CORS" },
  ];

  return (
    <section id="fyp" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 relative"
          >
            <div className="absolute inset-0 flex items-start justify-center pointer-events-none overflow-hidden">
              <span className="text-[5.5rem] lg:text-[7rem] font-black bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-purple-500/10 bg-clip-text text-transparent select-none whitespace-nowrap">
                FYP
              </span>
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/15 border border-violet-500/30 rounded-full text-violet-300 text-sm font-semibold mb-4">
                <Brain size={15} />
                Final Year Project &middot; FAST-NUCES 2026
              </div>
              <h2 className="text-5xl lg:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  IntelliHire
                </span>
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-3 font-medium">
                An AI that interviews job candidates — so humans don&apos;t have
                to.
              </p>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
                5 separate AI models work together in real time: one talks, one
                listens, one watches your eyes, one detects phones, and one
                scores your answers semantically — all at once, during a single
                live interview.
              </p>
            </div>
          </motion.div>

          {/* Big Stats Bar */}
          <motion.div variants={itemVariants} className="mb-14">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                {
                  value: "5",
                  label: "AI Models",
                  sub: "working simultaneously",
                  color: "text-violet-400",
                },
                {
                  value: "3",
                  label: "Proctoring Layers",
                  sub: "eyes · phone · tab",
                  color: "text-red-400",
                },
                {
                  value: "4",
                  label: "User Roles",
                  sub: "Admin · HR · Employee · Candidate",
                  color: "text-cyan-400",
                },
                {
                  value: "RAG",
                  label: "Question Engine",
                  sub: "no two interviews alike",
                  color: "text-emerald-400",
                },
                {
                  value: "∞",
                  label: "Scalable",
                  sub: "cloud-deployed on Render",
                  color: "text-yellow-400",
                },
              ].map(({ value, label, sub, color }) => (
                <div
                  key={label}
                  className="text-center bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-xl p-4"
                >
                  <p className={`text-3xl font-black ${color} mb-1`}>{value}</p>
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div variants={itemVariants} className="mb-14">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              How It Works —{" "}
              <span className="text-violet-400">In Plain English</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {howItWorks.map((step, i) => (
                <div key={step.step} className="relative">
                  <div className="bg-gray-800/50 border border-gray-700/40 rounded-xl p-5 h-full">
                    <p className="text-4xl font-black text-violet-500/30 mb-2">
                      {step.step}
                    </p>
                    <h4 className="text-white font-bold text-sm mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {i < howItWorks.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <ArrowRight size={18} className="text-violet-500/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI Engines */}
          <motion.div variants={itemVariants} className="mb-14">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">
              The <span className="text-violet-400">5 AI Engines</span> Inside
            </h3>
            <p className="text-gray-400 text-sm text-center mb-6">
              Each one is a specialist. Together they form a complete hiring
              intelligence system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {aiEngines.map((ai) => (
                <motion.div
                  key={ai.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`relative rounded-2xl overflow-hidden border border-gray-700/40 bg-gray-800/40 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl ${ai.glow}`}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ai.color}`}
                  />
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${ai.color} bg-opacity-20 shrink-0`}
                    >
                      <ai.icon size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">
                        {ai.role}
                      </p>
                      <h4 className="text-white font-bold mb-2">{ai.name}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {ai.plain}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Filler card showing they all work together */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden border border-violet-500/30 bg-gradient-to-br from-violet-900/30 to-indigo-900/20 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/20 flex flex-col justify-center"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-indigo-500" />
                <div className="text-center">
                  <Zap size={32} className="text-violet-400 mx-auto mb-3" />
                  <h4 className="text-white font-bold mb-2">
                    All Running Together
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    All 5 models operate concurrently during the interview — not
                    sequentially. The result is a seamless, human-like
                    experience with zero noticeable delay.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* WOW features */}
          <motion.div variants={itemVariants} className="mb-14">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">
              What Makes It <span className="text-violet-400">Stand Out</span>
            </h3>
            <p className="text-gray-400 text-sm text-center mb-6">
              Features that go far beyond a typical university project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {wowFeatures.map((f) => (
                <motion.div
                  key={f.title}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className={`rounded-xl p-6 border bg-gray-800/40 backdrop-blur-sm transition-all duration-300 ${f.border}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <f.icon size={20} className={f.color} />
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full bg-gray-700/60 ${f.color}`}
                    >
                      {f.tag}
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">
                    {f.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {f.plain}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="mb-14">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ChevronRight size={20} className="text-violet-400" /> Full Tech
              Stack
            </h3>
            <div className="rounded-xl border border-gray-700/50 overflow-hidden bg-gray-800/30 backdrop-blur-sm">
              {stack.map((row, i) => (
                <div
                  key={row.layer}
                  className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-6 py-3 ${
                    i !== stack.length - 1 ? "border-b border-gray-700/40" : ""
                  }`}
                >
                  <span className="text-violet-400 font-semibold text-sm w-32 shrink-0">
                    {row.layer}
                  </span>
                  <span className="text-gray-300 text-sm">{row.tech}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* System Architecture */}
          <motion.div variants={itemVariants} className="mb-14">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ChevronRight size={20} className="text-violet-400" /> System Architecture
            </h3>
            <div className="rounded-xl border border-gray-700/50 bg-gray-900/60 backdrop-blur-sm p-6 md:p-8">
              <div className="flex flex-col items-center gap-0 w-full">

                {/* Layer 1 — Frontend */}
                <div className="w-full max-w-2xl">
                  <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 text-center">
                    <p className="text-blue-300 font-bold text-sm mb-1">Frontend</p>
                    <p className="text-gray-400 text-xs">React 19 · TypeScript · MUI · WebRTC · Socket.IO</p>
                    <p className="text-gray-500 text-xs mt-1">Interview UI &nbsp;/&nbsp; HR Dashboard &nbsp;/&nbsp; Candidate Portal</p>
                  </div>
                </div>

                {/* Arrow + label */}
                <div className="flex flex-col items-center py-1">
                  <div className="w-px h-4 bg-gray-600" />
                  <span className="text-gray-500 text-[10px] px-2 py-0.5 border border-gray-700 rounded-full bg-gray-800 whitespace-nowrap">REST + WebSocket (Socket.IO)</span>
                  <div className="w-px h-4 bg-gray-600" />
                  <div className="w-2 h-2 border-r-2 border-b-2 border-gray-500 rotate-45 -mt-1.5" />
                </div>

                {/* Layer 2 — Flask Backend */}
                <div className="w-full max-w-2xl">
                  <div className="rounded-xl border border-purple-500/40 bg-purple-500/10 p-4">
                    <p className="text-purple-300 font-bold text-sm text-center mb-3">Flask Backend</p>
                    <p className="text-gray-400 text-xs text-center mb-4">JWT Auth · SQLAlchemy ORM · Flask-CORS · Gunicorn</p>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        'Interview Engine',
                        'CV / HR Services',
                        'Proctoring Pipeline',
                      ].map((s) => (
                        <div key={s} className="rounded-lg border border-purple-500/25 bg-purple-500/10 px-2 py-3 text-center">
                          <p className="text-purple-200 text-xs font-semibold leading-snug">{s}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center py-1">
                  <div className="w-px h-6 bg-gray-600" />
                  <div className="w-2 h-2 border-r-2 border-b-2 border-gray-500 rotate-45 -mt-1.5" />
                </div>

                {/* Layer 3 — AI / ML */}
                <div className="w-full max-w-2xl">
                  <div className="rounded-xl border border-violet-500/40 bg-violet-500/10 p-4">
                    <p className="text-violet-300 font-bold text-sm text-center mb-3">AI / ML Layer</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { name: 'DeepSeek LLM', color: 'text-violet-300 border-violet-500/30 bg-violet-500/10' },
                        { name: 'LangChain', color: 'text-indigo-300 border-indigo-500/30 bg-indigo-500/10' },
                        { name: 'ChromaDB (RAG)', color: 'text-orange-300 border-orange-500/30 bg-orange-500/10' },
                        { name: 'YOLOv8', color: 'text-red-300 border-red-500/30 bg-red-500/10' },
                        { name: 'MediaPipe', color: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10' },
                        { name: 'Sentence Transformers', color: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10' },
                        { name: 'SpeechRecognition', color: 'text-yellow-300 border-yellow-500/30 bg-yellow-500/10' },
                        { name: 'gTTS', color: 'text-pink-300 border-pink-500/30 bg-pink-500/10' },
                        { name: 'OpenCV', color: 'text-sky-300 border-sky-500/30 bg-sky-500/10' },
                      ].map((item) => (
                        <div key={item.name} className={`rounded-lg border px-2 py-2 text-center ${item.color}`}>
                          <p className="text-xs font-semibold leading-snug">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center py-1">
                  <div className="w-px h-6 bg-gray-600" />
                  <div className="w-2 h-2 border-r-2 border-b-2 border-gray-500 rotate-45 -mt-1.5" />
                </div>

                {/* Layer 4 — Database */}
                <div className="w-full max-w-2xl">
                  <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4">
                    <p className="text-emerald-300 font-bold text-sm text-center mb-3">Databases</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: 'MySQL', sub: 'Relational — users, interviews, scores', color: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10' },
                        { name: 'ChromaDB', sub: 'Vector store — CV & JD embeddings', color: 'text-orange-300 border-orange-500/30 bg-orange-500/10' },
                      ].map((db) => (
                        <div key={db.name} className={`rounded-lg border px-3 py-3 text-center ${db.color}`}>
                          <p className="text-sm font-bold mb-1">{db.name}</p>
                          <p className="text-xs opacity-70 leading-snug">{db.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Security & Auth Note */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="rounded-2xl border border-gray-700/40 bg-gray-800/30 backdrop-blur-sm p-6 flex flex-col md:flex-row gap-6">
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                  <Lock size={22} className="text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">
                    Security-First Design
                  </h4>
                  <p className="text-gray-400 text-sm">
                    JWT authentication stored in httpOnly cookies (invisible to
                    JavaScript). Role-based access control enforced at both API
                    and UI level — a candidate literally cannot see the HR
                    dashboard even if they guess the URL.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                  <Users size={22} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">
                    Built Like a Real Product
                  </h4>
                  <p className="text-gray-400 text-sm">
                    4 completely separate user experiences under one system.
                    Real-time updates via Socket.IO. Deployed on cloud
                    infrastructure. Production-grade architecture, not a
                    university demo.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href="https://github.com/OmerKhan24/IntelliHire"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/30 text-base"
            >
              <Github size={20} />
              View IntelliHire on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FYPShowcase;
