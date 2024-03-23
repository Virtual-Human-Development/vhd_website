// components/Footer.js
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = ({ theme }) => {
  return (
    <footer className="pt-40 shadow w-full" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Social Media Links */}
        <Link href="https://twitter.com/virtualhumandevelopment" passHref>
          <div className="cursor-pointer">
            <Image src={theme === 'light' ? "/icons/twitter-w.png" : "/icons/twitter-b.png"} alt="Twitter" width={24} height={24} />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/company/virtual-human-development/" passHref>
          <div className="cursor-pointer">
            <Image src={theme === 'light' ? "/icons/linkedin-w.png" : "/icons/linkedin-b.png"} alt="LinkedIn" width={24} height={24} />
          </div>
        </Link>
        <Link href="https://www.instagram.com/virtualhumandevelopment/" passHref>
          <div className="cursor-pointer">
            <Image src={theme === 'light' ? "/icons/instagram-w.png" : "/icons/instagram-b.png"} alt="Instagram" width={24} height={24} />
          </div>
        </Link>
        <Link href="mailto:vhdconsortium@gmail.com" passHref>
          <div className="cursor-pointer">
            <Image src={theme === 'light' ? "/icons/email-w.png" : "/icons/email-b.png"} alt="Email" width={24} height={24} />
          </div>
        </Link>
      </div>
      <div>
        {/* Copyright Statement */}
        <p className="text-sm " style={{ color: 'var(--secondary-text-color)' }}>Copyright © 2024 Virtual Human Development</p>
      </div>
    </div>
  </footer >
  );
};

export default Footer;
