import { Router } from 'express';
import casasRoutes from './casas.routes';
import userRoutes from './user.routes';
import purchaseRoutes from './purchase.routes';
import cloudinaryRoutes from './cloudinary.routes';

const router = Router();

router.use('/casas', casasRoutes);
router.use('/users', userRoutes);
router.use('/purchases', purchaseRoutes);

router.use('/media', cloudinaryRoutes);

export default router;