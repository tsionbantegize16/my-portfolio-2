import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiCode, FiPenTool, FiTrendingUp, FiZap } from 'react-icons/fi';

const skillsData = [
  { name: 'Vue.js', category: 'Frontend', level: 90, color: '#4FC08D' },
  { name: 'Nuxt.js', category: 'Frontend', level: 85, color: '#00DC82' },
  { name: 'React', category: 'Frontend', level: 88, color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', level: 84, color: '#000000' },
  { name: 'Flutter', category: 'Mobile', level: 82, color: '#02569B' },
  { name: 'TypeScript', category: 'Language', level: 85, color: '#3178C6' },
  { name: 'JavaScript', category: 'Language', level: 92, color: '#F7DF1E' },
  { name: 'GraphQL', category: 'Backend', level: 78, color: '#E10098' },
  { name: 'Tailwind CSS', category: 'Styling', level: 90, color: '#06B6D4' },
  { name: 'Figma', category: 'Design', level: 85, color: '#F24E1E' },
  { name: 'Canva', category: 'Design', level: 80, color: '#00C4CC' },
  { name: 'Git', category: 'Version Control', level: 88, color: '#F05032' },
  { name: 'GitHub', category: 'Version Control', level: 90, color: '#181717' },
  { name: 'Postman', category: 'API Testing', level: 85, color: '#FF6C37' },
  { name: 'PostgreSQL', category: 'Database', level: 80, color: '#336791' },
  { name: 'Node.js', category: 'Backend', level: 85, color: '#339933' },
  { name: 'Strapi', category: 'Backend', level: 75, color: '#2F2E8B' },
  { name: 'Spring', category: 'Backend', level: 70, color: '#6DB33F' },
  { name: 'Docker', category: 'DevOps', level: 70, color: '#2496ED' },
  { name: 'VS Code', category: 'Tools', level: 95, color: '#007ACC' },
];

const skillHighlights = [
  {
    title: 'Clean, Maintainable Builds',
    description: 'Clean, maintainable, and scalable interfaces that stay reliable in production.',
    icon: FiZap,
  },
  {
    title: 'Accessible Interface Design',
    description: 'Beautiful UI with accessible UX patterns and thoughtful micro-interactions.',
    icon: FiPenTool,
  },
  {
    title: 'Modern React + Tailwind',
    description: 'Modern React, Tailwind CSS, and component-driven best practices.',
    icon: FiCode,
  },
  {
    title: 'Always Learning & Iterating',
    description: 'Continuous experimentation to refine performance, security, and usability.',
    icon: FiTrendingUp,
  },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(1);
  const carouselRef = useRef(null);
  const animationFrameRef = useRef(null);
  const touchStartXRef = useRef(null);

  // Set visible count based on viewport
  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth;
      if (width >= 1280) setVisibleCount(5); // xl: 5
      else if (width >= 1024) setVisibleCount(3); // lg: 3
      else if (width >= 768) setVisibleCount(2); // md: 2
      else setVisibleCount(1); // sm: 1
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  // Auto-scroll functionality for smooth, continuous movement
  useEffect(() => {
    const maxIndex = Math.max(0, skillsData.length - visibleCount);
    const step = () => {
      setCurrentIndex((prev) => {
        if (maxIndex === 0) return 0;
        const next = prev + 0.01;
        return next >= maxIndex ? 0 : next;
      });
      animationFrameRef.current = requestAnimationFrame(step);
    };

    if (isAutoPlaying) {
      animationFrameRef.current = requestAnimationFrame(step);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isAutoPlaying, visibleCount]);

  // Pause auto-play on hover
  const handleCarouselHover = () => setIsAutoPlaying(false);
  const handleCarouselLeave = () => setIsAutoPlaying(true);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current == null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const threshold = 50;
    if (deltaX > threshold) prevSlide();
    else if (deltaX < -threshold) nextSlide();
    touchStartXRef.current = null;
    setIsAutoPlaying(true);
  };

  useEffect(() => {
    // Animate skills one by one
    const timer = setTimeout(() => {
      setAnimatedSkills(skillsData.map((_, index) => index));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const getSkillIcon = (skillName) => {
    const skillMap = {
      'Vue.js': 'vue',
      'Nuxt.js': 'nuxtjs',
      'React': 'react',
      'Next.js': 'nextjs',
      'Flutter': 'flutter',
      'TypeScript': 'ts',
      'JavaScript': 'js',
      'GraphQL': 'graphql',
      'Tailwind CSS': 'tailwind',
      'Figma': 'figma',
      'Canva': 'canva',
      'Git': 'git',
      'GitHub': 'github',
      'Postman': 'postman',
      'PostgreSQL': 'postgres',
      'Node.js': 'nodejs',
      'Strapi': 'strapi',
      'Spring': 'spring',
      'Docker': 'docker',
      'VS Code': 'vscode',
    };
    return skillMap[skillName] || 'code';
  };

  // Navigation
  const maxIndex = Math.max(0, skillsData.length - visibleCount);

  const nextSlide = () => {
    if (maxIndex === 0) return;
    setCurrentIndex((prev) => {
      const next = Math.floor(prev) + 1;
      return next > maxIndex ? 0 : next;
    });
  };

  const prevSlide = () => {
    if (maxIndex === 0) return;
    setCurrentIndex((prev) => {
      const next = Math.ceil(prev) - 1;
      return next < 0 ? maxIndex : next;
    });
  };

  const goToIndex = (index) => setCurrentIndex(index);

  const totalPages = Math.max(1, skillsData.length - visibleCount + 1);
  const translatePercent = currentIndex * (100 / visibleCount);

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 dark:from-primary-400 dark:via-primary-400 dark:to-primary-500 transition-all duration-700 ease-in-out relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/60 dark:bg-primary-300/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-100/70 dark:bg-primary-300/10 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-200/50 dark:bg-primary-300/10 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-300 to-primary-400 rounded-full mb-6 animate-bounce-slow">
            <FiCode className="text-white text-2xl" />
          </div>
          <h2 className="text-5xl font-bold text-primary-400 dark:text-primary-50 mb-4 animate-fadeInUp">
            Technical Skills
          </h2>
          <p className="text-xl text-primary-400/80 dark:text-primary-50/80 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            A comprehensive collection of technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-16">
          {skillHighlights.map(({ title, description, icon: Icon }, index) => (
            <div
              key={title}
              className="rounded-2xl bg-white/70 dark:bg-primary-300/10 backdrop-blur-sm border border-primary-200/50 dark:border-primary-300/20 p-6 text-left shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 text-primary-700 dark:text-primary-100">
                <Icon className="text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-primary-500 dark:text-primary-50 mb-2">{title}</h3>
              <p className="text-sm text-primary-500/85 dark:text-primary-50/80">{description}</p>
            </div>
          ))}
        </div>

        {/* Skills Carousel - per card */}
        <div 
          className="relative mb-12"
          onMouseEnter={handleCarouselHover}
          onMouseLeave={handleCarouselLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Track Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              ref={carouselRef}
              className="flex will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${translatePercent}%)` }}
            >
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 p-4"
                  style={{ flexBasis: `${100 / visibleCount}%` }}
                >
                  <div
                    className={`group relative p-6 rounded-2xl h-full bg-white/80 dark:bg-primary-300/10 backdrop-blur-sm border border-primary-200/50 dark:border-primary-300/20
                               transform transition-all duration-500 ease-out cursor-pointer
                               ${animatedSkills.includes(index) ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'}
                               ${hoveredSkill === index ? 'scale-105 shadow-2xl' : 'hover:scale-[1.02] shadow-lg'}
                               hover:shadow-xl hover:border-primary-300 dark:hover:border-primary-300`}
                    style={{ 
                      animationDelay: `${index * 0.05}s`,
                      background: hoveredSkill === index ? `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)` : undefined
                    }}
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Icon */}
                    <div className="flex justify-center mb-4">
                      <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br from-white to-primary-50 dark:from-primary-400/20 dark:to-primary-400/10 
                                      flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-out
                                      ${hoveredSkill === index ? 'shadow-lg' : ''}`}>
                        <img 
                          src={`https://skillicons.dev/icons?i=${getSkillIcon(skill.name)}&theme=${hoveredSkill === index ? 'light' : 'dark'}`}
                          alt={skill.name}
                          className="w-10 h-10 object-contain filter group-hover:brightness-110 transition-all duration-300"
                        />
                        {hoveredSkill === index && (
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-200/30 to-primary-300/30 rounded-xl animate-pulse"></div>
                        )}
                      </div>
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-lg font-semibold text-primary-400 dark:text-primary-50 text-center mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-200 transition-colors duration-300">
                      {skill.name}
                    </h3>

                    {/* Progress Bar */}
                    <div className="w-full bg-primary-100 dark:bg-primary-300/20 rounded-full h-2 mb-3 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: hoveredSkill === index ? `${skill.level}%` : '0%',
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                        }}
                      ></div>
                    </div>

                    {/* Skill Level */}
                    <div className="text-center">
                      <span className="text-sm font-medium text-primary-400/80 dark:text-primary-50/70">
                        {skill.level}% Proficiency
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-300/20 text-primary-600 dark:text-primary-100 rounded-full">
                        {skill.category}
                      </span>
                    </div>

                    {/* Hover Effect Glow */}
                    {hoveredSkill === index && (
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-20 animate-pulse"
                        style={{ 
                          background: `radial-gradient(circle at center, ${skill.color}40, transparent)`,
                          filter: 'blur(20px)'
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-primary-300/20 backdrop-blur-sm 
                       rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
                       flex items-center justify-center text-primary-500 dark:text-primary-50 hover:text-primary-600 dark:hover:text-primary-100
                       hover:scale-110 group z-10"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="text-xl group-hover:scale-110 transition-transform duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-primary-300/20 backdrop-blur-sm 
                       rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
                       flex items-center justify-center text-primary-500 dark:text-primary-50 hover:text-primary-600 dark:hover:text-primary-100
                       hover:scale-110 group z-10"
            aria-label="Next slide"
          >
            <FiChevronRight className="text-xl group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                  Math.round(currentIndex) === index
                    ? 'bg-primary-500 dark:bg-primary-200 scale-125'
                    : 'bg-primary-200 dark:bg-primary-300/30 hover:bg-primary-300 dark:hover:bg-primary-300/50'
                }`}
                aria-label={`Go to position ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="absolute top-4 right-4">
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
            }`} title={isAutoPlaying ? 'Auto-playing' : 'Paused'} />
          </div>
        </div>

        {/* Skills Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-2xl bg-white/60 dark:bg-primary-300/10 backdrop-blur-sm border border-primary-200/50 dark:border-primary-300/20">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiZap className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-primary-500 dark:text-primary-50 mb-2">Frontend Mastery</h3>
            <p className="text-primary-500/80 dark:text-primary-50/70">Modern frameworks and responsive design</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white/60 dark:bg-primary-300/10 backdrop-blur-sm border border-primary-200/50 dark:border-primary-300/20">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCode className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-primary-500 dark:text-primary-50 mb-2">Full-Stack Development</h3>
            <p className="text-primary-500/80 dark:text-primary-50/70">End-to-end application development</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white/60 dark:bg-primary-300/10 backdrop-blur-sm border border-primary-200/50 dark:border-primary-300/20">
            <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiTrendingUp className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-primary-500 dark:text-primary-50 mb-2">Continuous Learning</h3>
            <p className="text-primary-500/80 dark:text-primary-50/70">Always exploring new technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
