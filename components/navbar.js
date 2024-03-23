// components/Navbar.js
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="shadow" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-3 items-center">
      <div className="flex items-center">
                        <Link href="/" passHref style={{ color: 'var(--text-color)' }}><span className="font-bold">VHD</span>
                        </Link>
                    </div>
                    <div className="flex justify-center md:flex md:space-x-2">
                        <Link href="/about" passHref className="py-5 px-3" style={{ color: 'var(--text-color)' }}>
                            About
                        </Link>
                        <Link href="/events" passHref className="py-5 px-3" style={{ color: 'var(--text-color)' }}>
                            Events 
                        </Link>
                        <Link href="/team" passHref className="py-5 px-3" style={{ color: 'var(--text-color)' }}>
                            Team
                        </Link>
                        <Link href="/blog" passHref className="py-5 px-3" style={{ color: 'var(--text-color)' }}>
                            Blog
                        </Link>
                        <Link href="/sponsorship" passHref className="py-5 px-3" style={{ color: 'var(--text-color)' }}>
                            Sponsorship
                        </Link>
                    </div>
        <div className="flex justify-end items-center">
          <button onClick={toggleTheme} style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px', // Slightly larger for better usability
            height: '20px',
            backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
            borderRadius: '25px', // Half the height for a perfect circle on the ends
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            transition: 'background-color 0.3s ease'
          }}>
            <span style={{
              display: 'block',
              width: '12px', // A larger dot for better visibility
              height: '12px',
              backgroundColor: theme === 'light' ? '#333' : '#f0f0f0', // Keep the color change for visual feedback
              borderRadius: '50%',
              position: 'absolute',
              left: theme === 'light' ? '5px' : '22px', // Start 5px from the left edge for the light theme
              transition: 'left 0.3s ease'
            }}></span>
          </button>
          <a href="#" className="py-5 px-3" style={{ color: 'var(--text-color)' }}>Login</a>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
