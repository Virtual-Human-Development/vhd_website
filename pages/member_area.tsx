import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import { useRouter } from 'next/router';
import { useUser, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';


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


    async function getUser(){
        const output = await fetch("/api/test",{
            method:"POST",
            body:JSON.stringify({
                UserID:user?.id
            })
        })
        const unpackedOutput = output.json()
    }

    useEffect(()=>{
        getUser()
    },[])

    useEffect(() => {
        const fetchProfile = async () => {
            if (isSignedIn && user) {
                const apiURL = `https://blv4jhr7zj.execute-api.us-east-2.amazonaws.com/vhd-api-2/profile/${user.id}`;
                try {
                    const response = await fetch(apiURL);
                    if (!response.ok) {
                        throw new Error('Failed to fetch profile data');
                    }
                    const data: Profile = await response.json();
                    setProfile(data);
                } catch (err) {
                    const message = err instanceof Error ? err.message : 'An unknown error occurred';
                    setError(message);
                }
            }
        };

        fetchProfile();
    }, [user, isSignedIn]);

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
                        <Image src={profile.imageUrl} alt="Profile Image" width={200} height={200} className="rounded-full" />
                        <p>Full Name: {profile.fullName}</p>
                        <p>University Affiliation: {profile.uniAffiliation}</p>
                        <p>Bio: {profile.bio}</p>
                        <button
                            onClick={() => router.push('/profile_setup')}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                            Update Profile Information
                        </button>
                    </div>
                ) : <p>Loading profile...</p>)}
            </main>

            




            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 border-t border-b">
                <h2 className="text-lg font-bold">MORE TO COME SOON</h2>
                <p>Profile INFORMATION</p>
            </main>







            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 border-t border-b">
                <h2 className="text-lg font-bold">MORE TO COME SOON</h2>
                <p>Stay tuned.</p>
            </main>




            <Footer />
        </div>
    );
};

export default MemberArea;
