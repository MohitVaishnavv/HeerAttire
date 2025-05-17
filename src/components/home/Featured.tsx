import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeDScene from '../3d/ThreeDScene';

interface FeaturedItemProps {
  id: string;
  name: string;
  price: string;
  image: string;
  isNew?: boolean;
  delay: number;
}

const FeaturedItem: React.FC<FeaturedItemProps> = ({ id, name, price, image, isNew = false, delay }) => {
  return (
    <motion.div 
      className="product-card w-full md:w-80 flex-shrink-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
    >
      <div className="relative h-96 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
        {isNew && (
          <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-medium py-1 px-2">
            New Arrival
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-heading text-xl">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-accent-700">{price}</span>
          <Link to={`/products/${id}`} className="text-primary-800 hover:text-accent-500 transition-colors">
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Featured: React.FC = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'The Meridian Blazer',
      price: '$295',
      image: 'https://images.pexels.com/photos/2923922/pexels-photo-2923922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isNew: true,
    },
    {
      id: '2',
      name: 'Linen Blend Trousers',
      price: '$175',
      image: 'https://images.pexels.com/photos/4067779/pexels-photo-4067779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '3',
      name: 'Structured Wool Coat',
      price: '$425',
      image: 'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      isNew: true,
    },
    {
      id: '4',
      name: 'Silk Blend Shirt',
      price: '$215',
      image: 'https://images.pexels.com/photos/5699756/pexels-photo-5699756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className="font-heading text-4xl mb-3">Featured Collection</h2>
            <p className="text-primary-600 max-w-xl">Discover our latest designs crafted with premium sustainable materials and timeless elegance.</p>
          </div>
          <Link to="/products" className="mt-4 md:mt-0 group flex items-center text-primary-800">
            <span className="mr-2 group-hover:mr-3 transition-all">View All</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <FeaturedItem 
              key={product.id} 
              {...product} 
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;