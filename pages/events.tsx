import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

import Events from '../components/Events';
import { eventPost } from '../data/eventPosts';




export default function EventsPage() {
    // Define groups based on event status
    const eventGroups = ["future", "past"];

    // Function to filter events by their status
    const getEventsByStatus = (status: string) => {
        return eventPost.filter(event => event.past_or_future === status);
    };

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
                        EVENTS
                    </h1>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-lg font-bold" style={{ color: 'var(--text-color)' }}>
                            Events shown here!
                        </h2>
                        <p className="text-md mt-4" style={{ color: 'var(--secondary-text-color)' }}>
                            Bringing together world-class mathematical biologists under one roof for events.
                        </p>
                    </div>
                    <Image src="/events_2.png" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg" />
                </div>
            </main>



            {/* Loop through each event group and render Events component for each */}
            {eventGroups.map(status => (
                <main key={status} className="max-w-4xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 py-0">
                    <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-color)' }}>
                        {status === "future" ? "Upcoming Events" : "Past Events"}
                    </h2>
                    <Events eventPost={getEventsByStatus(status)} />
                </main>
            ))}


            <Footer />

        </div >
    )
}
