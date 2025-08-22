import React, { useState, useEffect, useRef } from 'react';
import { FiCode, FiZap, FiTrendingUp, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const skillsData = [
  { name: 'Vue.js', category: 'Frontend', level: 90, color: '#4FC08D' },
  { name: 'Nuxt.js', category: 'Frontend', level: 85, color: '#00DC82' },
  { name: 'React', category: 'Frontend', level: 88, color: '#61DAFB' },
  { name: 'Flutter', category: 'Mobile', level: 82, color: '#02569B' },
  { name: 'TypeScript', category: 'Language', level: 85, color: '#3178C6' },
  { name: 'JavaScript', category: 'Language', level: 92, color: '#F7DF1E' },
  { name: 'GraphQL', category: 'Backend', level: 78, color: '#E10098' },
  { name: 'Tailwind CSS', category: 'Styling', level: 90, color: '#06B6D4' },
  { name: 'Figma', category: 'Design', level: 85, color: '#F24E1E' },
  { name: 'Git', category: 'Version Control', level: 88, color: '#F05032' },
  { name: 'GitHub', category: 'Version Control', level: 90, color: '#181717' },
  { name: 'Postman', category: 'API Testing', level: 85, color: '#FF6C37' },
  { name: 'PostgreSQL', category: 'Database', level: 80, color: '#336791' },
  { name: 'Node.js', category: 'Backend', level: 85, color: '#339933' },
  { name: 'VS Code', category: 'Tools', level: 95, color: '#007ACC' },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(skillsData.length / 5));
      }, 3000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleCarouselHover = () => {
    setIsAutoPlaying(false);
  };

  const handleCarouselLeave = () => {
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
      'Flutter': 'flutter',
      'TypeScript': 'ts',
      'JavaScript': 'js',
      'GraphQL': 'graphql',
      'Tailwind CSS': 'tailwind',
      'Figma': 'figma',
      'Git': 'git',
      'GitHub': 'github',
      'Postman': 'postman',
      'PostgreSQL': 'postgres',
      'Node.js': 'nodejs',
      'VS Code': 'vscode',
    };
    return skillMap[skillName] || 'code';
  };

  const categories = [...new Set(skillsData.map(skill => skill.category))];

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(skillsData.length / 5));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(skillsData.length / 5)) % Math.ceil(skillsData.length / 5));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Group skills into slides (5 per slide)
  const slides = [];
  for (let i = 0; i < skillsData.length; i += 5) {
    slides.push(skillsData.slice(i, i + 5));
  }

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-all duration-700 ease-in-out relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 animate-bounce-slow">
            <FiCode className="text-white text-2xl" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fadeInUp">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            A comprehensive collection of technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Carousel */}
        <div 
          className="relative mb-12"
          onMouseEnter={handleCarouselHover}
          onMouseLeave={handleCarouselLeave}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-4">
                    {slide.map((skill, skillIndex) => {
                      const globalIndex = slideIndex * 5 + skillIndex;
                      return (
                        <div
                          key={globalIndex}
                          className={`group relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50
                                     transform transition-all duration-500 ease-out cursor-pointer
                                     ${animatedSkills.includes(globalIndex) ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'}
                                     ${hoveredSkill === globalIndex ? 'scale-110 shadow-2xl' : 'hover:scale-105 shadow-lg'}
                                     hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600`}
                          style={{ 
                            animationDelay: `${globalIndex * 0.1}s`,
                            background: hoveredSkill === globalIndex ? `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)` : undefined
                          }}
                          onMouseEnter={() => setHoveredSkill(globalIndex)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          {/* Skill Icon */}
                          <div className="flex justify-center mb-4">
                            <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 
                                            flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-out
                                            ${hoveredSkill === globalIndex ? 'shadow-lg' : ''}`}>
                              <img 
                                src={`https://skillicons.dev/icons?i=${getSkillIcon(skill.name)}&theme=${hoveredSkill === globalIndex ? 'light' : 'dark'}`}
                                alt={skill.name}
                                className="w-10 h-10 object-contain filter group-hover:brightness-110 transition-all duration-300"
                              />
                              {hoveredSkill === globalIndex && (
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl animate-pulse"></div>
                              )}
                            </div>
                          </div>

                          {/* Skill Name */}
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {skill.name}
                          </h3>

                          {/* Progress Bar */}
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3 overflow-hidden">
                            <div 
                              className="h-full rounded-full transition-all duration-1000 ease-out"
                              style={{ 
                                width: hoveredSkill === globalIndex ? `${skill.level}%` : '0%',
                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                              }}
                            ></div>
                          </div>

                          {/* Skill Level */}
                          <div className="text-center">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              {skill.level}% Proficiency
                            </span>
                          </div>

                          {/* Category Badge */}
                          <div className="absolute top-3 right-3">
                            <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                              {skill.category}
                            </span>
                          </div>

                          {/* Hover Effect Glow */}
                          {hoveredSkill === globalIndex && (
                            <div 
                              className="absolute inset-0 rounded-2xl opacity-20 animate-pulse"
                              style={{ 
                                background: `radial-gradient(circle at center, ${skill.color}40, transparent)`,
                                filter: 'blur(20px)'
                              }}
                            ></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm 
                       rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
                       flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400
                       hover:scale-110 group z-10"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="text-xl group-hover:scale-110 transition-transform duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm 
                       rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
                       flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400
                       hover:scale-110 group z-10"
            aria-label="Next slide"
          >
            <FiChevronRight className="text-xl group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                  currentSlide === index
                    ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
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
          <div className="text-center p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiZap className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Frontend Mastery</h3>
            <p className="text-gray-600 dark:text-gray-400">Modern frameworks and responsive design</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCode className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Full-Stack Development</h3>
            <p className="text-gray-600 dark:text-gray-400">End-to-end application development</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiTrendingUp className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Continuous Learning</h3>
            <p className="text-gray-600 dark:text-gray-400">Always exploring new technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
