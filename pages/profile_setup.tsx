import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useUser, RedirectToSignIn } from '@clerk/nextjs';
import React, { useState, FormEvent } from 'react'; // Import FormEvent




const ProfileSetup: React.FC = () => {
    const { isSignedIn } = useUser();
    const [lambdaResponseMessage, setLambdaResponseMessage] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [isPictureUploaded, setIsPictureUploaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');


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

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleImageUpload = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        setIsLoading(true); // Start loading

        try {
            const presignedUrlResponse = await fetch('api/generatePresignedURL');
            if (!presignedUrlResponse.ok) {
                throw new Error('Failed to fetch the presigned URL.');
            }
            const { url, key } = await presignedUrlResponse.json();

            const uploadResponse = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'image/jpeg',
                },
                body: file,
            });

            setIsLoading(false); // Stop loading

            if (uploadResponse.ok) {
                console.log('File uploaded successfully to:', key);
                setIsPictureUploaded(true);
                setUploadSuccess(true); // Indicate success
                setUploadedImageUrl(`https://memberprofilepictures.s3.amazonaws.com/${key}`); // Assuming 'url' is the URL where the image is accessible, you might need to adjust based on your response structure.
                const lambdaData = {
                    key1: "yo ho ho",
                    key: key // Sending this to the Lambda so it can return the image URL
                };

                const lambdaResponse = await fetch('https://7vt7lwfp4llwp6bcsgtdnzon4e0mlmnh.lambda-url.us-east-2.on.aws/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(lambdaData),
                });

                const responseData = await lambdaResponse.json();
                console.log('Lambda response:', responseData);
                setLambdaResponseMessage(responseData.message); // Update the state with the response message
                if (responseData.imageUrl) {
                    setUploadedImageUrl(responseData.imageUrl); // Set the image URL from Lambda's response
                }
            } else {
                throw new Error('Upload failed with HTTP status ' + uploadResponse.status);
            }
        } catch (error) {
            console.error('Error:', error);
            alert(error instanceof Error ? error.message : String(error));
            setIsLoading(false); // Stop loading in case of error
        }
    };

    const handleProfileUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Updating profile information...', profile);
        alert('Profile update functionality not implemented yet.');
    };

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            <Head>
                <title>Profile Setup</title>
            </Head>
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="shadow-lg rounded-lg p-6 mb-4" style={{ backgroundColor: 'var(--entry-background-color)' }}>
                        <h1 className="text-2xl font-bold mb-4">1. Profile Picture</h1>
                        {!isPictureUploaded ? (
                            <form onSubmit={handleImageUpload} className="space-y-4">
                                <p>Please upload a profile picture to continue with your profile setup.</p>
                                <input type="file" accept="image/*" onChange={handleFileChange} className="block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg cursor-pointer" />
                                {isLoading ? (
                                    <div className="flex space-x-8 justify-left items-center">
                                        <div className="h-3 w-6 bg-blue-500 rounded-full animate-ping"></div>
                                        <div className="h-3 w-8 bg-blue-500 rounded-full animate-ping animation-delay-200"></div>
                                        <div className="h-3 w-12 bg-blue-500 rounded-full animate-ping animation-delay-400"></div>
                                        <div className="h-3 w-16 bg-blue-500 rounded-full animate-ping animation-delay-600"></div>
                                    </div>
                                ) : (
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Upload</button>
                                )}
                            </form>
                        ) : (
                            <div>
                                <p className="pb-10">Profile picture uploaded successfully!</p>
                                <img src={uploadedImageUrl} alt="Hmmmm didnt work out" className="w-32 h-32 rounded" />
                            </div>
                        )}
                    </div>
                    {isPictureUploaded && (
                        <div className="shadow-lg rounded-lg p-6" style={{ backgroundColor: 'var(--entry-background-color)' }}>
                            <h2 className="text-2xl font-bold mb-4">2. Profile Information</h2>
                            <form onSubmit={handleProfileUpdate} className="space-y-4">
                                <input type="text" name="fullName" value={profile.fullName} onChange={handleChange} placeholder="Full Name" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2" />
                                <input type="text" name="universityAffiliation" value={profile.universityAffiliation} onChange={handleChange} placeholder="University Affiliation" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2" />
                                <input type="text" name="bio" value={profile.bio} onChange={handleChange} placeholder="Bio" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2" />
                                <input type="text" name="twitter" value={profile.twitter} onChange={handleChange} placeholder="Twitter" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2" />
                                <input type="text" name="linkedin" value={profile.linkedin} onChange={handleChange} placeholder="LinkedIn" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2" />
                                <input type="text" name="googleScholar" value={profile.googleScholar} onChange={handleChange} placeholder="Google Scholar" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-2" />
                                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Update Profile Information</button>
                            </form>
                        </div>
                    )}
                </div>
                {lambdaResponseMessage && <div className="mt-4 p-4 bg-blue-100 text-blue-800 rounded-lg">{lambdaResponseMessage}</div>}
            </main>

            <Footer />
        </div>
    );
};

export default ProfileSetup;




