import React from "react";
import { data } from '../data';
export function Skills() {
  return (
    <section id="skills" className="py-12 fade-in">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.skills.map((skillGroup, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {skillGroup.items.map((item, i) => (
                <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}