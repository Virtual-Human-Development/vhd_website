// pages/api/getAllProfiles.js
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';

const client = new DynamoDBClient({ region: process.env.AWS_REGION });

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const params = {
        TableName: "UserProfile",
    };

    try {
        const { Items } = await client.send(new ScanCommand(params));
        const profiles = Items.map(item => unmarshall(item));
        res.status(200).json(profiles);
    } catch (error) {
        console.error("Error scanning DynamoDB:", error);
        res.status(500).json({ message: "Failed to fetch profiles", error: error.toString() });
    }
}
