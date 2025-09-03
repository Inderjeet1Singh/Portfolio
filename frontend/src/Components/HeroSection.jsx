import React from "react";
import { ArrowDownToLine, Send } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { FaYoutube } from "react-icons/fa";
import image from "../assets/inderjeet.jpg";
import resume from "../assets/inderjeet.pdf";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] pt-20 flex flex-col md:flex-row items-center justify-center text-white px-4 md:px-16 lg:px-32"
    >
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Inderjeet
          </span>
        </h1>

        {/* Typing Effect */}
        <h2 className="text-xl md:text-2xl text-gray-400 font-medium">
          <Typewriter
            words={[
              "A Software Developer",
              "Passionate Coder",
              "Content Creator",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-gray-300 max-w-xl">
          I love building modern, scalable web applications and bringing ideas
          to life with clean code and beautiful UI/UX.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href={resume}
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <ArrowDownToLine size={20} />
            Download CV
          </a>
          <a
            href="https://www.youtube.com/@NitianInder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-600 font-semibold hover:bg-gray-800 transition duration-300"
          >
            <FaYoutube size={20} color="#FF0000" /> YouTube
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center mt-12 md:mt-0">
        <img
          src={image}
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-gray-700 shadow-xl object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default HeroSection;
