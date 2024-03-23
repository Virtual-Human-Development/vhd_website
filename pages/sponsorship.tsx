import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';


// Define an interface for the ImageLink props
interface ImageLinkProps {
  href: string;
  imgSrc: string;
  text: string;
  gridClass?: string;
}

// Use the ImageLinkProps interface for the ImageLink component's props
const ImageLink: React.FC<ImageLinkProps> = ({ href, imgSrc, text, gridClass = '' }) => (
  <li className={`flex-none ${gridClass} w-full sm:w-auto`}>
    <Link href={href}>
      <div className="block">
        <Image src={imgSrc} alt={text} width={500} height={300} className="rounded-lg"/>
        <span className="block text-center mt-2">{text}</span>
      </div>
    </Link>
  </li>
);

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
                            Join our community and make a difference.
                        </h2>
                        <p className="text-md mt-4" style={{ color: 'var(--secondary-text-color)' }}>
                            Join our consortium to make a positive impact in your industry. Connect with like-minded professionals and stay up-to-date on industry developments.
                        </p>
                    </div>
                    <Image src="/VHD_banner_1.jpg" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg"/>
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
                    <Image src="/VHD_banner_2.jpg" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg"/>
                </div>
            </main>


            <Footer />

        </div >
    )
}
