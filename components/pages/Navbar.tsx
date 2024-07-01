// Navbar.tsx
"use client"; // Add this line at the top

import React, { useState } from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter, FaFacebookSquare, FaBars, FaTimes } from "react-icons/fa";
import { Noise } from '../ui/Wobble-card';
import { NavigationMenuDemo } from './NavigationMenu';


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-slate-50 relative flex flex-col md:flex-row items-center py-6 md:py-4 shadow-2xl'>
      {/* Logo positioned at the top left */}
      <div className='absolute top-0 left-2 p-2 z-10'>
        <a href='/'>
          <img src="/popelogo.png" alt="Logo" className='h-40 w-40 md:h-44 md:w-44' />
        </a>
      </div>
      
      {/* Menu Button for mobile view */}
      <div className='md:hidden absolute top-10 right-2 p-4 z-10'>
        <button onClick={toggleMenu} className='text-3xl text-black'>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Links section for desktop and mobile pop-up menu */}
      <div className={`flex-col md:flex-row gap-2 md:gap-6 text-cyan-950 mt-20 md:mt-0 ml-0 md:ml-56 pt-4 md:pt-6 font-semibold
        ${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-0 left-0 md:top-2.5  md:left-auto bg-slate-50 w-full md:w-auto h-full md:h-22`}>
         <div className='p-4 border-b md:border-none'>
         <NavigationMenuDemo />
         </div> 
      </div>

      {/* Blue container positioned below the logo */}
      <div className='absolute top-0 left-0 mb-2 w-full'>
        
      <div className="bg-gradient-to-r from-cyan-950 via-cyan-700 to-cyan-950 flex-auto py-3 pr-6 text-2xl relative z-0">
         
          {/* Social icons aligned to the top right */}
          
          <div className='flex items-center flex-row-reverse gap-4 md:gap-7'>
            <a href='https://www.instagram.com/rosariorasa/' target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram className="text-white" />
            </a>
            <a href=''>
              <FaTwitter className="text-white" />
            </a>
            <a href='https://www.facebook.com/popeindiaorg.tamilnadu' target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare className="text-white" />
            </a>
          <p className='text-xl text-white font-thin'>Follow us on {' >>'} </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

