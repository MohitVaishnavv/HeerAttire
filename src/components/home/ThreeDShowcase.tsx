import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThreeDScene from '../3d/ThreeDScene';

interface ShowcaseItem {
  id: string;
  name: string;
  description: string;
  modelPath: string;
  color: string;
}

const ThreeDShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const showcaseItems: ShowcaseItem[] = [
    {
      id: '1',
      name: 'The Meridian Collection',
      description: 'Expertly tailored pieces with clean lines and luxurious fabrics for the modern professional.',
      modelPath: '/models/jacket.glb', // These are placeholders, real app would have actual models
      color: '#8c7656',
    },
    {
      id: '2',
      name: 'Essentials Line',
      description: 'Timeless basics crafted from sustainable materials that form the foundation of your wardrobe.',
      modelPath: '/models/shirt.glb',
      color: '#504236',
    },
    {
      id: '3',
      name: 'Heritage Series',
      description: 'A celebration of traditional craftsmanship reinterpreted for the contemporary lifestyle.',
      modelPath: '/models/dress.glb',
      color: '#96532e',
    }
  ];
  
  const activeItem = showcaseItems[activeIndex];

  return (
    <section className="section bg-primary-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-primary-800 mb-3">Interactive Experience</h2>
          <p className="text-primary-600 max-w-xl mx-auto">
            Explore our collections in 3D. Rotate, zoom, and discover the details of our signature pieces.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* 3D Model */}
          <motion.div 
            className="h-[500px] relative bg-primary-50 rounded-sm overflow-hidden interactive-cursor"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ThreeDScene 
              modelPath={activeItem.modelPath}
              backgroundColor="transparent"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-800/50 to-transparent p-6 text-white">
              <p className="text-sm">Click and drag to rotate • Scroll to zoom</p>
            </div>
          </motion.div>
          
          {/* Collection Info */}
          <div>
            <motion.h3 
              className="font-heading text-3xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {activeItem.name}
            </motion.h3>
            
            <motion.p 
              className="text-primary-700 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {activeItem.description}
            </motion.p>
            
            {/* Collection Selector */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {showcaseItems.map((item, index) => (
                <button
                  key={item.id}
                  className={`w-full text-left p-4 border transition-all ${
                    index === activeIndex 
                      ? 'border-primary-800 bg-primary-50' 
                      : 'border-primary-200 hover:border-primary-400'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full mr-3" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-heading">{item.name}</span>
                  </div>
                </button>
              ))}
            </motion.div>
            
            <motion.button 
              className="btn-primary mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              View Collection
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDShowcase;