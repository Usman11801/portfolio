import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import AICapabilities from "./components/AICapabilities";
import Industries from "./components/Industries";
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
        <Projects />
        <AICapabilities />
        <Industries />
        <FreeDemo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
