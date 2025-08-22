import React from 'react';
import { FaFacebookF, FaGitlab, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative pt-10 pb-8 px-6 bg-primary-50 dark:bg-primary-400 transition-colors duration-700 ease-in-out">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200/70 dark:via-primary-300/20 to-transparent" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 dark:from-primary-50 dark:to-primary-200">Tsion Bantegize</h3>
            <p className="mt-2 text-sm text-primary-500/80 dark:text-primary-50/80 max-w-xs">Building delightful digital experiences with performance and accessibility in mind.</p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-start md:justify-center text-sm text-primary-500 dark:text-primary-50">
            <a href="#home" className="hover:text-primary-600 dark:hover:text-primary-200 transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-600 dark:hover:text-primary-200 transition-colors">About</a>
            <a href="#services" className="hover:text-primary-600 dark:hover:text-primary-200 transition-colors">Services</a>
            <a href="#skills" className="hover:text-primary-600 dark:hover:text-primary-200 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary-600 dark:hover:text-primary-200 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-200 transition-colors">Contact</a>
          </nav>

          {/* Socials */}
          <div className="flex md:justify-end gap-4">
            <a href="https://www.facebook.com/profile.php?id=61551880407217&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-icon hover:-translate-y-0.5 hover:text-primary-500 transition-transform">
              <FaFacebookF />
            </a>
            <a href="https://gitlab.com/tsionbantegize/" target="_blank" rel="noopener noreferrer" className="social-icon hover:-translate-y-0.5 hover:text-primary-500 transition-transform">
              <FaGitlab />
            </a>
            <a href="https://www.instagram.com/tsi_bantegize?igsh=MTdjZnJpMmtwd293Ng==" target="_blank" rel="noopener noreferrer" className="social-icon hover:-translate-y-0.5 hover:text-primary-500 transition-transform">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/tsion-bantegize-007780285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon hover:-translate-y-0.5 hover:text-primary-500 transition-transform">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-primary-200/60 dark:border-primary-300/20 flex flex-col md:flex-row items-center justify-between text-sm text-primary-500/80 dark:text-primary-50/70">
          <p>© {year} Tsion Bantegize. All rights reserved.</p>
          <a href="https://github.com/Tsion-Bantegize" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-200 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
