import Link from 'next/link';
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useUser, useClerk } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';


const NavbarDesktop = () => {
	const { theme, toggleTheme } = useTheme();
	const { isSignedIn } = useUser(); // Use the useUser hook to check sign-in state
	const { openSignIn } = useClerk(); // Access Clerk's openSignIn method to trigger the sign-in modal

	return (

		<nav className="shadow" style={{
			backgroundColor: 'var(--entry-background-color)',
			color: 'var(--text-color)',
			boxShadow: `0 2px 4px var(--entry-shadow-color), 0 2px 4px var(--entry-shadow-color)` // Applied shadow
		}}>
			<div className="max-w-6xl mx-auto px-4 flex justify-between items-center">

				{/* Common Brand/Logo Section */}
				<div className="flex items-center">
					<Link href="/" style={{ color: 'var(--text-color)' }} className="font-bold text-2xl">VHD
					</Link>
				</div>

				{/* DESKTOP Navigation Links */}
				<div className="flex-grow">
					<div className="flex justify-center space-x-4">
						<Link href="/about" className="py-5 px-3" style={{ color: 'var(--text-color)' }}>About</Link>
						<Link href="/events" className="py-5 px-3" style={{ color: 'var(--text-color)' }}>Events</Link>
						<Link href="/team" className="py-5 px-3" style={{ color: 'var(--text-color)' }}>Team</Link>
						<Link href="/blog" className="py-5 px-3" style={{ color: 'var(--text-color)' }}>Blog</Link>
						<Link href="/sponsorship" className="py-5 px-3" style={{ color: 'var(--text-color)' }}>Sponsorship</Link>
						{isSignedIn && <Link href="/member_area" style={{ color: 'var(--accent-text-color)' }} className="font-bold py-5 px-3">Member Area</Link>}
					</div>
				</div>

				<div className="flex items-center space-x-4">
					<button onClick={toggleTheme} style={{
						display: 'inline-flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '40px',
						height: '20px',
						backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
						borderRadius: '25px',
						border: 'none',
						cursor: 'pointer',
						position: 'relative',
						transition: 'background-color 0.3s ease'
					}}>
						<span style={{
							display: 'block',
							width: '12px',
							height: '12px',
							backgroundColor: theme === 'light' ? '#333' : '#f0f0f0',
							borderRadius: '50%',
							position: 'absolute',
							left: theme === 'light' ? '5px' : '22px',
							transition: 'left 0.3s ease'
						}}></span>
					</button>



					<div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
						{/* Common Brand/Logo Section */}
						{/* ... */}

						{/* Conditional rendering for sign-in / sign-out */}
						<div className="flex items-center space-x-4">
							<button onClick={toggleTheme} style={{
								// Theme toggle button styles
							}}>
								{/* Theme toggle icon */}
							</button>

							{/* {isSignedIn ? (
								<UserButton />
							) : (
								// Use an `a` tag or similar element and bind the `openSignIn` method to its click event
								<a onClick={() => openSignIn()} className="py-2 px-3 cursor-pointer" style={{ color: 'var(--text-color)' }}>
									Login
								</a>
							)} */}
						</div>
					</div>



				</div>
			</div>
		</nav>
	);
};

export default NavbarDesktop;
