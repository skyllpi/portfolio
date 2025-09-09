'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black rounded-full px-4 py-2 flex items-center space-x-4 shadow-lg">
        <button 
          onClick={() => scrollToSection('home')} 
          className="p-2 text-gray-300 hover:text-white transition-colors"
          title="Home"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L9 5.414V17a1 1 0 102 0V5.414l5.293 5.293a1 1 0 001.414-1.414l-7-7z"/>
          </svg>
        </button>
        
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 text-gray-300 hover:text-white transition-colors"
          title="About"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.868.504l-3 5a1 1 0 001.732 1L10 9.87l2.136 3.534a1 1 0 001.732-1l-3-5A1 1 0 0010 7z" clipRule="evenodd"/>
          </svg>
        </button>

        <button 
          onClick={() => scrollToSection('projects')} 
          className="p-2 text-gray-300 hover:text-white transition-colors"
          title="Projects"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
          </svg>
        </button>

        <button 
          onClick={() => scrollToSection('contact')} 
          className="p-2 text-gray-300 hover:text-white transition-colors"
          title="Contact"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;