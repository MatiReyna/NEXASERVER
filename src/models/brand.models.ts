import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';
import { BrandAttributes } from '../types/brand.types';

interface BrandInstance extends Model<BrandAttributes>, BrandAttributes {}

export const Brand = sequelize.define<BrandInstance>('Brand', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    logoUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    quote: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, { tableName: 'brands', timestamps: true });