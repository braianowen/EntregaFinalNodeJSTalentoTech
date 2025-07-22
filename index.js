import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import rutasProductos from './rutas/productos.rutas.js';
import rutasAuth from './rutas/auth.rutas.js';

dotenv.config();

const app = express();
const PUERTO = process.env.PUERTO || 3000;

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use(rutasProductos);
app.use(rutasAuth);

// Middleware para rutas desconocidas
app.use((req, res, next) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto ${PUERTO}`);
}); 