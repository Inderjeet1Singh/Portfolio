import React from "react";
import { skills } from "../Data/Data";
const Skills = () => {
  return (
    <div className="width-full flex items-center justify-center" id="skills">
      <div className="w-full max-w-4xl text-center p-10">
        <h2 className="text-3xl font-bold text-black mb-6 text-white">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`w-12 h-12 mb-2 ${
                  skill.name === "GitHub" ? "invert" : ""
                }`}
                loading="lazy"
              />
              <span className="text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
        <hr className="my-4 " />
      </div>
    </div>
  );
};

export default Skills;
