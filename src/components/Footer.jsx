import React from 'react';
import { FaFacebookF, FaGitlab, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowUp, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-12 px-6 bg-slate-900 text-white transition-colors duration-300 overflow-hidden">
      {/* Accent Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-brand-500 to-emerald-500"></div>

      <div className="container mx-auto max-w-6xl relative z-10 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 via-brand-500 to-emerald-500 flex items-center justify-center text-white font-extrabold text-base shadow-md">
                TB
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Tsion Bantegize
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-normal">
              Full-Stack Engineer & UX Designer shaping user journeys, interface systems, and the frontend craft behind every KAB Digital Solution build.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-300">
            <a href="#home" className="hover:text-teal-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#services" className="hover:text-teal-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </nav>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-4">
            <div className="flex items-center gap-3">
              <a href="https://github.com/tsionbantegize" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:bg-slate-700 transition-all">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/tsion-bantegize-007780285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:bg-slate-700 transition-all">
                <FaLinkedinIn />
              </a>
              <a href="https://gitlab.com/tsionbantegize/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:bg-slate-700 transition-all">
                <FaGitlab />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61551880407217&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:bg-slate-700 transition-all">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/tsi_bantegize?igsh=MTdjZnJpMmtwd293Ng==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:bg-slate-700 transition-all">
                <FaInstagram />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              title="Back to Top"
            >
              <FiArrowUp className="text-lg" />
            </button>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {year} Tsion Bantegize. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <FiHeart className="text-red-500" /> React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
