import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import "./index.css";
function App() {
  return (
    <div className="flex flex-col my-4 bg-black h-screen">
      <Navbar />
      <Skills />
    </div>
  );
}

export default App;
