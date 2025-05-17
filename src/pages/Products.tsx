import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  tags: string[];
  isNew?: boolean;
}

const Products: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Sample product data
  const products: Product[] = [
    {
      id: '1',
      name: 'The Meridian Blazer',
      price: '$295',
      image: 'https://images.pexels.com/photos/2923922/pexels-photo-2923922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'outerwear',
      tags: ['blazer', 'professional', 'spring'],
      isNew: true,
    },
    {
      id: '2',
      name: 'Linen Blend Trousers',
      price: '$175',
      image: 'https://images.pexels.com/photos/4067779/pexels-photo-4067779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'bottoms',
      tags: ['trousers', 'summer', 'linen'],
    },
    {
      id: '3',
      name: 'Structured Wool Coat',
      price: '$425',
      image: 'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'outerwear',
      tags: ['coat', 'winter', 'wool'],
      isNew: true,
    },
    {
      id: '4',
      name: 'Silk Blend Shirt',
      price: '$215',
      image: 'https://images.pexels.com/photos/5699756/pexels-photo-5699756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'tops',
      tags: ['shirt', 'formal', 'silk'],
    },
    {
      id: '5',
      name: 'Cotton Poplin Dress',
      price: '$245',
      image: 'https://images.pexels.com/photos/6567583/pexels-photo-6567583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'dresses',
      tags: ['dress', 'summer', 'cotton'],
    },
    {
      id: '6',
      name: 'Merino Wool Sweater',
      price: '$185',
      image: 'https://images.pexels.com/photos/5384427/pexels-photo-5384427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'tops',
      tags: ['sweater', 'winter', 'wool'],
      isNew: true,
    },
    {
      id: '7',
      name: 'Cashmere Scarf',
      price: '$120',
      image: 'https://images.pexels.com/photos/6348116/pexels-photo-6348116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'accessories',
      tags: ['scarf', 'winter', 'cashmere'],
    },
    {
      id: '8',
      name: 'Tailored Shorts',
      price: '$145',
      image: 'https://images.pexels.com/photos/5384425/pexels-photo-5384425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'bottoms',
      tags: ['shorts', 'summer', 'cotton'],
    },
  ];
  
  // Filter products based on category and search term
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  // Categories for filter
  const categories = [
    { value: 'all', label: 'All Collections' },
    { value: 'tops', label: 'Tops' },
    { value: 'bottoms', label: 'Bottoms' },
    { value: 'outerwear', label: 'Outerwear' },
    { value: 'dresses', label: 'Dresses' },
    { value: 'accessories', label: 'Accessories' },
  ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Collections | HEER ATTIRE';
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
          <h1 className="font-heading text-center">Our Collections</h1>
        </div>
      </div>
      
      {/* Filters */}
      <div className="bg-primary-100 sticky top-0 z-30 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Category tabs - desktop */}
            <div className="hidden md:flex space-x-8">
              {categories.map(category => (
                <button
                  key={category.value}
                  className={`text-sm uppercase tracking-wider pb-1 border-b-2 transition-colors ${
                    activeFilter === category.value 
                      ? 'border-primary-800 text-primary-800' 
                      : 'border-transparent text-primary-500 hover:text-primary-700'
                  }`}
                  onClick={() => setActiveFilter(category.value)}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            {/* Mobile filters button */}
            <button 
              className="md:hidden flex items-center text-primary-800"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {isFilterOpen ? (
                <>
                  <X size={18} className="mr-2" />
                  <span>Close Filters</span>
                </>
              ) : (
                <>
                  <Filter size={18} className="mr-2" />
                  <span>Filters</span>
                </>
              )}
            </button>
            
            {/* Search */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-10 pr-4 bg-white border border-primary-200 focus:border-primary-500 focus:outline-none transition-colors"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400" />
            </div>
          </div>
          
          {/* Mobile filter dropdown */}
          {isFilterOpen && (
            <div className="md:hidden mt-4 pb-2 grid grid-cols-2 gap-2">
              {categories.map(category => (
                <button
                  key={category.value}
                  className={`py-2 px-3 text-sm text-center transition-colors ${
                    activeFilter === category.value 
                      ? 'bg-primary-800 text-white' 
                      : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                  }`}
                  onClick={() => {
                    setActiveFilter(category.value);
                    setIsFilterOpen(false);
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Products */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="product-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    {product.isNew && (
                      <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-medium py-1 px-2">
                        New Arrival
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-xl">{product.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-accent-700">{product.price}</span>
                      <span className="text-xs uppercase text-primary-500">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="font-heading text-2xl mb-4">No products found</h3>
              <p className="text-primary-600 mb-6">Try adjusting your search or filter criteria.</p>
              <button 
                className="btn-primary"
                onClick={() => {
                  setActiveFilter('all');
                  setSearchTerm('');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Products;