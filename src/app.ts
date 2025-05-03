import express from 'express';
import { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.routes';

const server = express();

server.use(express.json());

server.use(express.urlencoded({ extended: true }));

server.use(cors());

server.use(morgan('dev'));

server.use("/", routes);

server.use((err: Error, _req:Request, res:Response, _next:NextFunction) => {
    console.error('❌ Error stack:', err.stack);
    return res.status(500).json({
        message: 'Something went wrong',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

export default server;