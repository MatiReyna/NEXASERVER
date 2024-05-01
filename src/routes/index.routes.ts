import { Router } from 'express';
import promosRoutes from './promos.routes';
import casasRoutes from './casas.routes';
import userRoutes from './user.routes'

const router = Router();

router.use('/promos', promosRoutes);
router.use('/casas', casasRoutes);
router.use('/user', userRoutes);

export default router;