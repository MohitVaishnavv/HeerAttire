import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      
      const moveX = (clientX - width / 2) / 50;
      const moveY = (clientY - height / 2) / 50;
      
      heroRef.current.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/6347920/pexels-photo-6347920.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Fashion model in Heer Attire clothing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/70" />
      </div>
      
      {/* Content */}
      <div className="container-custom h-full flex flex-col justify-end pb-24 md:pb-32 relative z-10">
        <div ref={heroRef} className="max-w-2xl">
          <motion.h1 
            className="text-white font-heading font-light leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Redefining <br />
            <span className="text-gold-300">Luxury</span> Fashion
          </motion.h1>
          
          <motion.p 
            className="text-white/80 mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Timeless elegance meets contemporary design. Discover our collection of sustainable, 
            handcrafted pieces that elevate your everyday style.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/products" className="btn-primary">
              Explore Collection
            </Link>
            <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-primary-800">
              Our Story
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;