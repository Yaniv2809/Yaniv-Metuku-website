import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/ui/CursorTrail";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ParticleBackground from "@/components/ui/ParticleBackground";
import KonamiEasterEgg from "@/components/ui/KonamiEasterEgg";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-primary/30 selection:text-primary">
      {/* Global interactive elements */}
      <CursorTrail />
      <ScrollProgress />
      <ParticleBackground />
      <KonamiEasterEgg />
      <ScrollToTop />

      {/* Pages */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
