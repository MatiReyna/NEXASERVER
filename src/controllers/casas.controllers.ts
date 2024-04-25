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
        const { nameModel } = req.query;

        const findCasa = await Casas.findOne({ nameModel });

        if (!findCasa) {
            return res.status(404).json({ message: `No se encontró ninguna casa con el nombre '${nameModel}'`})
        } else {
            return res.status(200).json(findCasa)
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getAllCasas = async (req: Request, res: Response) => {
    try {
        const dataCasas = await Casas.find();

        if (!dataCasas || dataCasas.length === 0) {
            return res.status(404).json({ message: 'No se encontraron casas en la base de datos' })
        } else {
            const formatteData = {
                message: 'Lista de casas',
                data: dataCasas.map((casa) => ({
                    nameModel: casa.nameModel,
                    price: casa.price,
                    rooms: casa.rooms,
                    bathroom: casa.bathroom,
                    dimensions: casa.dimensions,
                    blueprints: casa.blueprints,
                    inside: casa.inside,
                    offside: casa.offside
                }))
            }
            return formatteData;
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};