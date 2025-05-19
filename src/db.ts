import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const requiredEnv = [ 'DB_NAME', 'DB_USER', 'DB_PASSWORD', 'DB_HOST', 'DB_PORT' ];
requiredEnv.forEach((key) => {
    if (!process.env[ key ]) {
        throw new Error(`⚠️ Missing environment variable: ${ key }`);
    }
});

export const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string,
    {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        dialect: 'postgres',
        logging: false,
        dialectOptions: process.env.NODE_ENV === 'production'
            ? {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
            : undefined
    }
);