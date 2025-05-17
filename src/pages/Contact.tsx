import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 5000);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us | HEER ATTIRE';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="bg-primary-900 text-white py-24 md:py-32">
        <div className="container-custom">
          <h1 className="font-heading text-center">Contact Us</h1>
        </div>
      </div>
      
      {/* Contact Form and Info */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <motion.h2 
                className="font-heading text-3xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.h2>
              
              <motion.p 
                className="text-primary-700 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                We'd love to hear from you. Whether you have a question about our products, sustainability practices, 
                or anything else, our team is ready to assist you.
              </motion.p>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <MapPin size={20} className="text-accent-500 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <p className="text-primary-600">
                      123 Fashion Avenue<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={20} className="text-accent-500 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-primary-600">
                      <a href="mailto:hello@heerattire.com" className="hover:text-accent-500 transition-colors">
                        hello@heerattire.com
                      </a>
                    </p>
                    <p className="text-sm text-primary-500 mt-1">
                      We aim to respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={20} className="text-accent-500 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-primary-600">
                      <a href="tel:+12125551234" className="hover:text-accent-500 transition-colors">
                        +1 (212) 555-1234
                      </a>
                    </p>
                    <p className="text-sm text-primary-500 mt-1">
                      Monday to Friday, 9am to 6pm EST
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-xl mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 hover:bg-primary-200 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 hover:bg-primary-200 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://pinterest.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 hover:bg-primary-200 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <path d="M5 12l14 0"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-sm shadow-md"
            >
              <h2 className="font-heading text-2xl mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p className="text-primary-600">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-primary-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-primary-200 focus:outline-none focus:border-primary-500 transition-colors"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-primary-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-primary-200 focus:outline-none focus:border-primary-500 transition-colors"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-primary-700 mb-2">Subject</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-primary-200 focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="product">Product Inquiry</option>
                      <option value="order">Order Status</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="sustainability">Sustainability Practices</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-primary-700 mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full p-3 border border-primary-200 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full flex items-center justify-center">
                    Send Message
                    <Send size={16} className="ml-2" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section bg-primary-100 py-12">
        <div className="container-custom">
          <div className="bg-white p-2 rounded-sm shadow-md">
            <div className="bg-primary-200 h-[400px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-primary-600 mb-2">Map Placeholder</p>
                <p className="text-primary-500 text-sm">Interactive map would load here in a production environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;