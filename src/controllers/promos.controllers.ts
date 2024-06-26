import promosInterface from "../types/promos.type";
import Promos from "../models/promos.models";

import { Request, Response } from "express";
import { deleteCloud } from '../helpers/imageAuxFunc';


export const createPromo = async (req: Request, res: Response) => {
    try {
        const promo: promosInterface = req.body;

        const findPromo = await Promos.findOne({ name: promo.name });
        if (findPromo) {
            return res.status(400).json({ message: `La promo ${promo.name} ya existe en la base de datos` });
        };

        const promoCount = await Promos.countDocuments();

        if (promoCount >= 4) {
            await Promos.findOneAndDelete({}, { sort: { createdAt: 1 } });
        }
        const newPromo = await new Promos(promo).save();
        return res.status(201).json(newPromo);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const getPromo = async (_req: Request, res: Response) => {
    try {
        const allPromos = await Promos.find();
        const promoCount = await Promos.countDocuments();

        allPromos.reverse();
        return res.status(200).json({ totalPromos: promoCount, allPromos });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const deletePromo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const findedPromo = await Promos.findById(id)
        if (!findedPromo) {
            return res.status(404).json(`No existe la promocion con id:${id}`);
        };

        await deleteCloud(findedPromo.url);

        await Promos.findByIdAndDelete(id);

        return res.status(200).json(`La promo ${findedPromo.name} fue eliminada correctamente`)
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}
