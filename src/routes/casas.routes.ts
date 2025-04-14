import { Router } from 'express';
import { createCasa, getCasaByName, getCasaById, deleteCasa, updateCasa, getAllCasas } from '../controllers/casas.controllers';

const router = Router();

router.post('/', createCasa);
router.put('/:id', updateCasa);
router.delete('/:id', deleteCasa);
router.get('/search', getCasaByName);
router.get('/:id', getCasaById);
router.get('/', getAllCasas);

export default router;