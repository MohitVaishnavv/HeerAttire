import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | HEER ATTIRE';
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-primary-50">
      <div className="text-center px-4">
        <h1 className="font-heading text-6xl md:text-8xl mb-4">404</h1>
        <h2 className="font-heading text-2xl md:text-3xl mb-6">Page Not Found</h2>
        <p className="text-primary-600 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <ArrowLeft size={18} className="mr-2" />
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;