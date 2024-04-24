import { Document } from 'mongoose';

export default interface casasInterface extends Document {
    nameModel: string;
    price: number;
    rooms: number;
    bathroom: number;
    dimensions: number;
    blueprints: string[];
    inside: string[];
    offside: string[];
};