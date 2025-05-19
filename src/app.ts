import express from 'express';
import { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.routes';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const allowedOrigins = [ 'http://localhost:5173', 'https://nexaclient.vercel.app' ]
server.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

server.use(morgan('dev'));
server.use('/', routes);

server.use((_req, res) => {
    res.status(404).json({ message: 'Route not found' })
});

server.use((err: Error, _req:Request, res:Response, _next:NextFunction) => {
    console.error('❌ Error stack:', err.stack);
    return res.status(500).json({
        message: 'Something went wrong',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});

export default server;