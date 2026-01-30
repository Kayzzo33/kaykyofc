"use client";

import React, { useEffect, useRef } from 'react';

const tools = [
  // Row 1 - Top
  { name: 'Figma', top: '5%', left: '10%', size: 'small', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769741894/Figma-Symbol_jlzvwb.png' },
  { name: 'Python', top: '8%', left: '28%', size: 'small', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769741902/python-logo-only_lixurx.png' },
  { name: 'GSAP', top: '3%', left: '48%', size: 'small', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769741897/gsap_1_zy1qup.png' },
  { name: 'GitHub', top: '6%', left: '68%', size: 'small', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769741896/GitHub-Symbol_ygvizo.png' },
  { name: 'Git', top: '10%', left: '85%', size: 'small', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },

  // Row 2
  { name: 'HTML5', top: '20%', left: '5%', size: 'small', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769742258/2_kxzept.png' },
  { name: 'Linux', top: '22%', left: '18%', size: 'large', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769742250/5_xgms3r.png' },
  { name: 'Rest API', top: '18%', left: '38%', size: 'large', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769741895/free-rest-api-blue-gear-and-cloud-icon-22100_asvvxy.png' },
  { name: 'Next.js', top: '25%', left: '58%', size: 'large', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769742258/1_oxuc5n.png' },
  { name: 'Three.js', top: '20%', left: '78%', size: 'small', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769741899/icon_2-1_f2qxf0.png' },

  // Row 3 - Middle
  { name: 'CSS3', top: '38%', left: '8%', size: 'small', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769741899/logo-css-3-2048_jxytgw.png' },
  { name: 'Node.js', top: '42%', left: '23%', size: 'large', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769741901/logo-node-js-1024_o1ss5k.png' },
  { name: 'TypeScript', top: '38%', left: '42%', size: 'large', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769741890/Typescript_logo_2020.svg_cg66gy.png' },
  { name: 'Docker', top: '40%', left: '60%', size: 'large', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769741892/Docker-Emblem_iefbx2.png' },
  { name: 'PostgreSQL', top: '42%', left: '82%', size: 'small', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },

  // Row 4
  { name: 'Firebase', top: '58%', left: '3%', size: 'small', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769743038/Design_sem_nome_53_p0ihkm.png' },
  { name: 'React', top: '55%', left: '15%', size: 'large', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769741891/React-Logo-PNG-Pic-200x200_c2niyq.png' },
  { name: 'JavaScript', top: '60%', left: '33%', size: 'large', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769742889/OIP_3_b3a97g.webp' },
  { name: 'Tailwind', top: '58%', left: '52%', size: 'large', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769743220/Tailwind_CSS_Logo.svg_uopq9e.png' },
  { name: 'AWS', top: '62%', left: '70%', size: 'large', img: 'https://res.cloudinary.com/ddxo3s8an/image/upload/v1769741891/Amazon-Web-Services-AWS-Logo_rfg5ox.png' },

  // Row 5 - Bottom
  { name: 'MongoDB', top: '78%', left: '12%', size: 'medium', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Vue.js', top: '75%', left: '30%', size: 'large', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Prisma', top: '80%', left: '48%', size: 'medium', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
  { name: 'Vercel', top: '76%', left: '66%', size: 'medium', img: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png' },
  { name: 'Framer', top: '82%', left: '82%', size: 'medium', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg' },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Animation Logic
  useEffect(() => {
    const grid = containerRef.current;
    if (!grid) return;

    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseMoving = true;
    };

    const handleMouseLeave = () => {
      isMouseMoving = false;
      // Reset items to origin
      itemsRef.current.forEach(item => {
        if (item) {
          item.style.transform = '';
          item.style.transition = 'transform 0.5s ease-out';
        }
      });
    };

    const animate = () => {
      if (isMouseMoving) {
        itemsRef.current.forEach(item => {
          if (!item) return;
          
          const rect = item.getBoundingClientRect();
          const gridRect = grid.getBoundingClientRect();
          
          const itemCenterX = rect.left - gridRect.left + rect.width / 2;
          const itemCenterY = rect.top - gridRect.top + rect.height / 2;
          
          const deltaX = itemCenterX - mouseX;
          const deltaY = itemCenterY - mouseY;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          
          const repulsionRadius = 200; // Increased radius for better effect
          
          if (distance < repulsionRadius && distance > 0) {
            const force = (repulsionRadius - distance) / repulsionRadius;
            const pushDistance = force * 100; // Increased push distance
            
            const pushX = (deltaX / distance) * pushDistance;
            const pushY = (deltaY / distance) * pushDistance;
            
            // Apply transform to the outer container, leaving internal animation intact
            item.style.transform = `translate(${pushX}px, ${pushY}px)`;
            item.style.transition = 'transform 0.1s ease-out';
          } else {
            item.style.transform = '';
            item.style.transition = 'transform 0.5s ease-out';
          }
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    grid.addEventListener('mousemove', handleMouseMove);
    grid.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      grid.removeEventListener('mousemove', handleMouseMove);
      grid.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center relative z-10">
        <div className="text-center mb-16 relative z-10">
           <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-widest uppercase mb-4">
              <span className="text-white/20 font-thin">STACK</span>{" "}
              <span className="text-white font-thin">&</span>{" "}
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-300">
                SKILLS
              </span>
           </h2>
          <p className="text-gray-400 text-lg">O stack que impulsiona minhas criações.</p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full max-w-[1200px] h-[600px] mx-auto hidden md:block"
        >
          {tools.map((tool, index) => {
            // Random animation delay for organic feel
            const delay = (index * 0.4) % 3;
            const duration = 6 + (index % 3);

            return (
              <div
                key={index}
                ref={el => { itemsRef.current[index] = el; }}
                data-name={tool.name}
                className={`
                  tool-item absolute cursor-pointer
                  transition-transform will-change-transform
                  z-10
                `}
                style={{
                  top: tool.top,
                  left: tool.left,
                }}
              >
                {/* 
                  SEPARAÇÃO CRÍTICA:
                  Outer Div (acima): Controlado pelo Javascript (Repulsão).
                  Inner Div (abaixo): Controlado pelo CSS (Animação de flutuar).
                  Isso evita conflito de 'transform'.
                */}
                <div 
                  className={`
                    relative bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center
                    group animate-float
                    shadow-[0_10px_40px_rgba(0,0,0,0.3)]
                    hover:z-50 hover:shadow-[0_20px_60px_rgba(14,165,233,0.4)]
                    ${tool.size === 'large' ? 'w-24 h-24 lg:w-32 lg:h-32' : tool.size === 'medium' ? 'w-20 h-20 lg:w-24 lg:h-24' : 'w-14 h-14 lg:w-20 lg:h-20'}
                  `}
                  style={{
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`
                  }}
                >
                    <div className="relative w-[60%] h-[60%]">
                        <img 
                            src={tool.img} 
                            alt={tool.name}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-40px] opacity-0 group-hover:opacity-100 group-hover:bottom-[-50px] transition-all duration-300 bg-black/90 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none border border-white/10 backdrop-blur-sm z-50">
                      {tool.name}
                    </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Mobile View */}
        <div className="md:hidden grid grid-cols-3 gap-4 w-full">
            {tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4 bg-[#1a1a1a] rounded-xl border border-white/5">
                    <img src={tool.img} alt={tool.name} className="w-10 h-10 object-contain mb-2" />
                    <span className="text-xs text-gray-400 font-mono">{tool.name}</span>
                </div>
            ))}
        </div>

      </div>
    </>
  );
};

export default Skills;