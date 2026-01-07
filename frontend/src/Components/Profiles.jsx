import React from "react";
import { profiles } from "../Data/Data.js";
const Profiles = () => {
  return (
    <section id="profiles" className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-white">
        <h2 className="text-3xl font-bold text-center mb-10">Profiles</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 border border-gray-700"
            >
              <img
                src={profile.logo}
                alt={profile.name}
                className="w-14 h-14 object-contain"
              />
              <span className="text-gray-200 font-semibold">
                {profile.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;
