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

      {/* Nova sessão adicionada antes de Projects */}
      <Showcase />

      <section id="projects" className="section-min-height">
        <Projects />
      </section>

      <section id="contact" className="section-min-height">
        <Contact />
      </section>
    </main>
  );
}