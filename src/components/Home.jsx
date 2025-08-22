import React from 'react';
import { FaFacebookF, FaGitlab, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Updated icons for consistency

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 pb-12 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-center md:text-left transition-all duration-700 ease-in-out">
      <div className="social flex md:flex-col space-x-6 md:space-x-0 md:space-y-6 mb-8 md:mb-0 md:mr-12 animate-slideInLeft">
        <a href="https://www.facebook.com/profile.php?id=61551880407217&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebookF />
        </a>
        <a href="https://gitlab.com/tsionbantegize/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGitlab />
        </a>
        <a href="https://www.instagram.com/tsi_bantegize?igsh=MTdjZnJpMmtwd293Ng==" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/tsion-bantegize-007780285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedinIn />
        </a>
      </div>

      <div className="home-img mb-10 md:mb-0 md:mr-16 animate-zoomIn">
        {/* Placeholder image. Replace with your actual photo.jpg in the public folder */}
        <img src="/photo.jpg" alt="Tsion Bantegize" className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-blue-300 dark:border-blue-700 transform hover:scale-105 transition-transform duration-500 ease-in-out" />
      </div>

      <div className="home-text animate-slideInRight">
        <span className="text-xl text-gray-700 dark:text-gray-300 font-medium">Hello, I'm</span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mt-2 leading-tight">Tsion Bantegize</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-blue-600 dark:text-blue-400 mt-2 mb-4">Full-Stack Developer</h2>
        <p className="max-w-xl mx-auto md:mx-0 text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          I am a dedicated and motivated individual with a passion for full-stack development, who loves crafting seamless user experiences and building innovative solutions that push boundaries.
        </p>
        <a href="#contact" className="btn-primary transform hover:scale-105 hover:shadow-xl">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
