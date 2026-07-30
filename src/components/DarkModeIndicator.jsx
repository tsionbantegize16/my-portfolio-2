import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiArrowUp } from 'react-icons/fi';
import { useDarkMode } from '../contexts/DarkModeContext';

const DarkModeIndicator = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Back to top button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-500 text-white shadow-xl hover:scale-110 transition-all duration-300 grid place-items-center animate-fadeIn"
          aria-label="Back to top"
        >
          <FiArrowUp className="text-xl" />
        </button>
      )}

      {/* Floating Theme Toggle */}
      <button
        onClick={toggleDarkMode}
        className="w-12 h-12 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur border border-slate-200 dark:border-slate-800 shadow-xl hover:scale-110 transition-all duration-300 grid place-items-center group"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? (
          <FiSun className="text-amber-400 text-xl group-hover:rotate-45 transition-transform duration-300" />
        ) : (
          <FiMoon className="text-slate-800 text-xl group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </button>
    </div>
  );
};

export default DarkModeIndicator; 