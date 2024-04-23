import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import { useRouter } from 'next/router';
import { useUser, RedirectToSignIn } from '@clerk/nextjs';

interface Profile {
    imageUrl: string;
    fullName: string;
    uniAffiliation: string;
    bio: string;
    twitter?: string;
    linkedin?: string;
    googleScholar?: string;
}

const MemberArea = () => {
    const { user, isSignedIn } = useUser();
    const router = useRouter();
    const [profile, setProfile] = useState<Profile | null>(null);
    const [profiles, setProfiles] = useState<Profile[]>([]);  // Array to hold all profiles
    const { theme } = useTheme();
    const [error, setError] = useState<string>('');

    async function getUser() {
        if (!user?.id) {
            setError("User not identified");
            return;
        }
        const response = await fetch("/api/dynamoDB", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ UserID: user.id })
        });

        if (!response.ok) {
            const message = await response.text();
            setError(`Failed to fetch profile: ${message}`);
            return;
        }

        const data = await response.json();
        setProfile(data);
    }
    
    useEffect(() => {
        console.log("Authentication check:", isSignedIn, user?.id);
        if (!isSignedIn) {
            setError("User not signed in");
            return;
        }
        if (!user?.id) {
            setError("User ID is undefined");
            return;
        }
    
        // If both checks pass, proceed to fetch the user profile
        const getUser = async () => {
            const response = await fetch("/api/dynamoDB", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ UserID: user.id })
            });
    
            if (!response.ok) {
                const message = await response.text();
                setError(`Failed to fetch profile: ${message}`);
                return;
            }
    
            const data = await response.json();
            setProfile(data);
        };
    
        getUser();
    }, [user?.id, isSignedIn]);

    async function fetchAllProfiles() {
        const response = await fetch('/api/getAllProfiles');
        if (!response.ok) {
            const message = await response.text();
            setError(`Failed to fetch all profiles: ${message}`);
            return;
        }
        const data = await response.json();
        setProfiles(data);
    }

    useEffect(() => {
        if (!isSignedIn) {
            setError("User not signed in");
            return;
        }
        if (!user?.id) {
            setError("User ID is undefined");
            return;
        }
        fetchAllProfiles();
    }, [isSignedIn, user?.id]);

    if (!isSignedIn) {
        return <RedirectToSignIn />;
    }

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            <Navbar />
            <Head><title>Member Area</title></Head>
            <div className="text-center pt-20 pb-16">
                <h1 className="text-4xl font-bold">ACTIVE MEMBER AREA</h1>
            </div>
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-lg font-bold">Your Profile Information</h2>
                {error ? <p className="text-red-500">{error}</p> : (profile ? (
                    <div className="my-8 rounded-lg overflow-hidden shadow" style={{
                        backgroundColor: 'var(--entry-background-color)',
                        border: '0.1px solid var(--entry-border-color)',
                        boxShadow: `0 3px 4px var(--entry-shadow-color), 0 2px 4px var(--entry-shadow-color)`,
                    }}>
                        <div className="flex items-center space-x-4 p-4">
                            <div className="w-32 h-32 relative">
                                <Image src={profile.imageUrl} alt="Profile Image" layout="fill" objectFit="cover" className="rounded-full" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-lg" style={{ color: 'var(--text-color)' }}>{profile.fullName}</h3>
                                <p style={{ color: 'var(--secondary-text-color)' }}>{profile.uniAffiliation}</p>
                                <p style={{ color: 'var(--secondary-text-color)' }}>{profile.bio}</p>
                                <div className="flex space-x-3 mt-4">
                                {profile.twitter && (
                                               <Link href={profile.twitter}>
                                                   <div className="cursor-pointer">
                                                        <Image src={theme === 'light' ? "/icons/twitter-w.png" : "/icons/twitter-b.png"} alt="twitter" width={24} height={24} />
                                                   </div>
                                               </Link>
                                           )}
                                           {profile.linkedin && (
                                               <Link href={profile.linkedin}>
                                                   <div className="cursor-pointer">
                                                        <Image src={theme === 'light' ? "/icons/linkedin-w.png" : "/icons/linkedin-b.png"} alt="LinkedIn" width={24} height={24} />
                                                   </div>
                                               </Link>
                                           )}
                                           {profile.googleScholar && (
                                               <Link href={profile.googleScholar}>
                                                   <div className="cursor-pointer">
                                                        <Image src={theme === 'light' ? "/icons/google-w.png" : "/icons/google-b.png"} alt="google" width={24} height={24} />
                                                   </div>
                                               </Link>
                                           )}
                                </div>
                            </div>
                        </div>
                        <div className="text-right p-4">
                            <button onClick={() => router.push('/profile_setup')} className="px-4 py-2 rounded text-white transition-colors duration-200"
                                        style={{
                                            backgroundColor: 'var(--background-color)',
                                            color: 'var(--button-text-color)',
                                            boxShadow: 'var(--button-shadow-color) 0px 2px 4px'
                                        }}
                                        onMouseOver={({ currentTarget }) => currentTarget.style.backgroundColor = 'var(--button-background-color)'}
                                        onMouseOut={({ currentTarget }) => currentTarget.style.backgroundColor = 'var(--background-color)'}
                                    >
                                        Update Profile Information
                            </button>
                        </div>
                    </div>
               ) : <p>Loading profile...</p>)}
               <h2 className="text-lg font-bold mt-8">All Members</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   {profiles.map((profile, index) => (
                       <div key={index} className="pb-6">
                           <div className="my-8 rounded-lg overflow-hidden shadow" style={{
                               backgroundColor: 'var(--entry-background-color)',
                               border: '0.1px solid var(--entry-border-color)',
                               boxShadow: `0 3px 4px var(--entry-shadow-color), 0 2px 4px var(--entry-shadow-color)`,
                           }}>
                               <div className="flex flex-col" style={{ maxHeight: '500px', minHeight: '350px', overflowY: 'auto' }}>
                                   <div className="w-32 h-32 mt-2 ml-2 relative">
                                       <Image src={profile.imageUrl} alt="Profile Image" layout="fill" objectFit="cover" className="rounded-full" />
                                   </div>
                                   <div className="flex-grow p-4">
                                       <div className="text-sm mb-2" style={{ color: 'var(--secondary-text-color)' }}>{profile.uniAffiliation}</div>
                                       <h3 className="font-bold" style={{ color: 'var(--text-color)', fontSize: '1.0rem' }}>{profile.fullName}</h3>
                                       <p className="mt-2" style={{ color: 'var(--secondary-text-color)' }}>{profile.bio}</p>
                                       <div className="flex space-x-3 mt-4">
                                           {profile.twitter && (
                                               <Link href={profile.twitter}>
                                                   <div className="cursor-pointer">
                                                        <Image src={theme === 'light' ? "/icons/twitter-w.png" : "/icons/twitter-b.png"} alt="twitter" width={24} height={24} />
                                                   </div>
                                               </Link>
                                           )}
                                           {profile.linkedin && (
                                               <Link href={profile.linkedin}>
                                                   <div className="cursor-pointer">
                                                        <Image src={theme === 'light' ? "/icons/linkedin-w.png" : "/icons/linkedin-b.png"} alt="LinkedIn" width={24} height={24} />
                                                   </div>
                                               </Link>
                                           )}
                                           {profile.googleScholar && (
                                               <Link href={profile.googleScholar}>
                                                   <div className="cursor-pointer">
                                                        <Image src={theme === 'light' ? "/icons/google-w.png" : "/icons/google-b.png"} alt="google" width={24} height={24} />
                                                   </div>
                                               </Link>
                                           )}
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   ))}
               </div>
           </main>
            <Footer />
        </div>
    );
    
};

export default MemberArea;
