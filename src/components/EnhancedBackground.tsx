'use client';

import { useEffect, useState } from 'react';

const EnhancedBackground = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    size: number;
    delay: number;
    duration: number;
  }>>([]);

  const [galaxyStars, setGalaxyStars] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
  }>>([]);

  const [nebulaClouds, setNebulaClouds] = useState<Array<{
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    delay: number;
  }>>([]);

  const [shapes, setShapes] = useState<Array<{
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    // Generate particles
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 20,
        duration: Math.random() * 10 + 15,
      });
    }
    setParticles(newParticles);

    // Generate galaxy stars
    const newGalaxyStars = [];
    for (let i = 0; i < 30; i++) {
      newGalaxyStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
      });
    }
    setGalaxyStars(newGalaxyStars);

    // Generate nebula clouds
    const newNebulaClouds = [];
    for (let i = 0; i < 6; i++) {
      newNebulaClouds.push({
        id: i,
        x: Math.random() * 120 - 10,
        y: Math.random() * 100,
        width: Math.random() * 300 + 200,
        height: Math.random() * 200 + 150,
        delay: Math.random() * 40,
      });
    }
    setNebulaClouds(newNebulaClouds);

    // Generate geometric shapes
    const newShapes = [];
    for (let i = 0; i < 15; i++) {
      newShapes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        width: Math.random() * 100 + 50,
        height: Math.random() * 100 + 50,
        delay: Math.random() * 25,
        duration: Math.random() * 15 + 20,
      });
    }
    setShapes(newShapes);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="animated-bg" />
      
      {/* Galaxy stars */}
      <div className="fixed inset-0 pointer-events-none">
        {galaxyStars.map((star) => (
          <div
            key={star.id}
            className="galaxy-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Nebula clouds */}
      <div className="fixed inset-0 pointer-events-none">
        {nebulaClouds.map((cloud) => (
          <div
            key={cloud.id}
            className="nebula-cloud"
            style={{
              left: `${cloud.x}%`,
              top: `${cloud.y}%`,
              width: `${cloud.width}px`,
              height: `${cloud.height}px`,
              animationDelay: `${cloud.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric shapes */}
      <div className="geometric-bg">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className="geo-shape"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.width}px`,
              height: `${shape.height}px`,
              animationDelay: `${shape.delay}s`,
              animationDuration: `${shape.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />
    </div>
  );
};

export default EnhancedBackground;
