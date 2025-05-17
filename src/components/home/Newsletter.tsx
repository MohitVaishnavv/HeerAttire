import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Submitted email:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="section bg-accent-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="font-heading text-4xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Join Our Community
          </motion.h2>
          
          <motion.p 
            className="text-primary-600 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Subscribe to receive exclusive offers, early access to new collections, and style inspiration directly to your inbox.
          </motion.p>
          
          <motion.form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row max-w-md mx-auto gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              className="flex-grow p-3 bg-white border border-primary-200 focus:outline-none focus:border-primary-500 transition-colors"
              required
            />
            <button 
              type="submit" 
              className={`px-6 py-3 flex justify-center items-center transition-all duration-300 ${
                isSubmitted 
                  ? 'bg-green-600 text-white' 
                  : 'bg-primary-800 text-white hover:bg-primary-700'
              }`}
            >
              {isSubmitted ? (
                <>
                  <Check size={16} className="mr-2" />
                  <span>Thank You</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send size={16} className="ml-2" />
                </>
              )}
            </button>
          </motion.form>
          
          <motion.p 
            className="text-primary-500 text-sm mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We respect your privacy and will never share your information.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;