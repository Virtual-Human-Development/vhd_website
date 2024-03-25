import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageLink from '../components/ImageLink'; // Import the ImageLink component
import { useTheme } from '../context/ThemeContext';

import Accordion from '../components/AccordionTeam';
import { memberList } from '../data/memberList';




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
                        TEAM
                    </h1>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-lg font-bold" style={{ color: 'var(--text-color)' }}>
                            The Virtual Human Development Consortium.
                        </h2>
                        <p className="text-md mt-4" style={{ color: 'var(--secondary-text-color)' }}>
                            Co-founded by Drs. Maria Abou Chakra, Nozomu Yachie, and Nika Shakiba, who act as the Founding Directors of the consortium. Under their leadership, the consortium now consists of over 40 world leading scientists and their teams, bridging experimentalists and theoreticians. The consortium strategically intersects experts and technologies from divergent disciplines to drive robust experiment-to-theory research cycles. The consortium leverages expertise in stem cells and developmental biology, stem cell bioengineering, synthetic biology, systems biology, evolutionary biology, bioinformatics, machine learning, mathematical biology. We are also actively recruiting in the area of bioethics.
                        </p>
                    </div>
                    <Image src="/consortium.jpg" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg" />
                </div>
            </main>


            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-lg font-bold" style={{ color: 'var(--text-color)' }}>
                            Here then, the full list of members!
                        </h2>
                        <p className="text-md mt-4" style={{ color: 'var(--secondary-text-color)' }}>
                            Starting with the advisory board:
                        </p>
                    </div>
                </div>
            </main>


            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 " style={{ width: '80%', margin: '0 auto' }}> {/* Adjust width and margin as needed */}
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-color)' }}>
                    Entries</h2>
                {memberList.map(post => (
                    <Accordion key={post.id} post={post} />
                ))}
            </main>


            <Footer />

        </div >
    )
}
