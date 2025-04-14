import { Router } from 'express';
import casasRoutes from './casas.routes';
import userRoutes from './user.routes'
import cloudinaryRoutes from './cloudinary.routes'

const router = Router();

router.use('/casas', casasRoutes);
router.use('/users', userRoutes);
router.use('/images', cloudinaryRoutes);

export default router;