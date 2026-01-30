"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Showcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null); // Referência para o pin (Sessão inteira)
  const cardRef = useRef<HTMLDivElement>(null); // Referência para o visual (Card arredondado)
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%", // Distância calibrada para o scroll
          scrub: 1,
          pin: true, // Pinamos a section inteira
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Configuração Inicial
      tl.set(leftCardRef.current, { xPercent: 0, rotation: -6 })
        .set(rightCardRef.current, { xPercent: 0, rotation: 6 })
        .set(contentRef.current, { scale: 0.8, opacity: 0 });

      // Animação de Abertura dos Cards
      tl.to(leftCardRef.current, {
        xPercent: -150, 
        rotation: -20,
        ease: "power2.inOut",
        duration: 1.5
      }, 0)
      .to(rightCardRef.current, {
        xPercent: 150, 
        rotation: 20, 
        ease: "power2.inOut",
        duration: 1.5
      }, 0)
      .to(contentRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      }, 0.5);

      // Pequena pausa dramática antes de liberar o scroll
      tl.to({}, { duration: 0.2 });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center bg-[#050505] overflow-hidden z-20 py-10"
    >
      {/* 
        CONTAINER DO CARD ESTILIZADO 
        - Rounded corners (arredondado)
        - Borda sutil para contraste
        - Margem para não colar nas bordas
        - Background ligeiramente diferente para destacar do fundo preto total
      */}
      <div 
        ref={cardRef}
        className="relative w-[95%] h-[90%] bg-[#0a0a0a] rounded-[50px] md:rounded-[80px] border border-white/5 shadow-2xl overflow-hidden flex items-center justify-center"
      >
        
        {/* Decorative Glow no fundo do card */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

        {/* Background Content (Revealed Text) */}
        <div 
          ref={contentRef} 
          className="absolute z-0 text-center px-4 max-w-4xl"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            CASES DE <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-primary via-purple-400 to-orange-300">
              SUCESSO
            </span>
          </h2>
          
          <div className="max-w-xl mx-auto space-y-6">
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              Esqueça designs genéricos. Eu construo interfaces pensadas para converter, engajar e destacar sua marca.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300 font-mono">
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm shadow-lg">
                ✨ Design Exclusivo
              </span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm shadow-lg">
                🚀 Alta Performance
              </span>
            </div>
          </div>
        </div>

        {/* Cards Wrapper - Centralizados */}
        <div className="relative z-10 flex items-center justify-center w-full pointer-events-none">
          
          {/* Left Card */}
          <div 
            ref={leftCardRef}
            className="absolute w-[240px] h-[350px] md:w-[300px] md:h-[450px] rounded-3xl border border-white/10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden bg-[#1a1a1a]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
            <img 
              src="https://res.cloudinary.com/ddxo3s8an/image/upload/v1769815705/da753468-e2b1-479f-9a14-53166916f14b.png" 
              alt="Project Preview Left" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Card */}
          <div 
            ref={rightCardRef}
            className="absolute w-[240px] h-[350px] md:w-[300px] md:h-[450px] rounded-3xl border border-white/10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden bg-[#1a1a1a]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
            <img 
              src="https://res.cloudinary.com/ddxo3s8an/image/upload/v1769815588/f774dd86-a9cd-4e46-b044-26ec65c9aa67.png" 
              alt="Project Preview Right" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Showcase;