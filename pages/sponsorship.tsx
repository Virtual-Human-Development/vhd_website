import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ImageLink from '../components/ImageLink'; // Import the ImageLink component
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';



const blogUpdates = [
    { id: 1, imgSrc: "/wizard_AI_creator.png", title: "Blog Title 1", subtitle: "This is a subtitle for Blog 1" },
    { id: 2, imgSrc: "/wizard_AI_work.png", title: "Blog Title 2", subtitle: "This is a subtitle for Blog 2" },
    { id: 3, imgSrc: "/tree_iceberg.png", title: "Blog Title 3", subtitle: "This is a subtitle for Blog 3" },
    { id: 4, imgSrc: "/bio_eng_img.png", title: "Blog Title 4", subtitle: "This is a subtitle for Blog 4" },
];


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
                        SPONSORSHIP
                    </h1>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-lg font-bold" style={{ color: 'var(--text-color)' }}>
                            Thank you for your support.
                        </h2>
                        <p className="text-md mt-4" style={{ color: 'var(--secondary-text-color)' }}>
                            The stem cell network supported all our members and made it possible to for everyone to meet at our 1st workshop in Vancouver (Oct 5-6 2022) and 2nd workshop in Toronto (Oct 25-26 2022).
                        </p>
                    </div>
                    <Image src="/stem_cell_network.png" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg" />
                </div>
            </main>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-lg font-bold" style={{ color: 'var(--text-color)' }}>
                            Thank you for your support!
                        </h2>
                        <p className="text-md mt-4" style={{ color: 'var(--secondary-text-color)' }}>
                            Medicine by Design helped us share this initiative by sponsoring our website.
                        </p>
                    </div>
                    <Image src="/medicine_by_design.png" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg" />
                </div>
            </main>


            <Footer />

        </div >
    )
}
