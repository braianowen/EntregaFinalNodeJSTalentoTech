import { Router } from 'express';
import {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  eliminarProducto
} from '../controladores/productos.controlador.js';
import { autenticar } from '../middlewares/autenticacion.js';

const router = Router();

// Obtener todos los productos
router.get('/api/products', obtenerProductos);

// Obtener producto por ID
router.get('/api/products/:id', obtenerProductoPorId);

// Crear producto (protegido)
router.post('/api/products/create', autenticar, crearProducto);

// Eliminar producto (protegido)
router.delete('/api/products/:id', autenticar, eliminarProducto);

export default router; 