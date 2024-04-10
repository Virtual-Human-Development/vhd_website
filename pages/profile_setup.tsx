// pages/profile_setup.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useUser, RedirectToSignIn } from '@clerk/nextjs';

const ProfileSetup: React.FC = () => {
    const { isSignedIn } = useUser();
    const [file, setFile] = useState<File | null>(null);
    const [profile, setProfile] = useState({
        fullName: '',
        universityAffiliation: '',
        bio: '',
        twitter: '',
        linkedin: '',
        googleScholar: '',
    });

    if (!isSignedIn) {
        return <RedirectToSignIn />;
    }

    const handleFileChange = (event: React.ChangeEven<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            setFile(files[0]);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleImageUpload = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        // Image upload logic remains the same...
    };

    const handleProfileUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Updating profile information...');

        // Here, you would typically make a fetch request to your server
        // to update the user's profile information with the data in `profile`.
        // Example (adjust URL and method according to your API):
        /*
        try {
            const response = await fetch('http://localhost:3000/update-profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profile),
            });
            if (!response.ok) {
                throw new Error('Failed to update profile.');
            }
            alert('Profile updated successfully.');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert(error instanceof Error ? error.message : String(error));
        }
        */
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Profile Setup</title>
            </Head>
            <Navbar />

            <main className="flex-grow">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-3xl font-bold mb-6">Profile Setup</h1>
                    <form onSubmit={handleImageUpload} className="space-y-4">
                        <input type="file" accept="image/*" onChange={handleFileChange} className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer" />
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Upload Profile Picture</button>
                    </form>
                    <form onSubmit={handleProfileUpdate} className="space-y-4 mt-8">
                        <input type="text" name="fullName" value={profile.fullName} onChange={handleChange} placeholder="Full Name" className="block w-full text-sm text-gray-900 border rounded-lg" />
                        <input type="text" name="universityAffiliation" value={profile.universityAffiliation} onChange={handleChange} placeholder="University Affiliation" className="block w-full text-sm text-gray-900 border rounded-lg" />
                        <input type="text" name="bio" value={profile.bio} onChange={handleChange} placeholder="Bio" className="block w-full text-sm text-gray-900 border rounded-lg" />
                        <input type="text" name="twitter" value={profile.twitter} onChange={handleChange} placeholder="Twitter" className="block w-full text-sm text-gray-900 border rounded-lg" />
                        <input type="text" name="linkedin" value={profile.linkedin} onChange={handleChange} placeholder="LinkedIn" className="block w-full text-sm text-gray-900 border rounded-lg" />
                        <input type="text" name="googleScholar" value={profile.googleScholar} onChange={handleChange} placeholder="Google Scholar" className="block w-full text-sm text-gray-900 border rounded-lg" />
                        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Update Profile Information</button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProfileSetup;
