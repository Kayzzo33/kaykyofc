"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '@/components/ui/Button';
import { ArrowDown, Terminal, Database, Cpu } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      // Use lenis/window scroll instead of container scroll
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Safety check: ensure container exists before init GSAP
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate Text
      if (textRef.current) {
        tl.fromTo(textRef.current, 
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
        );
      }
      
      // Animate Graphic (Simple Fade In + Slide)
      if (graphicRef.current) {
        tl.fromTo(graphicRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
          "-=0.8"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto px-6 h-full flex items-center relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
        
        {/* Left: Text Content */}
        <div ref={textRef} className="space-y-8 opacity-0">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-gray-300 tracking-wider">OPEN TO WORK</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Engenharia <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-primary via-blue-glow to-white">Front-End</span> <br/>
            de Alto Nível.
          </h1>
          
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed font-light border-l-2 border-white/10 pl-6">
            Especialista em construir interfaces pixel-perfect, performáticas e escaláveis utilizando o ecossistema React moderno.
          </p>

          <div className="flex gap-4 pt-2">
            <Button onClick={scrollToAbout} className="group">
              Conhecer meu Trabalho
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right: Abstract Tech Visualization (Stable 2D) */}
        <div ref={graphicRef} className="hidden lg:flex justify-center items-center opacity-0 relative">
          
          {/* Main Card */}
          <div className="relative w-full max-w-md bg-[#111] rounded-2xl border border-white/10 overflow-hidden shadow-2xl z-10">
            {/* Header */}
            <div className="h-10 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-2">
               <div className="flex gap-1.5">
                 <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
               </div>
               <div className="ml-4 text-[10px] text-gray-500 font-mono">dev_profile.tsx</div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
               {/* Stat Row */}
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                     <Terminal className="text-blue-primary w-6 h-6 mb-2" />
                     <div className="text-2xl font-bold text-white">5+</div>
                     <div className="text-xs text-gray-500 uppercase">Years Exp.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                     <Database className="text-purple-500 w-6 h-6 mb-2" />
                     <div className="text-2xl font-bold text-white">50+</div>
                     <div className="text-xs text-gray-500 uppercase">Projects</div>
                  </div>
               </div>

               {/* Code Block */}
               <div className="p-4 rounded-xl bg-black border border-white/10 font-mono text-xs space-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-20">
                    <Cpu className="w-12 h-12" />
                  </div>
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{`{`}</span></p>
                  <p className="pl-4 text-gray-300">name: <span className="text-green-400">'Kayzz'</span>,</p>
                  <p className="pl-4 text-gray-300">role: <span className="text-green-400">'Frontend Engineer'</span>,</p>
                  <p className="pl-4 text-gray-300">skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'GSAP'</span>]</p>
                  <p className="text-yellow-400">{`}`}</p>
               </div>
            </div>
          </div>

          {/* Decorative Backdrops (No 3D transforms) */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-primary/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
          
        </div>

      </div>
    </div>
  );
};

export default Hero;