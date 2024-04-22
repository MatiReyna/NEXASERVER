import server from './src/app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const DB_CONECTION = process.env.DB_CONECTION;

async function startServer() {
    try {
        await mongoose.connect(DB_CONECTION)
        server.listen(PORT, () => {
            console.log(`Server raised in port: ${PORT}`)
        });
    } catch (error) {
        console.log(error)
    }
};

startServer();