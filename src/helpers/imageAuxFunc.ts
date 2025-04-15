import * as fs from 'fs';
import * as path from 'path';
import { v2 } from 'cloudinary';

function getPublicIdFromUrl(imageUrl: string): string {
    const fileName = imageUrl.split('/').pop() || '';
    return fileName.split('.')[0];
};


export function deleteServerImg(directory: string) {

    if (fs.existsSync(directory)) {
        fs.readdirSync(directory).forEach((archive) => {

            const rutaArchivo = path.join(directory, archive);

            fs.unlinkSync(rutaArchivo);
        });
    }
    else { console.warn("La carpeta no existe:", directory) };
};

export async function deleteCloud(url: string) {
    try {
        const publicId = getPublicIdFromUrl(url);
        await v2.uploader.destroy(publicId);
    } catch (error) {
        console.error('Error al eliminar la imagen de Cloudinary:', error);
    }
};