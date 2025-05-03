import { Request, Response } from 'express';
import { deleteCloud, deleteServerImg } from '../helpers/imageAuxFunc';

import dotenv from 'dotenv';
import * as path from 'path';

import cloudinary from '../config/cloudinary';
const { uploader } = cloudinary;

dotenv.config();

if (!process.env.CLOUD_NAME || !process.env.API_KEY || !process.env.API_SECRET) {
  console.error('Faltan variables de entorno de Cloudinary');
  process.exit(1);
}

export const uploadImage = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se ha subido ninguna imagen' });
    }

    const result = await uploader.upload(req.file.path);
    res.status(200).json({ imageUrl: result.secure_url, public_id: result.public_id });

    const directory = path.join('uploads');
    deleteServerImg(directory);

  } catch (error) {
    console.error('Error al subir la imagen:', error);
    res.status(500).json({ error: 'Error al subir la imagen a Cloudinary' });
  }
};

export const deleteImage = async (req: Request, res: Response) => {
  const { imageUrl } = req.body;

  if (!imageUrl) {
    return res.status(400).json({ error: 'Falta la URL de la imagen a eliminar' });
  }

  try {
    await deleteCloud(imageUrl);
    res.status(200).json({ message: 'Imagen eliminada exitosamente de Cloudinary' });
  } catch (error) {
    console.error('Error al eliminar la imagen de Cloudinary:', error);
    res.status(500).json({ error: 'Error al eliminar la imagen de Cloudinary' });
  }
};