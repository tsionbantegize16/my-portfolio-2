import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useDarkMode } from '../contexts/DarkModeContext';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll spy to highlight active section
  useEffect(() => {
    const handler = () => {
      const offsets = navItems.map(item => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Number.POSITIVE_INFINITY };
        const rect = el.getBoundingClientRect();
        return { id: item.id, top: Math.abs(rect.top - 100) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].id);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleNavLinkClick = () => setIsOpen(false);

  if (!mounted) {
    return (
      <header className="fixed w-full top-0 left-0 z-50 bg-primary-50/95 dark:bg-primary-400/95 shadow-md transition-all duration-300 ease-in-out">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="group inline-flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-tight text-primary-400 dark:text-primary-50">Tsion Bantegize</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary-300 dark:text-primary-200">Front-End Developer</span>
          </a>
        </nav>
      </header>
    );
  }

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-primary-50/85 dark:bg-primary-400/85 backdrop-blur-xl shadow-lg">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand */}
        <a href="#home" className="group inline-flex flex-col leading-tight">
          <span className="text-lg md:text-xl font-semibold tracking-tight text-primary-400 dark:text-primary-50 group-hover:text-primary-300 transition-colors">Tsion Bantegize</span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary-300 dark:text-primary-200">Front-End Developer</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 
                ${active === item.id ? 'text-primary-50 bg-primary-300/80' : 'text-primary-400 hover:text-primary-300 hover:bg-primary-100'}`}
            >
              {item.label}
              <span className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full transition-all duration-300 ${active === item.id ? 'bg-primary-50 scale-x-100' : 'bg-transparent scale-x-0'}`}></span>
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-3 relative inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary-100 dark:bg-primary-300/40 border border-primary-200/60 dark:border-primary-300/40 shadow-sm hover:shadow-md transition-all"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div className={`transition-transform duration-500 ${darkMode ? 'rotate-180' : 'rotate-0'}`}>
              {darkMode ? (
                <FiSun className="text-primary-200 text-xl" />
              ) : (
                <FiMoon className="text-primary-400 text-xl" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="relative w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-300/40 border border-primary-200/60 dark:border-primary-300/40 grid place-items-center"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div className={`transition-transform duration-500 ${darkMode ? 'rotate-180' : 'rotate-0'}`}>
              {darkMode ? (
                <FiSun className="text-primary-200 text-lg" />
              ) : (
                <FiMoon className="text-primary-400 text-lg" />
              )}
            </div>
          </button>
          <button
            onClick={toggleMenu}
            className="w-10 h-10 rounded-full text-primary-400 grid place-items-center hover:bg-primary-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-primary-50/95 dark:bg-primary-400/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="py-2">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={handleNavLinkClick}
                className="block px-6 py-3 text-primary-400 dark:text-primary-50 hover:bg-primary-100/70 dark:hover:bg-primary-300/20 transition-colors border-b border-primary-100/70 dark:border-primary-300/30"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;