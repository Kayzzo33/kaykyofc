"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CounterItem = ({ end, label }: { end: number, label: string }) => {
  const numberRef = useRef<HTMLSpanElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = triggerRef.current;
    const numEl = numberRef.current;
    
    if (!el || !numEl) return;

    const counter = { val: 0 };
    
    const tween = gsap.to(counter, {
      val: end,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      onUpdate: () => {
        const val = Math.ceil(counter.val);
        numEl.innerText = val < 10 ? `0${val}` : `${val}`;
      }
    });

    return () => { tween.kill(); };
  }, [end]);

  return (
    <div ref={triggerRef}>
      <div className="text-3xl md:text-4xl font-bold text-white flex items-center">
        <span ref={numberRef}>00</span>+
      </div>
      <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
};

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".about-anim", { 
        y: 30, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
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
        
        {/* Image Section with Reveal Effect */}
        <div className="md:col-span-5 relative about-anim group cursor-pointer">
           <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/10">
              
              {/* Bottom Image (The Reveal) - Color */}
              {/* Otimização: Adicionado /f_auto,q_auto/ para reduzir tamanho e formato webp */}
              <img 
                src="https://res.cloudinary.com/ddxo3s8an/image/upload/f_auto,q_auto/v1769868518/fzvabqw3c5rmt0cw2hfbkqwxsc_laizc7.png" 
                alt="Kayky Ribeiro Reveal" 
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                width={500}
                height={625}
                loading="lazy"
              />

              {/* Top Image (Initial) - Grayscale/Blue Tint */}
              <div className="absolute inset-0 z-10 transition-opacity duration-700 ease-in-out group-hover:opacity-0 bg-[#050505]">
                  <div className="absolute inset-0 bg-blue-primary/10 mix-blend-overlay z-20"></div>
                  <img 
                    src="https://res.cloudinary.com/dxhlvrach/image/upload/f_auto,q_auto/v1769108091/454761d8-13ce-484c-a6d3-d9481ec99958.png" 
                    alt="Kayky Ribeiro" 
                    className="w-full h-full object-cover grayscale opacity-90"
                    width={500}
                    height={625}
                    loading="lazy"
                  />
              </div>

           </div>
           
           {/* Decorative Elements */}
           <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-primary/20 blur-2xl rounded-full -z-10 transition-all duration-700 group-hover:bg-blue-primary/40"></div>
           <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full -z-10 transition-all duration-700 group-hover:bg-cyan-500/30"></div>
        </div>

        {/* Text Section */}
        <div className="md:col-span-7 space-y-8 about-anim">
          <div className="space-y-4">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-widest uppercase">
                <span className="text-white/20 font-thin">SOBRE</span>{" "}
                <span className="text-white font-thin">&</span>{" "}
                <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                  MIM
                </span>
             </h2>
             <h3 className="text-xl md:text-2xl font-light text-gray-300">
                Olá, eu sou <span className="text-blue-primary font-semibold">Kayzz</span>.
             </h3>
          </div>
          
          <div className="space-y-6 text-base md:text-lg text-gray-300 font-light leading-relaxed">
            <p>
              Desenvolvedor web fullstack especializado em criar experiências digitais que funcionam. Comecei em 2017 e desde então venho aprimorando o craft de transformar ideias em produtos digitais completos.
            </p>
            <p>
              Domino todo o ciclo de desenvolvimento: do design pensado para conversão, passando por interfaces modernas com React e Next.js, até APIs robustas com Node.js e infraestrutura em nuvem. TypeScript, animações avançadas, integração de dados — se envolve código web, provavelmente já trabalhei com isso.
            </p>
            <p>
              Atualmente focado em landing pages de alta performance e sistemas SaaS customizados, principalmente para o setor de saúde. Acredito em resolver problemas reais com tecnologia bem aplicada.
            </p>
            
            <div className="pt-4 pl-6 border-l-2 border-blue-primary/30 italic text-gray-400 text-sm">
              "Fora do trabalho, você me encontrará explorando novas tecnologias, contribuindo para o open source ou jogando."
            </div>
          </div>

          <div className="pt-6 flex gap-12 border-t border-white/5">
             <CounterItem end={8} label="Anos de XP" />
             <CounterItem end={350} label="Projetos" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;