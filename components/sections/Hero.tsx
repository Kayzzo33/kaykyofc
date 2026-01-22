"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '@/components/ui/Button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    const container = document.querySelector('.snap-container');
    if (element && container) {
      container.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (textRef.current) {
        tl.fromTo(textRef.current, 
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
        );
      }
      
      if (desktopRef.current) {
        tl.fromTo(desktopRef.current,
          { opacity: 0, rotateY: -30, x: 100 },
          { opacity: 1, rotateY: -15, x: 0, duration: 1.2, ease: "power3.out" },
          "-=0.8"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto px-6 h-full flex items-center relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left: Text Content */}
        <div ref={textRef} className="space-y-6 opacity-0">
          <div className="flex items-center gap-2 text-blue-primary font-mono text-sm tracking-widest uppercase">
            <span className="w-8 h-[1px] bg-blue-primary"></span>
            Engenheiro de Software Front-End
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Criando <br/>
            Experiências <span className="text-gradient">Digitais.</span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            Desenvolvo interfaces elegantes, resolvo desafios complexos de design e transformo ideias em realidade através de código limpo e escalável.
          </p>

          <div className="pt-4 flex gap-4">
            <Button onClick={scrollToAbout} className="group">
              Sobre Mim
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right: 3D Desktop Simulation */}
        <div ref={desktopRef} className="hidden lg:flex justify-center items-center perspective-container opacity-0">
          <div className="desktop-3d-container w-full max-w-2xl">
            {/* Monitor Frame */}
            <div className="monitor-frame aspect-video relative bg-gray-900 rounded-lg border border-gray-800 shadow-2xl overflow-hidden">
              {/* Screen Content - Abstract Code/UI */}
              <div className="screen-content w-full h-full bg-[#0a0a0a] relative">
                
                {/* Header Bar */}
                <div className="h-6 bg-[#1a1a1a] flex items-center px-3 gap-1.5 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>

                {/* Main Content Area */}
                <div className="p-6 grid grid-cols-12 gap-4 h-full">
                  {/* Sidebar */}
                  <div className="col-span-3 h-3/4 bg-white/5 rounded animate-pulse"></div>
                  
                  {/* Main Panel */}
                  <div className="col-span-9 space-y-4">
                    <div className="h-32 bg-gradient-to-br from-blue-primary/20 to-purple-600/20 rounded border border-blue-primary/10 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-blue-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="h-24 bg-white/5 rounded"></div>
                       <div className="h-24 bg-white/5 rounded"></div>
                    </div>
                    {/* Simulated Code Lines */}
                    <div className="space-y-2 mt-4 font-mono text-xs text-gray-500 opacity-50">
                      <p>&lt;Component prop="value" /&gt;</p>
                      <p className="pl-4">const data = await fetch('/api/user');</p>
                      <p className="pl-4">return data.json();</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements on Screen */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-primary/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
            {/* Monitor Stand */}
            <div className="w-32 h-16 bg-gray-800 mx-auto -mt-2 relative z-[-1] transform perspective(500px) rotateX(40deg)"></div>
            <div className="w-48 h-4 bg-gray-800 mx-auto rounded-full shadow-lg"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;