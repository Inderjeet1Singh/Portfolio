import React, { useState } from "react";
import Logo from "../assets/Logo2.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="bg-gray-900/90 backdrop-blur-md fixed w-full z-50 top-0 left-0 border-b border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-3">
          <img src={Logo} className="h-12" alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="relative text-gray-300 hover:text-white font-medium transition-colors group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Download CV */}
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg px-6 py-6 space-y-6 shadow-lg border-t border-gray-700">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block text-gray-300 hover:text-white font-medium transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* Mobile CV Button */}
          <a
            href="/resume.pdf"
            download
            className="block text-center px-5 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
