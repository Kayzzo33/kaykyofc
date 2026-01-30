"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Showcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Aumenta a distância do scroll para dar tempo da animação acontecer suavemente
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Configuração Inicial
      tl.set(leftCardRef.current, { xPercent: 0, rotation: -6 })
        .set(rightCardRef.current, { xPercent: 0, rotation: 6 })
        .set(contentRef.current, { scale: 0.8, opacity: 0 });

      // Animação de Abertura
      tl.to(leftCardRef.current, {
        xPercent: -140,
        rotation: -15,
        ease: "power2.inOut",
        duration: 1
      }, 0)
      .to(rightCardRef.current, {
        xPercent: 140,
        rotation: 15,
        ease: "power2.inOut",
        duration: 1
      }, 0)
      .to(contentRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out"
      }, 0.2); // Texto entra um pouco depois dos cards começarem a abrir

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* Background Content (Revealed Text) */}
      <div 
        ref={contentRef} 
        className="absolute z-0 text-center px-4 max-w-4xl"
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
          CASES DE <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-primary via-purple-400 to-orange-300">
            SUCESSO
          </span>
        </h2>
        
        <div className="max-w-xl mx-auto space-y-6">
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Esqueça designs genéricos. Eu construo interfaces pensadas para converter, engajar e destacar sua marca no mercado digital.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300 font-mono">
            <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm shadow-lg">
              ✨ Design Exclusivo
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm shadow-lg">
              🚀 Alta Performance
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm shadow-lg">
              💎 Pixel Perfect
            </span>
          </div>
        </div>
      </div>

      {/* Cards Wrapper */}
      <div className="relative z-10 flex items-center justify-center w-full pointer-events-none">
        
        {/* Left Card */}
        <div 
          ref={leftCardRef}
          className="absolute w-[260px] h-[380px] md:w-[320px] md:h-[480px] rounded-3xl border border-white/10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden bg-[#1a1a1a]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
          {/* Card 1 */}
          <img 
            src="https://res.cloudinary.com/ddxo3s8an/image/upload/v1769815705/da753468-e2b1-479f-9a14-53166916f14b.png" 
            alt="Project Preview Left" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Card */}
        <div 
          ref={rightCardRef}
          className="absolute w-[260px] h-[380px] md:w-[320px] md:h-[480px] rounded-3xl border border-white/10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden bg-[#1a1a1a]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
          {/* Card 2 */}
          <img 
            src="https://res.cloudinary.com/ddxo3s8an/image/upload/v1769815588/f774dd86-a9cd-4e46-b044-26ec65c9aa67.png" 
            alt="Project Preview Right" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Showcase;