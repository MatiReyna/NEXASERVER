import casasInterface from '../types/casas.type';
import Casas from '../models/casas.models';
import { Request, Response } from 'express';

export const createCasa = async (req: Request, res: Response) => {
    try {
        const casa: casasInterface = req.body;

        const findCasa = await Casas.findOne({ nameModel: casa.nameModel });

        if (findCasa) {
            return res.status(400).json({ message: `La casa ${casa.nameModel} ya existe en la base de datos` });
        }

        const newCasa = await new Casas(casa).save();
        return res.status(201).json(newCasa);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};