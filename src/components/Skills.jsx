import React, { useState, useRef, useEffect } from 'react';
import { FiCode, FiCpu, FiDatabase, FiLayers, FiLock, FiSmartphone, FiTerminal, FiZap, FiShield, FiCreditCard, FiPlay, FiPause, FiChevronLeft, FiChevronRight, FiSliders } from 'react-icons/fi';
import { FaReact, FaVuejs, FaNodeJs, FaGitAlt, FaFigma, FaDocker, FaJsSquare, FaPython } from 'react-icons/fa';

const categories = ['All', 'Fintech & Banking', 'Full-Stack Engineering', 'Architecture & DevOps', 'Tools & Design'];

const skillsData = [
  { name: 'Payment Gateways & APIs', category: 'Fintech & Banking', level: 92, icon: FiCreditCard, color: '#14b8a6' },
  { name: 'Digital Lending Workflows', category: 'Fintech & Banking', level: 90, icon: FiZap, color: '#0d9488' },
  { name: 'Agency Banking Systems', category: 'Fintech & Banking', level: 88, icon: FiShield, color: '#10B981' },
  { name: 'Secure Financial Processing', category: 'Fintech & Banking', level: 90, icon: FiLock, color: '#22a0a2' },

  { name: 'React.js & Next.js', category: 'Full-Stack Engineering', level: 94, icon: FaReact, color: '#14b8a6' },
  { name: 'Vue.js & Nuxt.js', category: 'Full-Stack Engineering', level: 90, icon: FaVuejs, color: '#10B981' },
  { name: 'Node.js & Express APIs', category: 'Full-Stack Engineering', level: 88, icon: FaNodeJs, color: '#0d9488' },
  { name: 'TypeScript & JavaScript', category: 'Full-Stack Engineering', level: 92, icon: FaJsSquare, color: '#F7DF1E' },
  { name: 'Tailwind & Design Systems', category: 'Full-Stack Engineering', level: 95, icon: FiLayers, color: '#14b8a6' },
  { name: 'GraphQL & REST APIs', category: 'Full-Stack Engineering', level: 88, icon: FiDatabase, color: '#22a0a2' },
  { name: 'PostgreSQL & Hasura', category: 'Full-Stack Engineering', level: 85, icon: FiDatabase, color: '#0f766e' },

  { name: 'Enterprise Architecture', category: 'Architecture & DevOps', level: 88, icon: FiCpu, color: '#14b8a6' },
  { name: 'Microservices Systems', category: 'Architecture & DevOps', level: 85, icon: FiLayers, color: '#0d9488' },
  { name: 'Docker & Containers', category: 'Architecture & DevOps', level: 75, icon: FaDocker, color: '#22a0a2' },

  { name: 'Figma & UI Systems', category: 'Tools & Design', level: 90, icon: FaFigma, color: '#F24E1E' },
  { name: 'Git & GitHub Workflows', category: 'Tools & Design', level: 92, icon: FaGitAlt, color: '#F05032' },
  { name: 'Postman API Testing', category: 'Tools & Design', level: 88, icon: FiTerminal, color: '#14b8a6' },
];

const skillHighlights = [
  {
    title: 'Fintech & Banking Infrastructure',
    description: 'Digital lending rails, payment gateway integrations, agency banking interfaces, and high-volume financial data pipelines.',
    icon: FiCreditCard,
  },
  {
    title: 'Full-Stack Web & Mobile Engineering',
    description: 'Scalable frontend components (React/Next.js/Vue) paired with secure backend APIs (Node.js/GraphQL/PostgreSQL).',
    icon: FiCode,
  },
  {
    title: 'Enterprise Architecture & Resilience',
    description: 'High-availability system design, Innovation Incubation Management System (IIMS), and containerized microservices.',
    icon: FiCpu,
  },
  {
    title: 'Tech Entrepreneurship & Strategy',
    description: 'Founding KAB Digital Solution, driving innovation at Coopbank DX Valley, and leading digital transformation.',
    icon: FiZap,
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isPlaying, setIsPlaying] = useState(true);
  const scrollContainerRef = useRef(null);

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  // Ultra-smooth classical auto-scroll loop
  useEffect(() => {
    let animationFrameId;
    const scrollContainer = scrollContainerRef.current;

    const scroll = () => {
      if (scrollContainer && isPlaying) {
        scrollContainer.scrollLeft += 0.8;
        // Seamless infinite loop reset halfway through cloned items
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying]);

  const handleManualScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Cloned items array for infinite looping animation
  const carouselItems = [...filteredSkills, ...filteredSkills, ...filteredSkills];

  return (
    <section id="skills" className="relative py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Background Teal & Emerald Orbs */}
      <div className="pointer-events-none absolute top-10 right-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10 space-y-16">
        
        {/* Section Title */}
        <div className="heading text-center space-y-2">
          <span>Expertise & Competencies</span>
          <h2>Technical Skills & Stack</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base">
            Interactive showcase of technical tools, fintech platforms, and enterprise software frameworks.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillHighlights.map(({ title, description, icon: Icon }) => (
            <div key={title} className="p-6 glass-card glass-card-hover flex flex-col justify-between border-teal-500/20">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center text-2xl font-bold mb-4">
                  <Icon />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Categories & Smooth Carousel Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-teal-500 via-brand-500 to-emerald-500 text-white shadow-md shadow-teal-500/25 scale-105'
                    : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-teal-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Minimalist Classical Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <FiSliders className="text-teal-500" /> Hover to Pause
            </span>

            <div className="flex items-center gap-1.5 bg-white/80 dark:bg-slate-900/80 p-1 rounded-full border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-teal-500 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
                title={isPlaying ? 'Pause Motion' : 'Play Motion'}
              >
                {isPlaying ? <FiPause className="text-xs" /> : <FiPlay className="text-xs" />}
              </button>

              <button
                onClick={() => handleManualScroll('left')}
                className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-teal-500 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
                title="Scroll Left"
              >
                <FiChevronLeft className="text-sm" />
              </button>

              <button
                onClick={() => handleManualScroll('right')}
                className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-teal-500 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
                title="Scroll Right"
              >
                <FiChevronRight className="text-sm" />
              </button>
            </div>
          </div>

        </div>

        {/* Ultra-Smooth Classical Auto-Scrolling Marquee Track */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          className="flex gap-6 overflow-x-auto no-scrollbar py-4 scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {carouselItems.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={`${skill.name}-${index}`}
                className="group flex-shrink-0 w-72 p-5 glass-card glass-card-hover flex flex-col justify-between relative overflow-hidden border-teal-500/20 hover:border-teal-500 transition-all duration-300 hover:scale-105"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-950/60 border border-teal-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300"
                      style={{ color: skill.color || '#14b8a6' }}
                    >
                      <Icon />
                    </div>
                    <span className="category-badge">{skill.category}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {skill.name}
                  </h3>
                  
                  <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-semibold mb-2">
                    <span>Proficiency</span>
                    <span className="text-teal-600 dark:text-teal-400 font-bold">{skill.level}%</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden mt-3">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-teal-500 via-brand-500 to-emerald-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
