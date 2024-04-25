import { Router } from 'express';
import { createCasa, getCasaByName } from '../controllers/casas.controllers';

const router = Router();

router.post('/', createCasa);
router.get('/', getCasaByName);

export default router;