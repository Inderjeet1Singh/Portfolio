import React from "react";

const Skills = () => {
  return (
    <div className="width-full min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-4xl text-center p-10">
        <h2 className="text-3xl font-bold text-black mb-6 text-white">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              alt="C++"
              className="w-12 h-12 mb-2"
            />
            <span className="text-gray-300">C++</span>
          </div>

          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              className="w-12 h-12 mb-2"
            />
            <span className="text-gray-300">HTML5</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              className="w-12 h-12 mb-2"
            />
            <span className="text-gray-300">CSS3</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="w-12 h-12 mb-2"
            />
            <span className="text-gray-300">JavaScript</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="w-12 h-12 mb-2"
            />
            <span className="text-gray-300">React.js</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              className="w-12 h-12 mb-2"
            />
            <span className="text-gray-300">Node.js</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="Express.js"
              className="w-12 h-12 mb-2"
            />
            <span className="text-gray-300">Express.js</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
              alt="TailwindCSS"
              className="w-12 h-12 mb-2"
            />
            <span className="text-gray-300">TailwindCSS</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="Redux"
              className="w-12 h-12 mb-2"
            />
            <span className="text-gray-300">Redux</span>
          </div>

          <div className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-12 h-12 mb-2 invert"
            />
            <span className="text-gray-300">GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
