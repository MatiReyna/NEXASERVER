import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';
import { CasaAttributes } from '../types/casas.type';

interface CasaInstance extends Model<CasaAttributes>, CasaAttributes {}

export const Casa = sequelize.define<CasaInstance>('Casa',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        nameModel: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [3, 50] }
        },
        mainImage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),  // 10 digits, 2 decimals.
            allowNull: false,
            validate: { min: 0 }
        },
        status: {
            type: DataTypes.ENUM('disponible', 'en desarrollo', 'prototipo'),
            allowNull: false,
            defaultValue: 'disponible'
        },
        visible: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        buildTime: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rooms: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: { min: 1 }
        },
        bathrooms: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        dimensions: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        blueprints: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        inside: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        outside: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        internalNotes: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, { tableName: 'casas', timestamps: true });