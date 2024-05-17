import { Router } from 'express';
import { uploadImage, deleteImage } from '../controllers/cloudinary.controller';

import multer from 'multer';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), uploadImage);
router.delete('/',deleteImage);

export default router;
