import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}