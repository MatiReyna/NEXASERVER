import casasInterface from '../types/casas.type';
import Casas from '../models/casas.models';
import { Request, Response } from 'express';

export const createCasa = async (req: Request, res: Response) => {
    try {
        const casa: casasInterface = req.body;

        const findCasa = await Casas.findOne({ nameModel: casa.nameModel });

        if (findCasa) {
            return res.status(404).json({ message: `La casa ${casa.nameModel} ya existe en la base de datos` })
        }

        const newCasa = await new Casas(casa).save();
        return res.status(201).json(newCasa);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getCasaByName = async (req: Request, res: Response) => {
    try {
        const { name } = req.query;
        if(!name || typeof name !== 'string' || name.trim() === '') {
            return getAllCasas(req, res);
        };
        const findCasa = await Casas.find({ nameModel: { $regex: new RegExp(name, 'i') } });

        if (!findCasa) {
            return res.status(404).json({ message: `No se encontró ninguna casa con el nombre '${name}'`})
        } else {
            return res.status(200).json(findCasa)
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getAllCasas = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    try {
        const option = {
            page,
            limit
        };

        const allCasas = await Casas.paginate({}, option)

        return res.status(200).json(allCasas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};