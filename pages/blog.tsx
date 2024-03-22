import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import 'react-h5-audio-player/lib/styles.css'; // Import stylesheet
import AudioPlayer from 'react-h5-audio-player';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



// Define a type for the blog post properties
type BlogPostProps = {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    imgSrc: string;
    date: string;
};

// Mock data for blog posts
const blogPosts: BlogPostProps[] = [
    {
        id: 1,
        title: "Consortium gathering number one went well.",
        subtitle: "This is it yall. This post is something we're going to write about, so hang tight. There's plenty to write about here and we'lre going to go haaaaam on it! So ya dude let's do it. ",
        content: "This is the content for Blog Post 1. Here we share some interesting insights.",
        imgSrc: "/tree_iceberg.png",
        date: "Feb 2, 2023"
    },
    {
        id: 1,
        title: "Notes from the underground!",
        subtitle: "This is it yall. This post is something we're going to write about, so hang tight. There's plenty to write about here and we'lre going to go haaaaam on it! So ya dude let's do it. ",
        content: "This is the content for Blog Post 1. Here we share some interesting insights.",
        imgSrc: "/wizard_AI_creator.png",
        date: "March 9, 2024"
    }, {
        id: 1,
        title: "Let's make a real simulation of a full human ya'll!",
        subtitle: "This is it yall. This post is something we're going to write about, so hang tight. There's plenty to write about here and we'lre going to go haaaaam on it! So ya dude let's do it. ",
        content: "This is the content for Blog Post 1. Here we share some interesting insights.",
        imgSrc: "/neurons_background.png",
        date: "Jan 28, 2024"
    },
];

// Inside your component or style definition
const Accordion: React.FC<{ post: BlogPostProps }> = ({ post }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="pb-14">
            <div className="my-8 rounded-lg overflow-hidden shadow" style={{
                backgroundColor: 'var(--entry-background-color)', // Assuming this variable is defined in your CSS for both themes
                border: '0.1px solid var(--entry-border-color)', // You can define this variable in your CSS too
                maxWidth: '95%',
                margin: 'auto',
                boxShadow: `0 2px 4px var(--entry-shadow-color), 0 2px 4px var(--entry-shadow-color)`,
            }}>
                <div className="cursor-pointer p-4" onClick={() => setIsOpen(!isOpen)}>
                    <div className="flex items-start">
                        <div className="flex-none" style={{ width: '250px', height: '250px' }}>
                            <Image src={post.imgSrc} alt={post.title} width={300} height={300} layout="intrinsic" objectFit="cover" className="rounded-l-lg" />
                        </div>
                        <div className="flex-grow ml-4">
                            <div style={{ color: 'var(--secondary-text-color)', fontSize: '8px', fontStyle: 'italic', marginBottom: '10px', alignSelf: 'flex-start' }}>{post.date}</div>
                            <div className="flex flex-col justify-center pt-6" style={{ height: '100%' }}>
                                <h3 className="font-bold" style={{ color: 'var(--text-color)', fontSize: '18px', lineHeight: '1.0', paddingBottom: '10px' }}>{post.title}</h3>
                                <p style={{ color: 'var(--secondary-text-color)', fontSize: '12px', lineHeight: '1.2' }}>{post.subtitle}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && <div className="p-4" style={{ color: 'var(--secondary-text-color)', fontSize: '12px', lineHeight: '1.2' }}>{post.content}</div>}
            </div>
        </div>
    );
};





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
                            <a href="/" style={{ color: 'var(--text-color)' }}>
                                <span className="font-bold">VHD</span>
                            </a>
                        </div>
                        <div className="flex justify-center md:flex md:space-x-2">
                            <a href="/about" className="py-5 px-3" style={{ color: 'var(--text-color)' }}>About</a>
                            <a href="/events" className="py-5 px-3" style={{ color: 'var(--text-color)' }}>Events</a>
                            <a href="/team" className="py-5 px-3" style={{ color: 'var(--text-color)' }}>Team</a>
                            <a href="/blog" className="py-5 px-3" style={{ color: 'var(--text-color)' }}>Blog</a>
                            <a href="/sponsorship" className="py-5 px-3" style={{ color: 'var(--text-color)' }}>Sponsorship</a>
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
                    <Image src="/VHD_banner_2.png" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg" layout="intrinsic" />
                </div>
            </main>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 " style={{ width: '80%', margin: '0 auto' }}> {/* Adjust width and margin as needed */}
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-color)' }}>
                    Entries</h2>
                {blogPosts.map(post => (
                    <Accordion key={post.id} post={post} />
                ))}
            </main>


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

        </div >
    )
}
