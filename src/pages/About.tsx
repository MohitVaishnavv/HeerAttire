import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Newsletter from '../components/home/Newsletter';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Story | HEER ATTIRE';
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
          <h1 className="font-heading text-center">Our Story</h1>
        </div>
      </div>
      
      {/* Mission Statement */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl mb-6">Our Mission</h2>
            <p className="text-lg text-primary-700 leading-relaxed mb-4">
              At Heer Attire, we believe that fashion should be a reflection of values, not just aesthetics. 
              Our mission is to create thoughtfully designed clothing that balances luxury, sustainability, 
              and timeless style.
            </p>
            <p className="text-lg text-primary-700 leading-relaxed">
              We're dedicated to challenging the norms of fast fashion by creating pieces that are made to last, 
              both in quality and design, while respecting the craftspeople who make them and the environment we all share.
            </p>
          </div>
        </div>
      </section>
      
      {/* Journey */}
      <section className="section bg-primary-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/6348101/pexels-photo-6348101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Heer Attire founder" 
                className="w-full h-auto rounded-sm"
              />
            </motion.div>
            
            <div>
              <motion.h2 
                className="font-heading text-4xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                The Journey
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-primary-700 mb-4">
                  Founded in 2018 by designer Maya Heer, our brand began with a simple collection of six essential pieces. 
                  Having worked in the fashion industry for over a decade, Maya witnessed firsthand the environmental and 
                  ethical challenges within the industry.
                </p>
                
                <p className="text-primary-700 mb-4">
                  Inspired to create change, she assembled a small team of like-minded designers and artisans committed to 
                  crafting garments with purpose and integrity. What started as a passion project has grown into a respected 
                  name in sustainable luxury fashion.
                </p>
                
                <p className="text-primary-700">
                  Today, Heer Attire continues to expand globally while maintaining our core values of exceptional quality, 
                  ethical production, and timeless design. Every piece in our collection tells a story of thoughtful creation 
                  and conscious consumption.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="section">
        <div className="container-custom">
          <motion.h2 
            className="font-heading text-4xl mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-700">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="font-heading text-2xl mb-3">Craftsmanship</h3>
              <p className="text-primary-600">
                We believe in the value of human hands. Each garment is crafted by skilled artisans who take pride in their work, 
                bringing decades of expertise to every stitch.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="font-heading text-2xl mb-3">Sustainability</h3>
              <p className="text-primary-600">
                From regenerative farming practices to biodegradable packaging, we consider our environmental impact at every 
                stage of production. Our goal is circular fashion that gives back more than it takes.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-700">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="font-heading text-2xl mb-3">Community</h3>
              <p className="text-primary-600">
                We foster meaningful relationships with our suppliers, artisans, and customers. By supporting local communities 
                and traditional craft techniques, we help preserve cultural heritage and promote economic empowerment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <motion.h2 
            className="font-heading text-4xl mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            The Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 rounded-sm overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Maya Heer - Founder & Creative Director" 
                  className="w-full h-auto"
                />
              </div>
              <h3 className="font-heading text-2xl mb-1">Maya Heer</h3>
              <p className="text-primary-600 mb-3">Founder & Creative Director</p>
              <p className="text-primary-600 text-sm">
                With over 15 years of experience in luxury fashion, Maya brings her vision of ethical elegance to every collection.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 rounded-sm overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Thomas Reid - Head of Production" 
                  className="w-full h-auto"
                />
              </div>
              <h3 className="font-heading text-2xl mb-1">Thomas Reid</h3>
              <p className="text-primary-600 mb-3">Head of Production</p>
              <p className="text-primary-600 text-sm">
                Thomas oversees our ethical supply chain, ensuring every garment meets our rigorous standards for quality and sustainability.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 rounded-sm overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Ava Mendez - Design Director" 
                  className="w-full h-auto"
                />
              </div>
              <h3 className="font-heading text-2xl mb-1">Ava Mendez</h3>
              <p className="text-primary-600 mb-3">Design Director</p>
              <p className="text-primary-600 text-sm">
                Ava's innovative approach to sustainable design has helped establish Heer Attire's signature aesthetic of timeless modernity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Newsletter />
    </motion.div>
  );
};

export default About;