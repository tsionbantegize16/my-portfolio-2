import React, { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaGitlab, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Home = () => {
  const [stats, setStats] = useState({ projects: 0, stack: 0, clients: 0 });
  const statsRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            // Animate counts
            const animate = (key, target, duration = 1200) => {
              const start = performance.now();
              const step = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const value = Math.floor(progress * target);
                setStats((s) => ({ ...s, [key]: value }));
                if (progress < 1) requestAnimationFrame(step);
              };
              requestAnimationFrame(step);
            };
            animate('projects', 20);
            animate('stack', 15);
            animate('clients', 5);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-6 md:pt-10 pb-10 md:pb-12 px-5 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-400 dark:to-primary-400 transition-all duration-700 ease-in-out">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-200/30 dark:bg-primary-300/20 blur-3xl animate-pulse"></div>
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-100/70 dark:bg-primary-300/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-8 md:gap-y-10 lg:gap-y-0 lg:gap-x-14 items-center relative z-10">
        {/* Right: Text (reversed) */}
        <div className="order-2 lg:order-2 text-center lg:text-left lg:ml-8 lg:max-w-xl animate-slideInRight">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-primary-100/70 dark:bg-primary-300/20 border border-primary-200/60 dark:border-primary-300/30 text-[10px] font-medium text-primary-400 dark:text-primary-50 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-primary-300 animate-pulse"></span>
            Available for freelance projects
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 dark:from-primary-50 dark:to-primary-200">
            Building delightful digital experiences
          </h1>
          <p className="mt-3 text-base md:text-lg text-white/90 max-w-2xl mx-auto lg:mx-0">
            Front-end developer focused on speed, accessibility, and polished UI. I turn ideas into reliable products with modern React and thoughtful design.
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
            <a href="#contact" className="btn-primary transform hover:scale-105 hover:shadow-xl">
              Let’s Work Together
            </a>
            <a href="/my%20cv.pdf" download="my cv.pdf" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-200 dark:border-primary-300 text-primary-400 dark:text-primary-50 hover:bg-primary-100/70 dark:hover:bg-primary-300/10 hover:shadow-md transition-all">
              Download CV
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6">
          <a href="https://github.com/tsionbantegize" target="_blank" rel="noopener noreferrer" className="social-icon hover:-translate-y-0.5 transition-transform" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/tsion-bantegize-007780285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon hover:-translate-y-0.5 transition-transform" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61551880407217&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-icon hover:-translate-y-0.5 transition-transform" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://gitlab.com/tsionbantegize/" target="_blank" rel="noopener noreferrer" className="social-icon hover:-translate-y-0.5 transition-transform" aria-label="GitLab">
              <FaGitlab />
            </a>
            <a href="https://www.instagram.com/tsi_bantegize?igsh=MTdjZnJpMmtwd293Ng==" target="_blank" rel="noopener noreferrer" className="social-icon hover:-translate-y-0.5 transition-transform" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>


        </div>

        {/* Left: Photo (reversed) */}
        <div className="order-1 lg:order-1 flex justify-center lg:justify-start lg:ml-4 animate-slideInLeft">
          <div className="relative group w-64 md:w-80 lg:w-[22rem] aspect-[4/5]">
            {/* Gradient frame */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary-200/70 to-primary-300/50 blur opacity-70 group-hover:opacity-90 transition"></div>
            {/* Card */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-primary-200/70 dark:border-primary-300/30 bg-white/80 dark:bg-primary-300/10 shadow-xl transition-all duration-300 ease-out group-hover:shadow-2xl group-hover:-translate-y-1">
              <img
                src="/photo.jpg"
                alt="Tsion Bantegize"
                className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
              {/* Top-left badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-100/90 dark:bg-primary-300/30 border border-primary-200/70 dark:border-primary-300/30 text-[10px] font-semibold text-primary-400 dark:text-primary-50 shadow-sm">
                Front‑End Developer
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div ref={statsRef} className="absolute bottom-4 left-0 right-0">
        <div className="container mx-auto grid grid-cols-3 gap-2 max-w-md">
          {[
            { label: 'Projects', key: 'projects', suffix: '+' },
            { label: 'Tech Stack', key: 'stack', suffix: '+' },
            { label: 'Clients', key: 'clients', suffix: '+' },
          ].map((stat, i) => (
            <div key={i} className="text-center px-3 py-2 rounded-lg bg-primary-50/80 dark:bg-primary-300/10 border border-primary-200/60 dark:border-primary-300/20 backdrop-blur-sm">
              <div className="text-xl font-extrabold text-primary-400 dark:text-primary-50">{stats[stat.key]}{stat.suffix}</div>
              <div className="text-[10px] tracking-wide text-primary-400/80 dark:text-primary-50/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
