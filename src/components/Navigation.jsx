import React from 'react';

export function Navigation({ isDark, setIsDark }) {
  return (
    <div className="navigation bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
      <ul className="flex space-x-4 md:space-x-8 flex-nowrap">
        <li><a href="#hero" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Home</a></li>
        <li><a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Skills</a></li>
        <li><a href="#certificates" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Certificates</a></li>
        <li><a href="#education" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Education</a></li>
        <li><a href="#links" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Links</a></li>
        <li><a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Contact</a></li>
        <li>
          <button
            onClick={() => setIsDark(!isDark)}
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          >
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </li>
      </ul>
    </div>
  );
}