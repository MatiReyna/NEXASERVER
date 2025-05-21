import { Router } from 'express';
import { uploadImage, deleteImage } from '../controllers/cloudinary.controller';

import multer from 'multer';

const router = Router();
const upload = multer({
    dest: 'uploads/',
    limits: { fileSize: 2 * 1024 * 1024 }
});

router.post('/upload', upload.single('image'), uploadImage);
router.delete('/remove', deleteImage);

export default router;