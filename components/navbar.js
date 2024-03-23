import React, { useState, useEffect } from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar = ({ toggleTheme, theme }) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Function to update state based on viewport width
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // 768px is typically considered the breakpoint between mobile and desktop
    };

    // Set the initial state based on current viewport width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isMobileView ? (
        <NavbarMobile toggleTheme={toggleTheme} theme={theme} />
      ) : (
        <NavbarDesktop toggleTheme={toggleTheme} theme={theme} />
      )}
    </div>
  );
};

export default Navbar;
