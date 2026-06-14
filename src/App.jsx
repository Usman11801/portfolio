import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AICapabilities from "./components/AICapabilities";
import Industries from "./components/Industries";
import Experience from "./components/Experience";
import FreeDemo from "./components/FreeDemo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";

export default function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Projects />
        <AICapabilities />
        <Industries />
        <Experience />
        <FreeDemo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
