"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '@/components/ui/Button';
import { ArrowRight, Code2 } from 'lucide-react';
import ParticleBackground from '@/components/animations/ParticleBackground';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal animation
      const tl = gsap.timeline();
      
      tl.from(".hero-badge", { 
        y: -20, 
        opacity: 0, 
        duration: 0.8, 
        ease: "power3.out" 
      })
      .from(".hero-title", { 
        y: 50, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.2,
        ease: "power3.out" 
      }, "-=0.4")
      .from(".hero-desc", { 
        y: 30, 
        opacity: 0, 
        duration: 0.8, 
        ease: "power3.out" 
      }, "-=0.6")
      .from(".hero-cta", { 
        y: 20, 
        opacity: 0, 
        duration: 0.8, 
        stagger: 0.1,
        ease: "power3.out" 
      }, "-=0.6");

      // Glitch effect trigger on load
      gsap.to(textRef.current, {
        keyframes: [
          { x: 0 },
          { x: -2, y: 2 },
          { x: 2, y: -2 },
          { x: 0, y: 0 }
        ],
        duration: 0.2,
        repeat: 5,
        yoyo: true,
        ease: "none",
        delay: 1.5
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <ParticleBackground />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 opacity-20 pointer-events-none" />

      <div className="container relative z-10 px-4 text-center">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-primary/10 border border-blue-primary/20 text-blue-primary text-sm font-mono mb-8 backdrop-blur-sm">
          <Code2 size={14} />
          <span>Full Stack Developer</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="block hero-title text-white">Olá, eu sou</span>
          <span 
            ref={textRef}
            className="block hero-title text-transparent bg-clip-text bg-gradient-to-r from-blue-primary via-white to-gold-primary tracking-tighter"
          >
            KAYZZ
          </span>
        </h1>

        {/* Slogan */}
        <h2 className="hero-desc text-xl md:text-2xl text-gray-muted max-w-2xl mx-auto mb-10 font-light">
          "Tecnologia que transforma. <span className="text-gray-text font-medium">Experiência que entrega.</span>"
        </h2>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="hero-cta w-full sm:w-auto btn-glow">
            <span className="flex items-center gap-2">
              Ver Projetos <ArrowRight size={18} />
            </span>
          </Button>
          <Button variant="outline" className="hero-cta w-full sm:w-auto">
            Falar Comigo
          </Button>
        </div>

        {/* Stats */}
        <div className="hero-cta mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-white/10 pt-8">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white">247+</span>
            <span className="text-sm text-gray-muted">Projetos</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white">8+</span>
            <span className="text-sm text-gray-muted">Anos Exp.</span>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <span className="text-3xl font-bold text-gold-primary">100%</span>
            <span className="text-sm text-gray-muted">Satisfação</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;