import Link from 'next/link';
import { useState } from 'react';

const Navbar = ({ toggleTheme, theme }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">


            <div className="flex items-center">
                <Link href="/" passHref><a style={{ color: 'var(--text-color)' }}><span className="font-bold">VHD</span></a></Link>
            </div>

            
            <div className="md:hidden flex items-center">
                
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


                <button onClick={() => setIsOpen(!isOpen)}>☰</button>
            </div>


            <div className={`absolute md:relative top-16 left-0 w-full md:w-auto bg-gray-100 md:bg-transparent transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
            <div className="flex flex-col md:flex-row md:space-x-2">
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
                    <Link href="/login" passHref className="py-5 px-3" style={{ color: 'var(--text-color)' }}>
                        Login
                    </Link>
                </div>
            </div>


      </div>
    </nav>
  );
};


export default Navbar;

