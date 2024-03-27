import Link from 'next/link';
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { UserButton } from "@clerk/nextjs";


const NavbarMobile = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav
            className="shadow py-3 pl-5 pr-9"
            style={{
                backgroundColor: 'var(--entry-background-color)',
                color: 'var(--text-color)',
                boxShadow: `0 2px 4px var(--entry-shadow-color), 0 2px 4px var(--entry-shadow-color)`
            }}>
            <div className="max-w-6xl mx-auto flex justify-between items-center h-16">

                <Link href="/" className="font-bold text-2xl" style={{ color: 'var(--text-color)' }}>
                    VHD
                </Link>

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

                    <button className={`menu-button ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
                        <span className="menu-icon"></span>
                    </button>
                </div>
            </div>

            <div className={`fixed inset-0 z-50 transition-opacity duration-600 ease-in-out ${isOpen ? 'opacity-95' : 'opacity-0 pointer-events-none'}`}>
                <div className={`bg-[var(--entry-background-color)] p-4 h-full transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col items-end space-y-6 pt-3 pr-2">
                        <button onClick={() => setIsOpen(false)} className="text-4xl" aria-label="Close menu" style={{ color: 'var(--text-color)' }}>✕</button>

                        <Link href="/about"><span className="py-2 px-3 text-right" style={{ color: 'var(--text-color)' }}>About</span></Link>
                        <Link href="/events"><span className="py-2 px-3 text-right" style={{ color: 'var(--text-color)' }}>Events</span></Link>
                        <Link href="/team"><span className="py-2 px-3 text-right" style={{ color: 'var(--text-color)' }}>Team</span></Link>
                        <Link href="/blog"><span className="py-2 px-3 text-right" style={{ color: 'var(--text-color)' }}>Blog</span></Link>
                        <Link href="/sponsorship"><span className="py-2 px-3 text-right" style={{ color: 'var(--text-color)' }}>Sponsorship</span></Link>
                        <Link href="/member_area"><span className="py-2 px-3 text-right" style={{ color: 'var(--text-color)' }}> <UserButton /></span></Link>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarMobile;




