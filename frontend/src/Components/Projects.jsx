import React from "react";
import OpenHammerPro from "../assets/OpenHammerPro.jpg";
import CureNowPro from "../assets/CureNowPro.jpg";
import PortFolioPro from "../assets/PortFolioPro.jpg";

const projectsData = [
  {
    title: "Doctor Appointment Booking System",
    description:
      "A full-stack doctor appointment booking system built with React, Node.js, and MongoDB.",
    image: CureNowPro,
    github: "https://github.com/Inderjeet1Singh/CureNow",
    live: "https://curenow.netlify.app/",
  },
  {
    title: "Online Auction Platform",
    description:
      "An online auction platform allowing users to bid on products in real-time, built with React and Node.js.",
    image: OpenHammerPro,
    github: "https://github.com/Open-Hammer/OpenHammer",
    live: "https://github.com/Open-Hammer/OpenHammer",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and skills, built using React and Tailwind CSS.",
    image: PortFolioPro,
    github: "https://github.com/Inderjeet1Singh/Portfolio",
    live: "https://github.com/Inderjeet1Singh/Portfolio",
  },
];

const Projects = () => {
  return (
    <section className="py-12 " id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          My Projects
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={`${project.title} Thumbnail`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
                <div className="mt-6 flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded transition"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-green-600 hover:bg-green-500 text-white font-medium py-2 rounded transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
