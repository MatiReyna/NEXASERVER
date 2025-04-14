export interface CasaAttributes {
    id?: string;
    nameModel: string;
    description: string;
    price: number;
    rooms: number;
    bathrooms: number;
    dimensions: number;
    blueprint: string[];
    inside: string[];
    outside: string[];
};