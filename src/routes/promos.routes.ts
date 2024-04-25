import { Router } from 'express';
import { deletePromo, getPromo, createPromo } from '../controllers/promos.controllers';

const router = Router();

router.get("/", getPromo);

router.post("/", createPromo);
router.delete("/:id", deletePromo);

export default router;