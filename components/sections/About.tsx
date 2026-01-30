"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // FIX: Garante que os elementos comecem visíveis mas animados de uma posição offset
      // clearProps: "all" remove os estilos inline do GSAP após a animação, prevenindo bugs de opacidade 0
      gsap.from(".about-anim", { 
        y: 50, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        },
        clearProps: "all" 
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto px-6 h-full flex items-center justify-center relative">
      <div className="w-full max-w-6xl grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Image Section */}
        <div className="md:col-span-5 relative about-anim">
           <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-blue-primary/10 mix-blend-overlay z-10"></div>
              <img 
                src="https://res.cloudinary.com/dxhlvrach/image/upload/v1769108091/454761d8-13ce-484c-a6d3-d9481ec99958.png" 
                alt="Kayky Ribeiro" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
           </div>
           {/* Decorative Elements */}
           <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-primary/20 blur-2xl rounded-full -z-10"></div>
           <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full -z-10"></div>
        </div>

        {/* Text Section */}
        <div className="md:col-span-7 space-y-8 about-anim">
          <div className="space-y-4">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-widest uppercase">
                <span className="text-white/20 font-thin">SOBRE</span>{" "}
                <span className="text-white font-thin">&</span>{" "}
                <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-300">
                  MIM
                </span>
             </h2>
             <h3 className="text-xl md:text-2xl font-light text-gray-300">
                Olá, eu sou <span className="text-blue-primary font-semibold">Kayzz</span>.
             </h3>
          </div>
          
          <div className="space-y-6 text-base md:text-lg text-gray-300 font-light leading-relaxed">
            <p>
              Sou um desenvolvedor web profissionalmente conectado ao mundo da tecnologia. Um engenheiro detalhista que gosta de construir experiências de usuário bem pensadas e de alta qualidade.
            </p>
            <p>
              Sou apaixonado por resolver problemas, colaborar com pessoas incríveis e aprender continuamente.
            </p>
            
            <div className="pt-4 pl-6 border-l-2 border-blue-primary/30 italic text-gray-400 text-sm">
              "Fora do trabalho, você me encontrará explorando novas tecnologias, contribuindo para o open source ou jogando."
            </div>
          </div>

          <div className="pt-6 flex gap-12 border-t border-white/5">
             <div>
               <div className="text-3xl font-bold text-white">05+</div>
               <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Anos de XP</div>
             </div>
             <div>
               <div className="text-3xl font-bold text-white">50+</div>
               <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Projetos</div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;