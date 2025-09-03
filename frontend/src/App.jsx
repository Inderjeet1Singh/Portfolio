import Contact from "./Components/Contact";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "./index.css";
function App() {
  return (
    <div className="flex flex-col  bg-gradient-to-br from-black via-gray-900 to-black to-black">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
