// pages/profile_setup.tsx
import React, { useState } from 'react';

const ProfileSetup: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            setFile(files[0]); // Set the first selected file
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        try {
            // Request a presigned URL from your server
            const response = await fetch('http://localhost:3000/generate-presigned-url');
            const data = await response.json();

            // Upload the file to S3
            const uploadResponse = await fetch(data.url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'image/jpeg', // Adjust based on your file type
                },
                body: file,
            });

            if (uploadResponse.ok) {
                alert('Profile picture uploaded successfully.');
                // Optionally, save the key (data.key) to your user's profile in your database
            } else {
                throw new Error('Failed to upload profile picture.');
            }
        } catch (error) {
            alert(error instanceof Error ? error.message : String(error));
        }
    };

    return (
        <div>
            <h1>Profile Setup</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <button type="submit">Upload Profile Picture ..</button>
            </form>
        </div>
    );
};

export default ProfileSetup;
