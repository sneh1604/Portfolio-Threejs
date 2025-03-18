import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  // Import PDF using Vite's import.meta.url
  const PDF_URL = new URL('../../assets/Sneh-Shah-Resume.pdf', import.meta.url).href;

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setError('Failed to load resume. Please try again later.');
    setIsLoading(false);
  };

  return (
    <div className="w-full h-screen bg-slate-900/95 p-4 relative">
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 right-4 z-50 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {isLoading && (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {error && (
        <div className="flex items-center justify-center h-full">
          <p className="text-red-500">{error}</p>
          <a 
            href={PDF_URL} 
            download 
            className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Download Resume
          </a>
        </div>
      )}

      <div className="rounded-lg overflow-hidden h-[calc(100vh-2rem)]">
        <iframe
          src={PDF_URL}
          className={`w-full h-full ${isLoading ? 'hidden' : 'block'}`}
          title="Resume"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      </div>
    </div>
  );
};

export default Resume;
