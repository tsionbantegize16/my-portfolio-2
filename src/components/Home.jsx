import React from 'react';
import { FaFacebookF, FaGitlab, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-10 px-6 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-400 dark:to-primary-400 transition-all duration-700 ease-in-out">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-200/30 dark:bg-primary-300/20 blur-3xl animate-pulse"></div>
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-100/70 dark:bg-primary-300/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Right: Text (reversed) */}
        <div className="order-1 lg:order-2 text-center lg:text-left animate-slideInRight">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/70 dark:bg-primary-300/20 border border-primary-200/60 dark:border-primary-300/30 text-xs font-medium text-primary-400 dark:text-primary-50 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-300 animate-pulse"></span>
            Available for freelance projects
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-primary-400 dark:text-primary-50">
            Building delightful digital experiences
          </h1>
          <p className="mt-5 text-lg md:text-xl text-primary-400/90 dark:text-primary-50/90 max-w-2xl mx-auto lg:mx-0">
            I craft responsive, accessible, and high‑performance web apps using modern tech. Focused on clean code, beautiful UI, and seamless UX.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a href="#contact" className="btn-primary transform hover:scale-105 hover:shadow-xl">
              Let’s Work Together
            </a>
                         <a href="/my%20cv.pdf" download="my cv.pdf" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-200 dark:border-primary-300 text-primary-400 dark:text-primary-50 hover:bg-primary-100/70 dark:hover:bg-primary-300/10 transition-all">
              Download CV
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6">
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


        </div>

        {/* Left: Photo (reversed) */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start animate-slideInLeft">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-200/30 to-primary-300/30 blur-2xl animate-pulse"></div>
            {/* Image */}
            <img
              src="/photo.jpg"
              alt="Tsion Bantegize"
              className="relative w-full h-full rounded-full object-cover border-4 border-primary-200 dark:border-primary-300 shadow-2xl"/>
            {/* Floating badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-primary-100/90 dark:bg-primary-300/30 border border-primary-200/70 dark:border-primary-300/30 text-xs text-primary-400 dark:text-primary-50 shadow-md">
              Full‑Stack Developer
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="absolute bottom-6 left-0 right-0">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl">
          {[
            { label: 'Projects', value: '20+' },
            { label: 'Tech Stack', value: '15+' },
            { label: 'Clients', value: '5+' },
          ].map((stat, i) => (
            <div key={i} className="text-center px-4 py-3 rounded-xl bg-primary-50/80 dark:bg-primary-300/10 border border-primary-200/60 dark:border-primary-300/20 backdrop-blur-sm">
              <div className="text-2xl font-extrabold text-primary-400 dark:text-primary-50">{stat.value}</div>
              <div className="text-xs text-primary-400/80 dark:text-primary-50/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
