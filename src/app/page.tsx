import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import CursorTrail from "@/components/ui/CursorTrail";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ParticleBackground from "@/components/ui/ParticleBackground";
import KonamiEasterEgg from "@/components/ui/KonamiEasterEgg";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-primary/30 selection:text-primary">
      {/* Global interactive elements */}
      <CursorTrail />
      <ScrollProgress />
      <ParticleBackground />
      <KonamiEasterEgg />

      {/* Pages */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      {/* Simple Footer directly in page for now */}
      <footer className="py-8 text-center border-t border-gray-800/50 mt-20 relative z-10 glass-panel">
        <p className="font-mono text-sm text-gray-500">
          Built with Next.js, Tailwind & AI. <br className="md:hidden" />
          <span className="hidden md:inline"> | </span>
          All systems operational.
        </p>
      </footer>
    </main>
  );
}

