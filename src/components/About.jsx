import React from 'react';
import { FiUser, FiPhone, FiMail, FiAward, FiBriefcase, FiCheckCircle } from 'react-icons/fi';

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

        <div className="about-container grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8">
          {/* Image */}
          <div className="about-img flex justify-center md:justify-start animate-slideInLeft">
            <div className="relative group w-72 md:w-96 aspect-[4/5]">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary-200/70 to-primary-300/50 blur opacity-70 group-hover:opacity-90 transition"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-primary-200/70 dark:border-primary-300/30 bg-white/80 dark:bg-primary-300/10 shadow-xl transition-all duration-300 ease-out group-hover:shadow-2xl group-hover:-translate-y-1">
                <img src="/photo_2.jpg" alt="Tsion Bantegize" className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-100/90 dark:bg-primary-300/30 border border-primary-200/70 dark:border-primary-300/30 text-[10px] font-semibold text-primary-400 dark:text-primary-50 shadow-sm">
                  Full‑Stack Developer
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text text-center md:text-left animate-slideInRight">
            <p className="text-base md:text-lg leading-relaxed text-primary-500 dark:text-white/90 mb-6">
              I am currently studying Software Engineering at Bahirdar University, where I’ve built a strong foundation in computer science, programming, algorithms, and software development. I actively seek practical experience through independent and collaborative projects, refining my skills in both software development and UX/UI design. My goal is to create intuitive, impactful digital experiences.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <li className="flex items-start gap-2 text-primary-500 dark:text-primary-50">
                <FiCheckCircle className="mt-1 shrink-0" />
                <span>Clean, maintainable, and scalable code</span>
              </li>
              <li className="flex items-start gap-2 text-primary-500 dark:text-primary-50">
                <FiCheckCircle className="mt-1 shrink-0" />
                <span>Beautiful UI with accessible UX</span>
              </li>
              <li className="flex items-start gap-2 text-primary-500 dark:text-primary-50">
                <FiCheckCircle className="mt-1 shrink-0" />
                <span>Modern React, Tailwind CSS, and best practices</span>
              </li>
              <li className="flex items-start gap-2 text-primary-500 dark:text-primary-50">
                <FiCheckCircle className="mt-1 shrink-0" />
                <span>Always learning and iterating</span>
              </li>
            </ul>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="group rounded-xl border border-primary-200/60 dark:border-primary-300/20 bg-white/70 dark:bg-primary-300/10 backdrop-blur-sm p-4 text-primary-500 dark:text-primary-50 transition-all hover:-translate-y-1 hover:shadow-lg">
                <FiUser className="text-lg mb-1" />
                <div className="text-xs opacity-80">Name</div>
                <div className="font-semibold">Tsion Bantegize</div>
              </div>
              <div className="group rounded-xl border border-primary-200/60 dark:border-primary-300/20 bg-white/70 dark:bg-primary-300/10 backdrop-blur-sm p-4 text-primary-500 dark:text-primary-50 transition-all hover:-translate-y-1 hover:shadow-lg">
                <FiPhone className="text-lg mb-1" />
                <div className="text-xs opacity-80">Phone</div>
                <div className="font-semibold">+251 995 220 266</div>
              </div>
              <div className="group rounded-xl border border-primary-200/60 dark:border-primary-300/20 bg-white/70 dark:bg-primary-300/10 backdrop-blur-sm p-4 text-primary-500 dark:text-primary-50 transition-all hover:-translate-y-1 hover:shadow-lg">
                <FiMail className="text-lg mb-1" />
                <div className="text-xs opacity-80">Email</div>
                <div className="font-semibold break-all">tsionbantegize@gmail.com</div>
              </div>
            </div>

            {/* Badges / extras */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-primary-500 dark:text-primary-50">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100/70 dark:bg-primary-300/20 border border-primary-200/60 dark:border-primary-300/30 text-xs">
                <FiBriefcase /> 2+ Years building projects
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100/70 dark:bg-primary-300/20 border border-primary-200/60 dark:border-primary-300/30 text-xs">
                <FiAward /> Focused on quality & performance
              </span>
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
