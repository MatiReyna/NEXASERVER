import { Router } from 'express';
import { createBrand, getAllBrands, getAllActiveBrands, updateBrand, deleteBrand } from '../controllers/brand.controllers';

const router = Router();

// Público: obtener solo marcas activas.
router.get('/', getAllActiveBrands);

// Rutas privadas para administrador.
router.get('/all', getAllBrands);
router.post('/', createBrand);
router.put('/:id', updateBrand);
router.delete('/:id', deleteBrand);

export default router;