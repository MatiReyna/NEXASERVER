export interface CasaAttributes {
  id?: string;
  slug: string;
  nameModel: string;
  description: string;
  price: number;
  rooms: number;
  bathrooms: number;
  dimensions: number;
  mainImage: string;
  category: string;
  tag?: string;
  buildTime?: string;
  status: 'disponible' | 'en desarrollo' | 'prototipo';
  visible: boolean;
  blueprints: string[];
  inside: string[];
  outside: string[];
  internalNotes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}