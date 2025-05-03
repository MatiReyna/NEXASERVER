import { Router } from 'express';
import { body } from 'express-validator';
import { createUser, logIn } from '../controllers/user.controllers';

const router = Router();

router.post(
    '/',
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    createUser
);
router.post(
    '/login',
    body('email').isEmail(),
    body('password').exists(),
    logIn
);

export default router;