// pages/api/generatePresignedUrl.js

res.setHeader('Access-Control-Allow-Origin', '*'); // Or your specific origin instead of '*'
res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

import AWS from 'aws-sdk';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        // Configure AWS with your access and secret keys and your region
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
        });

        const s3 = new AWS.S3();
        const bucketName = 'memberprofilepictures';
        const key = `uploads/${Date.now()}-user-image`;

        const params = {
            Bucket: bucketName,
            Key: key,
            Expires: 60 * 50, // Expires in 5 minutes
            ContentType: 'image/jpeg',
        };

        try {
            const url = await s3.getSignedUrlPromise('putObject', params);
            res.status(200).json({ url, key });
        } catch (error) {
            console.error('Error generating presigned URL', error);
            res.status(500).json({ error: 'Error generating presigned URL' });
        }
    } else {
        // Handle any requests that aren't GET
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
