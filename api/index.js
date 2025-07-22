import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import rutasProductos from '../rutas/productos.rutas.js';
import rutasAuth from '../rutas/auth.rutas.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(rutasProductos);
app.use(rutasAuth);

app.use((req, res, next) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

export default app; 