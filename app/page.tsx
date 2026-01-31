import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Showcase from '@/components/sections/Showcase';
import ParticleBackground from '@/components/animations/ParticleBackground';

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

      <section id="contact" className="section-min-height relative z-30 bg-bg-primary">
        <Contact />
      </section>
    </main>
  );
}