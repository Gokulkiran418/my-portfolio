import React from "react";
import { data } from '../data';
export function Certificates() {
  return (
    <section id="certificates" className="py-12 fade-in">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Certificates</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <ul className="list-none space-y-2">
          {data.certificates.map((cert, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center">
              <i className="fas fa-certificate mr-2 text-blue-500 dark:text-blue-300"></i>
              {cert.name} - {cert.issuer} ({cert.date})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}