import { Router } from 'express';
import { createCasa, getCasaByName, getCasaById, deleteCasa, updateCasa } from '../controllers/casas.controllers';

const router = Router();

router.get('/', getCasaByName);
router.get('/:id', getCasaById);

router.post('/', createCasa);
router.put('/:id', updateCasa);
router.delete('/:id', deleteCasa);

export default router;