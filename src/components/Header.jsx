import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'; // Icons for menu and dark mode
import { useDarkMode } from '../contexts/DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu open/close
  const [mounted, setMounted] = useState(false); // Prevent hydration mismatch

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <header className="fixed w-full top-0 left-0 z-50 bg-white dark:bg-gray-950 shadow-md transition-all duration-300 ease-in-out">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300">
            Tsi
          </a>
        </nav>
      </header>
    );
  }

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-primary-50/95 dark:bg-primary-400/95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-primary-200 dark:text-primary-200 hover:text-primary-300 dark:hover:text-primary-100 transition-colors duration-300">
          Tsi
        </a>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className="relative p-2 rounded-full bg-primary-100 dark:bg-primary-400 hover:bg-primary-200 dark:hover:bg-primary-300 transition-all duration-300 ease-in-out group"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div className={`absolute inset-0 rounded-full transition-transform duration-500 ease-in-out ${
              darkMode ? 'rotate-180' : 'rotate-0'
            }`}>
              {darkMode ? (
                <FiSun className="text-primary-200 text-xl group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <FiMoon className="text-primary-400 text-xl group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
          </button>
          <button 
            onClick={toggleMenu} 
            className="text-primary-400 dark:text-primary-100 focus:outline-none text-2xl p-2 rounded-full hover:bg-primary-100 dark:hover:bg-primary-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex items-center space-x-8">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#portfolio" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
          <li>
            <button 
              onClick={toggleDarkMode} 
              className="relative p-2 rounded-full bg-primary-100 dark:bg-primary-400 hover:bg-primary-200 dark:hover:bg-primary-300 transition-all duration-300 ease-in-out group"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <div className={`absolute inset-0 rounded-full transition-transform duration-500 ease-in-out ${
                darkMode ? 'rotate-180' : 'rotate-0'
              }`}>
                {darkMode ? (
                  <FiSun className="text-primary-200 text-xl group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <FiMoon className="text-primary-400 text-xl group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <ul className="py-2">
          <li><a href="#home" onClick={handleNavLinkClick} className="block px-6 py-3 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">Home</a></li>
          <li><a href="#about" onClick={handleNavLinkClick} className="block px-6 py-3 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">About</a></li>
          <li><a href="#skills" onClick={handleNavLinkClick} className="block px-6 py-3 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">Skills</a></li>
          <li><a href="#services" onClick={handleNavLinkClick} className="block px-6 py-3 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">Services</a></li>
          <li><a href="#portfolio" onClick={handleNavLinkClick} className="block px-6 py-3 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">Projects</a></li>
          <li><a href="#contact" onClick={handleNavLinkClick} className="block px-6 py-3 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors duration-300">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;