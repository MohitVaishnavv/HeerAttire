import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Heart, ShoppingBag, Info } from 'lucide-react';
import ThreeDScene from '../components/3d/ThreeDScene';

interface ProductSize {
  label: string;
  value: string;
  available: boolean;
}

interface ProductColor {
  name: string;
  value: string;
  primary: boolean;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [showCare, setShowCare] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  
  // Sample product data - in a real app, this would come from an API call
  const product = {
    id: id || '1',
    name: 'The Meridian Blazer',
    price: '$295',
    description: 'A beautifully tailored blazer crafted from premium Italian wool with a touch of stretch for comfort. The perfect balance of structured design and easy elegance for any occasion.',
    details: [
      'Italian wool blend (96% wool, 4% elastane)',
      'Single-breasted design with subtle darts for shape',
      'Two-button closure with custom Heer hardware',
      'Three interior pockets with sustainable lining',
      'Handcrafted in small batches'
    ],
    care: [
      'Dry clean only',
      'Cool iron if needed',
      'Store on a padded hanger',
      'Avoid exposure to direct sunlight when storing'
    ],
    sizes: [
      { label: 'XS', value: 'xs', available: true },
      { label: 'S', value: 's', available: true },
      { label: 'M', value: 'm', available: true },
      { label: 'L', value: 'l', available: true },
      { label: 'XL', value: 'xl', available: false }
    ],
    colors: [
      { name: 'Espresso', value: '#3a2d26', primary: true },
      { name: 'Slate Grey', value: '#5d6970', primary: false },
      { name: 'Midnight Blue', value: '#1f2937', primary: false }
    ],
    images: [
      'https://images.pexels.com/photos/2923922/pexels-photo-2923922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    shipping: 'Free shipping on orders over $150. Estimated delivery within 3-5 business days.'
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${product.name} | HEER ATTIRE`;
    
    // Initialize with first available options
    const firstAvailableSize = product.sizes.find(size => size.available);
    if (firstAvailableSize) {
      setSelectedSize(firstAvailableSize.value);
    }
    
    const primaryColor = product.colors.find(color => color.primary);
    if (primaryColor) {
      setSelectedColor(primaryColor.value);
    }
  }, [product]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Breadcrumb */}
      <div className="bg-primary-100 py-4">
        <div className="container-custom">
          <div className="flex items-center text-sm text-primary-600">
            <Link to="/products" className="flex items-center hover:text-primary-800 transition-colors">
              <ChevronLeft size={16} className="mr-1" />
              Back to Collections
            </Link>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images and 3D Model */}
            <div>
              {/* Main Image */}
              <div className="mb-4 h-[500px] bg-white relative">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 p-2 bg-white/80 text-primary-800 rounded-full hover:bg-white transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} />
                </button>
              </div>
              
              {/* 3D Model */}
              <div className="h-[300px] bg-primary-100 mb-4 overflow-hidden">
                <div className="w-full h-full relative interactive-cursor">
                  <ThreeDScene backgroundColor="#f0ede7" />
                  <div className="absolute top-4 left-4 bg-white/80 text-primary-800 px-3 py-1 text-xs">
                    3D View - Drag to Rotate
                  </div>
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div key={index} className="h-24 bg-white cursor-pointer">
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="font-heading text-3xl md:text-4xl mb-2">{product.name}</h1>
              <p className="text-accent-700 text-xl mb-6">{product.price}</p>
              
              <p className="text-primary-700 mb-8">{product.description}</p>
              
              {/* Color Options */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Color: {product.colors.find(c => c.value === selectedColor)?.name}</h3>
                </div>
                <div className="flex space-x-3">
                  {product.colors.map(color => (
                    <button
                      key={color.value}
                      className={`w-8 h-8 rounded-full transition-all ${
                        selectedColor === color.value 
                          ? 'ring-2 ring-primary-800 ring-offset-2' 
                          : 'hover:ring-1 hover:ring-primary-300 hover:ring-offset-1'
                      }`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => setSelectedColor(color.value)}
                      aria-label={`Select ${color.name}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Size Options */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Size</h3>
                  <button 
                    className="text-sm text-primary-600 flex items-center hover:text-primary-800 transition-colors"
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                  >
                    Size Guide <Info size={14} className="ml-1" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size.value}
                      className={`py-2 px-4 border transition-colors ${
                        !size.available 
                          ? 'border-primary-200 text-primary-300 cursor-not-allowed' 
                          : selectedSize === size.value 
                            ? 'border-primary-800 bg-primary-800 text-white' 
                            : 'border-primary-200 hover:border-primary-400'
                      }`}
                      disabled={!size.available}
                      onClick={() => setSelectedSize(size.value)}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
                {showSizeGuide && (
                  <div className="mt-3 p-4 bg-primary-100 text-sm">
                    <h4 className="font-medium mb-2">Size Guide</h4>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-primary-200">
                          <th className="text-left py-2">Size</th>
                          <th className="text-left py-2">Chest (in)</th>
                          <th className="text-left py-2">Waist (in)</th>
                          <th className="text-left py-2">Hip (in)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-primary-200">
                          <td className="py-2">XS</td>
                          <td className="py-2">32-34</td>
                          <td className="py-2">26-28</td>
                          <td className="py-2">34-36</td>
                        </tr>
                        <tr className="border-b border-primary-200">
                          <td className="py-2">S</td>
                          <td className="py-2">35-37</td>
                          <td className="py-2">29-31</td>
                          <td className="py-2">37-39</td>
                        </tr>
                        <tr className="border-b border-primary-200">
                          <td className="py-2">M</td>
                          <td className="py-2">38-40</td>
                          <td className="py-2">32-34</td>
                          <td className="py-2">40-42</td>
                        </tr>
                        <tr className="border-b border-primary-200">
                          <td className="py-2">L</td>
                          <td className="py-2">41-43</td>
                          <td className="py-2">35-37</td>
                          <td className="py-2">43-45</td>
                        </tr>
                        <tr>
                          <td className="py-2">XL</td>
                          <td className="py-2">44-46</td>
                          <td className="py-2">38-40</td>
                          <td className="py-2">46-48</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              
              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="btn-primary flex-grow flex items-center justify-center">
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Bag
                </button>
                <button className="btn-outline flex items-center justify-center">
                  <Heart size={18} className="mr-2" />
                  Save
                </button>
              </div>
              
              {/* Product Information Sections */}
              <div className="border-t border-primary-200">
                <button
                  className={`w-full py-4 flex justify-between items-center border-b border-primary-200 transition-colors ${showDetails ? 'text-primary-800' : 'text-primary-600 hover:text-primary-700'}`}
                  onClick={() => setShowDetails(!showDetails)}
                >
                  <span className="font-medium">Product Details</span>
                  <span>{showDetails ? '−' : '+'}</span>
                </button>
                {showDetails && (
                  <div className="py-4 px-1 text-primary-700">
                    <ul className="list-disc pl-5 space-y-1">
                      {product.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <button
                  className={`w-full py-4 flex justify-between items-center border-b border-primary-200 transition-colors ${showCare ? 'text-primary-800' : 'text-primary-600 hover:text-primary-700'}`}
                  onClick={() => setShowCare(!showCare)}
                >
                  <span className="font-medium">Care Instructions</span>
                  <span>{showCare ? '−' : '+'}</span>
                </button>
                {showCare && (
                  <div className="py-4 px-1 text-primary-700">
                    <ul className="list-disc pl-5 space-y-1">
                      {product.care.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <button
                  className={`w-full py-4 flex justify-between items-center border-b border-primary-200 transition-colors ${showShipping ? 'text-primary-800' : 'text-primary-600 hover:text-primary-700'}`}
                  onClick={() => setShowShipping(!showShipping)}
                >
                  <span className="font-medium">Shipping & Returns</span>
                  <span>{showShipping ? '−' : '+'}</span>
                </button>
                {showShipping && (
                  <div className="py-4 px-1 text-primary-700">
                    <p>{product.shipping}</p>
                    <p className="mt-2">We accept returns within 30 days of delivery. Items must be in original condition with tags attached.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductDetail;