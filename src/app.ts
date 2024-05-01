import express from 'express';
import { Request, Response, NextFunction } from 'express';
import routes from './routes/index.routes'

const server = express();

server.use(express.json());

server.use((_req:Request, res:Response, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use("/", routes);

server.use((err: Error, _req:Request, res:Response, _next:NextFunction) => {
    console.error(err.stack);
    return res.status(500).send('Algo salió mal!');
});

export default server;