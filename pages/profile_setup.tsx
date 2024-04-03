import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import { useRouter } from 'next/router';
import { useUser, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';


const MemberArea = () => {
    const { user } = useUser();
    const [profile, setProfile] = useState({
        name: '',
        universityAffiliation: '',
        bio: '',
        tags: [],
        profilePictureUrl: '',
    });

    // Content for signed-in users
    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            <Navbar />

            <div>
                <header className="text-center pt-20 pb-16" style={{ color: 'var(--text-color)' }}>
                    <div className="max-w-2xl mx-auto px-4">
                        <h1 className="text-4xl font-bold" style={{ color: 'var(--text-color)' }}>
                            PROFILE SETUP
                        </h1>
                    </div>
                </header>

                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-lg font-bold" style={{ color: 'var(--text-color)' }}>
                                Thank you for joining the VHD community.
                            </h2>
                            <p className="text-md mt-4" style={{ color: 'var(--secondary-text-color)' }}>
                                Here you can share update your profile toward getting fully set up.
                            </p>
                        </div>
                        <Image src="/bio_eng_img.png" alt="Placeholder" width={400} height={400} className="rounded-lg shadow-lg" />
                    </div>
                </main>
            </div>


            <div className="pt-20">
                <form className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
                    <div className="grid grid-cols-1 gap-6">
                        <input
                            type="text"
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            placeholder="Name"
                            className="input"
                        />
                        <input
                            type="text"
                            value={profile.universityAffiliation}
                            onChange={(e) => setProfile({ ...profile, universityAffiliation: e.target.value })}
                            placeholder="University Affiliation"
                            className="input"
                        />
                        <textarea
                            value={profile.bio}
                            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                            placeholder="Short Bio"
                            className="textarea"
                        ></textarea>

                        {/* Submit button */}
                        <button type="submit" className="button">Update Profile</button>
                    </div>
                </form>
            </div>


            <Footer />
        </div>
    );
};



export default MemberArea;

