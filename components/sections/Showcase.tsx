"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Showcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // Começa assim que o topo atinge o topo da tela
          // AUMENTADO PARA 350%: Isso garante que a animação termine MUITO antes 
          // do scroll liberar a próxima sessão.
          end: "+=350%", 
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Configuração Inicial
      tl.set(leftCardRef.current, { xPercent: 0, rotation: -6 })
        .set(rightCardRef.current, { xPercent: 0, rotation: 6 })
        .set(contentRef.current, { scale: 0.8, opacity: 0 });

      // Animação de Abertura dos Cards
      // A duração relativa garante que a animação aconteça na primeira metade do scroll
      tl.to(leftCardRef.current, {
        xPercent: -160, 
        rotation: -25,
        ease: "power2.inOut",
        duration: 2
      }, 0)
      .to(rightCardRef.current, {
        xPercent: 160, 
        rotation: 25, 
        ease: "power2.inOut",
        duration: 2
      }, 0)
      .to(contentRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out"
      }, 0.5);

      // Buffer de tempo estático:
      // Adiciona um espaço vazio na timeline para que o usuário veja o resultado 
      // antes da sessão destravar.
      tl.to({}, { duration: 1.5 });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-transparent py-10 px-4 md:px-8 relative z-20">
      <section 
        ref={sectionRef}
        // ESTILO CORRIGIDO:
        // - h-[90vh] para dar respiro
        // - bg-[#050505] para fundo sólido
        // - rounded-[60px] direto na section para arredondar os cantos pretos
        // - border border-white/10 para definição sutil
        className="w-full h-[90vh] flex items-center justify-center bg-[#050505] rounded-[60px] border border-white/10 overflow-hidden relative shadow-2xl"
      >
        
        {/* Decorative Glow interno */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.05)_0%,_transparent_60%)] pointer-events-none"></div>

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

        {/* Cards Wrapper */}
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

      </section>
    </div>
  );
};

export default Showcase;