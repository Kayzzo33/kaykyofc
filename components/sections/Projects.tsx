"use client";

import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Button from '@/components/ui/Button';

const projects = [
  {
    id: 1,
    title: "MedClinic Premium",
    category: "Saúde",
    tech: ["React", "Tailwind", "PostgreSQL"],
    image: "https://picsum.photos/800/600?random=1",
    description: "Plataforma de agendamento e telemedicina completa para clínicas de alto padrão."
  },
  {
    id: 2,
    title: "CryptoDash PRO",
    category: "Fintech",
    tech: ["React", "D3.js", "Firebase"],
    image: "https://picsum.photos/800/600?random=2",
    description: "Dashboard de análise de criptomoedas em tempo real com gráficos avançados."
  },
  {
    id: 3,
    title: "EcoEats Delivery",
    category: "App Web",
    tech: ["React", "Redux", "Stripe"],
    image: "https://picsum.photos/800/600?random=3",
    description: "Marketplace de comida saudável com rastreamento de entregas em tempo real."
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto px-6 min-h-full flex flex-col justify-center py-20">
      <div className={`flex flex-col md:flex-row justify-between items-end mb-12 gap-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div>
          <h2 className="text-4xl font-bold mb-2">
            Projetos <span className="text-blue-primary">Selecionados</span>
          </h2>
          <p className="text-gray-400">
             Aplicações web de alta performance construídas para escala.
          </p>
        </div>
        <Button variant="outline">Ver Github</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`
              project-card group relative bg-[#111] rounded-xl overflow-hidden border border-white/5 
              hover:border-blue-primary/50 transition-all duration-500 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
            `}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-blue-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-mono text-blue-primary px-2 py-1 bg-blue-primary/10 rounded uppercase tracking-wider">{project.category}</span>
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-white transition-colors"><Github size={16} /></button>
                  <button className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={16} /></button>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-1 text-white group-hover:text-blue-primary transition-colors">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] text-gray-500 border border-white/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;