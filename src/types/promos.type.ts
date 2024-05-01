import { Document } from 'mongoose';

export default interface promosInterface extends Document {
    name: string;
    url: string;
    createdAt: Date;
};