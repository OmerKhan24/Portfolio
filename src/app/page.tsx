'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import EnhancedBackground from '@/components/EnhancedBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <EnhancedBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
