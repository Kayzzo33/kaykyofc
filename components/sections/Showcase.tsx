"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Zap } from 'lucide-react';

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
          start: "top top", 
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

      tl.to({}, { duration: 1.5 });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-transparent py-10 px-4 md:px-8 relative z-20">
      <section 
        ref={sectionRef}
        className="w-full h-[90vh] flex items-center justify-center bg-[#050505] rounded-[60px] border border-white/10 overflow-hidden relative shadow-2xl"
      >
        
        {/* Decorative Glow interno */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.05)_0%,_transparent_60%)] pointer-events-none"></div>

        {/* Background Content (Revealed Text) */}
        <div 
          ref={contentRef} 
          className="absolute z-0 text-center px-4 max-w-4xl"
        >
          {/* Título padronizado com o estilo ARTE & INOVAÇÃO */}
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            <span className="text-white/20 font-thin">CASES</span>{" "}
            <span className="text-white font-thin">DE</span> <br/>
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
              SUCESSO
            </span>
          </h2>
          
          <div className="max-w-xl mx-auto space-y-6">
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              Esqueça designs genéricos. Eu construo interfaces pensadas estrategicamente para converter, engajar e destacar sua marca.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300 font-mono">
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm shadow-lg flex items-center gap-2">
                <Sparkles size={14} className="text-blue-400" />
                Design Exclusivo
              </span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm shadow-lg flex items-center gap-2">
                <Zap size={14} className="text-yellow-400" />
                Alta Performance
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
            {/* Otimização Cloudinary */}
            <img 
              src="https://res.cloudinary.com/ddxo3s8an/image/upload/f_auto,q_auto/v1769815705/da753468-e2b1-479f-9a14-53166916f14b.png" 
              alt="Project Preview Left" 
              className="w-full h-full object-cover"
              width={300}
              height={450}
              loading="lazy"
            />
          </div>

          {/* Right Card */}
          <div 
            ref={rightCardRef}
            className="absolute w-[240px] h-[350px] md:w-[300px] md:h-[450px] rounded-3xl border border-white/10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden bg-[#1a1a1a]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
            {/* Otimização Cloudinary */}
            <img 
              src="https://res.cloudinary.com/ddxo3s8an/image/upload/f_auto,q_auto/v1769815588/f774dd86-a9cd-4e46-b044-26ec65c9aa67.png" 
              alt="Project Preview Right" 
              className="w-full h-full object-cover"
              width={300}
              height={450}
              loading="lazy"
            />
          </div>

        </div>

      </section>
    </div>
  );
};

export default Showcase;