import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




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
        subtitle: "This is it yall. This post is something we&#39;re going to write about, so hang tight. There&#39;s plenty to write about here and we&#39;lre going to go haaaaam on it! So ya dude let&#39;s do it. ",
        content: "This is the content for Blog Post 1. Here we share some interesting insights.",
        imgSrc: "/tree_iceberg.png",
        date: "Feb 2, 2023"
    },
    {
        id: 1,
        title: "Notes from the underground!",
        subtitle: "This is it yall. This post is something we&#39;re going to write about, so hang tight. There&#39;s plenty to write about here and we&#39;lre going to go haaaaam on it! So ya dude let&#39;s do it. ",
        content: "This is the content for Blog Post 1. Here we share some interesting insights.",
        imgSrc: "/wizard_AI_creator.png",
        date: "March 9, 2024"
    }, {
        id: 1,
        title: "Let&#39;s make a real simulation of a full human ya&#39;ll!",
        subtitle: "This is it yall. This post is something we&#39;re going to write about, so hang tight. There&#39;s plenty to write about here and we&#39;lre going to go haaaaam on it! So ya dude let&#39;s do it. ",
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
                            <Image src={post.imgSrc} alt={post.title} width={300} height={300} objectFit="cover" className="rounded-l-lg" />
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
                <Image src={imgSrc} alt={text} width={500} height={300} className="rounded-lg"/>
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
            </Head>

            <Navbar theme={theme} toggleTheme={toggleTheme} />


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
                    <Image src="/VHD_banner_2.png" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg"/>
                </div>
            </main>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 " style={{ width: '80%', margin: '0 auto' }}> {/* Adjust width and margin as needed */}
                <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-color)' }}>
                    Entries</h2>
                {blogPosts.map(post => (
                    <Accordion key={post.id} post={post} />
                ))}
            </main>


            <Footer theme={theme} />

        </div >
    )
}
