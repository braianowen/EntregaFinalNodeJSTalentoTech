import { Router } from 'express';
import { login } from '../controladores/auth.controlador.js';

const router = Router();

// Login
router.post('/auth/login', login);

export default router; 