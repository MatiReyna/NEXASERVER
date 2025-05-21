import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';
import { PurchaseAttributes } from '../types/purchase.type';

interface PurchaseInstance extends Model<PurchaseAttributes>, PurchaseAttributes {}

export const Purchase = sequelize.define<PurchaseInstance>('Purchase', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    casaId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    paymentMethod: {
        type: DataTypes.ENUM('contado', 'cuotas'),
        allowNull: false
    },
    amountPaid: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0
    },
    installments: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    progress: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 100
        }
    },
    estimatedDelivery: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('en progreso', 'finalizado', 'cancelado'),
        defaultValue: 'en progreso'
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, { tableName: 'purchases', timestamps: true });