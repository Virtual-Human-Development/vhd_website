const express = require('express');
const AWS = require('aws-sdk');
const app = express();
const port = process.env.PORT || 3000; // Use any port appropriate for your configuration
require('dotenv').config({ path: '.env.local' });


// Configure the AWS SDK with environment variables
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

const cors = require('cors');
app.use(cors());

app.use(express.json());

// Define the route for generating a presigned URL
app.get('/generate-presigned-url', async (req, res) => {
    const bucketName = 'memberprofilepictures';
    const key = `uploads/${Date.now()}-user-image`;

    const params = {
        Bucket: bucketName,
        Key: key,
        Expires: 60 * 50, // URL expires in 5 minutes. Adjust this value if necessary.
        ContentType: 'image/jpeg',
    };

    try {
        const url = await s3.getSignedUrlPromise('putObject', params);
        res.json({ url, key });
    } catch (error) {
        console.error('Error generating presigned URL', error);
        res.status(500).json({ error: 'Error generating presigned URL' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
