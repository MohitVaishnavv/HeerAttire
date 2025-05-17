import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-primary-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/">
              <Logo color="#f0ede7" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Elevating everyday fashion with sustainable, timeless pieces crafted for the modern lifestyle.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-heading text-xl mb-4 text-primary-50">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-sm hover:text-gold-400 transition-colors">All Collections</Link></li>
              <li><Link to="/products" className="text-sm hover:text-gold-400 transition-colors">New Arrivals</Link></li>
              <li><Link to="/products" className="text-sm hover:text-gold-400 transition-colors">Best Sellers</Link></li>
              <li><Link to="/products" className="text-sm hover:text-gold-400 transition-colors">Sale</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4 className="font-heading text-xl mb-4 text-primary-50">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-gold-400 transition-colors">Our Story</Link></li>
              <li><Link to="/about" className="text-sm hover:text-gold-400 transition-colors">Sustainability</Link></li>
              <li><Link to="/about" className="text-sm hover:text-gold-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-gold-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="font-heading text-xl mb-4 text-primary-50">Stay Updated</h4>
            <p className="text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-primary-800 text-primary-100 px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-gold-400"
              />
              <button 
                type="submit" 
                className="bg-gold-500 text-primary-900 px-4 hover:bg-gold-400 transition-colors"
              >
                <Mail size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs opacity-75">&copy; {new Date().getFullYear()} Heer Attire. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs hover:text-gold-400 transition-colors">Terms of Service</Link>
            <Link to="/shipping" className="text-xs hover:text-gold-400 transition-colors">Shipping Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;