"use client";

import React from 'react';
import Image from 'next/image';

const timeline = [
  { year: "2017", title: "O Começo", desc: "Descobri a programação através da robótica. Primeiros passos com HTML e CSS." },
  { year: "2021", title: "Profissionalização", desc: "Decisão de transformar hobby em profissão. Foco em React e ecossistema JS." },
  { year: "2023", title: "Sistemas Complexos", desc: "Desenvolvimento de aplicações robustas e integração com IA." },
  { year: "Hoje", title: "Automação & Performance", desc: "Criando o futuro da web com Next.js e Agentes de IA." },
];

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            A Jornada de um <span className="text-gradient">Desenvolvedor</span>
          </h1>
          <p className="text-gray-muted text-lg">
            Desde 2017, transformo linhas de código em soluções digitais que geram resultados reais.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10" />
          
          {timeline.map((item, index) => (
            <div key={index} className={`relative flex items-center justify-between mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12" />
              <div className="z-10 w-4 h-4 rounded-full bg-blue-primary shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
              <div className="w-5/12 p-6 bg-bg-secondary border border-white/5 rounded-xl hover:border-blue-primary/30 transition-colors">
                <span className="text-blue-primary font-mono font-bold">{item.year}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Stack Tecnológica</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind', 'GSAP', 'Firebase', 'Three.js'].map(tech => (
              <div key={tech} className="p-4 bg-bg-secondary rounded border border-white/5 text-center text-gray-300 font-mono text-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}