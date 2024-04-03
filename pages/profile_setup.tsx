import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MemberArea = () => {
    const [apiResponse, setApiResponse] = useState('');

    const handleApiCall = async () => {
        try {
            const response = await fetch('https://blv4jhr7zj.execute-api.us-east-2.amazonaws.com/vhd-api-1/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: 'Your request data' }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setApiResponse(JSON.stringify(data));
        } catch (error) {
            if (error instanceof Error) {
                setApiResponse('Failed to call API: ' + error.message);
            } else {
                setApiResponse('Failed to call API: An unexpected error occurred');
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Button to trigger API call */}
            <div className="text-center pt-20">
                <button
                    onClick={handleApiCall}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Call API
                </button>

                {/* Display API response */}
                <p className="mt-4">{apiResponse}</p>
            </div>

            <Footer />
        </div>
    );
};

export default MemberArea;
