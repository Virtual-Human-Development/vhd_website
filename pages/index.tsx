import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageLink from '../components/ImageLink'; // Import the ImageLink component
import { useTheme } from '../context/ThemeContext';
import { blogPosts, BlogPost } from '../data/blogPosts'; // Adjust the import path as necessary



export default function Home() {
  const { theme } = useTheme(); // Using theme from ThemeContext

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
      <Head>
        <title>VHD Website</title>
        <meta name="description" content="VHD Website" />
      </Head>

      <Navbar />

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
          <Image src="/vhd_banner_1.jpg" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg" />
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
          <Image src="/VHD_banner_2.jpg" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg" />
        </div>
      </main>


      <main className="py-12" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold" style={{ color: 'var(--text-color)' }}>Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {blogPosts.slice(0, 4).map((post) => ( // Only show the first 4 posts or however many you prefer
              <div key={post.id} className="rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: 'var(--background-color)' }}>
                <Link href={`/blog`} passHref>
                  <Image src={post.imgSrc} alt={post.title} width={400} height={250} className="w-full h-auto" layout="responsive" />
                  <div className="p-4">
                    <h3 className="text-md font-bold" style={{ color: 'var(--text-color)' }}>{post.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--secondary-text-color)' }}>{post.subtitle}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>


      <Footer />

    </div >
  )
}

