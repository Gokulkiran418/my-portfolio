import React from "react";
import { data } from '../data';
export function Education() {
  return (
    <section id="education" className="py-12 fade-in">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Education</h2>
      {data.education.map((edu, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl mb-6"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{edu.degree}</h3>
          <p className="text-gray-500 dark:text-gray-400">{edu.institution} ({edu.date})</p>
          <p className="text-gray-500 dark:text-gray-400">{edu.CGPA}</p>
        </div>
      ))}
    </section>
  );
}