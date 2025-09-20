'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import GitHubStats from '@/components/GitHubStats';
import CodePlayground from '@/components/CodePlayground';
import Endorsements from '@/components/Endorsements';
import Contact from '@/components/Contact';
import EnhancedBackground from '@/components/EnhancedBackground';
import ScrollProgress from '@/components/ScrollProgress';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <EnhancedBackground />
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <GitHubStats />
      <div className="hidden md:block">
        <CodePlayground />
      </div>
      <Endorsements />
      <Contact />
      <Footer />
    </main>
  );
}
