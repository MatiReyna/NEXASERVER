import { Request, Response } from 'express';
import { User } from '../models/user.models';
import { Casa } from '../models/casas.models';
import { Purchase } from '../models/purchase.models';

export const createPurchase = async (req: Request, res: Response) => {
    try {
        const purchase = await Purchase.create(req.body);
        return res.status(201).json(purchase);
    } catch (error) {
        console.error('❌ Error al crear la compra:', error);
        return res.status(500).json({ message: 'Error al crear la compra' });
    }
};

export const getUserPurchases = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const purchases = await Purchase.findAll({
            where: { userId },
            include: [ Casa ]
        });
        return res.status(200).json(purchases);
    } catch (error) {
        console.error('❌ Error al obtener las compras del usuario:', error);
        return res.status(500).json({ message: 'Error al obtener las compras del usuario' });
    }
};

export const updatePurchase = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const [ updated ] = await Purchase.update(req.body, { where: { id } });

        if (!updated) return res.status(404).json({ message: 'Compra no encontrada' });

        const updatePurchase = await Purchase.findByPk(id);
        return res.status(200).json({ message: 'Compra actualizada', data: updatePurchase });
    } catch (error) {
        console.error('❌ Error al actualizar la compra:', error);
        return res.status(500).json({ message: 'Error al actualizar la compra' });
    }
};