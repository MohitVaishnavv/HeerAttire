import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const headerClass = scrolled
    ? 'bg-white shadow-md py-2'
    : 'bg-transparent py-4';

  const textClass = scrolled ? 'text-primary-800' : 'text-white';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-50">
          <Logo color={scrolled || isOpen ? '#5f4e3d' : '#ffffff'} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `nav-link ${textClass} ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              `nav-link ${textClass} ${isActive ? 'active' : ''}`
            }
          >
            Collections
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `nav-link ${textClass} ${isActive ? 'active' : ''}`
            }
          >
            Our Story
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `nav-link ${textClass} ${isActive ? 'active' : ''}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Cart Icon */}
        <div className="hidden md:flex items-center">
          <button className={`${textClass} p-2 hover:text-accent-500 transition-colors`}>
            <ShoppingBag size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden z-50 p-2 ${isOpen || scrolled ? 'text-primary-800' : 'text-white'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white flex flex-col items-center justify-center md:hidden"
            >
              <nav className="flex flex-col items-center space-y-8">
                <NavLink
                  to="/"
                  className={({ isActive }) => `text-2xl nav-link text-primary-800 ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive }) => `text-2xl nav-link text-primary-800 ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Collections
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `text-2xl nav-link text-primary-800 ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Our Story
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `text-2xl nav-link text-primary-800 ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
                <div className="flex items-center mt-8">
                  <button className="text-primary-800 p-2">
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;