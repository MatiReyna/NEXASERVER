import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Casa } from '../models/casas.models';
import { deleteCloud } from '../helpers/imageAuxFunc';

export const createCasa = async (req: Request, res: Response) => {
    try {
        const { nameModel } = req.body;

        if (!nameModel || typeof nameModel !== 'string') {
            return res.status(400).json({ message: 'El campo nameModel es obligatorio y debe ser un string.' });
        }

        const findCasa = await Casa.findOne({ where: { nameModel } });

        if (findCasa) {
            return res.status(404).json({ message: `La casa ${nameModel} ya existe en la base de datos` })
        }

        const newCasa = await Casa.create(req.body);
        return res.status(201).json(newCasa);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const getCasaByName = async (req: Request, res: Response) => {
    try {
        const { name } = req.query;

        if (!name || typeof name !== 'string' || name.trim() === '') {
            return getAllCasas(req, res);
        }

        const casas = await Casa.findAll({
            where: {
                nameModel: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });

        if (!casas.length) {
            return res.status(404).json({ message: `No se encontró ninguna casa con el nombre '${name}'` })
        }
        return res.status(200).json(casas);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const getAllCasas = async (req: Request, res: Response) => {
    try {
        const allCasas = await Casa.findAll();
        return res.status(200).json(allCasas);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const getCasaById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const casa = await Casa.findByPk(id);

        if (!casa) {
            return res.status(404).json({ message: `No se encontró ninguna casa con el id '${id}'` })
        }

        return res.status(200).json(casa);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteCasa = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const casa = await Casa.findByPk(id);

        if (!casa) {
            return res.status(404).json({ message: `No se encontró ninguna casa con el id '${id}'` })
        }

        const allImages = [ ...casa.blueprints, ...casa.inside, ...casa.offside ];
        for (const image of allImages) {
            await deleteCloud(image);
        }

        await Casa.destroy({ where: { id } });
        return res.status(200).json({ message: `La casa con el id '${id}' ha sido eliminada exitosamente` });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateCasa = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const [ updated ] = await Casa.update(req.body, { where: { id } });
        if (!updated) {
            return res.status(404).json({ message: `No se encontró ninguna casa con el id '${id}'` });
        }
        return res.status(200).json({ message: `La casa con el id '${id}' ha sido actualizada exitosamente` });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};