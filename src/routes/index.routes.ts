import { Router } from 'express';
import promosRoutes from './promos.routes';
import casasRoutes from './casas.routes';
import userRoutes from './user.routes'
import cloudinaryRoutes from './cloudinary.routes'

const router = Router();

router.use('/promos', promosRoutes);
router.use('/casas', casasRoutes);
router.use('/user', userRoutes);
router.use('/images', cloudinaryRoutes);

export default router;