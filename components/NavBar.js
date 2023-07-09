'use client'
import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <svg viewBox="0 0 200 200" width="50" height="50">
                <defs>
                    <linearGradient id="grad" gradientTransform="rotate(45)">
                        <stop offset="0%" stop-color="#FF0080" />
                        <stop offset="100%" stop-color="#FF9933" />
                    </linearGradient>
                </defs>
                <polygon  points="150,5 195,295 15,115" fill="url(#grad)" />
                <polygon  points="15,50 195,295 15,15" fill="#6527BE" />
                <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-size="60" font-weight="bold">ૐ</text>
            </svg> 
            <div className="hidden md:block">
                <a className="mynav-items active">Home</a>
                <a className="mynav-items">About</a>
                <a className="mynav-items">Contact</a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
                onClick={toggleMenu}
                type="button"
                className="text-red-700 hover:text-red-700 focus:outline-none focus:text-red-700"
            >
                <MenuIcon
                    className={`h-6 w-6 transition-transform duration-300 ${
                        isOpen ? 'transform rotate-90' : ''
                    }`}
                />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden transition-all duration-300`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className={`${
              isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            } mobile-nav-items`}
          >
            Home
          </a>
          <a
            href="#"
            className={`${
              isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            } mobile-nav-items`}
          >
            About
          </a>
          <a
            href="#"
            className={`${
              isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            } mobile-nav-items`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
