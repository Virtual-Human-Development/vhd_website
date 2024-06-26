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
              Developing a model of human embryology
            </h2>
            <p className="text-md mt-4" style={{ color: 'var(--secondary-text-color)' }}>
              We&#39;re creating a simulator capable of predicting multicellular developmental outcomes. By bringing together mathematical modeling, laboratory experiments and state-of-the-art computer science, the VHD consortium is helping usher in the next-generation of embryo modeling toward novel disease cures.
            </p>
          </div>
          <Image src="/vhd_banner_1.jpg" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg" />
        </div>
      </main>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-lg font-bold" style={{ color: 'var(--text-color)' }}>
              Join the community and make a difference.
            </h2>
            <p className="text-md mt-4" style={{ color: 'var(--secondary-text-color)' }}>
              Join our consortium to make a positive impact. Connect with like-minded scientists and stay up-to-date on modeling developments.
            </p>
            <Link href="/team">
              <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View all members
              </button>
            </Link>
          </div>
          <Image src="/vhd_meeting_1.jpg" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg" />
        </div>
      </main>



      <main className="py-12" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold" style={{ color: 'var(--text-color)' }}>Latest Updates from our blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {blogPosts.slice(0, 4).map((post) => ( // Only show the first 4 posts or however many you prefer
              <div key={post.id} className="rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: 'var(--entry-background-color)' }}>
                <Link href={`/blog`} passHref>
                  <Image src={post.imgSrc} alt={post.title} width={400} height={250} className="w-full h-auto" layout="responsive" />
                  <div className="p-4">
                    <h3 className="text-md font-bold" style={{ color: 'var(--text-color)', fontSize: '0.9rem' }}>{post.title}</h3>
                    <p className="text-sm pt-4" style={{ color: 'var(--secondary-text-color)', fontSize: '0.8rem' }}>{post.subtitle}</p>
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

