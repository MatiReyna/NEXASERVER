import { Router } from 'express';
import casasRoutes from './casas.routes';
import userRoutes from './user.routes'
import cloudinaryRoutes from './cloudinary.routes'

const router = Router();

router.use('/casas', casasRoutes);
router.use('/auth', userRoutes);
router.use('/media', cloudinaryRoutes);

export default router;