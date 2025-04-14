import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const Casa = sequelize.define('Casa',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        nameModel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
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
            type: DataTypes.INTEGER,
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
    }, { tableName: 'casas', timestamps: false });