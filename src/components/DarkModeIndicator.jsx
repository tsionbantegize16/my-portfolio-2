import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useDarkMode } from '../contexts/DarkModeContext';

const DarkModeIndicator = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleDarkMode}
        className="relative p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl 
                   border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out 
                   group hover:scale-110"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className={`absolute inset-0 rounded-full transition-transform duration-500 ease-in-out ${
          darkMode ? 'rotate-180' : 'rotate-0'
        }`}>
          {darkMode ? (
            <FiSun className="text-yellow-500 text-xl group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <FiMoon className="text-gray-700 text-xl group-hover:scale-110 transition-transform duration-300" />
          )}
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-2 py-1 text-xs text-white bg-gray-900 dark:bg-gray-100 
                       dark:text-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                       pointer-events-none whitespace-nowrap">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </div>
      </button>
    </div>
  );
};

export default DarkModeIndicator; 