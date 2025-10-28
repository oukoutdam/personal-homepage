'use client';

import { useState, useEffect } from 'react';

import React from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-6 right-6 z-50'>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='transform rounded-full bg-gray-800 p-3 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
          aria-label='Scroll to top'
        >
          <svg
            className='h-5 w-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 10l7-7m0 0l7 7m-7-7v18'
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
