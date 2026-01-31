"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Button from '@/components/ui/Button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  
  const [activeKey, setActiveKey] = useState<number | null>(null);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Logic for the Keyboard Animation
  useEffect(() => {
    const interval = setInterval(() => {
      const randomKey = Math.floor(Math.random() * 60);
      setActiveKey(randomKey);
      setTimeout(() => setActiveKey(null), 200);
    }, Math.random() * 800 + 400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      // 1. Badge
      if (badgeRef.current) {
        tl.from(badgeRef.current, { autoAlpha: 0, y: -20, duration: 0.8 });
      }

      // 2. Title
      if (textRef.current) {
        tl.from(textRef.current, { autoAlpha: 0, y: 30, duration: 1 }, "-=0.6");
      }

      // 3. Description
      if (descRef.current) {
        tl.from(descRef.current, { 
          autoAlpha: 0, 
          x: -30, 
          duration: 1 
        }, "-=0.8");
      }
      
      // 4. CTA Button
      if (ctaRef.current) {
        tl.from(ctaRef.current, { autoAlpha: 0, y: 20, duration: 0.8 }, "-=0.6");
      }

      // 5. Desktop Graphic
      if (desktopRef.current) {
         tl.from(desktopRef.current, { 
           autoAlpha: 0, 
           scale: 0.9, 
           duration: 1.5, 
           ease: "back.out(1.2)" 
         }, "-=1");
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto px-6 h-full flex items-center relative z-10 perspective-[2000px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-16 items-center w-full pt-12 md:pt-20 lg:pt-0">
        
        {/* Left: Text Content */}
        <div className="space-y-6 lg:space-y-8 z-20 order-2 lg:order-1 text-center lg:text-left pb-10 lg:pb-0">
          <div className="space-y-4 lg:space-y-6">
            <div ref={badgeRef} className="invisible-on-load inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono text-cyan-400 tracking-wider">OPEN TO WORK</span>
            </div>
            
            <h1 ref={textRef} className="invisible-on-load text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Desenvolvimento <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-primary via-cyan-400 to-white">Web Full-Stack</span> <br/>
              de Alto Nível.
            </h1>
          </div>
          
          <p ref={descRef} className="invisible-on-load text-gray-400 text-base sm:text-lg max-w-lg leading-relaxed font-light border-l-2 border-blue-500/30 pl-6 mx-auto lg:mx-0 text-left">
            Construo soluções web completas que geram resultados reais. Do design ao deploy, da landing page ao SaaS complexo.
          </p>

          <div ref={ctaRef} className="invisible-on-load flex gap-4 pt-2 justify-center lg:justify-start">
            <Button onClick={scrollToAbout} className="group">
              Conhecer meu Trabalho
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right: Custom 3D Desktop Scene */}
        <div ref={desktopRef} className="invisible-on-load flex justify-center items-center relative h-[320px] sm:h-[450px] lg:h-[600px] w-full order-1 lg:order-2 -mt-8 md:-mt-12 lg:mt-0">
           {/* Scaled workspace: 0.38 for mobile, 0.6 for tablet, 0.85/1.0 for desktop */}
           <div className="hero-workspace scale-[0.38] sm:scale-[0.6] md:scale-[0.7] lg:scale-[0.85] xl:scale-100 origin-center">
              
              {/* Monitor */}
              <div className="hero-monitor">
                 <div className="hero-screen">
                    <div className="hero-logo-container">
                       <div className="hero-code-symbol">&lt;/&gt;</div>
                    </div>

                    <div className="hero-window window-1">
                       <div className="hero-window-header">
                          <div className="flex gap-1.5">
                             <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                          </div>
                          <span className="ml-3 text-[9px] text-white/60">profile.info</span>
                       </div>
                       <div className="hero-window-content">
                          <div className="flex gap-2 items-center mb-3">
                             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">DV</div>
                             <div>
                                <div className="text-white font-bold">Developer</div>
                                <div className="text-white/50 text-[9px]">Full Stack</div>
                             </div>
                          </div>
                          <div className="w-full h-px bg-white/10 mb-2"></div>
                          <div className="grid grid-cols-3 gap-1">
                             {[...Array(6)].map((_, i) => (
                                <div key={i} className="h-6 bg-white/5 rounded border border-white/5"></div>
                             ))}
                          </div>
                       </div>
                    </div>

                    <div className="hero-window window-2">
                       <div className="hero-window-header">
                          <div className="flex gap-1.5">
                             <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                          </div>
                          <span className="ml-3 text-[9px] text-white/60">messages.chat</span>
                       </div>
                       <div className="hero-window-content flex flex-col gap-2">
                          {[
                             { name: 'Sarah Chen', msg: 'Great work!', color: '#27c93f' },
                             { name: 'Mike Ross', msg: 'Meeting at 3pm', color: '#ffbd2e' },
                             { name: 'Alex Kim', msg: 'Review PR?', color: '#0ea5e9' }
                          ].map((chat, i) => (
                             <div key={i} className="flex items-center gap-2 p-1.5 bg-white/5 rounded border-l-2" style={{ borderLeftColor: chat.color }}>
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: chat.color }}></div>
                                <div>
                                   <div className="text-white/80 font-bold text-[9px]">{chat.name}</div>
                                   <div className="text-white/40 text-[8px]">{chat.msg}</div>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>

                    <div className="hero-window window-3">
                       <div className="hero-window-header">
                          <div className="flex gap-1.5">
                             <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                          </div>
                          <span className="ml-3 text-[9px] text-white/60">Portfolio.jsx</span>
                       </div>
                       <div className="hero-window-content">
                          <div className="code-line"><span className="text-cyan-400">import</span> <span className="text-blue-300">React</span> <span className="text-cyan-400">from</span> <span className="text-green-300">'react'</span>;</div>
                          <div className="code-line h-2"></div>
                          <div className="code-line"><span className="text-cyan-400">const</span> <span className="text-blue-400">Portfolio</span> = () {`=>`} {'{'}</div>
                          <div className="code-line pl-2 text-gray-500 italic">// Building digital dreams</div>
                          <div className="code-line pl-2"><span className="text-cyan-400">return</span> (</div>
                          <div className="code-line pl-4">&lt;<span className="text-blue-300">PremiumUX</span> /&gt;</div>
                          <div className="code-line pl-2">);</div>
                          <div className="code-line">{'}'};</div>
                       </div>
                    </div>

                    <div className="hero-window window-4">
                       <div className="hero-window-header">
                          <div className="flex gap-1.5">
                             <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                          </div>
                          <span className="ml-3 text-[9px] text-white/60">terminal</span>
                       </div>
                       <div className="hero-window-content">
                          <div className="terminal-line"><span className="text-cyan-400">$</span> npm run dev</div>
                          <div className="terminal-line text-green-400">✓ Server started</div>
                          <div className="terminal-line"><span className="text-yellow-400">→</span> http://localhost:3000</div>
                          <div className="terminal-line text-green-400">✓ Build complete</div>
                          <div className="terminal-line"><span className="text-cyan-400">$</span> <span className="inline-block w-1.5 h-3 bg-green-400 animate-pulse"></span></div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="hero-desk-items">
                 <div className="hero-keyboard">
                    {[...Array(60)].map((_, i) => (
                       <div 
                         key={i} 
                         className={`hero-key ${activeKey === i ? 'key-active' : ''}`}
                       ></div>
                    ))}
                 </div>
                 <div className="hero-mouse">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-3.5 bg-blue-500/60 rounded animate-pulse"></div>
                 </div>
              </div>

              <div className="hero-coffee">
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-1 justify-center">
                    <div className="w-1 h-6 bg-gradient-to-t from-white/60 to-transparent rounded animate-[steamRise_2s_ease-in-out_infinite]"></div>
                    <div className="w-1 h-6 bg-gradient-to-t from-white/60 to-transparent rounded animate-[steamRise_2s_ease-in-out_infinite_0.3s]"></div>
                    <div className="w-1 h-6 bg-gradient-to-t from-white/60 to-transparent rounded animate-[steamRise_2s_ease-in-out_infinite_0.6s]"></div>
                 </div>
                 <div className="w-[65px] h-[75px] bg-gradient-to-br from-[#e8e8e8] to-[#c5c5c5] rounded-b-xl rounded-t-lg relative shadow-lg">
                    <div className="absolute top-2 left-2 right-2 h-[50px] bg-[#1b0f0d] rounded-b-md rounded-t-sm"></div>
                    <div className="absolute -right-6 top-4 w-7 h-8 border-[4px] border-[#c5c5c5] border-l-0 rounded-r-xl"></div>
                 </div>
              </div>

              <div className="hero-pen">
                 <div className="w-full h-[70px] bg-gradient-to-b from-blue-600 to-cyan-700 rounded-t-sm relative shadow-md">
                    <div className="absolute top-4 right-[-2px] w-1 h-5 bg-gray-400 rounded-r-sm"></div>
                 </div>
                 <div className="w-full h-[30px] bg-[#2a2a2a] clip-path-polygon-[30%_0,70%_0,100%_100%,0_100%]"></div>
              </div>

              <div className="hero-notebook relative">
                 <div className="absolute top-3 left-3 right-3 h-0.5 bg-[#d0d0d0] shadow-[0_12px_0_#d0d0d0,0_24px_0_#d0d0d0,0_36px_0_#d0d0d0]"></div>
                 <div className="absolute left-0 top-0 bottom-0 w-4 bg-black/5 border-r border-black/10"></div>
              </div>

           </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;