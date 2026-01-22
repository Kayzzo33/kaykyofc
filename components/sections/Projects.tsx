"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import Button from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "MedClinic Premium",
    category: "Saúde",
    tech: ["React", "Tailwind", "PostgreSQL"],
    image: "https://picsum.photos/800/600?random=1",
    description: "Plataforma de agendamento e telemedicina."
  },
  {
    id: 2,
    title: "CryptoDash PRO",
    category: "Fintech",
    tech: ["React", "D3.js", "Firebase"],
    image: "https://picsum.photos/800/600?random=2",
    description: "Dashboard de análise de criptomoedas em tempo real."
  },
  {
    id: 3,
    title: "EcoEats Delivery",
    category: "App Web",
    tech: ["React", "Redux", "Stripe"],
    image: "https://picsum.photos/800/600?random=3",
    description: "Marketplace de comida saudável com rastreio."
  }
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-bg-secondary relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Projetos que <span className="text-blue-primary">Transformam</span>
            </h2>
            <p className="text-gray-muted max-w-xl">
              Uma seleção de trabalhos recentes focados em conversão, performance e experiência do usuário.
            </p>
          </div>
          <Button variant="outline">Ver Todos</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card group relative bg-bg-tertiary rounded-xl overflow-hidden border border-white/5 hover:border-blue-primary/50 transition-colors duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-blue-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono text-gold-primary px-2 py-1 bg-gold-primary/10 rounded">{project.category}</span>
                  <div className="flex gap-2">
                    <button className="text-gray-muted hover:text-white"><Github size={18} /></button>
                    <button className="text-gray-muted hover:text-white"><ExternalLink size={18} /></button>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-primary transition-colors">{project.title}</h3>
                <p className="text-gray-muted text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;