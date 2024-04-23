import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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

    if (!isSignedIn) {
        return <RedirectToSignIn />;
    }

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            <Navbar />
            <Head><title>Member Area</title></Head>
            <div className="text-center pt-20 pb-16">
                <h1 className="text-4xl font-bold">MEMBER AREA</h1>
            </div>
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-lg font-bold">Your Profile Information</h2>
                {error ? <p className="text-red-500">{error}</p> : (profile ? (
                    <div className="space-y-4">
                        <p>Full Name: {profile.fullName}</p>
                        <p>University Affiliation: {profile.uniAffiliation}</p>
                        <p>Bio: {profile.bio}</p>
                        <button onClick={() => router.push('/profile_setup')} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">
                            Update Profile Information
                        </button>
                    </div>
                ) : <p>Loading profile...</p>)}
            </main>
            <Footer />
        </div>
    );
};

export default MemberArea;
