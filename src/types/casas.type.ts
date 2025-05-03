export interface CasaAttributes {
    id?: string;
    nameModel: string;
    description: string;
    price: number;
    rooms: number;
    bathrooms: number;
    dimensions: number;
    blueprints: string[];
    inside: string[];
    offside: string[];
}