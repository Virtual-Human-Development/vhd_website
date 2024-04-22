// pages/api/profile/[userId].js

export default async function handler(req, res) {
    const { userId } = req.query;

    // Assuming you have a function to fetch data from DynamoDB or invoke your Lambda
    try {
        const data = await fetchUserProfile(userId);
        res.status(200).json(data);
    } catch (error) {
        console.error("Failed to fetch user profile:", error);
        res.status(500).json({ message: "Failed to fetch profile data" });
    }
}

async function fetchUserProfile(userId) {
    // Your logic to fetch user data from DynamoDB or Lambda
    // This is just a placeholder function
    return {
        userId: userId,
        fullName: "Jane Doe",
        uniAffiliation: "Global University",
        bio: "Researcher in AI",
        twitter: "@janedoe",
        linkedin: "linkedin.com/in/janedoe",
        googleScholar: "scholar.google.com/citations?user=janedoe",
        imageUrl: "https://example.com/path/to/image.jpg"
    };
}
