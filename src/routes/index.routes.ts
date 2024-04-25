import { Router } from 'express';
import promosRoutes from './promos.routes';
import casasRoutes from './casas.routes';

const router = Router();

router.use("/promos", promosRoutes);
router.use('/casas', casasRoutes);

export default router;