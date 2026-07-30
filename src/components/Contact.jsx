import React, { useState } from 'react';
import { FiMail, FiPhone, FiSend, FiCopy, FiCheck, FiMapPin, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const isFormValid = formData.name.trim() && formData.email.includes('@') && formData.message.trim();

  return (
    <section id="contact" className="relative py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-10 left-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="heading text-center space-y-2">
          <span>Get In Touch</span>
          <h2>Let’s Build Something Great</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base">
            Have a project in mind, a freelance inquiry, or just want to connect? Send me a message below.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Quick Contact Info */}
          <div className="lg:col-span-5 space-y-6 animate-slideInLeft">
            <div className="glass-card p-8 space-y-6 border-teal-500/20">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FiMessageSquare className="text-teal-500" /> Direct Contact Info
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                I am usually available for new contract projects, engineering roles, and technical collaborations. Expect a reply within 24 hours.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-teal-50/60 dark:bg-slate-800/80 border border-teal-200/80 dark:border-teal-800/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center text-lg flex-shrink-0">
                      <FiMail />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase">Email</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">tsionbantegize@gmail.com</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('tsionbantegize@gmail.com', 'email')}
                    className="p-2 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-teal-500 shadow-sm border border-slate-200 dark:border-slate-800 flex-shrink-0"
                    title="Copy Email"
                  >
                    {copiedText === 'email' ? <FiCheck className="text-emerald-500" /> : <FiCopy />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg flex-shrink-0">
                      <FiPhone />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase">Phone / Mobile</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">+251 995 220 266</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('+251995220266', 'phone')}
                    className="p-2 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-cyan-500 shadow-sm border border-slate-200 dark:border-slate-800 flex-shrink-0"
                    title="Copy Phone Number"
                  >
                    {copiedText === 'phone' ? <FiCheck className="text-emerald-500" /> : <FiCopy />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg flex-shrink-0">
                    <FiMapPin />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">Addis Ababa, Ethiopia</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 animate-slideInRight">
            <div className="glass-card p-8 sm:p-10 relative">
              
              {/* Toast Banner */}
              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-3 text-sm font-semibold animate-fadeIn">
                  <FiCheck className="text-xl flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Hiring / Question"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field resize-y"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full btn-primary py-4 text-base ${
                    !isFormValid || isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:scale-[1.01]'
                  }`}
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      Send Message <FiSend className="text-lg" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
