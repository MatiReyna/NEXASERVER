import { Request, Response } from 'express';
import { Brand } from '../models/brand.models';

export const getAllActiveBrands = async (_req: Request, res: Response) => {
    try {
        const activeBrands = await Brand.findAll({ where: { activo: true } });
        return res.status(200).json(activeBrands);
    } catch (error) {
        console.error('❌ Error al obtener las marcas activas:', error);
        return res.status(500).json({ message: 'Error al obtener las marcas activas' });
    }
};

export const getAllBrands = async (_req: Request, res: Response) => {
    try {
        const brands = await Brand.findAll();
        return res.status(200).json(brands);
    } catch (error) {
        console.error('❌ Error al obtener todas las marcas:', error);
        return res.status(500).json({ message: 'Error al obtener todas las marcas' });
    }
};

export const createBrand = async (req: Request, res: Response) => {
    try {
        const { name, logoUrl, activo, quote } = req.body;

        const newBrand = await Brand.create({ name, logoUrl, activo, quote });
        return res.status(201).json(newBrand);
    } catch (error) {
        console.error('❌ Error al crear la marca:', error);
        return res.status(500).json({ message: 'Error al crear la marca' });
    }
};

export const updateBrand = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const [ updated ] = await Brand.update(req.body, { where: { id } });

        if (!updated) return res.status(404).json({ message: 'La marca no existe' });

        const updateBrand = await Brand.findByPk(id);
        return res.status(200).json({ message: 'La marca ha sido actualizada', data: updateBrand });
    } catch (error) {
        console.error('❌ Error al actualizar la marca:', error);
        return res.status(500).json({ message: 'Error al actualizar la marca' });
    }
};

export const deleteBrand = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleted = await Brand.destroy({ where: { id } });

        if (!deleted) return res.status(404).json({ message: 'La marca no existe' });

        return res.status(200).json({ message: 'La marca ha sido eliminada' });
    } catch (error) {
        console.error('❌ Error al eliminar la marca:', error);
        return res.status(500).json({ message: 'Error al eliminar la marca' });
    }
};