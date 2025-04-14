import server from './src/app';
import { sequelize } from './src/db';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3001;

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Connection to PostgreSQL has been established successfullu')

        server.listen(PORT, () => {
            console.log(`Server raised in port: ${PORT}`)
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
};

startServer();