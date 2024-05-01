import { Router } from 'express';
import { createUser, logIn } from '../controllers/user.controllers';

const router = Router();

router.post("/", createUser);
router.post("/logIn", logIn);

export default router;