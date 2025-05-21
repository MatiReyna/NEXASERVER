import { Router } from 'express';
import { createPurchase, getUserPurchases, updatePurchase } from '../controllers/purchase.controllers';

const router = Router();

router.post('/', createPurchase);
router.get('/:userId', getUserPurchases);
router.put('/:id', updatePurchase);

export default router;