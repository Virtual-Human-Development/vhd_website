// pages/api/dynamoDB.js
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

const docClient = DynamoDBDocumentClient.from(client);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    // Log the type and content of req.body to debug
    console.log('Type of req.body:', typeof req.body);
    console.log('Content of req.body:', req.body);

    let body;
    try {
        // Only parse if it's a string
        body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    } catch (error) {
        console.error("Parsing error:", error);
        return res.status(400).json({ message: "Request body must be valid JSON" });
    }

    const { UserID } = body;
    if (!UserID) {
        return res.status(400).json({ message: "UserID is required" });
    }

    const params = {
        TableName: "UserProfile",
        Key: { userId: UserID }
    };

    try {
        const { Item } = await docClient.send(new GetCommand(params));
        if (Item) {
            return res.status(200).json(Item);
        } else {
            return res.status(404).json({ message: "Profile not found" });
        }
    } catch (error) {
        console.error("DynamoDB Error:", error);
        return res.status(500).json({ message: "Failed to fetch profile", error: error.message });
    }
}
