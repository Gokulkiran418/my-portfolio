import React, { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

export function Navigation({ isDark, setIsDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navigation bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
      {/* Mobile Navbar: Hamburger and Theme Toggle */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden w-full">
        <button
          onClick={toggleMenu}
          className={`text-gray-800 dark:text-gray-200 focus:outline-none menu-icon ${isMenuOpen ? 'active' : ''}`}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <button
          onClick={() => setIsDark(!isDark)}
          className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-between px-4 py-3 w-full gap-4">
          <ul className="flex space-x-8 flex-nowrap">
            <li className="mobile-menu-item">
              <a
                href="#hero"
                className="text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li className="mobile-menu-item">
              <a
                href="#projects"
                className="text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li className="mobile-menu-item">
              <a
                href="#skills"
                className="text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li className="mobile-menu-item">
              <a
                href="#certificates"
                className="text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Certificates
              </a>
            </li>
            <li className="mobile-menu-item">
              <a
                href="#education"
                className="text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Education
              </a>
            </li>
            <li className="mobile-menu-item">
              <a
                href="#links"
                className="text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Links
              </a>
            </li>
            <li className="mobile-menu-item">
              <a
                href="#contact"
                className="text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>

        <button
          onClick={() => setIsDark(!isDark)}
          className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`flex flex-col space-y-4 px-4 py-3 md:hidden mobile-menu ${isMenuOpen ? 'open' : ''}`}
      >
        <li className="mobile-menu-item">
          <a
            href="#hero"
            className="text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Home
          </a>
        </li>
        <li className="mobile-menu-item">
          <a
            href="#projects"
            className="text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Projects
          </a>
        </li>
        <li className="mobile-menu-item">
          <a
            href="#skills"
            className="text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Skills
          </a>
        </li>
        <li className="mobile-menu-item">
          <a
            href="#certificates"
            className="text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Certificates
          </a>
        </li>
        <li className="mobile-menu-item">
          <a
            href="#education"
            className="text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Education
          </a>
        </li>
        <li className="mobile-menu-item">
          <a
            href="#links"
            className="text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Links
          </a>
        </li>
        <li className="mobile-menu-item">
          <a
            href="#contact"
            className="text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}