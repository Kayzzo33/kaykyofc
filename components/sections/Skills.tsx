"use client";

import React from 'react';

const technologies = [
  { name: 'React', color: '#61DAFB', size: 'large' },
  { name: 'Next.js', color: '#fff', size: 'large' },
  { name: 'TypeScript', color: '#3178C6', size: 'large' },
  { name: 'Node.js', color: '#339933', size: 'medium' },
  { name: 'Tailwind', color: '#06B6D4', size: 'medium' },
  { name: 'Firebase', color: '#FFCA28', size: 'medium' },
  { name: 'GSAP', color: '#88CE02', size: 'small' },
  { name: 'Three.js', color: '#fff', size: 'small' },
  { name: 'Figma', color: '#F24E1E', size: 'small' },
  { name: 'PostgreSQL', color: '#336791', size: 'medium' },
  { name: 'Docker', color: '#2496ED', size: 'small' },
  { name: 'AWS', color: '#FF9900', size: 'small' },
];

const Skills = () => {
  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
          Ferramentas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-purple-500">Amo</span>
        </h2>
        <p className="text-gray-400 text-lg">O stack que impulsiona minhas criações.</p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 md:gap-8">
        {technologies.map((tech, i) => (
          <div
            key={tech.name}
            className={`
              relative flex items-center justify-center rounded-full bg-[#111] border border-white/5 
              hover:border-blue-primary/50 hover:bg-white/5 hover:scale-110 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]
              transition-all duration-300 cursor-default group
              ${tech.size === 'large' ? 'w-32 h-32 md:w-40 md:h-40' : tech.size === 'medium' ? 'w-24 h-24 md:w-32 md:h-32' : 'w-20 h-20 md:w-24 md:h-24'}
            `}
          >
            <div className="text-center z-10">
              <span className={`font-bold text-gray-300 group-hover:text-white transition-colors ${tech.size === 'large' ? 'text-lg' : 'text-sm'}`}>
                {tech.name}
              </span>
            </div>
            
            {/* Hover Glow */}
            <div 
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              style={{ backgroundColor: tech.color }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;