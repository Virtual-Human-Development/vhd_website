import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useUser, RedirectToSignIn } from '@clerk/nextjs';
import React, { useState } from 'react';
import { useRouter } from 'next/router';


const ProfileSetup: React.FC = () => {
    const { isSignedIn, user } = useUser();

    const [file, setFile] = useState<File | null>(null);
    const [isPictureUploaded, setIsPictureUploaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const loadingText = "Loading...".split("").map((char, index) => (
        <span
            key={index}
            className="loading-letter"
            style={{ animationDelay: `${index * 0.2}s` }} // Adjust time as needed
        >
            {char}
        </span>
    ));
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    const [uploadKey, setUploadKey] = useState('');
    const router = useRouter();
    const [profileUpdateMessage, setProfileUpdateMessage] = useState('');
    const [profileUpdated, setProfileUpdated] = useState(false);
    const [profile, setProfile] = useState({
        fullName: '',
        uniAffiliation: '',
        bio: '',
        twitter: '',
        linkedin: '',
        googleScholar: '',
    });

    if (!isSignedIn) {
        return <RedirectToSignIn />;
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({
            ...profile,
            [event.target.name]: event.target.value,
        });
    };

    const handleImageUpload = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!file) {
            alert('Please select a file to upload.');
            return;
        }
    
        setIsLoading(true);
        try {
            const presignedUrlResponse = await fetch('api/generatePresignedURL');
            if (!presignedUrlResponse.ok) throw new Error('Failed to fetch the presigned URL.');
            const { url, key } = await presignedUrlResponse.json();
    
            console.log("Presigned URL and Key:", url, key); // Added logging
    
            if (!key) {
                throw new Error("Received undefined key from presigned URL response");
            }
    
            const uploadResponse = await fetch(url, {
                method: 'PUT',
                headers: { 'Content-Type': 'image/jpeg' },
                body: file,
            });
            setIsLoading(false);
    
            if (uploadResponse.ok) {
                setIsPictureUploaded(true);
                setUploadedImageUrl(`https://memberprofilepictures.s3.amazonaws.com/${key}`);
                setUploadKey(key);
            } else {
                throw new Error('Upload failed with HTTP status ' + uploadResponse.status);
            }
        } catch (error) {
            alert(error instanceof Error ? error.message : String(error));
            setIsLoading(false);
        }
    };
    
    const handleProfileUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        if (!uploadKey) {
            alert("Image key is missing, please upload the image again.");
            setIsLoading(false);
            return;
        }
        const updateData = {
            userId: user.id,
            ...profile,
            uploadKey
        };
    
        console.log("Sending Update Data:", updateData); // Added logging
    
        try {
            const response = await fetch('https://7vt7lwfp4llwp6bcsgtdnzon4e0mlmnh.lambda-url.us-east-2.on.aws/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateData),
            });
            const responseData = await response.json();
            if (response.ok) {
                setProfileUpdateMessage('Your profile is set.');
                setProfileUpdated(true);
            } else {
                setProfileUpdateMessage('Failed to update profile: ' + (responseData.message || "Unknown error"));
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : "An unknown error occurred";
            setProfileUpdateMessage('Error updating profile: ' + message);
        }
    };

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            <Head><title>Profile Setup</title></Head>
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="shadow-lg rounded-lg p-6 mb-4" style={{ backgroundColor: 'var(--entry-background-color)' }}>
                        <h1 className="text-2xl font-bold mb-4">Profile Picture</h1>
                        {!isPictureUploaded ? (
                            <form onSubmit={handleImageUpload} className="space-y-4">
                                <p>Please upload a profile picture to continue with your profile setup.</p>
                                <input type="file" accept="image/*" onChange={handleFileChange} className="block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg cursor-pointer" />
                                {isLoading ? (
                                    <div className="flex justify-left items-left">
                                        {loadingText}
                                    </div>
                                ) : (
                                    <button
                                        type="submit"
                                        className="px-4 py-2 rounded text-white transition-colors duration-200"
                                        style={{
                                            backgroundColor: 'var(--button-background-color)',
                                            color: 'var(--button-text-color)',
                                            boxShadow: 'var(--button-shadow-color) 0px 2px 4px'
                                        }}
                                        onMouseOver={({ currentTarget }) => currentTarget.style.backgroundColor = 'var(--button-hover-color)'}
                                        onMouseOut={({ currentTarget }) => currentTarget.style.backgroundColor = 'var(--button-background-color)'}
                                    >
                                        Upload
                                    </button>

                                )}
                            </form>
                        ) : (
                            <div>
                                <p className="pb-10">Uploaded successfully.</p>
                                {uploadedImageUrl && (
                                    <div className="relative w-32 h-32 rounded overflow-hidden">
                                        <Image src={uploadedImageUrl} alt="Uploaded Profile Picture" layout="fill" objectFit="cover" />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    {isPictureUploaded && !profileUpdated && (
                        <div className="shadow-lg rounded-lg p-6" style={{ backgroundColor: 'var(--entry-background-color)' }}>
                            <h2 className="text-2xl font-bold mb-4">About You</h2>
                            <form onSubmit={handleProfileUpdate} className="space-y-4">
                                <input type="text" name="fullName" value={profile.fullName} onChange={handleChange} placeholder="Full Name" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2" />
                                <input type="text" name="uniAffiliation" value={profile.uniAffiliation} onChange={handleChange} placeholder="University Affiliation" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2" />
                                <input type="text" name="bio" value={profile.bio} onChange={handleChange} placeholder="Short Bio" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2" />
                                <input type="text" name="twitter" value={profile.twitter} onChange={handleChange} placeholder="Twitter Link" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2" />
                                <input type="text" name="linkedin" value={profile.linkedin} onChange={handleChange} placeholder="LinkedIn Link" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2" />
                                <input type="text" name="googleScholar" value={profile.googleScholar} onChange={handleChange} placeholder="Google Scholar Link" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2" />
                                {isLoading ? (
                                    <div className="flex justify-left items-left">
                                        {loadingText}
                                    </div>
                                ) : (
                                    <button
                                        type="submit"
                                        className="px-4 py-2 rounded text-white transition-colors duration-200"
                                        style={{
                                            backgroundColor: 'var(--button-background-color)',
                                            color: 'var(--button-text-color)',
                                            boxShadow: 'var(--button-shadow-color) 0px 2px 4px'
                                        }}
                                        onMouseOver={({ currentTarget }) => currentTarget.style.backgroundColor = 'var(--button-hover-color)'}
                                        onMouseOut={({ currentTarget }) => currentTarget.style.backgroundColor = 'var(--button-background-color)'}
                                    >
                                        Update Profile Information
                                    </button>
                                )}
                            </form>
                        </div>
                    )}
                    {profileUpdated && (
                        <>
                            <div className="shadow-lg rounded-lg p-6 mt-4" style={{ backgroundColor: 'var(--entry-background-color)' }}>
                                <h2 className="text-2xl font-bold mb-4">About You </h2>
                                <p className="pb-10"> Uploaded successfully. </p>
                                <ul className="list-disc pl-5">
                                    <li>Full Name: <strong>{profile.fullName}</strong></li>
                                    <li>University Affiliation: <strong>{profile.uniAffiliation}</strong></li>
                                    <li>Bio: <strong>{profile.bio}</strong></li>
                                    <li>Twitter: <strong>{profile.twitter}</strong></li>
                                    <li>LinkedIn: <strong>{profile.linkedin}</strong></li>
                                    <li>Google Scholar: <strong>{profile.googleScholar}</strong></li>
                                </ul>
                            </div>

                            <div className="shadow-lg rounded-lg p-6 mt-4" style={{ backgroundColor: 'var(--entry-background-color)' }}>
                                <p className="mt-4 mb-8 p-4 bg-green-100 text-green-800 rounded-lg">{profileUpdateMessage}</p>
                                <button
                                    type="button"
                                    className="px-4 py-2 rounded text-white transition-colors duration-200"
                                    style={{
                                        backgroundColor: 'var(--button-background-color)',
                                        color: 'var(--button-text-color)',
                                        boxShadow: 'var(--button-shadow-color) 0px 2px 4px'
                                    }}
                                    onMouseOver={({ currentTarget }) => currentTarget.style.backgroundColor = 'var(--button-hover-color)'}
                                    onMouseOut={({ currentTarget }) => currentTarget.style.backgroundColor = 'var(--button-background-color)'}
                                    onClick={() => router.push('/member_area')}
                                >
                                    Click here to proceed to the member&#39;s area.
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProfileSetup;