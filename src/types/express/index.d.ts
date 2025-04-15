declare namespace Express {
    export interface Request {
        file?: {
            path: string;
            filename: string;
            mimetype: string;
            originalname: string;
            size: number;
        }
    }
}