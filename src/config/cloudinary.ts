import { v2 as cloudinary } from 'cloudinary';

const requiredCloudinaryEnv = [ 'CLOUD_NAME', 'API_KEY', 'API_SECRET' ];
requiredCloudinaryEnv.forEach((key) => {
    if (!process.env[ key ]) {
        throw new Error(`⚠️ Missing environment variable: ${ key }`);
    }
});

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

export default cloudinary;