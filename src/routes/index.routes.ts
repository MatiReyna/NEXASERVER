import { Router } from 'express';
import promosRoutes from './promos.routes';

const router = Router();

router.use("/promos", promosRoutes);

export default router;