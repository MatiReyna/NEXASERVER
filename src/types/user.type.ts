export interface UserAttributes {
    id?: string;
    email: string;
    password: string;
    name?: string;
    role: 'admin' | 'user';
    createdAt?: Date;
    updatedAt?: Date;
}