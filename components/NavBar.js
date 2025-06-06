'use client'
import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import download from 'js-file-download';

const Navbar = ({setSharedState}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    // Construct the absolute URL for the PDF file
    const pdfFileUrl = `${process.env.BASE_PATH || ''}pdfs/AmarResume.pdf`;

    // Simulate fetching the PDF content
    fetch(pdfFileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Use js-file-download library to download the file
        download(blob, 'AmarKharviResume.pdf');
      })
      .catch((error) => console.error('Error downloading PDF:', error));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setSharedState(!isOpen);
  };

  return (
    <nav style={{background:'#6528F7'}} >
      <div className="max-w-7xl mx-auto px-3 sm:px-3 lg:px-3">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image 
            className='mr-3'
              src="icons/naruto.svg"
              alt='logo'
              width={40}
              height={40}
            />
            <div className="hidden lg:block">
                <a className="mynav-items active">Home</a>
                {/* <a className="mynav-items">About</a>
                <a className="mynav-items">Contact</a> */}
            </div>
          </div>
          <div className='hidden lg:block'>
              <button className=' shadow-2xl shadow-black  text-black text-xs font-ubuntu font-extrabold p-2 rounded-full transition-transform transform hover:-translate-y-1 hover:shadow-md ' style={{background:'#53FF0C'}} onClick={handleDownload}>Download CV</button>
            </div>
          <div className="-mr-2 flex lg:hidden md:block">
            <button
                onClick={toggleMenu}
                type="button"
                className="text-white hover:text-white  focus:outline-none focus:text-white"
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
        } lg:hidden transition-all duration-300`}
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
          {/* <a
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
          <a 
            onClick={handleDownload}
            className={`${
             isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
           } mobile-nav-items `}
          >Download CV</a> */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
