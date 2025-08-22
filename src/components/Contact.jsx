import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    // In a real app, replace alert with a custom modal or toast notification
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <section id="contact" className="py-16 px-6 bg-primary-50 dark:bg-primary-400 transition-colors duration-700 ease-in-out">
      <div className="container mx-auto">
        <div className="heading text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-400 dark:text-primary-50 mb-2 animate-fadeInUp">Contact</h2>
          <span className="text-lg text-primary-200 dark:text-primary-200 font-semibold animate-fadeInUp delay-100">Connect With Me</span>
        </div>

        <div className="contact-form max-w-2xl mx-auto p-8 rounded-xl shadow-lg bg-primary-100 dark:bg-primary-400 animate-slideInUp">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="7"
              placeholder="Write Message Here..."
              value={formData.message}
              onChange={handleChange}
              className="input-field resize-y"
              required
            ></textarea>
            <button
              type="submit"
              className="btn-primary w-full transform hover:scale-102 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
