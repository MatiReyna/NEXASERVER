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
        nameModel: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [3, 50] }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: { min: 0 }
        },
        rooms: {
            type: DataTypes.INTEGER,
            allowNull: false
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
        offside: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        }
    }, { tableName: 'casas', timestamps: true });