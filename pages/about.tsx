import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import ImageLink from '../components/ImageLink'; // Import the ImageLink component


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
                        ABOUT
                    </h1>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-lg font-bold" style={{ color: 'var(--text-color)' }}>
                            A consortium of academics in mathematical biology.
                        </h2>
                        <p className="text-md mt-4" style={{ color: 'var(--secondary-text-color)' }}>
                            Working together toward increasingly integrated, capable simulations of the entire human developmental process.
                        </p>
                    </div>
                    <Image src="/consortium.jpg" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg" />
                </div>
            </main>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Our Mission Column */}
                    <div>
                        <h2 className="text-lg font-bold" style={{ color: 'var(--text-color)' }}>
                            Our Mission
                        </h2>
                        <p className="text-md mt-4" style={{ color: 'var(--secondary-text-color)' }}>
                            The Virtual Human Development Consortium brings together a global community of scholars and policy makers around the central goal:
                            <span className="pl-1" style={{ color: 'var(--text-color)' }}>creating a computer-based simulator of human embryonic development.</span>
                            <br /><br />
                            Our mission is to produce a state of the art simulator with the ability to predict efficiently and effectively the outcome of cellular tissue and potential regenerative therapies.
                            <br /><br /><br />
                            The simulator will be a powerful tool that will:
                            <br />
                            <br />
                            <ul className="pl-6 list-disc">
                                <li>Provide<span className="pl-1" style={{ color: 'var(--text-color)' }}>a window into the formation of the human body </span>, catalyzing new hypotheses for the developmental biology field to push the boundaries outside of what we know about our origins; and</li>
                                <li>Serve as a <span className="pl-1" style={{ color: 'var(--text-color)' }}>platform for rational cellular design</span>, allowing us to engineer biological substrates for regenerative medicine. The model can also be adapted for personalized medicine approaches.</li>
                            </ul>
                            <br />
                            <br />
                            Such a simulator will be the key tool to catalyze rapid rounds of computational modeling in the biotechnology sector, fueling the design-build-test cycle for lab-grown cells and tissues.
                            It will serve as a tool for simulating engineered developmental systems, leading to robust bioprocesses for manufacturing designer cells, tissues, and organs on-demand.
                        </p>
                    </div>

                    {/* Our Approach Column */}
                    <div>
                        <h2 className="text-lg font-bold" style={{ color: 'var(--text-color)' }}>
                            Our Approach
                        </h2>
                        <p className="text-md mt-4" style={{ color: 'var(--secondary-text-color)' }}>
                            Virtual Human Development will serve as an
                            <span className="pl-1 pr-1" style={{ color: 'var(--text-color)' }}>
                                intellectual sandbox for international groups
                            </span>to understand and build biology together,
                            guided by our common mission. We will collectively develop and integrate our knowledge into a human embryo simulation platform in
                            line with the ethics, legal and social implications of embryo simulation. To enable this, we have three core values:
                            <br />
                            <br />
                            <span className="pr-2" style={{ color: 'var(--text-color)' }}>
                                Collaboration:
                            </span>
                            We will foster an environment of scientific integrity, ensuring we apply best practices and know-how to generate reliable
                            experimental datasets and modeling frameworks.
                            <br />
                            <br />
                            <span className="pr-2" style={{ color: 'var(--text-color)' }}>
                                Integrity:
                            </span>
                            We will foster an environment of scientific integrity, ensuring we apply best practices and know-how to generate reliable
                            experimental datasets and modeling frameworks.
                            <br />
                            <br />
                            <span className="pr-2" style={{ color: 'var(--text-color)' }}>
                                Posterity:
                            </span>
                            We believe in the importance of training and guiding the next generation of innovators who will build on and expand our
                            consortium&#39;s progress in developing a human embryo simulator. To do this, we will embed trainees in our governance structure and
                            dedicate resources to ensure they are well-supported and trained in professional and technical skills.
                        </p>
                    </div>

                </div>
            </main>


            <Footer />

        </div >
    )
}
