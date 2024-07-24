import React, { useState, useEffect } from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
	const { theme, toggleTheme } = useTheme();
	const [isMobileView, setIsMobileView] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth <= 768); // 768px is a common breakpoint for mobile views
		};

		handleResize(); // Set the initial state based on the current viewport width

		window.addEventListener('resize', handleResize); // Add event listener for window resize

		return () => window.removeEventListener('resize', handleResize); // Cleanup function to remove the event listener
	}, []);

	return (
		<div>
			{/* No longer passing theme and toggleTheme as props */}
			{isMobileView ? <NavbarMobile /> : <NavbarDesktop />}
		</div>
	);
};

export default Navbar;