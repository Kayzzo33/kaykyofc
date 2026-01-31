import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Showcase from '@/components/sections/Showcase';
import PerformanceMetrics from '@/components/sections/PerformanceMetrics';

// Dynamic Import para reduzir o tempo de bloqueio da thread principal (Lighthouse)
// O background de partículas é pesado e não essencial para o LCP (First Paint)
const ParticleBackground = dynamic(() => import('@/components/animations/ParticleBackground'), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#050505] -z-10" /> 
});

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden flex-auto flex flex-col">
      <div className="fixed inset-0 z-0 pointer-events-none">
         <ParticleBackground />
      </div>

      <section id="home" className="section-min-height">
        <Hero />
      </section>

      <section id="about" className="section-min-height bg-gradient-to-b from-transparent to-black/20">
        <About />
      </section>

      <section id="skills" className="section-min-height">
        <Skills />
      </section>

      {/* Showcase é z-20 internamente */}
      <Showcase />

      {/* 
        CORREÇÃO CRÍTICA:
        Adicionado z-30 e bg-bg-primary (#050505).
        Isso força a sessão de Projetos a ficar EM CIMA da sessão de Showcase 
        quando o scroll acontece, corrigindo o problema de sobreposição.
      */}
      <section id="projects" className="section-min-height relative z-30 bg-bg-primary">
        <Projects />
      </section>

      {/* Nova Sessão de Performance com Z-Index mantido para evitar overlap com o Showcase anterior */}
      <section id="performance" className="relative z-30 bg-bg-primary">
        <PerformanceMetrics />
      </section>

      <section id="contact" className="section-min-height relative z-30 bg-bg-primary">
        <Contact />
      </section>
    </main>
  );
}