import React, { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaGitlab, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowRight, FiDownload, FiTerminal, FiCode, FiCpu, FiCheck, FiCopy } from 'react-icons/fi';

const roles = [
  'Full-Stack Engineer & UX Designer',
  'Software Engineer',
  'Founder @ KAB Digital Solution',
  'Full-Stack Developer'
];

const codeSnippets = {
  profile: `// tsion-bantegize.ts
const developer: FullStackEngineer = {
  name: "Tsion Bantegize",
  role: "Full-Stack Engineer & UX Designer",
  founderOf: "KAB Digital Solution",
  education: "B.S. Software Engineering (BDU '26)",
  
  specializations: [
    "User Journeys & UI/UX Craft",
    "Frontend Systems & Component Rails",
    "Enterprise Software Architecture",
  ],
  
  collaborations: [
    "KAB Digital Solution",
    "EagleLion System Technology",
    "Cooperative Bank of Oromia (DX Valley)",
  ],

  status: "🟢 Shaping UI Craft & Frontend Architectures",
};`,
  architecture: `// enterprise-architecture.json
{
  "system": "Innovation Incubation Management System (IIMS)",
  "founder": "Tsion Bantegize (KAB Digital)",
  "security": "OAuth2.0 / JWT / Financial Data Encryption",
  "frontend": ["React", "Next.js", "Vue.js", "Tailwind CSS"],
  "backend": ["Node.js", "REST APIs", "GraphQL", "PostgreSQL"],
  "resilience": "High-Availability Microservices 99.9%"
}`,
  stack: `// tech-stack.config.js
module.exports = {
  coreLanguages: ["TypeScript", "JavaScript", "Python"],
  frontend: ["React.js", "Next.js", "Vue.js", "Nuxt.js"],
  fintechRails: ["Digital Lending", "Payment Gateways", "Agency Banking"],
  database: ["PostgreSQL", "GraphQL", "Hasura", "Node.js"],
  tools: ["Docker", "Git", "Postman", "Figma Design Systems"]
};`
};

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeCodeTab, setActiveCodeTab] = useState('profile');
  const [copiedCode, setCopiedCode] = useState(false);
  const [stats, setStats] = useState({ projects: 0, stack: 0, clients: 0 });
  const statsRef = useRef(null);
  const animatedRef = useRef(false);

  // Rotating roles effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Stats counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
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
            animate('clients', 8);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[35rem] h-[35rem] rounded-full bg-gradient-to-br from-teal-400/20 via-brand-500/15 to-emerald-500/20 blur-3xl animate-pulse"></div>
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[35rem] h-[35rem] rounded-full bg-gradient-to-br from-brand-500/20 via-teal-600/15 to-emerald-600/20 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Hero Information */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left animate-slideInLeft">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/80 border border-teal-200/80 dark:border-teal-800/80 text-xs font-bold text-teal-700 dark:text-teal-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Full-Stack Engineer & UX Designer
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-brand-500 to-emerald-500">Tsion</span>.
            </h1>

            {/* Rotating Role Display */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
              <span className="text-teal-600 dark:text-teal-400 border-b-2 border-teal-500 pb-0.5 transition-all duration-300">
                {roles[roleIndex]}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Shapes user journeys, interface systems, and the frontend craft behind every <strong className="text-slate-900 dark:text-white">KAB Digital Solution</strong> build.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              Explore Projects <FiArrowRight className="text-lg" />
            </a>
            <a href="/Tsion_Bantegize_CV.docx" download="Tsion_Bantegize_CV.docx" className="btn-secondary w-full sm:w-auto">
              <FiDownload className="text-lg text-teal-600 dark:text-teal-400" /> Printable Resume / CV
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-3 flex items-center justify-center lg:justify-start gap-4">
            <a href="https://github.com/tsionbantegize" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/tsion-bantegize-007780285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://gitlab.com/tsionbantegize/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitLab">
              <FaGitlab />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61551880407217&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/tsi_bantegize?igsh=MTdjZnJpMmtwd293Ng==" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>

          {/* Quick Metrics Grid */}
          <div ref={statsRef} className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="p-3.5 rounded-2xl glass-card text-center border-teal-500/20">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400">{stats.projects}+</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 mt-1">Fintech Projects</div>
              </div>
              <div className="p-4 rounded-2xl glass-card text-center border-teal-500/20">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400">{stats.stack}+</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 mt-1">Tech Stack</div>
              </div>
              <div className="p-4 rounded-2xl glass-card text-center border-teal-500/20">
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400">{stats.clients}+</div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-600 dark:text-slate-400 mt-1">Partners & Clients</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: State-of-the-Art Interactive IDE Window (Replaces Image) */}
        <div className="lg:col-span-6 animate-slideInRight">
          <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-teal-500/30 dark:border-teal-500/30 bg-slate-900 text-slate-100 font-mono">
            
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-brand-500 to-emerald-500 blur-md opacity-30 group-hover:opacity-60 transition duration-500 pointer-events-none"></div>

            <div className="relative z-10">
              {/* Window Controls Bar */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  <span className="ml-2 text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                    <FiTerminal className="text-teal-400" /> tsion-engine // IDE
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 transition-colors"
                  title="Copy Snippet"
                >
                  {copiedCode ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                  <span>{copiedCode ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* IDE Code Tabs */}
              <div className="flex items-center bg-slate-950/50 border-b border-slate-800 px-2 overflow-x-auto">
                <button
                  onClick={() => setActiveCodeTab('profile')}
                  className={`px-3 py-2 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors ${
                    activeCodeTab === 'profile'
                      ? 'border-teal-400 text-teal-300 bg-slate-900/80'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FiCode /> profile.ts
                </button>
                <button
                  onClick={() => setActiveCodeTab('architecture')}
                  className={`px-3 py-2 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors ${
                    activeCodeTab === 'architecture'
                      ? 'border-teal-400 text-teal-300 bg-slate-900/80'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FiCpu /> architecture.json
                </button>
                <button
                  onClick={() => setActiveCodeTab('stack')}
                  className={`px-3 py-2 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors ${
                    activeCodeTab === 'stack'
                      ? 'border-teal-400 text-teal-300 bg-slate-900/80'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FiTerminal /> stack.config.js
                </button>
              </div>

              {/* IDE Code Content Body */}
              <div className="p-5 overflow-x-auto text-xs sm:text-sm leading-relaxed font-mono min-h-[360px] max-h-[420px]">
                <pre className="text-slate-200">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
                <span className="inline-block w-2 h-4 bg-teal-400 ml-1 animate-pulse"></span>
              </div>

              {/* Footer Status Bar */}
              <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 font-bold">● TypeScript 5.4</span>
                  <span>UTF-8</span>
                </div>
                <div className="text-teal-400 font-semibold">
                  Founder @ KAB Digital Solution
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
