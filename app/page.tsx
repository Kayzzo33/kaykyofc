import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import ParticleBackground from '@/components/animations/ParticleBackground';

export default function Home() {
  return (
    <main className="snap-container relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
         <ParticleBackground />
      </div>

      <section id="home" className="snap-section">
        <Hero />
      </section>

      <section id="about" className="snap-section bg-gradient-to-b from-transparent to-black/20">
        <About />
      </section>

      <section id="skills" className="snap-section">
        <Skills />
      </section>

      <section id="projects" className="snap-section">
        <div className="h-full w-full overflow-y-auto">
             {/* Wraps projects to allow internal scroll if content is too long, or fits in 100vh */}
            <Projects />
        </div>
      </section>

      <section id="contact" className="snap-section">
        <Contact />
      </section>
    </main>
  );
}