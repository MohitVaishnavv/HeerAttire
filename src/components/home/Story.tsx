import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Story: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0.8]);

  return (
    <section ref={sectionRef} className="section bg-primary-900 text-primary-50 py-24 md:py-32 overflow-hidden">
      <div className="container-custom relative">
        {/* Background Elements */}
        <div className="absolute inset-0 flex justify-between items-center pointer-events-none overflow-hidden">
          <motion.div 
            style={{ y: y1, opacity }}
            className="w-28 h-28 md:w-48 md:h-48 rounded-full bg-accent-500/10 -left-10 -top-10 absolute"
          />
          <motion.div 
            style={{ y: y2, opacity }}
            className="w-40 h-40 md:w-60 md:h-60 rounded-full bg-gold-500/10 -right-20 -bottom-20 absolute"
          />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Heer Attire workshop" 
              className="w-full h-auto rounded-sm"
            />
            <div className="absolute inset-0 bg-primary-900/10 rounded-sm" />
          </motion.div>
          
          {/* Content */}
          <div>
            <motion.h2 
              className="font-heading text-4xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Journey
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 text-primary-100">
                Founded in 2018, Heer Attire began with a simple yet ambitious vision: to create thoughtfully designed clothing that balances luxury, sustainability, and timeless style.
              </p>
              
              <p className="mb-6 text-primary-200">
                Every piece in our collection is crafted with attention to detail, using ethically sourced materials and supporting artisanal communities. We believe that luxury isn't just about aesthetics, but about the story, values, and craftsmanship behind each garment.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link to="/about" className="btn bg-primary-50 text-primary-900 hover:bg-primary-200">
                Discover Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;