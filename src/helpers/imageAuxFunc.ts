import * as fs from 'fs';
import * as path from 'path';

export function getPublicIdFromUrl(imageUrl: string) {

    const startIndex = imageUrl.lastIndexOf('/') + 1; 
    const endIndex = imageUrl.lastIndexOf('.'); 

   
    const publicId = imageUrl.substring(startIndex, endIndex);

    return publicId;
};


export function deleteServerImg(directory: string) {

    if (fs.existsSync(directory)) {
        fs.readdirSync(directory).forEach((archive) => {

            const rutaArchivo = path.join(directory, archive);

            fs.unlinkSync(rutaArchivo);
        });
    }
    else { return "La Carpeta es incorrecta" };
}