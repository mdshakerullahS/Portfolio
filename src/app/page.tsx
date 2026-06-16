import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Niche from "@/components/Niche";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Trust from "@/components/Trust";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Niche />
        <Projects />
        <About />
        <Services />
        <Skills />
        <Process />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
