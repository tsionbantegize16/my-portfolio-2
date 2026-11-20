import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  FiAward,
  FiCheckCircle,
  FiExternalLink,
  FiEye,
  FiX,
  FiCalendar,
  FiDownload,
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
  FiPause
} from 'react-icons/fi';

const categories = [
  'All',
  'Hackathons & Awards',
  'Fintech & Enterprise',
  'Mentorship & Leadership',
  'Engineering & Development'
];

const certificatesData = [
  {
    id: 1,
    title: '1st Place Winner — WTM Addis IWD Hackathon 2025',
    issuer: 'Women Techmakers Addis & DxValley 2.0 (Coop Bank of Oromia)',
    partners: 'GDG Addis, Reach for Change, International Trade Centre, Kingdom of Netherlands',
    date: 'April 2025',
    category: 'Hackathons & Awards',
    badge: '1st Place Winner',
    badgeColor: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
    type: 'Championship Award',
    img: '/certeficate/image copy 3.png',
    featured: true,
    summary:
      'Won First Place at the DxValley 2.0 Incubation Center under the theme "Redefine Possible." Our team engineered an impactful solution recognized by senior technology leaders for its technical innovation, user design, and fintech potential.',
    highlights: [
      'Engineered an end-to-end prototype tackling real-world financial inclusion challenges',
      'Awarded top honors among Ethiopia’s leading engineering and technology teams',
      'Commended by Cooperative Bank of Oromia and Google Developer Groups leadership'
    ],
    skills: ['Rapid Prototyping', 'Fintech Architecture', 'React', 'UX Strategy', 'Pitch Delivery']
  },
  {
    id: 2,
    title: 'FinWise Acceleration Bootcamp Graduate',
    issuer: 'Entrepreneurship Development Institute (EDI) & UNCDF',
    partners: 'United Nations Capital Development Fund, FinWise Workshop',
    date: 'April 2026',
    category: 'Fintech & Enterprise',
    badge: 'UNCDF & EDI Accredited',
    badgeColor: 'bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/30',
    type: 'Executive Certification',
    img: '/certeficate/image copy 5.png',
    featured: true,
    summary:
      'Completed an intensive 12-day FinWise Acceleration Bootcamp covering fintech ecosystems, digital payments infrastructure, cybersecurity compliance, and venture scaling.',
    highlights: [
      'Product & Mindset: Fintech Ecosystems, Design Thinking, and Lean Startup validation',
      'Infrastructure: Digital Payments, Cybersecurity, and Regulatory Compliance',
      'Scaling: Market growth strategies, investment readiness, and high-stakes pitching'
    ],
    skills: ['Digital Payments', 'Fintech Compliance', 'Cybersecurity', 'Design Thinking', 'Lean Validation']
  },
  {
    id: 3,
    title: 'Digital Innovation Hackathon Mentor & Coach',
    issuer: 'Bahir Dar Institute of Technology (BiT-BDU) & BiT-BiTec',
    partners: 'Poly Alumni Network (PAN), Seifu BiT Maker Space',
    date: '2025',
    category: 'Mentorship & Leadership',
    badge: 'Official Hackathon Coach',
    badgeColor: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30',
    type: 'Honor & Recognition',
    img: '/certeficate/image.png',
    featured: true,
    summary:
      'Proudly awarded Certificate of Recognition for coaching and mentoring aspiring innovators during the Digital Innovation Hackathon 2025 at Bahir Dar Institute of Technology.',
    highlights: [
      'Mentored multiple student developer teams through technical architecture and product validation',
      'Facilitated problem-solving workshops bridging engineering theory and deployable software',
      'Recognized by BiT-BiTec Business Incubation & Techno-Entrepreneurship Center leadership'
    ],
    skills: ['Technical Coaching', 'Agile Mentorship', 'Solution Architecture', 'Innovation Incubation']
  },
  {
    id: 4,
    title: 'Full Stack & Mobile Application Development Specialist',
    issuer: 'Minab IT Solutions PLC (HaHuJobs) & BiT Career Center',
    partners: 'HaHuJobs, Bahir-Dar Institute of Technology',
    date: 'June 2024',
    category: 'Engineering & Development',
    badge: 'Verified Developer',
    badgeColor: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    type: 'Professional Certification',
    img: '/certeficate/image copy.png',
    featured: false,
    summary:
      'Completed a four-series deep dive into modern Full Stack web engineering and mobile application architecture, delivering full project assignments and comprehensive module assessments.',
    highlights: [
      'Mastered frontend component systems, backend RESTful APIs, and database modeling',
      'Engineered cross-platform mobile application workflows and state management',
      'Jointly certified by Minab IT Solutions (HaHuJobs) and BiT Career Center'
    ],
    skills: ['Full-Stack Web', 'Mobile App Development', 'API Design', 'Database Modeling', 'System Architecture']
  },
  {
    id: 5,
    title: 'Entrepreneurial Mindset & Agribusiness Innovation',
    issuer: 'German Cooperation (GIZ) & Ministry of Labor and Skills',
    partners: 'R&D Group, GrowthAfrica, PRO SEAD, STEP ABIC 2024',
    date: 'May 2024',
    category: 'Fintech & Enterprise',
    badge: 'GIZ & MoLS Certified',
    badgeColor: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30',
    type: 'Accreditation',
    img: '/certeficate/image copy 2.png',
    featured: false,
    summary:
      'Selected for the Ethio-German Sustainable Training and Education Programme (STEP) ABIC 2024 initiative supporting tech innovation, venture building, and female leadership.',
    highlights: [
      'Rigorous training in entrepreneurial mindset, financial education, and venture scalability',
      'Strategic market analysis for sustainable tech and business solutions in Ethiopia',
      'Facilitated by international innovation consultancies R&D Group & GrowthAfrica'
    ],
    skills: ['Financial Education', 'Venture Strategy', 'Agribusiness Tech', 'Female Entrepreneurship']
  },
  {
    id: 6,
    title: 'WTM Addis IWD Hackathon Tech Contributor',
    issuer: 'Women Techmakers Addis & DxValley Incubation Center',
    partners: 'Cooperative Bank of Oromia, GDG Addis, Reach for Change',
    date: 'April 2025',
    category: 'Hackathons & Awards',
    badge: 'Innovator',
    badgeColor: 'bg-pink-500/15 text-pink-600 dark:text-pink-400 border-pink-500/30',
    type: 'Hackathon Contributor',
    img: '/certeficate/image copy 4.png',
    featured: false,
    summary:
      'Recognized for active participation and high-impact contribution in the WTM Addis IWD Hackathon at DxValley 2.0, designing solutions that empower inclusive digital communities.',
    highlights: [
      'Contributed frontend code and UI systems for community-centered tech prototypes',
      'Collaborated within multidisciplinary tech teams under rapid hackathon timeframes',
      'Celebrated women in technology and community-driven social innovation'
    ],
    skills: ['UI/UX Collaboration', 'Hackathon Sprints', 'Community Tech', 'Inclusive Design']
  }
];

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const touchStartX = useRef(null);

  // Responsive items-per-view listener
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const filteredCertificates =
    activeCategory === 'All'
      ? certificatesData
      : certificatesData.filter((c) => c.category === activeCategory);

  const totalItems = filteredCertificates.length;
  const maxIndex = Math.max(0, totalItems - visibleCount);

  // Next / Prev slide handlers
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Reset current index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Lifetime Autoplay Loop
  useEffect(() => {
    if (!isPlaying || isHovered || selectedCert !== null || totalItems <= visibleCount) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3600);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, selectedCert, totalItems, visibleCount, handleNext]);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="certificates"
      className="relative py-24 px-6 bg-white dark:bg-slate-900/50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10 space-y-12">
        {/* Section Heading */}
        <div className="heading text-center space-y-2">
          <span className="flex items-center justify-center gap-2">
            <FiAward className="text-teal-500 text-base" />
            Verified Honors & Credentials
          </span>
          <h2>Certifications & Honors</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Formal recognitions, national hackathon championships, enterprise accreditations, and technical mentorship milestones that validate my engineering craft and leadership.
          </p>
        </div>

        {/* Carousel Header Controls: Categories & Play/Pause/Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
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

          {/* Interactive Slideshow Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-2 rounded-full transition-all flex items-center gap-1.5 text-xs font-bold ${
                  isPlaying
                    ? 'text-teal-600 dark:text-teal-400 bg-teal-500/10 hover:bg-teal-500/20'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                title={isPlaying ? 'Pause Slideshow' : 'Resume Lifetime Slideshow'}
                aria-label={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
              >
                {isPlaying ? <FiPause className="text-sm" /> : <FiPlay className="text-sm" />}
                <span className="hidden sm:inline text-[11px]">{isPlaying ? 'Autoplay On' : 'Paused'}</span>
              </button>

              <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>

              <button
                onClick={handlePrev}
                className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
                title="Previous Certificate"
                aria-label="Previous Slide"
              >
                <FiChevronLeft className="text-base" />
              </button>

              <button
                onClick={handleNext}
                className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
                title="Next Certificate"
                aria-label="Next Slide"
              >
                <FiChevronRight className="text-base" />
              </button>
            </div>
          </div>
        </div>

        {/* Lifetime Carousel Slide Show Viewport */}
        <div
          className="relative overflow-hidden pt-2 pb-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Track Container */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
            }}
          >
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="px-3 shrink-0"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="glass-card glass-card-hover group h-full flex flex-col justify-between overflow-hidden border border-slate-200/80 dark:border-slate-800 hover:border-teal-500/60 transition-all duration-300 rounded-2xl shadow-lg">
                  {/* Certificate Image Thumbnail */}
                  <div
                    className="relative aspect-[16/11] bg-slate-100 dark:bg-slate-800/80 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Gradient Shading */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border backdrop-blur-md shadow-sm ${cert.badgeColor}`}>
                        {cert.badge}
                      </span>
                      {cert.featured && (
                        <span className="px-2 py-0.5 rounded-full bg-teal-500 text-white text-[10px] font-extrabold shadow-sm">
                          ★ Highlight
                        </span>
                      )}
                    </div>

                    {/* Action Icon on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold shadow-lg transform group-hover:scale-100 scale-90 transition-transform">
                        <FiEye className="text-teal-500" /> View Full Certificate
                      </span>
                    </div>

                    {/* Date tag at bottom */}
                    <div className="absolute bottom-2.5 right-3 flex items-center gap-1 text-[11px] font-semibold text-slate-200 bg-slate-950/75 backdrop-blur-md px-2 py-0.5 rounded">
                      <FiCalendar className="text-teal-400 text-xs" />
                      {cert.date}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <FiCheckCircle className="text-xs shrink-0" />
                        <span className="truncate">{cert.issuer}</span>
                      </div>

                      <h3
                        onClick={() => setSelectedCert(cert)}
                        className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors cursor-pointer line-clamp-2"
                      >
                        {cert.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                        {cert.summary}
                      </p>
                    </div>

                    {/* Skills Tags & Quick Action */}
                    <div className="pt-4 space-y-3 border-t border-slate-200/80 dark:border-slate-800">
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-[10px] font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-1.5 py-0.5 text-[10px] font-semibold text-slate-400">
                            +{cert.skills.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={() => setSelectedCert(cert)}
                          className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-500 inline-flex items-center gap-1.5 group/btn"
                        >
                          Credential Details
                          <span className="transform group-hover/btn:translate-x-0.5 transition-transform">→</span>
                        </button>
                        <a
                          href={cert.img}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors p-1"
                          title="Open full resolution in new tab"
                        >
                          <FiExternalLink className="text-sm" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left / Right Floating Arrow Controls */}
          {totalItems > visibleCount && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-1 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-xl grid place-items-center hover:bg-teal-500 hover:text-white transition-all z-20 hover:scale-110"
                aria-label="Previous Slide"
              >
                <FiChevronLeft className="text-xl" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-1 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-xl grid place-items-center hover:bg-teal-500 hover:text-white transition-all z-20 hover:scale-110"
                aria-label="Next Slide"
              >
                <FiChevronRight className="text-xl" />
              </button>
            </>
          )}
        </div>

        {/* Carousel Pagination Indicator Dots */}
        {totalItems > visibleCount && (
          <div className="flex items-center justify-center gap-2 pt-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-gradient-to-r from-teal-500 to-emerald-500 shadow-sm shadow-teal-500/50'
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-teal-400'
                }`}
                aria-label={`Go to slide page ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Interactive Detail & Full-Resolution Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative w-full bg-slate-950 p-4 sm:p-6 flex items-center justify-center border-b border-slate-800">
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                className="max-h-[50vh] w-auto max-w-full rounded-xl shadow-2xl object-contain border border-slate-800"
              />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/90 text-white grid place-items-center hover:bg-rose-600 transition-colors shadow-lg border border-slate-700"
                aria-label="Close modal"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${selectedCert.badgeColor}`}>
                    {selectedCert.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                    {selectedCert.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <FiCalendar className="text-teal-500" />
                  {selectedCert.date}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {selectedCert.title}
                </h3>
                <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-1 flex items-center gap-1.5">
                  <FiCheckCircle />
                  {selectedCert.issuer}
                </p>
                {selectedCert.partners && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Supporting Partners:</span>{' '}
                    {selectedCert.partners}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                  Overview & Achievement
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedCert.summary}
                </p>
              </div>

              {selectedCert.highlights && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                    Key Highlights & Competencies
                  </h4>
                  <ul className="space-y-2">
                    {selectedCert.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills Tags */}
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2">
                  Skills & Frameworks
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={selectedCert.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto flex-1"
                >
                  <FiExternalLink /> View High Resolution Original
                </a>
                <a
                  href={selectedCert.img}
                  download={selectedCert.title.replace(/[^a-zA-Z0-9]/g, '_') + '.png'}
                  className="btn-secondary w-full sm:w-auto"
                >
                  <FiDownload className="text-teal-500" /> Save Certificate
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="btn-secondary w-full sm:w-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
