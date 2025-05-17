import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Components
import Hero from '../components/home/Hero';
import Featured from '../components/home/Featured';
import ThreeDShowcase from '../components/home/ThreeDShowcase';
import Story from '../components/home/Story';
import Newsletter from '../components/home/Newsletter';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'HEER ATTIRE | Luxury Fashion';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Featured />
      <ThreeDShowcase />
      <Story />
      <Newsletter />
    </motion.div>
  );
};

export default Home;