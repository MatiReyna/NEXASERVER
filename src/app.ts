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
    console.error(err.stack);
    return res.status(500).send('Algo salió mal!');
});

export default server;