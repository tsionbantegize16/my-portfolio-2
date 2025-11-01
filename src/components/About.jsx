import React from 'react';
import { FiAward, FiBriefcase, FiCheckCircle, FiCpu, FiLayers, FiMonitor, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="relative py-16 px-6 bg-primary-50 dark:bg-primary-400 transition-colors duration-700 ease-in-out overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary-100/60 dark:bg-primary-300/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-primary-200/50 dark:bg-primary-300/10 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="heading text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 dark:from-primary-50 dark:to-primary-200 animate-fadeInUp">
            About Me
          </h2>
          <span className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary-100/70 dark:bg-primary-300/20 border border-primary-200/60 dark:border-primary-300/30 text-primary-400 dark:text-primary-50 animate-fadeInUp delay-100">
            Introduction
          </span>
        </div>

        <div className="about-container grid grid-cols-1 md:grid-cols-2 items-start gap-8 lg:gap-12">
          {/* Image */}
          <div className="about-img flex justify-center md:justify-start lg:justify-center animate-slideInLeft">
            <div className="relative group w-64 md:w-80 lg:w-[22rem] aspect-[4/5]">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary-200/70 to-primary-300/50 blur opacity-70 group-hover:opacity-90 transition"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-primary-200/70 dark:border-primary-300/30 bg-white/80 dark:bg-primary-300/10 shadow-xl transition-all duration-300 ease-out group-hover:shadow-2xl group-hover:-translate-y-1">
                <img src="/tsion.jpg" alt="Tsion Bantegize" className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text text-center md:text-left animate-slideInRight lg:pl-4">
            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary-100/80 dark:bg-primary-300/20 border border-primary-200/60 dark:border-primary-300/30 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-300 dark:text-primary-200">
              Tsion Bantegize — Front-End Developer
            </span>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-primary-500 dark:text-white/90">
              I’m a dedicated front-end developer who loves turning complex ideas into simple, engaging digital experiences. I focus on crafting clean, responsive, and accessible interfaces that blend thoughtful design with solid functionality.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-primary-500 dark:text-white/90">
              Beyond development, I enjoy designing user-centred interfaces that connect visuals with usability—pairing creativity and logic to deliver meaningful products. My curiosity pulls me toward fintech, AI, and edtech, where careful design can make technology feel more human.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-8">
              <div className="rounded-2xl border border-primary-200/60 dark:border-primary-300/20 bg-white/70 dark:bg-primary-300/10 backdrop-blur-sm p-5 text-left">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-300 dark:text-primary-200 mb-2">How I Work</h3>
                <p className="text-sm text-primary-500 dark:text-primary-50">Design-led discovery, structured code, and smooth collaboration. I aim for scalable, maintainable solutions built with clarity and purpose.</p>
              </div>
              <div className="rounded-2xl border border-primary-200/60 dark:border-primary-300/20 bg-white/70 dark:bg-primary-300/10 backdrop-blur-sm p-5 text-left">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-300 dark:text-primary-200 mb-2">What Excites Me</h3>
                <p className="text-sm text-primary-500 dark:text-primary-50">Creating secure and intuitive fintech dashboards, humanising AI tools, and developing high-performance front ends that empower users.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="#projects" className="btn-primary hover:shadow-xl hover:scale-105 transition-transform">View Projects</a>
              <a href="/my%20cv.pdf" download="my cv.pdf" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-200 dark:border-primary-300 text-primary-400 dark:text-primary-50 hover:bg-primary-100/70 dark:hover:bg-primary-300/10 hover:shadow-md transition-all">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
