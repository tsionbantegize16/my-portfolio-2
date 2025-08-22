import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 800));
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setTouched({ name: false, email: false, message: false });
    setIsSubmitting(false);
  };

  const emailValid = formData.email.includes('@');
  const canSubmit = formData.name && emailValid && formData.message && !isSubmitting;

  return (
    <section id="contact" className="relative py-16 px-6 bg-primary-50 dark:bg-primary-400 transition-colors duration-700 ease-in-out overflow-hidden">
      {/* Decorative backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary-200/60 dark:bg-primary-300/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-100/70 dark:bg-primary-300/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="heading text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 dark:from-primary-50 dark:to-primary-200 animate-fadeInUp">Contact</h2>
          <span className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary-100/70 dark:bg-primary-300/20 border border-primary-200/60 dark:border-primary-300/30 text-primary-400 dark:text-primary-50 animate-fadeInUp delay-100">Connect With Me</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Info */}
          <div className="space-y-4 animate-slideInLeft">
            <h3 className="text-2xl font-semibold text-primary-500 dark:text-primary-50">Let’s build something great</h3>
            <p className="text-primary-500/90 dark:text-primary-50/85 max-w-xl">
              I’m available for freelance projects, collaborations, or just a friendly chat. Fill out the form and I’ll get back to you within 24–48 hours.
            </p>
            <ul className="space-y-2 text-primary-500/90 dark:text-primary-50/85 text-sm">
              <li>• Preferred: email reply</li>
              <li>• Typical response time: under 48 hours</li>
              <li>• Location: Bahir Dar, Ethiopia</li>
            </ul>
          </div>

          {/* Right: Form */}
          <div className="relative animate-slideInRight">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary-200/70 to-primary-300/50 blur opacity-70"></div>
            <div className="relative rounded-2xl border border-primary-200/70 dark:border-primary-300/30 bg-white/80 dark:bg-primary-300/10 backdrop-blur p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-500 dark:text-primary-50 mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border bg-white/90 dark:bg-primary-400/10 text-primary-500 dark:text-primary-50 placeholder-primary-400/50 outline-none transition
                               border-primary-200/70 dark:border-primary-300/30 focus:ring-2 focus:ring-primary-300/60`}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-500 dark:text-primary-50 mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border bg-white/90 dark:bg-primary-400/10 text-primary-500 dark:text-primary-50 placeholder-primary-400/50 outline-none transition
                               border-primary-200/70 dark:border-primary-300/30 focus:ring-2 focus:ring-primary-300/60`}
                    required
                  />
                  {touched.email && !emailValid && (
                    <p className="mt-1 text-xs text-red-500">Please enter a valid email address.</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-500 dark:text-primary-50 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border bg-white/90 dark:bg-primary-400/10 text-primary-500 dark:text-primary-50 placeholder-primary-400/50 outline-none transition resize-y
                               border-primary-200/70 dark:border-primary-300/30 focus:ring-2 focus:ring-primary-300/60`}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full btn-primary
                             ${isSubmitting ? 'opacity-80 cursor-wait' : 'hover:scale-105 hover:shadow-xl'} transition`}
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
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
