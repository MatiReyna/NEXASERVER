import server from './src/app';
import { sequelize } from './src/db';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3001;

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Connection to PostgreSQL has been established successfully')
        console.log(`✅ Connected to DB: ${ process.env.DB_NAME || 'unknown' }`)

        server.listen(PORT, () => {
            console.log(`🌐 Server running on port: ${PORT} [ ${ process.env.NODE_ENV || 'development' } ]`)
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
};

startServer();