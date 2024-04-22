import server from './src/app';
const PORT = 3001;
import mongoose from 'mongoose';

async function startServer() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/NexaConstructora')
        server.listen(PORT, () => {
            console.log(`Server raised in port: ${PORT}`)
        });
    } catch (error) {
        console.log(error)
    }
};

startServer();