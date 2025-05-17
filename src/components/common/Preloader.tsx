import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-primary-50 flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <Logo color="#5f4e3d" />
        <motion.div 
          className="mt-6 h-[2px] bg-primary-300 w-[150px] overflow-hidden relative"
        >
          <motion.div 
            className="absolute top-0 left-0 h-full bg-primary-800"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.p 
          className="mt-4 text-xs uppercase tracking-widest text-primary-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Crafting Elegance
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Preloader;