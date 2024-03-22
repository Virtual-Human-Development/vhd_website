import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import 'react-h5-audio-player/lib/styles.css'; // Import stylesheet
import AudioPlayer from 'react-h5-audio-player';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Define an interface for the ImageLink props
interface ImageLinkProps {
  href: string;
  imgSrc: string;
  text: string;
  gridClass?: string; // Make gridClass optional as it might not always be provided
}

// Use the ImageLinkProps interface for the ImageLink component's props
const ImageLink: React.FC<ImageLinkProps> = ({ href, imgSrc, text, gridClass = '' }) => (
  <li className={`flex-none ${gridClass} w-full sm:w-auto`}>
    <Link href={href} passHref>
      <div className="block">
        <Image src={imgSrc} alt={text} width={500} height={300} className="rounded-lg" layout="responsive" />
        <span className="block text-center mt-2">{text}</span>
      </div>
    </Link>
  </li>
);

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Persist theme preference
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-200" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>

      <Head>
        <title>VHD Website</title>
        <meta name="description" content="VHD Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="shadow" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 items-center">
            <div className="flex items-center">
              <a href="#" style={{ color: 'var(--text-color)' }}>
                <span className="font-bold">VHD</span>
              </a>
            </div>
            <div className="flex justify-center md:flex md:space-x-2">
              <a href="#" className="py-5 px-3" style={{ color: 'var(--text-color)' }}>About</a>
              <a href="#" className="py-5 px-3" style={{ color: 'var(--text-color)' }}>Events</a>
              <a href="#" className="py-5 px-3" style={{ color: 'var(--text-color)' }}>Team</a>
              <a href="#" className="py-5 px-3" style={{ color: 'var(--text-color)' }}>Sponsorship</a>
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


      <header className="text-center pt-20 pb-16" style={{ color: 'var(--text-color)' }}>
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold" style={{ color: 'var(--text-color)' }}>
            Unlocking the marvels of human development so we can understand disease and program cells for regenerative medicine.
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-lg font-bold" style={{ color: 'var(--text-color)' }}>
              Join our community and make a difference.
            </h2>
            <p className="text-md mt-4" style={{ color: 'var(--secondary-text-color)' }}>
              Join our consortium to make a positive impact in your industry. Connect with like-minded professionals and stay up-to-date on industry developments.
            </p>
          </div>
          <Image src="/VHD_banner_1.png" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg" layout="intrinsic" />
        </div>
      </main>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-lg font-bold" style={{ color: 'var(--text-color)' }}>
              The next generation of human developmental models. 
            </h2>
            <p className="text-md mt-4" style={{ color: 'var(--secondary-text-color)' }}>
              Leveraging a high-impact community with decades of modeling experience. 
            </p>
          </div>
          <Image src="/VHD_banner_2.png" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg" layout="intrinsic" />
        </div>
      </main>


      <footer className="shadow w-full" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Social Media Links */}
            <Link href="https://twitter.com/virtualhumandevelopment" passHref>
              <div className="cursor-pointer">
                <Image src="/icons/twitter.png" alt="Twitter" width={24} height={24} />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/company/virtual-human-development/" passHref>
              <div className="cursor-pointer">
                <Image src="/icons/linkedin.png" alt="LinkedIn" width={24} height={24} />
              </div>
            </Link>
            <Link href="https://www.instagram.com/virtualhumandevelopment/" passHref>
              <div className="cursor-pointer">
                <Image src="/icons/instagram.png" alt="Instagram" width={24} height={24} />
              </div>
            </Link>
            <Link href="mailto:vhdconsortium@gmail.com" passHref>
              <div className="cursor-pointer">
                <Image src="/icons/email.png" alt="Email" width={24} height={24} />
              </div>
            </Link>
          </div>
          <div>
            {/* Copyright Statement */}
            <p className="text-sm " style={{ color: 'var(--secondary-text-color)' }}>Copyright © 2024 Virtual Human Development</p>
          </div>
        </div>
      </footer>

    </div >
  )
}
