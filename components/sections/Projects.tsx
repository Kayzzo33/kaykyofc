"use client";

import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Monitor, Smartphone, Tablet, ChevronLeft, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "BF Agência Oficial",
    url: "https://www.bfagenciaoficial.com/",
    image: "https://res.cloudinary.com/ddxo3s8an/image/upload/v1769737111/beed6d14-fba6-42ca-b934-7548bfe0535e.png"
  },
  {
    id: 2,
    title: "Mi Tatua",
    url: "https://mi-tatua.vercel.app/",
    image: "https://res.cloudinary.com/ddxo3s8an/image/upload/v1769737197/4e868f77-c517-4edd-826d-38e7263c3902.png"
  },
  {
    id: 3,
    title: "Maira Estetique",
    url: "https://mairaestetique.vercel.app/",
    image: "https://res.cloudinary.com/ddxo3s8an/image/upload/v1769737254/b3e3252e-626b-43b6-bcea-a73ab3e9b0cd.png"
  },
  {
    id: 4,
    title: "Ane Psicóloga",
    url: "https://ane-psicologa.vercel.app",
    image: "https://res.cloudinary.com/ddxo3s8an/image/upload/v1769737286/cf3c351c-5716-458a-9701-530377893b82.png"
  },
  {
    id: 5,
    title: "Rosangela Terapeuta",
    url: "https://rosangela-terapeuta.bolt.host",
    image: "https://res.cloudinary.com/ddxo3s8an/image/upload/v1769738347/1cb5058c-a0eb-4c18-86a8-59b752df5c98.png"
  },
  {
    id: 6,
    title: "Carine Souza",
    url: "https://carinesouzaterapeuta.vercel.app",
    image: "https://res.cloudinary.com/ddxo3s8an/image/upload/v1769738378/af759e12-48f4-44c2-9def-6b3f60beea88.png"
  },
  {
    id: 7,
    title: "Reyel Produções",
    url: "https://reyelproducoes.bolt.host",
    image: "https://res.cloudinary.com/ddxo3s8an/image/upload/v1769738405/4a55c564-b586-4cad-b92d-20df03a6b9d9.png"
  },
  {
    id: 8,
    title: "GSAP Animation Landing",
    url: "https://lpcomgsap.vercel.app",
    image: "https://res.cloudinary.com/ddxo3s8an/image/upload/v1769738438/a1ad2ff9-631c-46ba-9a24-0b268b8ecdec.png"
  },
  {
    id: 9,
    title: "Onzy Imobiliária",
    url: "https://onzymobiliaria.bolt.host",
    image: "https://res.cloudinary.com/ddxo3s8an/image/upload/v1769738464/5d4605e7-76a3-413b-8a1c-20994db01a55.png"
  },
  {
    id: 10,
    title: "Academy Platform",
    url: "https://academy-indol-five.vercel.app",
    image: "https://res.cloudinary.com/ddxo3s8an/image/upload/v1769738489/a208c6ee-5f40-4e09-bd2c-2d53b1ef63de.png"
  },
  {
    id: 11,
    title: "Onzy Company",
    url: "https://onzycompany.bolt.host/",
    image: "https://res.cloudinary.com/ddxo3s8an/image/upload/v1769737166/1a2972db-6694-42c9-af0e-9b3e45d604c3.png"
  },
  {
    id: 12,
    title: "Victoria Delivery",
    url: "https://victoria-delivery.vercel.app",
    image: "https://res.cloudinary.com/ddxo3s8an/image/upload/v1769738591/b6d71430-f788-49b9-b317-2f687e21d4a2.png"
  }
];

type DeviceType = 'desktop' | 'tablet' | 'mobile';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Modal States
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Intersection Observer for Lazy Load com Fallback
  useEffect(() => {
    const fallbackTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallbackTimeout);
        }
      },
      { threshold: 0.05 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(fallbackTimeout);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handle Modal Open/Close Logic
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') closeModal();
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setDevice('desktop'); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); 
  };

  // Helper para renderizar o Modal via Portal (Fora da hierarquia da section z-index)
  const ProjectModal = () => {
    if (!isModalOpen || !selectedProject || !mounted) return null;

    return createPortal(
      <div className="fixed inset-0 z-[9999] bg-[#0a0a0a]/95 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
            
            {/* Modal Header */}
            <div className="h-[70px] bg-[#1a1a1a] border-b border-white/10 flex items-center justify-between px-4 md:px-8 relative z-[10000]">
                <button 
                    onClick={closeModal}
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-primary transition-colors group cursor-pointer"
                >
                    <div className="p-2 rounded-full group-hover:bg-white/5 transition-colors">
                        <ChevronLeft size={20} />
                    </div>
                    <span className="text-sm font-medium hidden sm:inline">Voltar para Projetos</span>
                </button>

                <div className="flex items-center gap-2 bg-[#0a0a0a] p-1 rounded-lg border border-white/5">
                    <button 
                      onClick={() => setDevice('desktop')} 
                      className={`p-2 rounded transition-all duration-300 cursor-pointer ${device === 'desktop' ? 'bg-blue-primary text-black' : 'text-gray-500 hover:text-white'}`}
                    >
                      <Monitor size={20} />
                    </button>
                    <button 
                      onClick={() => setDevice('tablet')} 
                      className={`p-2 rounded transition-all duration-300 cursor-pointer ${device === 'tablet' ? 'bg-blue-primary text-black' : 'text-gray-500 hover:text-white'}`}
                    >
                      <Tablet size={20} />
                    </button>
                    <button 
                      onClick={() => setDevice('mobile')} 
                      className={`p-2 rounded transition-all duration-300 cursor-pointer ${device === 'mobile' ? 'bg-blue-primary text-black' : 'text-gray-500 hover:text-white'}`}
                    >
                      <Smartphone size={20} />
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={closeModal} className="text-white hover:text-red-500 transition-colors p-2 cursor-pointer"><X size={24} /></button>
                </div>
            </div>

            {/* Modal Body */}
            <div className="h-[calc(100vh-70px)] w-full flex items-center justify-center p-4 md:p-8 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] to-[#0a0a0a]">
                <div 
                    className={`
                        relative bg-white transition-all duration-500 ease-in-out shadow-2xl overflow-hidden
                        ${device === 'desktop' ? 'w-full h-full max-w-[95%] max-h-[90%] rounded-lg' : ''}
                        ${device === 'tablet' ? 'w-[768px] h-[85%] rounded-[20px] border-[8px] border-[#2a2a2a]' : ''}
                        ${device === 'mobile' ? 'w-[375px] h-[667px] rounded-[30px] border-[10px] border-[#2a2a2a]' : ''}
                    `}
                >
                    <iframe 
                        src={selectedProject.url} 
                        title={`Preview of ${selectedProject.title}`}
                        className="w-full h-full border-0 bg-white"
                        sandbox="allow-scripts allow-same-origin" 
                    />
                </div>
            </div>

        </div>,
        document.body
    );
  };

  return (
    <>
      <div ref={sectionRef} className="container mx-auto px-6 min-h-full flex flex-col justify-center py-20 relative z-10">
        
        {/* Header - Opacity controlled by isVisible but renders layout space */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
           <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-widest uppercase">
              <span className="text-white/20 font-thin">ARTE</span>{" "}
              <span className="text-white font-thin">&</span>{" "}
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-300">
                INOVAÇÃO
              </span>
           </h2>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              onClick={() => openModal(project)}
              className={`
                group relative bg-[#1a1a1a] rounded-xl overflow-hidden cursor-pointer h-64
                transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(14,165,233,0.15)]
                border border-white/5 hover:border-blue-primary/30
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {isVisible ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover object-top w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
              ) : (
                  <div className="w-full h-full bg-[#141414] animate-pulse"></div>
              )}
              
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                  <button className="bg-blue-primary text-black font-bold py-3 px-8 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300 hover:bg-white hover:text-black">
                    Ver Página
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render Modal via Portal */}
      <ProjectModal />
    </>
  );
};

export default Projects;