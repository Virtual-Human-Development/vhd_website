import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'react-h5-audio-player/lib/styles.css'; // Import stylesheet
import AudioPlayer from 'react-h5-audio-player';
import { useState } from 'react';

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
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Head>
        <title>VHD Website</title>
        <meta name="description" content="VHD Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 items-center">
            <div className="flex items-center">
              <a href="#" className="py-5 px-2 text-gray-700 hover:text-gray-900">
                <span className="font-bold">VHD</span>
              </a>
            </div>
            <div className="flex justify-center md:flex md:space-x-2">
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">About</a>
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Events</a>
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Team</a>
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Sponsorship</a>
            </div>
            <div className="flex justify-end items-center">
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Login</a>
            </div>
          </div>
        </div>
      </nav>

      <header className="text-center pt-20 pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800">
            Unlocking the marvels of human development so we can understand disease and program cells for regenerative medicine.
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Join our community and make a difference.
            </h2>
            <p className="text-gray-700 text-lg mt-4">
              Join our consortium to make a positive impact in your industry. Connect with like-minded professionals and stay up-to-date on industry developments.
            </p>
          </div>
          <img src="https://via.placeholder.com/400" alt="Placeholder" className="rounded-lg shadow-lg" />
        </div>
      </main>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Join our community and make a difference.
            </h2>
            <p className="text-gray-700 text-lg mt-4">
              Join our consortium to make a positive impact in your industry. Connect with like-minded professionals and stay up-to-date on industry developments.
            </p>
          </div>
          <img src="https://via.placeholder.com/400" alt="Placeholder" className="rounded-lg shadow-lg" />
        </div>
      </main>


      <footer className="bg-white shadow w-full absolute bottom-0">
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
            <p className="text-gray-600">Copyright © 2024 Virtual Human Development</p>
          </div>
        </div>
      </footer>

    </div >
  )
}
