import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';
import { UserAttributes } from '../types/user.type';

interface UserInstance extends Model<UserAttributes>, UserAttributes {}

export const User = sequelize.define<UserInstance>('User',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 100]
            }
        },
        role: {
            type: DataTypes.ENUM('admin', 'user'),
            allowNull: false,
            defaultValue: 'user'
        }
    }, { tableName: 'users', timestamps: true });