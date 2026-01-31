"use client";

import React, { useEffect, useRef, useState } from 'react';
import { 
  Zap, 
  Fingerprint, 
  Users, 
  Code2,
  Gauge
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Hook para detectar visibilidade (Viewport) ---
function useOnScreen(ref: React.RefObject<Element>, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);
  return isIntersecting;
}

const CornerDecorators = () => (
    <div className="pointer-events-none">
        <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-white/10 transition-colors duration-300 group-hover:border-blue-primary/50"></span>
        <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-white/10 transition-colors duration-300 group-hover:border-blue-primary/50"></span>
        <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white/10 transition-colors duration-300 group-hover:border-blue-primary/50"></span>
        <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white/10 transition-colors duration-300 group-hover:border-blue-primary/50"></span>
    </div>
);

const BentoCard = ({ children, className }: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={cn(
      "relative rounded-xl border border-white/5 transition-all duration-500 overflow-hidden group",
      "hover:border-blue-primary/30 hover:bg-white/5 hover:shadow-2xl hover:shadow-blue-900/10", 
      className
    )}>
      {children}
    </div>
  );
};

export default function PerformanceMetrics() {
  const graphRef = useRef<HTMLDivElement>(null);
  const isGraphVisible = useOnScreen(graphRef, "-50px");

  return (
    <div className="container mx-auto px-6 relative z-10 max-w-6xl py-20">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-primary/10 blur-[120px] rounded-full pointer-events-none will-change-transform" />
      
      {/* Header Section */}
      <div className="mb-20 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl tracking-[0.2em] uppercase mb-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
          <span className="font-thin text-gray-400 transition-colors duration-500 hover:text-white">
            Performance
          </span>
          <span className="font-thin text-white/50 hidden md:inline">&</span>
          <span className="font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.2)]">
            Inovação
          </span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
          Experiências digitais que unem a precisão do código à fluidez da arte.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* Card 1: 100% Customizable */}
        <BentoCard className="md:col-span-1 bg-bg-secondary/50">
          <div className="h-full flex flex-col justify-between relative overflow-hidden p-6 md:p-8">
             <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Code2 className="w-24 h-24 text-white" />
             </div>
             
             <div className="relative z-10 mt-4">
                <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-black/40 border border-white/10 w-fit shadow-lg">
                  <span className="text-3xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent tracking-tighter">100%</span>
                </div>
                <h3 className="text-xl font-medium text-white mb-2 tracking-wide">Arquitetura Escalável</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Código modular e limpo. Adaptável a qualquer necessidade do seu negócio sem improvisos.
                </p>
             </div>
             <CornerDecorators />
          </div>
        </BentoCard>

        {/* Card 2: Security */}
        <BentoCard className="md:col-span-1 bg-bg-secondary/50">
          <div className="h-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
            
            <div className="mb-8 relative w-24 h-24 flex items-center justify-center">
              <Fingerprint 
                className="w-20 h-20 text-white/10 absolute" 
                strokeWidth={1} 
              />
              <Fingerprint 
                 className="w-20 h-20 text-cyan-400 absolute animate-pulse-glow" 
                 strokeWidth={1.5} 
              />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-cyan-200 shadow-[0_0_10px_rgba(34,211,238,1)] w-full animate-scanner" />
            </div>
            
            <h3 className="text-xl font-medium text-white mb-2 tracking-wide">Secure by Default</h3>
            <p className="text-sm text-gray-500 max-w-[200px] mx-auto">
              Proteção integrada e práticas de segurança desde a base.
            </p>
            <CornerDecorators />
          </div>
        </BentoCard>

        {/* Card 3: System Score */}
        <BentoCard className="md:col-span-1 bg-bg-secondary/50">
           <div className="h-full flex flex-col p-6 relative overflow-hidden">
              
              <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none">
                  <Gauge className="w-40 h-40 text-cyan-400" />
              </div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                 <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-20"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
                    </span>
                    Sistema Otimizado
                 </div>
                 <span className="text-cyan-500/80 font-mono text-xs font-bold">98/100</span>
              </div>

              {/* CSS Bar Graph */}
              <div className="flex-1 flex items-end gap-1.5 h-32 w-full mb-4 opacity-80 z-10">
                  {[40, 65, 50, 80, 55, 90, 70, 95, 100].map((height, i) => (
                    <div key={i} className="flex-1 bg-white/5 relative rounded-t-[2px] overflow-hidden backdrop-blur-sm">
                       <div 
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/40 to-cyan-500/60 transition-all duration-1000 ease-out w-full"
                          style={{ 
                            height: `${height}%`,
                            transitionDelay: `${i * 50}ms`
                          }}
                       />
                    </div>
                  ))}
              </div>

              <div className="relative z-10">
                 <h3 className="text-xl font-medium text-white">Alta Performance</h3>
                 <p className="text-sm text-gray-400 mt-1">Pontuação máxima em métricas vitais da web.</p>
              </div>
              <CornerDecorators />
           </div>
        </BentoCard>

        {/* Card 4: Animated Graph */}
        <BentoCard className="md:col-span-2 bg-bg-secondary/50">
          <div className="p-8 h-full flex flex-col md:flex-row gap-8 items-center" ref={graphRef}>
            <div className="flex-1 space-y-4 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] tracking-wider text-cyan-400 uppercase font-bold shadow-lg">
                <Zap className="w-3 h-3" />
                <span>Renderização Instantânea</span>
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">
                Mais rápido que a luz.
              </h3>
              <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                Utilizando Next.js e Server Components para garantir que o usuário não espere nem um milissegundo a mais.
              </p>
            </div>

            {/* Animated Graph Area */}
            <div className="flex-1 w-full h-48 bg-black/20 rounded-xl border border-white/5 relative overflow-hidden p-0 flex items-end">
               {/* Background Grid */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
               
               <svg className="w-full h-[80%] absolute bottom-0 left-0 right-0 z-10" viewBox="0 0 400 150" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  <path 
                    d="M0,150 C50,120 100,140 150,80 C200,20 250,60 300,40 C350,20 400,0 400,150 Z" 
                    fill="url(#gradient)" 
                    className={cn(
                      "transition-opacity duration-1000 delay-500",
                      isGraphVisible ? "opacity-100" : "opacity-0"
                    )}
                  />
                  
                  <path 
                    d="M0,150 C50,120 100,140 150,80 C200,20 250,60 300,40 C350,20 400,0" 
                    fill="none" 
                    stroke="rgb(34, 211, 238)" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    className={cn(
                      "drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]",
                      isGraphVisible ? "animate-draw-line" : "opacity-0"
                    )}
                  />
               </svg>
               
               <div className={cn(
                 "absolute top-4 right-4 bg-black/80 backdrop-blur border border-white/10 px-3 py-1.5 rounded text-[10px] font-mono flex items-center gap-2 shadow-2xl z-20 text-cyan-400 transition-all duration-1000 delay-1000",
                 isGraphVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
               )}>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"/>
                  14.34 ms
               </div>
            </div>
          </div>
          <CornerDecorators />
        </BentoCard>

        {/* Card 5: Satisfaction */}
        <BentoCard className="md:col-span-1 bg-bg-secondary/50">
           <div className="p-6 h-full flex flex-col justify-center">
              <div className="flex items-center justify-between mb-6">
                 <div className="w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-gray-400">
                    <Users className="w-5 h-5" />
                 </div>
                 <div className="text-right">
                    <div className="text-xl font-bold text-white">100%</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Satisfação</div>
                 </div>
              </div>

              <h3 className="text-lg font-medium text-white mb-2 tracking-wide">Parceria Real</h3>
              <p className="text-sm text-gray-500 mb-6">
                Comunicação clara e entregas consistentes.
              </p>

              {/* Avatar Stack */}
              <div className="flex items-center -space-x-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                 {[1, 2, 3].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center overflow-hidden">
                       <img 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 85}`} 
                        alt="Avatar" 
                        className="w-full h-full object-cover"
                       />
                    </div>
                 ))}
                 <div className="w-9 h-9 rounded-full border-2 border-black bg-zinc-900 flex items-center justify-center text-[10px] text-gray-400 font-bold">
                    +20
                 </div>
              </div>
              <CornerDecorators />
           </div>
        </BentoCard>

      </div>
    </div>
  );
}