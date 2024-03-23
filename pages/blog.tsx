import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
import ImageLink from '../components/ImageLink'; // Import the ImageLink component
import { useTheme } from '../context/ThemeContext';
import { blogPosts } from '../data/blogPosts'; // Import the shared blogPosts data


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
                        BLOG
                    </h1>
                </div>
            </header>

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

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 " style={{ width: '80%', margin: '0 auto' }}> {/* Adjust width and margin as needed */}
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-color)' }}>
                    Entries</h2>
                {blogPosts.map(post => (
                    <Accordion key={post.id} post={post} />
                ))}
            </main>


            <Footer />

        </div >
    )
}
