import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useUser, RedirectToSignIn } from '@clerk/nextjs';
import React, { useState, FormEvent } from 'react'; // Import FormEvent

const ProfileSetup: React.FC = () => {
    const { isSignedIn } = useUser();
    const [lambdaResponseMessage, setLambdaResponseMessage] = useState('');
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

    const handleImageUpload = async (event: FormEvent<HTMLFormElement>) => { // Explicitly type the event parameter
        event.preventDefault();

        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        try {
            // Fetch the presigned URL for S3 upload
            const presignedUrlResponse = await fetch('api/generatePresignedURL');
            if (!presignedUrlResponse.ok) {
                throw new Error('Failed to fetch the presigned URL.');
            }
            const { url, key } = await presignedUrlResponse.json();

            // Use the presigned URL to upload the file to S3
            const uploadResponse = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'image/jpeg', // Adjust this according to your actual file type
                },
                body: file,
            });

            if (uploadResponse.ok) {
                console.log('File uploaded successfully to:', key);
                alert('Profile picture uploaded successfully.');

                // After successful upload, notify the Lambda function
                const simplifiedData = { key1: "yo ho ho" };

                const lambdaResponse = await fetch('https://7vt7lwfp4llwp6bcsgtdnzon4e0mlmnh.lambda-url.us-east-2.on.aws/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(simplifiedData),
                });

                const responseData = await lambdaResponse.json();
                console.log('Lambda response:', responseData);
                setLambdaResponseMessage(responseData.message); // Update the state with the response message
            } else {
                throw new Error('Upload failed with HTTP status ' + uploadResponse.status);
            }
        } catch (error) {
            console.error('Error:', error);
            alert(error instanceof Error ? error.message : String(error));
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
            <main className="flex-grow">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-color)' }}>Profile Setup</h1>
                    <form onSubmit={handleImageUpload} className="space-y-4">
                        <input type="file" accept="image/*" onChange={handleFileChange} className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer" style={{ backgroundColor: 'var(--input-background-color)', color: 'var(--text-color)' }} />
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
                <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
                    {/* ...other components... */}

                    {/* Add this paragraph below your forms or wherever you'd like to display the message */}
                    {lambdaResponseMessage && <p>Lambda Response: {lambdaResponseMessage}</p>}

                    {/* ...rest of your component */}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProfileSetup;




